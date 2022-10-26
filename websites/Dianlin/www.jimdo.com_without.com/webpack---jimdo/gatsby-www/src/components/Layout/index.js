import React from 'react';

import useConsentManagement from 'hooks/useConsentManagement';
import PropTypes from 'prop-types';

import { MetaDataComp } from '@blocks/MetaDataComp';

import { SetUserAccountInformation } from '../../helpers/checkLoginState';
import { generateBreadCrumbJSONLD } from '../../helpers/seoMarkups';
import { FooterWithQuery } from '../Footer';
import { HeadWithQuery } from '../Head';
import { HeaderWithQuery } from '../Header';
import { HeaderMini } from '../HeaderMini';
// TODO: should not use block component

import '../../index.scss';
import * as classes from './index.module.scss';

const Layout = ({
    href,
    hrefs,
    prefix,
    children,
    head,
    skipHeader = false,
    transparentHeader = false,
    noindex,
    noHrefLang,
    previewImage,
    footerType,
    lang,
}) => {
    const [ConsentManagementComponent, consentManagementProps] = useConsentManagement(prefix);

    return (
        <div className={classes.root}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateBreadCrumbJSONLD(href, prefix)),
                }}
            />
            <SetUserAccountInformation />
            <HeadWithQuery
                lang={lang}
                head={head}
                previewImage={previewImage}
                hrefs={hrefs}
                noindex={noindex}
                noHrefLang={noHrefLang}
            />
            {ConsentManagementComponent && (
                <ConsentManagementComponent {...consentManagementProps} />
            )}
            <main>
                {skipHeader ? (
                    <HeaderMini />
                ) : (
                    <HeaderWithQuery lang={lang} transparentHeader={transparentHeader} />
                )}
                {children}
                <MetaDataComp data={head} />
            </main>
            <FooterWithQuery footerType={footerType || 'big'} lang={lang} />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.object.isRequired,
    hrefs: PropTypes.array.isRequired,
    head: PropTypes.object.isRequired,
    skipHeader: PropTypes.bool,
    noindex: PropTypes.bool,
    previewImage: PropTypes.string,
    footerType: PropTypes.string,
    lang: PropTypes.string,
};

export { Layout };
