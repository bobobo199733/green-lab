import { sendBeacon } from '~/shims';
import { getTracker, ScoutConfig } from '../../shared';
import { UniqueId } from '../../shared/utils';
import { Omit } from '../../typings';


export type SpecialEventType = 'confirmation' | 'contamination';
export type SpecialEventReason = 'timeout-exceeded' | 'error-thrown' | 'user-generated';

export interface EventData {
	type: string;
	uid: UniqueId;
	sid: UniqueId;
	score?: number;
}

export interface SpecialEventData extends EventData {
	type: SpecialEventType;
	cid: UniqueId;
	reason?: SpecialEventReason;
	detail?: string;
}

export function sendEvent(config: ScoutConfig, type: Exclude<string, SpecialEventType>, extra?: Pick<EventData, 'score'>): EventData;
export function sendEvent(config: ScoutConfig, type: SpecialEventType, extra: Omit<SpecialEventData, keyof EventData>): SpecialEventData;
export function sendEvent(config: ScoutConfig, type: string, data: object = {}): EventData | SpecialEventData {
	const { apiUrl, environmentId } = config;
	const { uid, sid, previewId, previewCid } = getTracker(config.cookieDomains);

	const payload = {
		type,
		uid,
		sid,
		...data
	};

	let eventsPath = 'events';
	if (previewId || previewCid) {
		eventsPath = 'preview-events';
	}

	sendBeacon(`${apiUrl}/v1/${environmentId}/${eventsPath}`, JSON.stringify(payload));

	return payload;
}
