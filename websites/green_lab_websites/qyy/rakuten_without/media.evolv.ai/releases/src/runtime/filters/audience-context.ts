import { URLSearchParams } from '~/shims';
import { document } from '../../shared/mangleable';
import { toObject } from '../../shared/utils/map';
import { fromEntries } from '../../shared/utils/object';
import { getCookies } from '../../shared/utils/storage';
import { BrowserType } from './browser-type.enum';
import { DeviceType } from './device-type.enum';
import { Platform } from './platform.enum';
import { Omit } from '../../typings';


export type UserAttributes = Record<string, any>;

export interface ClientSideAudienceContext {
	cookie: Record<string, any>;
	queryStringParameters: Record<string, string>;
	userAttributes: UserAttributes;
	// client side referrer used by client side audience filter rule (the referrer to the page)
	referrer_url: string | null;
}

export type SnakeCaseAudienceKeys = 'query_parameter' | 'user_attributes';

export interface ServerSideAudienceContext {
	browser: BrowserType;
	device: DeviceType;
	// TODO RKT-6065 once participants API has been updated to use country we can remove location and make country required
	location?: string;
	country?: string;
	platform: Platform;
	// referrer of the server side request (the page that made the request to participants api)
	referrerUrl: string;
}

export interface ServerSideAudienceContextV2 extends Omit<ServerSideAudienceContext, 'browser'> {
	web: {
		client: {
			browser: BrowserType;
		};
	};
	[key: string]: any;
}

export function isV1AudienceContext(value: any): value is ServerSideAudienceContext {
	return !('web' in value);
}

export type AudienceContext = ClientSideAudienceContext & ServerSideAudienceContextV2;

export const defaultAudienceContext: AudienceContext = {
	web: {
		client: {
			browser: BrowserType.Unspecified
		}
	},
	cookie: {},
	device: DeviceType.Unspecified,
	location: '',
	platform: Platform.Unspecified,
	queryStringParameters: {},
	referrerUrl: document.referrer,
	userAttributes: {},
	referrer_url: document.referrer,
};

/** @hidden */
export function buildAudienceContext(audienceContext: Partial<AudienceContext>): AudienceContext {
	const preload = window.evolvPreload || {};
	const ac = {
		...defaultAudienceContext,
		...audienceContext,
		cookie: toObject(getCookies()),
		queryStringParameters: getQueryParams(),
		userAttributes: preload.userAttributes || {}
	};

	// TODO RKT-6065 remove once participants API has been updated
	if (audienceContext.country === undefined) {
		ac.country = audienceContext.location;
	}

	return ac;
}

export function getQueryParams() {
	const qsp = new URLSearchParams(location.search);
	const entries: [string, string][] = [];

	qsp.forEach((value, key) => {
		entries.push([key, value]);
	});

	return fromEntries(entries);
}
