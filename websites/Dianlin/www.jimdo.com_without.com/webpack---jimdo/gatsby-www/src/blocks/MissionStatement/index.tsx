import React from 'react';

import clsx from 'clsx';

import { GridFullWidth, GridColumnFullWidth } from '@components/GridFullWidth';
import { Headline } from '@components/Headline';
import { Image } from '@components/Image';
import { Link } from '@components/Link';

import { GatsbyImage } from 'types/gatsbyImage';

import * as classes from './index.module.scss';

type MissionStatementProps = {
    data: {
        title: string;
        text: string;
        name: string;
        role: string;
        linkHref?: string;
        linkLabel?: string;
        image: GatsbyImage;
        imageAlt: string;
    };
    trackLabel?: string;
};

export const MissionStatement = ({
    data: { title, text, name, role, linkHref, linkLabel, image, imageAlt },
    trackLabel,
}: MissionStatementProps) => (
    <div className={classes.root}>
        <GridFullWidth className={classes.grid}>
            <GridColumnFullWidth l="6">
                <div className={classes.imageContainer}>
                    <Image image={image} alt={imageAlt} className={classes.image} />
                    <div className={classes.caption}>
                        <span className="pm">{name}</span>
                        <span className="ps">{role}</span>
                    </div>
                </div>
            </GridColumnFullWidth>
            <GridColumnFullWidth l="6" className={classes.textContainer}>
                <div className={classes.content}>
                    <Headline value={title} className={clsx('hx', classes.title)} tag="h2" />
                    <p className={clsx('pl', classes.text)}>{text}</p>

                    {linkHref && linkLabel && (
                        <Link data-tracking={trackLabel} href={linkHref}>
                            {linkLabel}
                        </Link>
                    )}
                </div>
            </GridColumnFullWidth>
        </GridFullWidth>
    </div>
);
