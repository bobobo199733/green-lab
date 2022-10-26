import { decodeURIComponent, document } from '../../mangleable';


const regex = /^(.+?)=(.*)$/;

export enum CookieKey {
	CandidateIds = 'evolv:cids',
	DeviceId = 'evolv:did',
	SessionId = 'evolv:sid',
	UserId = 'evolv:uid'
}

export interface CookieOptions {
	millis: number;
	domain: string;
	path: string;
}

export function getCookies(): Map<CookieKey, any> {
	const cookies = document.cookie
		? document.cookie.split('; ')
		: [];

	return cookies.reduce((map, cookie) => {
		const match = regex.exec(cookie);

		if (!match) {
			return map;
		}

		const key = decodeURIComponent(match[1]);
		const rawValue = decodeURIComponent(match[2]);
		let value;

		try {
			value = JSON.parse(rawValue);
		} catch {
			value = rawValue.replace(/^"(.*)"$/, '$1');
		}

		map.set(key, value);

		return map;
	}, new Map());  // tslint:disable-line:no-map
}

export function getCookie<T = string>(name: CookieKey): T | null {
	const cookies = getCookies();
	return cookies.get(name) || null;
}

export function hasCookie(name: CookieKey): boolean {
	return getCookies().has(name);
}

export function setCookie(name: CookieKey, value: string, options: Partial<CookieOptions> = {}) {
	const domain = (options.domain) ? `; domain=${options.domain}` : '';
	const path = `; path=${options.path || '/'}`;
	let expires = '';

	if (options.millis) {
		const date = new Date();
		date.setTime(date.getTime() + options.millis);
		expires = '; expires=' + date.toUTCString();
	}

	document.cookie = `${name}=${value}${expires}${domain}${path}`;
}

export function setJsonCookie<T extends object = object>(name: CookieKey, value: T, options?: Partial<CookieOptions>) {
	return setCookie(name, JSON.stringify(value), options);
}
