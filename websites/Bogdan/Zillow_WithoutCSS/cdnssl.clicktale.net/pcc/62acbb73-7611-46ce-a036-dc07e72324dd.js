// Copyright 2006-2022 ClickTale Ltd., US Patent Pending

window.ClickTaleGlobal = window.ClickTaleGlobal || {};
window.ClickTaleSettings = window.ClickTaleSettings || {};

ClickTaleGlobal.init = ClickTaleGlobal.init || {};
ClickTaleGlobal.scripts = ClickTaleGlobal.scripts || {};

ClickTaleGlobal.scripts.filter = ClickTaleGlobal.scripts.filter || (function() {
    var recordingThreshold = Math.random() * 100;

    return {
        isRecordingApproved: function(percentage) {
            return recordingThreshold <= percentage;
        }
    }
})();


// Copyright 2006-2022 ClickTale Ltd., US Patent Pending
// PID: 82

var ctRules_PrePCC = {
    "rules": "id|e1f1d3f5-06c7-42b5-9e14-c0e3dc22814f|name|VE+Action+%7C+AR+Clicked+Join+Main+Nav|type|ClickEvent|title|Click+Event|isActive|action|MultipleAction|children|CTEventAction|eventName|VE+Action+%7C+AR+Clicked+Join+Main+Nav|isETR|isPII|StaticEventNameAction|VE+Action+%7C+AR+Clicked+Join+Main+Nav|eventId|triggers|OrCondition|childConditions|ClickCondition|ctSelector|querySelector|#header-user+.nav-item:nth-of-type(2)+.nav-link|alias|query-selector|excludeTagNames|states|LocationCondition|url|https://www.zillow.com/agent-resources/|mode|StartsWith|ignoreQueryString|compositeName|4df451ec-aec9-4a8e-8deb-f3519f893bc2|A+%7C+PA+%7C+Solutions+RE+Free+Branding%7C+Download+App|Click+Event|A+%7C+PA+%7C+Solutions+RE+Free+Branding%7C+Download+App|A+%7C+PA+%7C+Solutions+RE+Free+Branding%7C+Download+App|[data-zga-ga-label=\"brand_download_app\\%7Cmodule_3\"]+.btn|https://premieragent.zillow.com/solutions/real-estate-free-branding/|Equals|14052d6b-0633-444b-8141-78aa62292597|ZillowRentalManager-Click|Click+Event|comparisonMode|#section-1-content-2+[rel]|subType|https://www.zillow.com/marketing/rental-manager/tenant-screening/|a8ce12ed-c7cd-4cc8-898a-08988a4da15c|A+%7C+PA+%7C+Solutions+RE+Broker%7C+Learn+More|Click+Event|A+%7C+PA+%7C+Solutions+RE+Broker%7C+Learn+More|A+%7C+PA+%7C+Solutions+RE+Broker%7C+Learn+More|.jump-link|https://premieragent.zillow.com/solutions/real-estate-broker/|f51efe01-2ac1-4e8b-a6d8-f65b0d35da3a|MFProductsSuccessfulFormSubmit|PageEventByElement|Page+Event+By+Component|DelayCondition|delay|AndCondition|https://www.zillow.com/marketing/rental-property-products/|ExistsCondition|InnerText|section+h3|value|Thank+you!+We+will+be+in+touch+shortly.|6339f3e0-6598-4a04-ac99-97cf14aa8207|FormSubmit-MFProducts|FormEvent|Form|FormInitEventAction|form|Form4|fields|submit|[data-widget-ga-action=\"Top+form\"]+[type=submit]|[data-widget-ga-action=\"Top+form\"]|disabledForms|childRuleData|FormSubmitEventAction|[data-widget-ga-action=\"Top+form\"]|FormSuccessFailureAction|[data-widget-ga-action=\"Top+form\"]|submitSuccessful|IntervalCondition|intervalTime|totalTime|startListenImmediately|[data-widget-ga-action=\"Top+form\"]+.alert|labelText|FAIL|FormSubmitStatus|[data-widget-ga-action=\"Top+form\"]+[type=submit]|domType|submitElement|EnterClickCondition|[data-widget-ga-action=\"Top+form\"]+[type=submit]|TEXTAREA|[data-widget-ga-action=\"Top+form\"]|formElement|FormSubmit|[data-widget-ga-action=\"Top+form\"]|[data-widget-ga-action=\"Top+form\"]+[type=submit]|FormInit|03f28ac4-44c7-4bd9-9a2c-9a4b069d4bd5|Apartments+-+Rentals|Click+Event|Apartments+-+Rentals+CTA|Apartments+-+Rentals+CTA|[data-ga-category=\"call_to_action\\%7Cimage\"][data-ga-label=\"search_now\\%7Capartments\"]+.goldberg-display_mobile__none+[width]|[data-ga-category=\"call_to_action\\%7Ctext\"][data-ga-label=\"search_now\\%7Capartments\"]+b|https://www.zillow.com/marketing/renter-search-center/|55dcd6e7-765a-4212-9aa7-1c647de31624|A+%7C+PA+%7C+Solutions+RE+Agent+%7C+Bottom+Learn+More|Click+Event|A+%7C+PA+%7C+Solutions+RE+Agent+%7C+Bottom+Learn+More|A+%7C+PA+%7C+Solutions+RE+Agent+%7C+Bottom+Learn+More|.goldberg-cards+.goldberg-row+.btn|https://premieragent.zillow.com/solutions/real-estate-agent/|b9eb21dd-7994-461d-8c42-ce4a21e6528f|CEC+%7C+Action+%7C+Selected+Agent/Broker|Click+Event|CEC+%7C+Action+%7C+Selected+Agent/Broker|CEC+%7C+Action+%7C+Selected+Agent/Broker|.pro-type-select|http://agents.zillow.com/get-more-leads|74c64f83-4ee2-4b23-9789-96ae9f53cdd3|VE+Action+%7C+Advertising+%7C+Clicked+on+Get+started+(form)|Click+Event|VE+Action+%7C+Clicked+on+Get+started+(form)|VE+Action+%7C+Clicked+on+Get+started+(form)|.btn.btnPrimary.btnFullWidth.mtm|https://premieragent.zillow.com/|0e496bbb-e559-401a-bae9-784eb0a644fe|BuilderTools-AdvantageProgram-LearnMore|Click+Event|[data-ga-action=\"ZG+Advantage+Program+CTA\"]+.btn|https://www.zillow.com/marketing/new-construction-advertising/products/builder-tools/|87307a85-ee04-4bff-9289-39413b38f873|B2B++MF+Rentals+%7C+Failed+Submits|Form1|.goldberg-column_4+[data-step=\"2\"]+.btn|.goldberg-column_4+.goldberg-block+.widget+[data-step=\"1\"]+form|B2B++MF+Rentals+%7C+Failed+Submits|.goldberg-column_4+.goldberg-block+.widget+[data-step=\"1\"]+form|B2B++MF+Rentals+%7C+Failed+Submits|.goldberg-column_4+.goldberg-block+.widget+[data-step=\"1\"]+form|https://www.zillow.com/marketing/rental-property-advertising/lease-connect/|.goldberg-column_4+[method]+ul,.goldberg-column_4+.alert|.goldberg-column_4+[data-step=\"2\"]+.btn|.goldberg-column_4+[data-step=\"2\"]+.btn|.goldberg-column_4+.goldberg-block+.widget+[data-step=\"1\"]+form|.goldberg-column_4+.goldberg-block+.widget+[data-step=\"1\"]+form|.goldberg-column_4+[data-step=\"2\"]+.btn|f23b87d4-b30e-4d53-bc52-09d4cbe4b3c6|VE+Action+%7C+Clicked+on+the+footer+options|Click+Event|VE+Action+%7C+Clicked+on+the+footer+options|.list2cols.lvs.txtL.ptxl.pam+a|https://premieragent.zillow.com/pa/|8d3e1cd8-e985-427f-b1b8-b70bee825aa9|A+%7C+PA+%7C+Solutions+RE+Agent+%7C+Get+Started|Click+Event|A+%7C+PA+%7C+Solutions+RE+Agent+%7C+Get+Started|A+%7C+PA+%7C+Solutions+RE+Agent+%7C+Get+Started|[data-zga-ga-label=\"agent_get_started\\%7Cmodule_1\"]+.btn|https://premieragent.zillow.com/solutions/real-estate-agent|f31e3328-320b-4d4a-a3fe-3b50a95375ab|VE+Action+%7C+Get+More+Leads+%7C+Clicked+on+Get+started+(on+form)|Click+Event|VE+Action+%7C+Get+More+Leads+%7C+Clicked+on+Get+started+(on+form)|#formSubmitButton|http://agents.zillow.com/get-more-leads-lf.html|ebebd199-938a-4ebc-940d-e13ab74e31cd|Header-PostFreeListing|Click+Event|[data-zga-gtm-event]+.btn|https://www.zillow.com/marketing/rental-manager/fill-your-vacancy/|32cb3dc6-c6e4-4d4f-a612-271fc70b8308|GetNotified-CTA|Click+Event|[data-ga-label=\"Sign+up+for+notifications\"]+.btn|[data-ga-label=\"Sign+up+for+updates\"]+p|https://www.zillow.com/marketing/rental-manager/rental-lease-agreements/|937111c2-4c08-45cc-90ed-fc96325d55df|ExitClicks-Nucleus|Click+Event|.zsg-footer-linklist+a|.znav-links+span|.znav-logo|ba6a8bed-6a12-4de2-b3b9-842f5c1dd656|A+%7C+PA+%7C+Solutions+Nav+%7C+CRM|Click+Event|A+%7C+PA+%7C+Solutions+Nav+%7C+CRM|A+%7C+PA+%7C+Solutions+Nav+%7C+CRM|#menu-item-125653+[data-zga-ga-label=\"crm\"]|https://premieragent.zillow.com/solutions/|785e955a-1769-49dc-8466-c408abe98387|A+%7C+PA+%7C+Solutions+RE+Team%7C+Learn+More|Click+Event|A+%7C+PA+%7C+Solutions+RE+Team%7C+Learn+More|A+%7C+PA+%7C+Solutions+RE+Team%7C+Learn+More|https://premieragent.zillow.com/solutions/real-estate-team/|0106f57b-c842-488d-8f3a-b9ba774c6be6|Pet-Friendly+Rentals|Click+Event|Pet-Friendly+CTA|Pet-Friendly+CTA|[data-ga-category]+.goldberg-display_mobile__none+[width=\"150\"]|[data-ga-category=\"call_to_action\\%7Ctext\"][data-ga-label=\"search_now\\%7Cwith_pet\"]+b|bc181bb1-bf13-4575-a02c-59fd8a45600e|LeasesIconClick|Click+Event|[data-gtm-event=\"Leases\"]+.goldberg-display_mobile__none+[width]|aa0eac1b-c832-4055-9797-b442d2ba2f33|BuyersGuide-FindingHomeClick|Click+Event|#goldberg-5df7b1a11b263+.container:nth-of-type(3)+.col-12:nth-of-type(1)+.post-card__image,#goldberg-5df7b1a11b263+.container:nth-of-type(3)+.col-12:nth-of-type(1)+.post-card__title+a,#goldberg-5df7b1a11b263+.container:nth-of-type(3)+.col-12:nth-of-type(2)+.post-card__image,#goldberg-5df7b1a11b263+.container:nth-of-type(3)+.col-12:nth-of-type(2)+.post-card__title+a,#goldberg-5df7b1a11b263+.container:nth-of-type(3)+.col-12:nth-of-type(3)+.post-card__image,#goldberg-5df7b1a11b263+.container:nth-of-type(3)+.col-12:nth-of-type(3)+.post-card__title+a,#goldberg-5df7b1a11b263+.container:nth-of-type(3)+.d-none|https://www.zillow.com/home-buying-guide/|9c78ee16-1379-42ed-bfa3-d584fb5fd60e|A+%7C+PA+%7C+Advertising+Page+%7C+Any+Section+CTA+Click|Click+Event|A+%7C+PA+%7C+Advertising+Page+%7C+Any+Section+Link+Click|A+%7C+PA+%7C+Advertising+Page+%7C+Any+Section+Link+Click|[data-zga-ga-label=\"agent_inbound_form\\%7Ctop_module\"]+p|[data-zga-ga-label=\"agent_inbound_form\\%7Ccustomizeplan_module\"]+p|[data-zga-ga-label=\"agent_inbound_form\\%7Cmy_agent_module\"]+p|[data-zga-ga-label=\"agent_inbound_form_original\\%7Cribbon\"]+.btn|https://premieragent.zillow.com/products/advertising/|7942dd82-4fc8-4ac7-9708-aa7b2c319e90|B2B+Nucleus+-+Leases+Button|Click+Event|B2B+Nucleus+-+Leases+Button|B2B+Nucleus+-+Leases+Button|[data-gtm-event=\"Leases\"]+.goldberg-display_mobile__none+[width]|842ca19e-4f40-45c9-88fc-1c895bed8117|Action+%7C+Blog+%7C+Clicks+Right+Hand+Menu|Click+Event|Action+%7C+Blog+%7C+Clicks+Right+Hand+Menu|Action+%7C+Blog+%7C+Clicks+Right+Hand+Menu|#menu-blog+a|https://www.zillow.com/agent-resources/blog/|9677f321-348e-4272-b286-ce90559a03f9|VE+Action+%7C+Advertising+%7C+Clicked+on+Contact+(on+Top)|Click+Event|VE+Action+%7C+Advertising+%7C+Clicked+on+Contact+(on+Top)|[href=\"\\#signup\"].bas|6a21a50b-4952-4f40-8105-b906389e1d05|A+%7C+PA+%7C+Solutions+RE+Free+Branding%7CCreate+Profile|Click+Event|A+%7C+PA+%7C+Solutions+RE+Free+Branding%7CCreate+Profile|A+%7C+PA+%7C+Solutions+RE+Free+Branding%7CCreate+Profile|.mx-2+.btn|f53aa2df-0278-47b9-93fa-0aca12a8ec7b|A+%7C+PA+%7C+Solutions+%7C+MOBILE+Main+Nav|Click+Event|A+%7C+PA+%7C+Solutions+%7C+MOBILE+Main+Nav|A+%7C+PA+%7C+Solutions+%7C+MOBILE+Main+Nav|.hamburger+span:nth-of-type(1)|https://premieragent.zillow.com/solutions|734612ea-a185-423d-87f9-4b4b77f0d08e|A+%7C+PA+%7C+Solutions+RE+Agent+%7C+Bottom++Get+Started|Click+Event|A+%7C+PA+%7C+Solutions+RE+Agent+%7C+Bottom++Get+Started|A+%7C+PA+%7C+Solutions+RE+Agent+%7C+Bottom++Get+Started|[data-zga-ga-label=\"agent_get_started\\%7Cmodule_10\"]+.btn|d5c4708e-718b-427c-b3e0-421854b3f5a7|VE+Action+%7C+Agent+Resource+Center+%7C+Clicked+on+Advertise+(Footer+Menu)|Click+Event|VE+Action+%7C+Agent+Resource+Center+%7C+Clicked+on+Advertise+(Footer+Menu)|[href=\"\\/\\/www\\.zillow\\.com\\/agent-advertising\\/\"]|64632f00-815b-47c0-bb5d-f3c52b48fc4e|Bottom-PostFreeListing|Click+Event|[data-gtm-event=\"PostFreeCTA\"]+.btn|9976173f-88f5-4839-8808-379b6f7f88ee|ZRM-CTA|Click+Event|[data-ga-label=\"Zillow+Rental+Manager\"]+p|8bd7d98d-a8f3-4215-be94-a451fc562b07|FormSubmit-LeaseConnect|Form2|.goldberg-column_4+.goldberg-block+.widget+[data-step=\"2\"]+[method=\"post\"]+[type=submit]|.goldberg-column_4+.goldberg-block+.widget+[data-step=\"2\"]+[method=\"post\"]|.goldberg-column_4+.goldberg-block+.widget+[data-step=\"2\"]+[method=\"post\"]|.goldberg-column_4+.goldberg-block+.widget+[data-step=\"2\"]+[method=\"post\"]|.goldberg-column_4+.alert+strong|.goldberg-column_4+.goldberg-block+.widget+[data-step=\"2\"]+[method=\"post\"]+[type=submit]|.goldberg-column_4+.goldberg-block+.widget+[data-step=\"2\"]+[method=\"post\"]+[type=submit]|.goldberg-column_4+.goldberg-block+.widget+[data-step=\"2\"]+[method=\"post\"]|.goldberg-column_4+.goldberg-block+.widget+[data-step=\"2\"]+[method=\"post\"]|.goldberg-column_4+.goldberg-block+.widget+[data-step=\"2\"]+[method=\"post\"]+[type=submit]|68bcab7e-3db4-4f2d-a746-c5e4713f56dc|VE+Action+%7C+Clicked+on+Premier+Agent+logo|Click+Event|VE+Action+%7C+Clicked+on+Premier+Agent+logo|#mainLogo|14428949-3e19-4d92-873b-b49786575a1b|BuyerDiscovery-CommunityPages-LearnMore|Click+Event|[data-ga-action=\"Community+Pages+CTA\"]+.btn|https://www.zillow.com/marketing/new-construction-advertising/products/buyer-discovery/|92af4a7d-956e-443a-994a-8dbb73db46a5|VE+Action+%7C+Agent+Resources+%7C+Interacted+with+Menu|Click+Event|VE+Action+%7C+Agent+Resources+%7C+Interacted+with+Menu|.menu-label|846dd843-0dd8-4cb5-bf01-17fb8630bfc7|A+%7C+PA+%7C+Advertising+Page+%7C+Footer+CTA+Click|Click+Event|A+%7C+PA+%7C+Advertising+Page+%7C+Footer+CTA+Click|A+%7C+PA+%7C+Advertising+Page+%7C+Footer+CTA+Click|.Inherit+.btn|13bf294d-fe97-466b-b61a-1bb0d2330927|PropertySearch-Footer|SubmitSuccessEvent|Form+Submit+Status|[data-widget-ga-label=\"property_search\\%7Cclosing+\"]+.btn|NotEquals|[data-widget-ga-label=\"property_search\\%7Cclosing+\"]+.form-control|1ac23399-483f-4814-80a2-8f9890fe5e6e|Action+%7C+Prem+Agent+HP+%7C+Clicks+Become+a+Premier+Agent|Click+Event|Action+%7C+Prem+Agent+HP+%7C+Clicks+Become+a+Premier+Agent|Action+%7C+Prem+Agent+HP+%7C+Clicks+Become+a+Premier+Agent|[href=\"\\#signup-form\"]|a56f3de8-e6c4-4588-b15c-421a96063d16|CEC+%7C+Action+%7C+Get+my+Agent+button|Click+Event|CEC+%7C+Action+%7C+Get+my+Agent+button|CEC+%7C+Action+%7C+Get+my+Agent+button|[gelement=\"my+agent\"]|7457aa9f-749b-45e5-b50c-f438f02d6652|BuyersGuide-HeaderCTA|Click+Event|.goldberg-button.btn-primary|4e991c37-48f5-438b-94b6-251fef1b38d2|A+%7C+PA+%7C+Solutions+%7C+Get+Started|Click+Event|A+%7C+PA+%7C+Solutions+%7C+Get+Started|A+%7C+PA+%7C+Solutions+%7C+Get+Started|[href=\"\\#goldberg-5dc1ca0f7e03d\"]+.btn|a03cb4de-0e1b-4599-9de7-9cec9fa0a29b|BuilderTools-HomeFeed-LearnMore|Click+Event|[data-ga-action=\"New+Home+Feed+CTA\"]+.btn|933c9c9d-c640-4301-8a8a-4073aeac9a24|VE+Action+%7C+Advertising+%7C+Selected++\"I+am\"|Click+Event|VE+Action+%7C+Advertising+%7C+Selected++\"I+am\"|#pro-type-select|AllPages|86885a89-2a43-4afd-b0f1-d71347f90150|VE+Action+%7C+Recommendations+%7C+Clicked+on+Review+Change+CTA|Click+Event|VE+Action+%7C+Recommendations+%7C+Clicked+on+Review+Change+CTA|.pa-button.pa-actionButton.btnExLrg.analyticsCTA|https://premieragent.zillow.com/recommendations/|5e4cb3a1-e1ea-444f-87c8-d559733b1fb6|A+%7C+PA+%7C+Advertising+Page+%7C+Hero+-+Get+started+CTA+Click|Click+Event|A+%7C+PA+%7C+Advertising+Page+%7C+Hero+-+Get+started+CTA+Click|A+%7C+PA+%7C+Advertising+Page+%7C+Hero+-+Get+started+CTA+Click|.mx-2+.btn|97699dba-4997-480f-976d-601778d0a725|TenantScreeningIconClick|Click+Event|[data-gtm-event=\"TenantSreening\"]+.goldberg-display_mobile__none+[width]|67d05217-db66-4d94-8646-23c6079945df|A+%7C+PA+Advertising+%7C+Get+Started+Modal+%7C+Clicks+Phone+Number|Click+Event|A+%7C+PA+Advertising+%7C+Get+Started+Modal+%7C+Clicks+Phone+Number|A+%7C+PA+Advertising+%7C+Get+Started+Modal+%7C+Clicks+Phone+Number|.paxl-widget-multistep__call+.phonelink|Contains|bd59a477-729f-435e-bf52-c672af8d0798|CEC+%7C+Action+%7C+Interact+with+Global+Nav|Click+Event|CEC+%7C+Action+%7C+Interact+with+Global+Nav|CEC+%7C+Action+%7C+Interact+with+Global+Nav|.oocssDocNav.listInline.navItems|a763ce55-a585-403e-80f7-10d58ab92998|CEC+%7C+Action+%7C+Engaged+with+Top+Downloads|Click+Event|CEC+%7C+Action+%7C+Engaged+with+Top+Downloads|CEC+%7C+Action+%7C+Engaged+with+Top+Downloads|#home-page-categories+.category-grid-item:nth-of-type(1)|ab5534e0-caf8-4ef8-a472-c84f769d99b6|FormSubmit-BuyerDiscovery-Top|Form3|[data-widget-ga-action=\"Top+Form\"]+[type=submit]|[data-widget-ga-action=\"Top+Form\"]|[data-widget-ga-action=\"Top+Form\"]|[data-widget-ga-action=\"Top+Form\"]|[name=\"firstName\"].new-construction-field-error|[name=\"lastName\"].new-construction-field-error|[type=\"tel\"].new-construction-field-error|[type=\"email\"].new-construction-field-error|[name=\"company\"].new-construction-field-error|[name=\"designation\"].new-construction-field-error|[data-widget-ga-action=\"Top+Form\"]+[type=submit]|[data-widget-ga-action=\"Top+Form\"]+[type=submit]|[data-widget-ga-action=\"Top+Form\"]|[data-widget-ga-action=\"Top+Form\"]|[data-widget-ga-action=\"Top+Form\"]+[type=submit]|762f33b8-bae1-41f0-a97f-9d2611ddc36a|SubmitForm-NewConProducts|[method=\"post\"]+[type=submit]|[method=\"post\"]|https://www.zillow.com/marketing/new-construction-advertising/products/|[method]+.form-group:nth-of-type(1)+.new-construction-error-text|[method]+.form-group:nth-of-type(2)+.new-construction-error-text|[method]+.form-group:nth-of-type(3)+.new-construction-error-text|[method]+.form-group:nth-of-type(4)+.new-construction-error-text|[method]+.form-group:nth-of-type(5)+.new-construction-error-text|NewConProducs-Submit|[method=\"post\"]+[type=submit]|[method=\"post\"]+[type=submit]|[method=\"post\"]+[type=submit]|f52ebf13-1804-4b2f-851a-3a7b57095f17|More+to+love+-+Rentals|Click+Event|More+to+love+-+Rentals+CTA|More+to+love+-+Rentals+CTA|[data-ga-category=\"call_to_action\\%7Cimage\"][data-ga-label=\"start_searching\\%7Chomes_rent\"]+.goldberg-display_mobile__none+[width]|[data-ga-category=\"call_to_action\\%7Ctext\"][data-ga-label=\"start_searching\\%7Chomes_rent\"]+b|898248c3-53ff-4ece-a48a-87abe1631fe7|BuyerDiscovery-LotAvailability-LearnMore|Click+Event|[data-ga-action=\"Lot+Availability+CTA\"]+.btn|a3d3fb06-a9f2-4e9b-a555-7e7248c11752|B2B+MF+Rentals+%7C+Form+Interaction+Ad+Page|Click+Event|B2B+MF+Rentals+%7C+Form+Interaction+Ad+Page|B2B+MF+Rentals+%7C+Form+Interaction+Ad+Page|[data-widget-ga-action=\"Top+form\"]+.form-control,[data-widget-ga-action=\"Top+form\"]+.form-group:nth-of-type(2)+.ctHidden|https://www.zillow.com/marketing/rental-property-advertising/|e246e94f-3aa4-4f92-905d-46913867e490|CEC+%7C+Action+%7C+Click+on+Get+the+App|Click+Event|CEC+%7C+Action+%7C+Click+on+Get+the+App|CEC+%7C+Action+%7C+Click+on+Get+the+App|[gelement=\"pa+app\"]|d07845fa-9d8b-4ae7-8ed0-989122a11db2|VE+Action+%7C+Agent+account+%7C+Clicked+on+Claim+your+listings|Click+Event|dynamicEventName|parts|TextValue|VE+Action+%7C+Agent+account+%7C+Clicked+on|TriggeredElementValue|a[href%5E=\"https://www.zillow.com/profile/Test+Account+Clicktale/For-Sale-Listings/?my=y\"]|agent-account/|05d6098b-68b5-4c7a-b551-0d29dc039bcf|B2B+LT+Rentals+%7C+Resource+Center+Menu+Sub+nav|Click+Event|B2B+LT+Rentals+%7C+Resource+Center+Click+Sub+nav|B2B+LT+Rentals+%7C+Resource+Center+Click+Sub+nav|#menu-item-4731+[href]|https://www.zillow.com/marketing/rental-manager/collect-rent-online/|3666bca7-9f8e-4308-a1ba-3df11845866a|VideoInteraction-NewConAdPage|Click+Event|#section-1-content-1|#section-2-content-6|https://www.zillow.com/marketing/new-construction-advertising/|fd0b3898-c0d2-4ab7-8487-879f3af8fde3|VE+Action+%7C+AR+Clicked+Advertising+Main+Nav|Click+Event|VE+Action+%7C+AR+Clicked+Advertising+Main+Nav|VE+Action+%7C+AR+Clicked+Advertising+Main+Nav|[data-zga-ga-label=\"advertising_main_nav\"]|bf1fb9d7-e2aa-4ffe-b956-33f288cc3997|VE+Action+%7C+Overview+%7C+Clicked+on+Create+account|Click+Event|VE+Action+%7C+Overview+%7C+Clicked+on+Create+account|#heroContentBlock+a[href%5E=\"https://www.zillow.com/agent-advertising/Register/\"]|350d4179-59c9-4495-b408-ff45eb6e7259|VE+Action+%7C+Advertising+%7C+Clicked+on+Get+started+(Top+CTA)|Click+Event|VE+Action+%7C+Advertising+%7C+Clicked+on+Get+started+(Top+CTA)|#topCTAButtonMobile|4eb78c6e-3d91-440c-bcac-c7337e62873e|BuyerDiscovery-BuilderBoost-LearnMore|Click+Event|[data-ga-action=\"Builder+Boost+CTA\"]+.btn|91c35b28-e831-4493-83eb-cc47817b09f4|FormSubmit-NewConAdPage-Top|[data-widget-ga-action=\"Sticky+Form\"]+[type=submit]|[data-widget-ga-action=\"Sticky+Form\"]|[data-widget-ga-action=\"Sticky+Form\"]|[data-widget-ga-action=\"Sticky+Form\"]|[data-widget-ga-action=\"Sticky+Form\"]+.form-group:nth-of-type(1)+.new-construction-error-text|[data-widget-ga-action=\"Sticky+Form\"]+.form-group:nth-of-type(2)+.new-construction-error-text|[data-widget-ga-action=\"Sticky+Form\"]+.form-group:nth-of-type(3)+.new-construction-error-text|[data-widget-ga-action=\"Sticky+Form\"]+.form-group:nth-of-type(4)+.new-construction-error-text|[data-widget-ga-action=\"Sticky+Form\"]+.form-group:nth-of-type(5)+.new-construction-error-text|Attribute|.new-construction-field-error|className|form-control+new-construction-field-error|NewConAdPage-Submit|[data-widget-ga-action=\"Sticky+Form\"]+[type=submit]|[data-widget-ga-action=\"Sticky+Form\"]+[type=submit]|[data-widget-ga-action=\"Sticky+Form\"]|[data-widget-ga-action=\"Sticky+Form\"]|[data-widget-ga-action=\"Sticky+Form\"]+[type=submit]|401fa869-fd34-46c5-86e4-2c9551e95f21|CEC+%7C+Action+%7C+Engaged+with+Top+Events|Click+Event|CEC+%7C+Action+%7C+Engaged+with+Top+Events|CEC+%7C+Action+%7C+Engaged+with+Top+Events|#home-page-categories+.category-grid-item:nth-of-type(3)|f72c6c2e-e693-4576-9fd6-d4c94f695493|VE+Action+%7C+Advertising+%7C+Clicked+on+Get+started+(link+in+the+page)|Click+Event|VE+Action+%7C+Clicked+on+Get+started+(link+in+the+page)|.blueStripe.pvxl.pa-blue+a|3fc817f1-c416-465c-a861-80145b856a9e|Action+%7C+Load+More|Click+Event|Action+%7C+Load+More|Action+%7C+Load+More|#pagination|zillow,com|85e411e7-1c6a-4e65-9a8e-3f6fcd8a7db0|VE+Action+%7C+Clicked+on+top+nav+(any+item)|Click+Event|VE+Action+%7C+Clicked+on+top+nav+(any+item)|.oocssDocNav+>+.nav-spacer:not(#brandLink)+>+a|419a542b-a870-4d16-94d0-f808d010f863|CEC+%7C+Action+%7C+Contact+us+Nav+Click|Click+Event|CEC+%7C+Action+%7C+Contact+us+Nav+Click|CEC+%7C+Action+%7C+Contact+us+Nav+Click|#menu-item-125667+.nav-link|1a7345d3-250d-4c21-97bb-0a45624cb7b2|A+%7C+PA+%7C+Solutions+RE+Free+Branding%7C+More|Click+Event|A+%7C+PA+%7C+Solutions+RE+Free+Branding%7C+More|A+%7C+PA+%7C+Solutions+RE+Free+Branding%7C+More|cebc8471-1aa3-4fa6-be41-b7f06b52b2f9|B2B+Leases+-+Answers+for+Renters|Click+Event|B2B+Leases+-+Answers+for+Renters|B2B+Leases+-+Answers+for+Renters|[data-ga-action=\"Inform+Renter\"]+.btn|44fb338d-7318-4658-a226-3bcb1bce363d|A+%7C+PA+%7C+Solutions+Nav+%7C+Agent+Account|Click+Event|A+%7C+PA+%7C+Solutions+Nav+%7C+Agent+Account|A+%7C+PA+%7C+Solutions+Nav+%7C+Agent+Account|#menu-item-125653+[data-zga-ga-label=\"agent_account\"]|8b98718d-b319-4abc-8749-e1c37ebc922d|Onload+%7C+Optimizely:+Desktop-Form-Lightbox|PageLoadEvent|Page+Event|Onload+%7C+Optimizely:+Desktop-Form-Lightbox|PageLoadCondition|https://premieragent.zillow.com/pa/?optimizely_x8479060261=2|8f553cc3-20ae-44c5-9d4c-35a9c6445653|Action+%7C+PARC+%7C+Contact+Sales|Click+Event|Action+%7C+PARC+%7C+Contact+Sales|Action+%7C+PARC+%7C+Contact+Sales|[data-zga-ga-label=\"Contact+sales\"]|d34e7365-fbb7-4cbe-848d-bcd482fa823a|VE+Action+%7C+Agent+account+%7C+Clicked+on+inbox|Click+Event|VE+Action+%7C+Agent+account+%7C+Clicked+on+inbox|#advertising-bullets+a[href%5E=\"https://premieragent.zillow.com/crm/\"]|cf54f5a2-1485-4b1e-be28-6651af56c62f|B2B+Nucleus+-+Post+Free+CTA+-+Body|Click+Event|B2B+Nucleus+-+Post+Free+CTA+-+Body|B2B+Nucleus+-+Post+Free+CTA+-+Body|[data-gtm-event=\"PostFreeCTA\"]+.btn|36b5a35c-27ed-4fcb-a7d8-267f97f5d7db|B2B+LT+Rentals+-+Link+ClickZRM|Click+Event|B2B+LT+Rentals+-+Link+Click_ZRM|B2B+LT+Rentals+-+Link+Click_ZRM|#section-4-content-2+a|[rel=\"noopener\"]|269fa04f-b019-407f-99dc-d08c704b5d9b|VE+Action+%7C+Overview+%7C+Clicked+on+Get+the+app|Click+Event|VE+Action+%7C+Overview+%7C+Clicked+on+Get+the+app|.pa+>+a[href%5E=\"/pa/products/app/\"]|5be6fe2d-a7dd-4ab1-b1cd-b5ba261308dd|VE+Action+%7C+Agent+account+%7C+Clicked+on|Click+Event|VE+Action+%7C+Agent+account+%7C+Clicked+on|.topCTAButtonContainer.pbl+>+a|d42b7507-f0f9-4c08-a87f-b46479f985f0|VE+Action+%7C+AR+Clicked+Contact+sales+Main+Nav|Click+Event|VE+Action+%7C+AR+Clicked+Contact+sales+Main+Nav|VE+Action+%7C+AR+Clicked+Contact+sales+Main+Nav|[data-zga-ga-label=\"contact\"]|9dfff9fb-e253-43d7-af4d-d5c6b70e786c|A+%7C+PA+%7C+Solutions+Nav+%7C+My+Agent|Click+Event|A+%7C+PA+%7C+Solutions+Nav+%7C+My+Agent|A+%7C+PA+%7C+Solutions+Nav+%7C+My+Agent|#menu-item-125653+[data-zga-ga-label=\"my_agent\"]|d984c744-26e2-45d2-ad81-366a5ed77251|VE+Action+%7C+Clicked+on+products’+sub+menu+<Item>|Click+Event|VE+Action+%7C+Clicked+on+products’+sub+menu|.dropdownList+.dropdownLink.typeReversed|01088f30-39de-4e29-883d-bce90f4b0e9b|Applications+CTA+-+FAQ|Click+Event|Applications+CTA+-+FAQ|Applications+CTA+-+FAQ|.btn|https://www.zillow.com/marketing/rental-manager/rental-applications-faq/|acda8096-cf06-4060-8d5f-95fb5b7f6eac|B2B+LT+Rentals+-+CTA+Button+Click|Click+Event|B2B+LT+Rentals+-+CTA+Button+Click|B2B+LT+Rentals+-+CTA+Button+Click|.page+[data-ga-label=\"\"]|d7e8ba99-352a-4ec8-82e2-ecda3c254c23|A+%7C+PA+%7C+Solutions+RE+Broker%7C+Get+Started|Click+Event|A+%7C+PA+%7C+Solutions+RE+Broker%7C+Get+Started|A+%7C+PA+%7C+Solutions+RE+Broker%7C+Get+Started|[data-zga-ga-label=\"broker_get_started\\%7Cmodule_1\"]+.btn|2ccc3705-adc0-46a3-ac67-58208e106ee7|VE+Action+%7C+Advertising+%7C+Clicked+on+Premier+Agent+(logo+on+Top)|Click+Event|VE+Action+%7C+Advertising+%7C+Clicked+on+Premier+Agent+(logo+on+Top)|#mainLogo+[href]|b5e54d24-b880-490f-b2a1-ab791997ecf3|CarouselInteraction-NucleusPage|Click+Event|.goldberg-slides+a|d3b3997c-fee9-4225-9a19-ee73a4e0cc99|A+%7C+PA+%7C+Solutions+%7C+Click+More|Click+Event|A+%7C+PA+%7C+Solutions+%7C+Click+More|A+%7C+PA+%7C+Solutions+%7C+Click+More|92a5ef65-04ff-4e26-bd6a-fbe7d3f8fbe1|A+%7C+PA+%7C+Solutions+Nav+%7C+Advertising|Click+Event|A+%7C+PA+%7C+Solutions+Nav+%7C+Advertising|A+%7C+PA+%7C+Solutions+Nav+%7C+Advertising|#menu-item-125653+[data-zga-ga-label=\"advertising\"]|e89db562-0460-46ee-a20c-73c91b8a3557|BuyersGuide-HeaderVideo|Click+Event|.btn-link|9650d359-541b-4f79-9b39-ab9bd4866e60|GetAnswersClick|Click+Event|[data-gtm-event=\"GetAnswers\"]+.btn|217f8696-5fd5-41da-bb55-3f573db83996|B2B+LT+Rentals+%7C+FAQ+Click|Click+Event|B2B+LT+Rentals+%7C+FAQ+Click|B2B+LT+Rentals+%7C+FAQ+Click|.section-text-buttons+.button-wide|e06320cd-4d78-4390-8807-254758cf9901|BuyersGuide-Menu|Click+Event|BuyersGuide-Menu-GetStarted|#menu-item-13+a|#menu-item-15+a|#menu-item-12+a|#menu-item-14+a|#menu-item-16+a|#menu-item-1582+[href]|#subnav_blogname|#prexit_subnav_search_button|c4df00fa-99fe-44d4-a7b0-ada9a0fa49ba|BuilderTools-LoginClicks|Click+Event|[data-ga-action=\"Builder+Dashboard+Login\"]+b|[data-ga-action=\"Builder+Inform+Login\"]+b|[data-ga-action=\"New+Home+Feed+Login\"]+b|b564bd2a-a947-4b86-8aa0-6606db84f702|VE+Action+%7C+Advertising+%7C+Clicked+on+Get+started+(Become+a+PA+Today)|Click+Event|VE+Action+%7C+Advertising+%7C+Clicked+on+Get+started+(Become+a+PA+Today)|[gelement=\"set+up+profile\"]|d798dc88-bd26-4a74-9cda-cf12865665fb|VE+Action+%7C+PA+AD+Clicked+Join|Click+Event|VE+Action+%7C+PA+AD+Clicked+Join|VE+Action+%7C+PA+AD+Clicked+Join|#header-user+.nav-item:nth-of-type(2)+.nav-link|https://premieragent.zillow.com/products/advertising2/|19dd25e6-6c2c-4d30-8b34-79985c5098d4|VE+Action+%7C+Overview+%7C+Clicked+on+connect+with+clients|Click+Event|VE+Action+%7C+Overview+%7C+Clicked+on+connect+with+clients|.pa+>+a[href%5E=\"https://premieragent.zillow.com/pa/\"]|cfca4561-f288-4b52-979a-190af49e91e2|VE+Action+%7C+Products+%7C+Text+me+the+free+app|Click+Event|VE+Action+%7C+Products+%7C+Text+me+the+free+app|#getAppTop|products/app/|983b70e7-a568-4abc-9bac-fa57a354881e|VE+Action+%7C+Advertising+%7C+Clicked+on+Get+the+app|Click+Event|VE+Action+%7C+Clicked+on+Get+the+app|.androidIosText+a[href%5E=\"https://premieragent.zillow.com/crm/download/ucaugh/u6p5k5\"]|cb9e8faf-c818-449f-8dda-042a70b66b4b|SetupApplicationsClick|Click+Event|.page+[href=\"https://www.Zillow.com/rental-manager/properties/?mktPath=applications&itc=top_button_setup_screening\"]|e3063ef3-8a40-439c-a239-ecccfe2928b1|BuyerDiscovery-LearnMoreCTA|Click+Event|[data-ga-action=\"Buyer+Discovery+Button\"]+.btn|e7d8b4c1-f939-4408-b843-538ab7a65977|VE+Action+%7C+Recommendations+%7C+Clicked+on+FAQ|Click+Event|VE+Action+%7C+Recommendations+%7C+Clicked+on+FAQ|black+analyticsCTA|13fe0f8c-c8b9-4ed5-97c9-ffa88e50ab19|VE+Action+%7C+PA+AD+Clicked+Get+Started|Click+Event|VE+Action+%7C+PA+AD+Clicked+Get+Started|VE+Action+%7C+PA+AD+Clicked+Get+Started|[gelement=\"get+started+hero\"]|66fba2ec-fa54-4f31-a6df-8d82ce88664f|CEC+%7C+Click+on+Become+a+Premier+Agent|Click+Event|CEC+%7C+Click+on+Become+a+Premier+Agent|CEC+%7C+Click+on+Become+a+Premier+Agent|#sticky-cta|ef846a89-53dd-4d04-8cd2-178c89bab2ea|SuccessfulFormSubmit|Page+Event+By+Component|.goldberg-column_4+[data-step=\"3\"]+p|In+the+meantime,+check+out+the+latest+news,+data+and+marketing+tips+in+the+Multifamily+Knowledge+Center.|7384faea-d2f6-45f4-8762-76cad8b0b002|VE+Action+%7C+Clicked+on+social+media+options|Click+Event|VE+Action+%7C+Clicked+on+social+media+options|.listInline.noWrap+a|52de508a-b5cf-4187-85e4-a8d6a530e4bf|VE+Action+%7C+Agent+Resource+Center+%7C+Clicked+on+Menu+-+Advertising|Click+Event|VE+Action+%7C+Agent+Resource+Center+%7C+Clicked+on+Menu+-+Advertising|[title=\"Advertising\"]|33365c44-7311-40be-b3d8-9e99b811dc81|FormSubmit-NewConAdPage-Bottom|[data-widget-ga-action=\"Bottom+Form\"]+[type=submit]|[data-widget-ga-action=\"Bottom+Form\"]|[data-widget-ga-action=\"Bottom+Form\"]|[data-widget-ga-action=\"Bottom+Form\"]|FormSubmit-NewConCTA-Bottom|[data-widget-ga-action=\"Bottom+Form\"]+[type=submit]|[data-widget-ga-action=\"Bottom+Form\"]+[type=submit]|[data-widget-ga-action=\"Bottom+Form\"]|[data-widget-ga-action=\"Bottom+Form\"]|[data-widget-ga-action=\"Bottom+Form\"]+[type=submit]|88e5f4ad-1472-4e04-85f8-395f024edb3a|LT+Rentals+-+Listing+Feeds+Hero+CTA|Click+Event|LT+Rentals+-+Listing+Feeds+Hero+CTA|LT+Rentals+-+Listing+Feeds+Hero+CTA|[data-zga-ga-label]+.btn|https://www.zillow.com/marketing/rental-manager/listing-feeds/|d64bd66a-d46b-4ce1-ad8b-ac73b79a5652|A+%7C+PA+%7C+Solutions+RE+Team%7C+Get+Started|Click+Event|A+%7C+PA+%7C+Solutions+RE+Team%7C+Get+Started|A+%7C+PA+%7C+Solutions+RE+Team%7C+Get+Started|[data-zga-ga-label=\"team_get_started\\%7Cmodule_1\"]+.btn|bef339dd-d4d6-41ab-9ae3-c09efc3f032e|FormSubmit-BuilderTools-Top|[data-widget-ga-action=\"Top+form\"]+[type=submit]|[data-widget-ga-action=\"Top+form\"]|[data-widget-ga-action=\"Top+form\"]|[data-widget-ga-action=\"Top+form\"]|[data-widget-ga-action=\"Top+form\"]+[type=submit]|[data-widget-ga-action=\"Top+form\"]+[type=submit]|[data-widget-ga-action=\"Top+form\"]|[data-widget-ga-action=\"Top+form\"]|[data-widget-ga-action=\"Top+form\"]+[type=submit]|aa362889-bf55-4aab-9fed-e0eb13dbc407|B2B+MF+Rentals+%7CForm+Interaction+-+Lease+Connect|Click+Event|FormInteraction|.goldberg-column_4+.form-control,.goldberg-column_4+.form-group:nth-of-type(2)+.ctHidden|af57edfe-369b-4cac-985a-78a7e70a8693|VideoInteraction|Click+Event|VideoInteraction-MFAdvertising|#section-4-content-1|89c56092-34f1-425a-8edc-07fcae0f9cc5|VE+Action+%7C+Overview+%7C+Clicked+on+Create+your+profile|Click+Event|VE+Action+%7C+Overview+%7C+Clicked+on+Create+your+profile|.pa+>+a[href%5E=\"https://www.zillow.com/agent-advertising/Register/\"]|cd8d1423-df45-4118-8e1c-f1df30ef27ac|A+%7C+PA+%7C+Solutions+RE+Team%7C+Bottom+Get+Started|Click+Event|A+%7C+PA+%7C+Solutions+RE+Team%7C+Bottom+Get+Started|A+%7C+PA+%7C+Solutions+RE+Team%7C+Bottom+Get+Started|[data-zga-ga-label=\"team_get_started\\%7Cmodule_9\"]+.btn|0118aa19-d2ea-4913-9384-81c99e1c5dc5|B2B+Nucleus+-+Payments+Button|Click+Event|B2B+Nucleus+-+Payments+Button|B2B+Nucleus+-+Payments+Button|[data-gtm-event=\"Payments\"]+.goldberg-display_mobile__none+[width]|0b50d17e-ba61-4c33-bcb4-be8a4f342f86|MFSuccessfulFormSubmit|Page+Event+By+Component|#z-header-text+[data-step=\"3\"]+p|In+the+meantime,+check+out+the+latest+news,+data+and+marketing+tips+in+the|d3de1a25-3c0f-44a4-b59e-a1a7ec560c76|VE+Action+%7C+Advertising+%7C+Text+me+the+free+app+(bottom)|Click+Event|VE+Action+%7C+Advertising+%7C+Text+me+the+free+app+(bottom)|#getAppBottom|add3b93a-a4be-4f7e-b4e2-d8540a1be6c6|VideoInteraction-MFProducts|Click+Event|#section-5-content-2|381743d6-b791-4bd9-9758-dcbcfcc6e759|BuyersGuide-GettingStartedClick|Click+Event|#goldberg-5df7b1a11b263+.container:nth-of-type(1)+.col-12:nth-of-type(1)+.post-card__image,#goldberg-5df7b1a11b263+.container:nth-of-type(1)+.col-12:nth-of-type(1)+.post-card__title+a,#goldberg-5df7b1a11b263+.container:nth-of-type(1)+.col-12:nth-of-type(2)+.post-card__title+a,#goldberg-5df7b1a11b263+.container:nth-of-type(1)+.col-12:nth-of-type(2)+.post-card__image,#goldberg-5df7b1a11b263+.container:nth-of-type(1)+.col-12:nth-of-type(3)+.post-card__image,#goldberg-5df7b1a11b263+.container:nth-of-type(1)+.col-12:nth-of-type(3)+.post-card__title+a,#goldberg-5df7b1a11b263+.container:nth-of-type(1)+.d-none|57eaa72b-ea2d-4964-95a7-3cd2fdeb5002|Parking+-+Rentals|Click+Event|Parking+-+Rentals+CTA|Parking+-+Rentals+CTA|[data-ga-category=\"call_to_action\\%7Cimage\"][data-ga-label=\"search_now\\%7Cwith_parking\"]+.goldberg-display_mobile__none+[width]|[data-ga-category=\"call_to_action\\%7Ctext\"][data-ga-label=\"search_now\\%7Cwith_parking\"]+b|eb013324-025a-455c-af09-d4dec92aea8a|Tips+and+tricks+-+Rentals|Click+Event|Tips+and+Tricks+-+Rentals+CTA|Tips+and+Tricks+-+Rentals+CTA|[data-ga-category=\"call_to_action\\%7Cimage\"][data-ga-label=\"see_our_guide\\%7Ctips_tricks\"]+.goldberg-display_mobile__none+[width]|[data-ga-category=\"call_to_action\\%7Ctext\"][data-ga-label=\"see_our_guide\\%7Ctips_tricks\"]+b|9bbe257a-fcdb-422e-a739-a5925cac11da|A+%7C+PA+%7C+Solutions+Nav+%7C+Direct|Click+Event|A+%7C+PA+%7C+Solutions+Nav+%7C+Direct|A+%7C+PA+%7C+Solutions+Nav+%7C+Direct|#menu-item-125653+[data-zga-ga-label=\"pa_direct\"]|94687451-b7c2-4ee6-b2cf-562b421bc244|Onload+%7C+Optimizely:+Original-Desktop|Page+Event|Onload+%7C+Optimizely:+Original-Desktop|https://premieragent.zillow.com/pa/?optimizely_x8479060261=0|EndsWith|d2d92da4-65ee-4082-bb0d-5ed0f3681c56|VE+Action+%7C+Recommendations+%7C+Clicked+on+Or+Explore+More+CTA|Click+Event|VE+Action+%7C+Recommendations+%7C+Clicked+on+Or+Explore+More+CTA|.other-link.analyticsCTA|dca23e72-549a-4719-ad7f-977cbce999ce|Action+%7C+Prem+Agent+%7C+Top+Nav+%7C+Clicks+Any|Click+Event|Action+%7C+Prem+Agent+%7C+Top+Nav+%7C+Clicks+Any|Action+%7C+Prem+Agent+%7C+Top+Nav+%7C+Clicks+Any|[data-zga-ga-label=\"Advertising\"],#menu-item-125661,#menu-item-125664,#menu-item-125653|5cb6669b-1e6d-4117-a72e-dbc7f3d9960a|A+%7C+PA+%7C+Solutions+RE+Team%7C+Middle+Get+Started|Click+Event|A+%7C+PA+%7C+Solutions+RE+Team%7C+Middle+Get+Started|A+%7C+PA+%7C+Solutions+RE+Team%7C+Middle+Get+Started|[data-zga-ga-label=\"team_get_started\\%7Cmodule_4\"]+.btn|4ac37b9e-211a-42e9-9fbb-df68e7639f69|A+%7C+PA+%7C+Solutions+-+Agent+%7C+Any+Section+CTA+Click|Click+Event|A+%7C+PA+%7C+Solutions+-+Agent+%7C+Any+Section+CTA+Click|A+%7C+PA+%7C+Solutions+-+Agent+%7C+Any+Section+CTA+Click|[data-zga-ga-label=\"agent_get_started\\%7Cmodule_2\"]+p|[data-zga-ga-label=\"agent_get_started\\%7Cmodule_4\"]+p|[data-zga-ga-label=\"agent_get_started\\%7Cmodule_5\"]+p|[data-zga-ga-label=\"agent_get_started\\%7Cmodule_6\"]+p|[data-zga-ga-label=\"agent_get_started\\%7Cmodule_7\"]+p|032aac0e-25a8-4195-8480-5ff4de50d3a8|A+%7C+PA+%7C+Solutions+RE+Free+Branding%7C+Bottom+Learn+More|Click+Event|A+%7C+PA+%7C+Solutions+RE+Free+Branding%7C+Bottom+Learn+More|A+%7C+PA+%7C+Solutions+RE+Free+Branding%7C+Bottom+Learn+More|.goldberg-cards+.goldberg-row+.btn|4d8b9e84-9d3e-46e2-8dba-38e82a7412d9|VisitHelpCenter|Click+Event|[data-ga-action=\"Inform+LL\"]+.btn|1ee6aa56-5739-4901-9857-9861d307d8d3|BuilderTools-LearnMoreCTA|Click+Event|[data-ga-action=\"Builder+Tools+Button\"]+.btn|cd0504ca-3d07-4742-a7b4-3dc69d5544b5|BuyersGuide-MoneyMattersClick|Click+Event|#goldberg-5df7b1a11b263+.container:nth-of-type(2)+.col-12:nth-of-type(1)+.post-card__image,#goldberg-5df7b1a11b263+.container:nth-of-type(2)+.col-12:nth-of-type(1)+.post-card__title+a,#goldberg-5df7b1a11b263+.container:nth-of-type(2)+.col-12:nth-of-type(2)+.post-card__image,#goldberg-5df7b1a11b263+.container:nth-of-type(2)+.col-12:nth-of-type(2)+.post-card__title+a,#goldberg-5df7b1a11b263+.container:nth-of-type(2)+.col-12:nth-of-type(3)+.post-card__title+a,#goldberg-5df7b1a11b263+.container:nth-of-type(2)+.col-12:nth-of-type(3)+.post-card__image,#goldberg-5df7b1a11b263+.container:nth-of-type(2)+.d-none|0703f96b-c07d-4691-915e-cfecfab95937|B2B+Leases+-+Help+Center|Click+Event|B2B+Leases+-+Help+Center|B2B+Leases+-+Help+Center|[data-ga-action=\"Inform+LL\"]+.btn|95ee8755-2077-4ec1-9a95-8a627712daed|FormSubmit-BuyerDiscovery-Bottom|[data-widget-ga-action=\"Bottom+Form\"]+[type=submit]|[data-widget-ga-action=\"Bottom+Form\"]|[data-widget-ga-action=\"Bottom+Form\"]|[data-widget-ga-action=\"Bottom+Form\"]|[data-widget-ga-action=\"Bottom+Form\"]+[type=submit]|[data-widget-ga-action=\"Bottom+Form\"]+[type=submit]|[data-widget-ga-action=\"Bottom+Form\"]|[data-widget-ga-action=\"Bottom+Form\"]|[data-widget-ga-action=\"Bottom+Form\"]+[type=submit]|15c38665-27d8-4f42-8efb-2df90c618f34|VideoInteraction-NewConProducPage|Click+Event|.goldberg-column_center.goldberg-column_8|f954cec5-964e-4880-b050-d66e0273499b|BuilderTools-BuilderInform-LearnMore|Click+Event|[data-ga-action=\"Builder+Inform+CTA\"]+.btn|85d5d866-8b2b-4d93-ba3e-0f52e6cd5934|CEC+%7C+Action+%7C+Engaged+with+Top+Courses|Click+Event|CEC+%7C+Action+%7C+Engaged+with+Top+Courses|CEC+%7C+Action+%7C+Engaged+with+Top+Courses|#home-page-categories+.category-grid-item:nth-of-type(2)|e560922d-ece4-4847-a04c-bfa48121bb04|VE+Action+%7C+Clicked+on+Zillow’s+logo|Click+Event|VE+Action+%7C+Clicked+on+Zillow’s+logo|.oocssDocNav.listInline.navItems+a[href%5E=\"http://www.zillow.com/\"]|22581da7-80b4-4b09-96a1-7dd120a9d8f6|B2B+-+MFRentalsAdPage+-+Form+Interaction|Click+Event|B2B+-+MFRentalsAdPage+-+Form+Interaction|B2B+-+MFRentalsAdPage+-+Form+Interaction|[data-widget-ga-action=\"Top+form\"]+.btn,[data-widget-ga-action=\"Top+form\"]+.form-control|[data-widget-ga-action=\"Bottom+form\"]+.form-control,[data-widget-ga-action=\"Bottom+form\"]+.btn|a6c027c8-f2a4-454a-8864-acc907b48920|PaymentsIconClick|Click+Event|[data-gtm-event=\"Payments\"]+.goldberg-display_mobile__none+[width]|25bcb1e6-cf4c-4ad9-aa9f-2bc154282c6c|CreateLease-CTA|Click+Event|[data-zga-ga-label]+.btn|[data-ga-label=\"Create+a+lease\"]+.btn|380a0f76-e404-4a90-bdc2-7bc141267f39|VE+Action+%7C+Agent+account+%7C+Clicked+to|Click+Event|VE+Action+%7C+Agent+account+%7C+Clicked+to|#advertising-bullets+a[href%5E=\"https://www.zillow.com/myzillow/Profile.htm\"]|#signup+a[href%5E=\"https://www.zillow.com/myzillow/Profile.htm\"]|255b2560-b829-42f2-85e5-7fef841d69d3|Calculate+Rent+-+Rental|Click+Event|Calculate+Rent+-+Rental+CTA|Calculate+Rent+-+Rental+CTA|[data-ga-category]+.goldberg-display_mobile__none+[width=\"1400\"]|[data-ga-category=\"call_to_action\\%7Ctext\"][data-ga-label=\"affordability\\%7Crent_calc\"]+b|85146f41-0147-4518-a82f-714bf241edd9|Collect+Rent+Online+CTA+-+FAQ|Click+Event|Collect+Rent+Online+CTA+-+FAQ|Collect+Rent+Online+CTA+-+FAQ|https://www.zillow.com/marketing/rental-manager/online-payments-faq/|6273ad45-4657-4236-b597-b0fc03335f52|PropertySearchSubmit|[data-widget-ga-label=\"property_search\\%7Chero\"]+.btn|[data-widget-ga-label=\"property_search\\%7Chero\"]+.btn|[data-widget-ga-label=\"property_search\\%7Chero\"]+.btn|[data-widget-ga-label=\"property_search\\%7Chero\"]+.btn|fc50b3ee-5cec-49df-8df7-65ac55b89145|B2B+Nucleus+-+Post+Free+CTA+-+Header|Click+Event|B2B+Nucleus+-+Post+Free+CTA+-+Header|B2B+Nucleus+-+Post+Free+CTA+-+Header|[data-zga-gtm-event]+.btn|06ae8480-dddf-440c-acb6-e7f29c1d74ba|LT+Rentals+-+Listing+Feeds+Bottom+CTA|Click+Event|LT+Rentals+-+Listing+Feeds+Bottom+CTA|LT+Rentals+-+Listing+Feeds+Bottom+CTA|[data-ga-label]+.btn|6e75701d-6d0f-4b45-a615-32a62393299c|A+%7C+PA+%7C+Solutions+RE+Team%7C+Bottom+Learn+More|Click+Event|A+%7C+PA+%7C+Solutions+RE+Team%7C+Bottom+Learn+More|A+%7C+PA+%7C+Solutions+RE+Team%7C+Bottom+Learn+More|.goldberg-cards+.goldberg-row+.btn|94a639e7-0648-44e3-9c2a-dba539731be1|B2B+Nucleus+-+Tenant+Screening+Button|Click+Event|B2B+Nucleus+-+Tenant+Screening+Button|B2B+Nucleus+-+Tenant+Screening+Button|[data-ga-action=\"ButtonClick\"]+.goldberg-display_mobile__none+[width]|215d4f79-ce94-4f61-aeab-dee193811db3|VE+Action+%7C+PA+AD+Clicked+Contact+Sales|Click+Event|VE+Action+%7C+PA+AD+Clicked+Contact+Sales|VE+Action+%7C+PA+AD+Clicked+Contact+Sales|27b39e4b-cada-457e-8ed7-3ac536d324a5|VE+Action+%7C+Advertising+%7C+Clicked+on+Hamburger+Menu|Click+Event|VE+Action+%7C+Advertising+%7C+Clicked+on+Hamburger+Menu|#bars|751e0a47-b773-40cd-8e16-1705b813ad22|A+%7C+PA+%7C+Solutions+RE+Broker%7C+Bottom+Get+Started|Click+Event|A+%7C+PA+%7C+Solutions+RE+Broker%7C+Bottom+Get+Started|A+%7C+PA+%7C+Solutions+RE+Broker%7C+Bottom+Get+Started|[data-zga-ga-label=\"broker_get_started\\%7Cmodule_8\"]+.btn|234fd97a-a0a0-4db8-9e16-984bb1948a5f|B2B+MF+Rentals+%7C+Successful+Form+Submit|#z-header-text+[data-step=\"3\"]+p|#z-header-text+.container+.widget+[data-step=\"1\"]+form|B2B+MF+Rentals+%7C+Successful+Form+Submit|#z-header-text+.container+.widget+[data-step=\"1\"]+form|B2B+MF+Rentals+%7C+Successful+Form+Submit|#z-header-text+.container+.widget+[data-step=\"1\"]+form|[data-widget-ga-action=\"Top+form\"]+.alert|Form+Submitted|Form+Submitted|#z-header-text+[data-step=\"3\"]+p|#z-header-text+[data-step=\"3\"]+p|#z-header-text+.container+.widget+[data-step=\"1\"]+form|#z-header-text+.container+.widget+[data-step=\"1\"]+form|#z-header-text+[data-step=\"3\"]+p|4ccbf29b-f705-460d-86af-2a7f21489b9d|FormSubmit-BuilderTools-Bottom|[data-widget-ga-action=\"Bottom+Form\"]+[type=submit]|[data-widget-ga-action=\"Bottom+Form\"]|[data-widget-ga-action=\"Bottom+Form\"]|[data-widget-ga-action=\"Bottom+Form\"]|[data-widget-ga-action=\"Bottom+Form\"]+[type=submit]|[data-widget-ga-action=\"Bottom+Form\"]+[type=submit]|[data-widget-ga-action=\"Bottom+Form\"]|[data-widget-ga-action=\"Bottom+Form\"]|[data-widget-ga-action=\"Bottom+Form\"]+[type=submit]|97ae1523-cdff-4b33-a955-3eed505caedc|VE+Action+%7C+PA+AD+Clicked+Get+Started+Below+Fold|Click+Event|VE+Action+%7C+PA+AD+Clicked+Get+Started+Below+Fold|VE+Action+%7C+PA+AD+Clicked+Get+Started+Below+Fold|[gelement=\"set+up+profile\"]|b83b9cf3-e010-4d38-b582-9fa27d9ec60c|BuilderTools-BuilderDash-LearnMore|Click+Event|[data-ga-action=\"Builder+Dashboard+CTA\"]+.btn|e3bd986d-9652-4b8b-b8af-650706c0aa53|A+%7C+PA+%7C+Solutions+RE+Broker%7C+Bottom+Learn+More|Click+Event|A+%7C+PA+%7C+Solutions+RE+Broker%7C+Bottom+Learn+More|A+%7C+PA+%7C+Solutions+RE+Broker%7C+Bottom+Learn+More|.goldberg-cards+.goldberg-row+.btn|af2fa2fc-ef36-42fa-aa06-d15db87d7cec|Onload+%7C+Optimizely:+Desktop-Form-Jumpdown|Page+Event|Onload+%7C+Optimizely:+Desktop-Form-Jumpdown|https://premieragent.zillow.com/pa/?optimizely_x8479060261=1|ee940f2a-ac91-4e06-82d4-10f77745c337|BuyerDiscovery-InlineCommunitys-LearnMore|Click+Event|[data-ga-action=\"Inline+Community+CTA\"]+.btn|3c3f89fe-148d-4e35-9b1f-db26db9c2a71|VE+Action+%7C+Get+More+Leads+%7C+Clicked+on+Get+started+(on+Top)|Click+Event|VE+Action+%7C+Get+More+Leads+%7C+Clicked+on+Get+started+(on+Top)|#get-started-header-button|1c68d9aa-328d-4bc8-aaf5-ae5f53fefa75|B2B+MF+Rentals+%7C+Button+Interaction|Click+Event|ButtonClick|.goldberg-button|3b712fad-2d06-47b4-ac1b-3abc6af4ffe5|VE+Action+%7C+Clicked+on+top+nav|Click+Event|VE+Action+%7C+Clicked+on+top+nav|.oocssDocNav++>+.nav-spacer:not(#brandLink)+>+a|11891043-e7e2-42b8-aba1-055e1f8da00a|A+%7C+PA+%7C+Solutions+%7C+Bottom+Learn+More|Click+Event|A+%7C+PA+%7C+Solutions+%7C+Bottom+Learn+More|A+%7C+PA+%7C+Solutions+%7C+Bottom+Learn+More|.goldberg-cards+.goldberg-row+.btn|08714e69-6159-4279-a913-87accb1e1b8f|VE+Action+%7C+AR+Clicked+Sign+In+Main+Nav|Click+Event|VE+Action+%7C+AR+Clicked+Sign+In+Main+Nav|VE+Action+%7C+AR+Clicked+Sign+In+Main+Nav|#header-user+.nav-item:nth-of-type(1)+.nav-link^MR9|15TH|106L|15TC|104F|0|DW|BKO|106C|RS|CUYO|15Y1|15T5|BQE|MRI|107I|DW|BKO|RS|CUYO|15T3|Z47|106N|Z4J|15T1|15T7|15Y0|Z43|15YB|16DI|10G4|D84|15TF|15TJ|15T4|Z48|106O|DW|BKO|106I|RS|CUYO|1076|16DJ|0|FPN|BQ8|15Y7|15SU|107H|16DH|Z41|XRY|BQA|BQJ|DW|BKO|1074|RS|CUYO|DW|BKO|106Y|RS|CUYO|15Y3|1078|YTZ|BQB|YU4|106V|MR6|107A|DW|BKO|106R|RS|CUYO|BQL|D85|16DG|15TG|10GA|15T0|DVZ|10G2|YU2|MR7|15SZ|106Q|YU1|15TB|Z4F|15SV|15SY|15Y8|Z4E|YU3|15Y6|107E|MRD|106K|1071|MRB|BQF|104D|0|DW|BKO|106T|RS|CUYO|11FR|15T6|DW|BKO|107C|RS|CUYO|YTX|1068|15T9|10G5|104E|0|1069|15Y9|15Y2|15Y4|15T2|FPO|15T8|16DK|15TI|Z4C|1072|15YA|10G9|DW|BKO|1075|RS|CUYO|106Z|107G|BQK|ZHV|Z44|106M|15Y5|106P|RS|CUYO|10G1|11FS|15TA|10G3|MRC|15TD|6Y|1XG|YU0|RS|CUYO|DW|BKO|107D|RS|CUYO|MRF|107F|15TE|1077|YTY|15SW|MR8^^@$0|1|2|3|4|5|6|7|8|-1|9|$4|A|B|@$4|C|D|E|F|-2|G|-2]|$4|H|D|I|F|-2|G|-2|J|UP]]]|K|$4|L|M|@$4|N|O|$P|Q]|R|S|T|@]]]]|U|$4|L|M|@$4|V|W|X|Y|Z|10|-1]]]|11|-5]|$0|12|2|13|4|5|6|14|8|-1|9|$4|A|B|@$4|C|D|15|F|-2|G|-2]|$4|H|D|16|F|-2|G|-2|J|UQ]]]|K|$4|L|M|@$4|N|O|$P|17]|R|S|T|@]]]]|U|$4|L|M|@$4|V|W|18|Y|19|10|-1]]]|11|-5]|$0|1A|2|1B|4|5|6|1C|8|-1|9|$4|A|B|@$4|C|D|1B|F|-2|G|-2]|$4|H|D|1B|F|-2|G|-2|J|UR]]]|K|$4|L|M|@$1D|19|O|$P|1E]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|1G|Y|19|10|-1]]]|11|-5]|$0|1H|2|1I|4|5|6|1J|8|-1|9|$4|A|B|@$4|C|D|1K|F|-2|G|-2]|$4|H|D|1L|F|-2|G|-2|J|US]]]|K|$4|L|M|@$4|N|O|$P|1M]|R|S|T|@]]]]|U|$4|L|M|@$4|V|W|1N|Y|19|10|-1]]]|11|-5]|$0|1O|2|1P|4|1Q|6|1R|8|-1|9|$4|A|B|@$4|C|D|1P|F|-2|G|-2]|$4|H|D|1P|F|-2|G|-2|J|UT]]]|K|$4|1S|1T|UU]|U|$4|1U|M|@$4|L|M|@$4|V|W|1V|Y|19|10|-1]]]|$4|1U|M|@$1D|19|4|1W|R|S|1F|1X|O|$P|1Y]|2|-4|1Z|20]]]]]|11|-5]|$0|21|2|22|4|23|6|24|8|-1|9|$4|25|26|$2|27|28|@]|29|$P|2A]|P|2B]|2C|@]|2D|$0|21|2|22|4|23|6|24|8|-1|9|$4|A|B|@$4|2E|26|$2|27|P|2F]|2D|$0|21|2|22|4|23|6|24|8|-1|9|$4|2G|26|$2|27|P|2H]|2I|-2]|K|$4|2J|2K|UV|2L|UW|2M|-1]|U|$4|1U|M|@$4|L|M|@$4|V|W|1V|Y|19|10|-1]]]|$4|L|M|@$1D|19|4|1W|R|S|1F|-4|O|$P|2N|2O|2P]]]]]]|11|2Q]]|$4|A|B|@$4|C|D|22|F|-2|G|-2]|$4|H|D|22|F|-2|G|-2|J|UX]]]]]|K|$4|L|M|@$4|N|O|$P|2R]|R|S|2S|2T|T|@]]|$4|2U|O|$P|2V]|R|S|2S|2T|T|@2W]]|$4|2U|O|$P|2X]|R|S|2S|2Y|T|@2W]]]]|U|$4|L|M|@$4|V|W|1V|Y|19|10|-1]]]|11|2Z]]|K|$4|2J|2K|UY|2L|UZ]|U|$4|1U|M|@$4|L|M|@$4|V|W|1V|Y|19|10|-1]]]|$4|1U|M|@$4|1W|O|$P|30]|R|S|2S|2Y]|$4|1W|O|$P|31]|R|S|2S|2T]]]]]|11|32]|$0|33|2|34|4|5|6|35|8|-1|9|$4|A|B|@$4|C|D|36|F|-2|G|-2]|$4|H|D|37|F|-2|G|-2|J|V0]]]|K|$4|L|M|@$1D|19|O|$P|38]|1F|-4|R|S|4|N]|$1D|19|O|$P|39]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|3A|Y|19|10|-1]]]|11|-5]|$0|3B|2|3C|4|5|6|3D|8|-1|9|$4|A|B|@$4|C|D|3E|F|-2|G|-2]|$4|H|D|3F|F|-2|G|-2|J|V1]]]|K|$4|L|M|@$1D|19|O|$P|3G]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|3H|Y|19|10|-1]]]|11|-5]|$0|3I|2|3J|4|5|6|3K|8|-1|9|$4|A|B|@$4|C|D|3L]|$4|H|D|3M|J|V2]]]|K|$4|L|M|@$4|N|O|$P|3N]|R|S]]]|U|$4|L|M|@$4|V|W|3O|Y|19|10|-1]]]|11|-5]|$0|3P|2|3Q|4|5|6|3R|8|-1|9|$4|A|B|@$4|C|D|3S]|$4|H|D|3T|J|V3]]]|K|$4|L|M|@$4|N|O|$P|3U]|R|S]]]|U|$4|L|M|@$4|V|W|3V|Y|Z|10|-1]]]|11|-5]|$0|3W|2|3X|4|5|6|3Y|8|-1|9|$4|A|B|@$4|C|D|3X|F|-2|G|-2]|$4|H|D|3X|F|-2|G|-2|J|V4]]]|K|$4|L|M|@$1D|19|O|$P|3Z]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|40|Y|19|10|-1]]]|11|-5]|$0|41|2|42|4|23|6|24|8|-1|9|$4|25|26|$2|43|28|@]|29|$P|44]|P|45]|2C|@]|2D|$0|41|2|46|4|23|6|24|8|-1|9|$4|A|B|@$4|2E|26|$2|43|P|47]|2D|$0|41|2|48|4|23|6|24|8|-1|9|$4|2G|26|$2|43|P|49]|2I|-2]|K|$4|2J|2K|V5|2L|V6|2M|-1]|U|$4|1U|M|@$4|L|M|@$4|V|W|4A|Y|19|10|-1]]]|$4|1U|M|@$1D|19|4|1W|R|S|1F|-4|O|$P|4B|2O|2P]]]]]]|11|2Q]]]]|K|$4|L|M|@$4|N|O|$P|4C]|R|S|2S|2T|T|@]]|$4|2U|O|$P|4D]|R|S|2S|2T|T|@2W]]|$4|2U|O|$P|4E]|R|S|2S|2Y|T|@2W]]]]|U|$4|L|M|@$4|V|W|4A|Y|19|10|-1]]]|11|2Z]]|K|$4|2J|2K|V7|2L|V8]|U|$4|1U|M|@$4|L|M|@$4|V|W|4A|Y|19|10|-1]]]|$4|1U|M|@$4|1W|O|$P|4F]|R|S|2S|2Y]|$4|1W|O|$P|4G]|R|S|2S|2T]]]]]|11|32]|$0|4H|2|4I|4|5|6|4J|8|-1|9|$4|A|B|@$4|C|D|4K]]]|K|$4|L|M|@$4|N|O|$P|4L]|R|S]]]|U|$4|V|W|4M|Y|Z|10|-1]|11|-5]|$0|4N|2|4O|4|5|6|4P|8|-1|9|$4|A|B|@$4|C|D|4Q|F|-2|G|-2]|$4|H|D|4R|F|-2|G|-2|J|V9]]]|K|$4|L|M|@$4|N|O|$P|4S]|R|S|T|@]]]]|U|$4|L|M|@$4|V|W|4T|Y|Z|10|-1]]]|11|-5]|$0|4U|2|4V|4|5|6|4W|8|-1|9|$4|A|B|@$4|C|D|4X]]]|K|$4|L|M|@$4|N|O|$P|4Y]|R|S]]]|U|$4|L|M|@$4|V|W|4Z|Y|19|10|-1]]]|11|-5]|$0|50|2|51|4|5|6|52|8|-1|9|$4|A|B|@$4|C|D|51|F|-2|G|-2]|$4|H|D|51|F|-2|G|-2|J|VA]]]|K|$4|L|M|@$1D|19|O|$P|53]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|54|Y|19|10|-1]]]|11|-5]|$0|55|2|56|4|5|6|57|8|-1|9|$4|A|B|@$4|C|D|56|F|-2|G|-2]|$4|H|D|56|F|-2|G|-2|J|VB]]]|K|$4|L|M|@$1D|19|O|$P|58]|1F|-4|R|S|4|N]|$1D|19|O|$P|59]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|5A|Y|19|10|-1]]]|11|-5]|$0|5B|2|5C|4|5|6|5D|8|-1|9|$4|A|B|@$4|C|D|5C|F|-2|G|-2]|$4|H|D|5C|F|-2|G|-2|J|VC]]]|K|$4|L|M|@$1D|19|O|$P|5E]|1F|-4|R|S|4|N]|$1D|19|O|$P|5F]|1F|-4|R|S|4|N]|$1D|19|O|$P|5G]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|54|Y|19|10|-1]]]|11|-5]|$0|5H|2|5I|4|5|6|5J|8|-1|9|$4|A|B|@$4|C|D|5K|F|-2|G|-2]|$4|H|D|5L|F|-2|G|-2|J|VD]]]|K|$4|L|M|@$4|N|O|$P|5M]|R|S|T|@]]]]|U|$4|L|M|@$4|V|W|5N|Y|Z|10|-1]]]|11|-5]|$0|5O|2|5P|4|5|6|5Q|8|-1|9|$4|A|B|@$4|C|D|5R|F|-2|G|-2]|$4|H|D|5S|F|-2|G|-2|J|VE]]]|K|$4|L|M|@$4|N|O|$P|1M]|R|S|T|@]]]]|U|$4|L|M|@$4|V|W|5T|Y|19|10|-1]]]|11|-5]|$0|5U|2|5V|4|5|6|5W|8|-1|9|$4|A|B|@$4|C|D|5X|F|-2|G|-2]|$4|H|D|5Y|F|-2|G|-2|J|VF]]]|K|$4|L|M|@$1D|19|O|$P|5Z]|1F|-4|R|S|4|N]|$1D|19|O|$P|60]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|3A|Y|19|10|-1]]]|11|-5]|$0|61|2|62|4|5|6|63|8|-1|9|$4|A|B|@$4|C|D|62|F|-2|G|-2]|$4|H|D|62|F|-2|G|-2|J|VG]]]|K|$4|L|M|@$1D|19|O|$P|64]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|54|Y|19|10|-1]]]|11|-5]|$0|65|2|66|4|5|6|67|8|-1|9|$4|A|B|@$4|C|D|66|F|-2|G|-2]|$4|H|D|66|F|-2|G|-2|J|VH]]]|K|$4|L|M|@$1D|19|O|$P|68]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|69|Y|19|10|-1]]]|11|-5]|$0|6A|2|6B|4|5|6|6C|8|-1|9|$4|A|B|@$4|C|D|6D|F|-2|G|-2]|$4|H|D|6E|F|-2|G|-2|J|VI]]]|K|$4|L|M|@$4|N|O|$P|6F]|R|S|T|@]]|$1D|19|O|$P|6G]|1F|-4|R|S|4|N]|$1D|19|O|$P|6H]|1F|-4|R|S|4|N]|$1D|19|O|$P|6I]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|6J|Y|19|10|-1]]]|11|-5]|$0|6K|2|6L|4|5|6|6M|8|-1|9|$4|A|B|@$4|C|D|6N|F|-2|G|-2]|$4|H|D|6O|F|-2|G|-2|J|VJ]]]|K|$4|L|M|@$1D|19|O|$P|6P]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|54|Y|19|10|-1]]]|11|-5]|$0|6Q|2|6R|4|5|6|6S|8|-1|9|$4|A|B|@$4|C|D|6T]|$4|H|D|6U|J|VK]]]|K|$4|L|M|@$1D|19|O|$P|6V]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|6W|Y|19|10|-1]]]|11|-5]|$0|6X|2|6Y|4|5|6|6Z|8|-1|9|$4|A|B|@$4|C|D|70]]]|K|$4|L|M|@$4|N|O|$P|71]|R|S]]]|U|$4|L|M|@$4|V|W|6J|Y|19|10|-1]]]|11|-5]|$0|72|2|73|4|5|6|74|8|-1|9|$4|A|B|@$4|C|D|75|F|-2|G|-2]|$4|H|D|76|F|-2|G|-2|J|VL]]]|K|$4|L|M|@$4|N|O|$P|77]|R|S|T|@]]]]|U|$4|L|M|@$4|V|W|18|Y|19|10|-1]]]|11|-5]|$0|78|2|79|4|5|6|7A|8|-1|9|$4|A|B|@$4|C|D|7B|F|-2|G|-2]|$4|H|D|7C|F|-2|G|-2|J|VM]]]|K|$4|L|M|@$4|N|O|$P|7D]|R|S|T|@]]]]|U|$4|L|M|@$4|V|W|7E|Y|Z|10|-1]]]|11|-5]|$0|7F|2|7G|4|5|6|7H|8|-1|9|$4|A|B|@$4|C|D|7I|F|-2|G|-2]|$4|H|D|7J|F|-2|G|-2|J|VN]]]|K|$4|L|M|@$4|N|O|$P|7K]|R|S|T|@]]]]|U|$4|L|M|@$4|V|W|3H|Y|19|10|-1]]]|11|-5]|$0|7L|2|7M|4|5|6|7N|8|-1|9|$4|A|B|@$4|C|D|7O]]]|K|$4|L|M|@$O|$P|7P]|R|S|4|N]]]|U|$4|L|M|@$4|V|W|X|Y|19|10|-1]]]|11|-5]|$0|7Q|2|7R|4|5|6|7S|8|-1|9|$4|A|B|@$4|C|D|7R|F|-2|G|-2]|$4|H|D|7R|F|-2|G|-2|J|VO]]]|K|$4|L|M|@$1D|19|O|$P|7T]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|54|Y|19|10|-1]]]|11|-5]|$0|7U|2|7V|4|5|6|7W|8|-1|9|$4|A|B|@$4|C|D|7V|F|-2|G|-2]|$4|H|D|7V|F|-2|G|-2|J|VP]]]|K|$4|L|M|@$1D|19|O|$P|7X]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|5A|Y|19|10|-1]]]|11|-5]|$0|7Y|2|7Z|4|23|6|24|8|-1|9|$4|25|26|$2|80|28|@]|29|$P|81]|P|82]|2C|@]|2D|$0|7Y|2|7Z|4|23|6|24|8|-1|9|$4|A|B|@$4|2E|26|$2|80|P|83]|2D|$0|7Y|2|7Z|4|23|6|24|8|-1|9|$4|2G|26|$2|80|P|84]|2I|-2]|K|$4|2J|2K|VQ|2L|VR|2M|-1]|U|$4|1U|M|@$4|L|M|@$4|V|W|4A|Y|19|10|-1]]]|$4|L|M|@$1D|19|4|1W|R|S|1F|-4|O|$P|85|2O|2P]]]]]]|11|2Q]]|$4|A|B|@$4|C|D|7Z|F|-2|G|-2]|$4|H|D|7Z|F|-2|G|-2|J|VS]]]]]|K|$4|L|M|@$4|N|O|$P|86]|R|S|2S|2T|T|@]]|$4|2U|O|$P|87]|R|S|2S|2T|T|@2W]]|$4|2U|O|$P|88]|R|S|2S|2Y|T|@2W]]]]|U|$4|L|M|@$4|V|W|4A|Y|19|10|-1]]]|11|2Z]]|K|$4|2J|2K|VT|2L|VU]|U|$4|1U|M|@$4|L|M|@$4|V|W|4A|Y|19|10|-1]]]|$4|1U|M|@$4|1W|O|$P|89]|R|S|2S|2Y]|$4|1W|O|$P|8A]|R|S|2S|2T]]]]]|11|32]|$0|8B|2|8C|4|5|6|8D|8|-1|9|$4|A|B|@$4|C|D|8E]]]|K|$4|L|M|@$4|N|O|$P|8F]|R|S]]]|U|$4|V|W|4M|Y|Z|10|-1]|11|-5]|$0|8G|2|8H|4|5|6|8I|8|-1|9|$4|A|B|@$4|C|D|8H|F|-2|G|-2]|$4|H|D|8H|F|-2|G|-2|J|VV]]]|K|$4|L|M|@$1D|19|O|$P|8J]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|8K|Y|19|10|-1]]]|11|-5]|$0|8L|2|8M|4|5|6|8N|8|-1|9|$4|A|B|@$4|C|D|8O]]]|K|$4|L|M|@$4|N|O|$P|8P]|R|S]]]|U|$4|L|M|@$4|V|W|X|Y|19|10|-1]]]|11|-5]|$0|8Q|2|8R|4|5|6|8S|8|-1|9|$4|A|B|@$4|C|D|8T|F|-2|G|-2]|$4|H|D|8U|F|-2|G|-2|J|VW]]]|K|$4|L|M|@$4|N|O|$P|8V]|R|S|T|@]]]]|U|$4|L|M|@$4|V|W|6J|Y|19|10|-1]]]|11|-5]|$0|8W|2|8X|4|8Y|6|8Z|8|-1|9|$4|2G|26|$2|-4|P|-4]|2I|-1]|K|$4|1S|1T|VX]|U|$4|1U|M|@$4|L|M|@$4|V|W|3A|Y|19|10|-1]]]|$4|1U|M|@$1D|19|4|1W|R|S|1F|-4|O|$P|90]]|$1D|91|4|1W|R|S|1F|1X|O|$P|92]|2|-4]]]]]|11|-5]|$0|93|2|94|4|5|6|95|8|-1|9|$4|A|B|@$4|C|D|96|F|-2|G|-2]|$4|H|D|97|F|-2|G|-2|J|VY]]]|K|$4|L|M|@$1D|19|O|$P|98]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|3V|Y|19|10|-1]]]|11|-5]|$0|99|2|9A|4|5|6|9B|8|-1|9|$4|A|B|@$4|C|D|9C]|$4|H|D|9D|J|VZ]]]|K|$4|L|M|@$4|N|O|$P|9E]|R|S]]]|U|$4|L|M|@$4|V|W|6J|Y|19|10|-1]]]|11|-5]|$0|9F|2|9G|4|5|6|9H|8|-1|9|$4|A|B|@$4|C|D|9G|F|-2|G|-2]|$4|H|D|9G|F|-2|G|-2|J|W0]]]|K|$4|L|M|@$1D|19|O|$P|9I]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|69|Y|19|10|-1]]]|11|-5]|$0|9J|2|9K|4|5|6|9L|8|-1|9|$4|A|B|@$4|C|D|9M|F|-2|G|-2]|$4|H|D|9N|F|-2|G|-2|J|W1]]]|K|$4|L|M|@$4|N|O|$P|9O]|R|S|T|@]]]]|U|$4|L|M|@$4|V|W|5N|Y|19|10|-1]]]|11|-5]|$0|9P|2|9Q|4|5|6|9R|8|-1|9|$4|A|B|@$4|C|D|9Q|F|-2|G|-2]|$4|H|D|9Q|F|-2|G|-2|J|W2]]]|K|$4|L|M|@$1D|19|O|$P|9S]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|40|Y|19|10|-1]]]|11|-5]|$0|9T|2|9U|4|5|6|9V|8|-1|9|$4|A|B|@$4|C|D|9W]]]|K|$4|L|M|@$O|$P|9X]|R|S|4|N]]]|U|$4|L|M|@$4|V|W|6J|Y|9Y|10|-1]]]|11|-5]|$0|9Z|2|A0|4|5|6|A1|8|-1|9|$4|A|B|@$4|C|D|A2]]]|K|$4|L|M|@$O|$P|A3]|R|S|4|N]]]|U|$4|L|M|@$4|V|W|A4|Y|Z|10|-1]]]|11|-5]|$0|A5|2|A6|4|5|6|A7|8|-1|9|$4|A|B|@$4|C|D|A8|F|-2|G|-2]|$4|H|D|A9|F|-2|G|-2|J|W3]]]|K|$4|L|M|@$4|N|O|$P|AA]|R|S|T|@]]]]|U|$4|L|M|@$4|V|W|6J|Y|19|10|-1]]]|11|-5]|$0|AB|2|AC|4|5|6|AD|8|-1|9|$4|A|B|@$4|C|D|AC|F|-2|G|-2]|$4|H|D|AC|F|-2|G|-2|J|W4]]]|K|$4|L|M|@$1D|19|O|$P|AE]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|54|Y|19|10|-1]]]|11|-5]|$0|AF|2|AG|4|5|6|AH|8|-1|9|$4|A|B|@$4|C|D|AI|F|-2|G|-2]|$4|H|D|AJ|F|-2|G|-2|J|W5]]]|K|$4|L|M|@$4|N|O|$P|AK]|R|S|T|@]]]]|U|$4|L|M|@$4|V|W|3V|Y|AL|10|-1]]]|11|-5]|$0|AM|2|AN|4|5|6|AO|8|-1|9|$4|A|B|@$4|C|D|AP]|$4|H|D|AQ|J|W6]]]|K|$4|L|M|@$1D|19|O|$P|AR]|R|S|4|N]]]|U|$4|L|M|@$4|V|W|6J|Y|9Y|10|-1]]]|11|-5]|$0|AS|2|AT|4|5|6|AU|8|-1|9|$4|A|B|@$4|C|D|AV]|$4|H|D|AW|J|W7]]]|K|$4|L|M|@$1D|19|O|$P|AX]|R|S|4|N]]]|U|$4|L|M|@$4|V|W|X|Y|19|10|-1]]]|11|-5]|$0|AY|2|AZ|4|23|6|24|8|-1|9|$4|25|26|$2|B0|28|@]|29|$P|B1]|P|B2]|2C|@]|2D|$0|AY|2|AZ|4|23|6|24|8|-1|9|$4|A|B|@$4|2E|26|$2|B0|P|B3]|2D|$0|AY|2|AZ|4|23|6|24|8|-1|9|$4|2G|26|$2|B0|P|B4]|2I|-2]|K|$4|2J|2K|W8|2L|W9|2M|-1]|U|$4|1U|M|@$4|L|M|@$4|V|W|8K|Y|19|10|-1]]]|$4|L|M|@$1D|19|4|1W|R|S|1F|-4|O|$P|B5|2O|2P]]|$1D|19|4|1W|R|S|1F|-4|O|$P|B6|2O|2P]]|$1D|19|4|1W|R|S|1F|-4|O|$P|B7|2O|2P]]|$1D|19|4|1W|R|S|1F|-4|O|$P|B8|2O|2P]]|$1D|19|4|1W|R|S|1F|-4|O|$P|B9|2O|2P]]|$1D|19|4|1W|R|S|1F|-4|O|$P|BA|2O|2P]]]]]]|11|2Q]]|$4|A|B|@$4|C|D|AZ|F|-2|G|-2]|$4|H|D|AZ|F|-2|G|-2|J|WA]]]]]|K|$4|L|M|@$4|N|O|$P|BB]|R|S|2S|2T|T|@]]|$4|2U|O|$P|BC]|R|S|2S|2T|T|@2W]]|$4|2U|O|$P|BD]|R|S|2S|2Y|T|@2W]]]]|U|$4|L|M|@$4|V|W|8K|Y|19|10|-1]]]|11|2Z]]|K|$4|2J|2K|WB|2L|WC]|U|$4|1U|M|@$4|L|M|@$4|V|W|8K|Y|19|10|-1]]]|$4|1U|M|@$4|1W|O|$P|BE]|R|S|2S|2Y]|$4|1W|O|$P|BF]|R|S|2S|2T]]]]]|11|32]|$0|BG|2|BH|4|23|6|24|8|-1|9|$4|25|26|$2|B0|28|@]|29|$P|BI]|P|BJ]|2C|@]|2D|$0|BG|2|BH|4|23|6|24|8|-1|9|$4|A|B|@$4|2E|26|$2|B0|P|BJ]|2D|$0|BG|2|BH|4|23|6|24|8|-1|9|$4|2G|26|$2|B0|P|BJ]|2I|-2]|K|$4|2J|2K|WD|2L|WE|2M|-1]|U|$4|1U|M|@$4|L|M|@$4|V|W|BK|Y|19|10|-1]]]|$4|1U|M|@$1D|19|4|1W|R|S|1F|-4|O|$P|BL|2O|2P]]|$1D|19|4|1W|R|S|1F|-4|O|$P|BM|2O|2P]]|$1D|19|4|1W|R|S|1F|-4|O|$P|BN|2O|2P]]|$1D|19|4|1W|R|S|1F|-4|O|$P|BO|2O|2P]]|$1D|19|4|1W|R|S|1F|-4|O|$P|BP|2O|2P]]]]]]|11|2Q]]|$4|A|B|@$4|C|D|BQ|F|-2|G|-2]|$4|H|D|BQ|F|-2|G|-2|J|WF]]]]]|K|$4|L|M|@$4|N|O|$P|BR]|R|S|2S|2T|T|@]]|$4|2U|O|$P|BS]|R|S|2S|2T|T|@2W]]|$4|2U|O|$P|BJ]|R|S|2S|2Y|T|@2W]]]]|U|$4|L|M|@$4|V|W|BK|Y|19|10|-1]]]|11|2Z]]|K|$4|2J|2K|WG|2L|WH]|U|$4|1U|M|@$4|L|M|@$4|V|W|BK|Y|19|10|-1]]]|$4|1U|M|@$4|1W|O|$P|BJ]|R|S|2S|2Y]|$4|1W|O|$P|BT]|R|S|2S|2T]]]]]|11|32]|$0|BU|2|BV|4|5|6|BW|8|-1|9|$4|A|B|@$4|C|D|BX|F|-2|G|-2]|$4|H|D|BY|F|-2|G|-2|J|WI]]]|K|$4|L|M|@$1D|19|O|$P|BZ]|1F|-4|R|S|4|N]|$1D|19|O|$P|C0]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|3A|Y|19|10|-1]]]|11|-5]|$0|C1|2|C2|4|5|6|C3|8|-1|9|$4|A|B|@$4|C|D|C2|F|-2|G|-2]|$4|H|D|C2|F|-2|G|-2|J|WJ]]]|K|$4|L|M|@$1D|19|O|$P|C4]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|8K|Y|19|10|-1]]]|11|-5]|$0|C5|2|C6|4|5|6|C7|8|-1|9|$4|A|B|@$4|C|D|C8|F|-2|G|-2]|$4|H|D|C9|F|-2|G|-2|J|WK]]]|K|$4|L|M|@$1D|19|O|$P|CA]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|CB|Y|19|10|-1]]]|11|-5]|$0|CC|2|CD|4|5|6|CE|8|-1|9|$4|A|B|@$4|C|D|CF]|$4|H|D|CG|J|WL]]]|K|$4|L|M|@$4|N|O|$P|CH]|R|S]]]|U|$4|L|M|@$4|V|W|6J|Y|9Y|10|-1]]]|11|-5]|$0|CI|2|CJ|4|5|6|CK|8|-1|9|$4|A|B|@$4|C|D|-4|CL|$CM|@$4|CN|2|CO]|$4|CP|1F|1X]]]]]]|K|$4|L|M|@$4|N|O|$P|CQ]|R|S]]]|U|$4|V|W|CR|Y|AL|10|-1]|11|-5]|$0|CS|2|CT|4|5|6|CU|8|-1|9|$4|A|B|@$4|C|D|CV|F|-2|G|-2]|$4|H|D|CW|F|-2|G|-2|J|WM]]]|K|$4|L|M|@$1D|19|O|$P|CX]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|CY|Y|19|10|-1]]]|11|-5]|$0|CZ|2|D0|4|5|6|D1|8|-1|9|$4|A|B|@$4|C|D|D0|F|-2|G|-2]|$4|H|D|D0|F|-2|G|-2|J|WN]]]|K|$4|L|M|@$1D|19|O|$P|D2]|1F|-4|R|S|4|N]|$1D|19|O|$P|D3]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|D4|Y|19|10|-1]]]|11|-5]|$0|D5|2|D6|4|5|6|D7|8|-1|9|$4|A|B|@$4|C|D|D8|F|-2|G|-2]|$4|H|D|D9|F|-2|G|-2|J|WO]]]|K|$4|L|M|@$4|N|O|$P|DA]|R|S|T|@]]]]|U|$4|L|M|@$4|V|W|X|Y|Z|10|-1]]]|11|-5]|$0|DB|2|DC|4|5|6|DD|8|-1|9|$4|A|B|@$4|C|D|DE]]]|K|$4|L|M|@$4|N|O|$P|DF]|R|S]]]|U|$4|V|W|4M|Y|Z|10|-1]|11|-5]|$0|DG|2|DH|4|5|6|DI|8|-1|9|$4|A|B|@$4|C|D|DJ]]]|K|$4|L|M|@$4|N|O|$P|DK]|R|S]]]|U|$4|L|M|@$4|V|W|6J|Y|19|10|-1]]]|11|-5]|$0|DL|2|DM|4|5|6|DN|8|-1|9|$4|A|B|@$4|C|D|DM|F|-2|G|-2]|$4|H|D|DM|F|-2|G|-2|J|WP]]]|K|$4|L|M|@$1D|19|O|$P|DO]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|8K|Y|19|10|-1]]]|11|-5]|$0|DP|2|DQ|4|23|6|24|8|-1|9|$4|25|26|$2|B0|28|@]|29|$P|DR]|P|DS]|2C|@]|2D|$0|DP|2|DQ|4|23|6|24|8|-1|9|$4|A|B|@$4|2E|26|$2|B0|P|DT]|2D|$0|DP|2|DQ|4|23|6|24|8|-1|9|$4|2G|26|$2|B0|P|DU]|2I|-2]|K|$4|2J|2K|WQ|2L|WR|2M|-1]|U|$4|1U|M|@$4|L|M|@$4|V|W|D4|Y|19|10|-1]]]|$4|L|M|@$1D|19|4|1W|R|S|1F|-4|O|$P|DV|2O|2P]]|$1D|19|4|1W|R|S|1F|-4|O|$P|DW|2O|2P]]|$1D|19|4|1W|R|S|1F|-4|O|$P|DX|2O|2P]]|$1D|19|4|1W|R|S|1F|-4|O|$P|DY|2O|2P]]|$1D|19|4|1W|R|S|1F|-4|O|$P|DZ|2O|2P]]|$1D|19|4|1W|R|S|1F|E0|O|$P|E1|2O|2P]|2|E2|1Z|E3]]]]]|11|2Q]]|$4|A|B|@$4|C|D|E4|F|-2|G|-2]|$4|H|D|E4|F|-2|G|-2|J|WS]]]]]|K|$4|L|M|@$4|N|O|$P|E5]|R|S|2S|2T|T|@]]|$4|2U|O|$P|E6]|R|S|2S|2T|T|@2W]]|$4|2U|O|$P|E7]|R|S|2S|2Y|T|@2W]]]]|U|$4|L|M|@$4|V|W|D4|Y|19|10|-1]]]|11|2Z]]|K|$4|2J|2K|WT|2L|WU]|U|$4|1U|M|@$4|L|M|@$4|V|W|D4|Y|19|10|-1]]]|$4|1U|M|@$4|1W|O|$P|E8]|R|S|2S|2Y]|$4|1W|O|$P|E9]|R|S|2S|2T]]]]]|11|32]|$0|EA|2|EB|4|5|6|EC|8|-1|9|$4|A|B|@$4|C|D|ED]|$4|H|D|EE|J|WV]]]|K|$4|L|M|@$1D|19|O|$P|EF]|R|S|4|N]]]|U|$4|L|M|@$4|V|W|X|Y|19|10|-1]]]|11|-5]|$0|EG|2|EH|4|5|6|EI|8|-1|9|$4|A|B|@$4|C|D|EJ]]]|K|$4|L|M|@$4|N|O|$P|EK]|R|S]]]|U|$4|V|W|4M|Y|19|10|-1]|11|-5]|$0|EL|2|EM|4|5|6|EN|8|-1|9|$4|A|B|@$4|C|D|EO]|$4|H|D|EP|J|WW]]]|K|$4|L|M|@$1D|19|O|$P|EQ]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|ER|Y|AL|10|-1]]]|11|-5]|$0|ES|2|ET|4|5|6|EU|8|-1|9|$4|A|B|@$4|C|D|EV]]]|K|$4|L|M|@$4|N|O|$P|EW]|R|S]]]|U|$4|V|W|4M|Y|Z|10|-1]|11|-5]|$0|EX|2|EY|4|5|6|EZ|8|-1|9|$4|A|B|@$4|C|D|F0|F|-2|G|-2]|$4|H|D|F1|F|-2|G|-2|J|WX]]]|K|$4|L|M|@$4|N|O|$P|F2]|R|S|T|@]]]]|U|$4|L|M|@$4|V|W|3V|Y|Z|10|-1]]]|11|-5]|$0|F3|2|F4|4|5|6|F5|8|-1|9|$4|A|B|@$4|C|D|F6|F|-2|G|-2]|$4|H|D|F7|F|-2|G|-2|J|WY]]]|K|$4|L|M|@$4|N|O|$P|1M]|R|S|T|@]]]]|U|$4|L|M|@$4|V|W|18|Y|19|10|-1]]]|11|-5]|$0|F8|2|F9|4|5|6|FA|8|-1|9|$4|A|B|@$4|C|D|FB|F|-2|G|-2]|$4|H|D|FC|F|-2|G|-2|J|WZ]]]|K|$4|L|M|@$1D|19|O|$P|FD]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|5A|Y|19|10|-1]]]|11|-5]|$0|FE|2|FF|4|5|6|FG|8|-1|9|$4|A|B|@$4|C|D|FH|F|-2|G|-2]|$4|H|D|FI|F|-2|G|-2|J|X0]]]|K|$4|L|M|@$4|N|O|$P|FJ]|R|S|T|@]]]]|U|$4|L|M|@$4|V|W|5N|Y|Z|10|-1]]]|11|-5]|$0|FK|2|FL|4|FM|6|FN|8|-1|9|$4|A|B|@$4|C|D|FO]]]|K|$4|FP]|U|$4|L|M|@$4|V|W|FQ|Y|19|10|-2]]]|11|-5]|$0|FR|2|FS|4|5|6|FT|8|-1|9|$4|A|B|@$4|C|D|FU]|$4|H|D|FV|J|X1]]]|K|$4|L|M|@$1D|19|O|$P|FW]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|X|Y|19|10|-1]]]|11|-5]|$0|FX|2|FY|4|5|6|FZ|8|-1|9|$4|A|B|@$4|C|D|-4|CL|$CM|@$4|CN|2|G0]|$4|CP|1F|1X]]]]]]|K|$4|L|M|@$4|N|O|$P|G1]|R|S]]]|U|$4|V|W|CR|Y|AL|10|-1]|11|-5]|$0|G2|2|G3|4|5|6|G4|8|-1|9|$4|A|B|@$4|C|D|G5|F|-2|G|-2]|$4|H|D|G6|F|-2|G|-2|J|X2]]]|K|$4|L|M|@$1D|19|O|$P|G7]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|54|Y|19|10|-1]]]|11|-5]|$0|G8|2|G9|4|5|6|GA|8|-1|9|$4|A|B|@$4|C|D|GB|F|-2|G|-2]|$4|H|D|GC|F|-2|G|-2|J|X3]]]|K|$4|L|M|@$1D|19|O|$P|GD]|R|S|4|N]|$1D|19|O|$P|GE]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|CY|Y|19|10|-1]]]|11|-5]|$0|GF|2|GG|4|5|6|GH|8|-1|9|$4|A|B|@$4|C|D|GI]]]|K|$4|L|M|@$4|N|O|$P|GJ]|R|S]]]|U|$4|V|W|4M|Y|Z|10|-1]|11|-5]|$0|GK|2|GL|4|5|6|GM|8|-1|9|$4|A|B|@$4|C|D|-4|CL|$CM|@$4|CN|2|GN]|$4|CP|1F|1X]]]]]]|K|$4|L|M|@$4|N|O|$P|GO]|R|S]]]|U|$4|V|W|4M|Y|Z|10|-1]|11|-5]|$0|GP|2|GQ|4|5|6|GR|8|-1|9|$4|A|B|@$4|C|D|GS|F|-2|G|-2]|$4|H|D|GT|F|-2|G|-2|J|X4]]]|K|$4|L|M|@$4|N|O|$P|GU]|R|S|T|@]]]]|U|$4|L|M|@$4|V|W|X|Y|Z|10|-1]]]|11|-5]|$0|GV|2|GW|4|5|6|GX|8|-1|9|$4|A|B|@$4|C|D|GY|F|-2|G|-2]|$4|H|D|GZ|F|-2|G|-2|J|X5]]]|K|$4|L|M|@$4|N|O|$P|H0]|R|S|T|@]]]]|U|$4|L|M|@$4|V|W|5N|Y|Z|10|-1]]]|11|-5]|$0|H1|2|H2|4|5|6|H3|8|-1|9|$4|A|B|@$4|C|D|-4|CL|$CM|@$4|CN|2|H4]|$4|CP|1F|1X]]]]]]|K|$4|L|M|@$4|N|O|$P|H5]|R|S]]]|U|$4|V|W|4M|Y|Z|10|-1]|11|-5]|$0|H6|2|H7|4|5|6|H8|8|-1|9|$4|A|B|@$4|C|D|H9|F|-2|G|-2]|$4|H|D|HA|F|-2|G|-2|J|X6]]]|K|$4|L|M|@$1D|19|O|$P|HB]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|HC|Y|19|10|-1]]]|11|-5]|$0|HD|2|HE|4|5|6|HF|8|-1|9|$4|A|B|@$4|C|D|HG|F|-2|G|-2]|$4|H|D|HH|F|-2|G|-2|J|X7]]]|K|$4|L|M|@$1D|19|O|$P|HI]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|CY|Y|19|10|-1]]]|11|-5]|$0|HJ|2|HK|4|5|6|HL|8|-1|9|$4|A|B|@$4|C|D|HM|F|-2|G|-2]|$4|H|D|HN|F|-2|G|-2|J|X8]]]|K|$4|L|M|@$4|N|O|$P|HO]|R|S|T|@]]]]|U|$4|L|M|@$4|V|W|1N|Y|19|10|-1]]]|11|-5]|$0|HP|2|HQ|4|5|6|HR|8|-1|9|$4|A|B|@$4|C|D|HS]]]|K|$4|L|M|@$4|N|O|$P|HT]|R|S]]]|U|$4|L|M|@$4|V|W|6J|Y|19|10|-1]]]|11|-5]|$0|HU|2|HV|4|5|6|HW|8|-1|9|$4|A|B|@$4|C|D|HV|F|-2|G|-2]|$4|H|D|HV|F|-2|G|-2|J|X9]]]|K|$4|L|M|@$1D|19|O|$P|HX]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|54|Y|19|10|-1]]]|11|-5]|$0|HY|2|HZ|4|5|6|I0|8|-1|9|$4|A|B|@$4|C|D|I1|F|-2|G|-2]|$4|H|D|I2|F|-2|G|-2|J|XA]]]|K|$4|L|M|@$4|N|O|$P|1M]|R|S|T|@]]]]|U|$4|L|M|@$4|V|W|5N|Y|19|10|-1]]]|11|-5]|$0|I3|2|I4|4|5|6|I5|8|-1|9|$4|A|B|@$4|C|D|I6|F|-2|G|-2]|$4|H|D|I7|F|-2|G|-2|J|XB]]]|K|$4|L|M|@$4|N|O|$P|I8]|R|S|T|@]]]]|U|$4|L|M|@$4|V|W|5N|Y|Z|10|-1]]]|11|-5]|$0|I9|2|IA|4|5|6|IB|8|-1|9|$4|A|B|@$4|C|D|IA|F|-2|G|-2]|$4|H|D|IA|F|-2|G|-2|J|XC]]]|K|$4|L|M|@$1D|19|O|$P|IC]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|69|Y|19|10|-1]]]|11|-5]|$0|ID|2|IE|4|5|6|IF|8|-1|9|$4|A|B|@$4|C|D|IE|F|-2|G|-2]|$4|H|D|IE|F|-2|G|-2|J|XD]]]|K|$4|L|M|@$1D|19|O|$P|IG]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|54|Y|19|10|-1]]]|11|-5]|$0|IH|2|II|4|5|6|IJ|8|-1|9|$4|A|B|@$4|C|D|IK|F|-2|G|-2]|$4|H|D|IL|F|-2|G|-2|J|XE]]]|K|$4|L|M|@$1D|19|O|$P|IM]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|CY|Y|19|10|-1]]]|11|-5]|$0|IN|2|IO|4|5|6|IP|8|-1|9|$4|A|B|@$4|C|D|IQ|F|-2|G|-2]|$4|H|D|IQ|F|-2|G|-2|J|XF]]]|K|$4|L|M|@$1D|19|O|$P|IR]|1F|-4|R|S|4|N]|$1D|19|O|$P|IS]|1F|-4|R|S|4|N]|$1D|19|O|$P|IT]|1F|-4|R|S|4|N]|$1D|19|O|$P|IU]|1F|-4|R|S|4|N]|$1D|19|O|$P|IV]|1F|-4|R|S|4|N]|$1D|19|O|$P|IW]|1F|-4|R|S|4|N]|$1D|19|O|$P|IX]|1F|-4|R|S|4|N]|$1D|19|O|$P|IY]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|69|Y|19|10|-1]]]|11|-5]|$0|IZ|2|J0|4|5|6|J1|8|-1|9|$4|A|B|@$4|C|D|J0|F|-2|G|-2]|$4|H|D|J0|F|-2|G|-2|J|XG]]]|K|$4|L|M|@$1D|19|O|$P|J2]|1F|-4|R|S|4|N]|$1D|19|O|$P|J3]|1F|-4|R|S|4|N]|$1D|19|O|$P|J4]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|40|Y|19|10|-1]]]|11|-5]|$0|J5|2|J6|4|5|6|J7|8|-1|9|$4|A|B|@$4|C|D|J8]]]|K|$4|L|M|@$4|N|O|$P|J9]|R|S]]]|U|$4|L|M|@$4|V|W|6J|Y|19|10|-1]]]|11|-5]|$0|JA|2|JB|4|5|6|JC|8|-1|9|$4|A|B|@$4|C|D|JD|F|-2|G|-2]|$4|H|D|JE|F|-2|G|-2|J|XH]]]|K|$4|L|M|@$4|N|O|$P|JF]|R|S|T|@]]]]|U|$4|L|M|@$4|V|W|JG|Y|Z|10|-1]]]|11|-5]|$0|JH|2|JI|4|5|6|JJ|8|-1|9|$4|A|B|@$4|C|D|JK]]]|K|$4|L|M|@$4|N|O|$P|JL]|R|S]]]|U|$4|V|W|4M|Y|Z|10|-1]|11|-5]|$0|JM|2|JN|4|5|6|JO|8|-1|9|$4|A|B|@$4|C|D|JP]]]|K|$4|L|M|@$4|N|O|$P|JQ]|R|S]]]|U|$4|V|W|JR|Y|AL|10|-1]|11|-5]|$0|JS|2|JT|4|5|6|JU|8|-1|9|$4|A|B|@$4|C|D|JV]]]|K|$4|L|M|@$4|N|O|$P|JW]|R|S]]]|U|$4|V|W|4M|Y|Z|10|-1]|11|-5]|$0|JX|2|JY|4|5|6|JZ|8|-1|9|$4|A|B|@$4|C|D|JY|F|-2|G|-2]|$4|H|D|JY|F|-2|G|-2|J|XI]]]|K|$4|L|M|@$1D|19|O|$P|K0]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|1G|Y|19|10|-1]]]|11|-5]|$0|K1|2|K2|4|5|6|K3|8|-1|9|$4|A|B|@$4|C|D|K2|F|-2|G|-2]|$4|H|D|K2|F|-2|G|-2|J|XJ]]]|K|$4|L|M|@$1D|19|O|$P|K4]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|BK|Y|19|10|-1]]]|11|-5]|$0|K5|2|K6|4|5|6|K7|8|-1|9|$4|A|B|@$4|C|D|K8]]]|K|$4|L|M|@$O|$P|K9]|R|S|4|N]]]|U|$4|L|M|@$4|V|W|A4|Y|Z|10|-1]]]|11|-5]|$0|KA|2|KB|4|5|6|KC|8|-1|9|$4|A|B|@$4|C|D|KD|F|-2|G|-2]|$4|H|D|KE|F|-2|G|-2|J|XK]]]|K|$4|L|M|@$4|N|O|$P|KF]|R|S|T|@]]]]|U|$4|L|M|@$4|V|W|JG|Y|Z|10|-1]]]|11|-5]|$0|KG|2|KH|4|5|6|KI|8|-1|9|$4|A|B|@$4|C|D|KJ]|$4|H|D|KK|J|XL]]]|K|$4|L|M|@$4|N|O|$P|KL]|R|S]]]|U|$4|L|M|@$4|V|W|X|Y|9Y|10|-1]]]|11|-5]|$0|KM|2|KN|4|1Q|6|KO|8|-1|9|$4|A|B|@$4|C|D|KN|F|-2|G|-2]|$4|H|D|KN|F|-2|G|-2|J|XM]]]|K|$4|1S|1T|XN]|U|$4|1U|M|@$4|L|M|@$4|V|W|4A|Y|19|10|-1]]]|$4|1U|M|@$1D|19|4|1W|R|S|1F|1X|O|$P|KP]|2|-4|1Z|KQ]]]]]|11|-5]|$0|KR|2|KS|4|5|6|KT|8|-1|9|$4|A|B|@$4|C|D|KU]]]|K|$4|L|M|@$4|N|O|$P|KV]|R|S]]]|U|$4|V|W|4M|Y|Z|10|-1]|11|-5]|$0|KW|2|KX|4|5|6|KY|8|-1|9|$4|A|B|@$4|C|D|KZ]]]|K|$4|L|M|@$O|$P|L0]|R|S|4|N]]]|U|$4|L|M|@$4|V|W|X|Y|19|10|-1]]]|11|-5]|$0|L1|2|L2|4|23|6|24|8|-1|9|$4|25|26|$2|27|28|@]|29|$P|L3]|P|L4]|2C|@]|2D|$0|L1|2|L2|4|23|6|24|8|-1|9|$4|A|B|@$4|2E|26|$2|27|P|L5]|2D|$0|L1|2|L2|4|23|6|24|8|-1|9|$4|2G|26|$2|27|P|L6]|2I|-2]|K|$4|2J|2K|XO|2L|XP|2M|-1]|U|$4|1U|M|@$4|L|M|@$4|V|W|D4|Y|19|10|-1]]]|$4|L|M|@$1D|19|4|1W|R|S|1F|-4|O|$P|B5|2O|2P]]|$1D|19|4|1W|R|S|1F|-4|O|$P|B6|2O|2P]]|$1D|19|4|1W|R|S|1F|-4|O|$P|B7|2O|2P]]|$1D|19|4|1W|R|S|1F|-4|O|$P|B8|2O|2P]]|$1D|19|4|1W|R|S|1F|-4|O|$P|B9|2O|2P]]|$1D|19|4|1W|R|S|1F|-4|O|$P|BA|2O|2P]]]]]]|11|2Q]]|$4|A|B|@$4|C|D|L7|F|-2|G|-2]|$4|H|D|L7|F|-2|G|-2|J|XQ]]]]]|K|$4|L|M|@$4|N|O|$P|L8]|R|S|2S|2T|T|@]]|$4|2U|O|$P|L9]|R|S|2S|2T|T|@2W]]|$4|2U|O|$P|LA]|R|S|2S|2Y|T|@2W]]]]|U|$4|L|M|@$4|V|W|D4|Y|19|10|-1]]]|11|2Z]]|K|$4|2J|2K|XR|2L|XS]|U|$4|1U|M|@$4|L|M|@$4|V|W|D4|Y|19|10|-1]]]|$4|1U|M|@$4|1W|O|$P|LB]|R|S|2S|2Y]|$4|1W|O|$P|LC]|R|S|2S|2T]]]]]|11|32]|$0|LD|2|LE|4|5|6|LF|8|-1|9|$4|A|B|@$4|C|D|LG|F|-2|G|-2]|$4|H|D|LH|F|-2|G|-2|J|XT]]]|K|$4|L|M|@$1D|19|O|$P|LI]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|LJ|Y|19|10|-1]]]|11|-5]|$0|LK|2|LL|4|5|6|LM|8|-1|9|$4|A|B|@$4|C|D|LN|F|-2|G|-2]|$4|H|D|LO|F|-2|G|-2|J|XU]]]|K|$4|L|M|@$4|N|O|$P|LP]|R|S|T|@]]]]|U|$4|L|M|@$4|V|W|5T|Y|19|10|-1]]]|11|-5]|$0|LQ|2|LR|4|23|6|24|8|-1|9|$4|25|26|$2|B0|28|@]|29|$P|LS]|P|LT]|2C|@]|2D|$0|LQ|2|LR|4|23|6|24|8|-1|9|$4|A|B|@$4|2E|26|$2|B0|P|LU]|2D|$0|LQ|2|LR|4|23|6|24|8|-1|9|$4|2G|26|$2|B0|P|LV]|2I|-2]|K|$4|2J|2K|XV|2L|XW|2M|-1]|U|$4|1U|M|@$4|L|M|@$4|V|W|40|Y|19|10|-1]]]|$4|L|M|@$1D|19|4|1W|R|S|1F|-4|O|$P|B5|2O|2P]]|$1D|19|4|1W|R|S|1F|-4|O|$P|B6|2O|2P]]|$1D|19|4|1W|R|S|1F|-4|O|$P|B7|2O|2P]]|$1D|19|4|1W|R|S|1F|-4|O|$P|B8|2O|2P]]|$1D|19|4|1W|R|S|1F|-4|O|$P|B9|2O|2P]]|$1D|19|4|1W|R|S|1F|-4|O|$P|BA|2O|2P]]]]]]|11|2Q]]|$4|A|B|@$4|C|D|LR|F|-2|G|-2]|$4|H|D|LR|F|-2|G|-2|J|XX]]]]]|K|$4|L|M|@$4|N|O|$P|LW]|R|S|2S|2T|T|@]]|$4|2U|O|$P|LX]|R|S|2S|2T|T|@2W]]|$4|2U|O|$P|LY]|R|S|2S|2Y|T|@2W]]]]|U|$4|L|M|@$4|V|W|40|Y|19|10|-1]]]|11|2Z]]|K|$4|2J|2K|XY|2L|XZ]|U|$4|1U|M|@$4|L|M|@$4|V|W|40|Y|19|10|-1]]]|$4|1U|M|@$4|1W|O|$P|LZ]|R|S|2S|2Y]|$4|1W|O|$P|M0]|R|S|2S|2T]]]]]|11|32]|$0|M1|2|M2|4|5|6|M3|8|-1|9|$4|A|B|@$4|C|D|M4|F|-2|G|-2]|$4|H|D|M4|F|-2|G|-2|J|Y0]]]|K|$4|L|M|@$1D|19|O|$P|M5]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|4A|Y|19|10|-1]]]|11|-5]|$0|M6|2|M7|4|5|6|M8|8|-1|9|$4|A|B|@$4|C|D|M9|F|-2|G|-2]|$4|H|D|M9|F|-2|G|-2|J|Y1]]]|K|$4|L|M|@$1D|19|O|$P|MA]|R|S|4|N]]]|U|$4|L|M|@$4|V|W|CB|Y|19|10|-1]]]|11|-5]|$0|MB|2|MC|4|5|6|MD|8|-1|9|$4|A|B|@$4|C|D|ME]]]|K|$4|L|M|@$4|N|O|$P|MF]|R|S]]]|U|$4|V|W|4M|Y|Z|10|-1]|11|-5]|$0|MG|2|MH|4|5|6|MI|8|-1|9|$4|A|B|@$4|C|D|MJ|F|-2|G|-2]|$4|H|D|MK|F|-2|G|-2|J|Y2]]]|K|$4|L|M|@$4|N|O|$P|ML]|R|S|T|@]]]]|U|$4|L|M|@$4|V|W|5T|Y|19|10|-1]]]|11|-5]|$0|MM|2|MN|4|5|6|MO|8|-1|9|$4|A|B|@$4|C|D|MP|F|-2|G|-2]|$4|H|D|MQ|F|-2|G|-2|J|Y3]]]|K|$4|L|M|@$1D|19|O|$P|MR]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|54|Y|19|10|-1]]]|11|-5]|$0|MS|2|MT|4|1Q|6|MU|8|-1|9|$4|A|B|@$4|C|D|MT|F|-2|G|-2]|$4|H|D|MT|F|-2|G|-2|J|Y4]]]|K|$4|1S|1T|Y5]|U|$4|1U|M|@$4|L|M|@$4|V|W|CB|Y|19|10|-1]]]|$4|1U|M|@$1D|19|4|1W|R|S|1F|1X|O|$P|MV]|2|-4|1Z|MW]]]]]|11|-5]|$0|MX|2|MY|4|5|6|MZ|8|-1|9|$4|A|B|@$4|C|D|N0]]]|K|$4|L|M|@$4|N|O|$P|N1]|R|S]]]|U|$4|V|W|JR|Y|AL|10|-1]|11|-5]|$0|N2|2|N3|4|5|6|N4|8|-1|9|$4|A|B|@$4|C|D|N3|F|-2|G|-2]|$4|H|D|N3|F|-2|G|-2|J|Y6]]]|K|$4|L|M|@$1D|19|O|$P|N5]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|1V|Y|19|10|-1]]]|11|-5]|$0|N6|2|N7|4|5|6|N8|8|-1|9|$4|A|B|@$4|C|D|N7|F|-2|G|-2]|$4|H|D|N7|F|-2|G|-2|J|Y7]]]|K|$4|L|M|@$1D|19|O|$P|N9]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|69|Y|19|10|-1]]]|11|-5]|$0|NA|2|NB|4|5|6|NC|8|-1|9|$4|A|B|@$4|C|D|ND|F|-2|G|-2]|$4|H|D|NE|F|-2|G|-2|J|Y8]]]|K|$4|L|M|@$1D|19|O|$P|NF]|1F|-4|R|S|4|N]|$1D|19|O|$P|NG]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|3A|Y|19|10|-1]]]|11|-5]|$0|NH|2|NI|4|5|6|NJ|8|-1|9|$4|A|B|@$4|C|D|NK|F|-2|G|-2]|$4|H|D|NL|F|-2|G|-2|J|Y9]]]|K|$4|L|M|@$1D|19|O|$P|NM]|1F|-4|R|S|4|N]|$1D|19|O|$P|NN]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|3A|Y|19|10|-1]]]|11|-5]|$0|NO|2|NP|4|5|6|NQ|8|-1|9|$4|A|B|@$4|C|D|NR|F|-2|G|-2]|$4|H|D|NS|F|-2|G|-2|J|YA]]]|K|$4|L|M|@$4|N|O|$P|NT]|R|S|T|@]]]]|U|$4|L|M|@$4|V|W|5N|Y|Z|10|-1]]]|11|-5]|$0|NU|2|NV|4|FM|6|NW|8|-1|9|$4|A|B|@$4|C|D|NX]]]|K|$4|FP]|U|$4|L|M|@$4|V|W|NY|Y|NZ|10|-2]]]|11|-5]|$0|O0|2|O1|4|5|6|O2|8|-1|9|$4|A|B|@$4|C|D|O3]]]|K|$4|L|M|@$O|$P|O4]|R|S|4|N]]]|U|$4|L|M|@$4|V|W|A4|Y|Z|10|-1]]]|11|-5]|$0|O5|2|O6|4|5|6|O7|8|-1|9|$4|A|B|@$4|C|D|O8|F|-2|G|-2]|$4|H|D|O9|F|-2|G|-2|J|YB]]]|K|$4|L|M|@$1D|19|O|$P|OA]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|3V|Y|9Y|10|-1]]]|11|-5]|$0|OB|2|OC|4|5|6|OD|8|-1|9|$4|A|B|@$4|C|D|OE|F|-2|G|-2]|$4|H|D|OF|F|-2|G|-2|J|YC]]]|K|$4|L|M|@$4|N|O|$P|OG]|R|S|T|@]]]]|U|$4|L|M|@$4|V|W|5T|Y|19|10|-1]]]|11|-5]|$0|OH|2|OI|4|5|6|OJ|8|-1|9|$4|A|B|@$4|C|D|OK|F|-2|G|-2]|$4|H|D|OL|F|-2|G|-2|J|YD]]]|K|$4|L|M|@$4|N|O|$P|OM]|R|S|T|@]]|$1D|19|O|$P|ON]|1F|-4|R|S|4|N]|$1D|19|O|$P|OO]|1F|-4|R|S|4|N]|$1D|19|O|$P|OP]|1F|-4|R|S|4|N]|$1D|19|O|$P|OQ]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|4T|Y|Z|10|-1]]]|11|-5]|$0|OR|2|OS|4|5|6|OT|8|-1|9|$4|A|B|@$4|C|D|OU|F|-2|G|-2]|$4|H|D|OV|F|-2|G|-2|J|YE]]]|K|$4|L|M|@$1D|19|O|$P|OW]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|18|Y|19|10|-1]]]|11|-5]|$0|OX|2|OY|4|5|6|OZ|8|-1|9|$4|A|B|@$4|C|D|OY|F|-2|G|-2]|$4|H|D|OY|F|-2|G|-2|J|YF]]]|K|$4|L|M|@$1D|19|O|$P|P0]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|54|Y|19|10|-1]]]|11|-5]|$0|P1|2|P2|4|5|6|P3|8|-1|9|$4|A|B|@$4|C|D|P2|F|-2|G|-2]|$4|H|D|P2|F|-2|G|-2|J|YG]]]|K|$4|L|M|@$1D|19|O|$P|P4]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|BK|Y|19|10|-1]]]|11|-5]|$0|P5|2|P6|4|5|6|P7|8|-1|9|$4|A|B|@$4|C|D|P6|F|-2|G|-2]|$4|H|D|P6|F|-2|G|-2|J|YH]]]|K|$4|L|M|@$1D|19|O|$P|P8]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|69|Y|19|10|-1]]]|11|-5]|$0|P9|2|PA|4|5|6|PB|8|-1|9|$4|A|B|@$4|C|D|PC|F|-2|G|-2]|$4|H|D|PD|F|-2|G|-2|J|YI]]]|K|$4|L|M|@$1D|19|O|$P|PE]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|5A|Y|19|10|-1]]]|11|-5]|$0|PF|2|PG|4|23|6|24|8|-1|9|$4|25|26|$2|27|28|@]|29|$P|PH]|P|PI]|2C|@]|2D|$0|PF|2|PG|4|23|6|24|8|-1|9|$4|A|B|@$4|2E|26|$2|27|P|PJ]|2D|$0|PF|2|PG|4|23|6|24|8|-1|9|$4|2G|26|$2|27|P|PK]|2I|-2]|K|$4|2J|2K|YJ|2L|YK|2M|-1]|U|$4|1U|M|@$4|L|M|@$4|V|W|8K|Y|19|10|-1]]]|$4|L|M|@$1D|19|4|1W|R|S|1F|-4|O|$P|B5|2O|2P]]|$1D|19|4|1W|R|S|1F|-4|O|$P|B6|2O|2P]]|$1D|19|4|1W|R|S|1F|-4|O|$P|B7|2O|2P]]|$1D|19|4|1W|R|S|1F|-4|O|$P|B8|2O|2P]]|$1D|19|4|1W|R|S|1F|-4|O|$P|B9|2O|2P]]|$1D|19|4|1W|R|S|1F|-4|O|$P|BA|2O|2P]]]]]]|11|2Q]]|$4|A|B|@$4|C|D|PG|F|-2|G|-2]|$4|H|D|PG|F|-2|G|-2|J|YL]]]]]|K|$4|L|M|@$4|N|O|$P|PL]|R|S|2S|2T|T|@]]|$4|2U|O|$P|PM]|R|S|2S|2T|T|@2W]]|$4|2U|O|$P|PN]|R|S|2S|2Y|T|@2W]]]]|U|$4|L|M|@$4|V|W|8K|Y|19|10|-1]]]|11|2Z]]|K|$4|2J|2K|YM|2L|YN]|U|$4|1U|M|@$4|L|M|@$4|V|W|8K|Y|19|10|-1]]]|$4|1U|M|@$4|1W|O|$P|PO]|R|S|2S|2Y]|$4|1W|O|$P|PP]|R|S|2S|2T]]]]]|11|32]|$0|PQ|2|PR|4|5|6|PS|8|-1|9|$4|A|B|@$4|C|D|PR|F|-2|G|-2]|$4|H|D|PR|F|-2|G|-2|J|YO]]]|K|$4|L|M|@$1D|19|O|$P|PT]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|BK|Y|19|10|-1]]]|11|-5]|$0|PU|2|PV|4|5|6|PW|8|-1|9|$4|A|B|@$4|C|D|PV|F|-2|G|-2]|$4|H|D|PV|F|-2|G|-2|J|YP]]]|K|$4|L|M|@$1D|19|O|$P|PX]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|40|Y|19|10|-1]]]|11|-5]|$0|PY|2|PZ|4|5|6|Q0|8|-1|9|$4|A|B|@$4|C|D|Q1]|$4|H|D|Q2|J|YQ]]]|K|$4|L|M|@$1D|19|O|$P|Q3]|R|S|4|N]]]|U|$4|L|M|@$4|V|W|X|Y|19|10|-1]]]|11|-5]|$0|Q4|2|Q5|4|5|6|Q6|8|-1|9|$4|A|B|@$4|C|D|Q7]]]|K|$4|L|M|@$4|N|O|$P|Q8]|R|S]]]|U|$4|V|W|3V|Y|Z|10|-1]|11|-5]|$0|Q9|2|QA|4|5|6|QB|8|-1|9|$4|A|B|@$4|C|D|QC|F|-2|G|-2]|$4|H|D|QD|F|-2|G|-2|J|YR]]]|K|$4|L|M|@$1D|19|O|$P|QE]|1F|-4|R|S|4|N]|$1D|19|O|$P|QF]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|CB|Y|19|10|-1]]]|11|-5]|$0|QG|2|QH|4|5|6|QI|8|-1|9|$4|A|B|@$4|C|D|QH|F|-2|G|-2]|$4|H|D|QH|F|-2|G|-2|J|YS]]]|K|$4|L|M|@$1D|19|O|$P|QJ]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|54|Y|19|10|-1]]]|11|-5]|$0|QK|2|QL|4|5|6|QM|8|-1|9|$4|A|B|@$4|C|D|QL|F|-2|G|-2]|$4|H|D|QL|F|-2|G|-2|J|YT]]]|K|$4|L|M|@$1D|19|O|$P|QN]|1F|-4|R|S|4|N]|$1D|19|O|$P|QO]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|5A|Y|19|10|-1]]]|11|-5]|$0|QP|2|QQ|4|5|6|QR|8|-1|9|$4|A|B|@$4|C|D|-4|CL|$CM|@$4|CN|2|QS]|$4|CP|1F|1X]]]]]]|K|$4|L|M|@$4|N|O|$P|QT]|R|S]|$4|N|O|$P|QU]|R|S]]]|U|$4|V|W|CR|Y|AL|10|-1]|11|-5]|$0|QV|2|QW|4|5|6|QX|8|-1|9|$4|A|B|@$4|C|D|QY|F|-2|G|-2]|$4|H|D|QZ|F|-2|G|-2|J|YU]]]|K|$4|L|M|@$1D|19|O|$P|R0]|1F|-4|R|S|4|N]|$1D|19|O|$P|R1]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|3A|Y|19|10|-1]]]|11|-5]|$0|R2|2|R3|4|5|6|R4|8|-1|9|$4|A|B|@$4|C|D|R5|F|-2|G|-2]|$4|H|D|R6|F|-2|G|-2|J|YV]]]|K|$4|L|M|@$1D|19|O|$P|HB]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|R7|Y|19|10|-1]]]|11|-5]|$0|R8|2|R9|4|23|6|24|8|-1|9|$4|25|26|$2|R9|28|@]|29|$P|RA]|P|-4]|2C|@]|2D|$0|R8|2|R9|4|23|6|24|8|-1|9|$4|A|B|@$4|2E|26|$2|R9|P|-4]]]]|K|$4|L|M|@$4|N|O|$P|RB]|R|S|2S|2T|T|@]]|$4|2U|O|$P|RC]|R|S|2S|2T|T|@2W]]]]|U|$4|L|M|@$4|V|W|3A|Y|19|10|-1]]]|11|2Z]]|K|$4|2J|2K|YW|2L|YX]|U|$4|1U|M|@$4|L|M|@$4|V|W|3A|Y|19|10|-1]]]|$4|1U|M|@$4|1W|O|$P|RD]|R|S|2S|2T]]]]]|11|32]|$0|RE|2|RF|4|5|6|RG|8|-1|9|$4|A|B|@$4|C|D|RH|F|-2|G|-2]|$4|H|D|RI|F|-2|G|-2|J|YY]]]|K|$4|L|M|@$1D|19|O|$P|RJ]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|54|Y|19|10|-1]]]|11|-5]|$0|RK|2|RL|4|5|6|RM|8|-1|9|$4|A|B|@$4|C|D|RN|F|-2|G|-2]|$4|H|D|RO|F|-2|G|-2|J|YZ]]]|K|$4|L|M|@$1D|19|O|$P|RP]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|LJ|Y|19|10|-1]]]|11|-5]|$0|RQ|2|RR|4|5|6|RS|8|-1|9|$4|A|B|@$4|C|D|RT|F|-2|G|-2]|$4|H|D|RU|F|-2|G|-2|J|Z0]]]|K|$4|L|M|@$1D|19|O|$P|RV]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|5T|Y|19|10|-1]]]|11|-5]|$0|RW|2|RX|4|5|6|RY|8|-1|9|$4|A|B|@$4|C|D|RZ|F|-2|G|-2]|$4|H|D|S0|F|-2|G|-2|J|Z1]]]|K|$4|L|M|@$1D|19|O|$P|S1]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|54|Y|19|10|-1]]]|11|-5]|$0|S2|2|S3|4|5|6|S4|8|-1|9|$4|A|B|@$4|C|D|S5|F|-2|G|-2]|$4|H|D|S6|F|-2|G|-2|J|Z2]]]|K|$4|L|M|@$4|N|O|$P|GU]|R|S|T|@]]]]|U|$4|L|M|@$4|V|W|JG|Y|Z|10|-1]]]|11|-5]|$0|S7|2|S8|4|5|6|S9|8|-1|9|$4|A|B|@$4|C|D|SA]]]|K|$4|L|M|@$4|N|O|$P|SB]|R|S]]]|U|$4|L|M|@$4|V|W|6J|Y|19|10|-1]]]|11|-5]|$0|SC|2|SD|4|5|6|SE|8|-1|9|$4|A|B|@$4|C|D|SF|F|-2|G|-2]|$4|H|D|SG|F|-2|G|-2|J|Z3]]]|K|$4|L|M|@$4|N|O|$P|SH]|R|S|T|@]]]]|U|$4|L|M|@$4|V|W|1N|Y|19|10|-1]]]|11|-5]|$0|SI|2|SJ|4|23|6|24|8|-1|9|$4|25|26|$2|B0|28|@]|29|$P|SK]|P|SL]|2C|@]|2D|$0|SI|2|SM|4|23|6|24|8|-1|9|$4|A|B|@$4|2E|26|$2|B0|P|SN]|2D|$0|SI|2|SO|4|23|6|24|8|-1|9|$4|2G|26|$2|B0|P|SP]|2I|-2]|K|$4|2J|2K|Z4|2L|Z5|2M|-1]|U|$4|1U|M|@$4|L|M|@$4|V|W|CB|Y|19|10|-1]]]|$4|1U|M|@$1D|19|4|1W|R|S|1F|-4|O|$P|SQ|2O|2P]]]]]]|11|2Q]]|$4|A|B|@$4|C|D|SR|F|-2|G|-2]|$4|H|D|SS|F|-2|G|-2|J|Z6]]]]]|K|$4|L|M|@$4|N|O|$P|ST]|R|S|2S|2T|T|@]]|$4|2U|O|$P|SU]|R|S|2S|2T|T|@2W]]|$4|2U|O|$P|SV]|R|S|2S|2Y|T|@2W]]]]|U|$4|L|M|@$4|V|W|CB|Y|19|10|-1]]]|11|2Z]]|K|$4|2J|2K|Z7|2L|Z8]|U|$4|1U|M|@$4|L|M|@$4|V|W|CB|Y|19|10|-1]]]|$4|1U|M|@$4|1W|O|$P|SW]|R|S|2S|2Y]|$4|1W|O|$P|SX]|R|S|2S|2T]]]]]|11|32]|$0|SY|2|SZ|4|23|6|24|8|-1|9|$4|25|26|$2|27|28|@]|29|$P|T0]|P|T1]|2C|@]|2D|$0|SY|2|SZ|4|23|6|24|8|-1|9|$4|A|B|@$4|2E|26|$2|27|P|T2]|2D|$0|SY|2|SZ|4|23|6|24|8|-1|9|$4|2G|26|$2|27|P|T3]|2I|-2]|K|$4|2J|2K|Z9|2L|ZA|2M|-1]|U|$4|1U|M|@$4|L|M|@$4|V|W|40|Y|19|10|-1]]]|$4|L|M|@$1D|19|4|1W|R|S|1F|-4|O|$P|B5|2O|2P]]|$1D|19|4|1W|R|S|1F|-4|O|$P|B6|2O|2P]]|$1D|19|4|1W|R|S|1F|-4|O|$P|B7|2O|2P]]|$1D|19|4|1W|R|S|1F|-4|O|$P|B8|2O|2P]]|$1D|19|4|1W|R|S|1F|-4|O|$P|B9|2O|2P]]|$1D|19|4|1W|R|S|1F|-4|O|$P|BA|2O|2P]]]]]]|11|2Q]]|$4|A|B|@$4|C|D|SZ|F|-2|G|-2]|$4|H|D|SZ|F|-2|G|-2|J|ZB]]]]]|K|$4|L|M|@$4|N|O|$P|T4]|R|S|2S|2T|T|@]]|$4|2U|O|$P|T5]|R|S|2S|2T|T|@2W]]|$4|2U|O|$P|T6]|R|S|2S|2Y|T|@2W]]]]|U|$4|L|M|@$4|V|W|40|Y|19|10|-1]]]|11|2Z]]|K|$4|2J|2K|ZC|2L|ZD]|U|$4|1U|M|@$4|L|M|@$4|V|W|40|Y|19|10|-1]]]|$4|1U|M|@$4|1W|O|$P|T7]|R|S|2S|2Y]|$4|1W|O|$P|T8]|R|S|2S|2T]]]]]|11|32]|$0|T9|2|TA|4|5|6|TB|8|-1|9|$4|A|B|@$4|C|D|TC|F|-2|G|-2]|$4|H|D|TD|F|-2|G|-2|J|ZE]]]|K|$4|L|M|@$4|N|O|$P|TE]|R|S|T|@]]]]|U|$4|L|M|@$4|V|W|JG|Y|Z|10|-1]]]|11|-5]|$0|TF|2|TG|4|5|6|TH|8|-1|9|$4|A|B|@$4|C|D|TG|F|-2|G|-2]|$4|H|D|TG|F|-2|G|-2|J|ZF]]]|K|$4|L|M|@$1D|19|O|$P|TI]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|40|Y|19|10|-1]]]|11|-5]|$0|TJ|2|TK|4|5|6|TL|8|-1|9|$4|A|B|@$4|C|D|TM|F|-2|G|-2]|$4|H|D|TN|F|-2|G|-2|J|ZG]]]|K|$4|L|M|@$1D|19|O|$P|TO]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|1N|Y|19|10|-1]]]|11|-5]|$0|TP|2|TQ|4|FM|6|TR|8|-1|9|$4|A|B|@$4|C|D|TS]]]|K|$4|FP]|U|$4|L|M|@$4|V|W|TT|Y|19|10|-2]]]|11|-5]|$0|TU|2|TV|4|5|6|TW|8|-1|9|$4|A|B|@$4|C|D|TV|F|-2|G|-2]|$4|H|D|TV|F|-2|G|-2|J|ZH]]]|K|$4|L|M|@$1D|19|O|$P|TX]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|8K|Y|19|10|-1]]]|11|-5]|$0|TY|2|TZ|4|5|6|U0|8|-1|9|$4|A|B|@$4|C|D|U1]]]|K|$4|L|M|@$4|N|O|$P|U2]|R|S]]]|U|$4|L|M|@$4|V|W|4Z|Y|19|10|-1]]]|11|-5]|$0|U3|2|U4|4|5|6|U5|8|-1|9|$4|A|B|@$4|C|D|U6|F|-2|G|-2]|$4|H|D|U6|F|-2|G|-2|J|ZI]]]|K|$4|L|M|@$1D|19|O|$P|U7]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|4A|Y|19|10|-1]]]|11|-5]|$0|U8|2|U9|4|5|6|UA|8|-1|9|$4|A|B|@$4|C|D|-4|CL|$CM|@$4|CN|2|UB]|$4|CP|1F|1X]]]]]]|K|$4|L|M|@$4|N|O|$P|UC]|R|S]]]|U|$4|V|W|4M|Y|Z|10|-1]|11|-5]|$0|UD|2|UE|4|5|6|UF|8|-1|9|$4|A|B|@$4|C|D|UG|F|-2|G|-2]|$4|H|D|UH|F|-2|G|-2|J|ZJ]]]|K|$4|L|M|@$1D|19|O|$P|UI]|1F|-4|R|S|4|N]]]|U|$4|L|M|@$4|V|W|5N|Y|19|10|-1]]]|11|-5]|$0|UJ|2|UK|4|5|6|UL|8|-1|9|$4|A|B|@$4|C|D|UM|F|-2|G|-2]|$4|H|D|UN|F|-2|G|-2|J|ZK]]]|K|$4|L|M|@$4|N|O|$P|UO]|R|S|T|@]]]]|U|$4|L|M|@$4|V|W|X|Y|19|10|-1]]]|11|-5]]",
    "isTransformed": true
};

var ctCustomCode_PrePCC = {};

(function() {
    var ctVEconfig = {
        VE_BASE_URL: "https://ve-cec-na1.app.clicktale.com/",
        VE_PROXY_BASE_URL: "https://vep-cec-na1.app.clicktale.com/"
    };
    Function.prototype.bind || (Function.prototype.bind = function(t) {
        if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");

        function e() {}

        function n() {
            return r.apply(this instanceof e ? this : t, o.concat(Array.prototype.slice.call(arguments)))
        }
        var o = Array.prototype.slice.call(arguments, 1),
            r = this;
        return this.prototype && (e.prototype = this.prototype), n.prototype = new e, n
    }), "function" != typeof Object.create && (Object.create = function() {
        function r() {}
        var a = Object.prototype.hasOwnProperty;
        return function(t) {
            if ("object" != typeof t) throw TypeError("Object prototype may only be an Object or null");
            r.prototype = t;
            var e = new r;
            if (r.prototype = null, 1 < arguments.length) {
                var n = Object(arguments[1]);
                for (var o in n) a.call(n, o) && (e[o] = n[o])
            }
            return e
        }
    }()), Array.prototype.findIndex || Object.defineProperty(Array.prototype, "findIndex", {
        value: function(t) {
            if (null == this) throw new TypeError('"this" is null or not defined');
            var e = Object(this),
                n = e.length >>> 0;
            if ("function" != typeof t) throw new TypeError("predicate must be a function");
            for (var o = arguments[1], r = 0; r < n;) {
                var a = e[r];
                if (t.call(o, a, r, e)) return r;
                r++
            }
            return -1
        },
        configurable: !0,
        writable: !0
    });
    var logger = function() {
        for (var t = {}, e = !(!window.localStorage || "true" !== localStorage.getItem("ctRuleEngineDebug")), n = window.location.search.split("&"), o = [], r = 0; r < n.length; r++) /^\??ctRuleEngine=/.test(n[r]) && o.push(n[r]);

        function a() {
            var t = Array.prototype.slice.call(arguments);
            e && (window.console && window.console.log ? (t.unshift((new Date).toJSON() + " - RuleEngine :"), window.console.log.apply(window.console, t)) : window.alert && window.alert(t.join(" ")))
        }
        return o.length && (e = "true" === o[0].split("=").splice(1)[0], window.localStorage && localStorage.setItem("ctRuleEngineDebug", e)), t.log = function() {
            a.apply(this, arguments)
        }, t.error = function(t) {
            a.apply(this, arguments)
        }, t
    }();

    function CTSimplePromise() {
        var n = [],
            o = !1,
            r = void 0;
        this.resolve = function(t) {
            if (!o) {
                r = t, o = !0;
                for (var e = 0; e < n.length; e++) n[e](t);
                n = []
            }
        }, this.then = function(t) {
            o ? t(r) : n.push(t)
        }
    }

    function CTAnyPromise(t) {
        for (var e = new CTSimplePromise, n = 0; n < t.length; n++) t[n].then(function(t) {
            e.resolve(t)
        });
        return e
    }! function() {
        if (!window.ct || !ct.ElementAddressing) {
            var t, u = !0,
                m = null,
                d = !1,
                a = this,
                f = {
                    Z: {}
                },
                n = (t = document.documentElement).compareDocumentPosition || t.contains ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t;
                    return t === e || n.contains && n.contains(e) || t.compareDocumentPosition && 16 & t.compareDocumentPosition(e)
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return u;
                    return d
                },
                l = Array.prototype.indexOf ? function(t, e) {
                    return t.indexOf(e)
                } : function(t, e) {
                    for (var n = t.length, o = 0; o < n; o++)
                        if (t[o] === e) return o;
                    return -1
                },
                e = Array.prototype.every ? function(t, e) {
                    return t.every(e)
                } : function(t, e) {
                    for (var n = t.length, o = 0; o < n; o++)
                        if (!e(t[o])) return d;
                    return u
                };
            f.version = "3.0.23", f.p = d, f.h = {}, f.f = {}, f.A = function(t, e) {
                e = !!e, f.j = t, /complete|interactive/.test(document.readyState) ? f.m(t, e) : t.document.addEventListener ? t.document.addEventListener("DOMContentLoaded", function() {
                    f.m(t, e)
                }, d) : document.attachEvent("onreadystatechange", function() {
                    "complete" === document.readyState && f.m(t, e)
                })
            }, f.m = function(t, e) {
                e && f.z(f.f, t.document.documentElement), f.p = u
            }, f.b = function(t) {
                f.j.console && f.debug && f.j.console.log(t)
            }, f.z = function(t, e) {
                var n = e.firstChild;
                for (f.W(t, e); n; n = n.nextSibling) 1 === n.nodeType && f.z(t, n)
            }, f.V = function(t) {
                return t in f.h && f.h[t]
            }, f.o = function(t, e) {
                f.q(t).CustomID = e
            }, f.O = function(t, e) {
                f.o(t, e), f.f[e] = t
            }, f.D = function(t, e) {
                e in f.f ? (f.h[e] = u, f.b("duplicate registration of custom id " + e + " were found on multiple elements")) : (f.o(t, e), f.p && (f.f[e] = t))
            }, f.Q = f.d, f.d = function(t) {
                return f.q(t).CustomID
            }, f.q = function(t) {
                var e = t.ClickTale;
                return e || (e = {}, t.ClickTale = e), e
            }, f.W = function(t, e) {
                var n = f.d(e);
                n && (n in t ? (f.h[n] = u, f.b("duplicate registration of custom id " + n + "were found on multiple elements")) : t[n] = e)
            }, f.H = function(t, e, n) {
                var o = !(t[0] instanceof Array);
                return o && (t = [t]), t = r(t, function(t) {
                    return f.I(t, e, n)
                }), o ? t[0] : t
            }, f.F = function(t, e) {
                var n = !(t[0] instanceof Array);
                n && (t = [t]);
                var o = r(t, function(t) {
                    return f.K(t, e)
                });
                return n ? o[0] : o
            }, f.I = function(t, e, n) {
                return (t = f.r(e, t)).a && 0 < t.e.length && (t.a = f.l(t.e, t.a)), !n && t.a && f.v(t.a) ? m : t.a
            }, f.K = function(t, e) {
                var n = f.r(e, t);
                if (n.a && 0 < n.e.length && (n.a = f.l(n.e, n.a)), n.a) {
                    var o = {};
                    return o.dom = n.a, o.isHidden = f.v(n.a), o
                }
                return m
            }, f.v = function(t) {
                return "hidden" === f.t(t).visibility.toLowerCase()
            }, f.t = function(t) {
                return f.j.getComputedStyle ? f.j.getComputedStyle(t, m) : t.currentStyle
            }, f.G = function(t) {
                return f.f[t]
            }, f.J = function(t) {
                return !!f.d(t)
            }, f.$ = function(t, e) {
                return f.d(t) === e
            }, f.n = {}, f.i = function(t) {
                return f.n[t] || (f.n[t] = f.B(t)), f.n[t]
            }, f.B = function(t) {
                return (t.charCodeAt(0) - 64 & 31) + ((t.charCodeAt(1) - 64 & 28) << 3) + ((t.charCodeAt(2) - 64 & 30) << 7)
            }, f.k = function(t) {
                return (t.charCodeAt(0) - 64 & 7) + ((t.charCodeAt(0) - 64 & 16) >> 1) + ((t.charCodeAt(1) - 64 & 4) << 2) + ((t.charCodeAt(3) - 64 & 4) << 3)
            }, f.u = function(t, e) {
                var n = e.elementID,
                    o = e.customID,
                    r = f.c(t, "id"),
                    a = f.d(t);
                return !f.g([o, a]) && o !== a || !f.g([n, r]) && n !== r
            }, f.X = function(t, e) {
                var n = e.name,
                    o = f.c(t, "name");
                return f.d(t), !f.g([n, o]) && n !== o
            }, f.l = function(t, e, n) {
                var o, r = 0,
                    a = m;
                o = d;
                for (var i = m, c = m, l = t.length, s = 0; e && s < l; s++) {
                    for (o = d, c = t[s], a = e.firstChild, r = 0; !o && a; a = a.nextSibling)
                        if (1 === a.nodeType && f.i(a.tagName) === c.tagCode) {
                            if (r === c.index) {
                                if (i = a, !n && (f.u(i, c) || f.X(i, c))) return m;
                                if (e = c.typeCode, o = f.c(i, "type"), !f.g([e, o]) && o && e != f.k(o)) return m;
                                o = u, e = i
                            }
                            r++
                        }
                    if (o === d) return m
                }
                return (o = o && "none" !== f.t(e).display.toLowerCase()) ? e : m
            }, f.c = function(t, e) {
                var n = t.getAttributeNode(e);
                return n ? n.value : m
            }, f.g = function(t) {
                return e(t, function(t) {
                    return !t
                })
            }, f.s = function(t, e) {
                var n = e.customID;
                return n ? f.L(n) : f.M(t, e.elementID)
            }, f.L = function(t) {
                var e;
                return f.V(t) ? f.b("duplicate custom id " + t + " were found on multiple elements") : e = f.G(t), e
            }, f.M = function(t, e) {
                var n, o;
                return e ? (o = f.P(t, e)) && 0 !== o.length ? 1 === o.length ? (n = o[0], f.J(n) ? m : n) : (f.b("duplicate id " + e + " were found on multiple elements."), n) : (f.b("no element with id " + e + " was found."), n) : n
            }, f.P = function(e, n) {
                var o;
                try {
                    (o = e.querySelectorAll("#" + n)).length || (o = e.querySelectorAll("[id='" + n.replace(/'/g, "\\'") + "']"))
                } catch (t) {
                    o = e.querySelectorAll("[id='" + n.replace(/'/g, "\\'") + "']")
                }
                return o
            }, f.r = function(t, e) {
                for (var n, o, r, a = e.length, i = a, c = {}, l = t.ownerDocument; 0 < i; i--)
                    if (r = e[i - 1], !(o = f.s(l, r)) && (n = r.name) && i === a && (o = f.S(l, n, e, i)) && f.u(o, r) && (o = m), o) return n = e.slice(i, a), c.e = n, c.a = o, c;
                return c.e = e, c.a = t, c
            }, f.S = function(t, e, n, o) {
                var r, a = m;
                o = n.slice(0, o - 1);
                return (r = f.T(t, o)) ? a = f.N(t, e, r, n) : f.b("could not resolve form. form doesn't have an anchor."), a
            }, f.N = function(t, e, n, o) {
                var r;
                if (1 < (t = t.getElementsByName(e)).length) {
                    if (t = function(t, e) {
                            var n;
                            if (t.filter) n = t.filter(e, void 0);
                            else {
                                n = [];
                                for (var o = t.length, r = window, a = 0; a < o; a++) {
                                    var i = t[a];
                                    e.call(r, i, a) && n.push(i)
                                }
                            }
                            return n
                        }(t, function(t) {
                            return f.w(n, t)
                        }), f.C(t)) return e = o[o.length - 1].index, f.R(t, e);
                    f.b("duplicate name " + e + " found on multiple non radio elements.")
                } else 1 === t.length && (o = t[0], f.w(n, o) ? r = o : f.b("could not resolve nested element with name " + e + " in form."));
                return r
            }, f.R = function(t, e) {
                for (var n, o, r, a = [], i = d, c = 0; c < t.length; c++)
                    if (o = (r = t[c]).parentNode, -1 === l(a, o) && (a.push(o), (o = o.getElementsByTagName(r.tagName)).length - 1 >= e)) {
                        if (i) return m;
                        n = o[e], i = u
                    }
                return n
            }, f.C = function(t) {
                for (var e = 0; e < t.length; e++)
                    if (!f.U(t[e])) return d;
                return u
            }, f.U = function(t) {
                return !!(t = f.c(t, "type")) && "radio" === t.toLowerCase()
            }, f.w = function(t, e) {
                return n(t, e)
            }, f.T = function(t, e) {
                for (var n, o = e.length; 0 < o; o--)
                    if (n = e[o - 1], (n = f.s(t, n)) && 1 === n.nodeType && "form" === n.tagName.toLowerCase()) return n;
                return m
            }, f.Y = function(t, e) {
                var n, o = 0,
                    r = 0,
                    a = m,
                    i = [],
                    c = t;
                if (!e) return f.b("Base element was not specified"), i;
                for (; c && c !== e;)
                    if (1 !== c.nodeType) c = c.parentNode;
                    else {
                        for (r = 0, a = {}, t = c, o = f.i(c.nodeName), a.tagCode = o, (n = f.d(t)) && (a.customID = n), (n = f.c(t, "id")) && (a.elementID = n), (n = f.c(t, "name")) && (a.name = n), (n = f.c(t, "type")) && (a.typeCode = f.k(n)), n = c; n = n.previousSibling;) f.i(n.nodeName) === o && r++;
                        a.index = r, c = c.parentNode, i.push(a)
                    }
                return i.reverse(), i
            }, o("ct.ElementAddressing.bootstrap", f.A), o("ct.ElementAddressing.elementFromPath", f.H), o("ct.ElementAddressing.pathFromElement", f.Y), o("ct.ElementAddressing.elementAndVisibilityFromPath", f.F), o("ct.ElementAddressing.setCustomElementID", f.D), o("ct.ElementAddressing.getCustomElementID", f.Q), o("ct.ElementAddressing.forceSetCustomElementID", f.O), o("ct.ElementAddressing.calcTagCode", f.i), o("ct.ElementAddressing.calcTypeCode", f.k), o("ct.ElementAddressing.findByPath", f.l), o("ct.ElementAddressing.version", f.version)
        }

        function o(t, e) {
            var n, o = t.split("."),
                r = a;
            o[0] in r || !r.execScript || r.execScript("var " + o[0]);
            for (; o.length && (n = o.shift());) o.length || void 0 === e ? r = r[n] ? r[n] : r[n] = {} : r[n] = e
        }

        function r(t, e) {
            var n;
            if (t.map) n = t.map(e, void 0);
            else {
                n = [];
                for (var o = t.length, r = window, a = 0; a < o; a++) n.push(e.call(r, t[a], a))
            }
            return n
        }
    }();
    var ctRecordingPromise = new CTSimplePromise,
        ctMonitorReadyPromise = new CTSimplePromise,
        ctAnyRecorderReadyPromise = new CTAnyPromise([ctRecordingPromise, ctMonitorReadyPromise]),
        CTLogicalPageEvent = function() {
            var e = [],
                n = !1,
                o = !0,
                r = !0;

            function a(t) {
                if ("function" == typeof ClickTaleIsRecording && !0 === ClickTaleIsRecording()) t();
                else {
                    t == i && (o = !1);
                    var e = window.ClickTaleOnRecording || function() {};
                    window.ClickTaleOnRecording = function() {
                        return t(), e.apply(this, arguments)
                    }
                }
            }

            function i() {
                for (var t = 0; t < e.length; t++) e[t]()
            }
            return ctAnyRecorderReadyPromise.then(function() {
                function t() {
                    if (r) {
                        r = !1;
                        var t = window.ClickTaleLogical;
                        "function" == typeof t && (window.ClickTaleLogical = function() {
                            n = !0, t.apply(this, arguments)
                        })
                    }
                }
                if (window.ClickTaleMonitor) {
                    var e = window.ClickTaleMonitor.restart;
                    ClickTaleMonitor.restart = function() {
                        "function" == typeof e && e.apply(this, arguments), setTimeout(function() {
                            n ? (n = !1, o && a(i)) : i()
                        }, 300)
                    }
                }
                "function" == typeof ClickTaleIsRecording && !0 === ClickTaleIsRecording() && window.ClickTaleLogical ? t() : a(t)
            }), {
                subscribe: function(t) {
                    e.push(t)
                }
            }
        }(),
        exports = {},
        rulesEngine = exports;

    function Rule(t) {
        void 0 !== t.name && (logger.log("Rule name: ", t.name), this.name = t.name);
        var e = void 0 !== t.states ? t.states : t.conditionData.states,
            n = void 0 !== t.triggers ? t.triggers : t.conditionData.triggers,
            o = actionsFactory.construct(t.action, t),
            r = statesFactory.construct(e),
            a = observablesFactory.construct(n, r);
        a && a.subscribe(function(t) {
            if (r.evaluate()) return o.execute(t)
        })
    }

    function Observable() {
        this.subscribers = []
    }
    Observable.prototype.subscribe = function(t) {
        this.subscribers.push(t)
    }, Observable.prototype.notify = function(n) {
        var o;
        return this.subscribers.forEach(function(t) {
            var e = t(n);
            null != e && (o = e)
        }), o
    };
    var observablesFactory = {
        construct: function(t, e) {
            return null == t ? null : this["construct" + t.type.replace("Condition", "")](t, e)
        }
    };

    function State(t) {}
    State.prototype.evaluate = function(t) {};
    var statesFactory = {
            construct: function(t) {
                return this["construct" + t.type.replace("Condition", "")](t)
            }
        },
        actionsFactory = {
            construct: function(t, e) {
                return this["construct" + t.type.replace("Action", "")](t, e)
            }
        };

    function Action(t) {}
    Action.prototype.execute = function(t) {};
    var ctSelectorUtils = function() {
        var a = {};

        function n(t) {
            var e = [];
            if (t.elementAddressing && "undefined" != typeof ct && void 0 !== ct.ElementAddressing && void 0 !== ct.ElementAddressing.elementFromPath) {
                var n = ct.ElementAddressing.elementFromPath(t.elementAddressing, document.body, !0);
                n && e.push(n)
            } else if (t.querySelector) try {
                e = Array.prototype.slice.call(document.querySelectorAll(t.querySelector))
            } catch (t) {}
            return e
        }

        function i(t, e) {
            var n, o = t.length;
            for (n = 0; n < o; n += 1)
                if (t[n] === e) return !0;
            return !1
        }
        var o = ["DIV", "SPAN", "A", "LABEL"];
        return a.isElementVisible = function(t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length) && (null != (e = t) && "object" == typeof e && (o.findIndex(function(t) {
                return t == e.tagName
            }) < 0 || "" != e.innerHTML.trim()));
            var e
        }, a.bindEventHandler = function(t, e, n) {
            var o = function(t) {
                switch (Object.keys(t)[0]) {
                    case "elementAddressing":
                        return JSON.stringify(t.elementAddressing);
                    case "querySelector":
                        return t.querySelector
                }
            }(e.ctSelector);
            t[o] = t[o] || [], t[o].push({
                callback: n,
                triggerData: e
            })
        }, a.isAncestor = function(t, e) {
            return null != a.getAncestorDomElement(t, e)
        }, a.getAncestorDomElement = function(t, e) {
            for (var n = !1, o = e, r = a.getDOMelements(t); !n && "HTML" !== o.tagName && o.parentElement;)(n = i(r, o)) || (o = o.parentElement);
            return n ? o : null
        }, a.getDOMelements = function(t) {
            if (Array.isArray(t)) {
                var e = [];
                return t.forEach(function(t) {
                    e = e.concat(n(t))
                }), e
            }
            return n(t)
        }, a.getFirstDOMelement = function(t) {
            if (t && null != t) {
                var e = n(t);
                if (null != e && 0 < e.length) return e[0]
            }
            return null
        }, a.compareData = function(t, e, n) {
            if (void 0 === t || null == t || void 0 === e || null == e) return !1;
            switch (void 0 === n && (n = "Equals"), n) {
                case "Equals":
                    return t.toString() === e.toString();
                case "NotEquals":
                    return t.toString() != e.toString();
                case "StartsWith":
                    return 0 == t.toString().indexOf(e.toString());
                case "EndsWith":
                    return 0 <= t.toString().indexOf(e.toString(), t.toString().length - e.toString().length);
                case "Contains":
                    return 0 <= t.toString().indexOf(e.toString());
                case "NotStartsWith":
                    return 0 != t.toString().indexOf(e.toString());
                case "NotEndsWith":
                    return t.toString().indexOf(e.toString(), t.toString().length - e.toString().length) < 0;
                case "NotContains":
                    return t.toString().indexOf(e.toString()) < 0;
                case "Greater":
                    return Number(t) > Number(e);
                case "Less":
                    return Number(t) < Number(e);
                case "GreaterOrEquals":
                    return Number(t) >= Number(e);
                case "LessOrEquals":
                    return Number(t) <= Number(e)
            }
            return !1
        }, a
    }();

    function ClickObservable(t) {
        Observable.call(this);
        var e = this;
        e.triggerData = t, ctSelectorUtils.bindEventHandler(clickHandlers, t, function(t) {
            e.notify({
                domElement: t,
                triggerSource: "mouse click",
                domType: e.triggerData.domType
            })
        })
    }
    ClickObservable.prototype = Object.create(Observable.prototype), ClickObservable.prototype.constructor = ClickObservable, observablesFactory.constructClick = function(t) {
        return new ClickObservable(t)
    }, document.addEventListener && setTimeout(function() {
        for (var e in clickHandlers)
            if (clickHandlers.hasOwnProperty(e)) {
                var t = clickHandlers[e][0].triggerData;
                if (t && t.ctSelector) {
                    var n = t.ctSelector.querySelector;
                    if (n) try {
                        document.querySelector(n)
                    } catch (t) {
                        "function" == typeof ClickTaleNote && ClickTaleNote("bad selector: " + n), delete clickHandlers[e]
                    }
                }
            }
        document.addEventListener("mousedown", onMouseDown, !1), document.addEventListener("mouseup", onMouseUp, !1)
    }, 0);
    var clickHandlers = {},
        currentMouseDownElement = null;

    function getClosestDomElement(t, e) {
        var n = e,
            o = e,
            r = "";
        if (t.querySelector) r = t.querySelector;
        else if (t.elementAddressing) return ctSelectorUtils.getAncestorDomElement(t, e);
        if (!document.documentElement.contains(n)) return null;
        do {
            if (r && o.matches(r)) return o;
            o = o.parentElement || o.parentNode
        } while (null !== o && 1 === o.nodeType);
        return null
    }

    function onMouseDown(t) {
        currentMouseDownElement = t.target || t.srcElement
    }

    function onMouseUp(t) {
        var e = t.target || t.srcElement;
        if (e == currentMouseDownElement) {
            for (var n in clickHandlers)
                if (clickHandlers.hasOwnProperty(n)) {
                    var o = clickHandlers[n][0].triggerData;
                    if (!(void 0 !== o.excludeTagNames && 0 <= o.excludeTagNames.findIndex(function(t) {
                            return t == e.tagName
                        }))) {
                        var r = getClosestDomElement(o.ctSelector, e);
                        null != r && clickHandlers[n].forEach(function(t) {
                            if (void 0 !== o.value) {
                                var e = {
                                        subType: o.subType,
                                        name: o.name
                                    },
                                    n = dynamicEventNameUtils.getDomElementContent(e, r);
                                if (!ctSelectorUtils.compareData(n, o.value, o.comparisonMode)) return
                            }
                            t.callback.call(null, r)
                        })
                    }
                }
            currentMouseDownElement = null
        } else currentMouseDownElement = null
    }

    function DelayObservable(t) {
        Observable.call(this);
        var e = this;

        function n() {
            setTimeout(function() {
                e.notify()
            }, t)
        }
        onRulesBoundHandlers.push(n), CTLogicalPageEvent.subscribe(n)
    }
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), DelayObservable.prototype = Object.create(Observable.prototype), DelayObservable.prototype.constructor = DelayObservable, observablesFactory.constructDelay = function(t) {
        return new DelayObservable(t.delay)
    };
    var elementDeclarationHandlers = {};

    function ElementDeclarationObservable(t) {
        this.triggerData = t, Observable.call(this);
        var e = this;
        ctSelectorUtils.bindEventHandler(elementDeclarationHandlers, t, function(t) {
            return logger.log("Element declaration event associated with selector: ", e.triggerData.ctSelector), e.notify()
        })
    }

    function EnterClickObservable(t) {
        Observable.call(this);
        var e = this;
        e.triggerData = t, ctSelectorUtils.bindEventHandler(enterClickHandlers, t, function(t) {
            e.notify({
                domElement: t,
                triggerSource: "enter click",
                domType: e.triggerData.domType
            })
        })
    }
    ElementDeclarationObservable.prototype = Object.create(Observable.prototype), ElementDeclarationObservable.prototype.constructor = ElementDeclarationObservable, observablesFactory.constructElementDeclaration = function(t) {
        return new ElementDeclarationObservable(t)
    }, window.ClickTaleSettings = window.ClickTaleSettings || {}, window.ClickTaleSettings.ElementDeclarationAugmentElementPathHandler = function(o) {
        var r;
        for (var t in elementDeclarationHandlers)
            if (elementDeclarationHandlers.hasOwnProperty(t)) {
                var a = elementDeclarationHandlers[t][0].triggerData,
                    i = ctSelectorUtils.getAncestorDomElement(a.ctSelector, o);
                null != i && elementDeclarationHandlers[t].forEach(function(t) {
                    if (void 0 !== a.value) {
                        var e = {
                                subType: a.subType,
                                name: a.name
                            },
                            n = dynamicEventNameUtils.getDomElementContent(e, i);
                        if (!ctSelectorUtils.compareData(n, a.value, a.comparisonMode)) return
                    }
                    r = t.callback.call(null, o) || r
                })
            }
        return null != r ? {
            type: "pathdata",
            data: {
                categoryid: r
            }
        } : null
    }, window.ClickTaleSettings.defineElementDeclarationAugmentElementPathHandler = function() {
        var e = 10,
            n = 0;
        ! function t() {
            n++, "function" == typeof ClickTaleAddAugmentElementPathHandler ? (logger.log("define ElementDeclarationAugmentElementPathHandler"), ClickTaleAddAugmentElementPathHandler("pathdata", window.ClickTaleSettings.ElementDeclarationAugmentElementPathHandler)) : n <= e && setTimeout(t, 500)
        }()
    }, window.ClickTaleSettings.defineElementDeclarationAugmentElementPathHandler(), EnterClickObservable.prototype = Object.create(Observable.prototype), EnterClickObservable.prototype.constructor = EnterClickObservable, observablesFactory.constructEnterClick = function(t) {
        return new EnterClickObservable(t)
    }, document.addEventListener && document.addEventListener("keypress", onKeyPress, !1);
    var enterClickHandlers = {};

    function onKeyPress(t) {
        if (13 == t.which) {
            var e = t.target || t.srcElement;
            for (var n in enterClickHandlers)
                if (enterClickHandlers.hasOwnProperty(n)) {
                    var o = enterClickHandlers[n][0].triggerData;
                    if (!(void 0 !== o.excludeTagNames && 0 <= o.excludeTagNames.findIndex(function(t) {
                            return t == e.tagName
                        }))) {
                        var r = ctSelectorUtils.getAncestorDomElement(o.ctSelector, e);
                        null != r && enterClickHandlers[n].forEach(function(t) {
                            if (void 0 !== o.value) {
                                var e = {
                                        subType: o.subType,
                                        name: o.name
                                    },
                                    n = dynamicEventNameUtils.getDomElementContent(e, r);
                                if (!ctSelectorUtils.compareData(n, o.value, o.comparisonMode)) return
                            }
                            t.callback.call(null, r)
                        })
                    }
                }
        }
    }

    function IntervalObservable(t, e) {
        Observable.call(this);
        var n = this,
            o = null,
            r = 0;

        function a() {
            o = setInterval(function() {
                e.evaluate() ? (clearInterval(o), n.notify()) : r >= t.totalTime && clearInterval(o), r += t.intervalTime
            }, t.intervalTime)
        }
        void 0 === t.totalTime && (t.totalTime = 15e3), void 0 !== t.startListenImmediately && t.startListenImmediately ? a() : (onRulesBoundHandlers.push(a), CTLogicalPageEvent.subscribe(a))
    }
    IntervalObservable.prototype = Object.create(Observable.prototype), IntervalObservable.prototype.constructor = IntervalObservable, observablesFactory.constructInterval = function(t, e) {
        return new IntervalObservable(t, e)
    };
    var linkAnalyticsHandlers = {};

    function LinkAnalyticsObservable(t) {
        this.triggerData = t, Observable.call(this);
        var e = this;
        ctSelectorUtils.bindEventHandler(linkAnalyticsHandlers, t, function(t) {
            return logger.log("Link Analytics event associated with selector: ", e.triggerData.ctSelector), e.notify()
        })
    }

    function OrObservable(t) {
        Observable.call(this);
        var e = this;
        t.forEach(function(t) {
            t.subscribe(function(t) {
                return e.notify(t)
            })
        })
    }

    function PageLoadObservable() {
        Observable.call(this);
        var t = this;

        function e() {
            logger.log("PageLoad event"), t.notify()
        }
        onRulesBoundHandlers.push(e), CTLogicalPageEvent.subscribe(e)
    }
    LinkAnalyticsObservable.prototype = Object.create(Observable.prototype), LinkAnalyticsObservable.prototype.constructor = LinkAnalyticsObservable, observablesFactory.constructLinkAnalytics = function(t) {
        return new LinkAnalyticsObservable(t)
    }, window.ClickTaleSettings = window.ClickTaleSettings || {}, window.ClickTaleSettings.LinkAnalyticsAugmentElementPathHandler = function(o) {
        var r;
        for (var t in linkAnalyticsHandlers)
            if (linkAnalyticsHandlers.hasOwnProperty(t)) {
                var a = linkAnalyticsHandlers[t][0].triggerData,
                    i = ctSelectorUtils.getAncestorDomElement(a.ctSelector, o);
                null != i && linkAnalyticsHandlers[t].forEach(function(t) {
                    if (void 0 !== a.value) {
                        var e = {
                                subType: a.subType,
                                name: a.name
                            },
                            n = dynamicEventNameUtils.getDomElementContent(e, i);
                        if (!ctSelectorUtils.compareData(n, a.value, a.comparisonMode)) return
                    }
                    r = t.callback.call(null, o) || r
                })
            }
        return null != r ? {
            data: {
                interesting: r
            }
        } : null
    }, window.ClickTaleSettings.defineLinkAnalyticsAugmentElementPathHandler = function() {
        var e = 10,
            n = 0;
        ! function t() {
            n++, "function" == typeof ClickTaleAddAugmentElementPathHandler ? (logger.log("define LinkAnalyticsAugmentElementPathHandler"), ClickTaleAddAugmentElementPathHandler("Linkanalytics", window.ClickTaleSettings.LinkAnalyticsAugmentElementPathHandler)) : n <= e && setTimeout(t, 500)
        }()
    }, window.ClickTaleSettings.defineLinkAnalyticsAugmentElementPathHandler(), OrObservable.prototype = Object.create(Observable.prototype), OrObservable.prototype.constructor = OrObservable, observablesFactory.constructOr = function(t) {
        return new OrObservable(t.childConditions.map(function(t) {
            return observablesFactory.construct(t)
        }))
    }, PageLoadObservable.prototype = Object.create(Observable.prototype), PageLoadObservable.prototype.constructor = PageLoadObservable, observablesFactory.constructPageLoad = function() {
        return new PageLoadObservable
    };
    var rules, dynamicEventNameUtils = function() {
        var t = {
                getDynamicEventName: function(t, e) {
                    var n = "";
                    if (t && t.parts && 0 < t.parts.length) {
                        for (var o = void 0 !== t.delimiter ? t.delimiter : " ", r = void 0 !== t.triggerEventNameMode ? t.triggerEventNameMode : "allComponentsExist", a = 0, i = 0, c = 0; c < t.parts.length; c++) {
                            var l = t.parts[c],
                                s = "";
                            try {
                                switch (l.type) {
                                    case "TextValue":
                                        s = l.name;
                                        break;
                                    case "ElementValue":
                                        s = u(l);
                                        break;
                                    case "TriggeredElementValue":
                                        void 0 !== e && null != e && (s = m(l, e));
                                        break;
                                    case "CookieValue":
                                        s = v(l.name);
                                        break;
                                    case "JSVariableValue":
                                        s = d(l.name);
                                        break;
                                    case "SessionStorageValue":
                                        s = p(l.name);
                                        break;
                                    case "LocalStorageValue":
                                        s = y(l.name);
                                        break;
                                    case "CustomCodeValue":
                                        s = "function" == typeof l.execMethod ? l.execMethod(l.name) : h(l.name);
                                        break;
                                    case "QueryStringParamName":
                                        s = b(l.name);
                                        break;
                                    case "BookmarkName":
                                        s = g();
                                        break;
                                    case "URLValue":
                                        s = f()
                                }
                            } catch (t) {
                                void 0 !== logger && logger.error("getDynamicEventName: ", t)
                            }
                            if (null == s && (s = ""), "TextValue" != l.type && i++, "" == s && (a++, "allComponentsExist" == r)) break;
                            n += o + s
                        }
                        0 < n.length && (n = n.substring(o.length)), ("allComponentsExist" == r && 0 < a || "atLeastOneComponentExist" == r && i <= a || a == t.parts.length) && (n = "")
                    }
                    return n
                }
            },
            u = function(t) {
                var e = ctSelectorUtils.getFirstDOMelement(t.ctSelector);
                return null != e ? m(t, e) : ""
            },
            m = function(t, e) {
                switch (t.subType) {
                    case "Attribute":
                        var n = t.name,
                            o = e.getAttribute(n);
                        return null != o ? o : e[n];
                    case "AllInnerText":
                        return i(e).join(" ");
                    case "InnerText":
                    default:
                        return void 0 !== e.firstChild && null != e.firstChild && null != e.firstChild.nodeValue ? "function" == typeof e.firstChild.nodeValue.trim ? e.firstChild.nodeValue.trim() : e.firstChild.nodeValue : void 0 !== e.value && null != e.value ? "function" == typeof e.value.trim ? e.value.trim() : e.value : ""
                }
            };
        t.getDomElementContent = function(t, e) {
            return m(t, e)
        };
        var d = function(t) {
            for (var e = t.split("."), n = window[e[0]], o = 1; o < e.length; o++) {
                if (void 0 === n) return null;
                n = n[e[o]]
            }
            return r(n)
        };
        t.getJSVariable = function(t) {
            return d(t)
        };
        var r = function(t) {
                return t = void 0 === t || "object" == typeof t ? null : t.toString()
            },
            f = function(t) {
                return t = t || "-", window.location.pathname.split("/").join(t).substring(1)
            },
            g = function() {
                return window.location.hash ? window.location.hash.split("#")[1] : null
            },
            v = function(t) {
                for (var e = t + "=", n = document.cookie.split(";"), o = 0; o < n.length; o++) {
                    for (var r = n[o];
                        " " == r.charAt(0);) r = r.substring(1);
                    if (0 == r.indexOf(e)) return r.substring(e.length, r.length)
                }
                return ""
            };
        t.getCookieValue = function(t) {
            return v(t)
        };

        function e(t, e) {
            if (void 0 === window[t]) {
                var n, o, r = ["CT_testRules", "CT_testRules_Loaded", "ve-settings-highlighting", "ctRuleEngineDebug"];
                window[t] = {};
                for (var a = 0, i = e.length; a < i; ++a)
                    if (n = e.key(a), !(0 <= r.indexOf(n))) {
                        o = e.getItem(n);
                        try {
                            o = JSON.parse(o)
                        } catch (t) {}
                        window[t][n.replace(/\./g, "_")] = o
                    }
            }
            return t
        }

        function n() {
            return e("ctLocalStorage", window.localStorage)
        }
        t.setLocalStorageInGlobalVariable = function() {
            return n()
        };

        function o() {
            return e("ctSessionStorage", window.sessionStorage)
        }
        t.setSessionStorageInGlobalVariable = function() {
            return o()
        };
        var p = function(t) {
            if (!window.sessionStorage || void 0 === t || "" == t) return null;
            var e = o();
            return d(e += "." + t)
        };
        t.getSessionStorageValue = function(t) {
            return p(t)
        };
        var y = function(t) {
            if (!window.localStorage || void 0 === t || "" == t) return null;
            var e = n();
            return d(e += "." + t)
        };
        t.getLocalStorageValue = function(t) {
            return y(t)
        };
        var h = function(t) {
            return ctCustomCode_PrePCC[t]()
        };
        t.getCustomCodeValue = function(t) {
            return h(t)
        };
        var b = function(t, e) {
            e = e || window.location.href, t = t.replace(/[\[\]]/g, "\\$&");
            var n = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(e);
            return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null
        };
        t.getQueryStringParameterValue = function(t) {
            return b(t)
        };
        var a = function(t, e) {
                for (e(t), t = t.firstChild; t;) a(t, e), t = t.nextSibling
            },
            i = function(t) {
                "string" == typeof t && (t = document.getElementById(t));
                var e = [];
                return a(t, function(t) {
                    switch (t.nodeType) {
                        case 1:
                            void 0 !== t.value && null != t.value && e.push("function" == typeof t.value.trim ? t.value.trim() : t.value);
                            break;
                        case 3:
                            void 0 !== t.nodeValue && null != t.nodeValue && e.push("function" == typeof t.nodeValue.trim ? t.nodeValue.trim() : t.nodeValue)
                    }
                }), e
            };
        return t
    }();

    function CTEventAction(t) {
        this.actionData = t
    }

    function ElementCategoryAction(t) {
        this.categoryId = t
    }

    function LinkAnalyticsAction(t) {
        this.useThisElement = t
    }

    function FormInitEventAction(t) {
        this.actionData = t
    }

    function FormSubmitEventAction(t) {
        this.actionData = t
    }

    function FormSuccessFailureAction(t) {
        this.actionData = t
    }

    function MultipleAction(t) {
        this.children = t || []
    }

    function TestRuleEventAction(t, e) {
        this.actionData = t, this.ruleData = e
    }

    function DynamicEventNameAction(t, e) {
        this.actionData = t, this.ruleData = e
    }

    function StaticEventNameAction(t, e) {
        this.actionData = t, this.ruleData = e
    }

    function AndCondition(t) {
        this.children = t
    }

    function CookieExistsState(t) {
        this.stateData = t
    }

    function CustomCodeSuccessState(t) {
        this.stateData = t
    }

    function ExistsState(t) {
        this.stateData = t
    }

    function JSVariableExistsState(t) {
        this.stateData = t
    }

    function LocalStorageExistsState(t) {
        this.stateData = t
    }

    function LocationState(t) {
        logger.log("stateData: ", t), this.url = t.url.toLowerCase(), this.mode = t.mode, this.ignoreQueryString = t.ignoreQueryString
    }

    function NotCondition(t) {
        this.childState = t
    }

    function OrCondition(t) {
        this.children = t
    }

    function QSParamExistsState(t) {
        this.stateData = t
    }

    function SessionStorageExistsState(t) {
        this.stateData = t
    }

    function UrlHashExistsState(t) {
        this.urlHashValue = t
    }

    function init() {
        onDomReady(function() {
            startRulesEngine(), whenRecording(function() {
                ctRecordingPromise.resolve()
            }), whenMonitor(function() {
                ctMonitorReadyPromise.resolve()
            })
        })
    }

    function whenRecording(t) {
        if (void 0 !== window.ClickTaleIsRecording && !0 === window.ClickTaleIsRecording()) t();
        else {
            var e = window.ClickTaleOnRecording;
            window.ClickTaleOnRecording = function() {
                t(), void 0 !== e && "function" == typeof e && e.apply(this, arguments)
            }
        }
    }

    function whenMonitor(t) {
        if (void 0 !== window.ClickTaleMonitor)
            if (void 0 !== window.ClickTaleMonitor.isMonitoring && window.ClickTaleMonitor.isMonitoring()) t();
            else if (void 0 !== window.ClickTaleMonitor.Settings) {
            window.ClickTaleMonitor.Settings.get().onReady(function() {
                t()
            })
        }
    }

    function startRulesEngine() {
        try {
            if (!isSupportedBrowser()) return;
            logger.log("startRulesEngine"), "undefined" == typeof ct && (window.ct = {}), "undefined" != typeof ct && void 0 !== ct.ElementAddressing && void 0 !== ct.ElementAddressing.bootstrap && ct.ElementAddressing.bootstrap(window, !0), sessionStorage.getItem("CT_testRules") ? buildRulesOnTestRulesMode() : buildRules()
        } catch (t) {
            logger.error("startRulesEngine error: ", t)
        }
    }

    function buildRulesOnTestRulesMode() {
        sessionStorage.setItem("CT_testRules_BuildStarted", !0), sessionStorage.setItem("CT_testRules_Loaded", !1), logger.log("buildRulesOnTestRulesMode");
        var n = 20,
            o = 0;
        ! function t() {
            o++;
            var e = sessionStorage.getItem("CT_testRules_Loaded");
            logger.log("currentTry: ", o, ", CT_testRules_Loaded: ", e), void 0 !== e && "true" == e ? buildRules() : o <= n && setTimeout(t, 500)
        }()
    }

    function onDomReady(t) {
        var n = !1;

        function o() {
            n || (n = !0, t())
        }
        if ("complete" !== document.readyState && "interactive" !== document.readyState) {
            if (document.addEventListener) document.addEventListener("DOMContentLoaded", o, !1);
            else if (document.attachEvent) {
                try {
                    var e = null != window.frameElement
                } catch (t) {}
                if (document.documentElement.doScroll && !e) {
                    ! function e() {
                        if (!n) try {
                            document.documentElement.doScroll("left"), o()
                        } catch (t) {
                            setTimeout(e, 10)
                        }
                    }()
                }
                document.attachEvent("onreadystatechange", function() {
                    "complete" === document.readyState && o()
                })
            }
            if (window.addEventListener) window.addEventListener("load", o, !1);
            else if (window.attachEvent) window.attachEvent("onload", o);
            else {
                var r = window.onload;
                window.onload = function() {
                    r && r(), o()
                }
            }
        } else o()
    }

    function isIE() {
        var t = navigator.userAgent.toLowerCase();
        return -1 != t.indexOf("msie") && parseInt(t.split("msie")[1])
    }

    function isSupportedBrowser() {
        try {
            return !isIE() || 9 < isIE()
        } catch (t) {
            return logger.error("isSupportedBrowser: ", t), !1
        }
    }

    function buildRules() {
        if ("undefined" != typeof ctRules_PrePCC && logger.log("buildRules, rules:", ctRules_PrePCC), "undefined" != typeof ctRules_PrePCC && null != ctRules_PrePCC) {
            var t = null;
            void 0 !== (t = ctRules_PrePCC.isTransformed ? rulesEngine.jsonUnpacker.unpack(ctRules_PrePCC.rules) : ctRules_PrePCC.rules) && null != t && (rules = t.map(function(t) {
                return new Rule(t)
            }))
        }
        onRulesBoundHandlers.forEach(function(t) {
            t()
        })
    }
    CTEventAction.prototype = Object.create(Action.prototype), CTEventAction.prototype.constructor = Action, CTEventAction.prototype.execute = function(e) {
            var n = this;
            ctRecordingPromise.then(function() {
                if ("function" == typeof window.ClickTaleIsRecording && window.ClickTaleIsRecording()) {
                    var t = n.getEventName(e);
                    "" != t && ("Static" == n.getEventNameMode() && n.actionData.isETR ? "function" == typeof window.ClickTaleEventTrigger ? window.ClickTaleEventTrigger(t) : logger.log("window.ClickTaleEventTrigger not exists") : "function" == typeof window.ClickTaleEvent ? window.ClickTaleEvent(t) : logger.log("window.ClickTaleEvent not exists"), logger.log("CT-Core ClickTaleEvent: " + t))
                } else logger.log("window.ClickTaleIsRecording not exists or recording is not active")
            })
        }, CTEventAction.prototype.getEventName = function(t) {
            var e = "",
                n = "";
            if (this.actionData.dynamicEventName) {
                var o = void 0 !== t ? t.domElement : null;
                "" != (n = dynamicEventNameUtils.getDynamicEventName(this.actionData.dynamicEventName, o)) && this.actionData.isPII && (e = "@ID@")
            } else n = this.actionData.eventName;
            return e + n
        }, CTEventAction.prototype.getEventNameMode = function() {
            var t = this.actionData.dynamicEventName;
            return void 0 !== t && null != t ? "Dynamic" : "Static"
        }, actionsFactory.constructCTEvent = function(t) {
            return new CTEventAction(t)
        }, ElementCategoryAction.prototype = Object.create(Action.prototype), ElementCategoryAction.prototype.constructor = Action, ElementCategoryAction.prototype.execute = function() {
            return this.categoryId
        }, actionsFactory.constructElementCategory = function(t) {
            return new ElementCategoryAction(t.categoryId)
        }, LinkAnalyticsAction.prototype = Object.create(Action.prototype), LinkAnalyticsAction.prototype.constructor = Action, LinkAnalyticsAction.prototype.execute = function() {
            return this.useThisElement
        }, actionsFactory.constructLinkAnalytics = function(t) {
            return new LinkAnalyticsAction(t.useThisElement)
        }, FormInitEventAction.prototype = Object.create(Action.prototype), FormInitEventAction.prototype.constructor = Action, FormInitEventAction.prototype.execute = function(t) {
            var r = this;
            ctRecordingPromise.then(function() {
                if ("" == r.actionData.form.querySelector)
                    if ("function" == typeof window.ClickTaleLogicalForm) {
                        0 < r.actionData.disabledForms.length && ("function" == typeof window.ClickTaleFormDisable ? r.actionData.disabledForms.forEach(function(t) {
                            var e = document.querySelector(t.querySelector);
                            null != e && window.ClickTaleFormDisable(e)
                        }) : logger.log("Unable to disable native forms because window.ClickTaleFormDisable not exists"));
                        var e = [];
                        r.actionData.form.fields.forEach(function(t) {
                            e = e.concat(Array.prototype.slice.call(document.querySelectorAll(t.querySelector)))
                        });
                        var t, n = Array.prototype.slice.call(document.querySelectorAll(r.actionData.form.submit.querySelector)),
                            o = window.ClickTaleLogicalForm(r.actionData.form.name, e, n);
                        if (logger.log("window.ClickTaleLogicalForm activated - formName: " + r.actionData.form.name + ", formId: " + o), void 0 !== (t = r.actionData.childRuleData)) {
                            t.action.children[0].form.id = o;
                            new Rule(t)
                        }
                    } else logger.log("Unable to init logical form because window.ClickTaleLogicalForm not exists");
                else if (void 0 !== (t = r.actionData.childRuleData)) new Rule(t)
            })
        }, actionsFactory.constructFormInitEvent = function(t) {
            return new FormInitEventAction(t)
        }, FormSubmitEventAction.prototype = Object.create(Action.prototype), FormSubmitEventAction.prototype.constructor = Action, FormSubmitEventAction.prototype.execute = function(t) {
            var o = this;
            ctRecordingPromise.then(function() {
                if (0 <= actionsFactory.submittedForms.findIndex(function(t) {
                        return t.name == o.actionData.form.name
                    })) {
                    var t = Object.assign({}, o.actionData);
                    t.submitSuccessful = !1, actionsFactory.constructFormSuccessFailure(t).execute()
                }
                if ("function" == typeof window.ClickTaleRegisterFormSubmit) {
                    var e = o.actionData.childRuleData;
                    if (void 0 !== o.actionData.form.id) window.ClickTaleRegisterFormSubmit(o.actionData.form.id), logger.log("window.ClickTaleRegisterFormSubmit activated for logical form - formName: " + o.actionData.form.name + ", formId: " + o.actionData.form.id), void 0 !== e && (e.action.form.id = o.actionData.form.id), actionsFactory.submittedForms.push({
                        name: o.actionData.form.name
                    });
                    else if ("" != o.actionData.form.querySelector) {
                        var n = document.querySelector(o.actionData.form.querySelector);
                        null != n ? (window.ClickTaleRegisterFormSubmit(n), logger.log("window.ClickTaleRegisterFormSubmit activated for native form - formName: " + o.actionData.form.name + ", formQuerySelector: " + o.actionData.form.querySelector), actionsFactory.submittedForms.push({
                            name: o.actionData.form.name
                        })) : logger.log("window.ClickTaleRegisterFormSubmit NOT activated for native form because not found - formName: " + o.actionData.form.name + ", formQuerySelector: " + o.actionData.form.querySelector)
                    }
                    if (void 0 !== e) new Rule(e)
                } else logger.log("Unable to register form submit because window.ClickTaleRegisterFormSubmit not exist")
            })
        }, actionsFactory.submittedForms = [], actionsFactory.constructFormSubmitEvent = function(t) {
            return new FormSubmitEventAction(t)
        }, FormSuccessFailureAction.prototype = Object.create(Action.prototype), FormSuccessFailureAction.prototype.constructor = Action, FormSuccessFailureAction.prototype.execute = function(t) {
            var e = this;
            ctRecordingPromise.then(function() {
                if (e.actionData.submitSuccessful && "function" == typeof window.ClickTaleRegisterFormSubmitSuccess)
                    if (void 0 !== e.actionData.form.id) window.ClickTaleRegisterFormSubmitSuccess(e.actionData.form.id), logger.log("window.ClickTaleRegisterFormSubmitSuccess activated for logical form - formName: " + e.actionData.form.name + ", formId: " + e.actionData.form.id);
                    else if ("" != e.actionData.form.querySelector) {
                    null != (t = document.querySelector(e.actionData.form.querySelector)) ? (window.ClickTaleRegisterFormSubmitSuccess(t), logger.log("window.ClickTaleRegisterFormSubmitSuccess activated for native form - formName: " + e.actionData.form.name + ", formQuerySelector: " + e.actionData.form.querySelector)) : logger.log("window.ClickTaleRegisterFormSubmitSuccess NOT activated for native form because not found - formName: " + e.actionData.form.name + ", formQuerySelector: " + e.actionData.form.querySelector)
                } else window.ClickTaleRegisterFormSubmitSuccess(), logger.log("window.ClickTaleRegisterFormSubmitSuccess activated for previous page");
                else if (e.actionData.submitSuccessful || "function" != typeof window.ClickTaleRegisterFormSubmitFailure) logger.log("Unable to register form submit status because window.ClickTaleRegisterFormSubmitSuccess or window.ClickTaleRegisterFormSubmitFailure not exist");
                else if (actionsFactory.submittedForms = actionsFactory.submittedForms.filter(function(t) {
                        return t.name != e.actionData.form.name
                    }), void 0 !== e.actionData.form.id) window.ClickTaleRegisterFormSubmitFailure(e.actionData.form.id), logger.log("window.ClickTaleRegisterFormSubmitFailure activated for logical form - formName: " + e.actionData.form.name + ", formId: " + e.actionData.form.id);
                else if ("" != e.actionData.form.querySelector) {
                    var t;
                    null != (t = document.querySelector(e.actionData.form.querySelector)) ? (window.ClickTaleRegisterFormSubmitFailure(t), logger.log("window.ClickTaleRegisterFormSubmitFailure activated for native form - formName: " + e.actionData.form.name + ", formQuerySelector: " + e.actionData.form.querySelector)) : logger.log("window.ClickTaleRegisterFormSubmitFailure NOT activated for native form because not found - formName: " + e.actionData.form.name + ", formQuerySelector: " + e.actionData.form.querySelector)
                } else window.ClickTaleRegisterFormSubmitFailure(), logger.log("window.ClickTaleRegisterFormSubmitFailure activated for previous page")
            })
        }, actionsFactory.constructFormSuccessFailure = function(t) {
            return new FormSuccessFailureAction(t)
        }, MultipleAction.prototype = Object.create(Action.prototype), MultipleAction.prototype.constructor = Action, MultipleAction.prototype.execute = function(e) {
            this.children.forEach(function(t) {
                t.execute(e)
            }), logger.log("Executing Multiple Action")
        }, actionsFactory.constructMultiple = function(t, e) {
            var n = this;
            return n.ruleData = e, new MultipleAction(t.children.map(function(t) {
                return actionsFactory.construct(t, n.ruleData)
            }))
        }, TestRuleEventAction.prototype = Object.create(Action.prototype), TestRuleEventAction.prototype.constructor = Action, TestRuleEventAction.prototype.execute = function(t) {
            this.triggeredDomElement = void 0 !== t ? t.domElement : null;
            var e = this.getTestActionParams(t);
            null != e && window.ct_ve_parent_window && null != e.data && window.ct_ve_parent_window.postMessage({
                name: "testRuleEvent",
                params: e
            }, "*")
        }, TestRuleEventAction.prototype.getTestActionParams = function(t) {
            var e = this.getData(t);
            return null == e ? null : {
                testTime: (new Date).getTime(),
                clickletId: this.ruleData.id,
                clickletName: this.ruleData.name,
                clickletTitle: this.ruleData.title,
                clickletType: this.ruleData.type,
                isActive: this.ruleData.isActive,
                platform: this.getPlatform(),
                data: e.text,
                tooltip: e.tooltip,
                eventNameMode: this.getEventNameMode()
            }
        }, TestRuleEventAction.prototype.getPlatform = function() {
            switch (this.actionData.actualType) {
                case "CTEventAction":
                    return "Core";
                case "StaticEventNameAction":
                case "DynamicEventNameAction":
                    return "CEC";
                default:
                    return ""
            }
        }, TestRuleEventAction.prototype.getEventNameMode = function() {
            return void 0 === this.actionData.dynamicEventName && void 0 === this.actionData.eventName ? "" : void 0 !== this.actionData.dynamicEventName && null != this.actionData.dynamicEventName ? "Dynamic" : "Static"
        }, TestRuleEventAction.prototype.getData = function(t) {
            var e = this,
                n = null,
                o = null,
                r = "";
            if (0 <= ["CTEventAction", "StaticEventNameAction", "DynamicEventNameAction"].findIndex(function(t) {
                    return t == e.actionData.actualType
                }) && "" == (r = this.getEventName())) return null;
            switch (this.actionData.actualType) {
                case "CTEventAction":
                    n = r;
                    break;
                case "StaticEventNameAction":
                    n = r + " [EventId:" + this.actionData.eventId + "]";
                    break;
                case "DynamicEventNameAction":
                    var a = 3;
                    if (this.ruleData.type, a = 4, this.actionData.isPII) break;
                    n = r + " [EventId: " + this.actionData.eventId + ", Type: " + a + "]";
                    break;
                case "ElementCategoryAction":
                    n = this.actionData.categoryName + " [CategoryId: " + this.actionData.categoryId + "]";
                    break;
                case "LinkAnalyticsAction":
                    n = "Use this element in Link Analytics [State: " + this.actionData.useThisElement + "]";
                    break;
                case "FormInitEventAction":
                    if (n = "FormInit - [FormName: " + this.actionData.form.name + "]", o = "Form state - init\nForm name - " + this.actionData.form.name + "\nForm mode - " + ("" == this.actionData.form.querySelector ? "logical" : "native"), 0 < this.actionData.disabledForms.length) {
                        o += "\nDisabled Forms";
                        for (var i = 0; i < this.actionData.disabledForms.length; i++) o += "\n - " + this.actionData.disabledForms[i].name
                    }
                    var c = this.actionData.childRuleData;
                    if (void 0 !== c) new Rule(c);
                    break;
                case "FormSubmitEventAction":
                    n = "FormSubmit - [FormName: " + this.actionData.form.name + "]", o = "Form state - submit\nForm name - " + this.actionData.form.name + "\nForm mode - " + ("" == this.actionData.form.querySelector ? "logical" : "native") + "\nForm submit source - " + t.triggerSource + "\nForm submit by - " + t.domType.replace("Element", " element");
                    var l = this;
                    if (0 <= actionsFactory.submittedForms.findIndex(function(t) {
                            return t.name == l.actionData.form.name
                        })) {
                        var s = Object.assign({}, this.actionData);
                        s.actualType = "FormSuccessFailureAction", s.submitSuccessful = !1, s.reason = "submitted twice", actionsFactory.constructTestRuleEvent(s, this.ruleData).execute()
                    }
                    actionsFactory.submittedForms.push({
                        name: this.actionData.form.name
                    });
                    var u = this.actionData.childRuleData;
                    if (void 0 !== u) new Rule(u);
                    break;
                case "FormSuccessFailureAction":
                    n = "FormSubmitStatus - [Status: " + (this.actionData.submitSuccessful ? "Successful" : "Failed") + "]", o = "Form state - submit status\nForm submit status - " + (this.actionData.submitSuccessful ? "successful" : "failed"), void 0 !== this.actionData.reason && (o += "\nSubmit " + (this.actionData.submitSuccessful ? "successful" : "failed") + " reason - " + this.actionData.reason), "" == this.actionData.form.name ? o += "\nForm mode - previous page" : o += "\nForm name - " + this.actionData.form.name + "\nForm mode - " + ("" == this.actionData.form.querySelector ? "logical" : "native");
                    l = this;
                    actionsFactory.submittedForms = actionsFactory.submittedForms.filter(function(t) {
                        return t.name != l.actionData.form.name
                    })
            }
            return {
                text: n,
                tooltip: null == o ? n : o
            }
        }, TestRuleEventAction.prototype.getEventName = function() {
            var t = "",
                e = "";
            return this.actionData.dynamicEventName ? "" != (e = dynamicEventNameUtils.getDynamicEventName(this.actionData.dynamicEventName, this.triggeredDomElement)) && this.actionData.isPII && (t = "@ID@") : e = this.actionData.eventName, t + e
        }, actionsFactory.constructTestRuleEvent = function(t, e) {
            return new TestRuleEventAction(t, e)
        }, DynamicEventNameAction.prototype = Object.create(Action.prototype), DynamicEventNameAction.prototype.constructor = Action, DynamicEventNameAction.prototype.execute = function(e) {
            var n = this;
            ctMonitorReadyPromise.then(function() {
                try {
                    if (n.actionData.isPII) return void logger.log("CEC ClickTaleEvent - not executed because IsPII", ", eventId: ", n.actionData.eventId);
                    n.triggeredDomElement = void 0 !== e ? e.domElement : null;
                    var t = n.geEventName();
                    if ("" != t) switch (n.ruleData.type) {
                        case "ClickEvent":
                        case "FormEvent":
                            if ("function" == typeof window.ClickTaleMonitor.addDynamicAction) try {
                                window.ClickTaleMonitor.addDynamicAction(n.actionData.eventId, t), logger.log("CEC ClickTaleEvent - ", "eventName: ", t, ", eventId: ", n.actionData.eventId)
                            } catch (t) {
                                logger.log("CEC ClickTaleEvent - window.ClickTaleMonitor.addDynamicAction throws exception")
                            } else logger.log("CEC ClickTaleEvent - window.ClickTaleMonitor.addDynamicAction not exists");
                            break;
                        case "PageEventByElement":
                        case "PageLoadEvent":
                            if ("function" == typeof window.ClickTaleMonitor.addPageTag) try {
                                window.ClickTaleMonitor.addPageTag(n.actionData.eventId, t), logger.log("CEC ClickTaleEvent - ", "eventName: ", t, ", eventId: ", n.actionData.eventId)
                            } catch (t) {
                                logger.log("CEC ClickTaleEvent - window.ClickTaleMonitor.addPageTag throws exception")
                            } else logger.log("CEC ClickTaleEvent - window.ClickTaleMonitor.addPageTag not exists")
                    } else logger.log("CEC ClickTaleEvent - event name is empty for eventId: ", n.actionData.eventId)
                } catch (t) {}
            })
        }, DynamicEventNameAction.prototype.geEventName = function() {
            return this.actionData.dynamicEventName ? dynamicEventNameUtils.getDynamicEventName(this.actionData.dynamicEventName, this.triggeredDomElement) : this.actionData.eventName
        }, actionsFactory.constructDynamicEventName = function(t, e) {
            return new DynamicEventNameAction(t, e)
        }, StaticEventNameAction.prototype = Object.create(Action.prototype), StaticEventNameAction.prototype.constructor = Action, StaticEventNameAction.prototype.execute = function() {
            var t = this;
            ctMonitorReadyPromise.then(function() {
                try {
                    "function" == typeof window.ClickTaleMonitor.addEvent ? (window.ClickTaleMonitor.addEvent(t.actionData.eventId), logger.log("CEC ClickTaleEvent - eventId: ", t.actionData.eventId)) : logger.log("CEC ClickTaleEvent - window.ClickTaleMonitor.addEvent not exists")
                } catch (t) {}
            })
        }, actionsFactory.constructStaticEventName = function(t, e) {
            return new StaticEventNameAction(t, e)
        }, AndCondition.prototype = Object.create(State.prototype), (AndCondition.prototype.constructor = AndCondition).prototype.evaluate = function() {
            for (var t = 0; t < this.children.length; t++) {
                if (0 == this.children[t].evaluate()) return !1
            }
            return !0
        }, statesFactory.constructAnd = function(t) {
            return new AndCondition(t.childConditions.map(function(t) {
                return statesFactory.construct(t)
            }))
        }, CookieExistsState.prototype = Object.create(State.prototype), (CookieExistsState.prototype.constructor = CookieExistsState).prototype.evaluate = function() {
            for (var t = this, e = !1, n = document.cookie.split(";"), o = 0; o < n.length; o++)
                if (n[o].split("=")[0].trim() == t.stateData.name) {
                    e = !0;
                    break
                }
            if (e) {
                if (void 0 === t.stateData.value) return !0;
                var r = dynamicEventNameUtils.getCookieValue(t.stateData.name);
                return ctSelectorUtils.compareData(r, t.stateData.value, t.stateData.comparisonMode)
            }
            return !1
        }, statesFactory.constructCookieExists = function(t) {
            return new CookieExistsState(t)
        }, CustomCodeSuccessState.prototype = Object.create(State.prototype), (CustomCodeSuccessState.prototype.constructor = CustomCodeSuccessState).prototype.evaluate = function() {
            var t = dynamicEventNameUtils.getCustomCodeValue(this.stateData.name);
            return "boolean" == typeof t && t
        }, statesFactory.constructCustomCodeSuccess = function(t) {
            return new CustomCodeSuccessState(t)
        }, ExistsState.prototype = Object.create(State.prototype), (ExistsState.prototype.constructor = ExistsState).prototype.evaluate = function() {
            var o = this,
                t = ctSelectorUtils.getDOMelements(o.stateData.ctSelector);
            return void 0 !== o.stateData.triggerOnHidden && o.stateData.triggerOnHidden || (t = t.filter(function(t) {
                return ctSelectorUtils.isElementVisible(t)
            })), void 0 !== o.stateData.value ? t.some(function(t) {
                var e = {
                        subType: o.stateData.subType,
                        name: o.stateData.name
                    },
                    n = dynamicEventNameUtils.getDomElementContent(e, t);
                return ctSelectorUtils.compareData(n, o.stateData.value, o.stateData.comparisonMode)
            }) : 0 < t.length
        }, statesFactory.constructExists = function(t) {
            return new ExistsState(t)
        }, JSVariableExistsState.prototype = Object.create(State.prototype), (JSVariableExistsState.prototype.constructor = JSVariableExistsState).prototype.evaluate = function() {
            try {
                for (var t = this.stateData.name.split("."), e = window[t[0]], n = 1; n < t.length; n++) e = e[t[n]]
            } catch (t) {}
            return void 0 !== e && (void 0 === this.stateData.value || (null === e && (e = "null"), ctSelectorUtils.compareData(e, this.stateData.value, this.stateData.comparisonMode)))
        }, statesFactory.constructJSVariableExists = function(t) {
            return new JSVariableExistsState(t)
        }, LocalStorageExistsState.prototype = Object.create(State.prototype), (LocalStorageExistsState.prototype.constructor = LocalStorageExistsState).prototype.evaluate = function() {
            var t = dynamicEventNameUtils.getLocalStorageValue(this.stateData.name);
            return null != t && (void 0 === this.stateData.value || ctSelectorUtils.compareData(t, this.stateData.value, this.stateData.comparisonMode))
        }, statesFactory.constructLocalStorageExists = function(t) {
            return new LocalStorageExistsState(t)
        }, LocationState.prototype = Object.create(State.prototype), LocationState.prototype.constructor = State, LocationState.prototype.evaluate = function(t) {
            var e = t || window.location.href;
            if (0 == (e = e.toLowerCase()).indexOf(ctVEconfig.VE_PROXY_BASE_URL)) {
                var n = decodeURIComponent(dynamicEventNameUtils.getCookieValue("ct-proxyTargetHost"));
                e = e.replace(ctVEconfig.VE_PROXY_BASE_URL, n)
            }
            switch (!0 === this.ignoreQueryString && (e = e.split(/[?#]/)[0], this.url = this.url.split(/[?#]/)[0]), this.mode) {
                case "AllPages":
                    return !0;
                case "StartsWith":
                    return 0 == e.indexOf(this.url);
                case "EndsWith":
                    return 0 <= e.indexOf(this.url, e.length - this.url.length);
                case "Equals":
                    return e === this.url;
                case "Contains":
                    return 0 <= e.indexOf(this.url);
                case "NotStartsWith":
                    return 0 != e.indexOf(this.url);
                case "NotEndsWith":
                    return e.indexOf(this.url, e.length - this.url.length) < 0;
                case "NotEquals":
                    return e != this.url;
                case "NotContains":
                    return e.indexOf(this.url) < 0
            }
        }, statesFactory.constructLocation = function(t) {
            return new LocationState(t)
        }, NotCondition.prototype = Object.create(State.prototype), (NotCondition.prototype.constructor = NotCondition).prototype.evaluate = function() {
            return !this.childState.evaluate()
        }, statesFactory.constructNot = function(t) {
            return new NotCondition(statesFactory.construct(t.condition))
        }, OrCondition.prototype = Object.create(State.prototype), (OrCondition.prototype.constructor = OrCondition).prototype.evaluate = function() {
            for (var t = 0; t < this.children.length; t++) {
                if (1 == this.children[t].evaluate()) return !0
            }
            return !1
        }, statesFactory.constructOr = function(t) {
            return new OrCondition(t.childConditions.map(function(t) {
                return statesFactory.construct(t)
            }))
        }, QSParamExistsState.prototype = Object.create(State.prototype), (QSParamExistsState.prototype.constructor = QSParamExistsState).prototype.evaluate = function() {
            for (var t = this, e = !1, n = window.location.search.substring(1).split("&"), o = 0; o < n.length; o++)
                if (n[o].split("=")[0] == t.stateData.name) {
                    e = !0;
                    break
                }
            if (e) {
                if (void 0 === t.stateData.value) return !0;
                var r = dynamicEventNameUtils.getQueryStringParameterValue(t.stateData.name);
                return ctSelectorUtils.compareData(r, t.stateData.value, t.stateData.comparisonMode)
            }
            return !1
        }, statesFactory.constructQSParamExists = function(t) {
            return new QSParamExistsState(t)
        }, SessionStorageExistsState.prototype = Object.create(State.prototype), (SessionStorageExistsState.prototype.constructor = SessionStorageExistsState).prototype.evaluate = function() {
            var t = dynamicEventNameUtils.getSessionStorageValue(this.stateData.name);
            return null != t && (void 0 === this.stateData.value || ctSelectorUtils.compareData(t, this.stateData.value, this.stateData.comparisonMode))
        }, statesFactory.constructSessionStorageExists = function(t) {
            return new SessionStorageExistsState(t)
        }, UrlHashExistsState.prototype = Object.create(State.prototype), (UrlHashExistsState.prototype.constructor = UrlHashExistsState).prototype.evaluate = function() {
            return window.location.hash.split("#")[1] == this.urlHashValue
        }, statesFactory.constructUrlHashExists = function(t) {
            return new UrlHashExistsState(t.name)
        },
        function() {
            var d = function(t) {
                    return "string" != typeof t ? t : t.replace(/\+|%2B|%7C|%5E|%25/g, function(t) {
                        return {
                            "+": " ",
                            "%2B": "+",
                            "%7C": "|",
                            "%5E": "^",
                            "%25": "%"
                        }[t]
                    })
                },
                f = function(t) {
                    return parseInt(t, 36)
                };
            exports.jsonUnpacker = {
                unpack: function(t) {
                    return function(t) {
                        var e = t.split("^"),
                            a = [],
                            n = e[0];
                        if ("" !== n)
                            for (var o = 0, r = (n = n.split("|")).length; o < r; o++) a.push(d(n[o]));
                        if ("" !== (n = e[1]))
                            for (o = 0, r = (n = n.split("|")).length; o < r; o++) a.push(f(n[o]));
                        if ("" !== (n = e[2]))
                            for (o = 0, r = (n = n.split("|")).length; o < r; o++) a.push(parseFloat(n[o]));
                        delete n;
                        var i = "",
                            c = [],
                            l = e[3].length;
                        for (o = 0; o < l; o++) {
                            var s = e[3].charAt(o);
                            "|" === s || "$" === s || "@" === s || "]" === s ? (i && (c.push(f(i)), i = ""), "|" !== s && c.push(s)) : i += s
                        }
                        var u = c.length,
                            m = 0;
                        return function t() {
                            var e = c[m++];
                            if ("@" === e) {
                                for (var n = []; m < u; m++) {
                                    if ("]" === (o = c[m])) return n;
                                    if ("@" === o || "$" === o) n.push(t());
                                    else switch (o) {
                                        case -1:
                                            n.push(!0);
                                            break;
                                        case -2:
                                            n.push(!1);
                                            break;
                                        case -3:
                                            n.push(null);
                                            break;
                                        case -5:
                                            n.push(void 0);
                                            break;
                                        case -4:
                                            n.push("");
                                            break;
                                        default:
                                            n.push(a[o])
                                    }
                                }
                                return n
                            }
                            if ("$" !== e) throw new TypeError("Bad token " + e + " isn't a type");
                            for (n = {}; m < u; m++) {
                                var o, r = c[m];
                                if ("]" === r) return n;
                                if (r = -4 === r ? "" : a[r], "@" === (o = c[++m]) || "$" === o) n[r] = t();
                                else switch (o) {
                                    case -1:
                                        n[r] = !0;
                                        break;
                                    case -2:
                                        n[r] = !1;
                                        break;
                                    case -3:
                                        n[r] = null;
                                        break;
                                    case -5:
                                        n[r] = void 0;
                                        break;
                                    case -4:
                                        n[r] = "";
                                        break;
                                    default:
                                        n[r] = a[o]
                                }
                            }
                            return n
                        }()
                    }(t)
                }
            }
        }();
    var onRulesBoundHandlers = [];
    init();
}());

/*browsers exclusion start*/
ClickTaleSettings.PTC.doOnlyWhen = function(toDoHandler, toCheckHandler, interval, times, failHandler) {
    if ((!toDoHandler) || (!toCheckHandler)) return;
    if (typeof interval == 'undefined') interval = 1000;
    if (typeof times == 'undefined') times = 20;

    if (--times < 0) {
        if (typeof failHandler === 'function') {
            failHandler();
        }
        return;
    }
    if (toCheckHandler()) {
        toDoHandler();
        return;
    }

    setTimeout(function() {
        ClickTaleSettings.PTC.doOnlyWhen(toDoHandler, toCheckHandler, interval, times, failHandler);
    }, interval);
}
ClickTaleSettings.PTC.doOnlyWhen(function() {
    if (window.ClickTaleSettings.PTC.okToRunPCC) {
        (function() {
            window.ClickTaleSettings = window.ClickTaleSettings || {};
            ClickTaleSettings.PTC = ClickTaleSettings.PTC || {};
            ClickTaleSettings.PTC.originalPCCLocation = 'P33_PID82';

            var aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
                if (a == Array.prototype || a == Object.prototype) return a;
                a[b] = c.value;
                return a
            };

            function ba(a) {
                a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
                for (var b = 0; b < a.length; ++b) {
                    var c = a[b];
                    if (c && c.Math == Math) return c
                }
                throw Error("Cannot find global object");
            }
            var ca = ba(this);

            function da(a, b) {
                if (b) a: {
                    var c = ca;a = a.split(".");
                    for (var d = 0; d < a.length - 1; d++) {
                        var f = a[d];
                        if (!(f in c)) break a;
                        c = c[f]
                    }
                    a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && aa(c, a, {
                        configurable: !0,
                        writable: !0,
                        value: b
                    })
                }
            }
            var ea = "function" == typeof Object.assign ? Object.assign : function(a, b) {
                for (var c = 1; c < arguments.length; c++) {
                    var d = arguments[c];
                    if (d)
                        for (var f in d) Object.prototype.hasOwnProperty.call(d, f) && (a[f] = d[f])
                }
                return a
            };
            da("Object.assign", function(a) {
                return a || ea
            });
            var fa;

            function g(a, b, c, d, f) {
                a && b && ("undefined" == typeof c && (c = 1E3), "undefined" == typeof d && (d = 20), 0 > --d ? "function" === typeof f && f() : b() ? a() : setTimeout(function() {
                    g(a, b, c, d, f)
                }, c))
            }

            function h(a) {
                var b = "someText".trim,
                    c = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                fa = b && !b.call(new String("\ufeff\u00a0")) ? function(d) {
                    return null == d ? "" : b.call(d)
                } : function(d) {
                    return null == d ? "" : (d + "").replace(c, "")
                };
                return fa(a)
            }

            function ha(a) {
                if (!a) return !1;
                var b = a.getRootNode ? a.getRootNode({
                    composed: !1
                }) : a.ownerDocument;
                return !!(a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_CONTAINS && (a.offsetWidth || a.offsetHeight || a.getClientRects().length))
            }

            function ia(a) {
                return "string" == typeof a ? ia(document.querySelectorAll(a)) : Array.prototype.filter.call(a, function(b) {
                    return ha(b)
                })
            };

            function ja(a, b) {
                b || (b = document);
                return b instanceof Element || b instanceof Document ? Array.prototype.slice.call(b.querySelectorAll(a)) : "string" === typeof b ? ja(a, document.querySelectorAll(b)) : Array.isArray(b) || b instanceof HTMLCollection || b instanceof NodeList ? Array.prototype.reduce.call(b, function(c, d) {
                    return c.concat(Array.prototype.slice.call(d.querySelectorAll(a)))
                }, []) : []
            }

            function l(a, b) {
                if (a && a.nodeType && 9 === a.nodeType) return !1;
                var c = Element.prototype;
                l = function(d, f) {
                    return d && document.documentElement.contains(d) ? l.matches.call(d, f) : !1
                };
                l.matches = c.webkitMatchesSelector || c.mozMatchesSelector || c.msMatchesSelector || c.matches;
                return l(a, b)
            }

            function n(a, b) {
                n = Element.prototype.closest ? function(c, d) {
                    return c && c instanceof Element ? Element.prototype.closest.call(c, d) : null
                } : function(c, d) {
                    for (; c && !l(c, d);) c = c.parentElement;
                    return c
                };
                return n(a, b)
            };
            var ka = !1,
                la = Object.defineProperty && Object.defineProperty({}, "passive", {
                    get: function() {
                        ka = !0
                    }
                });
            document.addEventListener("test", function() {}, la);
            var v = ka ? {
                    passive: !0,
                    capture: !0
                } : !0,
                y = ka ? {
                    passive: !0,
                    capture: !1
                } : !1;

            function z(a) {
                function b() {
                    2 == ++c && a()
                }
                if (!~z.s.indexOf(a)) {
                    z.s.push(a);
                    var c = 0;
                    ma(b);
                    if ("function" == typeof ClickTaleIsRecording && !0 === ClickTaleIsRecording()) b();
                    else {
                        var d = window.ClickTaleOnRecording || function() {};
                        window.ClickTaleOnRecording = function() {
                            b();
                            return d.apply(this, arguments)
                        }
                    }
                }
            }
            z.s = [];

            function ma(a) {
                function b() {
                    c || (c = !0, a())
                }
                var c = !1;
                "loading" != document.readyState ? b() : document.addEventListener && document.addEventListener("DOMContentLoaded", b, !1)
            }

            function A(a, b, c, d, f) {
                if ("string" === typeof b && -1 != b.indexOf(" ")) return b.split(/\s+/).forEach(function(e) {
                    return A(a, e, c, d, f)
                }), a;
                if ("string" === typeof a) Array.prototype.forEach.call(document.querySelectorAll(a), function(e) {
                    A(e, b, c, d, f)
                });
                else if (a instanceof Array || a instanceof NodeList) Array.prototype.forEach.call(a, function(e) {
                    A(e, b, c, d, f)
                });
                else {
                    var k = "";
                    "string" == typeof c && ("mouseenter" == b ? (b = "mouseover", k = "mouseenter") : "mouseleave" == b && (b = "mouseout", k = "mouseleave"));
                    a.addEventListener(b, function(e,
                        q, x, m, w, r) {
                        return function(p) {
                            if ("function" === typeof x) x.apply(this, arguments), w && e.removeEventListener(q, arguments.callee, y);
                            else {
                                var t = p.relatedTarget,
                                    u = n(p.target, x);
                                u && e.compareDocumentPosition(u) & Node.DOCUMENT_POSITION_CONTAINED_BY && ("mouseenter" == r || "mouseleave" == r ? t && (t == u || u.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) || m.apply(u, arguments) : m.apply(u, arguments), w && e.removeEventListener(q, arguments.callee, y))
                            }
                        }
                    }(a, b, c, d, f, k), y)
                }
                return a
            }

            function B(a, b, c, d, f) {
                if ("string" === typeof b && -1 != b.indexOf(" ")) return b.split(/\s+/).forEach(function(e) {
                    return B(a, e, c, d, f)
                }), a;
                if ("string" === typeof a) Array.prototype.forEach.call(document.querySelectorAll(a), function(e) {
                    B(e, b, c, d, f)
                });
                else if (a instanceof Array || a instanceof NodeList) Array.prototype.forEach.call(a, function(e) {
                    B(e, b, c, d, f)
                });
                else {
                    var k = "";
                    "string" == typeof c && ("mouseenter" == b ? (b = "mouseover", k = "mouseenter") : "mouseleave" == b && (b = "mouseout", k = "mouseleave"));
                    a.addEventListener(b, function(e,
                        q, x, m, w, r) {
                        return function(p) {
                            if ("function" === typeof x) x.apply(this, arguments), w && e.removeEventListener(q, arguments.callee, v);
                            else {
                                var t = p.relatedTarget,
                                    u = n(p.target, x);
                                u && e.compareDocumentPosition(u) & Node.DOCUMENT_POSITION_CONTAINED_BY && ("mouseenter" == r || "mouseleave" == r ? t && (t == u || u.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) || m.apply(u, arguments) : m.apply(u, arguments), w && e.removeEventListener(q, arguments.callee, v))
                            }
                        }
                    }(a, b, c, d, f, k), v)
                }
                return a
            }

            function na(a, b) {
                document.addEventListener("mouseup", function(c) {
                    a === c.target && b();
                    document.removeEventListener("mouseup", arguments.callee, v)
                }, v)
            }

            function oa(a, b) {
                function c(d) {
                    document.removeEventListener("touchend", arguments.callee, v);
                    a === d.target && b()
                }
                document.addEventListener("touchend", c, v);
                document.addEventListener("touchmove", function(d) {
                    document.removeEventListener("touchmove", arguments.callee, v);
                    document.removeEventListener("touchend", c, v)
                }, v)
            }

            function C(a, b) {
                var c = D();
                c && (c.m ? C = oa : C = na, C(a, b))
            }

            function pa(a, b) {
                if ("string" === typeof a) Array.prototype.forEach.call(document.querySelectorAll(a), function(d) {
                    pa(d, b)
                });
                else if (a instanceof Array || a instanceof NodeList) Array.prototype.forEach.call(a, function(d) {
                    pa(d, b)
                });
                else {
                    var c = document.createEvent("HTMLEvents");
                    c.initEvent(b, !0, !0);
                    return !a.dispatchEvent(c)
                }
            };

            function qa(a) {
                if (window.CSS && "function" === typeof window.CSS.escape) qa = function(d) {
                    return window.CSS.escape.call(window.CSS, d)
                };
                else {
                    var b = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
                        c = function(d, f) {
                            return f ? "\x00" === d ? "\ufffd" : d.slice(0, -1) + "\\" + d.charCodeAt(d.length - 1).toString(16) + " " : "\\" + d
                        };
                    qa = function(d) {
                        return d.replace(b, c)
                    }
                }
                return qa(a)
            }

            function ra(a) {
                return btoa(encodeURIComponent(a).replace(/%([0-9A-F]{2})/g, function(b, c) {
                    return String.fromCharCode(+("0x" + c))
                }))
            };

            function sa(a) {
                window._uxa = window._uxa || [];
                window._uxa.push.apply(window._uxa, arguments)
            }

            function ta(a) {
                a = void 0 === a ? window.location.pathname + window.location.hash.replace("#", "?__") : a;
                sa(["trackPageview", a])
            }

            function E(a, b) {
                sa(["trackDynamicVariable", {
                    key: a,
                    value: b
                }])
            };
            var ua, va, wa, xa, ya = !1;

            function F(a) {
                "function" === typeof ClickTaleExec && ClickTaleExec(a)
            }

            function za() {
                "function" === typeof ClickTaleStop && ClickTaleStop()
            }

            function G(a, b) {
                "function" === typeof ClickTaleEvent && (b ? !0 !== G.flags[a] && (G.flags[a] = !0, ClickTaleEvent(a)) : ClickTaleEvent(a))
            }
            G.flags = {};

            function Ba(a) {
                "function" === typeof ClickTaleRegisterFormSubmit && ClickTaleRegisterFormSubmit(a)
            }

            function Ca(a) {
                "function" === typeof ClickTaleRegisterFormSubmitSent && ClickTaleRegisterFormSubmitSent(a)
            }

            function Da() {
                var a = H;
                "function" === typeof ClickTaleRegisterFormSubmitSuccess && (a ? ClickTaleRegisterFormSubmitSuccess(a) : ClickTaleRegisterFormSubmitSuccess())
            }

            function Ea(a) {
                "function" === typeof ClickTaleRegisterFormSubmitFailure && (a ? ClickTaleRegisterFormSubmitFailure(a) : ClickTaleRegisterFormSubmitFailure())
            }

            function Fa(a, b, c) {
                return "function" === typeof window.ClickTaleLogicalForm ? window.ClickTaleLogicalForm(a, b, c) : 0
            }

            function Ga(a, b) {
                a && "object" == typeof a && "string" == typeof b && (window.ClickTaleContext && -1 != document.referrer.indexOf(location.hostname) && window.parent.ct && window.parent.ct.ElementAddressing && "function" === typeof window.parent.ct.ElementAddressing.forceSetCustomElementID ? window.parent.ct.ElementAddressing.forceSetCustomElementID(a, b) : (window.ClickTaleContext || "function" !== typeof ClickTaleSetCustomElementID || -1 == ClickTaleSetCustomElementID.toString().indexOf("duplicate registration of custom id") ? window.ClickTaleSetCustomElementID =
                    window.ClickTaleSetCustomElementID || function(c, d) {
                        c.ClickTale = c.ClickTale || {};
                        c.ClickTale.CustomID = d
                    } : Ga = function(c, d) {
                        c.ClickTale = c.ClickTale || {};
                        c.ClickTale.CustomID = d
                    }, window.ClickTaleSetCustomElementID(a, b)))
            }

            function Ha() {
                Array.prototype.forEach.call(document.querySelectorAll('[id]:not([id=""])'), function(a) {
                    if (!l(a, 'input[type="hidden"], script')) {
                        var b = a.getAttribute("id");
                        b.match(/(?:\r|\n)/) && "function" === typeof ClickTaleNote && ClickTaleNote("ctlib.api.SetCustomElementIdDuplicates: ids with line break found!");
                        a = document.querySelectorAll('[id="' + qa(b) + '"]');
                        var c = Ia;
                        1 < a.length && !c[b] && (c[b] = !0, Array.prototype.forEach.call(a, function(d, f) {
                            Ga(d, b.replace(/(\r|\n|\r\n|\s+)+/g, "_").replace(/\W/g, "_") +
                                "_" + f)
                        }))
                    }
                })
            }
            var Ia = {};

            function Ja(a, b) {
                "function" === typeof ClickTaleLogical && (G.flags = {}, Ia = {}, I.h && I.h instanceof Ka && I.h.clear(), b ? ClickTaleLogical(a, b) : ClickTaleLogical(a))
            }

            function D() {
                if ("function" === typeof ClickTaleDetectAgent) {
                    var a = ClickTaleDetectAgent();
                    if (a) return D = function() {
                        return a
                    }, D()
                }
                return null
            }

            function La() {
                "function" === typeof ClickTaleUploadPage && ClickTaleUploadPage(void 0, void 0)
            }

            function Ma(a) {
                if ("function" === typeof ClickTaleRegisterTouchAction) {
                    var b = a.getBoundingClientRect();
                    ClickTaleRegisterTouchAction(a, b.left + document.body.scrollLeft, b.top + document.body.scrollTop)
                }
            }

            function Na(a, b, c) {
                if ("boolean" != typeof Oa) {
                    var d = D();
                    d && (Oa = !!d.m)
                }
                a || (a = "mousedown", Oa && (a = "touchstart"));
                c = c || "img, a, button, textarea, input, select";
                Oa && (c += ", label[for]");
                B(document, a, c, function(f) {
                    var k = f.target,
                        e = this;
                    if (!b || !l(this, b))
                        if (Oa)
                            if (l(this, "label[for]")) C(k, function(m) {
                                return function() {
                                    var w, r;
                                    (w = m.getAttribute("for")) && (r = document.getElementById(w)) && Ma(r)
                                }.bind(e)
                            }(k, f));
                            else {
                                var q = -1,
                                    x = function(m) {
                                        clearTimeout(q);
                                        document.removeEventListener("touchstart", arguments.callee,
                                            y);
                                        C(k, function(w) {
                                            return function() {
                                                function r(t) {
                                                    document.removeEventListener("touchend", arguments.callee, y);
                                                    clearTimeout(p)
                                                }
                                                var p = -1;
                                                document.addEventListener("touchend", r, y);
                                                p = setTimeout(function() {
                                                    document.removeEventListener("touchend", r, y);
                                                    Ma(w)
                                                }, 50)
                                            }.bind(e)
                                        }(k, f))
                                    };
                                document.addEventListener("touchstart", x, y);
                                q = setTimeout(function() {
                                    document.removeEventListener("touchstart", x, y);
                                    Ma(k)
                                }, 50)
                            }
                    else C(k, function(m, w) {
                        return function() {
                            function r(t) {
                                t.target === m && (Pa = !0);
                                document.removeEventListener("click",
                                    arguments.callee, !0);
                                clearTimeout(p)
                            }
                            var p = setTimeout(function() {
                                Pa || "function" === typeof window.ClickTaleRegisterElementAction && ClickTaleRegisterElementAction("click", w);
                                document.removeEventListener("click", r, !0);
                                Pa = void 0
                            }, 200);
                            document.addEventListener("click", r, !0)
                        }.bind(e)
                    }(k, f))
                })
            }
            var Oa, Pa;

            function Qa(a, b, c, d) {
                Qa.o && (Qa.o = !1, d = d || 400, "number" == typeof c && (d = c, c = ""), b = b || document.location.href, za(), window.ClickTaleIncludedOnDOMReady = !0, window.ClickTaleIncludedOnWindowLoad = !0, La(), Ja(b, c), g(a, ClickTaleIsRecording, 1E3, 2), setTimeout(function() {
                    Qa.o = !0
                }, d))
            }
            Qa.o = !0;

            function Ra(a) {
                var b = Sa,
                    c = Ta,
                    d = Ua;
                if (Va) {
                    Va = !1;
                    var f = f || 400;
                    d ? (za(), window.ClickTaleIncludedOnDOMReady = !0, window.ClickTaleIncludedOnWindowLoad = !0, La(), Ja(a.href, c)) : (Array.isArray(window.ClickTaleOnStop) && window.ClickTaleOnStop.forEach(function(k) {
                        if ("function" === typeof k) try {
                            k.call(window)
                        } catch (e) {}
                    }), ta(a.pathname));
                    b();
                    clearTimeout(Wa);
                    Wa = setTimeout(function() {
                        Va = !0
                    }, f)
                }
            }
            var Wa = -1,
                Va = !0;

            function Xa(a) {
                "function" === typeof ClickTaleAddAugmentElementPathHandler && ClickTaleAddAugmentElementPathHandler("Linkanalytics", a)
            }
            var Ya = [];

            function Ka() {
                this.l = !1;
                this.g = "";
                this.init = function(a) {
                    this.l || (this.l = !0, document.addEventListener("input", this.u, v));
                    this.B(a);
                    this.g = this.g ? this.g + "," + a : a
                };
                this.u = function(a) {
                    a = a.target;
                    if (l(a, this.g)) {
                        var b = ja(this.g).indexOf(a);
                        F("document.querySelectorAll('" + this.g + "')[" + b + "].value = Base64Decode('" + ra(a.value) + "');")
                    }
                }.bind(this);
                this.B = function(a) {
                    var b = "";
                    ja(a).forEach(function(c, d) {
                        b += "document.querySelectorAll('" + a + "')[" + d + "].value = Base64Decode('" + ra(c.value) + "'); "
                    });
                    b && F(b)
                };
                this.clear =
                    function() {
                        document.removeEventListener("input", this.u, v);
                        this.l = !1;
                        this.g = ""
                    }
            }

            function I(a) {
                I.h = I.h || new Ka;
                I.h.init(a)
            }
            I.h = null;
            var J = G,
                K = A,
                Za = B,
                $a = pa,
                L = Ga;

            function M(a, b) {
                return a instanceof Element ? b instanceof Element ? a === b : l(a, b) : !1
            }
            var O = n,
                P = ia,
                ab = C;
            var Ua = !1,
                Q = "",
                R = "",
                cb = !1,
                db = !0,
                Ta = location.href,
                S = !1,
                T = !1,
                H = null,
                U = null,
                eb = !1,
                V, W = "",
                fb = !1,
                X = {
                    name: "Agent Name",
                    email: "Agent Email",
                    phone: "Agent Phone",
                    thank_you: "Thank You",
                    agent: "Agent",
                    consumer: "Home b_s",
                    pro: "Prof"
                },
                gb = [{
                    j: /\//i,
                    location: location.pathname,
                    i: "Overview"
                }, {
                    j: /\/padirect\//i,
                    location: location.pathname,
                    i: "Agent Direct"
                }, {
                    j: /\/products\/concierge\//i,
                    location: location.pathname,
                    i: "Agent Concierge"
                }, {
                    j: /\/products\/agent-account\//i,
                    location: location.pathname,
                    i: "Agent Account"
                }, {
                    j: /\/contact\//i,
                    location: location.pathname,
                    i: "Contact"
                }];

            function hb(a, b) {
                g(function() {
                    ib(b)
                }, function() {
                    return !!ha(document.querySelector(a))
                }, 250, 25)
            }(function(a) {
                Ya = a;
                var b = "";
                a.forEach(function(c) {
                    !0 === c[1] && (b += "," + c[0])
                });
                b && Na("", "", b.replace(/^,/, ""));
                Xa(function(c) {
                    return function(d) {
                        for (var f = 0, k = c.length; f < k; f++) {
                            var e = c[f],
                                q = e[0];
                            if (d && l(d, q) && (q = e[2], "function" != typeof q || q())) return {
                                data: {
                                    interesting: e[1]
                                }
                            }
                        }
                        return null
                    }
                }(Ya))
            })([
                ["span.btnPrimary , .goldberg-faqs dt", !0]
            ]);

            function jb() {
                var a = document.querySelector(".starfox-modal--active .slick-current .starfox-heading");
                return a && (a = a.textContent.trim()) ? (a = a.toLowerCase().split(/[!?.]/)[0].replace(/\s/g, "-"), a.replace(/what's/i, "what-is")) : ""
            }

            function kb() {
                fb || (fb = !0, g(function() {
                    fb = !1;
                    J("Google Sign-In Modal")
                }, function() {
                    return !!document.querySelector('div[id="credential_picker_container"]')
                }, 250, 50, function() {
                    fb = !1
                }))
            }

            function ib(a) {
                a = void 0 === a ? "" : a;
                var b = Object.assign({}, document.location);
                a && (a = "__" + a, 0 > b.href.indexOf("#") && (a = "?" + a));
                b.href = b.href.replace("#", "?__") + a;
                b.pathname += b.hash.replace("#", "?__") + a;
                Ra(b)
            }

            function lb(a) {
                var b = "";
                a && "string" == typeof a && (a = document.querySelector(a));
                a && a instanceof HTMLElement && (b = a.textContent || a.innerText || a.value || "") && (b = h(b.replace(/\s+/g, " ")));
                return b
            }

            function Y(a) {
                a && "string" === typeof a && J(a)
            }

            function Z(a) {
                a && "string" == typeof a && (a = document.querySelectorAll(a));
                if (a instanceof NodeList)
                    for (var b = 0; b < a.length; b++)
                        if (Z(a[b])) return !0;
                return a instanceof Element ? !!(a && a.compareDocumentPosition(document) & Node.DOCUMENT_POSITION_CONTAINS && (0 < a.offsetWidth && 0 < a.offsetHeight || 0 < a.getClientRects().length)) : !1
            }

            function mb() {
                g(function() {
                    var a = window.ga.getAll();
                    "object" === typeof a && 0 < a.length && ((a = a[0].get("dimension12")) ? (E("GAdimension12", a), J("Onload | " + a), /(?:consumer|agent)/i.test(a) ? (E("User Status", "logged in user"), Y("Onload | logged in user")) : E("User Status", "Not Logged in user")) : J("Onload | Unrecognized"))
                }, function() {
                    return "function" === typeof window.ga && "function" === typeof window.ga.getAll
                }, 100, 60)
            }

            function nb() {
                if ("boolean" === typeof cb) {
                    var a = cb.toString();
                    "function" === typeof ClickTaleField && ClickTaleField("isMobile", a)
                }
            }

            function ob() {
                -1 < R.indexOf("/products/advertising/") && g(function() {
                    P(".goldberg-section.optimizely-v1").length ? (Y("Onload | Zillow Contact Us Version B"), V = "vB") : P(".goldberg-section.optimizely-v2").length ? (Y("Onload | Zillow Explore Pricing version C"), V = "vC") : P(".goldberg-section.optimizely-original").length && (E("Get Started Control", "Get Started Control"), Y("Onload | Zillow Get Started Control"), V = "vControl")
                }, function() {
                    return 0 < P("#jumbotron a").length
                }, 1E3, 5)
            }

            function pb() {
                var a;
                g(function() {
                    var b = a[0];
                    M(b, ".js-available-package-blurb") ? (Y("onload | here\u2019s what available"), E("here\u2019s what available", "here\u2019s what available")) : M(b, ".js-limited-package-blurb") ? Y("Onload | Availability is limited") : M(b, ".js-unavailable-package-blurb") ? Y("Onload | No Advertising availability found") : M(b, ".js-other-zips-package-blurb") && (b = document.querySelector(".js-other-zips-package-blurb .js-other-package-zips")) && (-1 < b.innerText.indexOf("and") ? (Y("Onload | no availability 2+ recommendations"),
                        E("no availability 2+ recommendations", "no availability 2+ recommendations")) : Y("Onload | no availability 1 recommendation"))
                }, function() {
                    a = P(".js-available-package-blurb,.js-other-zips-package-blurb,.js-limited-package-blurb,.js-unavailable-package-blurb");
                    return 0 < a.length
                }, 1E3, 5)
            }

            function qb() {
                K(document, "keydown", '#viewPricingBtn,.modal-body input[name="fullName"],.modal-body input[name="tfa_Email"],.modal-body input[name="tfa_Phone"],#zipcodeInput,input#fullName,input#tfa_Email,input#tfa_Phone', function(a) {
                    if ("vControl" == V || "vB" == V) M(this, '.modal-body input[name="fullName"]') ? J("Action | Get Started Modal | Name", !0) : M(this, '.modal-body input[name="tfa_Email"]') ? J("Action | Get Started Modal | Email", !0) : M(this, '.modal-body input[name="tfa_Phone"]') && J("Action | Get Started Modal | Phone", !0);
                    "zipcode" == V && (M(this, "#zipcodeInput") ? (J("Action | Explore your options | zip code field", !0), "Enter" != a.key && 13 != a.keyCode || document.querySelector("#viewPricingBtn[disabled]") || J("Action | Explore your options | view pricing", !0)) : "Enter" != a.key && 13 != a.keyCode || !M(this, "#viewPricingBtn") || J("Action | Explore your options | view pricing", !0));
                    "ContactUsForm" == V && (M(this, "input#fullName") ? J("Action | contact us | name", !0) : M(this, "input#tfa_Email") ? J("Action | contact us | email", !0) : M(this, "input#tfa_Phone") &&
                        J("Action | contact us | phone number", !0))
                })
            }

            function rb() {
                setTimeout(function() {
                    P(".modal-body input.form-control").length && Y("Onload | Get started Modal")
                }, 500)
            }

            function sb() {
                setTimeout(function() {
                    P(".modal-body a.text-success").length && Y("Onload | Get Started Modal | Confirmation")
                }, 500)
            }

            function tb() {
                var a, b, c, d;
                g(function() {
                    b = 1 != a.length || document.querySelector(".pa-contentBlock .pa-dataValue") ? "PA" : "Non PA";
                    d = 1 == c.length ? "License number exist" : "No License number";
                    E("License number Status", d);
                    E("PA Status", b);
                    J("Onload | Dashboard | " + b);
                    J("Onload | Dashboard | " + d)
                }, function() {
                    a = document.querySelectorAll(".pa-buttonRow .pa-button");
                    c = document.querySelectorAll(".pa-cardLine a.analyticsCTA");
                    return !!a.length && !!c.length
                }, 200, 10)
            }

            function Sa() {
                Ha();
                Q = "";
                Ta = location.href;
                R = document.location.pathname.toLowerCase();
                if (db) db = !1;
                else
                    for (var a = window.ClickTaleSettings && window.ClickTaleSettings.PTC && window.ClickTaleSettings.PTC.InitFuncs ? window.ClickTaleSettings.PTC.InitFuncs : [], b = 0, c = a.length; b < c; b++)
                        if ("function" === typeof a[b]) a[b]();
                Ua ? nb() : z(function() {
                    Ua = !0;
                    nb()
                });
                kb();
                mb();
                /premieragent.zillow.com\/products\/advertising\//i.test(location.href) ? Q = "Advertising" : "/get-more-real-estate-leads-updated" == R ? Q = "Get More Leads" : /\/agent-resources\//i.test(location.pathname) ?
                    (Q = "Agent Resources", /download\/open-houses-5-ways-drive-traffic\//i.test(location.pathname) && (Q += " - Get free download form", Z(".btn-primary.download") && (Q += " - Success"))) : Array.prototype.forEach.call(gb, function(q) {
                        q.j.test(q.location) && (Q = q.i)
                    });
                if (Q) {
                    J("Onload | " + Q, !0);
                    if (Z("#signup-form") && (S = !0, J('Onload | "sign up" form', !0), E("sign up form", "sign up form"), a = document.querySelectorAll("#fullName, #tfa_5, #tfa_6"), 0 < a.length))
                        for (b = 0; b < a.length; b++)
                            if (a[b].value) {
                                E("Pre-filled form", "Pre-filled form");
                                J("Onload | Pre-filled form", !0);
                                break
                            }
                    if (0 < document.querySelectorAll(".lead-gen-form>form").length && (T = !0, a = document.querySelectorAll('[id="tfa_FirstName"], [id="tfa_LastName"], [id="tfa_Email"], [id="tfa_Phone"]'), 0 < a.length))
                        for (b = 0; b < a.length; b++)
                            if (a[b].value) {
                                J("Onload | Pre-filled form", !0);
                                break
                            }
                    "Agent Account" == Q && (b = "", 0 < document.querySelectorAll('a[href*="/Register/"]').length && (b = "Not"), E("User Status", b + " Logged in user"), Y("Onload | " + Q + " | " + b + " Logged in user"))
                }
                "/get-more-leads-thank-you.html" ==
                R && Y("Onload | Get More Leads | Thank You");
                R.indexOf("dashboard") && tb();
                ub();
                (T || S) && vb(); - 1 < R.indexOf("zipcode") ? (Y("Onload | Explore Your Option \u2013Enter Zip"), E("Explore Your Option \u2013Enter Zip", "Explore Your Option \u2013Enter Zip"), V = "zipcode") : -1 < R.indexOf("recommended") ? (E("What\u2019s available in your area modal", "What\u2019s available in your area modal"), Y("Onload | What\u2019s available in your area modal"), pb(), V = "recommended") : -1 < R.indexOf("inbound_form") && (Y("Onload | contact us"),
                    V = "ContactUsForm");
                ob();
                var d = document.querySelector("div.goldberg-modal");
                if (d)
                    if (d.classList.contains("show")) Y("OL | PA Advertising | Getting Started Modal"), wb();
                    else if (window.MutationObserver) {
                    var f = new window.MutationObserver(function() {
                        d && d.classList.contains("show") && (f.disconnect(), Y("OL | PA Advertising | Getting Started Modal"), wb())
                    });
                    b = {
                        attributes: !0,
                        attributeFilter: ["class"]
                    };
                    f && "function" === typeof f.observe && d && f.observe(d, b)
                }
                if (/\/premier\-agent\//i.test(R) || /\/z\/rental\-property\-advertising\//i.test(R)) {
                    var k =
                        document.querySelector('form[data-ga_category="zpa|form"], form[data-ga_category="rentals_mf|form"]');
                    if (k && k.querySelector("input") && window.MutationObserver) {
                        var e = new window.MutationObserver(function() {
                            k && k.querySelector("h2.apex-form-success") && (e.disconnect(), ib("submission_confirmation"))
                        });
                        b = {
                            childList: !0
                        };
                        e && "function" === typeof e.observe && e.observe(k, b)
                    }
                }
            }

            function wb() {
                if (window.MutationObserver) {
                    var a = new window.MutationObserver(function() {
                            if (c) {
                                c.querySelector("div.slick-track > div.slick-slide") !== d && (d = c.querySelector("div.slick-track > div.slick-slide")) && L(d, "firstStep");
                                var f = c.querySelector("div.slick-active div[data-step], div.slick-active div[data-path]");
                                if (f) {
                                    var k = f.getAttribute("data-step") || f.getAttribute("data-path");
                                    k && X[k] && W != X[k] && ("pro" != k && "consumer" != k || L(f, k), W = X[k], Y("A | PA Advertising | " + X[k]))
                                }
                            }
                        }),
                        b = {
                            attributes: !0,
                            attributeFilter: ["style"]
                        },
                        c = document.querySelector("div.goldberg-modal div.slick-list");
                    if (a && "function" === typeof a.observe && c) {
                        var d = c.querySelector("div.slick-track > div.slick-slide");
                        d && L(d, "firstStep");
                        a.observe(c, b)
                    }
                }
            }

            function vb() {
                if (!xb) {
                    xb = !0;
                    var a = [],
                        b = "",
                        c = [];
                    S && (b = "Sign up", a = Array.prototype.slice.call(document.querySelectorAll("#pro-type-select, #fullName, #tfa_5, #tfa_6, #roleSelect, #teamSizeSelect")), c = Array.prototype.slice.call(document.querySelectorAll("#formSubmitButton")));
                    if (T) {
                        var d = document.querySelectorAll(".lead-gen-form>form");
                        if (0 < d.length) {
                            b = "Download form";
                            a = Array.prototype.slice.call(d[0].querySelectorAll('select[name="user_type"], [id="tfa_FirstName"], [id="tfa_LastName"], [id="tfa_Email"], [id="tfa_Phone"]'));
                            c = Array.prototype.slice.call(d[0].querySelectorAll(".btn-primary"));
                            var f = [],
                                k = "",
                                e = [];
                            2 == d.length && (k = "Download form 2", f = Array.prototype.slice.call(d[1].querySelectorAll('select[name="user_type"], [id="tfa_FirstName"], [id="tfa_LastName"], [id="tfa_Email"], [id="tfa_Phone"]')), e = Array.prototype.slice.call(d[1].querySelectorAll(".btn-primary")))
                        }
                    }
                    0 < a.length && "string" == typeof b && 0 < c.length && ("function" === typeof ClickTaleFormDisableAll && ClickTaleFormDisableAll(), H = Fa(b, a, c), T && 0 < f.length && "string" ==
                        typeof k && e && 0 < e.length && (U = Fa(k, f, e)))
                }
            }
            var xb;

            function yb() {
                var a = !1,
                    b = !1;
                g(function() {
                    a && (J("Action | " + Q + " | Validation Error"), S ? (H && Ea(H), Array.prototype.forEach.call(document.querySelectorAll(".fieldWarning input[placeholder], .fieldWarning select>option[disabled]"), function(c) {
                        var d = "";
                        M(c, "input[placeholder]") && (d = c.getAttribute("placeholder"));
                        M(c, "option[disabled]") && (d = M(c, "#pro-type-select>option[disabled]") ? '"I am"' : c.textContent);
                        d && J("Action | " + Q + " | Validation Error | " + d, !0)
                    })) : T && (H && (Z(".visible-xs .error") || Z(".visible-xs .lead-gen-form>form input:invalid")) &&
                        Ea(H), U && (Z(":not(.visible-xs) .error") || Z(":not(.visible-xs) .lead-gen-form>form input:invalid")) && Ea(U)));
                    b && (J("Action | " + Q + ' | "Sign Up" form submitted Successfuly', !0), H && Da())
                }, function() {
                    S ? (a = Z(".fieldWarning"), b = Z("#thank-you-div")) : T && (a = Z(".error") || Z(".lead-gen-form>form input:invalid"));
                    return (S || T) && (a || b)
                }, 1E3, 10)
            }

            function zb() {
                T ? (J("Action | " + Q + " | Download form submitted", !0), H && Z(".visible-xs .lead-gen-form>form") && (Ba(H), Ca(H)), U && (Ba(U), Ca(U))) : S && (H && (Ba(H), Ca(H)), J("Action | " + Q + ' | "Sign Up" form submitted', !0), Z("#teamSizeSelect") && J("Action | " + Q + ' | "Sign Up" form submitted - with team size', !0));
                yb()
            }

            function ub() {
                if (T) {
                    var a = 0;
                    Array.prototype.forEach.call(document.querySelectorAll(".lead-gen-form>form"), function(c) {
                        L(c, "downloadform_" + a);
                        a++
                    });
                    a = 0;
                    Array.prototype.forEach.call(document.querySelectorAll('select[name="user_type"]'), function(c) {
                        L(c, "iam_" + a);
                        a++
                    })
                }
                var b = document.querySelector('div.goldberg-modal div[id*="paxl-widget-multistep"]');
                b && L(b, "goldberg-modal")
            }

            function Ab() {
                if (!window.ClickTaleFirstPCCGo) {
                    window.ClickTaleFirstPCCGo = !0;
                    var a = D();
                    a && (cb = a.m);
                    Sa();
                    a = "#header-nav a";
                    if (S) a += ", #formSubmitButton, .consumer-zillow-links a, .pro-zillow-links a";
                    else if ("Agent Account" == Q) a += ", a.btn[gelement]";
                    else if (T) a += ", .lead-gen-form>form .btn-primary";
                    else if ("Advertising" == Q || "Get More Leads" == Q) a += ", button#formSubmitButton";
                    else if (R.match(/\/premier-agent\/solutions\/(real-estate-agent|real-estate-team)\//) || -1 < R.indexOf("/premier-agent/connect-live-leads/") ||
                        "/premier-agent/" == R || -1 < R.indexOf("/rental-property-advertising/")) a += ",.starfox-button, .starfox-modal .starfox-modal a, .starfox-modal button, .starfox-modal label";
                    qb();
                    a += ',#jumbotron a.goldberg-link,.modal-body input.btn,.goldberg-section.optimizely-v1 a,#jumbotron a#optimizely-v1-cta,.goldberg-section.optimizely-v2 a,#viewPricingBtn,.goldberg-section.optimizely-original a,.modal-body input[value="Get started"],button[glabel="edit_zip"],.mapboxgl-canvas,span[data-tooltip*=\'The average\'],span[data-tooltip*=\'ZIP codes\'],span[data-tooltip*=\'The amount\'],span[data-tooltip*=\'The estimated\'],span[data-tooltip*=\'The total\'],button.js-btn-proceed,button.js-btn-customize-package,button.js-btn-contact-us,input[type="number"],button.change-zip-button,#formSubmitButton,a[glabel="close"],.btn-join-waitlist,#zipcodeInput,div.goldberg-modal div[data-path] button, div.goldberg-modal div[data-path] li >a[class*="list-item"],a[title="Go to Zillow"],[class*="starfox-button--primary"],.starfox-modal__content .btn.btn-primary, button[title="Sign in"], button[title="Join"], [href*="/user/acct/login"]';
                    var b = cb ? "touchstart" : "mousedown";
                    a && Za(document, b, a, function(c) {
                        var d = c.target;
                        ab(d, function(f, k, e) {
                            return function() {
                                if ((R.match(/\/premier-agent\/solutions\/(real-estate-agent|real-estate-team)\//) || -1 < R.indexOf("/premier-agent/connect-live-leads/") || "/premier-agent/" == R || -1 < R.indexOf("/rental-property-advertising/")) && M(e, ".starfox-button, .starfox-modal a, .starfox-modal, .starfox-modal button, .starfox-modal label")) {
                                    var q = jb(),
                                        x = "";
                                    g(function() {
                                        ib(x)
                                    }, function() {
                                        x = jb();
                                        return x != q
                                    }, 250, 40)
                                } - 1 <
                                    R.indexOf("/rental-property-advertising/") && O(f, 'input[name="Original_Company_Name"]') && hb('input[name="Original_Company_Name"]', "What_is_your_company_name_and_location"); - 1 < R.indexOf("/rental-manager/") && O(f, 'a[title="Go to Zillow"]') && ib("go-to-zillow-link");
                                if (R.match(/\/rental-property-advertising\/(lease-connect|rent-connect)\//)) {
                                    var m = R.match("lease-connect") ? "Lease" : "Rent";
                                    O(f, '[class*="starfox-button--primary"]') ? hb(".starfox-modal__content .btn.btn-primary", m + "_Connect_Form_Start") : O(f,
                                        ".starfox-modal__content .btn.btn-primary") && hb(".apex-form-success", m + "_Connect_Thank_You")
                                }
                                R.match(/\/solutions\/real-estate-broker\//) && (O(f, '[class*="starfox-button--primary"][data-ga-action="modal_open"]') ? hb(".starfox-modal__content .btn.btn-primary", "Broker_Solution_Form_Start") : O(f, ".starfox-modal__content .btn.btn-primary") && hb(".apex-form-success", "Broker_Solution_Thank_You"));
                                if (W && (M(e, "div.goldberg-modal div[data-path] button") && (m = h(e.textContent)) && Y("A | PA Advertising | " + W + " | " +
                                        m), M(e, 'div.goldberg-modal div[data-path] li >a[class*="list-item"]') && (m = O(e, "div[data-path]")))) {
                                    var w = m.getAttribute("data-path");
                                    if ((m = h(e.textContent)) && w) {
                                        var r = m.split(" ");
                                        "consumer" == w ? m = r[0] : "pro" == w && (m = r[r.length - 1]);
                                        m && Y("A | PA Advertising | " + W + " | " + m)
                                    }
                                }
                                O(e, 'button[title="Sign in"], button[title="Join"], [href*="/user/acct/login"]') && (kb(), g(function() {
                                        J("Zillow Sign-In Modal")
                                    }, function() {
                                        return !!document.querySelector("#reg-login .act-auth-container, #login-anchor .act-auth-container")
                                    },
                                    150, 40));
                                V && ("zipcode" == V ? M(e, "#viewPricingBtn") ? (Y("Action | Explore your options | view pricing"), $a(document.body, "keydown")) : M(e, "#zipcodeInput") && J("Action | Explore your options | zip code field", !0) : "vControl" == V ? M(e, "#jumbotron a.goldberg-link") ? (Y("Action | Control | Get Started"), rb()) : M(e, ".goldberg-section.optimizely-original a") ? (Y("Action | Control | Contact us"), rb()) : M(e, '.modal-body input[value="Get started"]') && (Y("Action | Get started Modal | Get Started"), sb()) : "vB" == V ? M(e, "#jumbotron a.goldberg-link") ?
                                    (Y("Action |  Version B | Get started -hero"), rb()) : M(e, "#jumbotron a#optimizely-v1-cta") ? Y("Action |  Version B | Explore Pricing -hero") : M(e, '.goldberg-section.optimizely-v1 a[href="#modal"]') ? (Y("Action |  Version B | Contact Us -upsell"), rb()) : M(e, '.goldberg-section.optimizely-v1 a[href*="zipcode"]') ? Y("Action |  Version B | Explore Pricing \u2013upsell") : M(e, '.modal-body input[value="Get started"]') && (Y("Action | Get started Modal | Get Started"), sb()) : "vC" == V ? M(e, "#jumbotron a.goldberg-link") ?
                                    Y("Action |  Version C | Explore Pricing -hero") : M(e, '.goldberg-section.optimizely-v2 a[href*="zipcode"]') && Y("Action |  Version C | Explore Pricing \u2013 upsell") : "recommended" == V ? M(e, 'button[glabel="edit_zip"]') ? Y("Action | Availability modal | edit") : M(e, ".mapboxgl-canvas") ? Y("Action | Clicked on map") : M(e, "span[data-tooltip*='ZIP codes']") ? Y("Action | Available in your area | Zip") : M(e, "span[data-tooltip*='The average']") ? Y("Action | Available in your area | Avg home $") : M(e, "span[data-tooltip*='The amount']") ?
                                    Y("Action | Available in your area | Budget") : M(e, "span[data-tooltip*='The estimated']") ? Y("Action | Available in your area | Est ROI") : M(e, "span[data-tooltip*='The total']") ? Y("Action | Available in your area | Total") : M(e, "button.js-btn-proceed") ? Y("Action | Availability modal| proceed") : M(e, "button.js-btn-customize-package") ? Y("Action | Availability modal| customize") : M(e, "button.js-btn-contact-us") ? Y("Action  |available in your area | contact us") : M(e, 'input[type="number"]') ? Y("Action | Available In Your Area Modal | zip code") :
                                    M(e, "button.change-zip-button") ? Y("Action | Availability modal | ok") : M(e, 'a[glabel="close"]') ? Y("Action | Click on x") : M(e, ".btn-join-waitlist") && Y("Action | Availability modal | Join waitlist") : "ContactUsForm" == V && M(e, "#formSubmitButton") && Y("Action | contact us | clicked contact us"));
                                M(e, "#header-nav a") && (m = O(e, ".menu-item")) && (m = m.querySelector("a.nav-link")) && (M(f, ".dropdown-item") ? (w = lb(f)) && Y("Action | Top Nav | " + m + " | Clicks " + w) : Y("Action | Top Nav | Clicks " + m));
                                S ? M(e, "#formSubmitButton") ?
                                    (J("Action | " + Q + " | Clicked on Get Started", !0), Z("#teamSizeSelect") && J("Action | " + Q + " | Clicked on Get Started - with team size", !0), zb()) : M(e, ".pro-zillow-links a") ? M(e, "#thank-you-div .pro-zillow-links a") ? J("Action | " + Q + ' | Clicked on any "While your\u2019e waiting" option', !0) : (J("Action | " + Q + ' | Clicked on any "other professional" option', !0), J("Action | " + Q + " | Didn\u2019t submit the Sign Up form", !0)) : M(e, ".consumer-zillow-links a") && (J("Action | " + Q + ' | Clicked on any "Home buyer / seller" option', !0), J("Action | " + Q + " | Didn\u2019t submit the Sign Up form", !0)) : "Agent Account" == Q ? M(e, "a.btn[gelement]") && (m = f.textContent) && (O(f, "#signup") && (m += " (bottom)"), J("Action | " + Q + ' | Clicked on "' + h(m) + '"', !0)) : T && M(e, ".btn-primary") && (J("Action | " + Q + " | Clicked on Download", !0), zb());
                                "Advertising" == Q ? M(e, "button#formSubmitButton") && (Y("Action | Advertising | Form | Clicked Get Started"), setTimeout(function() {
                                    if (document.querySelector("div#form-errors-top") && "none" != window.getComputedStyle(document.querySelector("div#form-errors-top"),
                                            null).display) {
                                        Y("Action | Advertising | Form | Validation Error");
                                        for (var p = document.querySelectorAll("ul.fieldGroup>li.fieldWarning select>option[disabled], ul.fieldGroup>li.fieldWarning input[placeholder]"), t = 0; t < p.length; t++) {
                                            var u = M(p[t], "#pro-type-select>option[disabled]") ? "I am..." : p[t].innerText || p[t].attributes.placeholder.value;
                                            u && Y("Action | Advertising | Form | Validation Error | " + u)
                                        }
                                    } else document.querySelector("div#thank-you-div") && "none" != window.getComputedStyle(document.querySelector("div#thank-you-div"),
                                        null).display && Y("Action | Advertising | Form | Form Submitted Successfully")
                                }, 2E3)) : "Get More Leads" == Q && M(e, "button#formSubmitButton") && (Y("Action | Get More Leads | Form | Clicked Get Started"), setTimeout(function() {
                                    if (document.querySelector("div#form-errors-top") && "none" != window.getComputedStyle(document.querySelector("div#form-errors-top"), null).display) {
                                        Y("Action | Get More Leads | Form | Validation Error");
                                        for (var p = document.querySelectorAll('form#contact-form-top select[name="real-estate-pro-type"].error,form#contact-form-top input[placeholder].error'),
                                                t = 0; t < p.length; t++) {
                                            var u = M(p[t], 'select[name="real-estate-pro-type"]') ? "I am..." : p[t].attributes.placeholder.value;
                                            u && Y("Action | Get More Leads | Form | Validation Error | " + u)
                                        }
                                    }
                                }, 2E3))
                            }.bind(e)
                        }(d, c, this))
                    });
                    if (S || T) K(document, "change", '#pro-type-select, #roleSelect, select[name="user_type"]', function(c) {
                        c = c.target;
                        M(c, "#pro-type-select") || M(c, 'select[name="user_type"]') ? J("Action | " + Q + ' | Selected  "I am"', !0) : M(c, "#roleSelect") && J("Action | " + Q + ' | Selected "what is your role"', !0)
                    }), K(document,
                        "keypress", "#signup-form, .lead-gen-form>form",
                        function(c) {
                            "Enter" != c.key && 13 != c.keyCode || zb()
                        });
                    /premieragent.zillow.com\/pa\//i.test(location.href) && 1 == document.querySelectorAll("#nav .dropdown").length && (K("#nav .dropdown", "mouseenter", function() {
                        F("dropdownState('block')")
                    }), K("#nav .dropdown", "mouseleave", function() {
                        F("dropdownState('none')")
                    }));
                    Array.prototype.forEach.call(["[id='header-search-input']"], function(c) {
                        var d = document.querySelector(c);
                        d && (d = d.value, (d = h(d)) && F('jQuery("' + c + '").val(unescape("' +
                            escape(d) + '"));'), K(document, "input", c, function() {
                            var f = this.value;
                            (f = h(f)) && F('jQuery("' + c + '").val(unescape("' + escape(f) + '"));');
                            "[id='header-search-input']" == c && J("Action | " + (Q ? Q + " | " : "") + "Interacted with the Search Field", !0)
                        }))
                    });
                    document.querySelector("select.pro-type-select") && K(document, "change", "select.pro-type-select", function() {
                        if (document.querySelector("select.pro-type-select").value) {
                            var c = document.querySelector("select.pro-type-select").value;
                            "agent" == c ? Y("CEC | Action | Select Agent/Broker") :
                                "consumer" == c && Y("CEC | Action | Select Home Buyer/Seller")
                        }
                    });
                    A(document, "input", 'div.real-estate-pro-types input[type="radio"]', function() {
                        if (M(this, 'div.real-estate-pro-types input[type="radio"]') && W) {
                            var c = this.getAttribute("value");
                            c && X[c] && Y("A | PA Advertising | Get Started | Click " + X[c])
                        }
                    });
                    window.addEventListener("scroll", function() {
                        !eb && window.pageYOffset > document.body.offsetHeight / 2 && (Y("Action | Site Wide | Scrolls 50% of Page"), eb = !0)
                    })
                }
            }
            z(function() {
                Na();
                Ab()
            });

            function Bb() {
                var a = Object.assign({}, document.location);
                a.href = a.href.replace("#", "?__");
                a.pathname += a.hash.replace("#", "?__");
                return a
            }
            window.clickTaleStartEventSignal = function(a) {
                Ra(Bb());
                a && "string" === typeof a && J(a)
            };
            window.clickTaleEndEventSignal = function() {
                va && (history.replaceState = va);
                wa && (history.pushState = wa);
                xa && window.removeEventListener("popstate", xa, !1);
                za()
            };
            (function(a, b, c, d, f, k, e, q, x, m, w) {
                function r() {
                    "function" === typeof w && w();
                    var N = q ? q() : location;
                    ya ? Qa(function() {
                        "function" === typeof a && a()
                    }, N.href, t, c) : ua && (ta(N.pathname), !0 === x && "function" === typeof a && a());
                    t = N.href
                }

                function p(N) {
                    if (u && (u = !1, setTimeout(function() {
                            u = !0
                        }, e), "function" !== typeof k || k()))
                        if (isNaN(f) || "number" != typeof f || N) {
                            if ("function" === typeof ClickTaleIsRecording && ClickTaleIsRecording()) ya = !0, za();
                            else {
                                var Aa;
                                "function" !== typeof ClickTaleStop && (Aa = window.ClickTaleOnStop) && Array.isArray(Aa) &&
                                    Aa.forEach(function(bb) {
                                        "function" === typeof bb && bb.call(window)
                                    });
                                ua = !0
                            }
                            d() || (b ? "string" === typeof b ? g(r, function() {
                                return !!document.querySelector(b + "")
                            }, 1E3, 10, r) : "function" === typeof b ? g(r, b, 1E3, 10, r) : setTimeout(r, 2E3) : setTimeout(r, 2E3))
                        } else N = f || 0, setTimeout(p.bind(null, !0), N)
                }
                "function" != typeof a && a && (b = a.M, c = a.K, d = a.F, f = a.D, k = a.J, e = a.L, q = a.C, x = a.I, m = a.G, w = a.H, a = a.A);
                m = m || !1;
                d = d || function() {
                    return !1
                };
                a = a || function() {};
                e = e || 400;
                var t = (q ? q() : location).href;
                c || isNaN(b) || (c = b, b = "");
                c = c || 2E3;
                var u = !0;
                window.history && (va = history.replaceState, history.replaceState = function() {
                    m ? p() : setTimeout(p, 5);
                    return va.apply(history, arguments)
                }, wa = history.pushState, history.pushState = function() {
                    m ? p() : setTimeout(p, 5);
                    return wa.apply(history, arguments)
                }, xa = function() {
                    m ? p() : setTimeout(p, 5)
                }, window.addEventListener("popstate", xa, !1))
            })({
                A: Sa,
                C: Bb
            });
        })();
    }
}, function() {
    return !!(window.ClickTaleSettings && ClickTaleSettings.PTC && typeof ClickTaleSettings.PTC.okToRunPCC != 'undefined');
}, 500, 20);


//Signature:BmXkfhF8ZZglUI4IrZV9Ayvds0yIh5o2MOmJCVvnrcg534dSwCV5IIweOurBkM22fGI+0lEKyD4IX8BghiA59/Gkwp2VI9UjHkOekEN1OM9IADSmsnBGM0VJpiJ8QsskgUaKI/w8ExfCg0JOJPVdnLhioi+sKfjTnbk3R/ycQv8=