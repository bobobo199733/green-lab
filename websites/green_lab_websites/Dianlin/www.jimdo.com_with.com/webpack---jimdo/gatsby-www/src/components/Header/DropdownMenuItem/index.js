import React from 'react';

import * as classes from './index.module.scss';

export const DropdownMenuItem = ({ data, trackingId, openInNewTab }) => {
    return (
        <a
            className={classes.link}
            href={data.path}
            data-tracking={trackingId}
            data-tracking-item={data.title}
            {...(openInNewTab && { target: '_blank', rel: 'noopener' })}
        >
            <p className="pm">
                <b>{data.title}</b>
            </p>
            <p className="pxs">{data.desc}</p>
        </a>
    );
};
