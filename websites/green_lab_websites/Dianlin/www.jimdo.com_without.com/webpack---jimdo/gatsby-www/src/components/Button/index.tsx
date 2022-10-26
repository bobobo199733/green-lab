import React from 'react';

import clsx from 'clsx';

import { Langs } from 'types/langs';

import * as classes from './index.module.scss';

export type ButtonColor =
    | 'blue'
    | 'blueInverted'
    | 'blueGreyBorder'
    | 'navy'
    | 'navyInverted'
    | 'offWhite'
    | 'offWhiteInverted'
    | 'green';

type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    href?: string;
    fullWidth?: boolean;
    color?: ButtonColor;
    size?: 'default' | 'small';
    targetBlank?: boolean;
    dataTrackingId?: string;
    onClick?: (e: any) => void;
    lang?: Langs;
    fullwidth?: boolean;
};

// TODO: add data dataTrackingId prop (instead forwarding all props to button or anchor tag)
export const Button = (props: ButtonProps) => {
    const { className, fullWidth, color = 'blue', targetBlank, size = 'default', ...rest } = props;
    const buttonClasses = clsx(
        className,
        'pm',
        classes.root,
        fullWidth && classes.fullWidth,
        color === 'blue' && classes.blue,
        color === 'blueInverted' && classes.blueInverted,
        color === 'blueGreyBorder' && classes.blueGreyBorder,
        color === 'navy' && classes.navy,
        color === 'navyInverted' && classes.navyInverted,
        color === 'offWhite' && classes.offWhite,
        color === 'offWhiteInverted' && classes.offWhiteInverted,
        color === 'green' && classes.green,
        size === 'small' && classes.sizeSmall
    );

    if (rest.href) {
        return (
            <a
                {...rest}
                // render target attribute only in case it's different than the standard ("_self")
                {...(targetBlank && { target: '_blank' })}
                className={buttonClasses}
            />
        );
    } else {
        // TODO: fix invalid react props passed to button element
        return <button {...props} className={buttonClasses} />;
    }
};
