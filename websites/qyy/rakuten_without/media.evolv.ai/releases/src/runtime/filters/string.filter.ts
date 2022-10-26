import { startsWith } from '../../shared/utils/string';
import { Context } from '../context';
import { InvalidFilterOperator } from '../errors';
import { AudienceContext } from './audience-context';
import { Filter } from './filter';
import { IncludeNot } from './include-not';
import { StringOperator, StringRule } from './types';
import { get } from '../../shared/utils/object';
import { parseRegex } from '../../shared/utils/string';


interface Matchers {
	equals(value: string): void;
	matches(regex: RegExp): void;
	startsWith(value: string): void;
	contains(value: string): void;
	exists(key: string): void;
}

export class StringFilter<T extends keyof AudienceContext> extends Filter<Matchers, string> implements Matchers {
	public readonly field: T;

	constructor(context: Context, field: T) {
		super(context);
		this.field = field;
	}

	@IncludeNot()
	equals(value: string) {
		this.predicate = (audience: AudienceContext) => {
			return get(audience, this.field as string) === value;
		};

		this.messageFn = (passed) => {
			return (passed)
				? `Audience field '${this.field}' equals '${value}'.`
				: `Audience field '${this.field}' does not equal '${value}'.`;
		};
	}

	@IncludeNot()
	matches(regex: RegExp) {
		this.predicate = (audience: AudienceContext) => {
			return regex.test(get(audience, this.field as string) as string);
		};

		this.messageFn = (passed) => {
			return (passed)
				? `Audience field '${this.field}' matches ${regex}.`
				: `Audience field '${this.field}' does not match ${regex}.`;
		};
	}

	@IncludeNot()
	startsWith(value: string): void {
		this.predicate = (audience: AudienceContext) => {
			return startsWith(get(audience, this.field as string) as string, value);
		};

		this.messageFn = (passed) => {
			return (passed)
				? `Audience field '${this.field}' starts with '${value}'.`
				: `Audience field '${this.field}' does not start with '${value}'.`;
		};
	}

	@IncludeNot()
	contains(value: string) {
		this.predicate = (audience: AudienceContext) => {
			const filedValue = get(audience, this.field as string) as string;
			return filedValue ? filedValue.indexOf(value) !== -1 : false;
		};

		this.messageFn = (passed) => {
			return (passed)
				? `Audience field '${this.field}' contains '${value}'.`
				: `Audience field '${this.field}' does not contain '${value}'.`;
		};
	}

	exists() {
		this.predicate = (audience: AudienceContext) => {
			return (get(audience, this.field as string) !== undefined);
		};

		this.messageFn = (passed) => {
			return (passed)
				? `The key '${this.field}' exists in audience.`
				: `The key '${this.field}' does not exist in audience.`;
		};
	}

	static fromRule(rule: StringRule, context: Context) {
		const filter = new StringFilter(context, rule.field);

		switch (rule.operator) {
			case StringOperator.Equal: {
				filter.equals(rule.value);
				break;
			}
			case StringOperator.NotEqual: {
				filter.not.equals(rule.value);
				break;
			}
			case StringOperator.Match: {
				filter.matches(parseRegex(rule.value));
				break;
			}
			case StringOperator.NotMatch: {
				filter.not.matches(parseRegex(rule.value));
				break;
			}
			case StringOperator.StartsWith: {
				filter.startsWith(rule.value);
				break;
			}
			case StringOperator.NotStartsWith: {
				filter.not.startsWith(rule.value);
				break;
			}
			case StringOperator.Contains: {
				filter.contains(rule.value);
				break;
			}
			case StringOperator.NotContains: {
				filter.not.contains(rule.value);
				break;
			}
			case StringOperator.Exists: {
				filter.exists();
				break;
			}
			default: {
				throw new InvalidFilterOperator(rule.field as string);
			}
		}

		return filter;
	}
}
