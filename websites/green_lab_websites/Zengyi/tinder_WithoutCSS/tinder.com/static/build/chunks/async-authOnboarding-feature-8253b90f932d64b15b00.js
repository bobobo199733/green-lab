/*! For license information please see async-authOnboarding-feature-8253b90f932d64b15b00.js.LICENSE.txt */
"use strict";
(globalThis.webpackChunktinderweb = globalThis.webpackChunktinderweb || []).push([
    [39015], {
        634775: (e, a, s) => {
            s.r(a), s.d(a, {
                reducer: () => c
            });
            var E = s(454936),
                t = s(343599),
                S = s(652736),
                O = s(103809),
                _ = s(192435);
            const r = (0, t.ZP)(((e, a) => {
                    switch (a.type) {
                        case O.FETCH_ONBOARDING_FIELDS_SUCCESS:
                        case O.UPDATE_ONBOARDING_FIELDS_SUCCESS:
                            Object.assign(e, a.payload ? .result ? .editableFields);
                            break;
                        case O.DELETE_ONBOARDING_SUCCESS:
                            return _.default.editableFields
                    }
                }), _.default.editableFields),
                D = (0, t.ZP)(((e, a) => {
                    switch (a.type) {
                        case O.SET_ONBOARDING_ERRORS:
                            Object.assign(e, a.payload ? .errors);
                            break;
                        case O.UPDATE_ONBOARDING_FIELDS_ERROR:
                            {
                                const {
                                    error: s,
                                    fieldName: E
                                } = a.payload;E && (e[E] = s);
                                break
                            }
                        case O.DELETE_ONBOARDING:
                        case O.COMPLETE_ONBOARDING:
                        case O.DELETE_ONBOARDING_SUCCESS:
                        case S.nC:
                            return _.default.erroredFields
                    }
                }), _.default.erroredFields),
                d = (0, t.ZP)(((e, a) => {
                    switch (a.type) {
                        case O.FETCH_ONBOARDING_FIELDS_SUCCESS:
                            Object.assign(e, a.payload ? .result ? .values);
                            break;
                        case O.DELETE_ONBOARDING_SUCCESS:
                            return _.default.initialValues
                    }
                }), _.default.initialValues),
                i = (0, t.ZP)(((e, a) => {
                    switch (a.type) {
                        case O.FETCH_ONBOARDING_FIELDS_SUCCESS:
                        case O.UPDATE_ONBOARDING_FIELDS_SUCCESS:
                            Object.assign(e, a.payload ? .result ? .requiredFields);
                            break;
                        case O.DELETE_ONBOARDING_SUCCESS:
                            return _.default.requiredFields
                    }
                }), _.default.requiredFields),
                l = (0, t.ZP)(((e, a) => {
                    switch (a.type) {
                        case O.SET_ONBOARDING_FIELDS:
                            Object.assign(e, a.payload ? .values);
                            break;
                        case O.FETCH_ONBOARDING_FIELDS_SUCCESS:
                        case O.UPDATE_ONBOARDING_FIELDS_SUCCESS:
                            Object.assign(e, a.payload ? .result ? .values);
                            break;
                        case O.DELETE_ONBOARDING_SUCCESS:
                            return _.default.values
                    }
                }), _.default.values),
                u = (0, t.ZP)(((e, a) => {
                    switch (a.type) {
                        case O.SET_ONBOARDING_FIELDS:
                            Object.assign(e, a.payload ? .consents);
                            break;
                        case O.FETCH_ONBOARDING_FIELDS_SUCCESS:
                        case O.UPDATE_ONBOARDING_FIELDS_SUCCESS:
                            Object.assign(e, a.payload ? .result ? .consents);
                            break;
                        case O.DELETE_ONBOARDING_SUCCESS:
                            return _.default.consents
                    }
                }), _.default.consents),
                N = (0, t.ZP)(((e, a) => {
                    switch (a.type) {
                        case O.ADD_QUEUED_PHOTO:
                            e.push(a.payload);
                            break;
                        case O.REMOVE_QUEUED_PHOTO:
                            return e.filter((e => e.id !== a.payload));
                        case O.UPDATE_QUEUED_PHOTOS_ORDER:
                            return a.payload ? .map((a => e.find((e => e.id === a))));
                        case O.CLEAR_QUEUED_PHOTOS:
                            return _.default.queuedPhotos
                    }
                }), _.default.queuedPhotos),
                c = (0, E.UY)({
                    consents: u,
                    currentStep: (e = _.default.currentStep, a) => {
                        switch (a.type) {
                            case O.SET_ONBOARDING_STEP:
                            case O.SET_ONBOARDING_STEPS:
                                return a.payload ? .currentStep || e;
                            default:
                                return e
                        }
                    },
                    editableFields: r,
                    erroredFields: D,
                    initialValues: d,
                    isInitialized: (e = _.default.isInitialized, a) => {
                        switch (a.type) {
                            case O.FETCH_ONBOARDING_FIELDS_SUCCESS:
                                return !0;
                            case O.COMPLETE_ONBOARDING_SUCCESS:
                            case O.DELETE_ONBOARDING_SUCCESS:
                                return _.default.isInitialized;
                            default:
                                return e
                        }
                    },
                    isLoading: (e = _.default.isLoading, a) => {
                        switch (a.type) {
                            case O.COMPLETE_ONBOARDING_SUCCESS:
                            case O.COMPLETE_ONBOARDING_ERROR:
                            case O.UPDATE_ONBOARDING_FIELDS_ERROR:
                            case O.UPDATE_ONBOARDING_FIELDS_SUCCESS:
                            case O.FETCH_ONBOARDING_FIELDS_SUCCESS:
                                return !1;
                            case O.FETCH_ONBOARDING_FIELDS:
                            case O.UPDATE_ONBOARDING_FIELDS_REQUEST:
                            case O.DELETE_ONBOARDING:
                            case O.COMPLETE_ONBOARDING:
                                return !0;
                            case O.DELETE_ONBOARDING_SUCCESS:
                                return _.default.isLoading;
                            default:
                                return e
                        }
                    },
                    isReactivated: (e = _.default.isReactivated, a) => {
                        switch (a.type) {
                            case O.FETCH_ONBOARDING_FIELDS_SUCCESS:
                            case O.UPDATE_ONBOARDING_FIELDS_SUCCESS:
                                return a.payload ? .result ? .isReactivated || !1;
                            case O.DELETE_ONBOARDING_SUCCESS:
                                return _.default.isReactivated;
                            default:
                                return e
                        }
                    },
                    isUnderage: (e = _.default.isUnderage, a) => {
                        switch (a.type) {
                            case O.FETCH_ONBOARDING_FIELDS_SUCCESS:
                            case O.UPDATE_ONBOARDING_FIELDS_SUCCESS:
                                return a.payload ? .result ? .isUnderage || !1;
                            case O.DELETE_ONBOARDING_SUCCESS:
                                return _.default.isUnderage;
                            default:
                                return e
                        }
                    },
                    queuedPhotos: N,
                    requiredFields: i,
                    steps: (e = _.default.steps, a) => a.type === O.SET_ONBOARDING_STEPS ? a.payload ? .steps || [] : e,
                    values: l
                })
        }
    }
]);