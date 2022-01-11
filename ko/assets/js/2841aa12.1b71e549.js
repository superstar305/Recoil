"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[8639],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),f=o,d=s["".concat(c,".").concat(f)]||s[f]||m[f]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2666:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={title:"atom(options)",sidebar_label:"atom()"},c=void 0,u={unversionedId:"api-reference/core/atom",id:"api-reference/core/atom",title:"atom(options)",description:"atom\uc740 Recoil\uc758 \uc0c1\ud0dc\ub97c \ud45c\ud604\ud55c\ub2e4. atom() \ud568\uc218\ub294 \uc4f0\uae30 \uac00\ub2a5\ud55c RecoilState \uac1d\uccb4\ub97c \ubc18\ud658\ud55c\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/api-reference/core/atom.md",sourceDirName:"api-reference/core",slug:"/api-reference/core/atom",permalink:"/ko/docs/api-reference/core/atom",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/ko/docusaurus-plugin-content-docs/current/api-reference/core/atom.md",tags:[],version:"current",frontMatter:{title:"atom(options)",sidebar_label:"atom()"},sidebar:"docs",previous:{title:"<RecoilRoot />",permalink:"/ko/docs/api-reference/core/RecoilRoot"},next:{title:"selector()",permalink:"/ko/docs/api-reference/core/selector"}},p=[{value:"\uc608\uc2dc",id:"\uc608\uc2dc",children:[],level:3}],m={toc:p};function s(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"atom"),"\uc740 Recoil\uc758 \uc0c1\ud0dc\ub97c \ud45c\ud604\ud55c\ub2e4. ",(0,a.kt)("inlineCode",{parentName:"p"},"atom()")," \ud568\uc218\ub294 \uc4f0\uae30 \uac00\ub2a5\ud55c ",(0,a.kt)("inlineCode",{parentName:"p"},"RecoilState")," \uac1d\uccb4\ub97c \ubc18\ud658\ud55c\ub2e4."),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function atom<T>({\n  key: string,\n  default: T | Promise<T> | RecoilValue<T>,\n\n  effects_UNSTABLE?: $ReadOnlyArray<AtomEffect<T>>,\n\n  dangerouslyAllowMutability?: boolean,\n}): RecoilState<T>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"key")," - \ub0b4\ubd80\uc801\uc73c\ub85c atom\uc744 \uc2dd\ubcc4\ud558\ub294\ub370 \uc0ac\uc6a9\ub418\ub294 \uace0\uc720\ud55c \ubb38\uc790\uc5f4. \uc774 \ubb38\uc790\uc5f4\uc740 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \uc804\uccb4\uc5d0\uc11c \ub2e4\ub978 atom\uacfc selector\uc5d0 \ub300\ud574 \uace0\uc720\ud574\uc57c \ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"default")," - atom\uc758 \ucd08\uae43\uac12 \ub610\ub294 ",(0,a.kt)("inlineCode",{parentName:"li"},"Promise")," \ub610\ub294 \ub3d9\uc77c\ud55c \ud0c0\uc785\uc758 \uac12\uc744 \ub098\ud0c0\ub0b4\ub294 \ub2e4\ub978 atom\uc774\ub098 selector."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"effects_UNSTABLE")," - atom\uc744 \uc704\ud55c \uc120\ud0dd\uc801\uc778 ",(0,a.kt)("a",{parentName:"li",href:"/docs/guides/atom-effects"},"Atom Effects")," \ubc30\uc5f4."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dangerouslyAllowMutability")," - Recoil\uc740 atom\uc744 \uc774\uc6a9\ud574 \ub2e4\uc2dc \ub80c\ub354\ub9c1 \ub418\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc5b8\uc81c \uc54c\ub824\uc57c \ud560\uc9c0 \uc54c\uae30 \uc704\ud574 atom\uc758 \uc0c1\ud0dc \ubcc0\ud654\uc5d0 \uc758\uc874\ud55c\ub2e4. \ub9cc\uc57d atom\uc758 \uac12\uc774 \ubcc0\uacbd\ub420 \uacbd\uc6b0, \uc774\ub97c \uac70\uce58\uc9c0 \uc54a\uace0 \ub4f1\ub85d\ub41c \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc81c\ub300\ub85c \uc54c\ub9ac\uc9c0 \uc54a\uace0 \uc0c1\ud0dc\uac00 \ubcc0\uacbd\ub420 \uc218 \uc788\ub2e4. \uc774\ub97c \ubc29\uc9c0\ud558\uae30 \uc704\ud574 \uc800\uc7a5\ub41c \ubaa8\ub4e0 \uac12\uc774 \ubcc0\uacbd\ub418\uc9c0 \uc54a\ub294\ub2e4. \uacbd\uc6b0\uc5d0 \ub530\ub77c \uc774 \uc635\uc158\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc774 \uc635\uc158\uc744 \uc7ac\uc815\uc758\ud560 \uc218 \uc788\ub2e4.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"atom\uacfc \uc0c1\ud638\uc791\uc6a9\ud558\uae30 \uc704\ud574 \uac00\uc7a5 \uc790\uc8fc \uc0ac\uc6a9\ub418\ub294 Hooks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/core/useRecoilState"},(0,a.kt)("inlineCode",{parentName:"a"},"useRecoilState()")),": atom\uc744 \uc77d\uace0 \uc4f0\ub824\uace0 \ud560 \ub54c \uc774 Hook\uc744 \uc0ac\uc6a9\ud55c\ub2e4. \uc774 Hook\ub294 atom\uc5d0 \ucef4\ud3ec\ub10c\ud2b8\uc744 \ub4f1\ub85d\ud558\ub3c4\ub85d \ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/core/useRecoilValue"},(0,a.kt)("inlineCode",{parentName:"a"},"useRecoilValue()")),": atom\uc744 \uc77d\uae30\ub9cc \ud560 \ub54c \uc774 Hook\ub97c \uc0ac\uc6a9\ud55c\ub2e4. \uc774 Hook\ub294 atom\uc5d0 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub4f1\ub85d\ud558\ub3c4\ub85d \ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/core/useSetRecoilState"},(0,a.kt)("inlineCode",{parentName:"a"},"useSetRecoilState()")),": atom\uc5d0 \uc4f0\ub824\uace0\ub9cc \ud560 \ub54c \uc774 Hook\ub97c \uc0ac\uc6a9\ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/core/useResetRecoilState"},(0,a.kt)("inlineCode",{parentName:"a"},"useResetRecoilState()")),": atom\uc744 \ucd08\uae43\uac12\uc73c\ub85c \ucd08\uae30\ud654\ud560 \ub54c \uc774 Hook\uc744 \uc0ac\uc6a9\ud55c\ub2e4.")),(0,a.kt)("p",null,"\ucef4\ud3ec\ub10c\ud2b8\uac00 \ub4f1\ub85d\ub418\uc9c0 \uc54a\uace0 atom\uc758 \uac12\uc744 \uc77d\uc5b4\uc57c \ud558\ub294 \ub4dc\ubb38 \uacbd\uc6b0\ub294 ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/useRecoilCallback"},(0,a.kt)("inlineCode",{parentName:"a"},"useRecoilCallback()")),"\ub97c \ucc38\uc870\ud558\uba74 \ub41c\ub2e4."),(0,a.kt)("p",null,"\uc815\uc801\uc778 \uac12\uc73c\ub85c atom\uc744 \ucd08\uae30\ud654\ud558\uac70\ub098 \uac19\uc740 \uc720\ud615\uc758 \uac12\uc744 \ub098\ud0c0\ub0b4\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise")," \ub610\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"RecoilValue"),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc6d0\uc790\ub97c \ucd08\uae30\ud654\ud560 \uc218 \uc788\ub2e4. \uc65c\ub0d0\ud558\uba74 ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\uac00 \ubcf4\ub958 \uc911\uc774\uac70\ub098 \uae30\ubcf8 selector\uac00 \ube44\ub3d9\uae30\uc77c \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 atom\uc758 \uac12\ub3c4 \ubcf4\ub958 \uc911\uc774\uac70\ub098 \uc77d\uc744 \ub54c \uc624\ub958\ub97c \ubc1c\uc0dd\uc2dc\ud0ac \uc218 \uc788\ub2e4\ub294 \uac83\uc744 \uc758\ubbf8\ud55c\ub2e4. \ud604\uc7ac atom\uc744 \uc124\uc815\ud560 \ub54c ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\uc744 \uc9c0\uc815\ud560 \uc218 \uc5c6\ub2e4\ub294 \uc810\uc5d0 \uc720\uc758\ud574\uc57c \ud55c\ub2e4. \ube44\ub3d9\uae30 \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c\ub294 ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/selector"},"selectors"),"\ub97c \uc0ac\uc6a9\ud55c\ub2e4."),(0,a.kt)("p",null,"atom\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\ub098 ",(0,a.kt)("inlineCode",{parentName:"p"},"RecoilValues"),"\ub97c \uc9c1\uc811 \uc800\uc7a5\ud558\ub294 \ub370 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc9c0\ub9cc \uac1d\uccb4\ub97c \uac10\uc300 \uc218\ub3c4 \uc788\ub2e4. ",(0,a.kt)("inlineCode",{parentName:"p"},"Promises"),"\uc740 \ubcc0\uacbd\ub420 \uc218 \uc788\ub2e4\ub294 \uc810\uc5d0 \uc720\uc758\ud574\uc57c \ud55c\ub2e4. Atom\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"function"),"\ub85c \uc124\uc815\ud560 \uc218 \uc788\uc9c0\ub9cc, \ud568\uc218\uac00 \uc21c\uc218\ud558\ub2e4\uba74, \uadf8\ub7ec\uae30 \uc704\ud574\uc11c\ub294 setter\ud615\ud0dc\uc758 updater\ub97c \uc0ac\uc6a9\ud574\uc57c \ud560 \uc218\ub3c4 \uc788\ub2e4. (\uc608: ",(0,a.kt)("inlineCode",{parentName:"p"},"set(myAtom, () => myFunc);"),")."),(0,a.kt)("h3",{id:"\uc608\uc2dc"},"\uc608\uc2dc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import {atom, useRecoilState} from 'recoil';\n\nconst counter = atom({\n  key: 'myCounter',\n  default: 0,\n});\n\nfunction Counter() {\n  const [count, setCount] = useRecoilState(counter);\n  const incrementByOne = () => setCount(count + 1);\n\n  return (\n    <div>\n      Count: {count}\n      <br />\n      <button onClick={incrementByOne}>Increment</button>\n    </div>\n  );\n}\n")))}s.isMDXComponent=!0}}]);