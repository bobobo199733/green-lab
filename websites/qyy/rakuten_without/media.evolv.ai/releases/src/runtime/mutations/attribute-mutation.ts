import { fromArray } from '~/shims';
import { querySelectorAll } from '../../shared/mangleable';
import { HtmlElementRecorder } from '../recorders';
import { ElementMutation, MutationType } from './mutation';
import { elementMutatorFactory } from './mutator';


export function isAttributeMutation(value: any): value is ElementMutation {
	return (value.type === MutationType.Attribute);
}

export const createAttributeMutator = elementMutatorFactory<ElementMutation, Element, string | null>(
	isAttributeMutation,
	function*(mutation) {
		const elems = querySelectorAll(mutation.selector);

		for (const elem of fromArray(elems)) {
			const value = elem.getAttribute(mutation.property);
			const nextValue = yield [elem, value];

			elem.setAttribute(mutation.property, nextValue);
		}
	},
	HtmlElementRecorder
);
