import { fromArray, newMap, newSet } from '~/shims';
import { loggerFactory } from '../../shared';
import { ReconciliationMode } from '../../shared/constants';
import { PartitionSet, SetComparison } from '../../shared/data-structures';
import { Ref, UniqueId } from '../../shared/utils';
import { Context } from '../context';
import { IncompatibleAEScripts } from '../errors';
import { AudienceContext } from '../filters';
import { AlwaysExecuteScriptExecutor, ExperimentRecorder, TriggerManager } from '../helpers';
import { ExperimentPlan } from './experiment.plan';
import { belongsToExperiment, partitionFn } from './helpers';
import { ExperimentId, PlanId } from './identifiers';


let count: number = 1;

export interface StageDiff {
	plansToAdd: Set<PlanId>;
	plansToRevert: Set<PlanId>;
}

export class Stage {
	public readonly number: number;
	public readonly context: Context;
	public readonly plans = newMap<PlanId, ExperimentPlan>();

	get audience() {
		return this.audienceRef.current;
	}

	get isEmpty() {
		return this.plans.size === 0;
	}

	get logger() {
		return this.context.logger;
	}

	constructor (
		public readonly uid: UniqueId,
		public readonly aeExecutor: AlwaysExecuteScriptExecutor,
		public readonly experimentRecorder: ExperimentRecorder,
		public readonly triggerManager: TriggerManager,
		private audienceRef: Ref<AudienceContext>,
		context: Context
	) {
		this.number = count;
		this.context = {
			...context as Context,
			logger: loggerFactory('Runtime', `Stage ${this.number}`)
		};

		count += 1;
	}

	reconcile(previous: Map<string, ExperimentPlan>): StageDiff {
		const { config } = this.context;

		const { items, partitions } = PartitionSet.compare(
			previous.keys(),
			this.plans.keys(),
			partitionFn
		);

		return {
			plansToAdd: items.added,
			plansToRevert: (config.reconcile === ReconciliationMode.Revert)
				? items.removed
				: getSwaps(items, partitions.unchanged)
		};
	}

	runAlwaysExecute() {
		if (!this.aeExecutor.canStageProceed()) {
			throw new IncompatibleAEScripts(this);
		}

		this.aeExecutor.execute(this.context);
	}
}

function getSwaps(comparison: SetComparison<PlanId>, unchanged: Set<ExperimentId>): Set<PlanId> {
	const { removed } = comparison;
	const swaps = newSet<PlanId>();

	for (const eid of fromArray(unchanged)) {
		const fn = (item: string) => belongsToExperiment(item, eid);

		for (const cid of fromArray(removed).filter(fn)) {
			swaps.add(cid);
		}
	}

	return swaps;
}
