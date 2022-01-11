"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[6933],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return R}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(t),R=o,f=d["".concat(s,".").concat(R)]||d[R]||p[R]||c;return t?n.createElement(f,i(i({ref:r},u),{},{components:t})):n.createElement(f,i({ref:r},u))}));function R(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=d;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6703:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=t(7462),o=t(3366),c=(t(7294),t(3905)),i=["components"],a={title:"useRecoilBridgeAcrossReactRoots()",sidebar_label:"useRecoilBridgeAcrossReactRoots()"},s=void 0,l={unversionedId:"api-reference/core/useRecoilBridgeAcrossReactRoots",id:"api-reference/core/useRecoilBridgeAcrossReactRoots",title:"useRecoilBridgeAcrossReactRoots()",description:"\u5e2e\u52a9\u6865\u63a5 Recoil \u72b6\u6001\u4e0e\u5d4c\u5957\u7684 React root \u548c\u6e32\u67d3\u5668\u7684\u94a9\u5b50\u51fd\u6570\u3002",source:"@site/i18n/zh-hans/docusaurus-plugin-content-docs/current/api-reference/core/useRecoilBridgeAcrossReactRoots.md",sourceDirName:"api-reference/core",slug:"/api-reference/core/useRecoilBridgeAcrossReactRoots",permalink:"/zh-hans/docs/api-reference/core/useRecoilBridgeAcrossReactRoots",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/zh-hans/docusaurus-plugin-content-docs/current/api-reference/core/useRecoilBridgeAcrossReactRoots.md",tags:[],version:"current",frontMatter:{title:"useRecoilBridgeAcrossReactRoots()",sidebar_label:"useRecoilBridgeAcrossReactRoots()"},sidebar:"docs",previous:{title:"useGotoRecoilSnapshot()",permalink:"/zh-hans/docs/api-reference/core/useGotoRecoilSnapshot"}},u=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[],level:3}],p={toc:u};function d(e){var r=e.components,t=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u5e2e\u52a9\u6865\u63a5 Recoil \u72b6\u6001\u4e0e\u5d4c\u5957\u7684 React root \u548c\u6e32\u67d3\u5668\u7684\u94a9\u5b50\u51fd\u6570\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},"function useRecoilBridgeAcrossReactRoots_UNSTABLE():\n  React.AbstractComponent<{children: React.Node}>;\n")),(0,c.kt)("p",null,"\u5982\u679c\u4f7f\u7528 ",(0,c.kt)("inlineCode",{parentName:"p"},"ReactDOM.render()"),' \u521b\u5efa\u4e86\u4e00\u4e2a\u5d4c\u5957\u7684 React root\uff0c\u6216\u8005\u4f7f\u7528\u4e86\u5d4c\u5957\u7684\u81ea\u5b9a\u4e49\u6e32\u67d3\u5668\uff0cReact \u5219\u4e0d\u4f1a\u5c06\u4e0a\u4e0b\u6587\u72b6\u6001\u4f20\u64ad\u5230 child root\u3002\u5f53\u4f60\u9700\u8981 "\u6865\u63a5" \u5e76\u4e0e\u5d4c\u5957\u7684 React root \u5171\u4eab Recoil \u72b6\u6001\uff0c\u8fd9\u4e2a\u94a9\u5b50\u53d1\u6325\u4f5c\u7528\u4e86\u3002\u6b64\u94a9\u5b50\u51fd\u6570\u7684\u8fd4\u56de\u503c\u7c7b\u578b\u4e3a React \u7ec4\u4ef6\uff0c\u4f60\u53ef\u4ee5\u7528\u6b64\u8fd4\u56de\u503c\u6765\u4ee3\u66ff\u5d4c\u5957\u7684 React root \u4e2d\u7684 ',(0,c.kt)("inlineCode",{parentName:"p"},"<RecoilRoot>")," \u4ee5\u5171\u4eab\u76f8\u540c\u4e14\u4e00\u81f4\u7684 Recoil \u5b58\u50a8\u72b6\u6001\u3002\u4e0e\u4efb\u4f55\u8de8 React root \u7684\u72b6\u6001\u5171\u4eab\u4e00\u6837\uff0c\u5728\u6240\u6709\u60c5\u51b5\u4e0b\uff0c\u53d8\u5316\u90fd\u53ef\u80fd\u4e0d\u4f1a\u5b8c\u7f8e\u540c\u6b65\u3002"),(0,c.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},"function Bridge() {\n  const RecoilBridge = useRecoilBridgeAcrossReactRoots_UNSTABLE();\n\n  return (\n    <CustomRenderer>\n      <RecoilBridge>\n        ...\n      </RecoilBridge>\n    </CustomRenderer>\n  );\n}\n\nfunction MyApp() {\n  return (\n    <RecoilRoot>\n      ...\n      <Bridge />\n    </RecoilRoot>\n  );\n}\n")))}d.isMDXComponent=!0}}]);