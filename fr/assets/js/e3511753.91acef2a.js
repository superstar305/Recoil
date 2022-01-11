"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[5132],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8420:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={title:"Motivation"},l=void 0,u={unversionedId:"introduction/motivation",id:"introduction/motivation",title:"Motivation",description:"Pour des raisons de compatibilit\xe9 et de simplicit\xe9, il est pr\xe9f\xe9rable d'utiliser les capacit\xe9s de gestion d'\xe9tat int\xe9gr\xe9es de React plut\xf4t qu'un solution d'\xe9tat global externe. Mais React a certaines limites:",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/introduction/motivation.md",sourceDirName:"introduction",slug:"/introduction/motivation",permalink:"/fr/docs/introduction/motivation",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/fr/docusaurus-plugin-content-docs/current/introduction/motivation.md",tags:[],version:"current",frontMatter:{title:"Motivation"},sidebar:"docs",next:{title:"Concepts de base",permalink:"/fr/docs/introduction/core-concepts"}},c=[],p={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pour des raisons de compatibilit\xe9 et de simplicit\xe9, il est pr\xe9f\xe9rable d'utiliser les capacit\xe9s de gestion d'\xe9tat int\xe9gr\xe9es de React plut\xf4t qu'un solution d'\xe9tat global externe. Mais React a certaines limites:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"L'\xe9tat des composants ne peut \xeatre partag\xe9 qu'en \xe9tant poussant vers un anc\xeatre commun, mais cela peut inclure un arbre de taille cons\xe9quente qui doit ensuite \xeatre re-rendu."),(0,o.kt)("li",{parentName:"ul"},"Le contexte ne peut stocker qu'une valeur seule, pas un jeu ind\xe9fini de valeures avec chacune leur propre composant consommateurs."),(0,o.kt)("li",{parentName:"ul"},"Ces deux \xe9l\xe9ments rendent difficile la fragmentation de code du haut de l'arbre (o\xf9 l'\xe9tat doit vivre) vers les feuilles de l'arbre (o\xf9 l'\xe9tat est utilis\xe9).")),(0,o.kt)("p",null,"Nous voulons am\xe9liorer cela tout en gardant l'API et la s\xe9mantique ainsi que le qu'un comportement aussi ",(0,o.kt)("em",{parentName:"p"},"React")," que possible."),(0,o.kt)("p",null,"Recoil d\xe9finit un graphe orient\xe9 orthogonal mais \xe9galement intrins\xe8que et attach\xe9 \xe0 votre arbre React. Les changements d'\xe9tat d\xe9coulent des racines de ce graphe (que nous appelons des atomes) \xe0 travers des fonctions pures (que nous appelons des s\xe9lecteurs) et enfin vers les composants. Avec cette approche:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Nous obtenons une API sans code squelette o\xf9 l'\xe9tat partag\xe9 a la m\xeame interface get / set simple que l'\xe9tat local React (mais peut \xeatre encapsul\xe9 avec des r\xe9ducteurs, etc. si n\xe9cessaire)."),(0,o.kt)("li",{parentName:"ul"},"Nous avons la possibilit\xe9 de compatibilit\xe9 avec le mode concurrent et d'autres nouvelles fonctionnalit\xe9s de React d\xe8s qu'elles seront disponibles."),(0,o.kt)("li",{parentName:"ul"},"La d\xe9finition de l'\xe9tat est incr\xe9mentielle et distribu\xe9e, ce qui rend possible la fragmentation de code."),(0,o.kt)("li",{parentName:"ul"},"L'\xe9tat peut \xeatre remplac\xe9 par des donn\xe9es d\xe9riv\xe9es sans modifier les composants qui l'utilisent."),(0,o.kt)("li",{parentName:"ul"},"Les donn\xe9es d\xe9riv\xe9es peuvent passer de synchrones \xe0 asynchrones sans modifier les composants qui les utilisent."),(0,o.kt)("li",{parentName:"ul"},"Nous pouvons traiter la navigation comme un concept de premi\xe8re classe, m\xeame en codant les transitions d'\xe9tat dans les liens."),(0,o.kt)("li",{parentName:"ul"},"Il est facile de conserver l'int\xe9gralit\xe9 de l'\xe9tat de l'application d'une mani\xe8re r\xe9trocompatible, de sorte que les \xe9tats persistants puissent survivre les modifications apport\xe9es \xe0 l'application.")))}d.isMDXComponent=!0}}]);