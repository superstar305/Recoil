"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[7753],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return f}});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,h=u["".concat(p,".").concat(f)]||u[f]||s[f]||n;return r?a.createElement(h,l(l({ref:t},m),{},{components:r})):a.createElement(h,l({ref:t},m))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<n;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},165:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return m},toc:function(){return s},default:function(){return f}});var a=r(7462),o=r(3366),n=(r(7294),r(3905)),l=["components"],i={title:"Recoil 0.5"},p=void 0,c={permalink:"/ko/blog/2021/11/03/0.5.0-release",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/blog/blog/2021-11-03-0.5.0-release.md",source:"@site/blog/2021-11-03-0.5.0-release.md",title:"Recoil 0.5",description:"Welcome to Recoil 0.5 with a few new APIs and improvements.",date:"2021-11-03T00:00:00.000Z",formattedDate:"2021\ub144 11\uc6d4 3\uc77c",tags:[],readingTime:.97,truncated:!1,authors:[],nextItem:{title:"Recoil 0.4.1",permalink:"/ko/blog/2021/08/26/0.4.1-release"}},m={authorsImageUrls:[]},s=[{value:"Hook for refreshing selectors",id:"hook-for-refreshing-selectors",children:[],level:2},{value:"Atom effect improvements",id:"atom-effect-improvements",children:[],level:2},{value:"Loadable factories",id:"loadable-factories",children:[],level:2},{value:"Other fixes and improvements",id:"other-fixes-and-improvements",children:[],level:2}],u={toc:s};function f(e){var t=e.components,r=(0,o.Z)(e,l);return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Welcome to Recoil 0.5 with a few new APIs and improvements."),(0,n.kt)("h2",{id:"hook-for-refreshing-selectors"},"Hook for refreshing selectors"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/useRecoilRefresher"},(0,n.kt)("inlineCode",{parentName:"a"},"useRecoilRefresher_UNSTABLE()"))," hook has been added for refreshing selectors that execute data queries.  This is useful if you just want to refresh for newer data or retry due to an error.  (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/972"},"#972"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/1294"},"#1294"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/1302"},"#1302"),")"),(0,n.kt)("h2",{id:"atom-effect-improvements"},"Atom effect improvements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add ",(0,n.kt)("inlineCode",{parentName:"li"},"isReset")," parameter to ",(0,n.kt)("inlineCode",{parentName:"li"},"onSet()")," callback to know if the atom was reset.  (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1358"},"#1358"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1345"},"#1345"),")"),(0,n.kt)("li",{parentName:"ul"},"Add ",(0,n.kt)("inlineCode",{parentName:"li"},"getLoadable()"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"getPromise()"),", and ",(0,n.kt)("inlineCode",{parentName:"li"},"getInfo_UNSTABLE()")," for reading other atoms.  (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1205"},"#1205"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1210"},"#1210"),")")),(0,n.kt)("h2",{id:"loadable-factories"},"Loadable factories"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/Loadable#creating-loadables"},(0,n.kt)("inlineCode",{parentName:"a"},"RecoilLoadable"))," interface is now available for making your own ",(0,n.kt)("inlineCode",{parentName:"p"},"Loadable")," objects.  (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/1263"},"#1263"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/1264"},"#1264"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/1312"},"#1312"),")"),(0,n.kt)("h2",{id:"other-fixes-and-improvements"},"Other fixes and improvements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Allow class instances in family parameters for Flow (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1215"},"#1215"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Loadable")," improvements:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Ability to map Loadables with other Loadables. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1180"},"#1180"),")"),(0,n.kt)("li",{parentName:"ul"},"Re-implement Loadable as classes. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1315"},"#1315"),")"))),(0,n.kt)("li",{parentName:"ul"},"Fix user-thrown promises in selectors for some cases."),(0,n.kt)("li",{parentName:"ul"},"Improved dev-mode checks:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Atoms freeze default, initialized, and async values.  Selectors should not freeze upstream dependencies. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1261"},"#1261"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1259"},"#1259"),")"),(0,n.kt)("li",{parentName:"ul"},"Perform runtime check that required options are provided when creating atoms and selectors. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1324"},"#1324"),")"))),(0,n.kt)("li",{parentName:"ul"},"Upgrade Prettier version (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1366"},"#1366"),")")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Also lots of restructuring in preparation for the upcoming ",(0,n.kt)("inlineCode",{parentName:"em"},"recoil-sync")," library release...")))}f.isMDXComponent=!0}}]);