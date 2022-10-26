import { Stage } from '../plans';

export class IncompatibleAEScripts extends Error {
	constructor(stage: Stage) {
		super(`Stage ${stage.number} cannot proceed because its always-execute scripts differ from the previous stage`);
	}
}
