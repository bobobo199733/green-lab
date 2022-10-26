import React from 'react';

import { Experiment, Variations } from '@jimdo/growth-tools';

import { track } from '../../helpers/track';

const EXPERIMENT_ID = 'experiment-grw-941-sending-users-to-dashboard';
const DASH_WEBSITE_EXP_STAGING_URL = 'https%3A%2F%2Fdash.e.jimdo-stable-staging.com%2Fwebsites';
const DASH_LOGO_EXP_STAGING_URL = `${DASH_WEBSITE_EXP_STAGING_URL}%2Flogos`;
const DASH_WEBSITE_EXP_PROD_URL = 'https%3A%2F%2Fdash.e.jimdo.com%2Fwebsites';
const DASH_LOGO_EXP_PROD_URL = `${DASH_WEBSITE_EXP_PROD_URL}%2Flogos`;
const LOGO_STAGING_URL = 'https%3A%2F%2Flogo.e.jimdo-stable-staging.com%2Flogin';
const LOGO_PROD_URL = 'https%3A%2F%2Flogo.e.jimdo.com%2Flogin';
const BASE_SIGNUP_STAGING_URL = `https://account.e.jimdo-stable-staging.com/signup?next=`;
const BASE_SIGNUP_PROD_URL = `https://account.e.jimdo.com/signup?next=`;

const trackCtaClick = anchor => {
    const dataTrackingId = anchor.attributes.getNamedItem('data-tracking').value;
    track({
        eventAction: EXPERIMENT_ID,
        eventLabel: `${dataTrackingId}.click`,
    });
};

const ExperimentComponent = ({ variant }) => {
    const anchors = document.querySelectorAll(
        'a[data-tracking="hero_create_logo"], a[data-tracking="features_create_logo"], a[data-tracking="steps_to_setup"], a[data-tracking="create_logo_video"], a[data-tracking="inspiration_create_logo"], a[data-tracking="divider_create_logo"]'
    );
    const isProd = location.host.includes('jimdo.com');
    let redirectUrl;

    switch (variant) {
        case 'target-b':
            redirectUrl = isProd
                ? `${BASE_SIGNUP_PROD_URL}${DASH_WEBSITE_EXP_PROD_URL}`
                : `${BASE_SIGNUP_STAGING_URL}${DASH_WEBSITE_EXP_STAGING_URL}`;
            break;
        case 'target-c':
            redirectUrl = isProd
                ? `${BASE_SIGNUP_PROD_URL}${DASH_LOGO_EXP_PROD_URL}`
                : `${BASE_SIGNUP_STAGING_URL}${DASH_LOGO_EXP_STAGING_URL}`;
            break;
        case 'target':
        default:
            redirectUrl = isProd
                ? `${BASE_SIGNUP_PROD_URL}${LOGO_PROD_URL}`
                : `${BASE_SIGNUP_STAGING_URL}${LOGO_STAGING_URL}`;
    }

    anchors.forEach(a => {
        a.href = redirectUrl;
        a.addEventListener('click', () => trackCtaClick(a));
    });
    return <></>;
};

export const GRW941 = () => {
    const isSSR = typeof window === 'undefined';
    return (
        <>
            {!isSSR && (
                <Experiment
                    id={EXPERIMENT_ID}
                    variations={[
                        {
                            group: Variations.FLAG_TARGET,
                            node: <ExperimentComponent variant={Variations.FLAG_TARGET} />,
                        },
                        {
                            group: Variations.FLAG_TARGET_B,
                            node: <ExperimentComponent variant={Variations.FLAG_TARGET_B} />,
                        },
                        {
                            group: Variations.FLAG_TARGET_C,
                            node: <ExperimentComponent variant={Variations.FLAG_TARGET_C} />,
                        },
                    ]}
                >
                    <></>
                </Experiment>
            )}
        </>
    );
};
