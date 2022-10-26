import React from 'react';

import clsx from 'clsx';

import { GridColumnFullWidth, GridFullWidth } from '@components/GridFullWidth';
import { Headline } from '@components/Headline';
import { Image } from '@components/Image';
import { SignUpLightboxButton } from '@components/SignUpLightboxButton';

import { GatsbyImage } from 'types/gatsbyImage';

import * as classes from './index.module.scss';

export type GRW1233HeroVisualData = {
    title: string;
    text: string;
    buttonLabel?: string;
    buttonLabel2?: string;
};

type HeroVisualProps = {
    data: {
        GRW1233HeroVisualTargetA: GRW1233HeroVisualData;
        images: {
            heroVisualDesktop: GatsbyImage;
            heroVisualMobile: GatsbyImage;
        };
    };
    trackLabel?: string;
};

export const HeroVisual = ({ data, trackLabel }: HeroVisualProps) => {
    return (
        <div className={classes.root}>
            <GridFullWidth className={classes.contentContainer}>
                <GridColumnFullWidth xl="5" xlStart="2">
                    <Headline
                        tag="h1"
                        value={data.GRW1233HeroVisualTargetA.title}
                        className={clsx('hxx', classes.title)}
                    />
                </GridColumnFullWidth>
                <GridColumnFullWidth xl="5" xlStart="7">
                    <p className={classes.text}>{data.GRW1233HeroVisualTargetA.text}</p>
                    <SignUpLightboxButton
                        trackLabel={trackLabel}
                        fullwidth
                        className={classes.button}
                    >
                        {data.GRW1233HeroVisualTargetA.buttonLabel}
                        {data.GRW1233HeroVisualTargetA.buttonLabel2 && (
                            <span className={classes.buttonMobile}>
                                {data.GRW1233HeroVisualTargetA.buttonLabel2}
                            </span>
                        )}
                    </SignUpLightboxButton>
                </GridColumnFullWidth>
            </GridFullWidth>
            <Image image={data.images.heroVisualDesktop} className={classes.imageDesktop} />
            <Image image={data.images.heroVisualMobile} className={classes.imageMobile} />
        </div>
    );
};
