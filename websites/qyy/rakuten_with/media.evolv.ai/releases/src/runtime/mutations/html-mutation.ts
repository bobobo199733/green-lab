import { fromArray } from '~/shims';
import { querySelectorAll } from '../../shared/mangleable';
import { HtmlElementRecorder } from '../recorders';
import { ElementMutation, MutationType } from './mutation';
import { elementMutatorFactory } from './mutator';


export function isHtmlMutation(value: any): value is ElementMutation {
	return (value.type === MutationType.Html);
}

export const createHtmlMutator = elementMutatorFactory<ElementMutation, Element, string | null>(
	isHtmlMutation,
	function*(mutation) {
		const elems = querySelectorAll(mutation.selector);

		for (const elem of fromArray(elems)) {
			const value = elem.innerHTML;
			elem.innerHTML = yield [elem, value];
		}
	},
	HtmlElementRecorder
);
