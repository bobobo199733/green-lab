import React from 'react';

import clsx from 'clsx';
import { ImageDataLike } from 'gatsby-plugin-image';

import { Image } from '@components/Image';
import { SliderComponent } from '@components/Slider';

import * as classes from './index.module.scss';

type InspirationTeaserProps = {
    data: {
        images?: ImageDataLike[];
        InspirationTeaser?: ImageDataLike[];
        imageAlts?: string[];
    };
    id?: string;
};

export const InspirationTeaser = ({
    data: { images, InspirationTeaser, imageAlts },
    id,
}: InspirationTeaserProps) => {
    // TODO: rename image to a more generic name (and not as the component itself). For now this solution will work for the tsx & json pages
    const inspirationTeaserImages = !InspirationTeaser ? images : InspirationTeaser;

    if (!inspirationTeaserImages || !inspirationTeaserImages.length) {
        return null;
    }

    return (
        <div className={clsx('yl', classes.root)} id={id}>
            <SliderComponent centered infinite popup showDots>
                {inspirationTeaserImages.map(({ childImageSharp, image, imageAlt }, index) => (
                    <div
                        className={classes.sliderElm}
                        key={(childImageSharp && childImageSharp.base64) || index}
                    >
                        <div className={classes.image}>
                            <Image
                                image={image ?? childImageSharp}
                                alt={imageAlt || imageAlts[index].imageAlt}
                            />
                        </div>
                    </div>
                ))}
            </SliderComponent>
        </div>
    );
};

InspirationTeaser.displayName = 'InspirationTeaser';
