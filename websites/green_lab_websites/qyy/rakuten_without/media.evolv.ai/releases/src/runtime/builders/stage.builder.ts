import { DuplicateExperiment } from '../errors';
import { evaluateFilters } from '../filters';
import { AlwaysExecuteIife, ExperimentRecorder } from '../helpers';
import { ExperimentId, ExperimentPlan, Settings, Stage } from '../plans';
import { ExperimentPlanBuilder } from './experiment-plan.builder';
import { Predicate } from '../predicate';
import { ClickEventTrigger, RouteEntryTrigger, TriggerKey } from '../triggers';


export class StageBuilder {
	constructor(
		private readonly stage: Stage,
		private readonly experimentRecorder: ExperimentRecorder
	) {}

	/**
	 * Adds an experiment to the stage.
	 *
	 * @description
	 * First a new bare experiment plan is created. Responsibility for fleshing out the new
	 * plan is delegated to a sub-builder. Finally the experiment plan is added to the stage.
	 */
	experiment(settings: Settings, handler: (builder: ExperimentPlanBuilder) => void) {
		const { audience, logger, plans } = this.stage;
		const plan = new ExperimentPlan(settings, this.stage, this.experimentRecorder);
		const builder = new ExperimentPlanBuilder(plan);

		handler(builder);

		const { id } = plan;

		if (plans.has(id)) {
			const error = new DuplicateExperiment(id);

			logger.error(error.message);
			throw error;
		} else {
			plans.set(id, plan);
		}

		const results = evaluateFilters(plan.filters, audience);

		if (results.passed) {
			this.experimentRecorder.markSelected(plan.candidateId);
		} else {
			this.experimentRecorder.markFiltered(plan.candidateId, '');
		}
	}

	/**
	 * Marks an experiment as excluded from a plan.
	 *
	 * @description
	 * This has no effect but to inform the runtime that the experiment has been excluded.
	 * This is necessary because, unlike the previous system, an execution plan does not
	 * have full visibility of the experiment space.
	 */
	exclude(experimentId: ExperimentId) {
		this.experimentRecorder.markExcluded(experimentId, 'Filtered by server');
	}

	/**
	 * Adds an always-execute code block to the builder.
	 */
	alwaysExecute(id: string, iife: AlwaysExecuteIife) {
		this.stage.aeExecutor.add(id, iife);
	}

	clickEventTrigger(key: TriggerKey, selector: string, predicate: Predicate = () => true) {
		const trigger = new ClickEventTrigger(key, predicate, selector);
		this.stage.triggerManager.add(trigger);
	}

	routeEntryTrigger(key: TriggerKey, predicate: Predicate) {
		const trigger = new RouteEntryTrigger(key, predicate);
		this.stage.triggerManager.add(trigger);
	}
}
