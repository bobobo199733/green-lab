import React from 'react';

import { ButtonSocial } from '@jimdo/ui';
import clsx from 'clsx';

import Close from '@icons/close.svg';

import { CheckedList } from '../CheckedList';
import { Headline } from '../Headline';

import * as classes from './index.module.scss';

export const SignupLightboxModal = ({
    onCloseHandler,
    data: {
        buttonsTitle,
        buttonLabelApple,
        buttonHrefApple,
        buttonLabelEmail,
        buttonHrefEmail,
        buttonLabelFacebook,
        buttonHrefFacebook,
        buttonLabelGoogle,
        buttonHrefGoogle,
        loginHref,
        loginLabel,
        loginText,
        listItems,
        text,
        title,
    },
}) => {
    return (
        <div className={classes.container} data-testid="lightbox_modal">
            <button className={classes.closeBtn} onClick={onCloseHandler}>
                <Close />
            </button>
            <div className={classes.modalText}>
                <Headline value={title} tag="span" className={clsx(classes.headline, 'hx')} />
                <p className={clsx(classes.text, 'pm')}>{text}</p>
                <CheckedList listItems={listItems} className={classes.list} />
            </div>
            <div className={classes.modalButtons}>
                <p className={classes.btnTitle}>{buttonsTitle}</p>
                <div className={classes.btnsContainer}>
                    <div data-tracking="lightbox_google_signup">
                        <ButtonSocial
                            social="google"
                            href={buttonHrefGoogle}
                            className={classes.btn}
                        >
                            {buttonLabelGoogle}
                        </ButtonSocial>
                    </div>
                    <div data-tracking="lightbox_facebook_signup">
                        <ButtonSocial social="fb" href={buttonHrefFacebook} className={classes.btn}>
                            {buttonLabelFacebook}
                        </ButtonSocial>
                    </div>
                    <div data-tracking="lightbox_apple_signup">
                        <ButtonSocial social="apple" href={buttonHrefApple} className={classes.btn}>
                            {buttonLabelApple}
                        </ButtonSocial>
                    </div>
                    <div data-tracking="lightbox_email_signup">
                        <ButtonSocial social="email" href={buttonHrefEmail} className={classes.btn}>
                            {buttonLabelEmail}
                        </ButtonSocial>
                    </div>
                    <p className={classes.loginText}>{loginText}</p>
                    <div data-tracking="lightbox_login'">
                        <ButtonSocial
                            social="login"
                            href={loginHref}
                            className={clsx(classes.btn, classes.loginBtn)}
                        >
                            {loginLabel}
                        </ButtonSocial>
                    </div>
                </div>
            </div>
        </div>
    );
};
