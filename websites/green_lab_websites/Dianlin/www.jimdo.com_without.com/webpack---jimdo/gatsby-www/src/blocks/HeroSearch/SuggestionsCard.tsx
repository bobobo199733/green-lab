import React, { useEffect, useMemo, useState } from 'react';

import { List, ListItem, iconCheckmark, Icon, iconStar, iconArrowRight } from '@jimdo/ui';
import clsx from 'clsx';

import { Button } from '@components/Button';

import { getLink } from '../../helpers/heroSearchUtils';
import { track } from '../../helpers/track';

import { Suggestions, Remark } from './types';

import * as classes from './SuggestionsCard.module.scss';

export type SuggestionsCardData = {
    domainRecommendationsNewComRemark: string;
    domainRecommendationsNewOrgRemark: string;
    domainRecommendationsNewNetRemark: string;
    domainRecommendationsNewInfoRemark: string;
    domainRecommendationsNewCcTldRemark1: string;
    domainRecommendationsNewCcTldRemark2: string;
    domainRecommendationsNewExactMatchRemark: string;
    domainRecommendationsNewShortNameRemark: string;
    domainRecommendationsNewHyphensRemark: string;
    domainRecommendationsNewIndustryRemark: string;
    domainRecommendationsNewCityRemark: string;
    domainRecommendationsNewStoreRemark: string;
    domainRecommendationsNewShopRemark: string;
    domainRecommendationsNewBizRemark: string;
    domainRecommendationsNewWebsiteRemark: string;
    domainRecommendationsNewOnlineRemark: string;
    domainRecommendationsNewMeRemark: string;
    bestOption: string;
};

type SuggestionsCardProps = {
    suggestions: Array<Suggestions>;
    trackLabel: string;
    buttonLabel: string;
    redirectionUrl: string;
    data: SuggestionsCardData;
    recommended?: boolean;
};

const getListItem = (remarks: Array<Remark>, data: SuggestionsCardData) => {
    const remarksList = remarks;
    const TldBasedRemarkTranslationKeyMapping = {
        com: [data.domainRecommendationsNewComRemark],
        org: [data.domainRecommendationsNewOrgRemark],
        net: [data.domainRecommendationsNewNetRemark],
        info: [data.domainRecommendationsNewInfoRemark],
        ccTld: [
            data.domainRecommendationsNewCcTldRemark1,
            data.domainRecommendationsNewCcTldRemark2,
        ],
        exactMatch: [data.domainRecommendationsNewExactMatchRemark],
        short: [data.domainRecommendationsNewShortNameRemark],
        hyphens: [data.domainRecommendationsNewHyphensRemark],
        industry: [data.domainRecommendationsNewIndustryRemark],
        city: [data.domainRecommendationsNewCityRemark],
        store: [data.domainRecommendationsNewStoreRemark],
        shop: [data.domainRecommendationsNewShopRemark],
        biz: [data.domainRecommendationsNewBizRemark],
        website: [data.domainRecommendationsNewWebsiteRemark],
        online: [data.domainRecommendationsNewOnlineRemark],
        me: [data.domainRecommendationsNewMeRemark],
    };

    return remarksList.map((remark, index) => {
        return TldBasedRemarkTranslationKeyMapping[remark].map((remark: string) => (
            <ListItem icon={iconCheckmark} text={remark} key={index} />
        ));
    });
};

export const SuggestionsCard = ({
    suggestions,
    trackLabel,
    buttonLabel,
    redirectionUrl,
    data,
    recommended,
}: SuggestionsCardProps) => {
    const [lastIndexShown, setLastIndexShown] = useState(2);

    const getSuggestions = useMemo(() => {
        const redirectToUpgrade = (domain: string, position: number | string) => {
            track({
                eventAction: 'select',
                eventLabel: `${trackLabel}-results`,
                payload: {
                    selectedDomain: domain,
                    position: position,
                },
            });
            window.location.replace(getLink(domain, redirectionUrl));
        };

        return suggestions.slice(0, lastIndexShown).map((suggestion, i) => {
            return (
                <div
                    className={clsx(
                        classes.domainCard,
                        classes.domainNameContainer,
                        classes.cardItem
                    )}
                    key={i}
                    onClick={() => redirectToUpgrade(suggestion.domainName, redirectionUrl)}
                >
                    {recommended && (
                        <div className={classes.domainRecommended}>
                            <Icon className={classes.iconStar} icon={iconStar} />
                            <h5>{data.bestOption}</h5>
                        </div>
                    )}
                    <a
                        href={getLink(suggestion.domainName, redirectionUrl)}
                        style={{ color: 'unset', textDecoration: 'unset' }}
                    >
                        <h4
                            className={clsx(
                                classes.domainName,
                                recommended && classes.topDomainSuggestion
                            )}
                        >
                            {suggestion.domainName}
                        </h4>
                    </a>

                    <List className={classes.remarks}>
                        {suggestion?.remarks?.length && getListItem(suggestion.remarks, data)}
                    </List>
                    <div className={classes.buttonContainer}>
                        <Button
                            color={recommended ? 'blue' : 'blueGreyBorder'}
                            href={getLink(suggestion.domainName, redirectionUrl)}
                            onClick={() => redirectToUpgrade(suggestion.domainName, i)}
                            data-tracking={trackLabel}
                            className={classes.button}
                        >
                            <span className={classes.selectButtonText}>{buttonLabel}</span>
                            <Icon
                                className={classes.selectButtonIcon}
                                icon={iconArrowRight}
                                color="white"
                            />
                        </Button>
                    </div>
                </div>
            );
        });
    }, [suggestions, lastIndexShown, recommended, data, redirectionUrl, trackLabel, buttonLabel]);

    useEffect(() => {
        setLastIndexShown(2);
    }, [suggestions]);

    const areSuggestionsHidden = lastIndexShown < suggestions.length;

    return (
        <>
            <ul>{getSuggestions}</ul>
            {suggestions.length > 1 && areSuggestionsHidden && (
                <div className={classes.centered}></div>
            )}
        </>
    );
};

SuggestionsCard.displayName = 'SuggestionsCard';
