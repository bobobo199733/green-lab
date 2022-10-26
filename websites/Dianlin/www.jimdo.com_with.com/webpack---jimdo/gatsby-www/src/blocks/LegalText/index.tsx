import React from 'react';

import clsx from 'clsx';

import { GridColumnFullWidth, GridFullWidth } from '@components/GridFullWidth';
import { Link } from '@components/Link';

import * as classes from './index.module.scss';

type TextItems = {
    text: string;
    linkHref?: string;
    linkLabel?: string;
};

type LegalTextProps = {
    data: { textItems: Array<TextItems>; position: string; type: string };
};

export const LegalText = ({ data: { textItems, position, type } }: LegalTextProps) => {
    return textItems ? (
        <GridFullWidth className="yl">
            <GridColumnFullWidth l="12" xl="10" xlStart="2">
                <div className={classes.content}>
                    {textItems.map((item, index) => (
                        <div key={index}>
                            <p className={clsx('ps', classes.text)}>{item.text}</p>
                            {item.linkLabel && item.linkHref && (
                                <Link
                                    data-tracking={`${position}-${type}-${item.linkLabel}`}
                                    href={item.linkHref}
                                >
                                    {item.linkLabel}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </GridColumnFullWidth>
        </GridFullWidth>
    ) : null;
};
