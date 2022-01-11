"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[430],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(a),d=o,f=u["".concat(s,".").concat(d)]||u[d]||p[d]||r;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7175:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return c},default:function(){return u}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=["components"],l={title:"atomFamily(options)",sidebar_label:"atomFamily()"},s=void 0,m={unversionedId:"api-reference/utils/atomFamily",id:"api-reference/utils/atomFamily",title:"atomFamily(options)",description:"Returns a function that returns a writeable RecoilState atom.",source:"@site/docs/api-reference/utils/atomFamily.md",sourceDirName:"api-reference/utils",slug:"/api-reference/utils/atomFamily",permalink:"/docs/api-reference/utils/atomFamily",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/api-reference/utils/atomFamily.md",tags:[],version:"current",frontMatter:{title:"atomFamily(options)",sidebar_label:"atomFamily()"},sidebar:"docs",previous:{title:"isRecoilValue()",permalink:"/docs/api-reference/core/isRecoilValue"},next:{title:"selectorFamily()",permalink:"/docs/api-reference/utils/selectorFamily"}},c=[{value:"Example",id:"example",children:[],level:2},{value:"Family Defaults",id:"family-defaults",children:[],level:2},{value:"Subscriptions",id:"subscriptions",children:[],level:2},{value:"Scoped Atoms",id:"scoped-atoms",children:[],level:2},{value:"Persistence",id:"persistence",children:[],level:2}],p={toc:c};function u(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Returns a function that returns a writeable ",(0,r.kt)("inlineCode",{parentName:"p"},"RecoilState")," ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/atom"},"atom"),"."),(0,r.kt)("hr",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"function atomFamily<T, Parameter>({\n  key: string,\n\n  default:\n    | RecoilValue<T>\n    | Promise<T>\n    | T\n    | (Parameter => T | RecoilValue<T> | Promise<T>),\n\n  effects_UNSTABLE?:\n    | $ReadOnlyArray<AtomEffect<T>>\n    | (P => $ReadOnlyArray<AtomEffect<T>>),\n\n  dangerouslyAllowMutability?: boolean,\n}): Parameter => RecoilState<T>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key")," - A unique string used to identify the atom internally. This string should be unique with respect to other atoms and selectors in the entire application."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"default")," - The initial value of the atom. It may either be a value directly, a ",(0,r.kt)("inlineCode",{parentName:"li"},"RecoilValue")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Promise")," that represents the default value, or a function to get the default value. The callback function is passed a copy of the parameter used when the ",(0,r.kt)("inlineCode",{parentName:"li"},"atomFamily")," function is called."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"effects_UNSTABLE")," - An optional array, or callback to get the array based on the family parameter, of ",(0,r.kt)("a",{parentName:"li",href:"/docs/guides/atom-effects"},"Atom Effects"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dangerouslyAllowMutability")," - Recoil depends on atom state changes to know when to notify components that use the atoms to re-render.  If an atom's value were mutated, it may bypass this and cause state to change without properly notifying subscribing components.  To help protect against this all stored values are frozen.  In some cases it may be desireable to override this using this option.")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"atom")," represents a piece of state with ",(0,r.kt)("em",{parentName:"p"},"Recoil"),". An atom is created and registered per ",(0,r.kt)("inlineCode",{parentName:"p"},"<RecoilRoot>")," by your app. But, what if your state isn\u2019t global? What if your state is associated with a particular instance of a control, or with a particular element? For example, maybe your app is a UI prototyping tool where the user can dynamically add elements and each element has state, such as its position. Ideally, each element would get its own atom of state. You could implement this yourself via a memoization pattern. But, ",(0,r.kt)("em",{parentName:"p"},"Recoil")," provides this pattern for you with the ",(0,r.kt)("inlineCode",{parentName:"p"},"atomFamily")," utility. An Atom Family represents a collection of atoms. When you call ",(0,r.kt)("inlineCode",{parentName:"p"},"atomFamily")," it will return a function which provides the ",(0,r.kt)("inlineCode",{parentName:"p"},"RecoilState")," atom based on the parameters you pass in."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"atomFamily")," essentially provides a map from the parameter to an atom.  You only need to provide a single key for the ",(0,r.kt)("inlineCode",{parentName:"p"},"atomFamily")," and it will generate a unique key for each underlying atom.  These atom keys can be used for persistence, and so must be stable across application executions.  The parameters may also be generated at different callsites and we want equivalent parameters to use the same underlying atom.  Therefore, value-equality is used instead of reference-equality for ",(0,r.kt)("inlineCode",{parentName:"p"},"atomFamily")," parameters.  This imposes restrictions on the types which can be used for the parameter.  ",(0,r.kt)("inlineCode",{parentName:"p"},"atomFamily")," accepts primitive types, or arrays or objects which can contain arrays, objects, or primitive types."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const elementPositionStateFamily = atomFamily({\n  key: 'ElementPosition',\n  default: [0, 0],\n});\n\nfunction ElementListItem({elementID}) {\n  const position = useRecoilValue(elementPositionStateFamily(elementID));\n  return (\n    <div>\n      Element: {elementID}\n      Position: {position}\n    </div>\n  );\n}\n")),(0,r.kt)("h2",{id:"family-defaults"},"Family Defaults"),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"atomFamily()")," takes almost the same options as a simple ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/atom"},(0,r.kt)("inlineCode",{parentName:"a"},"atom()")),".  However, the default value can also be parameterized. That means you could provide a function which takes the parameter value and returns the actual default value.  For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const myAtomFamily = atomFamily({\n  key: \u2018MyAtom\u2019,\n  default: param => defaultBasedOnParam(param),\n});\n")),(0,r.kt)("p",null,"For dynamic defaults based on other state use a ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/utils/selectorFamily"},(0,r.kt)("inlineCode",{parentName:"a"},"selectorFamily()")),", which also has access to the parameter value.  Don't just use ",(0,r.kt)("inlineCode",{parentName:"p"},"selector()")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"atomFamily()")," defaults, as it would produce duplicate keys."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const myAtomFamily = atomFamily({\n  key: \u2018MyAtom\u2019,\n  default: selectorFamily({\n    key: 'MyAtom/Default',\n    get: param => ({get}) => {\n      const otherAtomValue = get(otherState);\n      return computeDefaultUsingParam(otherAtomValue, param);\n    },\n  }),\n});\n")),(0,r.kt)("h2",{id:"subscriptions"},"Subscriptions"),(0,r.kt)("p",null,"One advantage of using this pattern for separate atoms for each element over trying to store a single atom with a map of state for all elements is that they all maintain their own individual subscriptions. So, updating the value for one element will only cause React components that have subscribed to just that atom to update."),(0,r.kt)("h2",{id:"scoped-atoms"},"Scoped Atoms"),(0,r.kt)("p",null,'Sometimes you may want to "scope" atom state by some other prop, React Context, or piece of state.  For example:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const viewWidthForPaneState = atomFamily<number, PaneID>({\n  key: 'ViewWidthForPane',\n  default: 42,\n});\n\nfunction PaneView() {\n  const paneID = useContext(PaneIDContext);\n  const viewWidth = useRecoilValue(viewWidthForPaneState(paneID));\n  ...\n}\n")),(0,r.kt)("p",null,"If you want to scope by some other Recoil state and wish to avoid looking up the scope parameter at every call site, it can be a useful pattern to use a wrapper ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/selector"},(0,r.kt)("inlineCode",{parentName:"a"},"selector()")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const viewWidthState = selector({\n  key: 'ViewWidth',\n  get: ({get}) => viewWidthForPane(get(currentPaneState)),\n  set: ({get, set}, newValue) => set(viewWidthForPane(get(currentPaneState)), newValue),\n});\n\nfunction PaneView() {\n  const viewWidth = useRecoilValue(viewWidthState);\n  ...\n}\n")),(0,r.kt)("h2",{id:"persistence"},"Persistence"),(0,r.kt)("p",null,"Persistence observers will persist the state for each parameter value as a distinct atom with a unique key based on serialization of the parameter value used. Therefore, it is important to only use parameters which are primitives or simple compound objects containing primitives. Custom classes or functions are not allowed."))}u.isMDXComponent=!0}}]);