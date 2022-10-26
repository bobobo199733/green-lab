import { PromiseShim } from '~/external-shims';

/**
 * The `DeferredPromise` class provides a mechanism for resolving a promise from outside of its executor
 * function.
 *
 * @remarks
 * A `DeferredPromise` behaves both like a promise and an iterable (however, the methods `next()` and
 * `throw()` are instead named `resolve()` and `reject()`). The consumer of a deferred promise can store
 * a reference to the promise and then some external agent can resolve or reject the promise. The original
 * use case of this was so that two or more asynchronously loaded scripts could coordinate with each other
 * when they all are ready without the need for an external supervisor.
 */
export class DeferredPromise<T> implements PromiseShim<T> {
	public resolve!: (value?: T) => void;
	public reject!: (err?: any) => void;

	private readonly promise: PromiseShim<T>;

	[Symbol.toStringTag]: 'Promise';

	constructor() {
		this.promise = new PromiseShim<T>((resolve, reject) => {
			// @ts-ignore
			this.resolve = resolve;
			this.reject = reject;
		});
	}

	// @ts-ignore
	then<TResult1 = T, TResult2 = never>(
		onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
		onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
	): Promise<TResult1 | TResult2> {
		return this.promise.then(onfulfilled, onrejected);
	}

	// @ts-ignore
	catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult> {
		return this.promise.catch(onrejected);
	}

	// @ts-ignore
	finally(onfinally?: (() => void) | null | undefined): Promise<T> {
		return this.promise.finally(onfinally);
	}
}
