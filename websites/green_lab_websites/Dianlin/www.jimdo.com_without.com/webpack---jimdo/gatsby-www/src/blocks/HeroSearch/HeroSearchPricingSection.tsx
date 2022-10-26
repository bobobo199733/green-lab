import React from 'react';

import * as classes from './HeroSearchPricingSection.module.scss';

type HeroSearchPricingSectionProps = {
    content: string;
    pricingLinkHref: string;
    pricingLinkText: string;
    subText: string;
};

export const HeroSearchPricingSection = React.memo(
    ({ content, pricingLinkHref, pricingLinkText, subText }: HeroSearchPricingSectionProps) => {
        return (
            <div className={classes.footer}>
                <div className={classes.footerContent}>
                    <p>
                        {content}
                        <a href={pricingLinkHref} data-tracking={`${pricingLinkHref}-pricing`}>
                            {pricingLinkText}
                        </a>
                    </p>
                    <p className={classes.footerText}>{subText}</p>
                </div>
            </div>
        );
    }
);

HeroSearchPricingSection.displayName = 'HeroSearchPricingSection';
