import { Context } from '../context';
import { createJavascriptMutator } from './javascript-mutation';
import { Mutation, MutationType } from './mutation';
import { Mutator, MutatorArgs } from './mutator';
import { createStylesheetMutator } from './stylesheet-mutation';


export interface CompoundMutation extends Mutation<undefined> {
	id: string;
	script: string;
	styles: string;
	undoCode?: string;
}

export function isCompoundMutation(value: any): value is CompoundMutation {
	return (value.type === MutationType.Compound)
		&& 'script' in value
		&& 'styles' in value;
}

export function createCompoundMutator(mutation: CompoundMutation): Mutator {
	if (!isCompoundMutation(mutation)) {
		throw new TypeError('The mutation object is not valid for this mutator.');
	}

	const jsMutator = createJavascriptMutator({
		type: MutationType.Javascript,
		id: mutation.id,
		value: mutation.script,
		undoCode: mutation.undoCode
	});

	const cssMutator = createStylesheetMutator({
		type: MutationType.Stylesheet,
		id: mutation.id,
		value: mutation.styles
	});

	return {
		mutate(args: MutatorArgs): void {
			jsMutator.mutate(args);
			cssMutator.mutate(args);
		},
		revert(args: MutatorArgs): void {
			jsMutator.revert(args);
			cssMutator.revert(args);
		}
	};
}
