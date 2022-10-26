import { DeferredPromise } from '../deferred-promise';
import { DeadlockError } from '../errors';
import { addEventListener, removeEventListener, localStorage, setTimeout, clearTimeout } from '../mangleable';


export interface Lock {
	expires: number;
	instanceId: string;
}

export class MutexOptions {
	expires: number = 10_000;
	instanceId: string = '';
	pollingRate: number = 500;
}

/**
 * A mechanism for performing mutually exclusive locking between multiple instances
 * of a website (those that share a common localStorage).
 */
export class Mutex {
	private readonly options!: MutexOptions;

	private deferred: DeferredPromise<void> | null = null;
	private timer: any = null;

	private _lock: Lock | null = null;

	get hasLock() {
		return !!this.lock;
	}

	get lock(): Lock | null {
		return this._lock;
	}

	set lock(value: Lock | null) {
		this._lock = value;

		(value)
			? localStorage.setItem(this.key, JSON.stringify(value))
			: localStorage.removeItem(this.key);
	}

	constructor(
		private readonly key: string,
		options?: Partial<MutexOptions>
	) {
		this.options = {
			...new MutexOptions(),
			...options
		};

		addEventListener('unload', (event: BeforeUnloadEvent) => {
			this.release();
		});
	}

	private onStorageChanged = ((event: StorageEvent) => {
		if (event.storageArea !== localStorage
			|| event.key !== this.key
			|| event.newValue !== null) {
			return;
		}

		this.acquire();
	}) as EventListener;

	private onLockCommandeered = ((event: StorageEvent) => {
		if (event.storageArea !== localStorage
			|| event.key !== this.key
			|| event.newValue === null) {
			return;
		}

		removeEventListener('storage', this.onLockCommandeered);

		this._lock = null;
		this.deferred && this.deferred.reject(new DeadlockError());
	}) as EventListener;

	public acquire(): DeferredPromise<void> {
		const { expires, pollingRate } = this.options;

		if (!this.deferred) {
			this.deferred = new DeferredPromise();
		}

		clearTimeout(this.timer!);

		const globalLock = this.getGlobalLock();

		const now = Date.now();

		if (!globalLock || globalLock.expires < now) {
			removeEventListener('storage', this.onStorageChanged);

			this.lock = {
				expires: Date.now() + expires,
				instanceId: this.options.instanceId
			};

			addEventListener('storage', this.onLockCommandeered);

			this.deferred.resolve();
		} else if (pollingRate > 0) {
			addEventListener('storage', this.onStorageChanged);

			this.timer = setTimeout(() => this.acquire(), pollingRate);
		}

		return this.deferred;
	}

	public release(): void {
		removeEventListener('storage', this.onLockCommandeered);
		removeEventListener('storage', this.onStorageChanged);

		clearTimeout(this.timer!);
		this.deferred = null;

		if (this.hasLock) {
			this.lock = null;
		}
	}

	private getGlobalLock() {
		try {
			const lock = localStorage.getItem(this.key) || '';
			return JSON.parse(lock);
		} catch {
			return null;
		}
	}
}
