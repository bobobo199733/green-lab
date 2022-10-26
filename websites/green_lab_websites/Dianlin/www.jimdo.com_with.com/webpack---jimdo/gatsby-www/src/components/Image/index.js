import React, { useContext } from 'react';

import { AppContext } from 'store/createContext';

import { GatsbyImage } from './GatsbyImage';

export const Image = props => {
    const { DI } = useContext(AppContext);
    const ImageImpl = DI?.Image ?? GatsbyImage;
    return <ImageImpl {...props} />;
};
