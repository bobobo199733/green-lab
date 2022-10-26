import React, { useContext, useEffect, useMemo, useState } from 'react';

import { PortalWrapper } from '@jimdo/ui';
import clsx from 'clsx';
import { envIsSSR } from 'helpers/browserDetection';
import { useIsDesktopAndSmaller } from 'hooks/useIsDesktopAndSmaller';
import { AppContext } from 'store/createContext';

import { Button } from '@components/Button';

import { User } from 'types/user';

import fallbackImage from '../../../../../icon.png';
import { DataTrackingId, getDataTrackingId } from '../data-tracking';
import { HamburgerButton } from '../HamburgerButton';
import { NavButton } from '../NavButton';
import { NavDropdownSection } from '../NavDropdownSection';
import { MenuFormatNew } from '../types';

import * as classes from './HeaderMobile.module.scss';

type LabelLink = {
    label: string;
    link: string;
};

export type SessionData = {
    userLoggedIn: boolean;
    logIn: LabelLink;
    logOut: LabelLink;
    signUp: LabelLink;
    dashboard: LabelLink;
    user: User | undefined;
    avatar: {
        altFallback: string;
        altProfile: string;
    };
};

type HeaderMobileProps = {
    logoElm: React.ReactNode;
    mainNavData: { [key: string]: MenuFormatNew };
    rightNavData: { [key: string]: MenuFormatNew };
    sessionData: SessionData;
    lang?: string;
};

export const HeaderMobile = ({
    logoElm,
    mainNavData,
    rightNavData,
    sessionData,
}: HeaderMobileProps) => {
    const [currentMenu, setCurrentMenu] = useState<MenuFormatNew>();
    const { isMobileSidebarVisible, setIsMobileSidebarVisible } = useContext(AppContext);
    const isDesktopAndSmaller = useIsDesktopAndSmaller();

    const isSSR = envIsSSR();

    useEffect(() => {
        if (!isMobileSidebarVisible) setCurrentMenu(undefined);
    }, [isMobileSidebarVisible, setIsMobileSidebarVisible]);

    useEffect(() => {
        if (!isDesktopAndSmaller) setIsMobileSidebarVisible(false);
    }, [isDesktopAndSmaller, setIsMobileSidebarVisible]);

    const navigateToSection = (menu: MenuFormatNew) => {
        setCurrentMenu(menu);
    };

    const mainNavElms = Object.entries(mainNavData).map(([key, data]) => (
        <NavButton
            key={key}
            label={data.label}
            onClick={() => navigateToSection(data)}
            classNames={{ root: classes.navButtonRoot, button: classes.navButton }}
            direction="horizontal"
            hideActiveIndicator
            dataTracking={getDataTrackingId(key as DataTrackingId)}
        />
    ));

    const rightNavElms = Object.entries(rightNavData).map(([key, data]) => (
        <NavButton
            key={key}
            label={data.label}
            onClick={() => navigateToSection(data)}
            classNames={{
                root: classes.navButtonRoot,
                button: classes.navButton,
            }}
            direction="horizontal"
            hideActiveIndicator
            dataTracking={getDataTrackingId(key as DataTrackingId)}
        />
    ));

    const menuItemsElms = currentMenu?.sections
        .filter(item => !item.secondary)
        .map((item, index) => (
            <NavDropdownSection
                key={index}
                header={item.header}
                items={item.items}
                classNames={{ root: classes.dropdownSection }}
                lineWrap
                fullWidth
            />
        ));

    const loginSignupAvatarElm = useMemo(() => {
        const { userLoggedIn, avatar, user } = sessionData;
        if (userLoggedIn) {
            return (
                <>
                    <div className={classes.userAvatarContainer}>
                        <img
                            src={user?.picture ?? fallbackImage}
                            alt={user?.picture ? avatar.altProfile : avatar.altFallback}
                        />
                        <span>{user?.name ? user.name : user?.email}</span>
                    </div>
                    <Button color="navy" href={sessionData.dashboard.link}>
                        {sessionData.dashboard.label}
                    </Button>
                    <Button color="navyInverted" href={sessionData.logOut.link}>
                        {sessionData.logOut.label}
                    </Button>
                </>
            );
        } else {
            return (
                <>
                    <Button
                        color="navy"
                        href={sessionData.signUp.link}
                        data-tracking={getDataTrackingId('topnav_signup')}
                    >
                        {sessionData.signUp.label}
                    </Button>
                    <Button
                        color="navyInverted"
                        href={sessionData.logIn.link}
                        data-tracking={getDataTrackingId('topnav_login')}
                    >
                        {sessionData.logIn.label}
                    </Button>
                </>
            );
        }
    }, [sessionData]);

    const sidebarElm = (
        <div className={classes.navMenuRoot}>
            <div className={classes.navMenuContainer}>
                {currentMenu && (
                    <div className={classes.subLevelMenuContainer}>
                        <NavButton
                            label={'Hauptmenü'}
                            onClick={() => setCurrentMenu(undefined)}
                            classNames={{ root: classes.backButton }}
                            direction="horizontal"
                            hideActiveIndicator
                        />
                        <div className={classes.dropdownSectionContainer}>{menuItemsElms}</div>
                    </div>
                )}
                {!currentMenu && (
                    <>
                        <div className={classes.topLevelMenuContainer}>
                            <div className={classes.mainContainer}>{mainNavElms}</div>
                            <div className={classes.rightContainer}>{rightNavElms}</div>
                        </div>
                        <div className={clsx(classes.sessionContainer, classes.userLoggedIn)}>
                            {loginSignupAvatarElm}
                        </div>
                    </>
                )}
            </div>
        </div>
    );

    const logoAndHamburgerElms = (
        <div className={clsx(classes.headerRoot, isMobileSidebarVisible && classes.onSidebar)}>
            <div className={classes.logoContainer}>{logoElm}</div>
            <HamburgerButton
                open={isMobileSidebarVisible}
                onClick={() => setIsMobileSidebarVisible(!isMobileSidebarVisible)}
            />
        </div>
    );

    return (
        <>
            {!isMobileSidebarVisible && logoAndHamburgerElms}
            {!isSSR && (
                <PortalWrapper container={document.body}>
                    {isMobileSidebarVisible && (
                        <>
                            {logoAndHamburgerElms}
                            {sidebarElm}
                        </>
                    )}
                </PortalWrapper>
            )}
        </>
    );
};
