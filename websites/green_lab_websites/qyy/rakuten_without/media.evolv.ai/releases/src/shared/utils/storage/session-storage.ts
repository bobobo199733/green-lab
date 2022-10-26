import { sessionStorage } from '../../mangleable';


export const enum SessionStorageKey {
	AscendEditorKey = '_ascend_editor', // TODO: Rebrand to Evolv when Ascend Classic is phased out
	EvolvPreviewParam = 'evolv-previewid',
	EvolvPreviewCidParam = 'evolv-previewcid',
	EvolvCandidateToken = 'evolvCandidateToken',
	InteractiveMode = 'evolv:interactiveMode'
}

export function has(key: SessionStorageKey): boolean {
	return (sessionStorage.getItem(key) !== null);
}

export function get(key: SessionStorageKey): string {
	return sessionStorage.getItem(key) as string;
}

export function set(key: SessionStorageKey, value: string): void {
	sessionStorage.setItem(key, value);
}
