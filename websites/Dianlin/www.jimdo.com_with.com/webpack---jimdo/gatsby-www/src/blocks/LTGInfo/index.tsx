import React from 'react';

import clsx from 'clsx';

import { GridFullWidth, GridColumnFullWidth } from '@components/GridFullWidth';
import { Headline } from '@components/Headline';
import { Image } from '@components/Image';
import { Link } from '@components/Link';
import { Text } from '@components/Text';

import { GatsbyImage } from 'types/gatsbyImage';

import TrustedShopLogo from '../../images/trusted-shops-logo.svg';

import * as classes from './index.module.scss';

type LTGInfoProps = {
    data: {
        title: string;
        text: string;
        bulletPoints: Array<string>;
        image: GatsbyImage;
        imageAlt: string;
        linkHref: string;
        linkLabel: string;
        hideLogo?: boolean;
    };
    trackLabel: string;
};

export const LTGInfo = ({
    data: { title, text, bulletPoints, image, imageAlt, linkHref, linkLabel, hideLogo },
    trackLabel,
}: LTGInfoProps) => (
    <div className={classes.root}>
        <Image image={image} alt={imageAlt} className={classes.image} objectPosition="50% 0" />
        <GridFullWidth className={classes.grid}>
            <GridColumnFullWidth lStart="7" className={classes.contentColumn}>
                <Headline value={title} tag="h2" className={clsx('hm', classes.title)} />
                <p className={clsx('pl', classes.text)}>{text}</p>
                <ul className={classes.list}>
                    {bulletPoints.map(item => (
                        <li key={item} className={classes.item}>
                            <Text value={item} tag="span" className="pm" />
                        </li>
                    ))}
                </ul>
                <Link className={classes.link} data-tracking={trackLabel} href={linkHref}>
                    {linkLabel}
                </Link>
                {hideLogo ? null : (
                    <div className={classes.icon}>
                        <TrustedShopLogo />
                    </div>
                )}
            </GridColumnFullWidth>
        </GridFullWidth>
    </div>
);
