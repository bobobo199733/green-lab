import React from 'react';

import clsx from 'clsx';
import { ImageDataLike } from 'gatsby-plugin-image';

import { Button } from '@components/Button';
import { CheckedList } from '@components/CheckedList';
import { GridFullWidth, GridColumnFullWidth } from '@components/GridFullWidth';
import { Headline } from '@components/Headline';
import { Image } from '@components/Image';
import { SignUpLightboxButton } from '@components/SignUpLightboxButton';

import { Langs } from 'types/langs';
import { TextTags } from 'types/textTags';

import * as classes from './index.module.scss';

type HeroSectionProps = {
    data: {
        title?: string;
        subtitle?: string;
        text?: string;
        buttonHref: string;
        buttonLabel: string;
        buttonSubtitle?: string;
        listItems?: [string];
        images?: { heroSectionQualityBadge?: ImageDataLike; heroSectionDevice?: ImageDataLike };
        qualityBadgeAlt?: string;
        deviceAlt?: string;
        headerWeight?: TextTags;
        buttonOpensSignupLightboxForLang?: [string];
    };
    trackLabel: string;
    lang: Langs;
    id?: string;
};

export const HeroSection = ({
    data: {
        title,
        subtitle,
        text,
        buttonLabel,
        buttonHref,
        buttonSubtitle,
        listItems,
        images,
        qualityBadgeAlt,
        deviceAlt,
        headerWeight,
        buttonOpensSignupLightboxForLang,
    },
    trackLabel,
    lang,
    id,
}: HeroSectionProps) => {
    return title && buttonLabel && buttonHref && images ? (
        <GridFullWidth className="yd" id={id}>
            <GridColumnFullWidth xl="4" xlStart="2">
                <div className={classes.contentContainer}>
                    <Headline
                        value={title}
                        tag={headerWeight || 'h1'}
                        className={clsx(classes.title, 'fhm')}
                    />
                    {subtitle && <p className={clsx('hs', classes.subtitle)}>{subtitle}</p>}
                    {text && <p className={clsx('pm', classes.text)}>{text}</p>}
                    {listItems && (
                        <div className={classes.list}>
                            <CheckedList listItems={listItems} />
                        </div>
                    )}
                    <div className={classes.btn}>
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
                        <p className={clsx('pxs', classes.btnSubtitle)}>{buttonSubtitle}</p>
                    </div>
                    {images.heroSectionQualityBadge && (
                        <div
                            className={clsx(
                                classes.qualityBadges,
                                lang === Langs.DE_DE && classes.qualityBadgesDe
                            )}
                        >
                            <Image
                                image={images.heroSectionQualityBadge}
                                alt={qualityBadgeAlt}
                                objectFit="contain"
                            />
                        </div>
                    )}
                </div>
            </GridColumnFullWidth>
            <GridColumnFullWidth m="4" mStart="2" l="6" lStart="7">
                <div className={clsx(classes.imageContainer, 'nm')}>
                    <Image
                        image={images.heroSectionDevice}
                        className={classes.image}
                        alt={deviceAlt}
                        objectFit="contain"
                    />
                </div>
            </GridColumnFullWidth>
        </GridFullWidth>
    ) : null;
};

HeroSection.displayName = 'HeroSection';
