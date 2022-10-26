/// <reference path="../globals.d.ts" />

import { performance, PromiseShim } from '~/external-shims';
import { URLSearchParams } from '~/shims';
import { getTracker, loggerFactory, ScoutConfig, Tracker } from '../shared';
import { Mark, MUTEX_KEY } from '../shared/constants';
import { emitter, LifecycleHook } from '../shared/events';
import { addEventListener, document } from '../shared/mangleable';
import { Mutex, UniqueId, uniqueId } from '../shared/utils';
import { CookieKey, getCookie, inflate, LocalStorageKey } from '../shared/utils/storage';
import * as lsm from '../shared/utils/storage/local-storage';
import { ExperimentsRecord } from '../runtime/helpers';
import { HaltSignal, isInEditorMode, modes } from './modes';
import { isInInteractiveMode } from './modes/interactive.mode';
import { flightCheck, handlePreload, loadScript } from './utils';


/**
 * The `Scout` object is a lightweight script that is inserted into the head of a page. It is responsible
 * for checking browser requirements, initializing identification tokens, retrieving the execution plan,
 * and reconciling plans if necessary.
 */
export class Scout implements IScout {
	private readonly logger = loggerFactory('Scout');
	private readonly config: ScoutConfig;
	private readonly _tracker: Tracker;
	private started: boolean = false;

	private readonly _instanceId = uniqueId();

	get instanceId() {
		return this._instanceId;
	}

	/**
	 * An object tracking the consistent ids in use such as the uid and sid
	 */
	get tracker(): Tracker {
		return this._tracker;
	}

	constructor(config: ScoutConfig) {
		this.config = config;
		this._tracker = getTracker(config.cookieDomains);

		handlePreload();

		addEventListener('readystatechange', () => {
			const state = document.readyState;

			this.logger.debug(`Ready State: ${state}`);
			performance.mark(`ready-state-${state}` as Mark);
		});
	}

	/**
	 * @hidden
	 */
	start(): PromiseShim<any> {
		if (this.started) {
			return PromiseShim.resolve();
		}

		const chain: PromiseShim<any> = modes
			.reduce((acc, mode) =>
				mode.shouldActivate(this.config)
					? acc.then(() => mode.activate(this.config, this.logger))
					: acc
			, PromiseShim.resolve());

		return chain
			.then(() => {
				if (!flightCheck()) {
					this.logger.debug('Evolv will not launch');
					return PromiseShim.resolve();
				}

				this.started = true;

				emitter.emit(LifecycleHook.Initialize, { config: this.config });

				this.logger.debug(`Started (instance: ${this.instanceId})`);
				this.logger.debug(`Ready State: ${document.readyState}`);

				return PromiseShim.all([
					this.loadRuntime(),
					...(this.config.autoLoad && !isInEditorMode() && !isInInteractiveMode())
						? [this.loadExecutionPlan()]
						: []
				]) as PromiseShim<any>;
			})
			.catch(err => {
				if (err instanceof HaltSignal) {
					this.logger.info(err.message);
					return;
				}

				this.logger.error(err);
			});
	}

	/**
	 * @hidden
	 */
	loadRuntime(): PromiseShim<void> {
		return loadScript(this.config.sdkUrl, this.config.sdkUrl.replace(/(\.min)?\.js$/, '$1.mjs'))
			.catch(err => {
				this.logger.warn('Runtime failed to load');
			});
	}

	/**
	 * @hidden
	 */
	loadExecutionPlan(): PromiseShim<void> {
		// FIXME: Temporarily disabling reconciliation
		// const shouldReconcile = lsm.has(LocalStorageKey.PlanVersion);
		const shouldReconcile = false;

		this.logger.info('Reconciliation has been disabled');

		return this.retrieveExecutionPlan()
			.then(() => {
				return (shouldReconcile)
					? this.reconcile()
					: PromiseShim.resolve();
			});
	}

	/**
	 * @hidden
	 */
	retrieveExecutionPlan(): PromiseShim<void> {
		// FIXME: Temporarily disabling reconciliation.
		// Hardcoded version makes scout bust the cache one more time to retrieve with new cache expiration
		// const version = lsm.get(LocalStorageKey.PlanVersion) || uniqueId();
		const version = 'browser-cache';
		const mutex = new Mutex(MUTEX_KEY, { instanceId: this.instanceId });

		return PromiseShim.resolve()
			.then(() => {
				return mutex.acquire()
					.then(() => loadScript(this.getExecutionPlanUrl(version)))
					.catch(err => {
						this.logger.warn('Execution plan failed to load');
					})
					.finally(() => {
						mutex.release();
					});
			})
			.then(() => {
				performance.mark(Mark.ExecutionPlanRetrieved);
				this.logger.debug('Execution plan was retrieved successfully');
			});
	}

	/**
	 * @hidden
	 */
	reconcile() {
		if (!lsm.has(LocalStorageKey.PlanVersion)) {
			return PromiseShim.resolve();
		}

		const version = uniqueId();

		return loadScript(this.getExecutionPlanUrl(version))
			.catch(err => {
				this.logger.debug('Error occurred during reconciliation');
			});
	}

	private getExecutionPlanUrl(version: UniqueId): string {
		let { environmentId } = this.config;
		const params = new URLSearchParams();
		const { confirmed, excluded } = this.getCidLists();

		params.append('version', version);
		params.append('uid', this.tracker.uid);
		params.append('sid', this.tracker.sid);
		params.append('did', this.tracker.did);

		params.append('cids', confirmed);
		params.append('excl', excluded);

		if (this.tracker.previewId) {
			params.append('previewid', this.tracker.previewId);
		}

		if (this.tracker.previewCid) {
			params.append('previewcid', this.tracker.previewCid);
		}

		if (this.tracker.candidateToken) {
			environmentId = this.tracker.candidateToken;
		}

		return `${this.config.apiUrl}/v1/${environmentId}/execution-plans?${params}`;
	}

	private getCidLists() {
		const cids = getCookie<ExperimentsRecord>(CookieKey.CandidateIds)!;

		if (!cids) {
			return {
				confirmed: '',
				excluded: ''
			};
		}

		const { cf, f } = inflate(cids, 'l');
		const excluded = f
			.filter(cid => cid.startsWith('*:'))
			.map(cid => cid.replace(/^\*:/, ''));

		return {
			confirmed: cf.join(','),
			excluded: excluded.join(',')
		};
	}
}
