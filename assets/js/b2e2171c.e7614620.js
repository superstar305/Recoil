"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[4289],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return u}});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=c(a),u=o,f=h["".concat(p,".").concat(u)]||h[u]||m[u]||n;return a?r.createElement(f,i(i({ref:t},s),{},{components:a})):r.createElement(f,i({ref:t},s))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8821:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return s},toc:function(){return m},default:function(){return u}});var r=a(7462),o=a(3366),n=(a(7294),a(3905)),i=["components"],l={title:"Recoil 0.1.1"},p=void 0,c={permalink:"/blog/2020/10/30/0.1.1-released",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/blog/blog/2020-10-30-0.1.1-released.md",source:"@site/blog/2020-10-30-0.1.1-released.md",title:"Recoil 0.1.1",description:"Welcome to Recoil version 0.1.1!  This release has performance improvements and introduces several experimental features such as support for React Native, working with Snapshots outside of React, and atom effects for managing side-effects of atoms such as logging, synchronization with external stores, persistence, etc.",date:"2020-10-30T00:00:00.000Z",formattedDate:"October 30, 2020",tags:[],readingTime:2.145,truncated:!0,authors:[],prevItem:{title:"Recoil 0.2",permalink:"/blog/2021/03/22/0.2.0-released"},nextItem:{title:"Recoil 0.0.11",permalink:"/blog/2020/09/15/0.0.11-released"}},s={authorsImageUrls:[]},m=[{value:"Performance",id:"performance",children:[],level:2},{value:"React Native (<em>Experimental</em>)",id:"react-native-experimental",children:[],level:2},{value:"Atom Effects (<em>Experimental</em>)",id:"atom-effects-experimental",children:[],level:2},{value:"Snapshots for Testing (<em>Experimental</em>)",id:"snapshots-for-testing-experimental",children:[],level:2},{value:"Bug Fixes",id:"bug-fixes",children:[],level:2},{value:"Future Work",id:"future-work",children:[],level:2}],h={toc:m};function u(e){var t=e.components,a=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Welcome to Recoil version 0.1.1!  This release has performance improvements and introduces several ",(0,n.kt)("em",{parentName:"p"},"experimental")," features such as support for React Native, working with Snapshots outside of React, and atom effects for managing side-effects of atoms such as logging, synchronization with external stores, persistence, etc."),(0,n.kt)("p",null,"Also, ",(0,n.kt)("a",{parentName:"p",href:"/docs/introduction/installation#nightly-builds"},"nightly builds")," are now available via the ",(0,n.kt)("inlineCode",{parentName:"p"},"nightly")," branch."),(0,n.kt)("h2",{id:"performance"},"Performance"),(0,n.kt)("p",null,"Several changes to improve Recoil's performance:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Updates performed during ",(0,n.kt)("inlineCode",{parentName:"li"},"useRecoilCallback()")," are now batched, which avoids copying data structures or performing updates for intermediate states.  This allowed setting 5,000 atoms in a loop to go from 10s -> 25ms with some of our stress tests. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/davidmccabe"},"@davidmccabe"),")"),(0,n.kt)("li",{parentName:"ul"},"Recoil also now avoids looking up selector values in cache if the selector's dependencies have not changed.  This improved some applications with complex data-flow graphs by 30-40x. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/davidmccabe"},"@davidmccabe"),")")),(0,n.kt)("h2",{id:"react-native-experimental"},"React Native (",(0,n.kt)("em",{parentName:"h2"},"Experimental"),")"),(0,n.kt)("p",null,"Recoil should now work with the React Native environment.  However, similar to server side rendering, it is not officially supported. (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/114"},"#114")," - ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/jacques-blom"},"@jacques-blom"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/mondaychen"},"@mondaychen"),")"),(0,n.kt)("h2",{id:"atom-effects-experimental"},"Atom Effects (",(0,n.kt)("em",{parentName:"h2"},"Experimental"),")"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/guides/atom-effects"},"Effects for atoms")," simplifies managing side-effect policies for atoms on a per-atom basis as part of the ",(0,n.kt)("inlineCode",{parentName:"p"},"atom()")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"atomFamily()")," definition.  Effects can be used for interesting applications such as ",(0,n.kt)("a",{parentName:"p",href:"/docs/guides/atom-effects#logging-example"},"logging")," and state synchronization or persistence with external storage such as ",(0,n.kt)("a",{parentName:"p",href:"/docs/guides/atom-effects#state-synchronization-example"},"remote databases"),", ",(0,n.kt)("a",{parentName:"p",href:"/docs/guides/atom-effects#local-storage-persistence"},"local storage"),", browser URL history, etc.  For example, you could use an atom as a local copy of some user state and provide an effect to subscribe to changes on a server to update the local copy and for local changes to write-through and update the server. (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/680"},"#680"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/380"},"#380"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/381"},"#381"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/384"},"#384"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/385"},"#385"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/448"},"#448"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/449"},"#449"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/412"},"#412"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/591"},"#591"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/634"},"#634"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/682"},"#682")," ","\u2014"," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/drarmstr"},"@drarmstr"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/csantos4242"},"@csantos4242"),")"),(0,n.kt)("h2",{id:"snapshots-for-testing-experimental"},"Snapshots for Testing (",(0,n.kt)("em",{parentName:"h2"},"Experimental"),")"),(0,n.kt)("p",null,"Snapshots can now be ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/Snapshot#building-a-snapshot"},"constructed outside of a React context"),".  This can be useful for ",(0,n.kt)("a",{parentName:"p",href:"/docs/guides/testing"},"testing")," or evaluating selectors outside of a React context. (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Recoil/pull/649"},"#649")," ","\u2014"," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/drarmstr"},"@drarmstr"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/habond"},"@habond"),")"),(0,n.kt)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This update has various bug fixes for testing and infrastructure. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/555"},"#555"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/587"},"#587"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/588"},"#588"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/590"},"#590"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/635"},"#635"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/631"},"#631"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/683"},"#683"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/684"},"#684"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/686"},"#686")," ","\u2014"," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/aaronabramov"},"@aaronabramov"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/mondaychen"},"@mondaychen"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/drarmstr"},"@drarmstr"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/mallchel"},"@mallchel"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/davidmccabe"},"@davidmccabe"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/csantos4242"},"@csantos4242"),")"),(0,n.kt)("li",{parentName:"ul"},"Do not freeze objects which should not be frozen. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/597"},"#597"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/633"},"#633"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/672"},"#672")," ","\u2014"," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/RinGoku"},"@RinGoku"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/a-sane"},"@a-sane"),")"),(0,n.kt)("li",{parentName:"ul"},"TypeScript typing for ",(0,n.kt)("inlineCode",{parentName:"li"},"Snapshot"),". (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/687"},"#687")," ","\u2014"," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/kevinfrei"},"@kevinfrei"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/drarmstr"},"@drarmstr"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/habond"},"@habond"),")"),(0,n.kt)("li",{parentName:"ul"},"Additional testing for ",(0,n.kt)("inlineCode",{parentName:"li"},"waitForAll()")," concurrency. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/681"},"#681")," ","\u2014"," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/drarmstr"},"@drarmstr"),")")),(0,n.kt)("h2",{id:"future-work"},"Future Work"),(0,n.kt)("p",null,"In a future release, Recoil will automatically free the memory used by atoms and selectors that are no longer used, and will perform better with larger numbers of atoms. (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/davidmccabe"},"@davidmccabe"),")"),(0,n.kt)("p",null,"Releasing our prototype Chrome developer tools. (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/maxijb"},"@maxijb"),")"),(0,n.kt)("p",null,"Libraries of effects for common state persistence, such as browser local storage or URL history. (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/bezi"},"@bezi"),")"),(0,n.kt)("p",null,"Thanks for your continued interest in Recoil!"))}u.isMDXComponent=!0}}]);