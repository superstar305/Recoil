"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[2263],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=i(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var i=2;i<a;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6531:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return i},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],l={title:"Concepts de base"},u=void 0,i={unversionedId:"introduction/core-concepts",id:"introduction/core-concepts",title:"Concepts de base",description:"Aper\xe7u",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/introduction/core-concepts.md",sourceDirName:"introduction",slug:"/introduction/core-concepts",permalink:"/fr/docs/introduction/core-concepts",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/fr/docusaurus-plugin-content-docs/current/introduction/core-concepts.md",tags:[],version:"current",frontMatter:{title:"Concepts de base"},sidebar:"docs",previous:{title:"Motivation",permalink:"/fr/docs/introduction/motivation"},next:{title:"Installation",permalink:"/fr/docs/introduction/installation"}},c=[{value:"Aper\xe7u",id:"aper\xe7u",children:[],level:2},{value:"Atomes",id:"atomes",children:[],level:2},{value:"S\xe9lecteurs",id:"s\xe9lecteurs",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"aper\xe7u"},"Aper\xe7u"),(0,a.kt)("p",null,"Recoil vous permet de cr\xe9er un graphe de flux de donn\xe9es qui s'\xe9coule des ",(0,a.kt)("em",{parentName:"p"},"atomes")," (\xe9tat partag\xe9) via des ",(0,a.kt)("em",{parentName:"p"},"s\xe9lecteurs")," (fonctions pures) et descend dans vos composants React. Les atomes sont des unit\xe9s d'\xe9tat auxquelles les composants peuvent s'abonner. Les s\xe9lecteurs transforment cet \xe9tat de mani\xe8re synchrone ou asynchrone."),(0,a.kt)("h2",{id:"atomes"},"Atomes"),(0,a.kt)("p",null,"Les atomes sont des unit\xe9s d'\xe9tat. Ils peuvent \xeatre mis \xe0 jour et il est possible de s'y abonner: lorsqu'un atome est mis \xe0 jour, chaque composant abonn\xe9 est re-rendu avec la nouvelle valeur. Ils peuvent \xe9galement \xeatre cr\xe9\xe9s \xe0 l'ex\xe9cution. Les atomes peuvent \xeatre utilis\xe9s \xe0 la place de l'\xe9tat local du composant React. Si le m\xeame atome est utilis\xe9 \xe0 partir de plusieurs composants, tous ces composants partagent leur \xe9tat."),(0,a.kt)("p",null,"Les atomes sont cr\xe9\xe9s en utilisant la fonction ",(0,a.kt)("inlineCode",{parentName:"p"},"atom"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const fontSizeState = atom({\n  key: 'fontSizeState',\n  default: 14,\n});\n")),(0,a.kt)("p",null,"Les atomes ont besoin d'une cl\xe9 unique, qui est utilis\xe9e pour le d\xe9bogage, la persistance et pour certaines API avanc\xe9es qui vous permettent de voir une carte de tous les atomes. C'est une erreur pour deux atomes d'avoir la m\xeame cl\xe9, alors assurez-vous qu'ils sont uniques \xe0 travers toute l'application. Comme les \xe9tats locaux de composant React, ils ont \xe9galement une valeur par d\xe9faut."),(0,a.kt)("p",null,"Pour lire et \xe9crire un atome \xe0 partir d'un composant, nous utilisons un ",(0,a.kt)("em",{parentName:"p"},"Hook")," appel\xe9 ",(0,a.kt)("inlineCode",{parentName:"p"},"useRecoilState"),". C'est exactement comme ",(0,a.kt)("inlineCode",{parentName:"p"},"useState")," de React, mais maintenant l'\xe9tat peut \xeatre partag\xe9 entre les composants:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function FontButton() {\n  const [fontSize, setFontSize] = useRecoilState(fontSizeState);\n  return (\n    <button onClick={() => setFontSize((size) => size + 1)} style={{fontSize}}>\n      Cliquer pour agrandir\n    </button>\n  );\n}\n")),(0,a.kt)("p",null,"Cliquer sur le bouton augmentera la taille de la police du bouton d'une unit\xe9. Mais maintenant, un autre composant peut \xe9galement utiliser la m\xeame taille de police:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function Text() {\n  const [fontSize, setFontSize] = useRecoilState(fontSizeState);\n  return <p style={{fontSize}}>Ce text va aussi s'agrandir.</p>;\n}\n")),(0,a.kt)("h2",{id:"s\xe9lecteurs"},"S\xe9lecteurs"),(0,a.kt)("p",null,"Un ",(0,a.kt)("strong",{parentName:"p"},"s\xe9lecteur")," est une fonction pure qui accepte des atomes ou d'autres s\xe9lecteurs en entr\xe9e. Lorsque ces atomes ou s\xe9lecteurs en amont sont mis \xe0 jour, le s\xe9lecteur sera r\xe9\xe9valu\xe9e. Les composants peuvent s'abonner \xe0 des s\xe9lecteurs tout comme les atomes, et seront ensuite re-rendu lorsque les s\xe9lecteurs changent."),(0,a.kt)("p",null,"Les s\xe9lecteurs sont utilis\xe9s pour calculer des donn\xe9es d\xe9riv\xe9es bas\xe9es sur l'\xe9tat. Cela nous permet d'\xe9viter un \xe9tat redondant, ce qui annule g\xe9n\xe9ralement la n\xe9cessit\xe9 d'utiliser des r\xe9ducteurs pour maintenir l'\xe9tat synchronis\xe9 et valide. Au lieu de cela, un ensemble minimal d'\xe9tats est stock\xe9 dans des atomes, tandis que tout le reste est calcul\xe9 efficacement en fonction de ces \xe9tats minimaux. \xc9tant donn\xe9 que les s\xe9lecteurs gardent une trace des composants qui en ont besoin et de leur \xe9tat, ils rendent cette approche fonctionnelle plus efficace."),(0,a.kt)("p",null,"Du point de vue des composants, les s\xe9lecteurs et les atomes ont la m\xeame interface et peuvent donc se substituer les uns aux autres."),(0,a.kt)("p",null,"Les s\xe9lecteurs sont d\xe9finis \xe0 l'aide de la fonction ",(0,a.kt)("inlineCode",{parentName:"p"},"selector"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const fontSizeLabelState = selector({\n  key: 'fontSizeLabelState',\n  get: ({get}) => {\n    const fontSize = get(fontSizeState);\n    const unit = 'px';\n\n    return `${fontSize}${unit}`;\n  },\n});\n")),(0,a.kt)("p",null,"La propri\xe9t\xe9 ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," est la fonction \xe0 calculer. Elle peut acc\xe9der \xe0 la valeur des atomes et d'autres s\xe9lecteurs \xe0 l'aide de l'argument ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," qui lui est transmis. Chaque fois qu'elle acc\xe8de \xe0 un autre atome ou s\xe9lecteur, une relation de d\xe9pendance est cr\xe9\xe9e de telle sorte que la mise \xe0 jour de l'autre atome ou s\xe9lecteur entra\xeene le recalcul de celle-ci."),(0,a.kt)("p",null,"Dans cet exemple ",(0,a.kt)("inlineCode",{parentName:"p"},"fontSizeLabelState"),", le s\xe9lecteur a une d\xe9pendance: l'atome ",(0,a.kt)("inlineCode",{parentName:"p"},"fontSizeState"),". Conceptuellement, le s\xe9lecteur ",(0,a.kt)("inlineCode",{parentName:"p"},"fontSizeLabelState")," se comporte comme une fonction pure qui prend ",(0,a.kt)("inlineCode",{parentName:"p"},"fontSizeState")," en entr\xe9e et renvoie la de taille de police format\xe9e en sortie."),(0,a.kt)("p",null,"Les s\xe9lecteurs peuvent \xeatre lus \xe0 l'aide de ",(0,a.kt)("inlineCode",{parentName:"p"},"useRecoilValue()"),", qui prend un atome ou un s\xe9lecteur comme argument et renvoie la valeur correspondante. Nous n'utilisons pas ",(0,a.kt)("inlineCode",{parentName:"p"},"useRecoilState()")," car le s\xe9lecteur ",(0,a.kt)("inlineCode",{parentName:"p"},"fontSizeLabelState")," n'est pas accessible en \xe9criture (voir la ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/selector"},"r\xe9f\xe9rence de l'API selector")," pour plus d'informations sur les s\xe9lecteurs accessibles en \xe9criture):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function FontButton() {\n  const [fontSize, setFontSize] = useRecoilState(fontSizeState);\n  const fontSizeLabel = useRecoilValue(fontSizeLabelState);\n\n  return (\n    <>\n      <div>Taille actuelle: ${fontSizeLabel}</div>\n\n      <button onClick={() => setFontSize(fontSize + 1)} style={{fontSize}}>\n        Cliquer pour agrandir\n      </button>\n    </>\n  );\n}\n")),(0,a.kt)("p",null,"Cliquer sur le bouton fait maintenant deux choses: cela augmente la taille de police du bouton tout en mettant \xe0 jour la taille de police pour refl\xe9ter la taille de police actuelle."))}d.isMDXComponent=!0}}]);