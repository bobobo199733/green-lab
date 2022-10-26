import { fromArray } from '~/shims';
import { FilterBuilder } from '../builders';
import { Context } from '../context';
import { AudienceContext } from './audience-context';
import { Filter } from './filter';
import { fromRules } from './from-rules';
import { Combinator, CompoundRule } from './types';


export type GroupBuilder = (group: FilterBuilder) => void;

export class GroupFilter extends Filter {
	private builder: FilterBuilder;

	constructor(
		context: Context,
		public readonly combinator: Combinator,
		private handler: GroupBuilder
	) {
		super(context);

		this.builder = new FilterBuilder(context);
		this.predicate = (audience: AudienceContext) => {
			const filters = fromArray(this.builder.filters);

			switch (this.combinator) {
				case Combinator.And: {
					return filters.every(filter => filter.test(audience).passed);
				}
				case Combinator.Or: {
					return filters.some(filter => filter.test(audience).passed);
				}
				default: {
					throw new Error(`Invalid combinator '${this.combinator}'`);
				}
			}
		};

		this.messageFn = (passed: boolean) => {
			switch (this.combinator) {
				case Combinator.And: {
					return (passed)
						? `All conditions of AND filter were met.`
						: `One or more conditions of AND filter were not met.`;
				}
				case Combinator.Or: {
					return (passed)
						? `One or more conditions of OR filter were met.`
						: `No conditions of OR filter were met.`;
				}
				default: {
					throw new Error(`Invalid combinator '${this.combinator}'`);
				}
			}
		};

		handler(this.builder);
	}

	static fromRule(rule: CompoundRule, context: Context) {
		return new GroupFilter(context, rule.combinator, (group: FilterBuilder) => {
			const subfilters = fromRules(rule.rules, context);

			for (const subfilter of subfilters) {
				group.addFilter(subfilter);
			}
		});
	}
}
