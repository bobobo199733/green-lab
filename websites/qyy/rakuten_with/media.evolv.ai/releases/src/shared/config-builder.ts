import { DEFAULT_API_URL, DEFAULT_SDK_URL, EDITOR_ADAPTER_URL, EDITOR_MODULE_URL } from '~/configuration';
import { ReconciliationMode } from './constants';
import { ConfigNotFoundError } from './errors';
import { document } from './mangleable';
import { omitUndefined, parseBoolean } from './utils';


export interface ConfigFromAttributes extends DOMStringMap {
	evolvEnvironment: string;
	evolvAutoLoad?: 'true' | 'false' | undefined;
	evolvApiUrl?: string;
	evolvSdkUrl?: string;
	evolvEditorUrl?: string;
	evolvCookieDomains?: string;

	/** @deprecated */
	evolvWebsite: string;
}

export interface ScoutConfig {
	environmentId: string;
	autoLoad: boolean;
	reconcile: ReconciliationMode;
	apiUrl: string;
	sdkUrl: string;
	editorUrl: string;
	cookieDomains: string[];
	editorAdapterUrl: string;
}

export const defaultConfig: ScoutConfig = {
	environmentId: '',
	autoLoad: true,
	reconcile: ReconciliationMode.Leave,
	apiUrl: DEFAULT_API_URL,
	sdkUrl: DEFAULT_SDK_URL,
	editorUrl: EDITOR_MODULE_URL,
	cookieDomains: [''],
	editorAdapterUrl: EDITOR_ADAPTER_URL
};

export function buildConfig(): Readonly<ScoutConfig> {
	const scripts = document.scripts;
	let configFromAttributes: ConfigFromAttributes | null = null;

	for (let i = 0; i < scripts.length; i += 1) {
		const dataset = scripts[i].dataset;

		if ('evolvEnvironment' in dataset) {
			configFromAttributes = dataset as ConfigFromAttributes;
			break;
		}
	}

	if (!configFromAttributes) {
		throw new ConfigNotFoundError();
	}

	const overrides: Partial<ScoutConfig> = {
		environmentId: configFromAttributes.evolvEnvironment,
		autoLoad: parseBoolean(configFromAttributes.evolvAutoLoad),
		apiUrl: configFromAttributes.evolvApiUrl,
		sdkUrl: configFromAttributes.evolvSdkUrl,
		editorUrl: configFromAttributes.evolvEditorUrl,
		cookieDomains: (configFromAttributes.evolvCookieDomains || '').split(/,\s*/)
	};

	return Object.freeze({
		...defaultConfig,
		...omitUndefined(overrides)
	});
}
