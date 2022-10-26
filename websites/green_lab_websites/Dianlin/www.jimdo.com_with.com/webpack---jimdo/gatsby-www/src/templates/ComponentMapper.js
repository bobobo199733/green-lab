import React from 'react';

import { Helmet } from 'react-helmet';

import { mergeAllQueryData } from '../helpers/mergeQueryData';

import { ForceRerender } from './ForceRerender';

export const ComponentSelector =
    ({ types }) =>
    ({ type }) => {
        if (!types[type]) {
            throw new Error(
                `E7812 - ModuleTypeError: Type ${type} not registered for this template.`
            );
        }

        return types[type];
    };

const getLink = (href, links) =>
    String(href).indexOf('/') === 0 || String(href).indexOf('http') === 0 ? href : links[href];

const collectUpperAndLowerLimitsForTestGroups = ({ items }) => {
    const weightsPerGroupsPerId = {};
    const totalWeightPerGroupPerId = {};

    // collect All weights
    items.forEach(({ module: mod }) => {
        const { testId, testWeight, testGroup, type } = mod;
        if (testId && (isNaN(testGroup) || testGroup < 0)) {
            throw new Error(
                `E47258: Module of type ${type} has a testId=${testId} but but testGroup=${testGroup} is not a positive number.`
            );
        }

        if (
            testId &&
            (!weightsPerGroupsPerId[testId] || !weightsPerGroupsPerId[testId][testGroup])
        ) {
            weightsPerGroupsPerId[testId] = weightsPerGroupsPerId[testId] || [];
            weightsPerGroupsPerId[testId][testGroup] = testWeight || 1;
            totalWeightPerGroupPerId[testId] =
                (totalWeightPerGroupPerId[testId] || 0) + weightsPerGroupsPerId[testId][testGroup];
        }
    });

    const upperAndLowerLimitForTestGroup = {};

    // compute upper and lower
    Object.keys(weightsPerGroupsPerId).forEach(testId => {
        let lowerLimit = 0;
        const totalWeight = totalWeightPerGroupPerId[testId];
        upperAndLowerLimitForTestGroup[testId] = [];

        weightsPerGroupsPerId[testId].forEach((weight, testGroup) => {
            const upperLimit = lowerLimit + weight / totalWeight;
            upperAndLowerLimitForTestGroup[testId][testGroup] = {
                lowerLimit,
                upperLimit,
            };

            lowerLimit = upperLimit;
        });
    });

    return upperAndLowerLimitForTestGroup;
};

const shouldShowModule = lang => item =>
    Boolean(item) &&
    (!item.enableForLangOnly || item.enableForLangOnly.indexOf(lang) !== -1) &&
    Boolean(item.type) &&
    Object.keys(item.data).length > 0;

export const mergeValues = ({ modules, lang, locales, prefix, links }) => {
    const items = modules.map(module => {
        const { value, type, testId, testGroup, id } = module;
        const { href, image, hrefs, ...remainingValues } = value || {};

        const defaultValues = module.value
            ? {
                  href: href ? getLink(href, links) : undefined,
                  image: image ? image[type] : undefined,
                  hrefs: (hrefs || []).map(x => getLink(x, links)),
                  images: remainingValues[type],
                  ...remainingValues,
              }
            : {};

        const translatedKeys = locales[prefix].module[type]
            ? locales[prefix].module[type][id] || {}
            : {};

        const specialValuesPerLang = module[module.type]
            ? module[module.type].filter(item => item.lang === lang).map(_ => _.value)[0] || {}
            : {};

        const data = mergeAllQueryData(defaultValues, translatedKeys, specialValuesPerLang);

        return {
            id: module.id,
            type: module.type,
            trackLabel: module.trackLabel,
            secondaryTrackLabel: module.secondaryTrackLabel,
            enableForLangOnly: module.enableForLangOnly,
            showOnBodyClass: module.showOnBodyClass,
            hideOnBodyClass: module.hideOnBodyClass,
            data,
            testId,
            testGroup,
            module: module,
        };
    });

    return {
        items: items.filter(shouldShowModule(lang)),
    };
};

export const ComponentMapper = ({ types, modules, lang, locales, prefix, links }) => {
    const componentSelector = ComponentSelector({ types });
    const { items } = mergeValues({ types, modules, lang, locales, prefix, links });
    const testWeights = collectUpperAndLowerLimitsForTestGroups({
        items,
    });

    return (
        <React.Fragment>
            {items.map(
                ({
                    type,
                    data,
                    id,
                    testId,
                    testGroup,
                    trackLabel,
                    secondaryTrackLabel,
                    showOnBodyClass,
                    hideOnBodyClass,
                }) => {
                    const Component = componentSelector({ type });
                    const hasTest = testId;

                    const comp = (
                        <Component
                            data={data}
                            lang={lang}
                            trackLabel={trackLabel}
                            secondaryTrackLabel={secondaryTrackLabel}
                        />
                    );

                    return hasTest ? (
                        <ForceRerender
                            key={id}
                            id={id}
                            testGroup={testGroup}
                            testId={testId}
                            lower={testWeights[testId][testGroup].lowerLimit}
                            upper={testWeights[testId][testGroup].upperLimit}
                        >
                            {comp}
                        </ForceRerender>
                    ) : (
                        <div id={id} key={id}>
                            <Helmet>
                                <style type="text/css">
                                    {hideOnBodyClass &&
                                        `
                                        body.${hideOnBodyClass} #${id} {
                                            display: none;
                                        }
                                    `}
                                </style>
                                <style type="text/css">
                                    {showOnBodyClass &&
                                        `
                                        body.${showOnBodyClass} #${id} {
                                            display: block;
                                        }
                                        body:not(.${showOnBodyClass}) #${id} {
                                            display: none;
                                        }
                                    `}
                                </style>
                            </Helmet>
                            {comp}
                        </div>
                    );
                }
            )}
        </React.Fragment>
    );
};
