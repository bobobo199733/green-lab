import { Recorder } from './recorder';
import { Treatment } from './treatment.enum';


/** @hidden */
export const TreatmentAttributeName = 'data-evolv-treatment';
/** @hidden */
export const TreatmentAttributeDataSetName = 'evolvTreatment';

/** @hidden */
export const HtmlElementRecorder: Recorder<HTMLElement, any> = {
	record(element: HTMLElement, value: any, treatment: Treatment) {
		element.dataset[TreatmentAttributeDataSetName] = treatment;
	}
};
