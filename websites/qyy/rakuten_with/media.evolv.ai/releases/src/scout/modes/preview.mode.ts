import { PromiseShim } from '~/external-shims';
import { Logger, ScoutConfig } from '../../shared';
import { location } from '../../shared/mangleable';
import { SessionStorageKey } from '../../shared/utils/storage/session-storage';
import * as ssm from '../../shared/utils/storage/session-storage';
import { HaltSignal } from './halt.signal';
import { Mode } from './mode';


// uuid rfc4122
// tslint:disable-next-line:max-line-length
const PREVIEW_RE = `${SessionStorageKey.EvolvPreviewParam}=([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}\\.json)`;
const PREVIEW_RE_REPLACE = `#?&?${PREVIEW_RE}`;

/**
 * Live Preview Mode
 */
export default {

	shouldActivate() {
		return new RegExp(PREVIEW_RE).test(location.hash);
	},

	activate(config: ScoutConfig, logger: Logger): PromiseShim<any> {
		const match = location.hash.match(new RegExp(PREVIEW_RE));

		if (match) {
			const previewId = match[1];

			ssm.set(SessionStorageKey.EvolvPreviewParam, previewId);
			location.href = location.href.replace(new RegExp(PREVIEW_RE_REPLACE), '');

			logger.debug('Live Preview mode activated');
		}

		return PromiseShim.reject(new HaltSignal('Live preview mode'));
	}

} as Mode;
