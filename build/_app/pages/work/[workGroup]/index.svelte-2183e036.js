import{I as e,S as a,i as t,s,k as r,j as o,N as c,d as n,n as l,m as i,f as u,o as f,v as h,r as m,w as d,e as p,t as g,c as v,a as w,g as k,b as $,H as x,U as N,h as E,P as b}from"../../../chunks/vendor-499072eb.js";import{g as j}from"../../../chunks/navigation-9e49acea.js";import{P as y}from"../../../chunks/Page-c9a1afca.js";import"../../../chunks/singletons-6b53f818.js";import"../../../chunks/pageFade-a3c22aee.js";function G(e,a,t){const s=e.slice();return s[3]=a[t],s}function S(e){let a,t,s,o,c,i,f,h,m,d,b,j=e[3].Name+"";function y(){return e[2](e[3])}return{c(){a=p("article"),t=p("div"),s=p("img"),i=r(),f=p("h1"),h=g(j),m=r(),this.h()},l(e){a=v(e,"ARTICLE",{class:!0});var r=w(a);t=v(r,"DIV",{class:!0});var o=w(t);s=v(o,"IMG",{class:!0,src:!0,alt:!0}),o.forEach(n),i=l(r),f=v(r,"H1",{class:!0});var c=w(f);h=k(c,j),c.forEach(n),m=l(r),r.forEach(n),this.h()},h(){$(s,"class","h-96 w-full object-cover"),s.src!==(o=e[3].image&&e[3].image[0].url)&&$(s,"src",o),$(s,"alt",c=e[3].Name),$(t,"class","bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition"),$(f,"class","text-xl"),$(a,"class","flex flex-col cursor-pointer")},m(e,r){u(e,a,r),x(a,t),x(t,s),x(a,i),x(a,f),x(f,h),x(a,m),d||(b=N(a,"click",y),d=!0)},p(a,t){e=a,1&t&&s.src!==(o=e[3].image&&e[3].image[0].url)&&$(s,"src",o),1&t&&c!==(c=e[3].Name)&&$(s,"alt",c),1&t&&j!==(j=e[3].Name+"")&&E(h,j)},d(e){e&&n(a),d=!1,b()}}}function I(e){let a,t,s,o,c,i,f,h,m,d=e[1].Name+"",N=e[0],j=[];for(let r=0;r<N.length;r+=1)j[r]=S(G(e,N,r));return{c(){a=p("a"),t=g("Werke"),s=g(" / "),o=p("span"),c=g(d),i=r(),f=p("div"),h=r(),m=p("section");for(let e=0;e<j.length;e+=1)j[e].c();this.h()},l(e){a=v(e,"A",{href:!0});var r=w(a);t=k(r,"Werke"),r.forEach(n),s=k(e," / "),o=v(e,"SPAN",{});var u=w(o);c=k(u,d),u.forEach(n),i=l(e),f=v(e,"DIV",{class:!0}),w(f).forEach(n),h=l(e),m=v(e,"SECTION",{class:!0});var p=w(m);for(let a=0;a<j.length;a+=1)j[a].l(p);p.forEach(n),this.h()},h(){$(a,"href","/work"),$(f,"class","m-5"),$(m,"class"," grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-10")},m(e,r){u(e,a,r),x(a,t),u(e,s,r),u(e,o,r),x(o,c),u(e,i,r),u(e,f,r),u(e,h,r),u(e,m,r);for(let a=0;a<j.length;a+=1)j[a].m(m,null)},p(e,a){if(2&a&&d!==(d=e[1].Name+"")&&E(c,d),3&a){let t;for(N=e[0],t=0;t<N.length;t+=1){const s=G(e,N,t);j[t]?j[t].p(s,a):(j[t]=S(s),j[t].c(),j[t].m(m,null))}for(;t<j.length;t+=1)j[t].d(1);j.length=N.length}},d(e){e&&n(a),e&&n(s),e&&n(o),e&&n(i),e&&n(f),e&&n(h),e&&n(m),b(j,e)}}}function M(e){let a,t,s,p;return document.title=a=e[1].Name,s=new y({props:{$$slots:{default:[I]},$$scope:{ctx:e}}}),{c(){t=r(),o(s.$$.fragment)},l(e){c('[data-svelte="svelte-rzyovj"]',document.head).forEach(n),t=l(e),i(s.$$.fragment,e)},m(e,a){u(e,t,a),f(s,e,a),p=!0},p(e,[t]){(!p||2&t)&&a!==(a=e[1].Name)&&(document.title=a);const r={};67&t&&(r.$$scope={dirty:t,ctx:e}),s.$set(r)},i(e){p||(h(s.$$.fragment,e),p=!0)},o(e){m(s.$$.fragment,e),p=!1},d(e){e&&n(t),d(s,e)}}}var P=function(e,a,t,s){return new(t||(t=Promise))((function(r,o){function c(e){try{l(s.next(e))}catch(a){o(a)}}function n(e){try{l(s.throw(e))}catch(a){o(a)}}function l(e){var a;e.done?r(e.value):(a=e.value,a instanceof t?a:new t((function(e){e(a)}))).then(c,n)}l((s=s.apply(e,a||[])).next())}))};function A({page:a}){var t;return P(this,void 0,void 0,(function*(){e.setScope("fb38e374eb2c4048a443bdd52e95502d");const{blocks:s,meta:r}=yield e.slugPage(a.params.workGroup),o=JSON.parse(s),c=null===(t=o.find((e=>"collection_view"===e.type)))||void 0===t?void 0:t.id;return e.setScope(c),{props:{meta:yield e.getScope(),workGroupMeta:r,slug:a.params.work}}}))}function C(e,a,t){let{meta:s}=a,{workGroupMeta:r}=a;return e.$$set=e=>{"meta"in e&&t(0,s=e.meta),"workGroupMeta"in e&&t(1,r=e.workGroupMeta)},[s,r,e=>j("/work/"+r.slug+"/"+e.slug)]}export default class extends a{constructor(e){super(),t(this,e,C,M,s,{meta:0,workGroupMeta:1})}}export{A as load};
