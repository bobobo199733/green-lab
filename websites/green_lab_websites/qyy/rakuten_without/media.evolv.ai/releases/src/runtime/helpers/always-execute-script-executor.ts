import { newMap, newSet } from '~/shims';
import { Queue } from '../../shared/data-structures';
import { difference } from '../../shared/utils';
import { Context } from '../context';
import { ScriptRecorder, ScriptStatus } from '../recorders';
import { createScriptTag } from '../utils';


export type AlwaysExecuteIife = () => void;

const scripts = window.evolv.scripts;

export class AlwaysExecuteScriptExecutor {
	private queue = new Queue<string>();
	private scripts = newMap<string, HTMLScriptElement>();
	private scriptsRan = newSet<string>();

	add(id: string, iife: AlwaysExecuteIife | string) {
		if (this.scripts.has(id)) {
			return;
		}

		/* IE11 Quirk: document.body does not yet exist for scripts running in <head> */
		const container = document.body || document.head;

		const tag = createScriptTag(`evolv_alwaysExecute_${id}`, iife);
		container.appendChild(tag);

		this.scripts.set(id, tag);
		this.queue.enqueue(id);
	}

	canStageProceed() {
		if (this.scriptsRan.size === 0) {
			return true;
		}

		const queued = newSet(this.queue.items);
		const diff = difference(queued, this.scriptsRan);

		return (diff.size === 0);
	}

	execute(context: Context) {
		while (!this.queue.isEmpty) {
			const id = this.queue.dequeue()!;
			const tag = this.scripts.get(id)!;
			const func = scripts[tag.id];

			if (!func) {
				continue;
			}

			try {
				func();
				this.scriptsRan.add(id);

				ScriptRecorder.record(tag, '', ScriptStatus.Applied);

				context.logger.debug(`Always-execute script '${id}' ran`);
			} catch (err) {
				ScriptRecorder.record(tag, '', ScriptStatus.Errored);
				context.logger.error(`Always-execute script '${id}' encountered an error\n`, tag, '\n', err);

				throw err;
			}
		}

	}
}
