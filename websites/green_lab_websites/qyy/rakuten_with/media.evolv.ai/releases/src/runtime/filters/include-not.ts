import { Filter } from './filter';

/**
 * Decorates a matcher method of a Filter indicating that an inverse matcher should be
 * included in the `not` object.
 */
export function IncludeNot(): MethodDecorator {
	return (target: any, property: string | symbol) => {
		if (!(target instanceof Filter)) {
			throw new Error('This method must belong to a class of type Filter');
		}

		if (!target.not) {
			// @ts-ignore
			target.not = {};
		}

		target.not[property] = undefined;
	};
}
