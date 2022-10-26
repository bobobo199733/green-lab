import { document, querySelector } from '../../shared/mangleable';
import { Context } from '../context';
import { HtmlElementRecorder, Treatment } from '../recorders';
import { Mutation, MutationType } from './mutation';
import { Mutator } from './mutator';


export interface StylesheetMutation extends Mutation {
	id: string;
}

export function isStylesheetMutation(value: any): value is StylesheetMutation {
	return (value.type === MutationType.Stylesheet);
}

export function createStylesheetMutator(mutation: StylesheetMutation): Mutator {
	if (!isStylesheetMutation(mutation)) {
		throw new TypeError('The mutation object is not valid for this mutator.');
	}

	return {
		mutate() {
			if (!querySelector(`style[id = '${mutation.id}']`)) {
				const tag = document.createElement('style');
				tag.id = mutation.id;
				tag.textContent = mutation.value
					.replace(/\\n/g, '\u000A')
					.replace(/\\t/g, '\u0009');

				(document.head as HTMLHeadElement).appendChild(tag);

				HtmlElementRecorder.record(tag, mutation.id, Treatment.Mutated);
			}
		},
		revert() {
			const tag = querySelector(`style[id = '${mutation.id}']`);
			if (tag) {
				// @ts-ignore
				(tag.remove || tag.removeNode).call(tag); // IE11 does not support Node.remove()
			}
		}
	};
}

