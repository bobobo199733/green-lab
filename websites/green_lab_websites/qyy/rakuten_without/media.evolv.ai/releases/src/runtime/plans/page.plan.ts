import { newSet } from '~/shims';
import { Api } from '../../api';
import { LifecycleHook } from '../../shared/events';
import { Context } from '../context';
import { Mutator } from '../mutations';
import { Predicate } from '../predicate';
import { ExperimentPlan } from './experiment.plan';
import {toEidCidPair} from './identifiers';


export type Initializer = (api: Api) => void;

export interface Page {
	id: string;
	type: 'url' | 'manual';
	isEntryPoint: boolean;
}

export class PagePlan {
	public readonly context: Context;
	private readonly api: Api;
	private readonly mutators = newSet<Mutator>();
	private readonly initializers: Initializer[] = [];

	get logger() {
		return this.context.logger;
	}

	constructor(
		public readonly page: Page,
		public readonly parent: ExperimentPlan,
		public readonly predicate: Predicate,
		context: Context
	) {
		this.context = {
			...context as Context,
			logger: context.logger.clone(`Page ${this.page.id}`)
		};

		this.api = new Api(this.context.logger);
	}

	addInitializer(initializer: Initializer) {
		this.initializers.push(initializer);
	}

	addMutator(mutator: Mutator) {
		this.mutators.add(mutator);
	}

	run(force: boolean = false): boolean {
		if (force || this.predicate(this.context)) {
			const { emit } = this.context;
			const predicateStr = `${this.predicate.toString()}`;
			this.logger.debug(`Predicate hit: ${predicateStr}`);

			this.initializers.forEach(fn => {
				fn(this.api);
			});

			this.mutators.forEach(mutator => {
				mutator.mutate(this.context);
			});

			const { eid, cid } = toEidCidPair(this.parent.id);

			emit(LifecycleHook.Activated, {
				planId: this.parent.id,
				experimentId: eid,
				candidateId: cid,
				predicate: predicateStr,
				page: this.page
			});

			return true;
		}

		return false;
	}

	revert(force: boolean = false): boolean {
		if (force || this.predicate(this.context)) {
			const { emit } = this.context;
			const predicateStr = `${this.predicate.toString()}`;

			this.mutators.forEach(mutator => {
				mutator.revert(this.context);
			});

			this.api.dispose();

			const { eid, cid } = toEidCidPair(this.parent.id);

			emit(LifecycleHook.Reverted, {
				planId: this.parent.id,
				experimentId: eid,
				candidateId: cid,
				predicate: predicateStr,
				page: this.page
			});

			return true;
		}

		return false;
	}
}
