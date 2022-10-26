export const fromArray = Array.from;
export const sendBeacon = navigator.sendBeacon.bind(navigator);
export const URLSearchParams = window.URLSearchParams;

export function findIndex<T>(items: T[], predicate: (value: T, index: number, obj: T[]) => boolean) {
	return items.findIndex(predicate);
}

export function newMap<K, V>(values?: any) {
	return new Map<K, V>(values); // tslint:disable-line:no-map
}

export function newSet<T>(values?: ReadonlyArray<T> | T[] | Iterable<T>) {
	return new Set<T>(values as T[]); // tslint:disable-line:no-set
}

export function padStart(str: string, targetLength: number, padString?: string) {
	return str.padStart(targetLength, padString);
}

export function padEnd(str: string, targetLength: number, padString?: string) {
	return str.padEnd(targetLength, padString);
}
