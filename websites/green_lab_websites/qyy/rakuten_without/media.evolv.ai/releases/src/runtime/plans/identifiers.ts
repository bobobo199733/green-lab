/**
 * Annotation type for strings that represent a candidate ID.
 *
 * @description
 * A candidate ID embedes its associated experiment ID within itself and has the format "[checksum]:[experimentId]".
 * Example: "33bbb29669c47c38855bf99f125133af:8a0177be67".
 */
export type CandidateId = string;

/**
 * Annotation type for strings that represent an experiment ID.
 */
export type ExperimentId = string;

/**
 * Annotation type for strings that represent a plan ID
 *
 * @description
 * In most scenarios a plan ID is equivalent in format to a candidate ID. However, in the case of an excluded
 * experiment, a plan ID will have the format "*:[experimentId]".
 */
export type PlanId = string;


export interface EidCidPair {
	eid: ExperimentId;
	cid: CandidateId;
}

export function toEidCidPair(candidateId: CandidateId): EidCidPair {
	const [, eid] = candidateId.split(':');

	return {
		eid,
		cid: candidateId
	};
}
