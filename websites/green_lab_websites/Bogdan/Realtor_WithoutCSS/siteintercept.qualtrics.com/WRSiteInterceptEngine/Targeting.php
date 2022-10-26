{"Intercepts":[{"InterceptID":"SI_cN5gYlOK8LtV3pz","InterceptRevision":null,"Decision":{"ActionSetID":null,"Creative":null,"Target":{"Type":"","URL":"","OriginalURL":null,"OriginalURLOrigin":null,"DisplayType":null},"PopUnderTarget":null},"DistributionID":null,"DirectoryID":null,"ContactID":null,"SurveyID":null},{"InterceptID":"SI_2a9qZZvRnb5FaZf","InterceptRevision":null,"Decision":{"ActionSetID":null,"Creative":null,"Target":{"Type":"","URL":"","OriginalURL":null,"OriginalURLOrigin":null,"DisplayType":null},"PopUnderTarget":null},"DistributionID":null,"DirectoryID":null,"ContactID":null,"SurveyID":null}],"ClientSideIntercepts":[{"InterceptID":"SI_2a9qZZvRnb5FaZf","Name":"CSAT 2020- Website Feedback","Active":true,"RandomizedActionSets":false,"InterceptRevision":"31","PreventRepeatedDisplay":"90","HideOnLocalStorageDisabled":true,"HideOnCookiesDisabled":true,"LogicTree":{"Value":false,"Type":"ValueNode"},"ActionSets":[],"ContactID":null,"DistributionID":null,"DirectoryID":null,"ContactFrequencyRulesEnabled":false},{"InterceptID":"SI_3a8ExLBWE6lmapg","Name":"Wildfire CSAT","Active":true,"RandomizedActionSets":false,"InterceptRevision":"6","PreventRepeatedDisplay":"30","HideOnLocalStorageDisabled":true,"HideOnCookiesDisabled":true,"LogicTree":{"Operator":"OR","Left":{"Comparator":"GTE","Left":{"LogicType":"EventTracking","Expression":"wildfireModalClicked","Type":"LogicNode"},"Right":{"Value":"1","Type":"ValueNode"},"Type":"ComparatorNode"},"Right":{"Comparator":"GTE","Left":{"LogicType":"EventTracking","Expression":"wildfire-map","Type":"LogicNode"},"Right":{"Value":"1","Type":"ValueNode"},"Type":"ComparatorNode"},"Type":"ConjunctionNode"},"ActionSets":[{"ActionSetID":"AS_57KhFrzdeAUp7V4","Label":"Desktop","Creative":{"ID":"CR_3kkkJextGTFq2cB","Name":"Flood CSAT Desktop","Revision":"5","AnchorTags":{},"Type":"PopOver"},"Target":{"Type":"Survey","URL":"https://siteintercept.qualtrics.com/WRSiteInterceptEngine/?Q_CLIENTTYPE=web&Q_Redirect=https://move.qualtrics.com/jfe/form/SV_dheDOuo5xuuVwiO?Q_CHL%3Dsi&Q_CID=CR_3kkkJextGTFq2cB&Q_ASID=AS_57KhFrzdeAUp7V4&Q_SRT=zDrZFsWc3/SoYFCghtQNjA%3D%3D&Q_SIID=SI_3a8ExLBWE6lmapg&Q_LOC=https://www.realtor.com/&Q_CLIENTVERSION=1.78.1","OriginalURL":"https://move.qualtrics.com/jfe/form/SV_dheDOuo5xuuVwiO?Q_CHL=si","OriginalURLOrigin":"https://move.qualtrics.com","DisplayType":null},"SurveyID":"SV_dheDOuo5xuuVwiO","ContactFrequencyPassed":null,"PopUnderTarget":null,"LogicTree":{"Comparator":"GTE","Left":{"LogicType":"Resolution","Expression":"ScreenWidth","Type":"LogicNode"},"Right":{"Value":"640","Type":"ValueNode"},"Type":"ComparatorNode"}},{"ActionSetID":"AS_1FUvtKqxX7gZwOi","Label":"Other Tablets","Creative":{"ID":"CR_0krTXGc71bvYykB","Name":"Flood CSAT Mobile","Revision":"5","AnchorTags":{},"Type":"Slider"},"Target":{"Type":"Survey","URL":"https://siteintercept.qualtrics.com/WRSiteInterceptEngine/?Q_CLIENTTYPE=web&Q_Redirect=https://move.qualtrics.com/jfe/form/SV_bw2n5k2lco3idEy?Q_CHL%3Dsi%26Q_Loader%3D0&Q_CID=CR_0krTXGc71bvYykB&Q_ASID=AS_1FUvtKqxX7gZwOi&Q_SRT=9KztDJWc3oCPYltMLNBzbA%3D%3D&Q_SIID=SI_3a8ExLBWE6lmapg&Q_LOC=https://www.realtor.com/&Q_CLIENTVERSION=1.78.1","OriginalURL":"https://move.qualtrics.com/jfe/form/SV_bw2n5k2lco3idEy?Q_CHL=si","OriginalURLOrigin":"https://move.qualtrics.com","DisplayType":null},"SurveyID":"SV_bw2n5k2lco3idEy","ContactFrequencyPassed":null,"PopUnderTarget":null,"LogicTree":{"Operator":"AND","Left":{"Comparator":"GT","Left":{"LogicType":"Resolution","Expression":"ScreenWidth","Type":"LogicNode"},"Right":{"Value":"640","Type":"ValueNode"},"Type":"ComparatorNode"},"Right":{"Comparator":"LT","Left":{"LogicType":"Resolution","Expression":"ScreenWidth","Type":"LogicNode"},"Right":{"Value":"1023","Type":"ValueNode"},"Type":"ComparatorNode"},"Type":"ConjunctionNode"}}],"ContactID":null,"DistributionID":null,"DirectoryID":null,"ContactFrequencyRulesEnabled":false},{"InterceptID":"SI_2tc8ZlEwHNW487A","Name":"Co Buyer Satisfaction","Active":true,"RandomizedActionSets":false,"InterceptRevision":"9","PreventRepeatedDisplay":"30","HideOnLocalStorageDisabled":false,"HideOnCookiesDisabled":false,"LogicTree":{"Operator":"AND","Left":{"Comparator":"GTE","Left":{"LogicType":"JavaScriptExpression","Expression":"document.getElementsByClassName('cobuyer-qualtrics-survey').length","Type":"LogicNode"},"Right":{"Value":"1","Type":"ValueNode"},"Type":"ComparatorNode"},"Right":{"Comparator":"HAS_NOT_BEEN_SEEN","Left":{"LogicType":"InterceptLogic","InterceptIDs":["SI_1FYUg94jQXAiGvs"],"Type":"LogicNode"},"Right":{"Value":"2592000","Type":"ValueNode"},"Type":"ComparatorNode"},"Type":"ConjunctionNode"},"ActionSets":[{"ActionSetID":"AS_6GdUHmcIPMqAbno","Label":null,"Creative":{"ID":"CR_eniKBtEK5jYF2Pb","Name":"Cash Reward - Roya","Revision":"5","AnchorTags":{},"Type":"Slider"},"Target":{"Type":"Survey","URL":"https://siteintercept.qualtrics.com/WRSiteInterceptEngine/?Q_CLIENTTYPE=web&Q_Redirect=https://move.qualtrics.com/jfe/form/SV_71VMyEfiv05KNUy?Q_CHL%3Dsi%26Q_Loader%3D0&Q_CID=CR_eniKBtEK5jYF2Pb&Q_ASID=AS_6GdUHmcIPMqAbno&Q_SRT=QokPlMDaTRHdixFV2b5N7w%3D%3D&Q_SIID=SI_2tc8ZlEwHNW487A&Q_LOC=https://www.realtor.com/&Q_CLIENTVERSION=1.78.1","OriginalURL":"https://move.qualtrics.com/jfe/form/SV_71VMyEfiv05KNUy?Q_CHL=si","OriginalURLOrigin":"https://move.qualtrics.com","DisplayType":null},"SurveyID":"SV_71VMyEfiv05KNUy","ContactFrequencyPassed":null,"PopUnderTarget":null,"LogicTree":{"Value":true,"Type":"ValueNode"}}],"ContactID":null,"DistributionID":null,"DirectoryID":null,"ContactFrequencyRulesEnabled":false},{"InterceptID":"SI_cN5gYlOK8LtV3pz","Name":"RDC Site Visitor Renov8","Active":true,"RandomizedActionSets":false,"InterceptRevision":"193","PreventRepeatedDisplay":"180","HideOnLocalStorageDisabled":false,"HideOnCookiesDisabled":false,"LogicTree":{"Value":false,"Type":"ValueNode"},"ActionSets":[],"ContactID":null,"DistributionID":null,"DirectoryID":null,"ContactFrequencyRulesEnabled":false}],"Modules":{"Core":"latest"},"FeatureFlags":{"DUX.ClientSideTargetingM1":true,"SI.ResponsiveDialog.EnableDisplayOptions":true,"DX.GoogleDataLayer":true,"DX.UpdateAssetHostName":false,"isClientLoggingEnabled":false,"DX.EmbeddedFeedback_NewAPIs":true,"DX.PostToStart":true,"DX.EnableCJAEventCollection":false,"deferredSliderLoadingFeatureEnabled":true,"DX.EmbeddedFeedback_GA_Visitor":true,"isLatencyLoggingEnabled":true,"DX.StatsAccuracy":true},"RequestData":{"CORSOrigin":"https://www.realtor.com","ID":"ZN_8p1dPH4RgQzWV0x","adobeSCVariable":"s","bVersion":"Published","brandDC":"yul1.qualtrics.com","brandID":"move","browser":"Chrome","browserVersion":106.0,"cookieDomain":"","googleDataLayerVariable":"","displayInterceptType":"","eventTrackers":{},"extRefType":"","extRefValue":"","hasBeenResolved":false,"hasDependencies":true,"isBrowserSupported":true,"isDebug":false,"isMobile":false,"historyStorageType":"cookie","historyStorageSize":null,"maxCookieSize":2000,"osName":"Windows","screenCaptureServiceBaseURL":"https://yul1.qualtrics.com/htmltoimage/","validIntercepts":{"SI_3a8ExLBWE6lmapg":"DependencyResolver","SI_2tc8ZlEwHNW487A":"DependencyResolver"},"zoneManualDisplay":false,"reevaluateInterceptOnUrlChange":false},"Dependencies":{"EventTracking":["wildfireModalClicked","wildfire-map"],"Intercept":["SI_1FYUg94jQXAiGvs"],"JavaScript":{"QID_66519911":"document.getElementsByClassName('cobuyer-qualtrics-survey').length"},"Resolution":true}}