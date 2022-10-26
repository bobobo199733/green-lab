import { PromiseShim } from '~/external-shims';
import { Logger, ScoutConfig } from '../../shared';
import { decodeURIComponent, location } from '../../shared/mangleable';
import { SessionStorageKey } from '../../shared/utils/storage/session-storage';
import * as ssm from '../../shared/utils/storage/session-storage';
import { HaltSignal } from './halt.signal';
import { Mode } from './mode';


const EvolvPreviewCidParam = SessionStorageKey.EvolvPreviewCidParam;

const PreviewCidRegex = `${EvolvPreviewCidParam}=([0-9a-f]+(?:(?:%3a|:)[0-9a-f]+)+)`;
const PreviewCidReplaceRegex = `#?&?${PreviewCidRegex}`;

/**
 * Preview Candidate Mode
 */
export default {

	shouldActivate() {
		const regex = new RegExp(PreviewCidRegex, 'i');
		return regex.test(location.hash);
	},

	activate(config: ScoutConfig, logger: Logger): PromiseShim<any> {
		const regex = new RegExp(PreviewCidRegex, 'i');
		const match = location.hash.match(regex);

		if (match) {
			const previewCid = decodeURIComponent(match[1]);
			const replaceRegex = new RegExp(PreviewCidReplaceRegex, 'i');

			ssm.set(EvolvPreviewCidParam, previewCid);
			location.href = location.href.replace(replaceRegex, '');

			logger.debug('Preview Candidate mode activated');
		}

		return PromiseShim.reject(new HaltSignal('Preview candidate mode'));
	}
} as Mode;
