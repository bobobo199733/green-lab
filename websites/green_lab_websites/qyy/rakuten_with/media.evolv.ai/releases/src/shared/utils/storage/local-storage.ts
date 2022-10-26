import { localStorage } from '../../mangleable';


export const enum LocalStorageKey {
	PlanVersion = 'evolv:planVersion'
}

export function has(key: LocalStorageKey): boolean {
	return (localStorage.getItem(key) !== null);
}

export function get(key: LocalStorageKey): string {
	return localStorage.getItem(key) as string;
}

export function set(key: LocalStorageKey, value: string): void {
	localStorage.setItem(key, value);
}
