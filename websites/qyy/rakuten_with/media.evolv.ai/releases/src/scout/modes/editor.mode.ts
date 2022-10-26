import { PromiseShim } from '~/external-shims';
import { URLSearchParams } from '~/shims';
import { ScoutConfig } from '../../shared';
import { location } from '../../shared/mangleable';
import { SessionStorageKey } from '../../shared/utils/storage/session-storage';
import * as ssm from '../../shared/utils/storage/session-storage';
import { loadScriptWithTag } from '../utils';
import { Mode } from './mode';


function stripEditorPayload(href: String) {
	return href.replace(new RegExp(`[#&]${SessionStorageKey.AscendEditorKey}=[^&]*`), '');
}

export function isInEditorMode() {
	return !!ssm.get(SessionStorageKey.AscendEditorKey);
}

export function processParameter() {
	if (!location.hash) {
		return;
	}

	const payload = new URLSearchParams(location.hash.substring(1)).get(SessionStorageKey.AscendEditorKey);

	if (!payload) {
		return;
	}

	ssm.set(SessionStorageKey.AscendEditorKey, atob(payload));
	location.href = stripEditorPayload(location.href);
}

export function initialize(config: ScoutConfig) {
	const payload = ssm.get(SessionStorageKey.AscendEditorKey);

	if (!payload) {
		return PromiseShim.resolve();
	}

	return loadScriptWithTag(config.editorAdapterUrl);
}

/**
 * Mode representing the Editor QA Mode of the Ascend client
 */
export default {
	shouldActivate() {
		return (location.hash.indexOf(`${SessionStorageKey.AscendEditorKey}=`) >= 0
			|| ssm.get(SessionStorageKey.AscendEditorKey) !== null);
	},
	activate(config: ScoutConfig): PromiseShim<any> {
		processParameter();
		return initialize(config)
			.catch(err => PromiseShim.reject(
				new Error('Editor Mode: Error loading adapter')
			));
	}
} as Mode;
