import React from 'react';

import { Script } from 'gatsby';
import { track } from 'helpers/track';
import { Helmet } from 'react-helmet';

import { Langs } from 'types/langs';

type GoogleSSOProperties = {
    lang: Langs;
};

type GoogleSSOCallbackArg = {
    [key: string]: string;
};

const selectLanguage = (lang: Langs) => {
    return lang.substring(0, 2);
};

const displayGoogleOneTap = (lang: Langs) => {
    google?.accounts?.id?.initialize({
        client_id: '1036616695543-rm7dpg1cgepmtsa71slvisil9a5oeup0.apps.googleusercontent.com',
        itp_support: true,
        callback: (arg: GoogleSSOCallbackArg) => {
            window.location.href = `https://account.e.jimdo.com/${selectLanguage(
                lang
            )}/signup/google?type=google`;
        },
    });

    google?.accounts?.id?.prompt((arg: GoogleSSOCallbackArg) => {
        //arg.g = status of display
        //arg.h = is displayed true or false?
        //arg.j = reason why display is not shown
        //arg.i = reason why display was dismissed/not shown
        //arg.l = reason why display was skipped
        track({
            eventAction: 'click',
            eventLabel: 'GoogleSSO',
            payload: {
                statusOfDisplay: arg.g,
                displayed: arg.h,
                notShownBecause: arg.j,
                dismissedBecause: arg.i,
                skippedBecause: arg.l,
            },
        });
    });
};

export const GoogleSSO = ({ lang }: GoogleSSOProperties) => {
    return (
        <>
            <Helmet>
                <meta
                    name="google-signin-client_id"
                    content="1036616695543-rm7dpg1cgepmtsa71slvisil9a5oeup0.apps.googleusercontent.com"
                ></meta>
            </Helmet>
            <Script
                src="https://accounts.google.com/gsi/client"
                onLoad={() => displayGoogleOneTap(lang)}
            />
        </>
    );
};
