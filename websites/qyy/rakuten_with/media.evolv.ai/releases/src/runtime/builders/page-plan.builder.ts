import { factories, Facade } from '../../api';
import { StyleProperty} from '../mutations';
import { Initializer, PagePlan } from '../plans';


/**
 * Provides an API for building page plans which the runtime will use to construct the set of mutations
 * applied to a page.
 */
export class PagePlanBuilder implements Facade<void> {
	constructor(private readonly plan: PagePlan) {}

	/**
	 * Add an initializer function that will be run every time that the page plan is activated.
	 *
	 * @param initializer
	 */
	addInitializer(initializer: Initializer) {
		this.plan.addInitializer(initializer);
	}

	/**
	 * Adds an attribute mutation to the page plan.
	 *
	 * @example
	 * ```
	 * plan.attribute('div', 'title', 'New title');
	 * ```
	 *
	 * ```
	 * <!-- Before mutation -->
	 * <div title="Old title"></div>
	 *
	 * <!-- After mutation -->
	 * <div title="New title"></div>
	 * ```
	 *
	 * @param selector Selector expression
	 * @param attributeName Name of attribute to mutate
	 * @param value Value to set attribute to
	 */
	attribute(selector: string, attributeName: string, value: string): void {
		const mutator = factories.attribute(selector, attributeName, value);
		this.plan.addMutator(mutator);
	}

	/**
	 * Adds a class names mutation to the page plan.
	 *
	 * @example
	 * ```
	 * plan.classNames('div', 'yellow blue', false);
	 * ```
	 *
	 * ```
	 * <!-- Before mutation -->
	 * <div class="red green"></div>
	 *
	 * <!-- After mutation -->
	 * <div class="yellow blue"></div>
	 * ```
	 *
	 * @example
	 * ```
	 * plan.classNames('div', 'yellow blue', true);
	 * ```
	 *
	 * ```
	 * <!-- Before mutation -->
	 * <div class="red green"></div>
	 *
	 * <!-- After mutation -->
	 * <div class="red green yellow blue"></div>
	 * ```
	 *
	 * @param selector Selector expression
	 * @param classNames Array or space-separated list of class names to add or append to selected elements
	 * @param additive When true, overwrites all class names that exist on the selected elements.
	 *                 When false, appends class names rather than overwriting.
	 */
	classNames(selector: string, classNames: string | string[], additive: boolean = false): void {
		const mutator = factories.classNames(selector, classNames, additive);
		this.plan.addMutator(mutator);
	}

	/**
	 * Adds a mutation with both a JavaScript and stylesheet mutation.
	 *
	 * @example
	 * ```
	 * plan.compound('1', 'button { color: red };', 'document.querySelector("button").innerText = "New Label"');
	 * ```
	 *
	 * @param id Unique identifier for script block, such as a hash
	 * @param styles CSS to apply as stylesheet mutation
	 * @param script JavaScript to apply as JavaScript mutation
	 * @param undoCode JavaScript code which undoes code applied by `code`
	 */
	compound(id: string, styles: string = '', script: string = '', undoCode: string = ''): void {
		const mutator = factories.compound(id, styles, script, undoCode);
		this.plan.addMutator(mutator);
	}

	/**
	 * Adds an HTML mutation to the page plan.
	 *
	 * @description
	 * HTML mutations insert a new block of HTML elements into the `innerHTML` property of the selected elements
	 * The original children of the selected elements will be overwritten.
	 *
	 * @example
	 * ```
	 * plan.html('div', '<b>New HTML</b>');
	 * ```
	 *
	 * ```
	 * <!-- Before mutation -->
	 * <div>Old HTML</div>
	 *
	 * <!-- After mutation -->
	 * <div><b>New HTML</b></div>
	 * ```
	 *
	 * @param selector Selector expression
	 * @param htmlString HTML string to insert into `innerHTML` of selected elements
	 */
	html(selector: string, htmlString: string): void {
		const mutator = factories.html(selector, htmlString);
		this.plan.addMutator(mutator);
	}

	/**
	 * Adds an inline style mutation to the page plan.
	 *
	 * @description
	 * Inline style mutations mutate the value of a style property. Only the value of the specified
	 * style property is mutated; other style properties are preserved.
	 *
	 * Style or stylesheet mutations are the recommended approach for mutating style for most cases. Because
	 * these inline style mutations are applied inline, they will have the greater specificity and therefore
	 * will supersede any CSS rules defined in stylesheets. They are also less performant and more
	 * susceptible to FOUC.
	 *
	 * @example
	 * ```
	 * plan.inlineStyle('div', 'color', 'blue');
	 * ```
	 *
	 * ```
	 * <!-- Before mutation -->
	 * <div style="font-size: 12pt; color: red;"></div>
	 *
	 * <!-- After mutation -->
	 * <div style="font-size: 12pt; color: blue;"></div>
	 * ```
	 *
	 * @param selector Selector expression
	 * @param styleProperty Name of style property to mutate
	 * @param value Value to set on attribute
	 *
	 * @see style
	 */
	inlineStyle(selector: string, styleProperty: StyleProperty, value: string): void {
		const mutator = factories.inlineStyle(selector, styleProperty, value);
		this.plan.addMutator(mutator);
	}

	/**
	 * Adds a JavaScript mutation to the page plan.
	 *
	 * @description
	 * JavaScript mutations append a new <script> block into the head of document. The script is given
	 * a unique ID derived on the contents of `code` so that the block can reverted. When possible you
	 * should include the JavaScript code that is idempotent (i.e. multiple executions will yield the
	 * same result) and revertible. This is particularly important for single-page applications in which
	 * mutations for the previous route must be reverted before applying mutations for the next route
	 * since the page is not reloaded.
	 *
	 * Because of the extra complexity required to revert a JavaScript mutation, it is recommended to
	 * use JavaScript mutations only when no other mutation type is suitable.
	 *
	 * @example
	 * ```
	 * plan.javascript('script1', `
	 *   document.querySelectorAll('h1').forEach(el => {
	 *     el.textContent = 'New heading';
	 *   });
	 * `, `
	 *   document.querySelectorAll('h1').forEach(el => {
	 *     el.textContent = 'Old heading';
	 *   });
	 * `);
	 * ```
	 *
	 * ```
	 * <!-- Before mutation -->
	 * <head></head>
	 * <body>
	 *   <h1>Old Heading</h1>
	 * </body>
	 *
	 * <!-- After mutation -->
	 * <head>
	 * <script id="script1">
	 *   document.querySelectorAll('h1').forEach(el => {
	 *     el.textContent = 'New heading';
	 *   });
	 * </script>
	 * </head>
	 * <body>
	 *   <h1>New heading</h1>
	 * </body>
	 *
	 * <!-- After reverting -->
	 * <head>
	 * <script id="~script1">
	 *   document.querySelectorAll('h1').forEach(el => {
	 *     el.textContent = 'Old heading';
	 *   });
	 * </script>
	 * </head>
	 * <body>
	 *   <h1>Old heading</h1>
	 * </body>
	 * ```
	 *
	 * @param id Unique identifier for script block, such as a hash
	 * @param code JavaScript code to insert into document
	 * @param undoCode JavaScript code which undoes code applied by `code`
	 */
	javascript(id: string, code: string, undoCode: string = ''): void {
		const mutator = factories.javascript(id, code, undoCode);
		this.plan.addMutator(mutator);
	}

	/**
	 * Adds a noop mutation to the page plan.
	 *
	 * @description
	 * A noop mutation applies no changes to the page. It serves only as a stub.
	 */
	noop(): void {
		const mutator = factories.noop();
		this.plan.addMutator(mutator);
	}

	/**
	 * Adds a style mutation to the page plan.
	 *
	 * @description
	 * Style mutations mutate the value of a style property. Only the value of the specified
	 * style property is mutated; other style properties are preserved.
	 *
	 * These mutations are the recommended approach for mutating style for most cases. In contrast
	 * to inline style mutations, style mutations are applied by inserting a new stylesheet with a
	 * single CSS rule.
	 *
	 * @example
	 * ```
	 * plan.style('div', 'color', 'blue', true);
	 * ```
	 *
	 * ```
	 * <!-- Before mutation -->
	 * <div style="font-size: 12pt;"></div>
	 *
	 * <!-- After mutation -->
	 * <style id="[generated]">
	 *     div { color: blue !important; }
	 * </style>
	 * <div style="font-size: 12pt;"></div>
	 * ```
	 *
	 * @param selector Selector expression
	 * @param styleProperty Name of style property to mutate
	 * @param value Value to set on attribute
	 * @param important If true, the !important flag is included in the CSS rule. Otherwise the flag is omitted.
	 */
	style(selector: string, styleProperty: StyleProperty, value: string, important: boolean = false): void {
		const mutator = factories.style(selector, styleProperty, value, important);
		this.plan.addMutator(mutator);
	}

	/**
	 * Adds a stylesheet mutation to the page plan.
	 *
	 * @description
	 * Stylesheet mutations append a new <style> block into the head of document. Because these mutations
	 * are appended rather than prepended, rules with equivalent specificity defined in earlier stylesheets
	 * will be superseded by the rules defined in these mutations.
	 *
	 * @example
	 * ```
	 * plan.stylesheet('stylesheet1', 'div { color: blue; }');
	 * ```
	 *
	 * ```
	 * <!-- Before mutation -->
	 * <head>
	 * <style>
	 *     div { font-size: 12pt; }
	 * </style>
	 * </head>
	 *
	 * <!-- After mutation -->
	 * <head>
	 * <style>
	 *     div { font-size: 12pt; }
	 * </style>
	 * <style id="stylesheet1">
	 *     div { color: blue; }
	 * </style>
	 * </head>
	 * ```
	 *
	 * @param id Unique identifier for style block, such as a hash
	 * @param css CSS rules to insert into document
	 */
	stylesheet(id: string, css: string): void {
		const mutator = factories.stylesheet(id, css);
		this.plan.addMutator(mutator);
	}

	/**
	 * Adds a text mutation to the page plan.
	 *
	 * @description
	 * Text mutations insert a new string into the `innerText` property of the selected elements.
	 * Any children under the selected elements will be overwritten. Any markup in the `content`
	 * argument will treated as text rather than HTML.
	 *
	 * @example
	 * ```
	 * plan.text('div', '<b>New text</b>');
	 * ```
	 *
	 * ```
	 * <!-- Before mutation -->
	 * <div>Old text</div>
	 *
	 * <!-- After mutation (<b> tag is text, not an element) -->
	 * <div><b>New text</b></div>
	 * ```
	 *
	 * @param selector Selector expression
	 * @param content Text string to insert into `innerText` of selected elements
	 */
	text(selector: string, content: string): void {
		const mutator = factories.text(selector, content);
		this.plan.addMutator(mutator);
	}
}
