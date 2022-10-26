import React from 'react';

import clsx from 'clsx';

import { GridColumnFullWidth, GridFullWidth } from '@components/GridFullWidth';
import { Headline } from '@components/Headline';

import * as classes from './index.module.scss';

type BigHeadlineWrapperProps = {
    center?: boolean;
    title: string | Array<string>;
};

type BigHeadlineProps = {
    data: {
        title: string;
        tag?: string;
    };
    id?: string;
};

//TODO: remove BigHeadlineWrapper
export const BigHeadlineWrapper = ({ center, title }: BigHeadlineWrapperProps) => {
    return (
        <GridFullWidth className={classes.bigHeadlineWrapperRoot}>
            <GridColumnFullWidth l="10" lStart="2" xl="8" xlStart="3">
                <h2 key="x" className={clsx('hl', center && classes.center)}>
                    {(Array.isArray(title) ? title : [title]).map(x => (
                        <span key={x} className={classes.text}>
                            {x}
                        </span>
                    ))}
                </h2>
            </GridColumnFullWidth>
        </GridFullWidth>
    );
};

export const BigHeadline = ({ data: { title, tag }, id }: BigHeadlineProps) => {
    return (
        <GridFullWidth className={classes.bigHeadline} id={id}>
            <GridColumnFullWidth l="10" lStart="2">
                <Headline value={title} tag={tag || 'h2'} className={clsx('fhm', classes.text)} />
            </GridColumnFullWidth>
        </GridFullWidth>
    );
};

BigHeadline.displayName = 'BigHeadline';
