import { ExperimentPlan, Page, PagePlan } from '../plans';
import { Predicate } from '../predicate';
import { FilterBuilder } from './filter.builder';
import { PagePlanBuilder } from './page-plan.builder';


export class ExperimentPlanBuilder {
	private filterBuilder: FilterBuilder = new FilterBuilder(this.plan.context);

	get audience() {
		return this.filterBuilder;
	}

	constructor(private readonly plan: ExperimentPlan) {
		this.plan.filters = this.filterBuilder.filters;
	}

	/**
	 * Adds a page plan to the experiment plan.
	 *
	 * @description
	 * When `page.type` equals 'manual', a manually activated page will be added. Manually activated pages are
	 * essentially pages whose predicate is based on a condition other than the current URL. Their evaluation must be
	 * actuated by using the `activate()` method on the `runtime` object. They will not be automatically evaluated on
	 * page loads or navigation events.
	 *
	 * @param page
	 * @param predicate May be null only if `page.type` equals 'manual'
	 * @param handler
	 */
	page(page: Page | Pick<Page, 'id'>, predicate: Predicate | null, handler: (builder: PagePlanBuilder) => void) {
		predicate = predicate || (() => false);

		const _page: Page = {
			type: 'url',
			isEntryPoint: true,
			...page
		};

		if (_page.type === 'manual') {
			predicate = (context) => {
				return context.state.manualActivations.has(page.id);
			};
		}

		const pagePlan = new PagePlan(_page, this.plan, predicate, this.plan.context);
		const builder = new PagePlanBuilder(pagePlan);

		handler(builder);

		this.plan.pages.add(pagePlan);
	}

	/**
	 * Convenience method for adding a manually activated page plan to the experiment plan.
	 *
	 * @param page
	 * @param handler
	 */
	manualActivation(page: Page | Pick<Page, 'id'>, handler: (builder: PagePlanBuilder) => void) {
		this.page({ ...page, type: 'manual' }, null, handler);
	}
}
