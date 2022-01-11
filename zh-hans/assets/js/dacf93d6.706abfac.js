"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[6243],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=r.createContext({}),l=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=l(t.components);return r.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,u=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),f=l(n),m=o,d=f["".concat(u,".").concat(m)]||f[m]||s[m]||i;return n?r.createElement(d,a(a({ref:e},p),{},{components:n})):r.createElement(d,a({ref:e},p))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5997:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={title:"\u52a8\u673a"},u=void 0,l={unversionedId:"introduction/motivation",id:"introduction/motivation",title:"\u52a8\u673a",description:"\u51fa\u4e8e\u517c\u5bb9\u6027\u548c\u7b80\u4fbf\u6027\u7684\u8003\u8651\uff0c\u76f8\u6bd4\u4f7f\u7528\u5916\u90e8\u7684\u5168\u5c40\u72b6\u6001\uff0c\u4f7f\u7528 React \u5185\u7f6e\u7684\u72b6\u6001\u7ba1\u7406\u80fd\u529b\u662f\u4e2a\u6700\u4f73\u7684\u9009\u62e9\u3002\u4f46\u662f React \u6709\u8fd9\u6837\u4e00\u4e9b\u5c40\u9650\u6027\uff1a",source:"@site/i18n/zh-hans/docusaurus-plugin-content-docs/current/introduction/motivation.md",sourceDirName:"introduction",slug:"/introduction/motivation",permalink:"/zh-hans/docs/introduction/motivation",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/zh-hans/docusaurus-plugin-content-docs/current/introduction/motivation.md",tags:[],version:"current",frontMatter:{title:"\u52a8\u673a"},sidebar:"docs",next:{title:"\u6838\u5fc3\u6982\u5ff5",permalink:"/zh-hans/docs/introduction/core-concepts"}},p=[],s={toc:p};function f(t){var e=t.components,n=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u51fa\u4e8e\u517c\u5bb9\u6027\u548c\u7b80\u4fbf\u6027\u7684\u8003\u8651\uff0c\u76f8\u6bd4\u4f7f\u7528\u5916\u90e8\u7684\u5168\u5c40\u72b6\u6001\uff0c\u4f7f\u7528 React \u5185\u7f6e\u7684\u72b6\u6001\u7ba1\u7406\u80fd\u529b\u662f\u4e2a\u6700\u4f73\u7684\u9009\u62e9\u3002\u4f46\u662f React \u6709\u8fd9\u6837\u4e00\u4e9b\u5c40\u9650\u6027\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u95f4\u7684\u72b6\u6001\u5171\u4eab\u53ea\u80fd\u901a\u8fc7\u5c06 state \u63d0\u5347\u81f3\u5b83\u4eec\u7684\u516c\u5171\u7956\u5148\u6765\u5b9e\u73b0\uff0c\u4f46\u8fd9\u6837\u505a\u53ef\u80fd\u5bfc\u81f4\u91cd\u65b0\u6e32\u67d3\u4e00\u9897\u5de8\u5927\u7684\u7ec4\u4ef6\u6811\u3002"),(0,i.kt)("li",{parentName:"ul"},"Context \u53ea\u80fd\u5b58\u50a8\u5355\u4e00\u503c\uff0c\u65e0\u6cd5\u5b58\u50a8\u591a\u4e2a\u5404\u81ea\u62e5\u6709\u6d88\u8d39\u8005\u7684\u503c\u7684\u96c6\u5408\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4ee5\u4e0a\u4e24\u79cd\u65b9\u5f0f\u90fd\u5f88\u96be\u5c06\u7ec4\u4ef6\u6811\u7684\u9876\u5c42\uff08state \u5fc5\u987b\u5b58\u5728\u7684\u5730\u65b9\uff09\u4e0e\u53f6\u5b50\u7ec4\u4ef6 (\u4f7f\u7528 state \u7684\u5730\u65b9) \u8fdb\u884c\u4ee3\u7801\u5206\u5272\u3002")),(0,i.kt)("p",null,"\u6211\u4eec\u5e0c\u671b\u6539\u5584\u4e0a\u8ff0\u7684\u95ee\u9898\u7684\u540c\u65f6\uff0c\u4e0d\u4ec5\u80fd\u4fdd\u7559 API \u4ee5\u53ca\u8bed\u4e49\uff0c\u8fd8\u80fd\u4f7f\u5176\u7684\u8868\u73b0\u5c3d\u53ef\u80fd\u4fdd\u6301 React \u7684\u6837\u5b50\u3002"),(0,i.kt)("p",null,"Recoil \u5b9a\u4e49\u4e86\u4e00\u4e2a\u6709\u5411\u56fe (directed graph)\uff0c\u6b63\u4ea4\u540c\u65f6\u53c8\u5929\u7136\u8fde\u7ed3\u4e8e\u4f60\u7684 React \u6811\u4e0a\u3002\u72b6\u6001\u7684\u53d8\u5316\u4ece\u8be5\u56fe\u7684\u9876\u70b9\uff08\u6211\u4eec\u79f0\u4e4b\u4e3a atom\uff09\u5f00\u59cb\uff0c\u6d41\u7ecf\u7eaf\u51fd\u6570 (\u6211\u4eec\u79f0\u4e4b\u4e3a selector) \u518d\u4f20\u5165\u7ec4\u4ef6\u3002\u57fa\u4e8e\u8fd9\u6837\u7684\u5b9e\u73b0\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6211\u4eec\u53ef\u4ee5\u5b9a\u4e49\u65e0\u9700\u6a21\u677f\u4ee3\u7801\u7684 API\uff0c\u5171\u4eab\u7684\u72b6\u6001\u62e5\u6709\u4e0e React \u672c\u5730 state \u4e00\u6837\u7b80\u5355\u7684 get/set \u63a5\u53e3 (\u5f53\u7136\u5982\u679c\u9700\u8981\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 reducer \u7b49\u8fdb\u884c\u5c01\u88c5)\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6211\u4eec\u6709\u4e86\u4e0e Concurrent \u6a21\u5f0f\u53ca\u5176\u4ed6 React \u65b0\u7279\u6027\u517c\u5bb9\u7684\u53ef\u80fd\u6027\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u72b6\u6001\u7684\u5b9a\u4e49\u662f\u6e10\u8fdb\u5f0f\u548c\u5206\u5e03\u5f0f\u7684\uff0c\u8fd9\u4f7f\u4ee3\u7801\u5206\u5272\u6210\u4e3a\u53ef\u80fd\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u65e0\u9700\u4fee\u6539\u5bf9\u5e94\u7684\u7ec4\u4ef6\uff0c\u5c31\u80fd\u5c06\u5b83\u4eec\u672c\u5730\u7684 state \u7528\u6d3e\u751f\u6570\u636e\u66ff\u6362\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u65e0\u9700\u4fee\u6539\u5bf9\u5e94\u7684\u7ec4\u4ef6\uff0c\u5c31\u80fd\u5c06\u6d3e\u751f\u6570\u636e\u5728\u540c\u6b65\u4e0e\u5f02\u6b65\u95f4\u5207\u6362\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6211\u4eec\u80fd\u5c06\u5bfc\u822a\u89c6\u4e3a\u5934\u7b49\u6982\u5ff5\uff0c\u751a\u81f3\u53ef\u4ee5\u5c06\u72b6\u6001\u7684\u8f6c\u53d8\u7f16\u7801\u8fdb\u94fe\u63a5\u4e2d\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5f88\u8f7b\u677e\u5730\u4ee5\u53ef\u56de\u6eaf\u7684\u65b9\u5f0f\u6301\u4e45\u5316\u6574\u4e2a\u5e94\u7528\u7684\u72b6\u6001\uff0c\u6301\u4e45\u5316\u7684\u72b6\u6001\u4e0d\u4f1a\u56e0\u4e3a\u5e94\u7528\u7684\u6539\u53d8\u800c\u4e22\u5931\u3002")))}f.isMDXComponent=!0}}]);