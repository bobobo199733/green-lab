import { fromArray, newSet } from '~/shims';
import { querySelectorAll } from '../../shared/mangleable';
import { Predicate } from '../predicate';
import { Trigger, TriggerKey, TriggerKind } from './trigger';

export class ClickEventTrigger extends Trigger {
	public readonly kind = TriggerKind.ClickEvent;

	private listeners = newSet<Node>();

	constructor(
		key: TriggerKey,
		public readonly predicate: Predicate,
		public readonly selector: string
	) {
		super(key);
	}

	onAttach(): void {
		if (!this.predicate(this.context!)) {
			return;
		}

		const elems = querySelectorAll(this.selector);

		for (const el of fromArray(elems)) {
			el.addEventListener('click', this.onClick);
			this.listeners.add(el);
		}
	}

	onDetach(): void {
		for (const el of fromArray(this.listeners)) {
			el.removeEventListener('click', this.onClick);
		}

		this.listeners.clear();
	}

	onClick = () => {
		this.trigger();
	};

	toString() {
		return `Click Event (${this.selector})`;
	}
}
