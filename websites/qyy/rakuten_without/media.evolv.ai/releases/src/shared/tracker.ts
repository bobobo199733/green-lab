import { DAYS_30, YEARS_2 } from './constants';
import { UniqueId, uniqueId } from './utils';
import { CookieKey, getCookies, setCookie } from './utils/storage';
import { location } from './mangleable';
import { URLSearchParams } from '~/shims';
import * as ssm from '../shared/utils/storage/session-storage';
import { SessionStorageKey } from './utils/storage/session-storage';


export interface Tracker {
	/** User ID */
	uid: UniqueId;

	/** Device ID */
	did: UniqueId;

	/** Session ID */
	sid: UniqueId;

	/** @hidden **/
	previewId: string | null;

	/** @hidden **/
	previewCid: string | null;

	/** Candidate Token **/
	candidateToken: string | null;
}

/**
 * Returns a tracker object as well as initializing any of the corresponding cookies if needed.
 */
export function getTracker(domains: string[] = []): Tracker {
	const cookies = getCookies();

	const userId = cookies.get(CookieKey.UserId) || uniqueId();
	const deviceId = cookies.get(CookieKey.DeviceId) || uniqueId();
	const sessionId = cookies.get(CookieKey.SessionId) || uniqueId();

	for (const domain of domains) {
		setCookie(CookieKey.UserId, userId, { domain, millis: YEARS_2 });
		setCookie(CookieKey.DeviceId, deviceId, { domain, millis: YEARS_2 });
		setCookie(CookieKey.SessionId, sessionId, { domain, millis: DAYS_30 });
	}

	const previewId = ssm.get(SessionStorageKey.EvolvPreviewParam);
	const previewCid = ssm.get(SessionStorageKey.EvolvPreviewCidParam);
	const candidateToken = ssm.get(SessionStorageKey.EvolvCandidateToken);

	return {
		uid: userId,
		sid: sessionId,
		did: deviceId,
		previewId,
		previewCid,
		candidateToken
	};
}
