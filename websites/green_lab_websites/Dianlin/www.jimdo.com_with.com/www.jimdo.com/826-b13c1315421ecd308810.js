"use strict";(self.webpackChunk_jimdo_gatsby_www=self.webpackChunk_jimdo_gatsby_www||[]).push([[826],{18826:function(e,t,n){n.r(t),n.d(t,{renderImageToString:function(){return b},swapPlaceholderImage:function(){return g}});var o=n(37059),a=n(67294),i=n(97762);n(92369);let r;const c=new WeakMap,s=navigator.connection||navigator.mozConnection||navigator.webkitConnection,l=["image","loading","isLoading","isLoaded","imgClassName","imgStyle","objectPosition","backgroundColor","objectFit"];function d(e,t){e.style.opacity="1",t&&(t.style.opacity="0")}function u(e,t,n,o,a,i){const r=e.querySelector("[data-main-image]"),c=e.querySelector("[data-placeholder-image]"),s=n.has(t);function l(e){this.removeEventListener("load",l);const t=e.currentTarget,n=new Image;n.src=t.currentSrc,n.decode?n.decode().then((()=>{d(this,c),null==a||a({wasCached:s})})).catch((e=>{d(this,c),null==i||i(e)})):(d(this,c),null==a||a({wasCached:s}))}return r.addEventListener("load",l),null==o||o({wasCached:s}),Array.from(r.parentElement.children).forEach((e=>{const t=e.getAttribute("data-src"),n=e.getAttribute("data-srcset");t&&(e.removeAttribute("data-src"),e.setAttribute("src",t)),n&&(e.removeAttribute("data-srcset"),e.setAttribute("srcset",n))})),n.add(t),r.complete&&l.call(r,{currentTarget:r}),()=>{r&&r.removeEventListener("load",l)}}function g(e,t,a,i,l,d,g){if(!(0,o.h)()){let o;const w=(h=()=>{o=u(e,t,a,l,d,g)},"IntersectionObserver"in window?(r||(r=new IntersectionObserver((e=>{e.forEach((e=>{var t;e.isIntersecting&&(null==(t=c.get(e.target))||t(),c.delete(e.target))}))}),{rootMargin:"4g"!==(null==s?void 0:s.effectiveType)||null!=s&&s.saveData?"2500px":"1250px"})),function(e){return c.set(e,h),r.observe(e),function(){r&&e&&(c.delete(e),r.unobserve(e))}}):function(){return h(),function(){}}),f=w(e);var b,m;return"objectFit"in document.documentElement.style||(e.dataset.objectFit=null!=(b=i.objectFit)?b:"cover",e.dataset.objectPosition=`${null!=(m=i.objectPosition)?m:"50% 50%"}`,async function(e){"objectFitPolyfill"in window||await n.e(231).then(n.t.bind(n,27231,23)),window.objectFitPolyfill(e)}(e)),()=>{o&&o(),f()}}var h;return u(e,t,a,l,d,g)}function b(e){let{image:t,loading:n="lazy",isLoading:r,isLoaded:c,imgClassName:s,imgStyle:d={},objectPosition:u,backgroundColor:g,objectFit:b="cover"}=e,m=(0,o._)(e,l);const{width:h,height:w,layout:f,images:v,placeholder:y,backgroundColor:j}=t;return d=(0,o.a)({objectFit:b,objectPosition:u,backgroundColor:g},d),(0,i.renderToStaticMarkup)(a.createElement(o.L,{layout:f,width:h,height:w},a.createElement(o.P,(0,o.a)({},(0,o.g)(y,c,f,h,w,j,b,u))),a.createElement(o.M,(0,o.a)({},m,{width:h,height:w,className:s},(0,o.b)(r,c,v,n,d)))))}}}]);
//# sourceMappingURL=826-b13c1315421ecd308810.js.map