import { createElement } from '../../shared/mangleable';
import { ScriptStatus, StatusAttributeDataSetName } from '../recorders';


const scriptsNamespace = 'window.evolv.scripts';

export function createScriptTag(id: string, code?: string | Function): HTMLScriptElement {
	const tag = createElement('script') as HTMLScriptElement;
	tag.id = id;
	tag.text = namedFunction(id, code || '', ['api']);
	tag.dataset[StatusAttributeDataSetName] = ScriptStatus.Unapplied;

	return tag;
}

function namedFunction(name: string, code: string | Function, argNames: string[] = [], fnName = 'mutator') {
	const argList = argNames.join(', ');

	const fn = (typeof code === 'function')
		? code.toString()
		: `function ${fnName}(${argList}) { ${code} }`;

	const content =
		`(function(scripts) {
	scripts['${name}'] = ${fn};
})(${scriptsNamespace});`;

	return content;
}
