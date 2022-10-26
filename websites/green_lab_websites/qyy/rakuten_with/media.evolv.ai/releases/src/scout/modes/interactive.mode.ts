import { PromiseShim } from '~/external-shims';
import { SessionStorageKey } from '../../shared/utils/storage/session-storage';
import * as ssm from '../../shared/utils/storage/session-storage';
import { Mode } from './mode';


export function isInInteractiveMode() {
	return ssm.get(SessionStorageKey.InteractiveMode) === 'true';
}

/**
 * Disabled Mode
 */
export default {
	shouldActivate() {
		return isInInteractiveMode();
	},
	activate(): PromiseShim<any> {
		return PromiseShim.resolve();
	}
} as Mode;
