import { Trigger, TriggerKey, TriggerKind } from './trigger';


export class ManualTrigger extends Trigger {
	public readonly kind = TriggerKind.Manual;

	get triggered(): boolean {
		/* Manual triggers are permitted to fire multiple times. */
		return false;
	}

	constructor(key: TriggerKey) {
		super(key);
	}

	onAttach(): void {}

	onDetach(): void {}

	trigger() {
		if (this.attached) {
			super.trigger();
		}
	}

	toString() {
		return `Manual Trigger (${this.key})`;
	}
}
