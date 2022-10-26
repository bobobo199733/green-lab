import React, { useMemo } from 'react';

import { Icon, Typography, iconArrowRight } from '@jimdo/ui';

import { Button } from '@components/Button';

import { getLink } from '../../helpers/heroSearchUtils';
import { track } from '../../helpers/track';

import * as classes from './PreferredSection.module.scss';

type DomainName = { domainName: string };

type PreferredSectionProps = {
    domain: DomainName;
    buttonLabel?: string;
    topSuggestionMessage: string;
    redirectionUrl?: string;
    trackLabel?: string;
    searchInput?: string;
};

export const PreferredSection = React.memo(
    ({
        domain,
        buttonLabel,
        topSuggestionMessage,
        redirectionUrl,
        trackLabel,
        searchInput,
    }: PreferredSectionProps) => {
        const redirectToUpgrade = (domain: string, position?: string) => {
            track({
                eventAction: 'select-preferred',
                eventLabel: `${trackLabel}-results`,
                payload: {
                    selectedDomain: domain,
                    position: position,
                    searchTerm: searchInput,
                },
            });
        };
        const redirectionLink = useMemo(
            () => getLink(domain.domainName, redirectionUrl),
            [domain, redirectionUrl]
        );
        return (
            <div className={classes.topSuggestionBox}>
                <div className={classes.topSuggestionContainer}>
                    <div className={classes.topSuggestionHeader}>
                        <a
                            href={redirectionLink}
                            style={{ color: 'unset', textDecoration: 'unset' }}
                        >
                            <Typography variant="heading2">{domain.domainName}</Typography>
                        </a>
                        <Typography variant="bodyDefault">{topSuggestionMessage}</Typography>
                    </div>
                    <div className={classes.topSuggestionButton}>
                        <Button
                            fullWidth
                            className={classes.button}
                            href={redirectionLink}
                            onClick={() => redirectToUpgrade(domain.domainName)}
                        >
                            <span className={classes.selectButtonText}>{buttonLabel}</span>
                            <Icon className={classes.selectButtonIcon} icon={iconArrowRight} />
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
);

PreferredSection.displayName = 'PreferredSection';
