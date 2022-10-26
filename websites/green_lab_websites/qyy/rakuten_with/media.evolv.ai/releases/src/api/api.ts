import { MutatorArgs } from '..';
import { Mutator, StyleProperty } from '../runtime/mutations';
import { Logger, loggerFactory } from '../shared';
import { document } from '../shared/mangleable';
import { uniqueId } from '../shared/utils';
import { Omit } from '../typings';
import { Facade } from './facade';
import { factories } from './factories';


export type Disposer = () => void;

export type ApiFacade = Omit<Facade<Disposer>, 'compound' | 'javascript' | 'noop' | 'stylesheet'>;

export class Api implements ApiFacade {
	private disposers: Disposer[] = [];
	private args: MutatorArgs;

	constructor(private readonly logger: Logger = loggerFactory('API')) {
		this.args = { logger };
	}

	attribute(selector: string, attributeName: string, value: string): Disposer {
		let mutator: Mutator | null = factories.attribute(selector, attributeName, value);

		mutator.mutate(this.args);

		return this.addDisposer(() => {
			mutator && mutator.revert(this.args);
			mutator = null;
		});
	}

	classNames(selector: string, classNames: string | string[], additive: boolean = false): Disposer {
		let mutator: Mutator | null = factories.classNames(selector, classNames, additive);

		mutator.mutate(this.args);

		return this.addDisposer(() => {
			mutator && mutator.revert(this.args);
			mutator = null;
		});
	}

	html(selector: string, htmlString: string): Disposer {
		let mutator: Mutator | null = factories.html(selector, htmlString);

		mutator.mutate(this.args);

		return this.addDisposer(() => {
			mutator && mutator.revert(this.args);
			mutator = null;
		});
	}

	inlineStyle (selector: string, styleProperty: StyleProperty, value: string): Disposer {
		let mutator: Mutator | null = factories.inlineStyle(selector, styleProperty, value);

		mutator.mutate(this.args);

		return this.addDisposer(() => {
			mutator && mutator.revert(this.args);
			mutator = null;
		});
	}

	fn(callback: Function, dispose?: Function): Disposer {
		if (typeof callback === 'function') {
			callback();
		}

		return this.addDisposer(() => {
			if (typeof dispose === 'function') {
				dispose();
			}
		});
	}

	observe(selector: string, callback: MutationCallback, options: MutationObserverInit = { childList: true }): Disposer {
		const nodes = document.querySelectorAll(selector);
		const observer = new MutationObserver(callback);

		nodes.forEach(node => {
			observer.observe(node, options);
		});

		return this.addDisposer(() => {
			observer.disconnect();
		});
	}

	poll(predicate: () => boolean, callback: () => void, interval: number = 100): Disposer {
		let handle: any = setInterval(() => {
			if (predicate()) {
				clearInterval(handle);
				callback();
			}
		}, interval);

		return this.addDisposer(() => {
			clearInterval(handle);
			handle = null;
		});
	}

	style(selector: string, styleProperty: StyleProperty, value: string, important?: boolean): Disposer {
		let mutator: Mutator | null = factories.style(selector, styleProperty, value, important);

		mutator.mutate(this.args);

		return this.addDisposer(() => {
			mutator && mutator.revert(this.args);
			mutator = null;
		});
	}

	stylesheet(css: string, id: string = uniqueId()): Disposer {
		let mutator: Mutator | null = factories.stylesheet(id, css);

		mutator.mutate(this.args);

		return this.addDisposer(() => {
			mutator && mutator.revert(this.args);
			mutator = null;
		});
	}

	text(selector: string, content: string): Disposer {
		let mutator: Mutator | null = factories.text(selector, content);

		mutator.mutate(this.args);

		return this.addDisposer(() => {
			mutator && mutator.revert(this.args);
			mutator = null;
		});
	}

	wait(duration: number, callback: () => void): Disposer {
		let handle: any = setTimeout(callback, duration);

		return this.addDisposer(() => {
			clearTimeout(handle!);
			handle = null;
		});
	}

	/**
	 * Runs all disposers that have been collected from API usages and then clears the list.
	 *
	 * @hidden
	 */
	dispose() {
		for (const disposer of this.disposers) {
			disposer();
		}

		this.disposers = [];
	}

	private addDisposer(disposer: Disposer): Disposer {
		this.disposers.push(disposer);
		return disposer;
	}
}
