/// <reference path="../globals.d.ts" />

import { fromArray, newMap, newSet } from '~/shims';
import { loadEditorModule } from '../editor/load-editor-module';
import { isInEditorMode } from '../scout/modes';
import { isInInteractiveMode } from '../scout/modes/interactive.mode';
import { loggerFactory, ScoutConfig } from '../shared';
import { emitter, LifecycleHook } from '../shared/events';
import { querySelectorAll } from '../shared/mangleable';
import { Ref } from '../shared/utils';
import { LocalStorageKey } from '../shared/utils/storage';
import * as lsm from '../shared/utils/storage/local-storage';
import { StageBuilder } from './builders';
import { Context, State } from './context';
import {
	AudienceContext,
	buildAudienceContext,
	defaultAudienceContext,
	ServerSideAudienceContext,
	ServerSideAudienceContextV2,
	isV1AudienceContext
} from './filters';
import { AlwaysExecuteScriptExecutor, ExperimentRecorder, TriggerManager } from './helpers';
import { CandidateId, ExperimentPlan, Stage } from './plans';
import { StatusAttributeName, Treatment, TreatmentAttributeName } from './recorders';
import { ManualTrigger } from './triggers';
import { merge, isObject } from '../shared/utils/object';

/**
 * # The Evolv Runtime
 * The Evolv runtime is your primary method of interacting with Evolv. It provides access to experiments, events, development tools,
 * and other key features of Evolv such as retrieving active experiments, viewing the current audience context, and applying or reverting
 * changes that an expeiment or "execution plan" has made to a page.
 *
 * ## Accessing the Runtime
 * The `runtime` object can be accessed from the global `evolv` namespace. It is provided as a
 * [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) to ensure that it is fully
 * initialized before accepting commands.
 *
 * **Note:** Evolv includes a Promise shim for browsers that don't support Promises, such as IE 11. This shim is not a polyfill, so it will
 * not conflict with any other polyfills you might be using.
 *
 * **Example**
 * The following example shows how to access the current audience context using `runtime`:
 *
 * ```js
 * evolv.runtime.then(function(runtime) {
 *     runtime.audience;
 * });
 * ```
 *
 * ## Managing Execution Plans
 * An execution plan is a list of changes generated from an experiment. It can consist of any combination of changes defined in the
 * experiment, and can apply to one or more pages. An execution plan runs after the user has been confirmed to be in an experiment.
 *
 * `runtime` provides several methods for interacting with execution plans, including the ability to manually activate, deactivate, and
 * run plans on a page.
 */
export class Runtime implements IRuntime {
	private readonly context: Context;
	private readonly logger = loggerFactory('Runtime');
	private readonly seenTriggers = newMap<string, ManualTrigger>();
	private readonly aeRunner: AlwaysExecuteScriptExecutor;
	private readonly experimentRecorder: ExperimentRecorder;
	private readonly triggerManager: TriggerManager;

	private readonly audienceContextRef = new Ref<AudienceContext>(defaultAudienceContext);
	private readonly _allPlans = newMap<string, ExperimentPlan>();
	private readonly _activePlans = newMap<string, ExperimentPlan>();

	/**
	 * Returns a list of experiments that are active on the current page.
	 * @category Troubleshooting and Debugging
	 */
	get activePlans(): Map<string, ExperimentPlan> {
		return this._activePlans;
	}

	/**
	 * Returns the [audience context](../globals.html#audiencecontext) that the runtime uses to evaluate which experiments to apply.
	 * @category Troubleshooting and Debugging
	 */
	get audience(): AudienceContext {
		return this.audienceContextRef.current;
	}

	/**
	 * Older GA integrations use this private accessor. Not intended for further use.
	 * @deprecated
	 * @hidden
	 **/
	get _audienceContext(): AudienceContext {
		return this.audience;
	}

	/** @hidden */
	constructor(private readonly config: ScoutConfig) {
		this.context = {
			config,
			emit: emitter.emit.bind(emitter),
			logger: this.logger,
			state: new State()
		};

		this.aeRunner = new AlwaysExecuteScriptExecutor();
		this.experimentRecorder = new ExperimentRecorder(this.context);
		this.triggerManager = new TriggerManager(this.context);

		emitter.emit(LifecycleHook.Initialized, {});
		this.logger.debug('Started');

		if (isInInteractiveMode()) {
			this.logger.info('Runtime is in interactive mode. Further execution of plans will be halted');

			loadEditorModule(this.context);
		} else if (isInEditorMode()) {
			this.logger.info('Runtime is in editor mode. Further execution of plans will be halted');

			loadEditorModule(this.context).then(editor => {
				editor.loadConfig();
			});
		}
	}

	/**
	 * Removes the user from an experiment.
	 * If the ID of the candidate the user has been allocated for the experiment is provided, then the user will be removed from just that
	 * experiment.
	 * If no ID is provided, the user will be removed from all experiments.
	 *
	 * **Note:** The user will not be reinstated in an experiment if they refresh the page.
	 * @param candidateId  The ID of the experiment you wish to remove the user from.
	 */
	contaminate(candidateId?: CandidateId) {
		const candidateIds = candidateId ? newSet([candidateId]) : this.experimentRecorder.selected;

		candidateIds.forEach(id => {
			this.experimentRecorder.markContaminated(id, 'user-generated');
		});
	}

	/** Set the audience context for which the runtime will evaluate filters.
	 *
	 * @param audience
	 * @hidden
	 */
	setAudience(audience: Partial<ServerSideAudienceContext> | Partial<ServerSideAudienceContextV2>): void {
		if (this.audienceContextRef.current !== defaultAudienceContext) {
			this.logger.warn('New audience will be ignored because the audience was configured by an earlier stage');
			return;
		}

		const { browser, ...rest } = audience;
		const audienceV2: Partial<ServerSideAudienceContextV2> = isV1AudienceContext(audience)
			? {
				...rest,
				web: {
					client: {
						browser
					}
				}
			}
			: audience;

		this.audienceContextRef.current = buildAudienceContext(audienceV2);
	}

	/** Update the audience context for which the runtime will evaluate filters.
	 *
	 * @param audience
	 */
	updateAudience(audience: AudienceContext) {
		if (isObject(audience)) {
			const updatedAudience = merge(this.audienceContextRef.current, audience);
			this.audienceContextRef.current = buildAudienceContext(updatedAudience);
		} else {
			this.logger.warn('The audience has not been updated, because of an invalid argument was passed to the function');
		}
	}

	/**
	 * Execution of an execution plan starts through this method.
	 * @param uid
	 * @param handler
	 * @hidden
	 */
	stagePlans(uid: string, handler: (builder: StageBuilder) => void) {
		if (!this.audienceContextRef.current) {
			this.logger.warn('An audience has not been configured. Therefore audience filters may fail to evaluate as expected');
		}

		this.triggerManager.clear();

		const stage = new Stage(uid, this.aeRunner, this.experimentRecorder, this.triggerManager, this.audienceContextRef, this.context);
		const builder = new StageBuilder(stage, this.experimentRecorder);

		handler(builder);

		try {
			stage.runAlwaysExecute();
		} catch (err) {
			this.logger.warn('Execution has been halted');
			return;
		}

		stage.plans.forEach(plan => {
			this._allPlans.set(plan.id, plan);
		});

		this.executeStage(stage);
		this.finalizeStage(stage);
	}

	/**
	 * An experiment page may be configured to be activated manually. This gives you greater control over when
	 * changes are applied, which allows for more complex activation requirements including single page applications (SPA).
	 * To deactivate a page, use the [`deactivate`](./runtime.html#deactivate) method.
	 *
	 * **Note:** If the user refreshes the page, the page will not remain active unless you call `activate` again.
	 *
	 * @param pageId
	 */
	activate(pageId: string) {
		if (!pageId) {
			throw new TypeError(`Argument 'pageId' cannot be undefined or null.`);
		}

		const { manualActivations } = this.context.state;

		this.revertAll();
		manualActivations.add(pageId);
		this.runAll();
	}

	/**
	 * Deactivates a manually activated page.
	 * @param pageId Page to deactivate. If omitted, all manually activated pages will be deactivated
	 */
	deactivate(pageId?: string) {
		const { manualActivations } = this.context.state;

		this.revertAll();

		if (!pageId) {
			manualActivations.clear();
		} else {
			manualActivations.delete(pageId);
		}

		this.runAll();
	}

	/**
	 * Emits an event that will be consumed by Evolv. For more information, see the [events documentation page](../pages/events.html).
	 * @param id  The id of the event
	 */
	emitEvent(id: string) {
		if (!id) {
			throw new TypeError(`Argument 'id' cannot be null or empty.`);
		}

		if (!this.seenTriggers.has(id)) {
			const newTrigger = new ManualTrigger(id);

			newTrigger.attach(this.context);

			this.seenTriggers.set(id, newTrigger);
		}

		const trigger = this.seenTriggers.get(id)!;
		trigger.trigger();
	}

	/**
	 * Returns a `NodeList` of all DOM elements that have been changed (mutated) by experiments. This list also includes any script tags
	 * that hold code of JavaScript mutations.
	 *
	 * @param treatment  The type of treatment to filter the results on. If omitted, all treatment types are included.
	 * @category Troubleshooting and Debugging
	 */
	findMutations(treatment?: Treatment): NodeListOf<Element> {
		const condition = (treatment !== undefined) ? ` = '${treatment}'` : '';

		const elements = `[${TreatmentAttributeName}${condition}]`;
		const scripts = `script[${StatusAttributeName}]`;

		return querySelectorAll(`${elements}, ${scripts}`);
	}

	/**
	 * Reverts all changes applied to the page and detaches all event triggers.
	 * This lets you view the page as it appears before any changes are applied by active plans. To reapply mutations, use
	 * [`runAll()`](./runtime.html#runall).
	 *
	 * **Note:** This does not revert mutations performed by custom JavaScript.
	 *
	 * @category Troubleshooting and Debugging
	 */
	revertAll() {
		this.triggerManager.detachAll();
		this.activePlans.forEach(plan => plan.revert());
	}

	/**
	 * Evaluates all active plans on the page and attaches all event triggers.
	 * This lets you view the page as it appears after all mutations have been applied. To revert these changes, use
	 * [`revertAll()`](./runtime.html#revertall).
	 * @category Troubleshooting and Debugging
	 */
	runAll() {
		this.activePlans.forEach(plan => plan.run());
		this.triggerManager.attachAll();
	}

	/**
	 * Reverts and reapplies all mutations performed on the page.
	 * This is a convenience method that calls [`revertAll()`](./runtime.html#revertall) and [`runAll()`](./runtime.html#runall).
	 *
	 * @category Troubleshooting and Debugging
	 */
	rerun() {
		this.revertAll();
		this.runAll();
	}

	/**
	 * Re-evaluates the audience context and then re-runs all plans on the page.
	 *
	 * @category Troubleshooting and Debugging
	 */
	evaluatePlans() {
		this.audienceContextRef.current = buildAudienceContext(this.audienceContextRef.current);

		this.revertAll();
		this.activePlans.clear();

		this._allPlans.forEach(plan => {
			const succeeded = plan.run();

			if (succeeded) {
				this.activePlans.set(plan.id, plan);
			}
		});

		this.triggerManager.attachAll();
	}

	private executeStage(stage: Stage) {
		const { plansToAdd, plansToRevert } = stage.reconcile(this.activePlans);

		for (const planId of fromArray(plansToRevert)) {
			const plan = this.activePlans.get(planId);
			plan && plan.revert();

			this.activePlans.delete(planId);
		}

		for (const planId of fromArray(plansToAdd)) {
			const plan = stage.plans.get(planId);

			if (plan) {
				const succeeded = plan.run();

				if (succeeded) {
					this.activePlans.set(planId, plan);
				}
			}
		}

		this.triggerManager.attachAll();

		this.logger.debug(`Execution plans reverted: ${fromArray(plansToRevert).sort()}`);
		this.logger.debug(`Execution plans applied: ${fromArray(plansToAdd).sort()}`);

		emitter.emit(LifecycleHook.StageCompleted, { uid: stage.uid, number: stage.number });
		this.logger.debug(`Stage ${stage.number} completed`);
	}

	private finalizeStage(stage: Stage) {
		const previous = lsm.get(LocalStorageKey.PlanVersion);
		const isReconciliationPhase = !previous || (stage.number === 2);

		if (isReconciliationPhase && stage.number === 1) {
			this.logger.debug('Reconciliation not necessary because there was no previous version');
		}

		lsm.set(LocalStorageKey.PlanVersion, stage.uid);

		if (stage.isEmpty && isReconciliationPhase) {
			emitter.emit(LifecycleHook.Skipped, {});
			this.logger.debug('Execution was skipped because no experiments were declared');
		} else if (!stage.isEmpty && isReconciliationPhase) {
			emitter.emit(LifecycleHook.Reconciled, {
				previous,
				current: stage.uid,
				stageNumber: stage.number
			});

			this.logger.debug('Reconciliation finished');
		}
	}
}
