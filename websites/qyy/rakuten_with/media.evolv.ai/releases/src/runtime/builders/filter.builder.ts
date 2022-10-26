import { newSet } from '~/shims';
import { Context } from '../context';
import {
	Combinator, GroupFilter, DictionaryFilter, Filter, StringFilter,
	fromRules, GroupBuilder, Rule
} from '../filters';


export class FilterBuilder {
	private _filters = newSet<Filter>();

	get filters() {
		return this._filters;
	}

	constructor(private context: Context) {}

	addFilter<T extends Filter>(filter: T): T {
		this.filters.add(filter);
		return filter;
	}

	fromRules(rules: Rule | Rule[] | object) {
		const filters = fromRules(rules, this.context);

		for (const filter of filters) {
			this.addFilter(filter);
		}
	}

	browser() {
		return this.addFilter(new StringFilter<'web.client.browser'>(this.context, 'web.client.browser'));
	}

	cookie() {
		return this.addFilter(new DictionaryFilter(this.context, 'cookie'));
	}

	device() {
		return this.addFilter(new StringFilter<'device'>(this.context, 'device'));
	}

	group(operator: Combinator, builder: GroupBuilder): GroupFilter {
		return this.addFilter(new GroupFilter(this.context, operator, builder));
	}

	javascript() {}

	location() {
		return this.addFilter(new StringFilter(this.context, 'location'));
	}

	platform() {
		return this.addFilter(new StringFilter<'platform'>(this.context, 'platform'));
	}

	queryParameter() {
		return this.addFilter(new DictionaryFilter(this.context, 'queryStringParameters'));
	}

	referrerUrl() {
		return this.addFilter(new StringFilter(this.context, 'referrerUrl'));
	}

	userAttribute() {
		return this.addFilter(new DictionaryFilter(this.context, 'userAttributes'));
	}
}
