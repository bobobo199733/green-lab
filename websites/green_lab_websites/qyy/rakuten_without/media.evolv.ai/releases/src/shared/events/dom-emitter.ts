import { ExtractEventParameters } from '../../typings';
import { querySelector } from '../mangleable';


export type HookEvent<E, K> = ExtractEventParameters<E, K>;
export type HookHandler<E, T> = (args: HookEvent<E, T>) => void;

/**
 * The `DomEmitter` class implements an event emitter that leverages the event dispatching capabilities
 * of a DOM element.
 *
 * @classdesc
 * The `DomEmitter` piggybacks on the DOM's event system both to reduce the amount of code needed to
 * implement an event emitter and to facilitate a mechanism for sharing a emitter between two modules
 * loaded in parallel.
 */
export class DomEmitter<E, N extends string> {
	private readonly element!: HTMLElement;

	constructor(private readonly selector: string) {
		this.element = querySelector(selector) as HTMLElement;

		if (!this.element) {
			console.warn('Emitter cannot be attached because selector does not match any element');
		}
	}

	emit<K extends N>(name: K, args: HookEvent<E, K>) {
		if (!this.element) { return; }

		let evt;

		if (typeof CustomEvent === 'function') {
			evt = new CustomEvent(name, { detail: args });
		} else { // For IE Compatibility
			evt = document.createEvent('CustomEvent');
			evt.initCustomEvent(name, false, false, args);
		}

		this.element.dispatchEvent(evt);
	}

	on<K extends N>(name: K, handler: HookHandler<E, K>) {
		if (!this.element) { return; }

		this.element.addEventListener(name as any, (event: CustomEvent) => {
			handler(event.detail);
		});
	}

	off<K extends N>(name: K, handler: HookHandler<E, K>) {
		if (!this.element) { return; }

		this.element.removeEventListener(name as any, (event: CustomEvent) => {
			handler(event.detail);
		});
	}
}
