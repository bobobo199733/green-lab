import React from 'react';

import clsx from 'clsx';

import { GridColumnFullWidth, GridFullWidth } from '@components/GridFullWidth';
import { Link } from '@components/Link';

import * as classes from './index.module.scss';

type BigCopyProps = {
    data: {
        text: string;
        linkHref?: string;
        linkLabel?: string;
    };
    trackLabel?: string;
    id?: string;
};

const BigCopy = ({ data: { text, linkHref, linkLabel }, trackLabel, id }: BigCopyProps) => (
    <GridFullWidth id={id}>
        <GridColumnFullWidth l="10" lStart="2">
            <p className={clsx(classes.text, 'pl')}>{text}</p>
            {linkHref && linkLabel && (
                <Link href={linkHref} data-tracking={trackLabel} className={classes.link}>
                    {linkLabel}
                </Link>
            )}
        </GridColumnFullWidth>
    </GridFullWidth>
);

BigCopy.displayName = 'BigCopy';

export { BigCopy };
