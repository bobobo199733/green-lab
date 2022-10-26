import { document, querySelector } from '../../shared/mangleable';
import { Api } from '../../api';
import { ScriptRecorder, ScriptStatus, StatusAttributeDataSetName } from '../recorders';
import { createScriptTag } from '../utils';
import { Mutation, MutationType } from './mutation';
import { Mutator, MutatorArgs } from './mutator';


export interface JavascriptMutation extends Mutation {
	id: string;
	undoCode?: string;
}

const scripts = window.evolv.scripts;

export function isJavascriptMutation(value: any): value is JavascriptMutation {
	return (value.type === MutationType.Javascript)
		&& 'value' in value
		&& 'undoCode' in value;
}

export function createJavascriptMutator(mutation: JavascriptMutation): Mutator {
	if (!isJavascriptMutation(mutation)) {
		throw new TypeError('The mutation object is not valid for this mutator.');
	}

	const api: Api = new Api();

	const codeId = `evolv_${mutation.id}`;
	const undoCodeId = '~' + codeId;

	let codeTag: HTMLScriptElement | null = querySelector(`script[id = '${codeId}']`);
	let undoTag: HTMLScriptElement | null = querySelector(`script[id = '${undoCodeId}']`);

	if (!codeTag) {
		codeTag = createScriptTag(codeId, mutation.value);
		document.body.appendChild(codeTag);
	}

	if (!undoTag) {
		undoTag = createScriptTag(undoCodeId, mutation.undoCode);
		document.body.appendChild(undoTag);
	}

	return {
		mutate(args: MutatorArgs) {
			if (!codeTag) {
				return;
			}

			const status = codeTag.dataset[StatusAttributeDataSetName];

			if (status === ScriptStatus.Applied || status === ScriptStatus.Errored) {
				return;
			}

			try {
				scripts[codeId](api);
				ScriptRecorder.record(codeTag, codeId, ScriptStatus.Applied);
			} catch (e) {
				ScriptRecorder.record(codeTag, codeId, ScriptStatus.Errored);
				args.logger.error(`An error occurred in JavaScript mutator '${codeId}'\n`, codeTag, '\n', e);

				throw e;
			} finally {
				if (undoTag) {
					const undoStatus = undoTag.dataset[StatusAttributeDataSetName];

					if (undoStatus !== ScriptStatus.Errored && undoStatus !== ScriptStatus.Unapplied) {
						ScriptRecorder.record(undoTag, undoCodeId, ScriptStatus.Reverted);
					}
				}
			}
		},
		revert(args: MutatorArgs) {
			if (!undoTag) {
				return;
			}

			const status = undoTag.dataset[StatusAttributeDataSetName];

			if (status === ScriptStatus.Applied || status === ScriptStatus.Errored) {
				return;
			}

			try {
				scripts[undoCodeId](api);
				api && api.dispose();

				ScriptRecorder.record(undoTag, undoCodeId, ScriptStatus.Applied);
			} catch (e) {
				ScriptRecorder.record(undoTag, undoCodeId, ScriptStatus.Errored);
				args.logger.warn(
					`An error in JavaScript undo mutator '${undoCodeId}' was suppressed because the page plan is reverting\n`,
					undoTag,
					'\n',
					e
				);
			} finally {
				if (codeTag && codeTag.dataset[StatusAttributeDataSetName] !== ScriptStatus.Errored) {
					ScriptRecorder.record(codeTag, codeId, ScriptStatus.Reverted);
				}
			}
		}
	};
}
