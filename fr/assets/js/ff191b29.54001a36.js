"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[8679],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),h=a,d=m["".concat(s,".").concat(h)]||m[h]||p[h]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2864:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return h}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Recoil 0.2"},s=void 0,c={permalink:"/fr/blog/2021/03/22/0.2.0-released",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/blog/blog/2021-03-22-0.2.0-released.md",source:"@site/blog/2021-03-22-0.2.0-released.md",title:"Recoil 0.2",description:"We are pleased to announce the release of Recoil 0.2.0. This release has a new, more reliable implementation of async selectors, greatly improved performance, and many bug fixes and improvements.",date:"2021-03-22T00:00:00.000Z",formattedDate:"22 mars 2021",tags:[],readingTime:3.005,truncated:!0,authors:[],prevItem:{title:"Recoil 0.3",permalink:"/fr/blog/2021/05/14/0.3.0-released"},nextItem:{title:"Recoil 0.1.1",permalink:"/fr/blog/2020/10/30/0.1.1-released"}},u={authorsImageUrls:[]},p=[{value:"Better Async Selectors",id:"better-async-selectors",children:[],level:2},{value:"Scaling to Large Numbers of Atoms",id:"scaling-to-large-numbers-of-atoms",children:[],level:2},{value:"Logo",id:"logo",children:[],level:2},{value:"Other Improvements",id:"other-improvements",children:[],level:2},{value:"Bug Fixes",id:"bug-fixes",children:[],level:2},{value:"Breaking Changes",id:"breaking-changes",children:[],level:2},{value:"Future Work",id:"future-work",children:[],level:2}],m={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We are pleased to announce the release of Recoil 0.2.0. This release has a new, more reliable implementation of async selectors, greatly improved performance, and many bug fixes and improvements."),(0,o.kt)("h2",{id:"better-async-selectors"},"Better Async Selectors"),(0,o.kt)("p",null,"We've reimplemented selectors to fix a number of corner cases that we didn't handle before. For instance:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Selectors can now add dependencies at any point in their async execution."),(0,o.kt)("li",{parentName:"ul"},"Selectors now start over if their dependencies change while they're awaiting something."),(0,o.kt)("li",{parentName:"ul"},"Diamond dependency patterns now re-execute only the necessary selectors.")),(0,o.kt)("p",null,"These are just a few of the unit tests that pass only with the new implementation. You are now less likely to hit incorrect behavior when using async selectors in Recoil."),(0,o.kt)("p",null,"Many of the fixed bugs manifested as unnecessary execution of selectors. In one app that heavily uses async selectors, we observed an overall 15% decrease in the number of selector executions."),(0,o.kt)("p",null,"Christian Santos (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/csantos42"},"@csantos42"),") has been working on this with great diligence and we're extremely happy to release it today."),(0,o.kt)("h2",{id:"scaling-to-large-numbers-of-atoms"},"Scaling to Large Numbers of Atoms"),(0,o.kt)("p",null,"Recoil now uses ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hash_array_mapped_trie"},"special data structures")," to maintain efficiency with large numbers of atoms. It is now hundreds of times faster when using 10,000 atoms."),(0,o.kt)("h2",{id:"logo"},"Logo"),(0,o.kt)("p",null,"Recoil now has a logo. Thanks to Gray Pegg (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/graypegg"},"@graypegg"),") for designing it and for sprucing up our website!"),(0,o.kt)("h2",{id:"other-improvements"},"Other Improvements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Error handling with ",(0,o.kt)("inlineCode",{parentName:"li"},"waitForAny()")," has changed: It now lets you access the individual ",(0,o.kt)("inlineCode",{parentName:"li"},"Loadable"),"s corresponding to its arguments, even if one of them is in an error state. This makes it more consistent with ",(0,o.kt)("inlineCode",{parentName:"li"},"waitForNone()"),"."),(0,o.kt)("li",{parentName:"ul"},"Added a ",(0,o.kt)("inlineCode",{parentName:"li"},"waitForAllSettled()")," helper analogous to ",(0,o.kt)("inlineCode",{parentName:"li"},"Promise.allSettled"),"."),(0,o.kt)("li",{parentName:"ul"},"Friendlier error message for misuse of ",(0,o.kt)("inlineCode",{parentName:"li"},"useRecoilCallback()"),". (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/870"},"#870"),")"),(0,o.kt)("li",{parentName:"ul"},"Friendlier error message if you try to use an async function as a selector setter, which is not supported. (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/777"},"#777"),")"),(0,o.kt)("li",{parentName:"ul"},"Improved React Native support. (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/748"},"#748"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/702"},"#702"),")"),(0,o.kt)("li",{parentName:"ul"},"Added a ",(0,o.kt)("inlineCode",{parentName:"li"},"useGetRecoilValueInfo_UNSTABLE()")," hook for use by dev tools. (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/713"},"#713"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/714"},"#714"),")")),(0,o.kt)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Selectors now treat any non-",(0,o.kt)("inlineCode",{parentName:"li"},"Promise")," that is thrown as an error, rather than only instances of ",(0,o.kt)("inlineCode",{parentName:"li"},"Error"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<RecoilRoot>")," could sometimes have its state updated after being unmounted. (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/917"},"#917"),")"),(0,o.kt)("li",{parentName:"ul"},"The error message for a missing ",(0,o.kt)("inlineCode",{parentName:"li"},"<RecoilRoot>")," wasn't displayed on React experimental releases. (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/712"},"#712"),")"),(0,o.kt)("li",{parentName:"ul"},"Errors are no longer frozen. (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/852"},"#852"),")"),(0,o.kt)("li",{parentName:"ul"},"Atom effects could fail to initialize atoms in certain cases (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/775"},"#775"),")."),(0,o.kt)("li",{parentName:"ul"},"Async selectors would fail with multiple React roots."),(0,o.kt)("li",{parentName:"ul"},"IE 11 compatibility (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/894"},"#894")," and more)")),(0,o.kt)("h2",{id:"breaking-changes"},"Breaking Changes"),(0,o.kt)("p",null,"As mentioned above, the behavior of ",(0,o.kt)("inlineCode",{parentName:"p"},"waitForAny()")," has changed. If you rely on the behavior that ",(0,o.kt)("inlineCode",{parentName:"p"},"waitForAny()")," resulted in an error state if any of its arguments is in an error state, your code will break. Now it returns individual ",(0,o.kt)("inlineCode",{parentName:"p"},"Loadable"),"s for each argument, just as with the non-error state, and you can check for an error in each argument."),(0,o.kt)("p",null,"If you throw something that is not a ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise")," and not an ",(0,o.kt)("inlineCode",{parentName:"p"},"Error")," from within a selector, it will now put the selector into an error state instead of treating the thrown object as a value."),(0,o.kt)("h2",{id:"future-work"},"Future Work"),(0,o.kt)("p",null,"We are very close to releasing Memory Management, which will allow Recoil to automatically delete atoms and selectors that are no longer being used, configurable on a per-atom basis. This will also include configurable LRU caching for selectors.\nThese new features are in use internally at Facebook, but require a slight breaking change to the API. So our next release will start warning in cases where your code will break. The required changes are not difficult, and should be rare: Out of thousands of modules that import Recoil, we found less than half a dozen that required changes."))}h.isMDXComponent=!0}}]);