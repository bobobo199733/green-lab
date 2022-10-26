import React from 'react';

import clsx from 'clsx';

import { Button } from '@components/Button';
import { GridFullWidth, GridColumnFullWidth } from '@components/GridFullWidth';
import { Headline } from '@components/Headline';
import { Link } from '@components/Link';

import { getJimdoIcon } from '../../helpers/getJimdoIcon';

import { TextLink } from './TextLink/TextLink';

import * as classes from './index.module.scss';

type Boxes = {
    title?: string;
    text?: string;
    buttonHref?: string;
    buttonLabel?: string;
    linkHref?: string | undefined;
    linkLabel?: string;
    fileDownloadLabel?: boolean;
};

type BoxSizes = {
    boxSizeOnLarge: '3' | '4' | '6';
    boxSizeOnXl: '3' | '4' | '6';
};

type BoxesLength = 2 | 3 | 4 | 6 | 8;

type IconTextBoxesProps = {
    data: {
        title?: string;
        subtitle?: string;
        text?: string;
        boxes: Array<Boxes>;
        boxIcons: Array<string>;
        boxIconsBlue?: boolean;
        boxWithBorder?: boolean;
        linkHref?: string;
        linkLabel: string;
        showLinkAfterText?: boolean;
        backgroundWhite?: boolean;
    };
    trackLabel?: string;
    secondaryTrackLabel?: string;
    id?: string;
};

const BOXES_LENGTHS_SIZE_MAP: Record<BoxesLength, BoxSizes> = {
    2: {
        boxSizeOnLarge: '6',
        boxSizeOnXl: '6',
    },
    3: {
        boxSizeOnLarge: '4',
        boxSizeOnXl: '4',
    },
    4: {
        boxSizeOnLarge: '6',
        boxSizeOnXl: '3',
    },
    6: {
        boxSizeOnLarge: '4',
        boxSizeOnXl: '4',
    },
    8: {
        boxSizeOnLarge: '6',
        boxSizeOnXl: '3',
    },
};

const getBoxSize = (boxesLength: BoxesLength): BoxSizes => {
    const sizes = BOXES_LENGTHS_SIZE_MAP[boxesLength];

    if (!sizes) {
        throw 'Error number of items need to be at least 2';
    }

    return sizes;
};

//TODO: refactor to make a new component out of the HeadlineWrapper section, just leave the boxes inside this component
export const IconTextBoxes = ({
    data: {
        title,
        subtitle,
        text,
        boxes,
        boxIcons,
        boxIconsBlue,
        boxWithBorder,
        linkHref,
        linkLabel,
        showLinkAfterText = false,
        backgroundWhite,
    },
    trackLabel,
    secondaryTrackLabel,
    id,
}: IconTextBoxesProps) => {
    const { boxSizeOnLarge, boxSizeOnXl } = getBoxSize(boxes.length as BoxesLength);

    return (
        <div className={clsx(backgroundWhite && classes.backgroundWhite)} id={id}>
            <GridFullWidth className={'yl'} id={id}>
                <GridColumnFullWidth l="8" lStart="3">
                    <div className={classes.headlineContainer}>
                        {title && (
                            <Headline
                                value={title}
                                tag="h2"
                                className={clsx(
                                    'fhm',
                                    classes.title,
                                    showLinkAfterText && classes.pb40
                                )}
                            />
                        )}
                        {subtitle && <h3 className="hm">{subtitle}</h3>}
                        {text && <p className="pl">{text}</p>}
                    </div>
                    {showLinkAfterText && linkHref && linkLabel && (
                        <TextLink
                            linkLabel={linkLabel}
                            linkHref={linkHref}
                            secondaryTrackLabel={secondaryTrackLabel}
                            classes={clsx(classes.links, classes.pb20, classes.pt20)}
                        />
                    )}
                </GridColumnFullWidth>
                {boxes.map((box, index) => (
                    <GridColumnFullWidth l={boxSizeOnLarge} xl={boxSizeOnXl} key={index}>
                        <div
                            className={clsx(
                                classes.boxes,
                                boxWithBorder ? classes.withBorder : classes.white
                            )}
                        >
                            {boxIcons && (
                                <div className={clsx(classes.icon, boxIconsBlue && classes.blue)}>
                                    {getJimdoIcon(boxIcons[index])}
                                </div>
                            )}
                            <h3 className={clsx('fhxs', classes.title)}>{box.title}</h3>
                            <p className={clsx('pl', classes.text)}>{box.text}</p>
                            {box.buttonLabel && box.buttonHref && (
                                <Button
                                    className={classes.button}
                                    data-tracking={trackLabel}
                                    href={box.buttonHref}
                                >
                                    {box.buttonLabel}
                                </Button>
                            )}
                            {box.linkLabel && box.linkHref && (
                                <Link
                                    className={classes.button}
                                    data-tracking={trackLabel + '_link'}
                                    href={box.linkHref}
                                    fileDownloadLabel={box.fileDownloadLabel}
                                >
                                    {box.linkLabel}
                                </Link>
                            )}
                        </div>
                    </GridColumnFullWidth>
                ))}
                {!showLinkAfterText && linkHref && linkLabel && (
                    <GridColumnFullWidth l="4" lStart="5">
                        <TextLink
                            linkLabel={linkLabel}
                            linkHref={linkHref}
                            secondaryTrackLabel={secondaryTrackLabel}
                            classes={classes.links}
                        />
                    </GridColumnFullWidth>
                )}
            </GridFullWidth>
        </div>
    );
};

IconTextBoxes.displayName = 'IconTextBoxes';
