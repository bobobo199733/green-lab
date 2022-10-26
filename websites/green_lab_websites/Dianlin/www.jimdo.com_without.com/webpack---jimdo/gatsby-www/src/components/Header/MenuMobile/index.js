import React from 'react';

import { MobileAvatar } from '../Avatar';
import { NavExternal } from '../NavItem';

import * as classes from './index.module.scss';

const menuMobileIsOpen = e => {
    if (!document) {
        return;
    }
    const el = e.target.checked === true;

    if (el) {
        document.documentElement.style.overflow = 'hidden';
    } else {
        document.documentElement.style.overflow = 'visible';
    }
};

export const MenuMobile = ({
    open,
    logOut,
    dashboard,
    logIn,
    signUp,
    products,
    blog,
    features,
    productAgency,
    inspiration,
    pricing,
    //help,
    isLoggedIn,
    avatarData,
}) => {
    return (
        <div className={classes.root}>
            <input
                className={classes.checkbox}
                type="checkbox"
                id={'menuMobile'}
                defaultChecked={open}
                onClick={menuMobileIsOpen}
            />
            <div>
                <label
                    htmlFor={'menuMobile'}
                    data-tracking="nav_mobile_open"
                    className={classes.iconHamburgerLabel}
                >
                    <span className={classes.iconHamburger}>
                        <span className={classes.iconHamburgerLine}></span>
                        <span className={classes.iconHamburgerLine}></span>
                        <span className={classes.iconHamburgerLine}></span>
                        <span className={classes.iconHamburgerLine}></span>
                    </span>
                </label>
                <div className={classes.container}>
                    <div className={classes.containerInner}>
                        <ul className={classes.list}>
                            {products.dropdownItems.map(item => (
                                <li key={item.title} className={classes.listItem}>
                                    <NavExternal
                                        data-tracking="nav_mobile_item"
                                        data-tracking-label={item.title}
                                        label={item.title}
                                        link={item.path}
                                    />
                                </li>
                            ))}

                            <li className={classes.listItem}>
                                <NavExternal
                                    data-tracking="nav_mobile_inspiration"
                                    label={inspiration.label}
                                    link={inspiration.link}
                                />
                            </li>
                            <li className={classes.listItem}>
                                <NavExternal
                                    data-tracking="nav_mobile_pricing"
                                    label={pricing.label}
                                    link={pricing.link}
                                />
                            </li>
                            {blog ? (
                                <li className={classes.listItem}>
                                    <NavExternal
                                        data-tracking="nav_mobile_blog"
                                        label={blog.label}
                                        link={blog.link}
                                    />
                                </li>
                            ) : null}
                            {features ? (
                                <li className={classes.listItem}>
                                    <NavExternal
                                        data-tracking="nav_mobile_features"
                                        label={features.label}
                                        link={features.link}
                                    />
                                </li>
                            ) : null}
                            {productAgency ? (
                                <li className={classes.listItem}>
                                    <NavExternal
                                        data-tracking="nav_mobile_productAgency"
                                        label={productAgency.label}
                                        link={productAgency.link}
                                    />
                                </li>
                            ) : null}
                            {/* {help.dropdownItems.map(item => (
                            <li key={item.title} className={classes.listItem}>
                                <NavExternal
                                    data-tracking="nav_mobile_item"
                                    data-tracking-label={item.title}
                                    label={item.title}
                                    link={item.path}
                                />
                            </li>
                        ))} */}
                        </ul>
                        {isLoggedIn ? (
                            <div key="logout" className={classes.userLogin}>
                                <MobileAvatar data={avatarData} />
                                <div className={classes.actionsWrapper}>
                                    <div className={classes.actionsDash}>
                                        <NavExternal
                                            data-tracking="nav_mobile_to_dashboard"
                                            label={dashboard.label}
                                            link={dashboard.link}
                                        />
                                    </div>
                                    <NavExternal
                                        className={classes.actions}
                                        data-tracking="nav_mobile_logout"
                                        label={logOut.label}
                                        link={logOut.link}
                                    />
                                </div>
                            </div>
                        ) : (
                            <div key="login" className={classes.userLogout}>
                                <NavExternal
                                    className={classes.signup}
                                    data-tracking="nav_mobile_signup"
                                    label={signUp.label}
                                    link={signUp.link}
                                />
                                <NavExternal
                                    className={classes.login}
                                    data-tracking="nav_mobile_login"
                                    label={logIn.label}
                                    link={logIn.link}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
