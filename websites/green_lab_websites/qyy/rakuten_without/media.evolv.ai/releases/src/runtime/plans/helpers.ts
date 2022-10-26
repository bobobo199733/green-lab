import { fromArray } from '~/shims';
import { PartitionSet } from '../../shared/data-structures';
import { filter } from '../../shared/utils/map';
import { ExperimentPlan } from './experiment.plan';
import { CandidateId, ExperimentId, PlanId, toEidCidPair } from './identifiers';


/**
 * Returns whether candidate belongs to an experiment with ID = `eid`.
 *
 * @param cid
 * @param eid
 */
export function belongsToExperiment(cid: CandidateId, eid: ExperimentId) {
	return (toEidCidPair(cid).eid === eid);
}

/**
 * Returns plans whose candidates do not belong to an experiment already represented by
 * a member of the `exclude` set.
 *
 * @param plans
 * @param exclude
 */
export function excludePlans(plans: Map<PlanId, ExperimentPlan>, exclude: Set<PlanId>) {
	const set = new PartitionSet(partitionFn, exclude);

	return filter(plans, ([cid]) =>
		!fromArray(set.partitions.keys())
			.some(eid => belongsToExperiment(cid, eid))
	);
}

/**
 * Partitioning function for candidates into experiment groups.
 *
 * @param item
 */
export function partitionFn(item: PlanId) {
	return toEidCidPair(item).eid;
}
