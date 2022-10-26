import { newSet } from '~/shims';
import { Logger, ScoutConfig } from '../shared';
import { EmitFunction } from '../shared/events';


/**
 * The `State` object serves to augment the basic predicate context with extra
 * data to compare against.
 */
export class State {
	manualActivations = newSet<string>();

	constructor() {
		Object.freeze(this);
	}
}

export interface Context {
	readonly config: ScoutConfig;
	readonly emit: EmitFunction;
	readonly logger: Logger;
	readonly state: State;
}
