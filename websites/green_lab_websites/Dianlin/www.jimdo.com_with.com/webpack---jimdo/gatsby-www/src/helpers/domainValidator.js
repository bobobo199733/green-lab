const expIsEmail = /@(?:.*)?/;
const expStartsWithDash = /^-/;
const expEndsWithDot = /\.$/;
const expContainsSpecialChars = /[/!@#$%^&*/(/)/_+=`~<>,:;'"?{}]/;
const expContainsMultipleDots = /(?:\.[^.]*){2,}/;
const expStartsWithDefaultSLD = /^www\./;
const expEndsWithPossibleTLD = /\.([a-z]+)$/i;

const SUPPORTED_INTERNATIONAL_TLDS = ['com', 'net', 'org', 'info'];
const SUPPORTED_TLDS = [
    ...SUPPORTED_INTERNATIONAL_TLDS,
    'de',
    'at',
    'ch',
    'es',
    'it',
    'fr',
    'nl',
    'eu',
    'be',
    'store',
    'shop',
    'uk',
    'co.uk',
    'biz',
    'website',
    'online',
    'me',
];

const check = (exp, result) => {
    return value => (value.match(exp) ? result : null);
};

const containsSupportedTld = value => {
    for (let i = 0; i < SUPPORTED_TLDS.length; i++) {
        if (SUPPORTED_TLDS[i].split('.').length > 1 && value.includes(SUPPORTED_TLDS[i])) {
            return true;
        }
    }
    return false;
};

const checkForMultipleDots = value => {
    return value.replace(expStartsWithDefaultSLD, '').match(expContainsMultipleDots)
        ? containsSupportedTld(value)
            ? null
            : 'multiple_dots'
        : null;
};

const checkForValidTopLevelDomain = value => {
    const result = value.match(expEndsWithPossibleTLD);
    if (!result) {
        return null;
    }
    if (SUPPORTED_TLDS.find(elem => elem === result[1])) {
        return null;
    } else {
        return 'invalid_tld';
    }
};

const checkForMinimumCharachter = value => {
    const validElement = value.replace(/\s/g, '');

    if (validElement.split('.')[0].length < 3) {
        return 'invalid_length';
    }
    return null;
};

const CHECKS = [
    check(expIsEmail, 'is_email'),
    check(expContainsSpecialChars, 'special_chars'),
    check(expStartsWithDash, 'starts_with_dash'),
    check(expEndsWithDot, 'ends_with_dot'),
    checkForMultipleDots,
    checkForValidTopLevelDomain,
    checkForMinimumCharachter,
];

export const validateInput = value => {
    return CHECKS.reduce((prev, func) => {
        if (prev) {
            return prev;
        }
        return func(value);
    }, null);
};
