import React from 'react';

import clsx from 'clsx';

import { Button } from '@components/Button';
import { GridColumnFullWidth, GridFullWidth } from '@components/GridFullWidth';
import { Image } from '@components/Image';
import { Link } from '@components/Link';

import { GatsbyImage } from 'types/gatsbyImage';

import { BigHeadlineWrapper } from '../BigHeadline';

import * as classes from './index.module.scss';

type ProductTeaserProps = {
    data: {
        title: string;
        title2: string;
        right?: boolean;
        text: string;
        listItems: Array<string>;
        image: GatsbyImage;
        imageAlt: string;
        buttonLabel: string;
        buttonHref: string;
        linkText?: string;
        linkHref?: string;
    };
    trackLabel: string;
    secondaryTrackLabel?: string;
};

export const ProductTeaser = ({
    data: {
        title,
        title2,
        right,
        text,
        listItems,
        image,
        imageAlt,
        buttonLabel,
        buttonHref,
        linkText,
        linkHref,
    },
    trackLabel,
    secondaryTrackLabel,
}: ProductTeaserProps) => {
    return (
        <section className={clsx('yl', classes.root)}>
            <BigHeadlineWrapper title={[title, title2]} />
            <Image image={image} alt={imageAlt} className={classes.image} />
            <GridFullWidth className={classes.contentContainer}>
                <GridColumnFullWidth
                    className={classes.content}
                    l="10"
                    lStart="2"
                    xl="5"
                    xlStart={right ? '1' : '8'}
                >
                    <p className={clsx('pl', classes.text)}>{text}</p>
                    {listItems && (
                        <ul className={classes.list}>
                            {listItems.map((item, index) => (
                                <li key={index} className="pl">
                                    <b>{item}</b>
                                </li>
                            ))}
                        </ul>
                    )}
                    <div className={classes.buttonContainer}>
                        <Button data-tracking={trackLabel} href={buttonHref}>
                            {buttonLabel}
                        </Button>
                        {linkHref && linkText && (
                            <Link
                                className={classes.readMoreLink}
                                data-tracking={secondaryTrackLabel}
                                href={linkHref}
                            >
                                {linkText}
                            </Link>
                        )}
                    </div>
                </GridColumnFullWidth>
            </GridFullWidth>
        </section>
    );
};
