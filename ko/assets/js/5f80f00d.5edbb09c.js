"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[5102],{3905:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return f}});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),u=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=u(e.components);return t.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,y=d["".concat(c,".").concat(f)]||d[f]||s[f]||o;return n?t.createElement(y,i(i({ref:r},p),{},{components:n})):t.createElement(y,i({ref:r},p))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7215:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var t=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"waitForNone(dependencies)",sidebar_label:"waitForNone()"},c=void 0,u={unversionedId:"api-reference/utils/waitForNone",id:"api-reference/utils/waitForNone",title:"waitForNone(dependencies)",description:"\uc694\uccad\ub41c \uc885\uc18d\uc131\uc758 \ud604\uc7ac \uc0c1\ud0dc\uc5d0 \ub300\ud55c Loadable \uc9d1\ud569\uc744 \ubc18\ud658\ud558\ub294 \ub3d9\uc2dc\uc131(concurrency) helper \uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/api-reference/utils/waitForNone.md",sourceDirName:"api-reference/utils",slug:"/api-reference/utils/waitForNone",permalink:"/ko/docs/api-reference/utils/waitForNone",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/ko/docusaurus-plugin-content-docs/current/api-reference/utils/waitForNone.md",tags:[],version:"current",frontMatter:{title:"waitForNone(dependencies)",sidebar_label:"waitForNone()"},sidebar:"docs",previous:{title:"waitForAllSettled()",permalink:"/ko/docs/api-reference/utils/waitForAllSettled"},next:{title:"waitForAny()",permalink:"/ko/docs/api-reference/utils/waitForAny"}},p=[{value:"\uc810\uc9c4\uc801 \ub85c\ub529 Example",id:"\uc810\uc9c4\uc801-\ub85c\ub529-example",children:[],level:3}],s={toc:p};function d(e){var r=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\uc694\uccad\ub41c \uc885\uc18d\uc131\uc758 \ud604\uc7ac \uc0c1\ud0dc\uc5d0 \ub300\ud55c ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/Loadable"},(0,o.kt)("inlineCode",{parentName:"a"},"Loadable"))," \uc9d1\ud569\uc744 \ubc18\ud658\ud558\ub294 \ub3d9\uc2dc\uc131(concurrency) helper \uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc885\uc18d\uc131\ub4e4\uc740 \ud29c\ud50c \ubc30\uc5f4 \ub610\ub294 \uac1d\uccb4\uc5d0 \uba85\uba85\ub41c \uc885\uc18d\uc131\uc73c\ub85c \uc81c\uacf5\ub429\ub2c8\ub2e4."),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function waitForNone(dependencies: Array<RecoilValue<>>):\n  RecoilValueReadOnly<UnwrappedArrayOfLoadables>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function waitForNone(dependencies: {[string]: RecoilValue<>}):\n  RecoilValueReadOnly<UnwrappedObjectOfLoadables>\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"waitForNone()"),"\ub294 ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/utils/waitForAll"},(0,o.kt)("inlineCode",{parentName:"a"},"waitForAll()")),"\uacfc \ube44\uc2b7\ud558\uc9c0\ub9cc, \uc989\uc2dc \ubc18\ud658\ud55c\ub2e4\ub294 \uc810\uacfc \uac12\uc744 \uc9c1\uc811 \ubc18\ud658\ud558\ub294 \ub300\uc2e0 \uac01\uac01 \uc885\uc18d\uc131\uc5d0 \ub300\ud574 ",(0,o.kt)("inlineCode",{parentName:"p"},"Loadable"),"\uc744 \ubc18\ud658\ud55c\ub2e4\ub294 \uc810\uc774 \ub2e4\ub985\ub2c8\ub2e4. ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/utils/noWait"},(0,o.kt)("inlineCode",{parentName:"a"},"noWait()")),"\uacfc \ube44\uc2b7\ud558\uc9c0\ub9cc, \ud55c \ubc88\uc5d0 \uc5ec\ub7ec \uc885\uc18d\uc131\uc744 \uc694\uccad\ud560 \uc218 \uc788\ub2e4\ub294 \uc810\uc5d0\uc11c \ub2e4\ub985\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc774 helper\ub294 \ub370\uc774\ud130\uc758 \uc77c\ubd80\ubd84\uc744 \uc0ac\uc6a9\ud574 \uc791\uc5c5\uc744 \ud558\uac70\ub098 \ub2e4\ub978 \ub370\uc774\ud130\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc744 \ub54c UI\ub97c \uc810\uc9c4\uc801\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ud560 \ub54c \uc720\uc6a9\ud569\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"\uc810\uc9c4\uc801-\ub85c\ub529-example"},"\uc810\uc9c4\uc801 \ub85c\ub529 Example"),(0,o.kt)("p",null,"\uc774 \uc608\uc81c\ub294 \uc5ec\ub7ec \ub808\uc774\uc5b4\uac00 \uc788\ub294 \ucc28\ud2b8\ub97c \ub80c\ub354\ub9c1\ud569\ub2c8\ub2e4. \uac01 \ub808\uc774\uc5b4\ub294 \uc7a0\uc7ac\uc801\uc73c\ub85c \ube44\uc6a9\uc774 \ud070 \ub370\uc774\ud130 \ucffc\ub9ac\uac00 \uc874\uc7ac\ud569\ub2c8\ub2e4. \ubcf4\ub958 \uc0c1\ud0dc\uc778 \uac01 \ub808\uc774\uc5b4\ub294 \uc2a4\ud53c\ub108\ub97c \uc0ac\uc6a9\ud574 \uc989\uc2dc \ub80c\ub354\ub9c1\ud558\uba70, \ud574\ub2f9 \ub808\uc774\uc5b4\uc5d0 \ub300\ud55c \ub370\uc774\ud130\uac00 \ub4e4\uc5b4\uc62c \ub54c \uc0c8 \ub808\uc774\uc5b4\ub97c \ucd94\uac00\ud558\ub3c4\ub85d \ucc28\ud2b8\ub97c \uc5c5\ub370\uc774\ud2b8 \ud569\ub2c8\ub2e4. \ub808\uc774\uc5b4 \uc911 \ud018\ub9ac\uc5d0 \uc624\ub958\uac00 \uc788\ub294 \uacbd\uc6b0, \ud574\ub2f9 \ub808\uc774\uc5b4\ub9cc \uc624\ub958 \uba54\uc138\uc9c0\ub97c \ud45c\uc2dc\ud558\uace0 \ub098\uba38\uc9c0 \ub808\uc774\uc5b4\ub294 \uacc4\uc18d \ub80c\ub354\ub9c1 \ub429\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function MyChart({layerQueries}: {layerQueries: Array<RecoilValue<Layer>>}) {\n  const layerLoadables = useRecoilValue(waitForNone(layerQueries));\n\n  return (\n    <Chart>\n      {layerLoadables.map((layerLoadable, i) => {\n        switch (layerLoadable.state) {\n          case 'hasValue':\n            return <Layer key={i} data={layerLoadable.contents} />;\n          case 'hasError':\n            return <LayerErrorBadge key={i} error={layerLoadable.contents} />;\n          case 'loading':\n            return <LayerWithSpinner key={i} />;\n        }\n      })}\n    </Chart>\n  );\n}\n\n")))}d.isMDXComponent=!0}}]);