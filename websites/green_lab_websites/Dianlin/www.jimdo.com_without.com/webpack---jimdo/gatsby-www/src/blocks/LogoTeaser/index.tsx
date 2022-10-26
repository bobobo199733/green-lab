import React from 'react';

import clsx from 'clsx';

import { Button } from '@components/Button';
import { GridFullWidth, GridColumnFullWidth } from '@components/GridFullWidth';
import { Image } from '@components/Image';

import { GatsbyImages } from 'types/gatsbyImage';

import * as classes from './index.module.scss';

type LogoTeaserProps = {
    data: {
        LogoTeaser: Array<GatsbyImages>;
        imageAlts: Array<string>;
        subtitle?: string;
        buttonLabel?: string;
        buttonHref?: string;
    };
    trackLabel?: string;
};

export const LogoTeaser = ({
    data: { LogoTeaser, imageAlts, subtitle, buttonLabel, buttonHref },
    trackLabel,
}: LogoTeaserProps) => (
    <GridFullWidth className={classes.root}>
        <GridColumnFullWidth l="12" className={classes.contentContainer}>
            <p className="fhxxs">{subtitle}</p>
        </GridColumnFullWidth>
        {LogoTeaser.map((item, index) => (
            // Check the key variable after making any changes
            <GridColumnFullWidth
                xs="3"
                l="2"
                lStart={index % 5 === 0 ? '2' : '0'}
                key={index}
                className={clsx(
                    LogoTeaser.length % 2 !== 0 && index === LogoTeaser.length - 1
                        ? classes.displayNone
                        : ''
                )}
            >
                <div className={classes.image}>
                    <Image image={item} alt={imageAlts[index]} />
                </div>
            </GridColumnFullWidth>
        ))}
        <GridColumnFullWidth l="12" className={classes.contentContainer}>
            {buttonLabel && buttonHref && (
                <Button href={buttonHref} data-tracking={trackLabel} color="blueInverted">
                    {buttonLabel}
                </Button>
            )}
        </GridColumnFullWidth>
    </GridFullWidth>
);
