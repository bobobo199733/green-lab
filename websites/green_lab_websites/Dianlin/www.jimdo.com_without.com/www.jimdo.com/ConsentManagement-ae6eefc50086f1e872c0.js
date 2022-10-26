"use strict";(self.webpackChunk_jimdo_gatsby_www=self.webpackChunk_jimdo_gatsby_www||[]).push([[5],{4595:function(n,e,o){o.r(e),o.d(e,{ConsentManagementBanner:function(){return q},default:function(){return z}});var t=o(67294),i=o(18149),s=o(58706);const a=()=>Date.now().toString()+"-"+new Array(5).fill(0).map((()=>Math.random().toString(36).slice(-1))).join(""),r=n=>n.toLowerCase().replace(/[^a-z0-9\.]+/g,"_"),l=(n,e)=>{const o=[n.category,n.action,n.label].filter((n=>null!=n)),t=o.join(".").replace(/-/g,"_"),i=o.map(r).join(".");return e&&t!=i&&console.warn(`frontend-tracking: topic was normalized from '${t}' to '${i}'`),i},c=()=>{const n=navigator.language||navigator.userLanguage;return"string"==typeof n?n.substr(0,2).toLowerCase():null},d=["localhost","stable-staging.com","jimdosite-stage.com","jimdo-platform.net","stage.jimdo.systems","jimdo-dev-staging.com","storybook","pv-url"];var u,f,g=function(){return window[window._fs_namespace]},w=function(){if(!!!g())throw Error("FullStory is not loaded, please ensure the init function is invoked before calling FullStory API functions")},v=function(){w();for(var n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];return e.every((function(n){return g()[n]}))},m=function(n){return function(){if(window._fs_dev_mode){var e="FullStory is in dev mode and is not recording: ".concat(n," method not executed");return console.warn(e),e}var o;return v(n)?(o=g())[n].apply(o,arguments):(console.warn("FS.".concat(n," not ready")),null)}},p=m("event"),y=(m("log"),m("getCurrentSessionURL"),m("identify"),m("setUserVars"),m("consent"),m("shutdown")),_=(m("restart"),m("anonymize"),m("setVars"),u=function(n,e){if(g())console.warn("The FullStory snippet has already been defined elsewhere (likely in the <head> element)");else if(n.recordCrossDomainIFrames&&(window._fs_run_in_iframe=!0),n.recordOnlyThisIFrame&&(window._fs_is_outer_script=!0),function(n){var e,o,t,i,s,a,r,l,c=n.orgId,d=n.namespace,u=void 0===d?"FS":d,f=n.debug,g=void 0!==f&&f,w=n.host,v=void 0===w?"fullstory.com":w,m=n.script,p=void 0===m?"edge.fullstory.com/s/fs.js":m;if(!c)throw new Error("FullStory orgId is a required parameter");window._fs_debug=g,window._fs_host=v,window._fs_script=p,window._fs_org=c,window._fs_namespace=u,e=window,o=document,t=window._fs_namespace,i="script",s="user",t in e?e.console&&e.console.log&&e.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].'):((r=e[t]=function(n,e,o){r.q?r.q.push([n,e,o]):r._api(n,e,o)}).q=[],(a=o.createElement(i)).async=1,a.crossOrigin="anonymous",a.src="https://"+_fs_script,(l=o.getElementsByTagName(i)[0]).parentNode.insertBefore(a,l),r.identify=function(n,e,o){r(s,{uid:n},o),e&&r(s,e,o)},r.setUserVars=function(n,e){r(s,n,e)},r.event=function(n,e,o){r("event",{n:n,p:e},o)},r.anonymize=function(){r.identify(!1)},r.shutdown=function(){r("rec",!1)},r.restart=function(){r("rec",!0)},r.log=function(n,e){r("log",[n,e])},r.consent=function(n){r("consent",!arguments.length||n)},r.identifyAccount=function(n,e){a="account",(e=e||{}).acctId=n,r(a,e)},r.clearUserCookie=function(){},r.setVars=function(n,e){r("setVars",[n,e])},r._w={},l="XMLHttpRequest",r._w[l]=e[l],l="fetch",r._w[l]=e[l],e[l]&&(e[l]=function(){return r._w[l].apply(this,arguments)}),r._v="1.3.0")}(n),e&&g()("observe",{type:"start",callback:e}),!0===n.devMode){var o="FullStory was initialized in devMode and will stop recording";p("FullStory Dev Mode",{message_str:o}),y(),window._fs_dev_mode=!0,console.warn(o)}},f="FullStory init has already been called once, additional invocations are ignored",function(){window._fs_initialized?f&&console.warn(f):(u.apply(void 0,arguments),window._fs_initialized=!0)});let h=!1;const I=["cms.text.edit","cms.website.save"];"undefined"!=typeof window&&(window._fs_ready=function(){h=!0});let C=null;let S=0;const b=a(),A=n=>e=>{var o,t,i,s,a,r,d;const u=l(e,n.logToConsole||!1),f=(null==n||null===(o=n.getSeedPayload)||void 0===o?void 0:o.call(n))??{},g={userAgent:(null==n||null===(t=n.getUserAgent)||void 0===t?void 0:t.call(n))??navigator.userAgent,isAffiliate:n.isAffiliate&&n.isAffiliate(),language:(null==n||null===(i=n.getLanguage)||void 0===i?void 0:i.call(n))??c(),referrer:(null==n||null===(s=n.getReferrer)||void 0===s?void 0:s.call(n))??document.referrer,location:(null==n||null===(a=n.getLocation)||void 0===a?void 0:a.call(n))??document.location.href,...f,...e.payload},w={anonId:n.anonId(),env:n.env,userAccountId:null==n||null===(r=n.userAccountId)||void 0===r?void 0:r.call(n),websiteId:null==n||null===(d=n.websiteId)||void 0===d?void 0:d.call(n),message:JSON.stringify(g),topic:u,seq:S++,sid:b};if(n.logToConsole&&console.log(`frontend-tracking: event "${w.topic}" tracked`,g,w),null!=n&&n.fullStoryConfig&&!C){const{waitForConsent:e}=n.fullStoryConfig();C=(n=>{let e=!1;return n((()=>{e=!0,h||(_({orgId:"5F864"}),h=!0)})),(n,o)=>{e&&h&&p(n,o)}})(e)}var v;C&&(v=u,!I.includes(v))&&C("dwh",{topic:u,...g,anonId:w.anonId,env:w.env});const m=JSON.stringify(w);((null==n?void 0:n.sendBeacon)??navigator.sendBeacon.bind(navigator))(n.endpoint,m)};const k=a(),F=a(),j=n=>{let e=0;return o=>t=>{var i,s,a,r;const d=l(t,o.logToConsole||!1),u=(null==o||null===(i=o.getSeedPayload)||void 0===i?void 0:i.call(o))??{},f={language:(null==o||null===(s=o.getLanguage)||void 0===s?void 0:s.call(o))??c(),location:(null==o||null===(a=o.getLocation)||void 0===a?void 0:a.call(o))??document.location.href,...u,...t.payload},g={meta:JSON.stringify(f),topic:d,seq:e++,sid:n,websiteId:null==o||null===(r=o.websiteId)||void 0===r?void 0:r.call(o)};o.logToConsole&&console.log(`frontend-tracking: anonymous event "${g.topic}" tracked`,f,g);const w=JSON.stringify(g);((null==o?void 0:o.sendBeacon)??navigator.sendBeacon.bind(navigator))(o.endpoint,w)}},T=j(k);j(F);function B(n){return d.some((e=>n.includes(e)))?"https://at.stage.jimdo.systems/anon":"https://at.prod.jimdo.systems/anon"}const L=()=>"undefined"!=typeof window&&window.navigator.webdriver;const q=({googleTagManagerId:n,userCentricsId:e,suppressConsentBanner:o=!1,forceAcceptAllConsent:a=!1})=>{const r=L();return(0,t.useEffect)((()=>{const t=A({endpoint:(a=window.location.hostname,d.some((n=>a.includes(n)))?"https://at.stage.jimdo.systems/rich":"https://at.prod.jimdo.systems/rich"),env:"lp",anonId:s.getAnonId,userAccountId:()=>(0,s.getUserAccountId)()||""});var a;const l=T({endpoint:B(window.location.hostname)});(0,s.withConsentOptIn)((0,s.setRichTracking)(t),(0,s.setAnonymousTracking)(l),(0,s.configureAutomatedAnonymousTracking)("lp.www")),(0,s.init)({gtmContainerId:n,getDpsCookieNames:i.qK,consentBannerInteractionsTrackCategory:"www",customAutomatedTrackingSettings:{category:"www",anonymousCategory:"lp.www"}}),(0,i.S1)({userCentricsSettingsId:e,suppressConsentBanner:o||r})}),[n,e,o,r]),(0,t.useEffect)((()=>{a&&(0,i.xR)()}),[a]),null};var z=q}}]);
//# sourceMappingURL=ConsentManagement-ae6eefc50086f1e872c0.js.map