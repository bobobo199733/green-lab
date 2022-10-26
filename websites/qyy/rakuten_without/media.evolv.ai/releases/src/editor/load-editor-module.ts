import { PromiseShim } from '~/external-shims';
import { Context } from '..';
import { ExecutionPlanLoadFailed } from '../scout/errors';
import { loadScript } from '../scout/utils';
import { querySelector } from '../shared/mangleable';


export function loadEditorModule(context: Context): PromiseShim<IEditor> {
	const { editorUrl } = context.config;
	const esmEditorUrl = editorUrl.replace(/(\.min)?\.js$/, '$1.mjs');
	const selector = editorUrl.replace(/(\.min)?\.js$/, '');

	/* Check if editor has already been loaded. */
	if (querySelector(`script[src ^= '${selector}']`)) {
		return window.evolv.editor as unknown as PromiseShim<IEditor>;
	}

	try {
		return loadScript(editorUrl, esmEditorUrl)
			.then(() => {
				return window.evolv.editor;
			});
	} catch (err) {
		context.logger.error('Editor failed to load');
		return PromiseShim.reject(new ExecutionPlanLoadFailed()) as PromiseShim<IEditor>;
	}
}
