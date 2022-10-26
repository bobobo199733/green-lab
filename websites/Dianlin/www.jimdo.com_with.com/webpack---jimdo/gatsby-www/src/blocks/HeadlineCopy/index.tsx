import React from 'react';

import clsx from 'clsx';

import { Button } from '@components/Button';
import { GridFullWidth, GridColumnFullWidth } from '@components/GridFullWidth';
import { Headline } from '@components/Headline';
import { Link } from '@components/Link';

import { TextTags } from 'types/textTags';

import * as classes from './index.module.scss';

type HeadlineCopyProps = {
    data: {
        title: string;
        subtitle?: string;
        text?: string;
        tag?: TextTags;
        buttonHref?: string;
        buttonLabel?: string;
        buttonColor?: string;
        linkHref?: string;
        linkLabel?: string;
    };
    trackLabel: string;
};

export const HeadlineCopy = ({
    data: { title, subtitle, text, tag, buttonHref, buttonLabel, buttonColor, linkHref, linkLabel },
    trackLabel,
}: HeadlineCopyProps) => (
    <GridFullWidth className={classes.root}>
        <GridColumnFullWidth l="8" lStart="3" className={classes.column}>
            {subtitle && <p className={clsx('hs', classes.subtitle)}>{subtitle}</p>}

            <Headline value={title} tag={tag || 'h2'} className="hx" />

            {text && <p className="pl">{text}</p>}

            {buttonLabel && buttonHref && (
                <Button
                    href={buttonHref}
                    data-tracking={trackLabel}
                    color={buttonColor ? 'blueInverted' : 'blue'}
                >
                    {buttonLabel}
                </Button>
            )}

            {linkHref && linkLabel && (
                <Link data-tracking={trackLabel} href={linkHref}>
                    {linkLabel}
                </Link>
            )}
        </GridColumnFullWidth>
    </GridFullWidth>
);

HeadlineCopy.displayName = 'HeadlineCopy';
