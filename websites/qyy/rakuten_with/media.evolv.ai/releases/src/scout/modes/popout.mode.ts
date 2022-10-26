import { BRIDGE_URL } from '~/configuration';
import { PromiseShim } from '~/external-shims';
import { QueryParamKey } from '../../shared/constants';
import { location } from '../../shared/mangleable';
import { loadScriptWithTag } from '../utils';
import { HaltSignal } from './halt.signal';
import { Mode } from './mode';


/**
 * Popout Mode
 */
export default {
	shouldActivate() {
		return (location.search.indexOf(`${QueryParamKey.Bridge}=true`) >= 0);
	},
	activate(): PromiseShim<any> {
		loadScriptWithTag(BRIDGE_URL); // Promise has been knowingly orphaned here
		return PromiseShim.reject(new HaltSignal('Popout mode'));
	}
} as Mode;
