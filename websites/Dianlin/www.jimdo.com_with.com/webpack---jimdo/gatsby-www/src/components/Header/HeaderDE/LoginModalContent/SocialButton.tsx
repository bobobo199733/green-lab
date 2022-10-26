import React from 'react';

import { ButtonSocial } from '@jimdo/ui';

export type SocialsButtonVariation = 'fb' | 'google' | 'apple' | 'email';

export type SocialsButtonProps = {
    label: string;
    href: string;
    variation: SocialsButtonVariation;
    dataTracking?: string;
    className?: string;
};

// TODO: check with "UI Group" to update ButtonSocial to have onClick as optional
// eslint-disable-next-line @typescript-eslint/no-empty-function
const handler = () => {};

export const SocialButton = ({
    label,
    href,
    variation,
    dataTracking,
    className,
}: SocialsButtonProps) => {
    return (
        <div data-tracking={dataTracking}>
            <ButtonSocial social={variation} href={href} className={className} onClick={handler}>
                {label}
            </ButtonSocial>
        </div>
    );
};
