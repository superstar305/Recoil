"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[588],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=l(t),d=o,f=h["".concat(s,".").concat(d)]||h[d]||u[d]||i;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=h;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},5937:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return h}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={title:"useRecoilSnapshot()",sidebar_label:"useRecoilSnapshot()"},s=void 0,l={unversionedId:"api-reference/core/useRecoilSnapshot",id:"api-reference/core/useRecoilSnapshot",title:"useRecoilSnapshot()",description:"This hook synchronously returns a Snapshot object during rendering and subscribes the calling component for all Recoil state changes.  You may want to use this hook for debug tools, or for server-side rendering where you need to synchronously have the state during the initial render.",source:"@site/docs/api-reference/core/useRecoilSnapshot.md",sourceDirName:"api-reference/core",slug:"/api-reference/core/useRecoilSnapshot",permalink:"/docs/api-reference/core/useRecoilSnapshot",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/api-reference/core/useRecoilSnapshot.md",tags:[],version:"current",frontMatter:{title:"useRecoilSnapshot()",sidebar_label:"useRecoilSnapshot()"},sidebar:"docs",previous:{title:"useRecoilTransactionObserver()",permalink:"/docs/api-reference/core/useRecoilTransactionObserver"},next:{title:"useGotoRecoilSnapshot()",permalink:"/docs/api-reference/core/useGotoRecoilSnapshot"}},p=[{value:"Link Example",id:"link-example",children:[],level:3}],u={toc:p};function h(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This hook synchronously returns a ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/core/Snapshot"},(0,i.kt)("inlineCode",{parentName:"a"},"Snapshot"))," object during rendering and subscribes the calling component for all Recoil state changes.  You may want to use this hook for debug tools, or for server-side rendering where you need to synchronously have the state during the initial render."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"function useRecoilSnapshot(): Snapshot\n")),(0,i.kt)("p",null,"Be careful using this hook because it will cause the component to re-render for ",(0,i.kt)("em",{parentName:"p"},"all")," Recoil state changes.   In the future we hope to provide the ability to debounce for performance."),(0,i.kt)("h3",{id:"link-example"},"Link Example"),(0,i.kt)("p",null,"Define a ",(0,i.kt)("inlineCode",{parentName:"p"},"<LinkToNewView>")," component that renders an ",(0,i.kt)("inlineCode",{parentName:"p"},"<a>")," anchor with an ",(0,i.kt)("inlineCode",{parentName:"p"},"href")," based on the current state with a mutation applied.  In this example ",(0,i.kt)("inlineCode",{parentName:"p"},"uriFromSnapshot()")," is some user-defined function which encodes the current state in the URI which can be restored when loading the page."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"function LinkToNewView() {\n  const snapshot = useRecoilSnapshot();\n  const newSnapshot = snapshot.map(({set}) => set(viewState, 'New View'));\n  return <a href={uriFromSnapshot(newSnapshot)}>Click Me!</a>;\n}\n")),(0,i.kt)("p",null,"This is a simplified example.  We provide a helper like this for generating links in our browser history persistence library coming soon which is more extensible and optimized.  For example, it will hijack the click handler to update local state replacing the browser history."))}h.isMDXComponent=!0}}]);