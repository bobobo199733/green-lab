import { LifecycleHook } from '../../shared/events';
import { UniqueId } from '../../shared/utils';
import { Context } from '../context';
import { sendEvent } from '../utils';


/**
 * Annotation type for strings that represent a trigger key
 */
export type TriggerKey = string;

export const enum TriggerKind {
	ClickEvent = 'clickEvent',
	Manual = 'manual',
	RouteEntry = 'routeEntry'
}

export interface EventData {
	type: string;
	uid: UniqueId;
	sid: UniqueId;
	score?: number;
}

export abstract class Trigger {
	protected attached: boolean = false;
	protected context: Context | null = null;
	protected count: number = 0;

	abstract readonly kind: TriggerKind;

	get triggered(): boolean {
		return this.count > 0;
	}

	constructor(public readonly key: TriggerKey) {}

	attach(context: Context): void {
		this.context = context;
		this.attached = true;

		this.onAttach();
	}

	detach(): void {
		this.onDetach();

		this.attached = false;
		this.context = null;
	}

	abstract onAttach(): void;
	abstract onDetach(): void;

	trigger(score?: number) {
		const { config, emit, logger } = this.context!;

		if (!this.attached) {
			return;
		}

		const payload = (score) ? { score } : undefined;
		const data = sendEvent(config, this.key, payload);

		emit(LifecycleHook.Triggered, { kind: this.kind, data });
		logger.debug(`Goal '${this}' was triggered`);

		this.count += 1;
	}

	toString() {
		return `${this.kind}`;
	}
}
