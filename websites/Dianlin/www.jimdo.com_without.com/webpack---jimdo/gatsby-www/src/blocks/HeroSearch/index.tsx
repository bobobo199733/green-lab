import React, { useEffect, useMemo, useState } from 'react';

import { Icon, iconSearch, Input, LoadingIndicator, iconClear, Typography } from '@jimdo/ui';
import clsx from 'clsx';
import _filter from 'lodash/filter';
import _tail from 'lodash/tail';

import { Headline } from '@components/Headline';
import { Image } from '@components/Image';

import { GatsbyImage } from 'types/gatsbyImage';

import { validateInput } from '../../helpers/domainValidator';
import { getCountryIsoCode } from '../../helpers/getCountryIsoCode';
import { getDomainTransferLink, postData } from '../../helpers/heroSearchUtils';
import { track } from '../../helpers/track';

import { HeroSearchPricingSection } from './HeroSearchPricingSection';
import { ListSubTitle } from './ListSubTitle';
import { PreferredSection } from './PreferredSection';
import { SuggestionsCard, SuggestionsCardData } from './SuggestionsCard';
import { SuggestionsList } from './SuggestionsList';
import { TransferableDomain } from './TransferableDomain';
import { Suggestions } from './types';

import * as classes from './index.module.scss';

type HeroSearchImages = {
    heroFullWidthBadges: GatsbyImage;
    heroSearchFullWidthDesktop: GatsbyImage;
    heroSearchFullWidthMobile: GatsbyImage;
};

export type HeroSearchProps = {
    data: {
        title: string;
        buttonLabel: string;
        imageAlt?: string;
        images: HeroSearchImages;
        footerContent: string;
        footerPricingLinkText: string;
        footerPricingLinkHref: string;
        footerSubText: string;
        unsupportedTldMessage: string;
        invalidDomainMessage: string;
        recommended: boolean;
        moreOptions: string;
        transfer: string;
        transferLinkText: string;
        topSuggestionMessage: string;
        topSuggestionPricingDetail: string;
        domainNotAvailable: string;
        transferDomain: string;
        transferDomainLinkText: string;
        invalidDomainCharachter: string;
        domainSearchInputPlaceholder: string;
        subtitle: string;
        suggestionsWithRemarks: string;
        noResultFoundMessage: string;
    } & SuggestionsCardData;
    trackLabel: string;
};

let typeAndSearchWithaPause = setTimeout(() => {
    return;
}, 1);

export const HeroSearch = ({
    data: {
        title,
        buttonLabel,
        imageAlt,
        images,
        footerContent,
        footerPricingLinkText,
        footerPricingLinkHref,
        footerSubText,
        unsupportedTldMessage,
        invalidDomainMessage,
        recommended,
        moreOptions,
        transfer,
        transferLinkText,
        topSuggestionMessage,
        topSuggestionPricingDetail,
        domainNotAvailable,
        transferDomain,
        transferDomainLinkText,
        invalidDomainCharachter,
        domainSearchInputPlaceholder,
        subtitle,
        suggestionsWithRemarks,
        noResultFoundMessage,
    },
    data,
    trackLabel,
}: HeroSearchProps) => {
    const [suggestions, setSuggestions] = useState<Suggestions[]>([]);
    const [transferrableDomain, setTransferrableDomain] = useState(null);
    const [recommendedDomain, setRecommendedDomain] = useState<Suggestions[] | null>(null);
    const [loading, setLoading] = useState(false);
    const [blurImage, setblurImage] = useState(false);
    const [userCountry, setUserCountry] = useState('DE');
    const [inputValidationMessage, setInputValidationMessage] = useState(null);
    const [searchInput, setSearchInput] = useState('');
    const searchInputBoolean = !!searchInput;
    const [resultNotFound, setresultNotFound] = useState(false);
    const _isProd = process.env.NODE_ENV === 'production';
    const _env = _isProd ? 'prod' : 'stage';
    const _api = `https://domains-suggestions-${_env}.jimdo-platform.net/api/v1/domain/suggestions`;
    const redirectionUrl = `${
        _isProd ? 'https://cms.jimdo.com' : 'https://cms.jimdo-stable-staging.com'
    }/upgrade/?function_flag_browser_language=en&app=upgrade&upgrade[cancelUrl]=${
        _isProd ? 'https://www.jimdo.com' : 'https://www-master.jimdo-platform.net'
    }/website/domain/${
        suggestionsWithRemarks ? 'suggestions' : 'search'
    }/&upgrade[referrer]=landingpage&upgrade[mode]=domain&upgrade[skipDomainSelection]=1`;

    useEffect(() => {
        async function getUserCountry() {
            const response = await getCountryIsoCode();
            setUserCountry(response.country);
        }
        getUserCountry();
    }, []);

    const clearSearch = () => {
        setSearchInput('');
        setSuggestions([]);
        setRecommendedDomain(null);
        setTransferrableDomain(null);
        setblurImage(false);
        setInputValidationMessage(null);
        setresultNotFound(false);
    };

    const search = (searchQuery: string) => {
        setSearchInput(searchQuery);

        clearTimeout(typeAndSearchWithaPause);

        searchInput && setblurImage(true);
        typeAndSearchWithaPause = setTimeout(async () => {
            let errorMessage = null;
            let resultsFound = false;
            if (searchQuery) {
                errorMessage = validateInput(searchQuery);
                setInputValidationMessage(errorMessage);
            } else {
                clearSearch();
            }

            if (searchQuery && !errorMessage) {
                track({
                    eventAction: 'set',
                    eventLabel: `${trackLabel}-input`,
                    payload: {
                        searchQuery: searchQuery,
                    },
                });
                setLoading(true);
                setresultNotFound(false);
                const payloadData = {
                    domain: searchQuery,
                    websiteType: 'store',
                    country: userCountry,
                    showTransferable: true,
                    showRemarks: true,
                };

                const data = await postData(_api, payloadData);
                setRecommendedDomain(null);
                const _arr = data;
                let recommendedData;
                if (
                    _arr.length &&
                    _arr[0].transferable === true &&
                    _arr[0].domainName === searchQuery
                ) {
                    setTransferrableDomain(_arr[0]);
                    recommendedData = _tail(_arr);
                    resultsFound = true;
                } else {
                    setTransferrableDomain(null);
                    recommendedData = _arr;
                }
                recommendedData = _filter(recommendedData, { availableForRegistration: true });
                if (recommendedData.length > 0) {
                    resultsFound = true;
                }
                setRecommendedDomain(
                    recommendedData.length > 0 ? recommendedData.slice(0, 1) : null
                );
                setSuggestions(_tail(recommendedData));
                {
                    (_arr.length <= 0 || !resultsFound) && setresultNotFound(true);
                }
                setLoading(false);
                track({
                    eventAction: 'show',
                    eventLabel: `${trackLabel}-results`,
                    payload: {
                        suggestions: _arr,
                        searchTerm: searchQuery,
                    },
                });
            }
        }, 1000);
    };

    const showResults = useMemo(
        () =>
            !inputValidationMessage &&
            (transferrableDomain || recommendedDomain || suggestions.length),

        [inputValidationMessage, transferrableDomain, recommendedDomain, suggestions]
    );

    const searchIcon = useMemo(() => {
        if (loading) return <LoadingIndicator className={classes.spinnerIcon} color="blue" />;
        if (searchInputBoolean) return <Icon icon={iconClear} onClick={clearSearch} />;
        return <Icon icon={iconSearch} />;
    }, [loading, searchInputBoolean]);

    const resultContentDomainSearch = (
        <div className={classes.suggestionsBox}>
            {transferrableDomain && (
                <TransferableDomain
                    domain={transferrableDomain}
                    domainNotAvailable={domainNotAvailable}
                    transferDomain={transferDomain}
                    transferDomainLinkText={transferDomainLinkText}
                    trackLabel={trackLabel}
                    redirectionUrl={redirectionUrl}
                />
            )}
            {recommendedDomain && recommendedDomain.length > 0 && (
                <>
                    <ListSubTitle
                        title={
                            recommendedDomain[0].domainName === searchInput ? '' : `${recommended}`
                        }
                        pricingDetails={topSuggestionPricingDetail}
                    />
                    <PreferredSection
                        domain={recommendedDomain[0]}
                        trackLabel={trackLabel}
                        buttonLabel={buttonLabel}
                        topSuggestionMessage={topSuggestionMessage}
                        redirectionUrl={redirectionUrl}
                        searchInput={searchInput}
                    />
                </>
            )}
            {suggestions.length > 0 && (
                <>
                    <ListSubTitle
                        title={moreOptions}
                        pricingDetails={topSuggestionPricingDetail}
                        pricingDetailsInMobile={false}
                    />
                    <SuggestionsList
                        suggestions={suggestions}
                        trackLabel={trackLabel}
                        buttonLabel={buttonLabel}
                        redirectionUrl={redirectionUrl}
                        searchInput={searchInput}
                    />
                </>
            )}
        </div>
    );
    const resultContentDomainSuggestions = (
        <div className={classes.suggestions}>
            {transferrableDomain && (
                <TransferableDomain
                    domain={transferrableDomain}
                    domainNotAvailable={domainNotAvailable}
                    transferDomain={transferDomain}
                    transferDomainLinkText={transferDomainLinkText}
                    trackLabel={trackLabel}
                    redirectionUrl={redirectionUrl}
                />
            )}
            {recommendedDomain && (
                <>
                    <ListSubTitle pricingDetails={topSuggestionPricingDetail} />
                    {recommendedDomain[0].domainName === searchInput ? (
                        <PreferredSection
                            domain={recommendedDomain[0]}
                            buttonLabel={buttonLabel}
                            topSuggestionMessage={topSuggestionMessage}
                            redirectionUrl={redirectionUrl}
                        />
                    ) : (
                        <SuggestionsCard
                            suggestions={recommendedDomain}
                            trackLabel={trackLabel}
                            buttonLabel={buttonLabel}
                            redirectionUrl={redirectionUrl}
                            data={data}
                            recommended
                        />
                    )}
                </>
            )}
            {suggestions.length > 0 && (
                <>
                    <ListSubTitle
                        title={moreOptions}
                        pricingDetails={topSuggestionPricingDetail}
                        pricingDetailsInMobile={false}
                    />
                    <SuggestionsCard
                        suggestions={suggestions}
                        trackLabel={trackLabel}
                        buttonLabel={buttonLabel}
                        redirectionUrl={redirectionUrl}
                        data={data}
                    />
                </>
            )}
        </div>
    );
    const defaultContent = useMemo(
        () => (
            <>
                <div className={classes.transferText}>
                    <Typography variant="bodyDefault" marginBottom="zero">
                        {transfer}
                        <a
                            href={getDomainTransferLink('', redirectionUrl)}
                            data-tracking={`${trackLabel}-transfer-link`}
                        >
                            {transferLinkText}
                        </a>
                    </Typography>
                </div>
                <div className={classes.imageBadges}>
                    <Image image={images.heroFullWidthBadges} alt={imageAlt} />
                </div>
            </>
        ),
        [
            transfer,
            redirectionUrl,
            trackLabel,
            transferLinkText,
            images.heroFullWidthBadges,
            imageAlt,
        ]
    );
    const getInputValidationMessage = () => {
        if (!inputValidationMessage) {
            return null;
        }
        if (inputValidationMessage === 'invalid_tld') {
            return null;
        } else if (inputValidationMessage === 'invalid_length') {
            return invalidDomainCharachter;
        } else {
            return invalidDomainMessage;
        }
    };
    const result = () => {
        if (suggestionsWithRemarks) {
            return resultContentDomainSuggestions;
        }
        return resultContentDomainSearch;
    };
    return (
        <div>
            <div className={classes.root} id="home">
                <Image
                    image={images.heroSearchFullWidthDesktop}
                    alt={imageAlt}
                    className={clsx('nm', classes.image, blurImage && classes.blurImage)}
                    objectPosition="50% 0%"
                />
                <Image
                    image={images.heroSearchFullWidthMobile}
                    alt={imageAlt}
                    className={clsx(
                        'nd',
                        'amine',
                        classes.heroSearchFullWidthMobile,
                        blurImage && classes.blurImage
                    )}
                    objectPosition="50% 0%"
                    style={{ position: 'absolute' }}
                />
                <div className={classes.root}>
                    <div className={classes.contentContainer}>
                        <h1 className={clsx(classes.title, blurImage && classes.hideTitle)}>
                            <Headline
                                value={title}
                                tag="span"
                                className={classes.titlePartial}
                                classes={{ em: classes.em }}
                            />
                            {suggestionsWithRemarks && !blurImage && (
                                <h3 className={classes.subtitle}>{subtitle}</h3>
                            )}
                        </h1>
                        <div
                            className={clsx(
                                classes.imageAndSearchContainer,
                                showResults && classes.imageAndSearchContainerMobile
                            )}
                        >
                            <div
                                className={clsx(
                                    classes.textBox,
                                    blurImage && classes.textBoxMobile
                                )}
                            >
                                <Input
                                    className={classes.textBoxInput}
                                    type="text"
                                    name="search"
                                    id="search-input"
                                    autoComplete="off"
                                    autoFocus
                                    aria-label="Search input"
                                    onChange={el => search(el.target.value)}
                                    value={searchInput}
                                    placeholder={domainSearchInputPlaceholder}
                                    rightElement={searchIcon}
                                    message={getInputValidationMessage()}
                                />
                            </div>
                            {inputValidationMessage === 'invalid_tld' && (
                                <p>{unsupportedTldMessage}</p>
                            )}
                        </div>
                        {resultNotFound && !getInputValidationMessage() && (
                            <h4 className={classes.noResultFound}>{noResultFoundMessage}</h4>
                        )}
                        {!showResults ? defaultContent : result()}
                    </div>
                </div>
            </div>
            <HeroSearchPricingSection
                content={footerContent}
                pricingLinkHref={footerPricingLinkHref}
                pricingLinkText={footerPricingLinkText}
                subText={footerSubText}
            />
        </div>
    );
};
