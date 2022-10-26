import React from 'react';

import clsx from 'clsx';

import CheckCircle from '@icons/check-circle.svg';

import * as classes from './index.module.scss';

type CheckedListProps = {
    listItems: Array<string>;
    className?: string;
};

export const CheckedList = ({ listItems, className }: CheckedListProps) => (
    <ul className={clsx(className, classes.list)}>
        {listItems.map((item, index) => (
            <li className={classes.listItem} key={`${item}_${index}`}>
                <CheckCircle />
                <p className="pl">{item}</p>
            </li>
        ))}
    </ul>
);
