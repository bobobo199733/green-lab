import { getAnonId } from '@jimdo/consent-management-tracking';
import RealCookie from 'js-cookie';
import seedrandom from 'seedrandom';

import { isMobileDevice } from './isMobileDevice';
import { track } from './track';

const FakeCookie = {};

const seed = ({ testName }) => {
    const cookieValue = getAnonId();

    if (!cookieValue) {
        // This especially happens for browsers without support for cookies.
        // For example: google bot in headless mode.
        // We remove all of these browsers from testing because we can not reliably
        // put them into the same group at each visit.
        return undefined;
    } else {
        const randomRg = seedrandom(testName + cookieValue);
        return randomRg();
    }
};

const computeTestValue = testId => {
    if (RealCookie.get(testId)) {
        return RealCookie.get(testId);
    } else if (process.env.NODE_ENV !== 'production') {
        if (!FakeCookie[testId]) {
            FakeCookie[testId] = Math.random();
        }

        return FakeCookie[testId];
    }
    return seed({ testName: testId });
};

const trackVariant = (testId, testGroup, payload) =>
    track({
        eventAction: `seen`,
        eventLabel: `ab_test`, // 'ab at the end because tracking should not end with a number'
        payload: {
            auto: true,
            testId,
            testGroup,
            isMobile: isMobileDevice(),
            ...payload,
        },
    });

/**
 * works only for equidistributed tests
 */
export const showVariant = ({ testId, numberOfVariants, showFallback }) => {
    try {
        if (!!showFallback && showFallback() === true) {
            // Fallback to control group.
            return 0;
        }

        const computedTestValue = computeTestValue(testId);
        const isValidValue = typeof computedTestValue === 'number';
        const getAbTestVariant = () => {
            for (let variantCount = 0; variantCount < numberOfVariants; variantCount++) {
                if (computedTestValue <= (variantCount + 1) / numberOfVariants) {
                    trackVariant(testId, variantCount, {
                        computedTestValue,
                    });
                    return variantCount;
                }
            }
        };

        if (isValidValue) {
            return getAbTestVariant();
        }
        // Fallback to control group.
        return 0;
    } catch (error) {
        // Fallback to control group.
        return 0;
    }
};

/**
 *
 * @param {string} testId is the unique identifier for a test
 * @param {number} testGroup is the currentTestGroup
 * @param {lower} lower value of the subinterval
 * @param {lower} upper value of the subinterval
 *
 * @returns whether or not the computed seed lies in the interval and tracks as a side effect
 */
export const shouldShowVariant = ({ testId, testGroup, upper, lower }) => {
    const computedTestValue = computeTestValue(testId);
    if (isNaN(computedTestValue)) {
        // Fallback to control group.
        return lower === 0;
    }

    const show = lower <= computedTestValue && computedTestValue < upper;

    if (show) {
        trackVariant(testId, testGroup, {
            range: { lower, upper },
            computedTestValue,
        });
    }

    return show;
};
