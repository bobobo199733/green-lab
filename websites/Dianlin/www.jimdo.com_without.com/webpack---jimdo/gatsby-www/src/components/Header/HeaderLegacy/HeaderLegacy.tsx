import React from 'react';

import { GridColumnFullWidth, GridFullWidth } from '@components/GridFullWidth';
import { NavExternal, NavMenu } from '@components/Header/NavItem';

import * as classes from './HeaderLegacy.module.scss';

type MenuWithDropdown = {
    dropdownHeading?: string;
    dropdownItems: Array<{
        title: string;
        desc: string;
        path: string;
    }>;
};

type MenuWithAnchorLink = {
    link: string;
};

export type MenuFormatLegacy = {
    label: string;
} & (MenuWithAnchorLink | MenuWithDropdown);

type HeaderLegacyProps = {
    logoElm: React.ReactNode;
    loginAvatarElm: React.ReactNode;
    menuMobileElm: React.ReactNode;
    mainNavData: { [key: string]: MenuFormatLegacy };
    rightNavData: { [key: string]: MenuFormatLegacy };
    lang?: string;
};

export const HeaderLegacy = ({
    loginAvatarElm,
    mainNavData,
    rightNavData,
    logoElm,
    menuMobileElm,
}: HeaderLegacyProps) => {
    return (
        <GridFullWidth className={classes.grid}>
            <GridColumnFullWidth xs="2" s="4" m="4" l="2" className={classes.column}>
                <div className={classes.logoContainer}>{logoElm}</div>
            </GridColumnFullWidth>
            <GridColumnFullWidth xs="0" l="6">
                <nav className={classes.middle}>
                    <NavMenu
                        label={mainNavData.products.label}
                        dropDownItems={(mainNavData.products as MenuWithDropdown).dropdownItems}
                        dataTracking="topnav_subproduct"
                        dropDownHeading={undefined}
                        openInNewTab={undefined}
                        rightAlign={undefined}
                    />
                    <NavExternal
                        data-tracking="topnav_to_example"
                        label={mainNavData.inspiration.label}
                        link={(mainNavData.inspiration as MenuWithAnchorLink).link}
                        openInNewTab={undefined}
                        className={undefined}
                    />
                    <NavExternal
                        data-tracking="topnav_to_pricing"
                        label={mainNavData.pricing.label}
                        link={(mainNavData.pricing as MenuWithAnchorLink).link}
                        openInNewTab={undefined}
                        className={undefined}
                    />
                    {mainNavData.blog ? (
                        <NavExternal
                            data-tracking="topnav_to_blog"
                            label={mainNavData.blog.label}
                            link={(mainNavData.blog as MenuWithAnchorLink).link}
                            openInNewTab={undefined}
                            className={undefined}
                        />
                    ) : null}
                    {mainNavData.features ? (
                        <NavExternal
                            data-tracking="topnav_to_features"
                            label={mainNavData.features.label}
                            link={(mainNavData.features as MenuWithAnchorLink).link}
                            openInNewTab={undefined}
                            className={undefined}
                        />
                    ) : null}
                    {mainNavData.productAgency ? (
                        <NavExternal
                            data-tracking="topnav_to_productAgency"
                            label={mainNavData.productAgency.label}
                            link={(mainNavData.productAgency as MenuWithAnchorLink).link}
                            openInNewTab={undefined}
                            className={undefined}
                        />
                    ) : null}
                </nav>
            </GridColumnFullWidth>
            <GridColumnFullWidth
                xs="1"
                xsStart="6"
                s="2"
                lStart="9"
                l="4"
                className={classes.mobileWrapper}
            >
                {menuMobileElm}
                <nav className={classes.asideItems}>
                    <div className={classes.helpMenu}>
                        <NavMenu
                            label={rightNavData.help.label}
                            dropDownHeading={
                                (rightNavData.help as MenuWithDropdown).dropdownHeading
                            }
                            dropDownItems={(rightNavData.help as MenuWithDropdown).dropdownItems}
                            dataTracking="topnav_help"
                            openInNewTab
                            rightAlign
                        />
                    </div>
                    {loginAvatarElm}
                </nav>
            </GridColumnFullWidth>
        </GridFullWidth>
    );
};
