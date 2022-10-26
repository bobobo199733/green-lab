import React from 'react';

import { useGetExperimentGroupById } from '@jimdo/growth-tools';
import { StaticQuery, graphql } from 'gatsby';
import { useIsDesktopAndSmaller } from 'hooks/useIsDesktopAndSmaller';

import { FooterDesktop } from './FooterDesktop';
import { FooterMobile } from './FooterMobile';
import { MiniFooter } from './MiniFooter';

import * as classes from './index.module.scss';

export const FooterWithQuery = props => {
    const cancelPlanPageLinkVariation = useGetExperimentGroupById(
        'experiment-CI2-12-cancel-plan-link'
    );

    return (
        <StaticQuery
            query={graphql`
                query FooterQuery {
                    site {
                        siteMetadata {
                            socialButtonList {
                                lang
                                facebook {
                                    href
                                    label
                                }
                                twitter {
                                    href
                                    label
                                }
                                youTube {
                                    href
                                    label
                                }
                                instagram {
                                    href
                                    label
                                }
                                pinterest {
                                    href
                                    label
                                }
                            }
                            footer {
                                lang
                                homeLink
                                footerLinks {
                                    headerText
                                    childs {
                                        label
                                        href
                                        experiment
                                        withReferrerQueryParam
                                    }
                                }
                                legalLinks {
                                    label
                                    href
                                }
                                consentManagementButton {
                                    label
                                }
                            }
                        }
                    }
                }
            `}
            render={data => {
                const { lang } = props;
                const socialButtonData = data.site.siteMetadata.socialButtonList.find(
                    translation => translation.lang === lang
                );
                const { homeLink, footerLinks, legalLinks, consentManagementButton } =
                    data.site.siteMetadata.footer.find(translation => translation.lang === lang);

                const filteredFooterLinks =
                    cancelPlanPageLinkVariation === 'target'
                        ? footerLinks
                        : footerLinks.map(section => ({
                              ...section,
                              childs: section.childs.filter(child => !child.experiment),
                          }));

                return props.footerType === 'big' ? (
                    <Footer
                        {...{
                            homeLink,
                            footerLinks: filteredFooterLinks,
                            legalLinks,
                            consentManagementButton,
                            socialButtonData,
                            lang,
                        }}
                    />
                ) : (
                    <MiniFooter data={legalLinks} />
                );
            }}
        />
    );
};

export const Footer = ({
    homeLink,
    footerLinks,
    legalLinks,
    consentManagementButton,
    socialButtonData,
    lang,
}) => {
    const isDesktopAndLarger = !useIsDesktopAndSmaller();
    return (
        <footer className={classes.root}>
            <div>
                {isDesktopAndLarger ? (
                    <FooterDesktop
                        {...{
                            homeLink,
                            footerLinks,
                            legalLinks,
                            consentManagementButton,
                            socialButtonData,
                            lang,
                        }}
                    />
                ) : (
                    <FooterMobile
                        {...{
                            homeLink,
                            footerLinks,
                            legalLinks,
                            consentManagementButton,
                            socialButtonData,
                            lang,
                        }}
                    />
                )}
            </div>
        </footer>
    );
};
