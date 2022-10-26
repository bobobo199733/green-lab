import React from 'react';

import { Experiment, Variations } from '@jimdo/growth-tools';

import { HeroFullWidth } from '@blocks/HeroFullWidth';

import { GatsbyImage } from 'types/gatsbyImage';
import { Langs } from 'types/langs';

import { HeroVisual } from './Herovisual';
import type { GRW1233HeroVisualData } from './Herovisual';

type GRW1233_HeroVisualImages = {
    heroFullWidthMobile: GatsbyImage;
    heroFullWidthDesktop: GatsbyImage;
    heroFullWidthBadges: GatsbyImage;
    heroVisualDesktop: GatsbyImage;
    heroVisualMobile: GatsbyImage;
};

type GRW1233_HeroVisualData = {
    title: string;
    text: string;
    buttonHref: string;
    buttonLabel: string;
    buttonLabel2: string;
    buttonOpensSignupLightboxForLang: Array<Langs>;
    imageAlt: string;
    images: GRW1233_HeroVisualImages;
    textLeft: boolean;
    GRW1233HeroVisualTargetA: GRW1233HeroVisualData;
    GRW1233HeroVisual: {
        title: string;
        text: string;
        buttonLabel: string;
    };
};

type GRW1233_HeroVisualProps = {
    trackLabel: string;
    lang: Langs;
    data: GRW1233_HeroVisualData;
};

export const GRW1233_HeroVisual = ({ trackLabel, lang, data }: GRW1233_HeroVisualProps) => (
    <Experiment
        id={'experiment-grw-1233-new-hero-visuals'}
        exclude={lang === 'de-DE'}
        variations={[
            {
                group: Variations.FLAG_TARGET_A,
                node: <HeroVisual trackLabel={trackLabel} data={data} />,
            },
        ]}
    >
        <HeroFullWidth trackLabel={trackLabel} lang={lang} data={data} />
    </Experiment>
);
