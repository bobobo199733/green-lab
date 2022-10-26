import './retrofit-tag';

import { VERSION } from '~/configuration';
import { PromiseShim } from '~/external-shims';
import { DeferredPromise } from './deferred-promise';
import {
	ActivatedEvent,
	emitter,
	LifecycleHook,
	FilteredEvent,
	InitializedEvent,
	InitializeEvent,
	NotRenderedEvent,
	ReconciledEvent,
	RenderedEvent,
	SelectedEvent,
	SkippedEvent,
	StageCompletedEvent,
	TriggeredEvent
} from './events';


/**
 * # The Evolv Module
 *
 * The Evolv module provides access to the Evolv Execution Plan API. This page explains how to access the Evolv namespace, the methods it
 * provides, and its properties.
 *
 * The most important component in this module is the [`runtime`](./evolv.html#runtime) object, which provides access to a number of core
 * features such as retrieving active experiments, viewing the current audience context, and applying or reverting changes that an
 * experiment has made to a page.
 *
 * ## Accessing the Evolv Namespace
 *
 * You can access the global Evolv namespace via `window.evolv` or simply `evolv`.
 *
 * ## Accessing the Evolv Runtime
 *
 * The [Evolv runtime](../classes/runtime.html) provides access to experiments, execution plans, events, development tools, and other core
 * Evolv features. It is the primary method of interacting with Evolv's execution plan system.
 *
 * You can access the runtime using `evolv.runtime`, which is provided as a Promise. This is to ensure that the runtime has finished
 * initializing before it starts accepting commands:
 *
 * ```js
 * evolv.runtime.then(function(runtime) {
 *     // Use the runtime
 * });
 * ```
 *
 * To learn how to use the runtime, visit the [runtime documentation page](../classes/runtime.html).
 *
 * ## Using the Evolv Lifecycle
 *
 * Evolv provides several [lifecycle hooks](../pages/lifecycle.html) that you can attach custom handlers to.
 *
 * @preferred
 */
declare namespace Evolv {}

/**
 * The namespace initializer is an object that both the scout and runtime include in
 * their bundles. The first script to load onto the page will add this object onto
 * the global namespace; the second script to load will forgo doing so.
 *
 * The initializer contains two deferred promises, `runtime` and `scout`, that are used
 * to synchronize execution between two separate scopes. Consumers can use the `ready`
 * promise to wait for both the scout and runtime to be available and ready. The namespace
 * also exposes two methods for triggering events.
 */
namespace Evolv {
	/**
	 * Version of Evolv currently loaded on the page.
	 * @readonly
	 */
	export const version = VERSION;

	/**
	 * Indicates whether Evolv is ready.
	 *
	 * @readonly
	 * @see {@link ready} for preferred approach to check for readiness
	 * @hidden
	 */
	export let isReady = false;

	/** @hidden */
	export const editor = new DeferredPromise<IEditor>();

	/**
	 * Promise that returns the Evolv runtime after Evolv has finished its loading procedure.
	 *
	 * @description
	 * The [[Runtime]] is the principal object that you will interact with. The runtime is exposed
	 * through a promise to guarantee that everything has loaded successfully before you
	 * issue commands to the runtime.
	 *
	 * > Evolv uses a promise shim in order to support browsers without support for promises (e.g. IE 11).
	 * > Note that this shim is not a polyfill so it will not conflict with the native implementation
	 * > or any polyfills you have included.
	 *
	 * @example
	 * ```javascript
	 * // Promises
	 * evolv.runtime.then(function(runtime) {
	 *     runtime.emitEvent('no bounce');
	 * });
	 *
	 * // async-await
	 * (await evolv.runtime).emitEvent('no bounce'));
	 * ```
	 *
	 * @readonly
	 * @see {@link Runtime}
	 */
	export const runtime: Promise<IRuntime> = new DeferredPromise<IRuntime>();

	/**
	 *
	 * @description
	 * The [[Scout]] is responsible for loading the runtime and execution plans. It also contains the tracker that holds the user, session
	 * and device identifiers.
	 *
	 * @example
	 * ```javascript
	 * // Promises
	 * evolv.scout.then(function(scout) {
	 *     console.log(scout.tracker;
	 * });
	 *
	 * // async-await
	 * (await evolv.scout).tracker);
	 * ```
	 *
	 * @readonly
	 */
	export const scout: Promise<IScout> = new DeferredPromise<IScout>();

	/**
	 * Promise indicating whether Evolv is ready.
	 * @hidden
	 */
	export const ready: Promise<any> = PromiseShim.all([runtime, scout])
		.then(args => {
			isReady = true;
			return args;
		});

	/**
	 * Dispatches a manual trigger event to the Participants API. Bails if runtime is not yet
	 * ready.
	 *
	 * @param id
	 * @deprecated Use {@link Runtime.emitEvent} instead
	 * @hidden
	 */
	export function trigger(id?: string) {
		if (!isReady) {
			throw new Error('The Evolv runtime is not yet ready.');
		}

		// noinspection JSIgnoredPromiseFromCall
		triggerAsync(id);
	}

	/**
	 * Asynchronous version of [[trigger]]. This is the preferred method over [[trigger]] as it waits
	 * for the runtime to be ready.
	 *
	 * @param id
	 * @deprecated Use {@link Runtime.emitEvent} instead
	 * @hidden
	 */
	export function triggerAsync(id: string = 'default') {
		return runtime.then((r) => r.emitEvent(id));
	}

	/**
	 * Unregister the given handler from the [lifecycle](../pages/lifecycle.html) hook `name`.
	 *
	 * @event
	 */
	export function off(name: LifecycleHook, handler: Function): Evolv {
		emitter.off(name, handler as any);
		return window.evolv;
	}

	/**
	 * Register a handler on the [lifecycle](../pages/lifecycle.html) hook `name`.
	 *
	 * @event
	 */
	export function on(name: LifecycleHook.Activated, handler: (args: ActivatedEvent) => void): Evolv;
	export function on(name: LifecycleHook.Filtered, handler: (args: FilteredEvent) => void): Evolv;
	export function on(name: LifecycleHook.Initialize, handler: (args: InitializeEvent) => void): Evolv;
	export function on(name: LifecycleHook.Initialized, handler: (args: InitializedEvent) => void): Evolv;
	export function on(name: LifecycleHook.NotRendered, handler: (args: NotRenderedEvent) => void): Evolv;
	export function on(name: LifecycleHook.Reconciled, handler: (args: ReconciledEvent) => void): Evolv;
	export function on(name: LifecycleHook.Rendered, handler: (args: RenderedEvent) => void): Evolv;
	export function on(name: LifecycleHook.Selected, handler: (args: SelectedEvent) => void): Evolv;
	export function on(name: LifecycleHook.Skipped, handler: (args: SkippedEvent) => void): Evolv;
	export function on(name: LifecycleHook.StageCompleted, handler: (args: StageCompletedEvent) => void): Evolv;
	export function on(name: LifecycleHook.Triggered, handler: (args: TriggeredEvent) => void): Evolv;
	export function on(name: LifecycleHook, handler: (args: any) => void): Evolv {
		emitter.on(name, handler as any);
		return window.evolv;
	}

	/**
	 * Collection of always-execute scripts and JavaScript mutations that have been registered.
	 *
	 * @readonly
	 * @ignore
	 */
	export const scripts: Record<string, Function> = {};
}

window.evolv = window.evolv || Evolv;
window.ascend = window.ascend || Evolv;
