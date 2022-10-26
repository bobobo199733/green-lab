import { fromArray } from '~/shims';
import { querySelectorAll } from '../../shared/mangleable';
import { ElementMutation, MutationType } from './mutation';
import { elementMutatorFactory } from './mutator';
import { HtmlElementRecorder } from '../recorders';


export interface ClassNamesMutation extends ElementMutation {
	additive: boolean;
}

export function isClassNamesMutation(value: any): value is ClassNamesMutation {
	return (value.type === MutationType.ClassNames);
}

export const createClassNamesMutator = elementMutatorFactory<ClassNamesMutation, Element, string>(
	isClassNamesMutation,
	function*(mutation, isReverting) {
		const elems = querySelectorAll(mutation.selector);

		for (const elem of fromArray(elems)) {
			const currentValue = elem.classList['value'];
			const nextValue: string = yield [elem, currentValue];

			if (isReverting || !mutation.additive) {
				elem.classList['value'] = nextValue;
			} else {
				const classes = nextValue.split(' ');

				classes.forEach(className => {
					elem.classList.add(className);
				});
			}
		}
	},
	HtmlElementRecorder
);
