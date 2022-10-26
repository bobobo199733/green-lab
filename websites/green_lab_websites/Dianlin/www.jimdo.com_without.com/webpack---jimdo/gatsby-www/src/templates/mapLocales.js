import objectPath from 'object-path';

import fallbackLanguage from '../../content/translations/en-US/messages.json';
import { isTranslation, mapToPhraseAppKey } from '../helpers/InjectPhraseApp';

export function selectLanguage(name, de, en, es, fr, it, ja, nl) {
    switch (name) {
        case 'de-DE':
            return de;
        case 'en-US':
            return en;
        case 'es-ES':
            return es;
        case 'fr-FR':
            return fr;
        case 'it-IT':
            return it;
        case 'ja-JP':
            return ja;
        case 'nl-NL':
            return nl;
        default:
            return en;
    }
}

export function generateLocalsData(translations, prefix, draft, isTranslationEnv) {
    //Add the keys of the fallback language if the page is draft or the environment is translation
    const keys =
        draft || isTranslationEnv
            ? [...Object.keys(translations), ...Object.keys(fallbackLanguage)]
            : Object.keys(translations);
    //Remove keys that are irrelevant for the current page
    const filteredKeys = keys.filter(i => i.startsWith(`${prefix}.`) || i.startsWith('globals.'));
    //Remove redundant keys
    const uniqueKeys = filteredKeys.filter((x, i) => i === filteredKeys.indexOf(x));

    return uniqueKeys.map(i => {
        return {
            key: i,
            //If the key is not found in the current translation, use the translation from the fallback language
            value: translations[i] != null ? translations[i] : fallbackLanguage[i],
        };
    });
}

export const mapLocales = data => {
    return data.reduce(
        (x, y) => {
            objectPath.set(x, y.key, isTranslation ? mapToPhraseAppKey(y.key) : y.value);
            return { ...x };
        },
        { globals: {} } // jp has no globals yet
    );
};
