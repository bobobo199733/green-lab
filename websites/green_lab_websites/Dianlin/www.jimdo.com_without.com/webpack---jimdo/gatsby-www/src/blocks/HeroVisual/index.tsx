import React from 'react';

import clsx from 'clsx';

import { GridColumnFullWidth, GridFullWidth } from '@components/GridFullWidth';
import { Headline } from '@components/Headline';
import { Image } from '@components/Image';
import { SignUpLightboxButton } from '@components/SignUpLightboxButton';

import { GatsbyImage } from 'types/gatsbyImage';

import * as classes from './index.module.scss';

export type HeroVisualProps = {
    data: {
        title: string;
        text: string;
        buttonLabel?: string;
        buttonLabel2?: string;
        images: {
            heroVisualDesktop: GatsbyImage;
            heroVisualMobile: GatsbyImage;
        };
        imageAlt: string;
    };
    trackLabel?: string;
};

export const HeroVisual = ({
    data: { title, text, buttonLabel, buttonLabel2, images, imageAlt },
    trackLabel,
}: HeroVisualProps) => {
    return (
        <div className={classes.root}>
            <GridFullWidth className={classes.contentContainer}>
                <GridColumnFullWidth xl="5" xlStart="2">
                    <Headline tag="h1" value={title} className={clsx('hxx', classes.title)} />
                </GridColumnFullWidth>
                <GridColumnFullWidth xl="5" xlStart="7">
                    <p className={classes.text}>{text}</p>
                    <SignUpLightboxButton
                        trackLabel={trackLabel}
                        fullwidth
                        className={classes.button}
                    >
                        {buttonLabel}
                        {buttonLabel2 && (
                            <span className={classes.buttonMobile}>{buttonLabel2}</span>
                        )}
                    </SignUpLightboxButton>
                </GridColumnFullWidth>
            </GridFullWidth>
            <Image
                image={images.heroVisualDesktop}
                className={classes.imageDesktop}
                alt={imageAlt}
            />
            <Image image={images.heroVisualMobile} className={classes.imageMobile} alt={imageAlt} />
        </div>
    );
};
