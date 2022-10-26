import React from 'react';

import PrideLogo from '../../images/logos/jimdo_logo_navy.svg';

// import ColoredLogo from '../../images/logos/pride_logo.svg';
import * as classes from './index.module.scss';

export const HeaderMini = () => (
    <header className={classes.root}>
        <PrideLogo />
    </header>
);
