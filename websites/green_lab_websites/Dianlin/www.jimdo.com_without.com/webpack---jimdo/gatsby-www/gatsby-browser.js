import React from 'react';

import AppProvider from './src/store/provider';
import 'whatwg-fetch';
import { InjectPhraseApp } from './src/helpers/InjectPhraseApp';

InjectPhraseApp();

export const wrapRootElement = ({ element }) => {
    // React Context in Browser

    return <AppProvider>{element}</AppProvider>;
};
