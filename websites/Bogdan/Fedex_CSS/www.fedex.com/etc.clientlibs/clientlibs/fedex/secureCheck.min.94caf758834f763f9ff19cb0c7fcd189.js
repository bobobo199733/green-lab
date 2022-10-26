var isPublishMode = fdx.context.isPublishMode;
if (isPublishMode == "true") {
    var timoutWarning = 1740000; //60000 1740000// Display warning in 29Mins.
    var timoutNow = 1800000; //120000; 1800000// Timeout in 30 mins.
    var warningTimer;
    var timeoutTimer;

    function StartTimers() {
        warningTimer = setTimeout("IdleWarning()", timoutWarning);
        timeoutTimer = setTimeout("IdleTimeout()", timoutNow);
    }

    window.onload = StartTimers;

    function countdown() {
        var seconds = 60;

        function tick() {
            var counter = document.getElementById("counter");
            seconds--;
            if (counter != undefined && typeof(fdx) !== 'undefined' && fdx.isBrand !== 'undefined' && fdx.isBrand == "true") {
                counter.innerHTML = ":" + (seconds < 10 ? "0" : "") +
                    String(seconds);
            } else if (counter != undefined) {
                counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") +
                    String(seconds);
            }
            if (seconds > 0) {
                setTimeout(tick, 1000);
            }
        }
        tick();
    }
    // Reset timers.
    function ResetTimers() {
        clearTimeout(warningTimer);
        clearTimeout(timeoutTimer);
        StartTimers();
        $('#timeout').modal('hide');
        if (typeof(fdx) !== 'undefined' && fdx.isBrand !== 'undefined' && fdx.isBrand == "true") {
            $('#timeout').removeClass("modal-background");
        }

    }

    // Show idle timeout warning dialog.
    function IdleWarning() {
        $('#timeout').modal('show');
        if (typeof(fdx) !== 'undefined' && fdx.isBrand !== 'undefined' && fdx.isBrand == "true") {
            $('#timeout').addClass("modal-background");
        }

        countdown();
    }

    // Logout the user.
    function IdleTimeout() {
        FDX.LOGIN.doLogout();
    }
    document.onclick = function() {
        ResetTimers();
    }
    document.onkeypress = function() {
        ResetTimers();
    }
}
if (!FDX) {
    var FDX = {};
}

FDX.SECUREPAGECHECK = {

    loginDropdownClass: 'fxg-dropdown-js',
    loginOpenClass: 'fxg-dropdown__item--open',
    homePageURL: "",

    getHomePage: function() {
        var origin = window.location.origin + FDX.contextPath;
        var locale = '/' + FDX.DATALAYER.page.pageInfo.locale.replace('_', '-') + '/';
        var homePageURL = origin + locale + 'home.html';

        return homePageURL;
    },

    checkCookie: function(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },

    authenticatePageURL: function() {
        var redirectURL = "";
        var wlgnURL = "";
        var securePageRequest = false;
        var requestURL = window.location.href;
        sessionStorage.setItem("requestURL", requestURL);
        var origin = window.location.origin + FDX.contextPath;
        var locale = '/' + FDX.DATALAYER.page.pageInfo.locale.replace('_', '-') + '/';
        //FDX.SECUREPAGECHECK.homePageURL = origin + "/content/fedex-com/sites/"+ FDX.DATALAYER.page.pageInfo.country + "/" + FDX.DATALAYER.page.pageInfo.locale + "/" + "home.html";
        FDX.SECUREPAGECHECK.homePageURL = encodeURI(origin + locale + 'home.html');
        if (FDX.DATALAYER.page.pageInfo.wlgnURL.indexOf('https://') < 0) {
            wlgnURL = encodeURI(origin + FDX.DATALAYER.page.pageInfo.wlgnURL);
        } else {
            wlgnURL = FDX.DATALAYER.page.pageInfo.wlgnURL;
        }


        if (typeof(FDX.DATALAYER.page.pageInfo.securePage) !== "undefined" &&
            FDX.DATALAYER.page.pageInfo.securePage !== null && FDX.DATALAYER.page.pageInfo.securePage === "true" && requestURL !== FDX.SECUREPAGECHECK.homePageURL) {

            redirectURL = requestURL;
            sessionStorage.setItem("redirectURL", redirectURL);
            if (FDX.DATALAYER.page.pageInfo.wlgnURL && FDX.DATALAYER.page.pageInfo.useWLGN == 'true' && sessionStorage.getItem("requestURL") !== null) {

                //storing FDX.DATALAYER.page.pageInfo.useWLGN value when on IE11
                var isIE11 = window.navigator.userAgent.indexOf('Trident/');
                if (isIE11 > 0) {
                    sessionStorage.setItem("useWLGNValue", FDX.DATALAYER.page.pageInfo.useWLGN);
                }

                window.open(wlgnURL, "_self");
                sessionStorage.setItem("securePageRequest", true);
            } else if (sessionStorage.getItem("requestURL") !== null) {
                window.open(FDX.SECUREPAGECHECK.homePageURL, "_self");
                sessionStorage.setItem("securePageRequest", true);
            }

        }

    },

    brandAuthenticatePageURL: function() {
        var redirectURL = "";
        var securePageRequest = false;
        var requestURL = window.location.href;
        sessionStorage.setItem("requestURL", requestURL);
        var origin = encodeURI(window.location.origin);

        FDX.SECUREPAGECHECK.loginPageURL = origin + "/fedex-brand/login";

        if (
            typeof FDX.DATALAYER.page.pageInfo.securePage !== "undefined" &&
            FDX.DATALAYER.page.pageInfo.securePage !== null &&
            FDX.DATALAYER.page.pageInfo.securePage === "true" &&
            requestURL !== FDX.SECUREPAGECHECK.loginPageURL
        ) {
            redirectURL = requestURL;
            sessionStorage.setItem("redirectURL", redirectURL);
            if (sessionStorage.getItem("requestURL") !== null) {
                window.open(FDX.SECUREPAGECHECK.loginPageURL, "_self");
                sessionStorage.setItem("securePageRequest", true);
            }
        }
    },


    clearSessionStorage: function() {
        if (sessionStorage.getItem("securePageRequest") !== null) {
            sessionStorage.removeItem("redirectURL");
            sessionStorage.removeItem("securePageRequest");
            sessionStorage.removeItem("requestURL");
            sessionStorage.removeItem("userLoginformActive");


        }
    },

    loginOpen: function() {
        if ($(document).width() <= FDX.BREAKPOINTS.TabletMediaQuery) {
            setTimeout(function() {

                $('input#NavLoginUserId.fxg-field__input-text.fxg-field__input--required').trigger('focus');

            }, 500);
        }
    }


};

//FDX.SECUREPAGECHECK.authenticatePageURL();
/*if (typeof(FDX) !== "undefined" && FDX.SECUREPAGECHECK.checkCookie('wcmmode') === null
		&& window.top.location.href.indexOf('/editor.html/') == -1
		&& (localStorage.getItem("userAuthenticated") == null || localStorage.getItem("userAuthenticated") !== 'true')) {
      FDX.SECUREPAGECHECK.authenticatePageURL();
    }*/


$(document).ready(function(callback) {
    if (!FDX.LOGINCHECK.userAuthenticated && sessionStorage.getItem("securePageRequest") !== null &&
        sessionStorage.getItem("securePageRequest") === "true" &&
        sessionStorage.getItem("requestURL") === FDX.SECUREPAGECHECK.homePageURL &&
        FDX.SECUREPAGECHECK.checkCookie('wcmmode') === null) {

        if ($(document).width() <= FDX.BREAKPOINTS.TabletMediaQuery) {

            setTimeout(function() {

                $('.fxg-user-options__icon').trigger('click');

                //FDX.DROPDOWN.userLoginformActive == true;
                sessionStorage.setItem("userLoginformActive", true);
                callback(FDX.SECUREPAGECHECK.loginOpen);

            }, 100);

        }

        if ($(document).width() >= FDX.BREAKPOINTS.TabletMediaQuery) {

            setTimeout(function() {

                $('.' + FDX.DROPDOWN.dropdownClass).trigger("click");
                //FDX.DROPDOWN.userLoginformActive == true;
                sessionStorage.setItem("userLoginformActive", true);
                $('input#NavLoginUserId').focus();

            }, 100);
        }

    }

});
if (!FDX) {
    var FDX = {};
}

FDX.LOGINCHECK = {

    userAuthenticated: false,
    purpleIduserAuthenticated: false,
    apiURL: "",
    clientID: "",
    apiConfigURL: "/etc/services/getapigconfigs",
    loginCookie: document.cookie.indexOf("fdx_login") > 0,
    fName: document.cookie.indexOf("fcl_contactname") > 0,

    /*  	loginUserCheck : function() {
            var fdxLogin=FDX.LOGINCHECK.checkCookie("fdx_login");
            var fclContactName=FDX.LOGINCHECK.checkCookie("fcl_contactname");


				if (fdxLogin && fclContactName) {

					FDX.LOGINCHECK.userAuthenticated = true; // <--- change this to true if login passed
                    localStorage.setItem("userAuthenticated" , FDX.LOGINCHECK.userAuthenticated);

				} else {

					FDX.LOGINCHECK.userAuthenticated = false;
                    localStorage.setItem("userAuthenticated" , FDX.LOGINCHECK.userAuthenticated);

				}
       	}, */

    checkCookie: function(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },


    secureIsLoggedIn: function() {
        /*var parsedObject = JSON.parse(localStorage.getItem("loginDataStorage"));

        if(parsedObject == null || parsedObject.token == null){
			 FDX.SECUREPAGECHECK.authenticatePageURL();
        } */

        $.ajax({
            type: 'GET',
            url: 'https://' + FDX.LOGINCHECK.apiURL + '/user/v2/login',
            xhrFields: {
                withCredentials: true
            },

            cache: false,
            headers: {

                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + FDX.LOGINCHECK.clientID,
                'X-locale': 'en_US',
                'X-loggedin': 'true',
                'X-version': '1.0',
                'X-clientid': 'WCDO'

            },

            success: function(msg) {
                FDX.CLIENTLOGIN.isLoggedInResponse = msg;
                FDX.CLIENTLOGIN.userLoggedIn = FDX.CLIENTLOGIN.isLoggedInResponse.output.userLoggedIn;


                if (FDX.CLIENTLOGIN.userLoggedIn) {
                    FDX.LOGINCHECK.userAuthenticated = true; // <--- change this to true if login passed
                    //sessionStorage.setItem("userAuthenticated" , FDX.LOGINCHECK.userAuthenticated);
                } else {
                    FDX.LOGINCHECK.userAuthenticated = false;
                    //sessionStorage.setItem("userAuthenticated" , FDX.LOGINCHECK.userAuthenticated);
                    if (FDX.SECUREPAGECHECK.checkCookie('wcmmode') === null &&
                        window.top.location.href.indexOf('/editor.html/') == -1 &&
                        !FDX.LOGINCHECK.userAuthenticated) {
                        FDX.SECUREPAGECHECK.authenticatePageURL();
                    }
                }
            },
            error: function(request, status, error) {
                FDX.LOGINCHECK.userAuthenticated = false;
                //sessionStorage.setItem("userAuthenticated" , FDX.LOGINCHECK.userAuthenticated);
                if (FDX.SECUREPAGECHECK.checkCookie('wcmmode') === null &&
                    window.top.location.href.indexOf('/editor.html/') == -1 &&
                    !FDX.LOGINCHECK.userAuthenticated) {
                    FDX.SECUREPAGECHECK.authenticatePageURL();
                }
            }
        });
    },

    purpleIdLoginUserCheck: function() {
        (purpleIduserAuthenticated = false),
        (storageVal = localStorage.getItem("okta-token-storage"));
        if (storageVal) {
            var token = JSON.parse(storageVal).accessToken.accessToken;
            $.ajax({
                type: "GET",
                async: true,
                crossDomain: true,
                cache: false,
                url: FDX.LOGINCHECK.purpleIdURL,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                    "X-locale": "en_US",
                    "X-loggedin": "true",
                    "X-version": "1.0",
                    "X-clientid": "WCDO",
                },
                success: function(data) {
                    if (data.name) {
                        console.log("checkAuth" + data.name);
                        FDX.LOGINCHECK.purpleIduserAuthenticated = true; // <--- change this to true if login passed
                        localStorage.setItem(
                            "purpleIduserAuthenticated",
                            FDX.LOGINCHECK.purpleIduserAuthenticated
                        );
                    } else {
                        FDX.LOGINCHECK.purpleIduserAuthenticated = false;
                        localStorage.setItem(
                            "purpleIduserAuthenticated",
                            FDX.LOGINCHECK.purpleIduserAuthenticated
                        );
                        if (
                            FDX.SECUREPAGECHECK.checkCookie("wcmmode") === null &&
                            window.top.location.href.indexOf("/editor.html/") == -1 &&
                            (localStorage.getItem("purpleIduserAuthenticated") === null ||
                                localStorage.getItem("purpleIduserAuthenticated") !== "true")
                        ) {
                            FDX.SECUREPAGECHECK.brandAuthenticatePageURL();
                        }
                    }
                },
                error: function(request, status, error) {
                    FDX.LOGINCHECK.purpleIduserAuthenticated = false;
                    localStorage.setItem(
                        "purpleIduserAuthenticated",
                        FDX.LOGINCHECK.purpleIduserAuthenticated
                    );
                    if (
                        FDX.SECUREPAGECHECK.checkCookie("wcmmode") !== null &&
                        window.top.location.href.indexOf("/editor.html/") == -1 &&
                        (localStorage.getItem("purpleIduserAuthenticated") === null ||
                            localStorage.getItem("purpleIduserAuthenticated") !== "true")
                    ) {
                        FDX.SECUREPAGECHECK.brandAuthenticatePageURL();
                    }
                },
            });
        }
    },

    getLogin: function() {
        var configSelector = encodeURI(window.location.host).split('.', 1);
        var apiServiceURL = FDX.LOGINCHECK.apiConfigURL + ".jsonp";
        if (configSelector[0] != "www") {
            apiServiceURL = FDX.LOGINCHECK.apiConfigURL + "." + configSelector[0] + ".jsonp";
        }

        $.when($.ajax(apiServiceURL)).then(function(msg, textStatus, jqXHR) {
            if (typeof(msg) == "string") {
                msg = JSON.parse(msg);
            }
            FDX.LOGINCHECK.apiURL = msg.apigURL;
            FDX.LOGINCHECK.clientID = msg.clientID;
            var userLoggedInDetails = sessionStorage.getItem("userLoggedIn");

            if (localStorage.getItem("userLoggedInFlag") != 'true' || (userLoggedInDetails == null || JSON.parse(userLoggedInDetails).output.userLoggedIn == 'false') ||
                document.cookie.indexOf("fdx_login") <= 0) {
                FDX.LOGINCHECK.secureIsLoggedIn();
            }
        });
    },

    getPurpleIdLogin: function() {
        var configSelector = encodeURI(window.location.host).split('.', 1);
        var apiServiceURL = FDX.LOGINCHECK.apiConfigURL + ".jsonp";
        if (configSelector[0] != "www") {
            apiServiceURL = FDX.LOGINCHECK.apiConfigURL + "." + configSelector[0] + ".jsonp?nocache=true";
        }
        $.when($.ajax(apiServiceURL)).then(function(
            msg,
            textStatus,
            jqXHR
        ) {
            if (typeof(msg) == "string") {
                msg = JSON.parse(msg);
            }
            FDX.LOGINCHECK.purpleIdURL = msg.purpleIdURL;
            FDX.LOGINCHECK.purpleIdLoginUserCheck();
        });
    },

};

if (typeof(FDX) !== "undefined" && window.top.location.href.indexOf('/editor.html/') == -1 &&
    FDX.DATALAYER.page.pageInfo.securePage !== null) {
    if ((FDX.DATALAYER.page.pageInfo.securePage === "true" || (FDX.DATALAYER.page.pageInfo.useWLGN === "true" && sessionStorage.getItem("secureLink") !== null)) && FDX.LOGINCHECK.loginCookie && FDX.LOGINCHECK.fName) {

        if (FDX.DATALAYER.page.pageInfo.useWLGN === "true" && sessionStorage.getItem("secureLink") !== null) {
            var link = encodeURI(sessionStorage.getItem("secureLink"));
            sessionStorage.removeItem("secureLink");
            window.open(link, "_self", '', true);
        }

        FDX.LOGINCHECK.getLogin();

    } else if (window.location.origin.indexOf("brand") >= 0) {
        if (
            FDX.DATALAYER.page.pageInfo.securePage === "true" &&
            localStorage.getItem("okta-token-storage") !== null
        ) {
            FDX.LOGINCHECK.getPurpleIdLogin();
        } else {
            FDX.LOGINCHECK.purpleIduserAuthenticated = false;
            localStorage.setItem(
                "purpleIduserAuthenticated",
                FDX.LOGINCHECK.purpleIduserAuthenticated
            );
            if (
                FDX.SECUREPAGECHECK.checkCookie("wcmmode") === null &&
                window.top.location.href.indexOf("/editor.html/") == -1 &&
                (localStorage.getItem("purpleIduserAuthenticated") === null ||
                    localStorage.getItem("purpleIduserAuthenticated") !== "true")
            ) {
                FDX.SECUREPAGECHECK.brandAuthenticatePageURL();
            }
        }
    } else {
        FDX.LOGINCHECK.userAuthenticated = false;
        //sessionStorage.setItem("userAuthenticated" , FDX.LOGINCHECK.userAuthenticated);
        if (FDX.SECUREPAGECHECK.checkCookie('wcmmode') === null &&
            window.top.location.href.indexOf('/editor.html/') == -1 &&
            !FDX.LOGINCHECK.userAuthenticated) {
            FDX.SECUREPAGECHECK.authenticatePageURL();
        }
    }
}


$(document).ready(function() {

});