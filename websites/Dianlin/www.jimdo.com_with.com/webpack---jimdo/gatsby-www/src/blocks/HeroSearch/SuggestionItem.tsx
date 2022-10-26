import React, { useMemo } from 'react';

import { Icon, iconArrowRight, Typography } from '@jimdo/ui';

import { Button } from '@components/Button';

import { getDomainNameHTML, getLink } from '../../helpers/heroSearchUtils';
import { track } from '../../helpers/track';

import * as classes from './SuggestionItem.module.scss';

type SuggestionItemProps = {
    domainName: string;
    index: number;
    trackLabel: string;
    buttonLabel: string;
    redirectionUrl: string;
    searchInput: string;
};

export const SuggestionItem = React.memo(
    ({
        domainName,
        index,
        trackLabel,
        buttonLabel,
        redirectionUrl,
        searchInput,
    }: SuggestionItemProps) => {
        const redirectToUpgrade = (domain: string, position: number) => {
            track({
                eventAction: 'select',
                eventLabel: `${trackLabel}-results`,
                payload: {
                    selectedDomain: domain,
                    position: position,
                    searchTerm: searchInput,
                },
            });
        };
        const redirectionLink = useMemo(
            () => getLink(domainName, redirectionUrl),
            [domainName, redirectionUrl]
        );
        return (
            <li className={classes.suggestionItemContainer}>
                <div className={classes.suggestionItem}>
                    <a href={redirectionLink} style={{ color: 'unset', textDecoration: 'unset' }}>
                        <Typography variant="bodyDefault" className={classes.domainName}>
                            {getDomainNameHTML(domainName)}
                        </Typography>
                    </a>
                    <Button
                        color="blueGreyBorder"
                        onClick={() => redirectToUpgrade(domainName, index)}
                        href={redirectionLink}
                        data-tracking={trackLabel}
                        fullWidth
                        className={classes.button}
                    >
                        <span className={classes.selectButtonText}>{buttonLabel}</span>
                        <Icon className={classes.selectButtonIcon} icon={iconArrowRight} />
                    </Button>
                </div>
            </li>
        );
    }
);

SuggestionItem.displayName = 'SuggestionItem';
