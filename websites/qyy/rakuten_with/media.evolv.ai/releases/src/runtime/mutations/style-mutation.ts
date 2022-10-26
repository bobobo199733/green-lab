import { fromArray } from '~/shims';
import { querySelectorAll } from '../../shared/mangleable';
import { HtmlElementRecorder } from '../recorders';
import { ElementMutation, MutationType } from './mutation';
import { elementMutatorFactory } from './mutator';


export type StyleProperty = Exclude<keyof CSSStyleDeclaration, 'length' | 'parentRule'>;

export interface StyleMutation extends ElementMutation {
	property: StyleProperty;
	important?: boolean;
}

export function isStyleMutation(value: any): value is StyleMutation {
	return (value.type === MutationType.Style);
}

export const createStyleMutator = elementMutatorFactory<StyleMutation, Element, string | null>(
	isStyleMutation,
	function* iterator(mutation) {
		const elems = fromArray(querySelectorAll(mutation.selector)) as HTMLElement[];

		for (const elem of elems) {
			if (elem.style) {
				const initialValue = elem.style[mutation.property];
				elem.style[mutation.property] = yield [elem, initialValue];
			}
		}
	},
	HtmlElementRecorder
);
