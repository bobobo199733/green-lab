import React from 'react';

import clsx from 'clsx';

import Down from '@icons/Down.svg';

import { switchLanguage } from '../../helpers/langSwitch';
import DeFlag from '../../images/flags/de.svg';
import EsFlag from '../../images/flags/es.svg';
import FrFlag from '../../images/flags/fr.svg';
import ItFlag from '../../images/flags/it.svg';
import JpFlag from '../../images/flags/jp.svg';
import NlFlag from '../../images/flags/nl.svg';
import UkFlag from '../../images/flags/uk.svg';
import UsFlag from '../../images/flags/us.svg';

import * as classes from './index.module.scss';

// taking care of too long strings...

const exAvailableLangs = [
    {
        label: 'English',
        flag: [<UkFlag key="uk" />, <UsFlag key="us" />],
        lang: 'en-US',
    },
    {
        label: 'Deutsch',
        flag: <DeFlag />,
        lang: 'de-DE',
    },
    {
        label: 'Español',
        flag: <EsFlag />,
        lang: 'es-ES',
    },
    {
        label: 'Français',
        flag: <FrFlag />,
        lang: 'fr-FR',
    },
    {
        label: 'Italiano',
        flag: <ItFlag />,
        lang: 'it-IT',
    },
    {
        label: '日本語',
        flag: <JpFlag />,
        lang: 'ja-JP',
    },
    {
        label: 'Nederlands',
        flag: <NlFlag />,
        lang: 'nl-NL',
    },
];

// Tracking keys
const SWITCH_LANG_KEY = 'lang_switch';
const SWITCH_LANG_OPEN_KEY = 'lang_switch_open';
const SWITCH_LANG_OPTION_KEY = 'lang_switch_choice';

const onLangChange = event => {
    if (typeof location === 'undefined') {
        return;
    }

    switchLanguage(event.currentTarget.value, 'manual');
};

export const DesktopLanguageSwitch = ({
    availableLangs = exAvailableLangs,
    lang: currentLang,
    type = 'footer',
}) => {
    const currentLangObj = availableLangs.find(langObj => currentLang === langObj.lang);
    return (
        <div data-tracking={`${type}_${SWITCH_LANG_KEY}_${currentLang}`} className={classes.root}>
            <label>
                <div className={classes.flag}>{currentLangObj.flag}</div>
                <span className="pm">{currentLangObj.label}</span>
                <Down />
            </label>
            <div
                className={classes.dropdown}
                data-tracking-onhover="true"
                data-tracking={`${type}_${SWITCH_LANG_OPEN_KEY}`}
            >
                {availableLangs
                    .filter(langObj => langObj.lang !== currentLang)
                    .map(langObj => (
                        <button
                            className={classes.buttonList}
                            data-tracking={`${type}_${SWITCH_LANG_OPTION_KEY}_${langObj.lang}`}
                            data-tracking-from={currentLangObj.label}
                            data-tracking-to={langObj.label}
                            aria-label="Switch language"
                            value={langObj.lang}
                            onClick={onLangChange}
                            key={langObj.label}
                        >
                            <span className={classes.flag}>{langObj.flag}</span>
                            <span className={clsx('pm', classes.text)}>{langObj.label}</span>
                        </button>
                    ))}
            </div>
        </div>
    );
};

/** MOBILE LANGUAGE SWTICH */

export const MobileLanguageSwitch = ({ availableLangs = exAvailableLangs, lang, type }) => (
    <label htmlFor="languageSwitch" className={classes.mobileWrapper}>
        <div className={classes.flag}>
            {availableLangs.find(currentLang => lang === currentLang.lang).flag}
        </div>
        <select
            id="languageSwitch"
            name="languageSwitch"
            onChange={onLangChange}
            aria-label="Switch Language"
            defaultValue={lang}
            className={classes.selection}
        >
            {availableLangs.map(lang => (
                <option
                    data-tracking={`${type}_${SWITCH_LANG_OPTION_KEY}_${lang.lang}`}
                    key={lang.lang}
                    value={lang.lang}
                >
                    {lang.label}
                </option>
            ))}
        </select>
        <Down />
    </label>
);
