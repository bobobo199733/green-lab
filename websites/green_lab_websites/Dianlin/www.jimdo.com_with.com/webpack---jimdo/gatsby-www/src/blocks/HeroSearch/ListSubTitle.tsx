import React from 'react';

import { Typography } from '@jimdo/ui';
import clsx from 'clsx';

import * as classes from './ListSubTitle.module.scss';

type ListSubtitleProps = {
    title?: string;
    pricingDetails: string;
    pricingDetailsInMobile?: boolean;
};

export const ListSubTitle = React.memo(
    ({ title, pricingDetails, pricingDetailsInMobile = true }: ListSubtitleProps) => {
        return (
            <div className={classes.topSuggestionTitleContainer}>
                <Typography variant="bodyDefault" className={classes.listSubtitle}>
                    {title}
                </Typography>
                <Typography
                    variant="bodyDefault"
                    className={
                        pricingDetailsInMobile
                            ? classes.pricingDetail
                            : clsx(classes.pricingDetail, classes.noMobile)
                    }
                >
                    {pricingDetails}
                </Typography>
            </div>
        );
    }
);

ListSubTitle.displayName = 'ListSubTitle';
