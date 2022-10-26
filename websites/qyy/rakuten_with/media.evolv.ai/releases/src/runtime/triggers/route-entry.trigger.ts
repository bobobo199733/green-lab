import { Predicate } from '../predicate';
import { Trigger, TriggerKey, TriggerKind } from './trigger';


export class RouteEntryTrigger extends Trigger {
	public readonly kind = TriggerKind.RouteEntry;

	constructor(key: TriggerKey, public readonly predicate: Predicate) {
		super(key);
	}

	onAttach(): void {
		if (this.predicate(this.context!)) {
			this.trigger();
		}
	}

	onDetach(): void {}

	toString() {
		return `Route Entry (${this.predicate})`;
	}
}
