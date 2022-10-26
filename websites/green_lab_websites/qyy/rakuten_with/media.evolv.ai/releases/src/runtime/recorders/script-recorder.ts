import { Recorder } from './recorder';


export const StatusAttributeName = 'data-evolv-status';
export const StatusAttributeDataSetName = 'evolvStatus';

export const enum ScriptStatus {
	Applied = 'applied',
	Errored = 'errored',
	Reverted = 'reverted',
	Unapplied = 'unapplied'
}

export const ScriptRecorder: Recorder<HTMLElement, any> = {
	record(element: HTMLElement, value: any, status: ScriptStatus) {
		element.dataset[StatusAttributeDataSetName] = status;
	}
};
