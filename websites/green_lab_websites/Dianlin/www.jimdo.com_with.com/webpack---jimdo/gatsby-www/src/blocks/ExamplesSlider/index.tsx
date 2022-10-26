import React from 'react';

import { Image } from '@components/Image';
import { SliderComponent } from '@components/Slider';

import { GatsbyImage } from 'types/gatsbyImage';

import * as classes from './index.module.scss';

type Slides = {
    childImageSharp: GatsbyImage;
    image: GatsbyImage;
    imageAlt: string;
};

type ImageAlts = {
    imageAlt: string;
};

type ImageSizeProps = {
    width: string;
    height: string;
};

type ExampleSliderProps = {
    data: {
        ExamplesSlider?: Array<Slides>;
        images?: Array<Slides>;
        imageAlts: Array<ImageAlts>;
        imageSize: Array<ImageSizeProps>;
    };
};

export const ExamplesSlider = ({
    data: { ExamplesSlider: legacyImages, images, imageAlts, imageSize: imagesize = [] },
}: ExampleSliderProps) => {
    const slides = images || legacyImages;

    if (!slides || slides.length === 0) {
        return null;
    }

    return (
        <div className={classes.root}>
            <SliderComponent gap={0} centered infinite showDots>
                {slides.map(({ childImageSharp, image, imageAlt }, index) => (
                    <div
                        className={classes.sliderElm}
                        key={(childImageSharp && childImageSharp.base64) || index}
                    >
                        <div
                            className={classes.image}
                            style={{
                                width: imagesize[index]?.width,
                                height: imagesize[index]?.height,
                            }}
                        >
                            <Image
                                image={image ?? childImageSharp}
                                alt={imageAlt || imageAlts[index].imageAlt}
                                objectFit="contain"
                                backgroundColor="transparent"
                            />
                        </div>
                    </div>
                ))}
            </SliderComponent>
        </div>
    );
};

ExamplesSlider.displayName = 'ExamplesSlider';
