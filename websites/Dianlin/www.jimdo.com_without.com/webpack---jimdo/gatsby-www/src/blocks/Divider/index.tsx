import React from 'react';

import clsx from 'clsx';

import { Button } from '@components/Button';
import { GridColumnFullWidth, GridFullWidth } from '@components/GridFullWidth';
import { Headline } from '@components/Headline';
import { SignUpLightboxButton } from '@components/SignUpLightboxButton';

import { Langs } from 'types/langs';

import * as classes from './index.module.scss';

type DividerProps = {
    data: {
        title: string;
        subtitle?: string;
        buttonLabel: string;
        buttonHref: string;
        backgroundWhite?: boolean;
        buttonOpensSignupLightboxForLang?: Array<Langs>;
    };
    trackLabel: string;
    lang: Langs;
};

export const Divider = ({
    data: {
        title,
        subtitle,
        buttonLabel,
        buttonHref,
        backgroundWhite,
        buttonOpensSignupLightboxForLang,
    },
    trackLabel,
    lang,
}: DividerProps) => {
    return (
        <div className={clsx(backgroundWhite ? classes.white : classes.navy, classes.root)}>
            <GridFullWidth>
                <GridColumnFullWidth s="4" sStart="2" l="8" lStart="3" xl="6" xlStart="4">
                    {/* TODO: rename prop to title */}
                    {subtitle && (
                        <Headline
                            value={subtitle}
                            tag="h2"
                            className={clsx(classes.subtitle, 'fhl')}
                        />
                    )}
                    <div className={classes.title}>
                        {/* TODO: rename prop to text */}
                        <p className="hs">{title}</p>
                    </div>
                    <div>
                        {Array.isArray(buttonOpensSignupLightboxForLang) &&
                        buttonOpensSignupLightboxForLang.includes(lang) ? (
                            <SignUpLightboxButton lang={lang} trackLabel={trackLabel}>
                                {buttonLabel}
                            </SignUpLightboxButton>
                        ) : (
                            buttonLabel &&
                            buttonHref && (
                                <Button data-tracking={trackLabel} href={buttonHref}>
                                    {buttonLabel}
                                </Button>
                            )
                        )}
                    </div>
                </GridColumnFullWidth>
            </GridFullWidth>
        </div>
    );
};

Divider.displayName = 'Divider';
