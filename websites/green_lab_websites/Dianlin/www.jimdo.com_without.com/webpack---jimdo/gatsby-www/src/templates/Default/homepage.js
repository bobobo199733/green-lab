import React from 'react';

import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import '@jimdo/ui/dist/index.css';

import { trackEvent } from '@jimdo/consent-management-tracking';
import { ExperimentsProvider, JimdoApp } from '@jimdo/growth-tools';
import { Breakpoints } from '@jimdo/growth-tools/dist/components/Experimenter/types';

import { AutoLangSwitch } from '@components/AutoLangSwitch';
import { GRW941 } from '@components/GRW941';
import { Layout } from '@components/Layout';

import { BigCopy } from '@blocks/BigCopy';
import { BigHeadline } from '@blocks/BigHeadline';
import { Divider } from '@blocks/Divider';
import { ExamplesSlider } from '@blocks/ExamplesSlider';
import { GRW1233_HeroVisual } from '@blocks/GRW1233_HeroVisual';
import { HeadlineCopy } from '@blocks/HeadlineCopy';
import { HeroFullWidth } from '@blocks/HeroFullWidth';
import { HeroSearch } from '@blocks/HeroSearch';
import { HeroSection } from '@blocks/HeroSection';
import { HeroVisual } from '@blocks/HeroVisual';
import { IconTextBoxes } from '@blocks/IconTextBoxes';
import { InspirationTeaser } from '@blocks/InspirationTeaser';
import { LegalText } from '@blocks/LegalText';
import { LinkListSection } from '@blocks/LinkListSection';
import { LogoTeaser } from '@blocks/LogoTeaser';
import { LTGInfo } from '@blocks/LTGInfo';
import { MissionStatement } from '@blocks/MissionStatement';
import { ProductTeaser } from '@blocks/ProductTeaser';
import { TeaserSplit } from '@blocks/TeaserSplit';
import { WebsiteTeaser } from '@blocks/WebsiteTeaser';

// TODO: GRW1233 clean up

//translations
import de from '../../../content/translations/de-DE/messages.json';
import en from '../../../content/translations/en-US/messages.json';
import es from '../../../content/translations/es-ES/messages.json';
import fr from '../../../content/translations/fr-FR/messages.json';
import it from '../../../content/translations/it-IT/messages.json';
import ja from '../../../content/translations/ja-JP/messages.json';
import nl from '../../../content/translations/nl-NL/messages.json';
import { ReplaceLinks } from '../../helpers/replaceLinks';
import { usePageInitializers } from '../../hooks/usePageInitializers';
import { usePreviewImage } from '../../hooks/usePreviewImage';
import { ComponentMapper } from '../ComponentMapper';
import { generateLocalsData, mapLocales, selectLanguage } from '../mapLocales';

const types = {
    AutoLangSwitch,
    BigCopy,
    BigHeadline,
    Divider,
    HeroFullWidth,
    HeadlineCopy,
    HeroSearch,
    HeroSection,
    HeroVisual,
    IconTextBoxes,
    InspirationTeaser,
    ExamplesSlider,
    LegalText,
    LinkListSection,
    LTGInfo,
    LogoTeaser,
    MissionStatement,
    ProductTeaser,
    ReplaceLinks,
    TeaserSplit,
    WebsiteTeaser,
    GRW941,
    // TODO: GRW1233 clean up
    GRW1233_HeroVisual,
};

const Index = ({ data, pageContext }) => {
    const { lng, prefix, draft, isTranslationEnv, links, pageHrefs, href } = pageContext;
    const translations = selectLanguage(lng, de, en, es, fr, it, ja, nl);
    const localsData = generateLocalsData(translations, prefix, draft, isTranslationEnv);
    const locales = mapLocales(localsData);
    const previewImage = usePreviewImage({
        language: lng,
        customPreviewImage: data.json.previewImage,
    });

    usePageInitializers(lng);

    return (
        <ExperimentsProvider
            language={lng}
            track={trackEvent}
            jimdoApp={JimdoApp.LandingPage}
            mobileBreakpoint={Breakpoints.LG}
        >
            <Layout
                lang={lng}
                prefix={prefix}
                previewImage={previewImage}
                globalLocales={locales.globals}
                href={href}
                hrefs={pageHrefs}
                head={locales[prefix].seo}
                noindex={false}
                skipHeader={data.json.skipHeader}
                transparentHeader={data.json.transparentHeader}
                footerType={data.json.footerType}
            >
                <ComponentMapper
                    modules={data.json.modules}
                    types={types}
                    locales={locales}
                    links={links}
                    prefix={prefix}
                    lang={lng}
                />
            </Layout>
        </ExperimentsProvider>
    );
};

Index.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
    query ($id: String!) {
        json: jsonJson(id: { eq: $id }) {
            skipHeader
            footerType
            previewImage {
                childImageSharp {
                    gatsbyImageData(width: 600, height: 314, quality: 85, layout: FIXED)
                }
            }
            modules {
                id
                enableForLangOnly
                trackLabel
                secondaryTrackLabel
                type
                value {
                    buttonOpensSignupLightboxForLang
                    backgroundColor
                    center
                    dark
                    right
                    show
                    size
                    animation
                    boxIcons
                    imageSize {
                        width
                        height
                    }
                    image {
                        LTGInfo {
                            childImageSharp {
                                gatsbyImageData(quality: 85, layout: FULL_WIDTH)
                            }
                        }
                        MissionStatement {
                            childImageSharp {
                                gatsbyImageData(
                                    sizes: "(min-width: 1600px) 1260px, (min-width: 1200px) 78.75vw, 100vw"
                                    quality: 80
                                    layout: FULL_WIDTH
                                )
                            }
                        }
                        ProductTeaser {
                            childImageSharp {
                                gatsbyImageData(quality: 50, layout: FULL_WIDTH)
                            }
                        }
                        TeaserSplit {
                            childImageSharp {
                                gatsbyImageData(
                                    sizes: "(min-width: 1920px) 960px, (min-width: 992px) 50vw, 100vw"
                                    quality: 80
                                    layout: FULL_WIDTH
                                )
                            }
                        }
                    }
                    LogoTeaser {
                        childImageSharp {
                            gatsbyImageData(
                                sizes: "(min-width: 1920px) 154px, (min-width: 992px) 12.5vw, 40vw"
                                quality: 80
                                layout: FULL_WIDTH
                            )
                        }
                    }
                    InspirationTeaser {
                        childImageSharp {
                            gatsbyImageData(
                                width: 700
                                quality: 85
                                transformOptions: { cropFocus: ATTENTION }
                                layout: CONSTRAINED
                            )
                        }
                    }
                    ExamplesSlider {
                        childImageSharp {
                            gatsbyImageData(
                                width: 700
                                quality: 85
                                transformOptions: { cropFocus: ATTENTION }
                                layout: CONSTRAINED
                                placeholder: BLURRED
                            )
                        }
                    }
                    images {
                        heroSectionDevice {
                            childImageSharp {
                                gatsbyImageData(width: 600, quality: 95, layout: CONSTRAINED)
                            }
                        }
                        heroSectionQualityBadge {
                            childImageSharp {
                                gatsbyImageData(width: 500, quality: 100, layout: CONSTRAINED)
                            }
                        }
                        heroSearchDevice {
                            childImageSharp {
                                gatsbyImageData(width: 600, quality: 95, layout: CONSTRAINED)
                            }
                        }
                        heroFullWidthMobile {
                            childImageSharp {
                                gatsbyImageData(width: 991, quality: 80, layout: CONSTRAINED)
                            }
                        }
                        heroFullWidthDesktop {
                            childImageSharp {
                                gatsbyImageData(quality: 95, layout: FULL_WIDTH)
                            }
                        }
                        heroSearchFullWidthMobile {
                            childImageSharp {
                                gatsbyImageData(width: 400, quality: 80, layout: CONSTRAINED)
                            }
                        }
                        heroSearchFullWidthDesktop {
                            childImageSharp {
                                gatsbyImageData(quality: 80, layout: FULL_WIDTH)
                            }
                        }
                        heroFullWidthBadges {
                            childImageSharp {
                                gatsbyImageData(quality: 90, layout: CONSTRAINED)
                            }
                        }
                        heroVisualDesktop {
                            childImageSharp {
                                gatsbyImageData(quality: 90, layout: FULL_WIDTH)
                            }
                        }
                        heroVisualMobile {
                            childImageSharp {
                                gatsbyImageData(quality: 90, layout: FULL_WIDTH)
                            }
                        }
                    }
                }
                HeroSection {
                    lang
                    value {
                        images {
                            heroSectionQualityBadge {
                                childImageSharp {
                                    gatsbyImageData(width: 500, quality: 100, layout: CONSTRAINED)
                                }
                            }
                            heroSectionDevice {
                                childImageSharp {
                                    gatsbyImageData(width: 600, quality: 95, layout: CONSTRAINED)
                                }
                            }
                        }
                    }
                }

                HeroFullWidth {
                    lang
                    value {
                        images {
                            heroFullWidthMobile {
                                childImageSharp {
                                    gatsbyImageData(width: 991, quality: 80, layout: CONSTRAINED)
                                }
                            }
                            heroFullWidthDesktop {
                                childImageSharp {
                                    gatsbyImageData(quality: 80, layout: FULL_WIDTH)
                                }
                            }
                            heroFullWidthBadges {
                                childImageSharp {
                                    gatsbyImageData(quality: 90, layout: CONSTRAINED)
                                }
                            }
                        }
                    }
                }

                #TODO: GRW1233 cleanup
                GRW1233_HeroVisual {
                    lang
                    value {
                        images {
                            heroFullWidthMobile {
                                childImageSharp {
                                    gatsbyImageData(width: 991, quality: 80, layout: FULL_WIDTH)
                                }
                            }
                            heroFullWidthDesktop {
                                childImageSharp {
                                    gatsbyImageData(quality: 80, layout: FULL_WIDTH)
                                }
                            }
                            heroFullWidthBadges {
                                childImageSharp {
                                    gatsbyImageData(quality: 90, layout: CONSTRAINED)
                                }
                            }
                            heroVisualDesktop {
                                childImageSharp {
                                    gatsbyImageData(quality: 80, layout: FULL_WIDTH)
                                }
                            }
                            heroVisualMobile {
                                childImageSharp {
                                    gatsbyImageData(width: 991, quality: 80, layout: FULL_WIDTH)
                                }
                            }
                        }
                    }
                }

                AutoLangSwitch {
                    lang
                    value {
                        show
                    }
                }
            }
        }
    }
`;
