import { fromArray } from '~/shims';
import { AudienceContext } from './audience-context';
import { Filter, Result } from './filter';


export interface FilterResults {
	passed: boolean;
	exhaustive: boolean;
	results: Result[];
}

export function evaluateFilters(
	filters: Set<Filter>,
	audience: AudienceContext,
	exhaustive: boolean = false
): FilterResults {
	const filterResults = {
		passed: true,
		exhaustive,
		results: [] as Result[]
	};

	for (const filter of fromArray(filters)) {
		const result = filter.test(audience);

		filterResults.results.push(result);

		if (!result.passed) {
			filterResults.passed = false;
		}

		if (!exhaustive && !filterResults.passed) {
			break;
		}
	}

	return filterResults;
}
