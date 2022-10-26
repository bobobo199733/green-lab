import { PromiseShim } from '~/external-shims';
import { Logger, ScoutConfig } from '../../shared';
import { location } from '../../shared/mangleable';
import { SessionStorageKey } from '../../shared/utils/storage/session-storage';
import * as ssm from '../../shared/utils/storage/session-storage';
import { HaltSignal } from './halt.signal';
import { Mode } from './mode';


// uuid rfc4122
// tslint:disable-next-line:max-line-length
export const QA_RE = `${SessionStorageKey.EvolvCandidateToken}=(([0-9]+)_([0-9]+)_([0-9a-z]+))`;
const QA_RE_REPLACE = `#?&?${QA_RE}`;

/**
 * QA Mode
 */
export default {

	shouldActivate(config: ScoutConfig) {
		const match = location.hash.match(new RegExp(QA_RE));
		return match && config.environmentId === match[4];
	},

	activate(config: ScoutConfig, logger: Logger): PromiseShim<any> {
		const match = location.hash.match(new RegExp(QA_RE));

		if (match) {
			const token = match[1];

			ssm.set(SessionStorageKey.EvolvCandidateToken, token);
			location.href = location.href.replace(new RegExp(QA_RE_REPLACE), '');

			logger.debug('QA mode activated');
		}

		return PromiseShim.reject(new HaltSignal('QA mode'));
	}

} as Mode;
