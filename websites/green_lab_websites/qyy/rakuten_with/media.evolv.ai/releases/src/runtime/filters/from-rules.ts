import { BaseRule, CompoundRule, DictionaryRule, Rule, StringRule } from './types';
import { GroupFilter } from './group.filter';
import { Filter } from './filter';
import { StringFilter } from './string.filter';
import { DictionaryFilter } from './dictionary.filter';
import { Context } from '../context';


export function isBaseRule(rule: any): rule is BaseRule {
	return rule && 'field' in rule && 'operator' in rule && 'value' in rule;
}

export function isGroupRule(rule: any): rule is CompoundRule {
	return ('combinator' in rule);
}

export function isDictionaryFilterRule(rule: any): rule is DictionaryRule {
	return rule && ['cookie', 'query_parameter', 'user_attributes'].indexOf(rule.field) !== -1;
}

export function isStringFilterRule(rule: any): rule is StringRule {
	return isBaseRule(rule) && typeof rule.value === 'string';
}

/**
 * Returns an array of filter objects based on a rule set.
 * @param rules
 * @param context
 */
export function fromRules(rules: Rule | Rule[] | object, context: Context): Filter[] {
	const filters = [];
	const _rules = Array.isArray(rules) ? rules : [rules];

	for (const rule of _rules) {
		let filter: Filter | null = null;

		if (isGroupRule(rule)) {
			filter = GroupFilter.fromRule(rule, context);
		} else if (isDictionaryFilterRule(rule)) {
			filter = DictionaryFilter.fromRule(rule, context);
		} else if (isStringFilterRule(rule)) {
			filter = StringFilter.fromRule(rule, context);
		}

		filter && filters.push(filter);
	}

	return filters;
}
