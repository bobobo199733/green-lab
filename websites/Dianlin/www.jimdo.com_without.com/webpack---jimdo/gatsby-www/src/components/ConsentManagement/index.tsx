import { useEffect } from 'react';

import {
    init as initConsent,
    getDpsCookieNames,
    acceptAllConsents,
} from '@jimdo/consent-management';
import {
    init as initTracking,
    setRichTracking,
    configureAutomatedAnonymousTracking,
    withConsentOptIn,
    getAnonId,
    getUserAccountId,
    setAnonymousTracking,
} from '@jimdo/consent-management-tracking';
import {
    getRichTrackingEndpoint,
    RichTracking,
    AnonTracking,
    getAnonTrackingEndpoint,
} from '@jimdo/frontend-tracking';

import { useIsWebDriver } from '../../hooks/useIsWebDriver';

type ConsentManagementProps = {
    googleTagManagerId: string;
    userCentricsId: string;
    suppressConsentBanner?: boolean;
    forceAcceptAllConsent?: boolean;
};

export const ConsentManagementBanner = ({
    googleTagManagerId,
    userCentricsId,
    suppressConsentBanner = false,
    forceAcceptAllConsent = false,
}: ConsentManagementProps) => {
    const isWebDriver = useIsWebDriver();

    useEffect(() => {
        const richTracker = RichTracking({
            endpoint: getRichTrackingEndpoint(window.location.hostname),
            env: 'lp',
            anonId: getAnonId,
            userAccountId: () => getUserAccountId() || '',
        });

        const anonTracker = AnonTracking({
            endpoint: getAnonTrackingEndpoint(window.location.hostname),
        });

        withConsentOptIn(
            setRichTracking(richTracker),
            setAnonymousTracking(anonTracker),
            configureAutomatedAnonymousTracking('lp.www')
        );

        initTracking({
            gtmContainerId: googleTagManagerId,
            getDpsCookieNames: getDpsCookieNames,
            consentBannerInteractionsTrackCategory: 'www',
            customAutomatedTrackingSettings: {
                category: 'www',
                anonymousCategory: 'lp.www',
            },
        });

        initConsent({
            userCentricsSettingsId: userCentricsId,
            suppressConsentBanner: suppressConsentBanner || isWebDriver,
        });
    }, [googleTagManagerId, userCentricsId, suppressConsentBanner, isWebDriver]);

    useEffect(() => {
        if (!forceAcceptAllConsent) {
            return;
        }
        acceptAllConsents();
    }, [forceAcceptAllConsent]);

    return null;
};

export default ConsentManagementBanner;
