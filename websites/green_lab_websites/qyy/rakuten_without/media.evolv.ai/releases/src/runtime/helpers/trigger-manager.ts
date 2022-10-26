import { fromArray, newMap } from '~/shims';
import { addEventListener } from '../../shared/mangleable';
import { Context } from '../context';
import { Trigger, TriggerKey } from '../triggers';


export class TriggerManager {
	public readonly triggers = newMap<TriggerKey, Trigger>();

	get logger() {
		return this.context.logger;
	}

	constructor(private readonly context: Context) {
		/* Handling for single-page applications.  */
		addEventListener('popstate', this.rerun.bind(this));
		addEventListener('pushstate_evolv', this.rerun.bind(this));
	}

	clear() {
		this.detachAll();
		this.triggers.clear();
	}

	add(trigger: Trigger) {
		this.triggers.set(trigger.key, trigger);
	}

	attachAll() {
		for (const [, trigger] of fromArray(this.triggers)) {
			trigger.attach(this.context);
		}
	}

	detachAll() {
		for (const [, trigger] of fromArray(this.triggers)) {
			trigger.detach();
		}
	}

	private rerun() {
		this.detachAll();
		this.attachAll();
	}
}
