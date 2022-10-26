import React from 'react';

import { set as setCookie } from '@jimdo/jimdo-cookies';
import PropTypes from 'prop-types';

import { getRootDomain } from './../../helpers/getRootDomain';
import './index.scss';

const GA_OPT_OUT_COOKIE_NAME = 'ga-opt-out';
const GA_OPT_OUT_COOKIE_VALUE = '1';

const baseClass = 'gaOptOutLink';

const gaOptOut = () => {
    // set cookie, so that CB can take care of setting opt-out props on window obj on ohter pages
    setCookie(GA_OPT_OUT_COOKIE_NAME, GA_OPT_OUT_COOKIE_VALUE, {
        sameSite: 'Lax',
        path: '/',
        domain: getRootDomain(),
    });
};

export const GaOptOutLink = ({ children, successMessage }) => (
    <button
        onClick={() => {
            gaOptOut();
            window.alert(successMessage);
        }}
        className={baseClass}
    >
        {children}
    </button>
);

GaOptOutLink.PropTypes = {
    children: PropTypes.string.isRequired,
    successMessage: PropTypes.string.isRequired,
};
