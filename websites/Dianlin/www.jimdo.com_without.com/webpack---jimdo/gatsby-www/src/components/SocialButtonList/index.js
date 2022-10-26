import React from 'react';

import PropTypes from 'prop-types';

import Facebook from '@icons/social/facebook.svg';
import Instagram from '@icons/social/instagram.svg';
import Pinterest from '@icons/social/pinterest.svg';
import Twitter from '@icons/social/twitter.svg';
import Youtube from '@icons/social/youtube.svg';

import * as classes from './index.module.scss';

export const SocialButtonList = ({ socialButtonData }) => (
    <ul className={classes.root}>
        <li className={classes.list}>
            <a
                data-tracking={`footer_visit_facebook`}
                href={socialButtonData.facebook.href}
                aria-label={socialButtonData.facebook.label}
                rel="noopener noreferrer"
                target="_blank"
            >
                <Facebook />
            </a>
        </li>
        <li className={classes.list}>
            <a
                data-tracking={`footer_visit_twitter`}
                href={socialButtonData.twitter.href}
                aria-label={socialButtonData.twitter.label}
                rel="noopener noreferrer"
                target="_blank"
            >
                <Twitter />
            </a>
        </li>
        <li className={classes.list}>
            <a
                data-tracking={`footer_visit_instagram`}
                href={socialButtonData.instagram.href}
                aria-label={socialButtonData.instagram.label}
                rel="noopener noreferrer"
                target="_blank"
            >
                <Instagram />
            </a>
        </li>
        <li className={classes.list}>
            <a
                data-tracking={`footer_visit_youtube`}
                href={socialButtonData.youTube.href}
                aria-label={socialButtonData.youTube.label}
                rel="noopener noreferrer"
                target="_blank"
            >
                <Youtube />
            </a>
        </li>
        <li className={classes.list}>
            <a
                data-tracking={`footer_visit_pinterest`}
                href={socialButtonData.pinterest.href}
                aria-label={socialButtonData.pinterest.label}
                rel="noopener noreferrer"
                target="_blank"
            >
                <Pinterest />
            </a>
        </li>
    </ul>
);

SocialButtonList.propTypes = {
    socialButtonData: PropTypes.object.isRequired,
};
