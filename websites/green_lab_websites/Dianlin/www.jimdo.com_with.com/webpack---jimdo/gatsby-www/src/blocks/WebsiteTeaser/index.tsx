import React from 'react';

import clsx from 'clsx';

import { AnimateVideo } from '@components/AnimateVideo';
import { Button } from '@components/Button';
import { CheckedList } from '@components/CheckedList';
import { GridFullWidth, GridColumnFullWidth } from '@components/GridFullWidth';
import { Image } from '@components/Image';
import { Link } from '@components/Link';
import { SignUpLightboxButton } from '@components/SignUpLightboxButton';

import { GatsbyImage } from 'types/gatsbyImage';
import { Langs } from 'types/langs';

import * as classes from './index.module.scss';

type WebsiteteaserProps = {
    data: {
        listItems: Array<string>;
        linkHref?: string;
        linkText?: string;
        buttonHref?: string;
        buttonLabel?: string;
        animation?: string;
        image: GatsbyImage;
        imageAlt?: string;
        buttonOpensSignupLightboxForLang?: Array<Langs>;
    };
    imageRight?: boolean;
    trackLabel?: string;
    secondaryTrackLabel?: string;
    lang: Langs;
};

export const WebsiteTeaser = ({
    data: {
        listItems,
        linkHref,
        linkText,
        buttonHref,
        buttonLabel,
        animation,
        image,
        imageAlt,
        buttonOpensSignupLightboxForLang,
    },
    imageRight,
    trackLabel,
    secondaryTrackLabel,
    lang,
}: WebsiteteaserProps) => (
    <GridFullWidth className={clsx(classes.root, imageRight && classes.columnReversed)}>
        <GridColumnFullWidth l="7" className={classes.image}>
            {animation && <AnimateVideo animation={animation} />}
            {image && <Image className={classes.image} image={image} alt={imageAlt} />}
        </GridColumnFullWidth>
        <GridColumnFullWidth l="5" className={classes.contentWrapper}>
            <CheckedList listItems={listItems} className={classes.list} />

            {buttonLabel && (
                <React.Fragment>
                    {Array.isArray(buttonOpensSignupLightboxForLang) &&
                    buttonOpensSignupLightboxForLang.includes(lang) ? (
                        <SignUpLightboxButton
                            lang={lang}
                            trackLabel={secondaryTrackLabel}
                            className={classes.button}
                        >
                            {buttonLabel}
                        </SignUpLightboxButton>
                    ) : (
                        buttonHref && (
                            <Button
                                data-tracking={secondaryTrackLabel}
                                href={buttonHref}
                                className={classes.button}
                            >
                                {buttonLabel}
                            </Button>
                        )
                    )}
                </React.Fragment>
            )}
            {linkHref && linkText && (
                <Link data-tracking={trackLabel} href={linkHref}>
                    {linkText}
                </Link>
            )}
        </GridColumnFullWidth>
    </GridFullWidth>
);
