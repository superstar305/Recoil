"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[1239],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9931:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"noWait(state)",sidebar_label:"noWait()"},c=void 0,u={unversionedId:"api-reference/utils/noWait",id:"api-reference/utils/noWait",title:"noWait(state)",description:"Un assistant de s\xe9lection qui renverra un Loadable pour l'\xe9tat actuel de l'atome) ou  s\xe9lecteur.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/api-reference/utils/noWait.md",sourceDirName:"api-reference/utils",slug:"/api-reference/utils/noWait",permalink:"/fr/docs/api-reference/utils/noWait",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/fr/docusaurus-plugin-content-docs/current/api-reference/utils/noWait.md",tags:[],version:"current",frontMatter:{title:"noWait(state)",sidebar_label:"noWait()"},sidebar:"docs",previous:{title:"errorSelector()",permalink:"/fr/docs/api-reference/utils/errorSelector"},next:{title:"waitForAll()",permalink:"/fr/docs/api-reference/utils/waitForAll"}},s=[{value:"Exemple",id:"exemple",children:[],level:3}],p={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Un assistant de s\xe9lection qui renverra un ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/Loadable"},(0,o.kt)("inlineCode",{parentName:"a"},"Loadable"))," pour l'\xe9tat actuel de l'",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/atom"},(0,o.kt)("inlineCode",{parentName:"a"},"atome")),") ou ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/selector"}," ",(0,o.kt)("inlineCode",{parentName:"a"},"s\xe9lecteur")),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function noWait<T>(state: RecoilValue<T>): RecoilValueReadOnly<Loadable<T>>\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Cet assistant peut \xeatre utilis\xe9 pour obtenir l'\xe9tat actuel d'une d\xe9pendance potentiellement asynchrone sans lever d'exception s'il y a une erreur ou si la d\xe9pendance est toujours en attente. Il est similaire \xe0 ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/useRecoilValueLoadable"},(0,o.kt)("inlineCode",{parentName:"a"},"useRecoilValueLoadable()"))," sauf qu'il s'agit d'un s\xe9lecteur au lieu d'un hook. Puisque ",(0,o.kt)("inlineCode",{parentName:"p"},"noWait ()")," renvoie un s\xe9lecteur, il peut \xe0 son tour \xeatre utilis\xe9 par d'autres s\xe9lecteurs Recoil ainsi que par des hooks."),(0,o.kt)("h3",{id:"exemple"},"Exemple"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const myQuery = selector({\n  key: 'MaRequ\xeate',\n  get: ({get}) => {\n    const loadable = get(noWait(dbQuerySelector));\n\n    return {\n      hasValue: {data: loadable.contents},\n      hasError: {error: loadable.contents},\n      loading: {data: 'substituant pendant chargement'},\n    }[loadable.state];\n  }\n})\n\n")))}d.isMDXComponent=!0}}]);