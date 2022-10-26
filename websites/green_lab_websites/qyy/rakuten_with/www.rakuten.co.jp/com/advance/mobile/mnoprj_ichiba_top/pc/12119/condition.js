var __px = window.__px || {};
__px.campaigns = __px.campaigns || [];
__px.campaigns.push({
    "nest": {
        "conditions": [{
            "ratio": 100.0,
            "nest": {
                "conditions": [{
                    "nest": {
                        "conditions": [{
                            "ratio": 100.0,
                            "nest": {
                                "conditions": [{
                                    "ratio": 100.0,
                                    "nest": {
                                        "conditions": [{
                                            "nest": {
                                                "conditions": [{
                                                    "ratio": 40.0,
                                                    "patternName": "abtest__target_card_holder_0901__220930_books",
                                                    "patternId": "abtest__66087__219600",
                                                    "actions": {
                                                        "replace": [{
                                                            "source": "/ichibatop/com/inc/home/20080930/spt/inc/mno/pitari_mno_banner_09.tmpl?v=220930",
                                                            "target": "mno-header"
                                                        }]
                                                    }
                                                }, {
                                                    "ratio": 70.0,
                                                    "patternName": "abtest__target_card_holder_0901__220930_16bai",
                                                    "patternId": "abtest__66087__219601",
                                                    "actions": {
                                                        "replace": [{
                                                            "source": "/ichibatop/com/inc/home/20080930/spt/inc/mno/pitari_mno_banner_11.tmpl?v=220930",
                                                            "target": "mno-header"
                                                        }]
                                                    }
                                                }, {
                                                    "ratio": 100.0,
                                                    "patternName": "abtest__target_card_holder_0901__220930_travel",
                                                    "patternId": "abtest__66087__219602",
                                                    "actions": {
                                                        "replace": [{
                                                            "source": "/ichibatop/com/inc/home/20080930/spt/inc/mno/pitari_mno_banner_10.tmpl?v=220930",
                                                            "target": "mno-header"
                                                        }]
                                                    }
                                                }],
                                                "type": "ABTest"
                                            },
                                            "match": {
                                                "up_card": 1
                                            }
                                        }, {
                                            "patternName": "target__abtest_100__220930_card",
                                            "patternId": "target__66086__219604",
                                            "actions": {
                                                "replace": [{
                                                    "source": "/ichibatop/com/inc/home/20080930/spt/inc/mno/pitari_mno_banner_03.tmpl?v=220601",
                                                    "target": "mno-header"
                                                }]
                                            }
                                        }],
                                        "type": "Target"
                                    }
                                }],
                                "type": "ABTest"
                            }
                        }],
                        "type": "ABTest"
                    },
                    "match": {
                        "co_mnoc": 1
                    }
                }, {
                    "nest": {
                        "conditions": [{
                            "nest": {
                                "conditions": [{
                                    "ratio": 34.0,
                                    "patternName": "abtest__target_else_segment__220725_all",
                                    "patternId": "abtest__66089__219608",
                                    "actions": {
                                        "replace": [{
                                            "source": "/ichibatop/com/inc/home/20080930/spt/inc/mno/pitari_mno_banner_04.tmpl?v=220725",
                                            "target": "mno-header"
                                        }]
                                    }
                                }, {
                                    "ratio": 67.0,
                                    "patternName": "abtest__target_else_segment__220930_plan",
                                    "patternId": "abtest__66089__219609",
                                    "actions": {
                                        "replace": [{
                                            "source": "/ichibatop/com/inc/home/20080930/spt/inc/mno/pitari_mno_banner_05.tmpl?v=220930",
                                            "target": "mno-header"
                                        }]
                                    }
                                }, {
                                    "ratio": 100.0,
                                    "patternName": "abtest__target_else_segment__220930_top",
                                    "patternId": "abtest__66089__219610",
                                    "actions": {
                                        "replace": [{
                                            "source": "/ichibatop/com/inc/home/20080930/spt/inc/mno/pitari_mno_banner_06.tmpl?v=220930",
                                            "target": "mno-header"
                                        }]
                                    }
                                }],
                                "type": "ABTest"
                            }
                        }],
                        "type": "Target"
                    }
                }],
                "type": "Target"
            }
        }],
        "type": "ABTest"
    },
    "enableIframe": true,
    "experimentId": 12119,
    "cookieName": "Rp",
    "ratConfig": {
        "acc": 1312,
        "aid": 1,
        "endPoint": "//secure.rat.rakuten.co.jp/?cpkg_none=",
        "ckp": "Rz",
        "cks": "Rp"
    },
    "scvParams": {
        "acc": "1",
        "aid": "43",
        "attr": "111"
    },
    "campaignName": "mnoprj_ichiba_top_pc",
    "webViewEnabled": true,
    "apiType": "CCMP",
    "apiUrl": "https://user-attributes.api.rakuten.co.jp/capi/v1/rmobile/user.json"
});