import React from 'react';

import clsx from 'clsx';

import { Button } from '@components/Button';
import { GridFullWidth, GridColumnFullWidth } from '@components/GridFullWidth';
import { Headline } from '@components/Headline';
import { Image } from '@components/Image';
import { SignUpLightboxButton } from '@components/SignUpLightboxButton';

import { GatsbyImage } from 'types/gatsbyImage';
import { Langs } from 'types/langs';

import * as classes from './index.module.scss';

type HeroImages = {
    heroFullWidthMobile: GatsbyImage;
    heroFullWidthDesktop: GatsbyImage;
    heroFullWidthBadges: GatsbyImage;
};

type HeroFullWidthProps = {
    trackLabel: string;
    lang: Langs;
    data: {
        title: string;
        text: string;
        textLeft?: boolean;
        buttonLabel: string;
        buttonLabel2?: string;
        buttonHref: string;
        images: HeroImages;
        imageAlt: string;
        buttonOpensSignupLightboxForLang: Array<Langs>;
    };
};

export const HeroFullWidth = ({
    data: {
        title,
        text,
        buttonHref,
        buttonLabel,
        buttonLabel2,
        buttonOpensSignupLightboxForLang,
        imageAlt,
        images,
        textLeft,
    },
    trackLabel,
    lang,
}: HeroFullWidthProps) => {
    return (
        <div className={classes.root}>
            <Image
                image={images.heroFullWidthDesktop}
                alt={imageAlt}
                className={clsx('nm', classes.image)}
            />

            <GridFullWidth className={classes.grid}>
                <GridColumnFullWidth l="6" xl="5" xlStart="2" className={classes.gridColumn}>
                    <div className={classes.content}>
                        <Headline
                            value={title}
                            tag="h1"
                            className={clsx(classes.headline, 'hxx')}
                        />

                        <span className={clsx(classes.text, textLeft && classes.textLeft)}>
                            {text}
                        </span>

                        {Array.isArray(buttonOpensSignupLightboxForLang) &&
                        buttonOpensSignupLightboxForLang.includes(lang) ? (
                            <SignUpLightboxButton
                                className={classes.button}
                                lang={lang}
                                trackLabel={trackLabel}
                                fullwidth="true"
                            >
                                {buttonLabel}
                                {buttonLabel2 && (
                                    <span className={classes.buttonMobile}>{buttonLabel2}</span>
                                )}
                            </SignUpLightboxButton>
                        ) : (
                            <Button
                                className={classes.button}
                                href={buttonHref}
                                data-tracking={trackLabel}
                                fullwidth="true"
                            >
                                {buttonLabel}
                                {buttonLabel2 && (
                                    <span className={classes.buttonMobile}>{buttonLabel2}</span>
                                )}
                            </Button>
                        )}
                    </div>
                    <Image
                        image={images.heroFullWidthMobile}
                        alt={imageAlt}
                        className={clsx('nd', classes.imageMobile)}
                        objectPosition="50% 0"
                    />
                    <div
                        className={clsx(
                            'nd',
                            classes.imageBadges,
                            lang === Langs.DE_DE && classes.germanBadge
                        )}
                    >
                        <Image image={images.heroFullWidthBadges} alt={imageAlt} />
                    </div>
                </GridColumnFullWidth>
            </GridFullWidth>
            <div
                className={clsx(
                    'nm',
                    classes.imageBadges,
                    lang === Langs.DE_DE && classes.germanBadge
                )}
            >
                <Image image={images.heroFullWidthBadges} alt={imageAlt} />
            </div>
        </div>
    );
};
