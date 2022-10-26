import React from 'react';

import * as classes from './index.module.scss';

type AnimateVideoProps = {
    animation: string;
    animationTitle?: string;
};

export const AnimateVideo = ({ animation, animationTitle }: AnimateVideoProps) => (
    <video className={classes.root} autoPlay muted loop controls={false} playsInline>
        <source
            src={'/assets/animations/' + animation + '.mp4'}
            type="video/mp4"
            title={animationTitle}
        />
    </video>
);
