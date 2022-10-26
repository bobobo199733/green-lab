/*!
 * Attaches Client Hints to Snowplow events v3.4.0 (http://bit.ly/sp-js)
 * Copyright 2022 Snowplow Analytics Ltd, 2010 Anthon Pang
 * Licensed under BSD-3-Clause
 */

/*
 * Copyright (c) 2022 Snowplow Analytics Ltd, 2010 Anthon Pang
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
var uaClientHints;
/**
 * Attaches Client Hint information where available
 * @param includeHighEntropy - Should high entropy values be included
 */
function ClientHintsPlugin(includeHighEntropy) {
    var populateClientHints = function () {
        var navigatorAlias = navigator;
        if (navigatorAlias.userAgentData) {
            uaClientHints = {
                isMobile: navigatorAlias.userAgentData.mobile,
                brands: navigatorAlias.userAgentData.brands
            };
            if (includeHighEntropy && navigatorAlias.userAgentData.getHighEntropyValues) {
                navigatorAlias.userAgentData
                    .getHighEntropyValues(['platform', 'platformVersion', 'architecture', 'model', 'uaFullVersion'])
                    .then(function (res) {
                    uaClientHints.architecture = res.architecture;
                    uaClientHints.model = res.model;
                    uaClientHints.platform = res.platform;
                    uaClientHints.uaFullVersion = res.uaFullVersion;
                    uaClientHints.platformVersion = res.platformVersion;
                });
            }
        }
    };
    return {
        activateBrowserPlugin: function () {
            if (!uaClientHints) {
                populateClientHints();
            }
        },
        contexts: function () {
            if (uaClientHints) {
                return [
                    {
                        schema: 'iglu:org.ietf/http_client_hints/jsonschema/1-0-0',
                        data: uaClientHints
                    },
                ];
            }
            return [];
        }
    };
}

export { ClientHintsPlugin };
//# sourceMappingURL=index.module.js.map
