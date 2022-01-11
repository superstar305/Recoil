"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[5103],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return f}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),l=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},b=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=l(r),f=o,d=b["".concat(s,".").concat(f)]||b[f]||p[f]||a;return r?t.createElement(d,c(c({ref:n},u),{},{components:r})):t.createElement(d,c({ref:n},u))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=b;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}b.displayName="MDXCreateElement"},3175:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return b}});var t=r(7462),o=r(3366),a=(r(7294),r(3905)),c=["components"],i={title:"useRecoilTransactionObserver_UNSTABLE(callback)",sidebar_label:"useRecoilTransactionObserver()"},s=void 0,l={unversionedId:"api-reference/core/useRecoilTransactionObserver",id:"api-reference/core/useRecoilTransactionObserver",title:"useRecoilTransactionObserver_UNSTABLE(callback)",description:"NOTE: Please consider this API as unstable",source:"@site/docs/api-reference/core/useRecoilTransactionObserver.md",sourceDirName:"api-reference/core",slug:"/api-reference/core/useRecoilTransactionObserver",permalink:"/docs/api-reference/core/useRecoilTransactionObserver",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/api-reference/core/useRecoilTransactionObserver.md",tags:[],version:"current",frontMatter:{title:"useRecoilTransactionObserver_UNSTABLE(callback)",sidebar_label:"useRecoilTransactionObserver()"},sidebar:"docs",previous:{title:"Snapshot",permalink:"/docs/api-reference/core/Snapshot"},next:{title:"useRecoilSnapshot()",permalink:"/docs/api-reference/core/useRecoilSnapshot"}},u=[{value:"<strong><em>NOTE</em></strong>: <em>Please consider this API as unstable</em>",id:"note-please-consider-this-api-as-unstable",children:[{value:"Debug Example",id:"debug-example",children:[],level:3}],level:2}],p={toc:u};function b(e){var n=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"note-please-consider-this-api-as-unstable"},(0,a.kt)("strong",{parentName:"h2"},(0,a.kt)("em",{parentName:"strong"},"NOTE")),": ",(0,a.kt)("em",{parentName:"h2"},"Please consider this API as unstable")),(0,a.kt)("p",null,"This hook subscribes a callback to be executed every time there is a change to Recoil atom state.  Multiple updates may be batched together in a single transaction.  This hook is great for persisting state changes, dev tools, building history, &c."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function useRecoilTransactionObserver_UNSTABLE(({\n  snapshot: Snapshot,\n  previousSnapshot: Snapshot,\n}) => void)\n")),(0,a.kt)("p",null,"The callback provides a ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/Snapshot"},(0,a.kt)("inlineCode",{parentName:"a"},"Snapshot"))," of the current and previous state for the React batch transaction.  If you would only like to subscribe to changes for individual atoms, consider effects instead.  In the future, we may allow the ability to subscribe to specific conditions or provide debouncing for performance."),(0,a.kt)("h3",{id:"debug-example"},"Debug Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function DebugObserver() {\n  useRecoilTransactionObserver_UNSTABLE(({snapshot}) => {\n    window.myDebugState = {\n      a: snapshot.getLoadable(atomA).contents,\n      b: snapshot.getLoadable(atomB).contents,\n    };\n  });\n  return null;\n}\n\nfunction MyApp() {\n  return (\n    <RecoilRoot>\n      <DebugObserver />\n      ...\n    </RecoilRoot>\n  );\n}\n")))}b.isMDXComponent=!0}}]);