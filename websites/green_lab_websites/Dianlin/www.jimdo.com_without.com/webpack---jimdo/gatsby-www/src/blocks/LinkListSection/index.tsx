import React from 'react';

import { GridColumnFullWidth, GridFullWidth } from '@components/GridFullWidth';

import * as classes from './index.module.scss';

type ListItems = {
    text: string;
    href: string;
};

type LinkListSectionProps = {
    data: {
        list: Array<ListItems>;
    };
    trackLabel: string;
};

export const LinkListSection = ({ data: { list }, trackLabel }: LinkListSectionProps) => (
    <GridFullWidth className={classes.root}>
        {list && list.length && (
            <GridColumnFullWidth l="12">
                <ul className={classes.list}>
                    {list.map(({ href, text }, index) => (
                        <li key={index + text} className={classes.listItem}>
                            <a className={classes.link} href={href} data-tracking={trackLabel}>
                                {text}
                            </a>
                        </li>
                    ))}
                </ul>
            </GridColumnFullWidth>
        )}
    </GridFullWidth>
);
