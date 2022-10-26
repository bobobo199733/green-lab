import React from 'react';

import { Legal } from '../FooterMobile';

import * as classes from './index.module.scss';

export const MiniFooter = data => (
    <div>
        <div className={classes.root}>
            <Legal nowrap={false} legalLinks={data.data} />
        </div>
    </div>
);
