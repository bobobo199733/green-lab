import { Recorder } from './recorder';

//noinspection JSUnusedLocalSymbols

export const NullRecorder: Recorder<any, any> = {
	record(element: any, value: any, state: string) {
		// Do nothing
	}
};
