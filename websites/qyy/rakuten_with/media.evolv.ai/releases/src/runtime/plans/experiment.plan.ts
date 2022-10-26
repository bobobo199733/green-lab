import { DEFAULT_RENDER_TIMEOUT } from '~/configuration';
import { performance } from '~/external-shims';
import { fromArray, newSet } from '~/shims';

import { Mark } from '../../shared/constants';
import { addEventListener } from '../../shared/mangleable';
import { emitter, LifecycleHook } from '../../shared/events';
import { Context } from '../context';
import { evaluateFilters, Filter } from '../filters';
import { ExperimentRecorder } from '../helpers';
import {CandidateId, toEidCidPair} from './identifiers';
import { PagePlan } from './page.plan';
import { Stage } from './stage';


export interface Settings {
	candidateId: CandidateId;

	/**
	 * Amount of time that experiment has to render.
	 */
	renderTimeout: number;
}

export class ExperimentPlan {
	public readonly context: Context;
	public readonly pages = newSet<PagePlan>();

	public filters = newSet<Filter>();
	private elapsedTime: number = Infinity;
	private readonly settings: Settings;

	private _applied: boolean = false;

	get applied() {
		return this._applied;
	}

	get audienceContext() {
		return this.stage.audience;
	}

	get entryPages() {
		return fromArray(this.pages).filter(pagePlan => pagePlan.page.isEntryPoint);
	}

	get filterResults() {
		return evaluateFilters(this.filters, this.audienceContext);
	}

	get id() {
		return this.settings.candidateId;
	}

	get candidateId() {
		return this.settings.candidateId;
	}

	get experimentId() {
		return this.settings.candidateId.replace(/^\w+:/, '');
	}

	get logger() {
		return this.context.logger;
	}

	constructor(
		settings: Pick<Settings, 'candidateId'> & Partial<Settings>,
		private readonly stage: Stage,
		private readonly recorder: ExperimentRecorder
	) {
		this.settings = {
			renderTimeout: DEFAULT_RENDER_TIMEOUT,
			...settings
		};

		this.context = {
			...stage.context as Context,
			logger: stage.context.logger.clone(`Experiment ${this.id}`)
		};

		/* Handling for single-page applications. */
		addEventListener('popstate', this.onPopState);
		addEventListener('pushstate_evolv', this.onPushState);

		this.markTime();
	}

	private onPopState = () => {
		this.logger.debug('popstate');

		this.revert(true);
		this.run();
	};

	private onPushState = () => {
		this.logger.debug('pushstate');

		this.revert(true);
		this.run();
	};

	run(force: boolean = false): boolean {
		const exceeded = this.elapsedTime - this.settings.renderTimeout;
		const contaminated = this.recorder.checkIfContaminated(this.candidateId);
		const { eid, cid } = toEidCidPair(this.candidateId);

		if (!this.filterResults.passed) {
			return false;
		}

		if (contaminated) {
			emitter.emit(LifecycleHook.NotRendered, {
				candidateId: cid,
				experimentId: eid,
				planId: this.id,
				reason: 'contaminated'
			});
			this.logger.warn(`Plan has been contaminated and therefore will not run`);
			return false;
		}

		if (!force && exceeded > 0) {
			this.recorder.markContaminated(this.candidateId, 'timeout-exceeded', `rendertime: ${this.elapsedTime}`);
			emitter.emit(LifecycleHook.NotRendered, {
				candidateId: cid,
				experimentId: eid,
				planId: this.id,
				reason: 'timeout-exceeded'
			});

			this.logger.warn(`Render timeout exceeded by ${exceeded / 1000} seconds`);
			return false;
		}

		try {
			this._applied = this.runApplicablePlans(force);

			if (!this._applied) {
				return true;
			}

			this.recorder.markConfirmed(this.candidateId);
			emitter.emit(LifecycleHook.Rendered, {
				candidateId: cid,
				experimentId: eid,
				planId: this.id
			});

			return true;
		} catch (e) {
			this.recorder.markContaminated(this.candidateId, 'error-thrown', `${e.message}`);
			emitter.emit(LifecycleHook.NotRendered, {
				candidateId: cid,
				experimentId: eid,
				planId: this.id,
				reason: 'error-thrown'
			});

			this.revert();

			return false;
		}
	}

	revert(force: boolean = false) {
		this.pages.forEach(page => {
			page.revert(force);
		});

		this._applied = false;
	}

	private markTime() {
		if (performance.getEntriesByName(Mark.ReadyStateInteractive).length === 0) {
			this.elapsedTime = 0;
		} else {
			performance.measure(Mark.ElapsedSinceInteractive, Mark.ReadyStateInteractive);

			const entries = performance.getEntriesByName(Mark.ElapsedSinceInteractive);
			const last = entries[entries.length - 1];

			this.elapsedTime = last.duration;
		}
	}

	private runApplicablePlans(force: boolean = false): boolean {
		const confirmed = this.recorder.checkIfConfirmed(this.candidateId);
		const plansToRun = (confirmed)
			? this.pages
			: this.entryPages;

		if (!confirmed) {
			this.logger.debug('Evaluating entry routes only because experiment has not yet confirmed');
		}

		let applied = false;

		for (const page of fromArray(plansToRun)) {
			const succeeded = page.run(force);

			if (succeeded) {
				applied = true;
			}
		}

		return applied;
	}
}
