"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[9334],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return d}});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},s=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(r),d=i,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return r?t.createElement(m,a(a({ref:n},s),{},{components:r})):t.createElement(m,a({ref:n},s))}));function d(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7055:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return f}});var t=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],l={title:"waitForAll(dependencies)",sidebar_label:"waitForAll()"},c=void 0,u={unversionedId:"api-reference/utils/waitForAll",id:"api-reference/utils/waitForAll",title:"waitForAll(dependencies)",description:"\u4e00\u4e2a\u5141\u8bb8\u6211\u4eec\u5e76\u53d1\u8ba1\u7b97\u591a\u4e2a\u5f02\u6b65\u4f9d\u8d56\u9879\u7684\u5e76\u53d1 helper \u65b9\u6cd5\u3002",source:"@site/i18n/zh-hans/docusaurus-plugin-content-docs/current/api-reference/utils/waitForAll.md",sourceDirName:"api-reference/utils",slug:"/api-reference/utils/waitForAll",permalink:"/zh-hans/docs/api-reference/utils/waitForAll",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/zh-hans/docusaurus-plugin-content-docs/current/api-reference/utils/waitForAll.md",tags:[],version:"current",frontMatter:{title:"waitForAll(dependencies)",sidebar_label:"waitForAll()"},sidebar:"docs",previous:{title:"noWait()",permalink:"/zh-hans/docs/api-reference/utils/noWait"},next:{title:"waitForAllSettled()",permalink:"/zh-hans/docs/api-reference/utils/waitForAllSettled"}},s=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[],level:3}],p={toc:s};function f(e){var n=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4e00\u4e2a\u5141\u8bb8\u6211\u4eec\u5e76\u53d1\u8ba1\u7b97\u591a\u4e2a\u5f02\u6b65\u4f9d\u8d56\u9879\u7684\u5e76\u53d1 helper \u65b9\u6cd5\u3002"),(0,o.kt)("p",null,"\u4f9d\u8d56\u9879\u53ef\u4ee5\u4f5c\u4e3a\u5143\u7ec4\u6570\u7ec4\u63d0\u4f9b\uff0c\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u5bf9\u8c61\u4e2d\u7684\u547d\u540d\u4f9d\u8d56\u9879\u63d0\u4f9b\u3002"),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function waitForAll(dependencies: Array<RecoilValue<>>):\n  RecoilValueReadOnly<UnwrappedArray>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function waitForAll(dependencies: {[string]: RecoilValue<>}):\n  RecoilValueReadOnly<UnwrappedObject>\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"\u56e0\u4e3a\u6b64\u5e76\u53d1 helper \u662f\u4f5c\u4e3a\u4e00\u4e2a selector \u63d0\u4f9b\u7684\uff0c\u6240\u4ee5\u5b83\u53ef\u4ee5\u4f5c\u4e3a React \u7ec4\u4ef6\u4e2d\u7684 Recoil \u94a9\u5b50\u51fd\u6570\u4f7f\u7528\uff0c\u4e5f\u53ef\u4ee5\u4f5c\u4e3a Recoil selector \u4e2d\u7684\u4f9d\u8d56\u9879\u4f7f\u7528\uff0c\u6216\u8005\u4efb\u4f55\u4f7f\u7528 Recoil \u72b6\u6001\u7684\u5730\u65b9\u3002"),(0,o.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function FriendsInfo() {\n  const [friendA, friendB] = useRecoilValue(\n    waitForAll([friendAState, friendBState])\n  );\n  return (\n    <div>\n      Friend A Name: {friendA.name}\n      Friend B Name: {friendB.name}\n    </div>\n  );\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const friendsInfoQuery = selector({\n  key: 'FriendsInfoQuery',\n  get: ({get}) => {\n    const {friendList} = get(currentUserInfoQuery);\n    const friends = get(waitForAll(\n      friendList.map(friendID => userInfoQuery(friendID))\n    ));\n    return friends;\n  },\n});\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const customerInfoQuery = selectorFamily({\n  key: 'CustomerInfoQuery',\n  get: id => ({get}) => {\n    const {info, invoices, payments} = get(waitForAll({\n      info: customerInfoQuery(id),\n      invoices: invoicesQuery(id),\n      payments: paymentsQuery(id),\n    }));\n\n    return {\n      name: info.name,\n      transactions: [\n        ...invoices,\n        ...payments,\n      ],\n    };\n  },\n});\n")))}f.isMDXComponent=!0}}]);