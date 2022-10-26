import React from 'react';

import clsx from 'clsx';

import { Button } from '@components/Button';
import { CheckedList } from '@components/CheckedList';
import { GridFullWidth, GridColumnFullWidth } from '@components/GridFullWidth';
import { Headline } from '@components/Headline';
import { Image } from '@components/Image';
import { Link } from '@components/Link';

import { GatsbyImage } from 'types/gatsbyImage';

import * as classes from './index.module.scss';

type TeaserSplitProps = {
    data: {
        title: string;
        text: string;
        listItems: Array<string>;
        buttonHref: string;
        buttonLabel: string;
        linkHref?: string;
        linkLabel?: string;
        image: GatsbyImage;
        imageAlt: string;
        right?: boolean;
    };
    trackLabel: string;
    secondaryTrackLabel?: string;
};

export const TeaserSplit = ({
    data: {
        title,
        text,
        listItems,
        buttonHref,
        buttonLabel,
        linkHref,
        linkLabel,
        image,
        imageAlt,
        right,
    },
    trackLabel,
    secondaryTrackLabel,
}: TeaserSplitProps) => (
    <GridFullWidth className={classes.root} noGutter={true} noPadding={true}>
        <GridColumnFullWidth className={right ? classes.columnContentRight : ''}>
            <div className={classes.content}>
                <Headline value={title} tag="h2" className={clsx('hm', classes.title)}></Headline>
                <p className={clsx('pl', classes.text)}>{text}</p>
                <CheckedList listItems={listItems} className={classes.list} />
                <Button href={buttonHref} data-tracking={trackLabel} className={classes.button}>
                    {buttonLabel}
                </Button>
                {linkLabel && linkHref && (
                    <Link
                        data-tracking={secondaryTrackLabel || trackLabel}
                        href={linkHref}
                        className={classes.link}
                    >
                        {linkLabel}
                    </Link>
                )}
            </div>
        </GridColumnFullWidth>
        <GridColumnFullWidth>
            <Image image={image} alt={imageAlt} className={classes.image} objectPosition="50% 0" />
        </GridColumnFullWidth>
    </GridFullWidth>
);
