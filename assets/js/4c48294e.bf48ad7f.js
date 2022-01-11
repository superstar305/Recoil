"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[6901],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(n),m=o,d=f["".concat(i,".").concat(m)]||f[m]||p[m]||a;return n?r.createElement(d,c(c({ref:t},u),{},{components:n})):r.createElement(d,c({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3990:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],l={title:"constSelector(constant)",sidebar_label:"constSelector()"},i=void 0,s={unversionedId:"api-reference/utils/constSelector",id:"api-reference/utils/constSelector",title:"constSelector(constant)",description:"A selector which always provides a constant value.",source:"@site/docs/api-reference/utils/constSelector.md",sourceDirName:"api-reference/utils",slug:"/api-reference/utils/constSelector",permalink:"/docs/api-reference/utils/constSelector",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/api-reference/utils/constSelector.md",tags:[],version:"current",frontMatter:{title:"constSelector(constant)",sidebar_label:"constSelector()"},sidebar:"docs",previous:{title:"selectorFamily()",permalink:"/docs/api-reference/utils/selectorFamily"},next:{title:"errorSelector()",permalink:"/docs/api-reference/utils/errorSelector"}},u=[{value:"Example",id:"example",children:[],level:3}],p={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/selector"},"selector")," which always provides a constant value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function constSelector<T: Parameter>(constant: T): RecoilValueReadOnly<T>\n")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"constSelector")," may be useful if you have an interface that uses a type such as ",(0,a.kt)("inlineCode",{parentName:"p"},"RecoilValue<T>")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"RecoilValueReadOnly<T>")," that may be provided by different selector implementations."),(0,a.kt)("p",null,"These selectors will memoize based on reference value equality.  So, ",(0,a.kt)("inlineCode",{parentName:"p"},"constSelector()")," can be called multiple times with the same value and the same selector will be provided.  Because of this, the value used as a constant is restricted to types that may be serialized using the Recoil serialization.  Please see documentation in ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/utils/selectorFamily"},(0,a.kt)("inlineCode",{parentName:"a"},"selectorFamily"))," describing the limitations."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"type MyInterface = {\n  queryForStuff: RecoilValue<Thing>,\n  ...\n};\n\nconst myInterfaceInstance1: MyInterface = {\n  queryForStuff: selectorThatDoesQuery,\n};\n\nconst myInterfaceInstance2: MyInterface = {\n  queryForStuff: constSelector(thing),\n};\n")))}f.isMDXComponent=!0}}]);