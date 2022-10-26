import {
	createAttributeMutator, createClassNamesMutator, createCompoundMutator, createHtmlMutator, createJavascriptMutator,
	createNoopMutator, createStyleMutator, createStylesheetMutator, createTextMutator, ElementMutation, JavascriptMutation,
	MutationType, Mutator, StyleProperty, StylesheetMutation
} from '../runtime/mutations';
import { uniqueId } from '../shared/utils';
import { Facade } from './facade';


export const factories: Facade<Mutator> = {
	attribute(selector: string, attributeName: string, value: string): Mutator {
		return createAttributeMutator({
			type: MutationType.Attribute,
			selector,
			property: attributeName,
			value
		});
	},
	classNames(selector: string, classNames: string | string[], additive: boolean): Mutator {
		return createClassNamesMutator({
			type: MutationType.ClassNames,
			selector,
			property: '',
			value: Array.isArray(classNames)
				? classNames.join(' ')
				: classNames,
			additive
		});
	},
	compound(id: string, styles: string = '', script: string = '', undoCode: string = ''): Mutator {
		const mutation = {
			type: MutationType.Compound,
			value: undefined,
			id,
			script,
			styles,
			undoCode
		};

		return createCompoundMutator(mutation);
	},
	javascript(id: string, code: string, undoCode: string = ''): Mutator {
		const mutation: JavascriptMutation = {
			type: MutationType.Javascript,
			value: code,
			id,
			undoCode
		};

		return createJavascriptMutator(mutation);
	},
	html(selector: string, htmlString: string): Mutator {
		const mutation: ElementMutation = {
			type: MutationType.Html,
			selector,
			property: '',
			value: htmlString
		};

		return createHtmlMutator(mutation);
	},
	inlineStyle(selector: string, styleProperty: StyleProperty, value: string): Mutator {
		const mutation: ElementMutation = {
			type: MutationType.Style,
			selector,
			property: styleProperty,
			value
		};

		return createStyleMutator(mutation);
	},
	noop() {
		return createNoopMutator({ type: MutationType.Noop, value: '' });
	},
	style(selector: string, styleProperty: StyleProperty, value: string, important?: boolean): Mutator {
		const stylesheet = `
			${selector} { ${styleProperty}: ${value}${important ? ' !important' : ''}; }
		`;

		const mutation: StylesheetMutation = {
			type: MutationType.Stylesheet,
			value: stylesheet.trim(),
			id: uniqueId()
		};

		return createStylesheetMutator(mutation);
	},
	stylesheet(id: string, css: string): Mutator {
		const mutation: StylesheetMutation = {
			type: MutationType.Stylesheet,
			value: css,
			id
		};

		return createStylesheetMutator(mutation);
	},
	text(selector: string, content: string): Mutator {
		const mutation: ElementMutation = {
			type: MutationType.Text,
			selector,
			property: '',
			value: content
		};

		return createTextMutator(mutation);
	}
};
