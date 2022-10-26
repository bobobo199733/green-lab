import { camelCase } from '../../shared/utils/string';
import { Context } from '../context';
import { InvalidFilterOperator } from '../errors';
import { AudienceContext, SnakeCaseAudienceKeys } from './audience-context';
import { Filter } from './filter';
import { IncludeNot } from './include-not';
import { DictionaryOperator, DictionaryRule } from './types';


export type Dictionary = { [key: string]: string }; // tslint:disable-line
export type DictionaryType<T> = { [K in keyof T]: T[K] extends Dictionary ? K : never }[keyof T];
export type DictionaryTypeKey = DictionaryType<AudienceContext>;

interface Matchers {
	contains(key: string, value: any): void;
	equals(key: string, value: any): void;
	exists(key: string): void;
}

export class DictionaryFilter extends Filter<Matchers> implements Matchers {
	private readonly field: DictionaryTypeKey;

	constructor(context: Context, field: DictionaryTypeKey | SnakeCaseAudienceKeys) {
		super(context);
		this.field = camelCase(field) as DictionaryTypeKey;
	}

	@IncludeNot()
	equals(key: string, value: any) {
		this.predicate = (audience: AudienceContext) => {
			const dict = audience[this.field!];

			return (key && key in dict)
				? dict[key] === value
				: false;
		};

		this.messageFn = (passed) => {
			return (passed)
				? `The key '${key}' in '${this.field}' equals '${value}'.`
				: `The key '${key}' in '${this.field}' does not equal '${value}'.`;
		};
	}

	@IncludeNot()
	exists(key: string) {
		this.predicate = (audience: AudienceContext) => {
			const dict = audience[this.field!];
			return (Object.keys(dict).indexOf(key) !== -1);
		};

		this.messageFn = (passed) => {
			return (passed)
				? `The key '${key}' exists in '${this.field}'.`
				: `The key '${key}' does not exist in '${this.field}'.`;
		};
	}

	@IncludeNot()
	contains(key: string, value: any) {
		this.predicate = (audience: AudienceContext) => {
			const dict: Record<string, string> = audience[this.field!];

			return (key && key in dict)
				? dict[key].indexOf(value) !== -1
				: false;
		};

		this.messageFn = (passed) => {
			return (passed)
				? `The key '${key}' in '${this.field}' contains '${value}'.`
				: `The key '${key}' in '${this.field}' does not contain '${value}'.`;
		};
	}

	static fromRule(rule: DictionaryRule, context: Context) {
		const filter = new DictionaryFilter(context, rule.field as DictionaryTypeKey | SnakeCaseAudienceKeys);

		switch (rule.operator as DictionaryOperator) {
			case DictionaryOperator.Contains: {
				filter.contains(rule.value[0], rule.value[1]);
				break;
			}
			case DictionaryOperator.NotContains: {
				filter.not.contains(rule.value[0], rule.value[1]);
				break;
			}
			case DictionaryOperator.Equal: {
				filter.equals(rule.value[0], rule.value[1]);
				break;
			}
			case DictionaryOperator.NotEqual: {
				filter.not.equals(rule.value[0], rule.value[1]);
				break;
			}
			case DictionaryOperator.Exists: {
				const v = Array.isArray(rule.value) ? rule.value[0] : rule.value;
				filter.exists(v);
				break;
			}
			case DictionaryOperator.NotExists: {
				const v = Array.isArray(rule.value) ? rule.value[0] : rule.value;
				filter.not.exists(v);
				break;
			}
			default: {
				throw new InvalidFilterOperator(rule.field as string);
			}
		}

		return filter;
	}
}
