import React from 'react';

import { Modal, ModalBody } from '@jimdo/ui';
import { useStaticQuery, graphql } from 'gatsby';

import { Langs } from 'types/langs';

import { LoginModalContent } from '../LoginModalContent';

import * as classes from './LoginModal.module.scss';

type LoginModalProps = {
    onCloseHandler: () => void;
    lang: Langs;
};

export const LoginModal = ({ onCloseHandler, lang }: LoginModalProps) => {
    const dataQuery = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    loginModal {
                        lang
                        title
                        subtitle
                        socialAppleLabel
                        socialAppleHref
                        socialEmailLabel
                        socialEmailHref
                        socialFacebookLabel
                        socialFacebookHref
                        socialGoogleLabel
                        socialGoogleHref
                        signupHint
                        signupLabel
                        signupLabelHref
                    }
                }
            }
        }
    `);

    const data = dataQuery.site.siteMetadata.loginModal.find(
        (translation: { lang: Langs }) => translation.lang === lang
    );

    // TODO: check tracking ids with Arthur
    const socialsButtons = {
        google: {
            href: data.socialGoogleHref,
            label: data.socialGoogleLabel,
            dataTracking: 'google-tracking-id',
        },
        fb: {
            href: data.socialFacebookHref,
            label: data.socialFacebookLabel,
            dataTracking: 'fb-tracking-id',
        },
        apple: {
            href: data.socialAppleHref,
            label: data.socialAppleLabel,
            dataTracking: 'apple-tracking-id',
        },
        email: {
            href: data.socialEmailHref,
            label: data.socialEmailLabel,
            dataTracking: 'mail-tracking-id',
        },
    };

    const signupHint = {
        signupHint: data.signupHint,
        signupLabel: data.signupLabel,
        signupLabelHref: data.signupLabelHref,
    };

    return (
        <Modal
            onCloseClick={onCloseHandler}
            closeable={true}
            className={classes.root}
            closeClassName={classes.closeButton}
        >
            <ModalBody className={classes.modalBody}>
                <LoginModalContent socialsButtons={socialsButtons} signupHint={signupHint} />
            </ModalBody>
        </Modal>
    );
};
