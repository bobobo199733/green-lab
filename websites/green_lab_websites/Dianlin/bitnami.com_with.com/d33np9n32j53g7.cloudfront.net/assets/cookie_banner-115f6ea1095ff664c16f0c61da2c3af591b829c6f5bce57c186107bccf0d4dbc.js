function setGTM(e,t,o,n,r){e[n]=e[n]||[],e[n].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var i=t.getElementsByTagName(o)[0],a=t.createElement(o),s="dataLayer"!=n?"&l="+n:"";a.async=!0,a.src="https://www.googletagmanager.com/gtm.js?id="+r+s,i.parentNode.insertBefore(a,i)}function waitForOnetrustActiveGroups(){-1<document.cookie.indexOf("OptanonConsent")&&-1<document.cookie.indexOf("groups=")&&-1<decodeURIComponent(document.cookie).indexOf("C0002:1")?(clearTimeout(timer),setGTM(window,document,"script","dataLayer","GTM-W2X9W2W")):timer=setTimeout(waitForOnetrustActiveGroups,250)}var timer;waitForOnetrustActiveGroups();