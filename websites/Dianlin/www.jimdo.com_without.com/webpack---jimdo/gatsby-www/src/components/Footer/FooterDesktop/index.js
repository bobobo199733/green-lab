import React from 'react';

import clsx from 'clsx';

import LogoJapanNavy from '../../../images/logos/jimdo_japan_logo_navy.svg';
import LogoNavy from '../../../images/logos/jimdo_logo_navy.svg';
import { ConsentManagementButton } from '../../ConsentManagementButton';
import { GridColumnFullWidth, GridFullWidth } from '../../GridFullWidth';
import { DesktopLanguageSwitch } from '../../LanguageSwitch';
import { SocialButtonList } from '../../SocialButtonList';
import { WithReferrer } from '../WithReferrer';

import * as classes from './index.module.scss';

export const FooterDesktop = ({
    homeLink,
    footerLinks,
    legalLinks,
    consentManagementButton,
    socialButtonData,
    lang,
}) => {
    return (
        <GridFullWidth className={classes.root}>
            <GridColumnFullWidth
                l={lang === 'ja-JP' ? '4' : '6'}
                xl="4"
                className={classes.topColumn}
            >
                <a
                    data-tracking="footer_brand"
                    aria-label="Jimdo"
                    href={homeLink}
                    className={classes.logo}
                >
                    {lang === 'ja-JP' ? <LogoJapanNavy /> : <LogoNavy />}
                </a>
                <SocialButtonList socialButtonData={socialButtonData} />
            </GridColumnFullWidth>
            {footerLinks.map(({ headerText, childs }) => (
                <GridColumnFullWidth l="2" key={headerText} className={classes.topColumn}>
                    <div>
                        <div className={clsx('pm', classes.header)}>
                            <b>{headerText}</b>
                        </div>
                    </div>
                    {childs.map(({ label, href: originalHref, withReferrerQueryParam }) => (
                        <WithReferrer
                            href={originalHref}
                            key={label}
                            enabled={withReferrerQueryParam}
                        >
                            {({ href }) => (
                                <a
                                    className={clsx('pm', classes.link)}
                                    data-tracking="footer_column"
                                    href={href}
                                >
                                    {label}
                                </a>
                            )}
                        </WithReferrer>
                    ))}
                </GridColumnFullWidth>
            ))}
            <GridColumnFullWidth l="9" className={clsx('yd', classes.legalColumn)}>
                {legalLinks.map(({ href, label }) => (
                    <a className="pm" href={href} data-tracking="footer_legal_link" key={label}>
                        {label}
                    </a>
                ))}
                {consentManagementButton && (
                    <ConsentManagementButton
                        label={consentManagementButton.label}
                        data-tracking="footer_legal_link"
                        className="pm"
                    />
                )}
            </GridColumnFullWidth>
            <GridColumnFullWidth l="3" className={classes.languageColumn}>
                <DesktopLanguageSwitch lang={lang} />
            </GridColumnFullWidth>
        </GridFullWidth>
    );
};
