import React from 'react';

import { SocialButton, SocialsButtonVariation } from './SocialButton';

import * as classes from './LoginModalContent.module.scss';

type SocialsButton = {
    label: string;
    href: string;
    dataTracking: string;
};

export type LoginModalContentProps = {
    socialsButtons: { [key in SocialsButtonVariation]: SocialsButton };
    signupHint: {
        signupHint: string;
        signupLabel: string;
        signupLabelHref: string;
    };
};

export const LoginModalContent = ({ socialsButtons, signupHint }: LoginModalContentProps) => {
    return (
        <div className={classes.root}>
            <h1 className={classes.title}>Willkommen zurück</h1>
            <p className={classes.subtitle}>Hier geht&apos;s zu deinem Jimdo-Konto.</p>
            <div className={classes.buttonsContainer}>
                <SocialButton
                    variation="google"
                    label={socialsButtons.google.label}
                    href={socialsButtons.google.href}
                    className={classes.socialLoginButton}
                    dataTracking={socialsButtons.google.dataTracking}
                />
                <SocialButton
                    variation="fb"
                    label={socialsButtons.fb.label}
                    href={socialsButtons.fb.href}
                    className={classes.socialLoginButton}
                    dataTracking={socialsButtons.fb.dataTracking}
                />
                <SocialButton
                    variation="apple"
                    label={socialsButtons.apple.label}
                    href={socialsButtons.apple.href}
                    className={classes.socialLoginButton}
                    dataTracking={socialsButtons.apple.dataTracking}
                />
                <SocialButton
                    variation="email"
                    label={socialsButtons.email.label}
                    href={socialsButtons.email.href}
                    className={classes.socialLoginButton}
                    dataTracking={socialsButtons.email.dataTracking}
                />
            </div>
            <div className={classes.signupHint}>
                <span>{signupHint.signupHint}</span>
                <a href={signupHint.signupLabelHref}>{signupHint.signupLabel}</a>
            </div>
        </div>
    );
};
