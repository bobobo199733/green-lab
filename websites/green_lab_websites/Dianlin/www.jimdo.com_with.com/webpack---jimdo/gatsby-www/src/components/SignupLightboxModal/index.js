import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import { allLangs } from '../../helpers/langSwitch';

import { SignupLightboxModal as SignupLightboxModalComp } from './component';

export const SignupLightboxModal = ({ onCloseHandler, lang = 'en-US' }) => {
    const dataQuery = useStaticQuery(graphql`
        query SignupPopupButtonQuery {
            site {
                siteMetadata {
                    lightboxedCtas {
                        lang
                        buttonsTitle
                        buttonLabelApple
                        buttonHrefApple
                        buttonLabelEmail
                        buttonHrefEmail
                        buttonLabelFacebook
                        buttonHrefFacebook
                        buttonLabelGoogle
                        buttonHrefGoogle
                        loginHref
                        loginLabel
                        loginText
                        listItems
                        text
                        title
                    }
                }
            }
        }
    `);

    const data = dataQuery.site.siteMetadata.lightboxedCtas.find(
        translation => translation.lang === lang
    );
    return <SignupLightboxModalComp {...{ data, onCloseHandler }} />;
};

SignupLightboxModal.propTypes = {
    onCloseHandler: PropTypes.func,
    lang: PropTypes.oneOf(allLangs),
};
