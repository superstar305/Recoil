"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[583],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2519:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],i={title:"useRecoilValueLoadable(state)",sidebar_label:"useRecoilValueLoadable()"},c=void 0,u={unversionedId:"api-reference/core/useRecoilValueLoadable",id:"api-reference/core/useRecoilValueLoadable",title:"useRecoilValueLoadable(state)",description:"Ce hook est destin\xe9 \xe0 \xeatre utilis\xe9 pour lire la valeur des s\xe9lecteurs asynchrones. Ce hook abonnera implicitement le composant \xe0 l'\xe9tat donn\xe9.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/api-reference/core/useRecoilValueLoadable.md",sourceDirName:"api-reference/core",slug:"/api-reference/core/useRecoilValueLoadable",permalink:"/fr/docs/api-reference/core/useRecoilValueLoadable",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/fr/docusaurus-plugin-content-docs/current/api-reference/core/useRecoilValueLoadable.md",tags:[],version:"current",frontMatter:{title:"useRecoilValueLoadable(state)",sidebar_label:"useRecoilValueLoadable()"},sidebar:"docs",previous:{title:"useRecoilStateLoadable()",permalink:"/fr/docs/api-reference/core/useRecoilStateLoadable"},next:{title:"useGetRecoilValueInfo()",permalink:"/fr/docs/api-reference/core/useGetRecoilValueInfo"}},s=[{value:"Exemple",id:"exemple",children:[],level:3}],p={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Ce hook est destin\xe9 \xe0 \xeatre utilis\xe9 pour lire la valeur des s\xe9lecteurs asynchrones. Ce hook abonnera implicitement le composant \xe0 l'\xe9tat donn\xe9."),(0,o.kt)("p",null,"Contrairement \xe0 ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/useRecoilValue"},(0,o.kt)("inlineCode",{parentName:"a"},"useRecoilValue()")),", ce hook ne lancera pas une ",(0,o.kt)("inlineCode",{parentName:"p"},"Error")," ou une ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise")," lors de la lecture \xe0 partir d'un s\xe9lecteur asynchrone (dans le but de travailler avec ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/concurrent-mode-suspense.html"},"React Suspense"),"). Au lieu de cela, ce hook renvoie un objet ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/Loadable"},(0,o.kt)("inlineCode",{parentName:"a"},"Loadable")),"."),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function useRecoilValueLoadable<T>(state: RecoilValue<T>): Loadable<T>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"state"),": un ",(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/atom"},(0,o.kt)("inlineCode",{parentName:"a"},"atome"))," ou ",(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/selector"},(0,o.kt)("inlineCode",{parentName:"a"},"s\xe9lecteur"))," qui ",(0,o.kt)("em",{parentName:"li"},"peut")," avoir des op\xe9rations asynchrones. L'\xe9tat du chargeable retourn\xe9 d\xe9pendra de l'\xe9tat du s\xe9lecteur d'\xe9tat fourni.")),(0,o.kt)("p",null,"Renvoie un ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/Loadable"},(0,o.kt)("inlineCode",{parentName:"a"},"Loadable"))," pour l'\xe9tat actuel avec l'interface:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"state"),": indique l'\xe9tat du s\xe9lecteur. Les valeurs possibles sont ",(0,o.kt)("inlineCode",{parentName:"li"},"'hasValue'"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"'hasError'"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"'loading'"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contents"),": La valeur repr\xe9sent\xe9e par ce",(0,o.kt)("inlineCode",{parentName:"li"}," Loadable"),". Si l'\xe9tat est ",(0,o.kt)("inlineCode",{parentName:"li"},"'hasValue'"),", c'est la valeur r\xe9elle, si l'\xe9tat est ",(0,o.kt)("inlineCode",{parentName:"li"},"'hasError'"),", c'est l'objet ",(0,o.kt)("inlineCode",{parentName:"li"},"Error")," qui a \xe9t\xe9 lanc\xe9, et si l'\xe9tat est ",(0,o.kt)("inlineCode",{parentName:"li"},"loading"),", alors c'est une ",(0,o.kt)("inlineCode",{parentName:"li"},"Promise")," du \xe9valuer.")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"exemple"},"Exemple"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function UserInfo({userID}) {\n  const userNameLoadable = useRecoilValueLoadable(userNameQuery(userID));\n  switch (userNameLoadable.state) {\n    case 'hasValue':\n      return <div>{userNameLoadable.contents}</div>;\n    case 'loading':\n      return <div>Chargement...</div>;\n    case 'hasError':\n      throw userNameLoadable.contents;\n  }\n}\n")))}d.isMDXComponent=!0}}]);