import { fromArray } from '~/shims';
import { querySelectorAll } from '../../shared/mangleable';
import { HtmlElementRecorder } from '../recorders';
import { ElementMutation, MutationType } from './mutation';
import { elementMutatorFactory } from './mutator';


export function isTextMutation(value: any): value is ElementMutation {
	return (value.type === MutationType.Text);
}

export const createTextMutator = elementMutatorFactory<ElementMutation, Element, string | null>(
	isTextMutation,
	function*(mutation) {
		const elems = querySelectorAll(mutation.selector);

		for (const elem of fromArray(elems)) {
			const value = elem.textContent;
			elem.textContent = yield [elem, value];
		}
	},
	HtmlElementRecorder
);
