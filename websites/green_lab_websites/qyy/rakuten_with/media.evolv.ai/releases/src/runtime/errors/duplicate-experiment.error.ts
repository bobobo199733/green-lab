
export class DuplicateExperiment extends Error {
	constructor(experimentId: number | string) {
		super(`Experiment ${experimentId} has already been added.`);
	}
}
