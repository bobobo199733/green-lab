import { Mutation, MutationType } from './mutation';
import { Mutator } from './mutator';


export interface NoopMutation extends Mutation {
	type: MutationType.Noop;
	value: '';
}

export function isNoopMutation(value: any): value is Mutation {
	return (value.type === MutationType.Noop);
}

export function createNoopMutator(mutation: Mutation): Mutator {
	if (!isNoopMutation(mutation)) {
		throw new TypeError('The mutation object is not valid for this mutator.');
	}

	return {
		mutate() {},
		revert() {}
	};
}
