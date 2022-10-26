import React from 'react';

import { Link } from '@components/Link';

type TextLinkProps = {
    linkLabel: string;
    linkHref: string;
    secondaryTrackLabel?: string;
    classes: string;
};

export const TextLink = ({ linkLabel, linkHref, secondaryTrackLabel, classes }: TextLinkProps) => (
    <div className={classes}>
        <Link data-tracking={secondaryTrackLabel} href={linkHref}>
            {linkLabel}
        </Link>
    </div>
);
