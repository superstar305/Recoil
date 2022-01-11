"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[1429],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},l=Object.keys(t);for(o=0;o<l.length;o++)n=l[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(o=0;o<l.length;o++)n=l[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=o.createContext({}),c=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=c(t.components);return o.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?o.createElement(k,a(a({ref:e},p),{},{components:n})):o.createElement(k,a({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8416:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var o=n(7462),r=n(3366),l=(n(7294),n(3905)),a=["components"],i={title:"Selectors"},s=void 0,c={unversionedId:"basic-tutorial/selectors",id:"basic-tutorial/selectors",title:"Selectors",description:"Selector\ub294 \ud30c\uc0dd\ub41c \uc0c1\ud0dc(derived state)\uc758 \uc77c\ubd80\ub97c \ub098\ud0c0\ub0b8\ub2e4. \ud30c\uc0dd\ub41c \uc0c1\ud0dc\ub97c \uc5b4\ub5a4 \ubc29\ubc95\uc73c\ub85c\ub4e0 \uc8fc\uc5b4\uc9c4 \uc0c1\ud0dc\ub97c \uc218\uc815\ud558\ub294 \uc21c\uc218 \ud568\uc218\uc5d0 \uc804\ub2ec\ub41c \uc0c1\ud0dc\uc758 \uacb0\uacfc\ubb3c\ub85c \uc0dd\uac01\ud560 \uc218 \uc788\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/basic-tutorial/selectors.md",sourceDirName:"basic-tutorial",slug:"/basic-tutorial/selectors",permalink:"/ko/docs/basic-tutorial/selectors",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/ko/docusaurus-plugin-content-docs/current/basic-tutorial/selectors.md",tags:[],version:"current",frontMatter:{title:"Selectors"},sidebar:"docs",previous:{title:"Atoms",permalink:"/ko/docs/basic-tutorial/atoms"},next:{title:"\ube44\ub3d9\uae30 \ub370\uc774\ud130 \ucffc\ub9ac",permalink:"/ko/docs/guides/asynchronous-data-queries"}},p=[],u={toc:p};function d(t){var e=t.components,n=(0,r.Z)(t,a);return(0,l.kt)("wrapper",(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Selector"),"\ub294 \ud30c\uc0dd\ub41c \uc0c1\ud0dc(",(0,l.kt)("strong",{parentName:"p"},"derived state"),")\uc758 \uc77c\ubd80\ub97c \ub098\ud0c0\ub0b8\ub2e4. \ud30c\uc0dd\ub41c \uc0c1\ud0dc\ub97c \uc5b4\ub5a4 \ubc29\ubc95\uc73c\ub85c\ub4e0 \uc8fc\uc5b4\uc9c4 \uc0c1\ud0dc\ub97c \uc218\uc815\ud558\ub294 \uc21c\uc218 \ud568\uc218\uc5d0 \uc804\ub2ec\ub41c \uc0c1\ud0dc\uc758 \uacb0\uacfc\ubb3c\ub85c \uc0dd\uac01\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("p",null,"\ud30c\uc0dd\ub41c \uc0c1\ud0dc\ub294 \ub2e4\ub978 \ub370\uc774\ud130\uc5d0 \uc758\uc874\ud558\ub294 \ub3d9\uc801\uc778 \ub370\uc774\ud130\ub97c \ub9cc\ub4e4 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 \uac15\ub825\ud55c \uac1c\ub150\uc774\ub2e4. \uc6b0\ub9ac\uc758 todo \ub9ac\uc2a4\ud2b8 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ub9e5\ub77d\uc5d0\uc11c\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uac83\ub4e4\uc774 \ud30c\uc0dd\ub41c \uc0c1\ud0dc\ub85c \uac04\uc8fc\ub41c\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\ud544\ud130\ub9c1 \ub41c todo \ub9ac\uc2a4\ud2b8")," : \uc804\uccb4 todo \ub9ac\uc2a4\ud2b8\uc5d0\uc11c \uc77c\ubd80 \uae30\uc900\uc5d0 \ub530\ub77c \ud2b9\uc815 \ud56d\ubaa9\uc774 \ud544\ud130\ub9c1 \ub41c \uc0c8 \ub9ac\uc2a4\ud2b8(\uc608: \uc774\ubbf8 \uc644\ub8cc\ub41c \ud56d\ubaa9 \ud544\ud130\ub9c1)\ub97c \uc0dd\uc131\ub418\uc5b4 \ud30c\uc0dd\ub41c\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Todo \ub9ac\uc2a4\ud2b8 \ud1b5\uacc4")," : \uc804\uccb4 todo \ub9ac\uc2a4\ud2b8\uc5d0\uc11c \ubaa9\ub85d\uc758 \ucd1d \ud56d\ubaa9 \uc218, \uc644\ub8cc\ub41c \ud56d\ubaa9 \uc218, \uc644\ub8cc\ub41c \ud56d\ubaa9\uc758 \ubc31\ubd84\uc728 \uac19\uc740 \ub9ac\uc2a4\ud2b8\uc758 \uc720\uc6a9\ud55c \uc18d\uc131\ub4e4\uc744 \uacc4\uc0b0\ud558\uc5ec \ud30c\uc0dd\ub41c\ub2e4.")),(0,l.kt)("p",null,'\ud544\ud130\ub9c1 \ub41c todo \ub9ac\uc2a4\ud2b8\ub97c \uad6c\ud604\ud558\uae30 \uc704\ud574\uc11c \uc6b0\ub9ac\ub294 atom\uc5d0 \uc800\uc7a5\ub420 \uc218 \uc788\ub294 \ud544\ud130 \uae30\uc900\uc744 \uc120\ud0dd\ud574\uc57c \ud55c\ub2e4. \uc6b0\ub9ac\uac00 \uc0ac\uc6a9\ud558\uac8c \ub420 \ud544\ud130 \uc635\uc158\uc740 "Show All", "Show Completed"\uacfc "Show Uncompleted"\uac00 \uc788\ub2e4. \uae30\ubcf8\uac12\uc740 "Show All"\uc774 \ub420 \uac83\uc774\ub2e4.'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const todoListFilterState = atom({\n  key: 'todoListFilterState',\n  default: 'Show All',\n});\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"todoListFilterState"),"\uc640 ",(0,l.kt)("inlineCode",{parentName:"p"},"todoListState"),"\ub97c \uc0ac\uc6a9\ud574\uc11c \uc6b0\ub9ac\ub294 \ud544\ud130\ub9c1 \ub41c \ub9ac\uc2a4\ud2b8\ub97c \ud30c\uc0dd\ud558\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"filteredTodoListState")," selector\ub97c \uad6c\uc131\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const filteredTodoListState = selector({\n  key: 'filteredTodoListState',\n  get: ({get}) => {\n    const filter = get(todoListFilterState);\n    const list = get(todoListState);\n\n    switch (filter) {\n      case 'Show Completed':\n        return list.filter((item) => item.isComplete);\n      case 'Show Uncompleted':\n        return list.filter((item) => !item.isComplete);\n      default:\n        return list;\n    }\n  },\n});\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"filteredTodoListState"),"\ub294 \ub0b4\ubd80\uc801\uc73c\ub85c 2\uac1c\uc758 \uc758\uc874\uc131 ",(0,l.kt)("inlineCode",{parentName:"p"},"todoListFilterState"),"\uc640 ",(0,l.kt)("inlineCode",{parentName:"p"},"todoListState"),"\uc744 \ucd94\uc801\ud55c\ub2e4. \uadf8\ub798\uc11c \ub458 \uc911 \ud558\ub098\ub77c\ub3c4 \ubcc0\ud558\uba74 ",(0,l.kt)("inlineCode",{parentName:"p"},"filteredTodoListState"),"\ub294 \uc7ac \uc2e4\ud589\ub41c\ub2e4."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ucef4\ud3ec\ub10c\ud2b8 \uad00\uc810\uc5d0\uc11c \ubcf4\uba74 selector\ub294 atom\uc744 \uc77d\uc744 \ub54c \uc0ac\uc6a9\ud558\ub294 \uac19\uc740 \ud6c5\uc744 \uc0ac\uc6a9\ud574\uc11c \uc77d\uc744 \uc218 \uc788\ub2e4. \uadf8\ub7ec\ub098 \ud2b9\uc815\ud55c \ud6c5\uc740 ",(0,l.kt)("strong",{parentName:"p"},"\uc4f0\uae30 \uac00\ub2a5 \uc0c1\ud0dc")," (\uc989, ",(0,l.kt)("inlineCode",{parentName:"p"},"useRecoilState()"),")\uc5d0\uc11c\ub9cc \uc791\ub3d9\ud558\ub294 \uc810\uc744 \uc720\uc758\ud574\uc57c \ud55c\ub2e4. \ubaa8\ub4e0 atom\uc740 \uc4f0\uae30 \uac00\ub2a5 \uc0c1\ud0dc\uc9c0\ub9cc selector\ub294 \uc77c\ubd80\ub9cc \uc4f0\uae30 \uac00\ub2a5\ud55c \uc0c1\ud0dc(",(0,l.kt)("inlineCode",{parentName:"p"},"get"),"\uacfc ",(0,l.kt)("inlineCode",{parentName:"p"},"set")," \uc18d\uc131\uc744 \ub458 \ub2e4 \uac00\uc9c0\uace0 \uc788\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"selector"),")\ub85c \uac04\uc8fc\ub41c\ub2e4. \uc774 \uc8fc\uc81c\uc5d0 \ub300\ud574\uc11c \ub354 \ub9ce\uc740 \uc815\ubcf4\ub97c \ubcf4\uace0 \uc2f6\ub2e4\uba74 ",(0,l.kt)("a",{parentName:"p",href:"/docs/introduction/core-concepts"},"Core Concepts")," \ud398\uc774\uc9c0\ub97c \ubcf4\uba74 \ub41c\ub2e4.")),(0,l.kt)("p",null,"\ud544\ud130\ub9c1 \ub41c todo \ub9ac\uc2a4\ud2b8\ub97c \ud45c\uc2dc\ud558\ub294 \uac83\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"TodoList")," \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \ud55c \uc904\ub9cc \ubcc0\uacbd\ud558\uba74 \ub420 \ub9cc\ud07c \uac04\ub2e8\ud558\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"function TodoList() {\n  // changed from todoListState to filteredTodoListState\n  const todoList = useRecoilValue(filteredTodoListState);\n\n  return (\n    <>\n      <TodoListStats />\n      <TodoListFilters />\n      <TodoItemCreator />\n\n      {todoList.map((todoItem) => (\n        <TodoItem item={todoItem} key={todoItem.id} />\n      ))}\n    </>\n  );\n}\n")),(0,l.kt)("p",null,"UI\ub294 'toListFilterState'\uc758 \uae30\ubcf8\uac12\uc778 'Show All'\uacfc \ub3d9\uc77c\ud558\ub2e4. \ud544\ud130\ub97c \ubcc0\uacbd\ud558\ub824\uba74 \uc6b0\ub9ac\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"TodoListFilter")," \ucef4\ud3ec\ub10c\ud2b8\ub97c \uad6c\ud604\ud574\uc57c \ud55c\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'function TodoListFilters() {\n  const [filter, setFilter] = useRecoilState(todoListFilterState);\n\n  const updateFilter = ({target: {value}}) => {\n    setFilter(value);\n  };\n\n  return (\n    <>\n      Filter:\n      <select value={filter} onChange={updateFilter}>\n        <option value="Show All">All</option>\n        <option value="Show Completed">Completed</option>\n        <option value="Show Uncompleted">Uncompleted</option>\n      </select>\n    </>\n  );\n}\n')),(0,l.kt)("p",null,"\uba87 \uc904\uc758 \ucf54\ub4dc\ub85c \uc6b0\ub9ac\ub294 \ud544\ud130\ub9c1 \uae30\ub2a5\uc744 \uad6c\ud604\ud560 \uc218 \uc788\ub2e4! \uc6b0\ub9ac\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"TodoListStats")," \ucef4\ud3ec\ub10c\ud2b8\ub97c \uad6c\ud604\ud558\uae30 \uc704\ud574 \ub3d9\uc77c\ud55c \uac1c\ub150\uc744 \uc0ac\uc6a9\ud560 \uac83\uc774\ub2e4."),(0,l.kt)("p",null,"\uc6b0\ub9ac\ub294 \ub2e4\uc74c \ud1b5\uacc4\ub97c \ud45c\uc2dc\ud558\ub824 \ud55c\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"todo \ud56d\ubaa9\ub4e4\uc758 \ucd1d\uac1c\uc218"),(0,l.kt)("li",{parentName:"ul"},"\uc644\ub8cc\ub41c todo \ud56d\ubaa9\ub4e4\uc758 \ucd1d\uac1c\uc218"),(0,l.kt)("li",{parentName:"ul"},"\uc644\ub8cc\ub418\uc9c0 \uc54a\uc740 todo \ud56d\ubaa9\ub4e4\uc758 \ucd1d\uac1c\uc218"),(0,l.kt)("li",{parentName:"ul"},"\uc644\ub8cc\ub41c \ud56d\ubaa9\uc758 \ubc31\ubd84\uc728")),(0,l.kt)("p",null,"\uac01 \ud1b5\uacc4\uc5d0 \ub300\ud574 selector\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc9c0\ub9cc, \ud544\uc694\ud55c \ub370\uc774\ud130\ub97c \ud3ec\ud568\ud558\ub294 \uac1d\uccb4\ub97c \ubc18\ud658\ud558\ub294 selector \ud558\ub098\ub97c \ub9cc\ub4dc\ub294 \uac83\uc774 \ub354 \uc26c\uc6b4 \ubc29\ubc95\uc77c \uac83\uc774\ub2e4. \uc6b0\ub9ac\ub294 \uc774 selector\ub97c 'toDoListStatsState'\ub77c\uace0 \ubd80\ub97c \uac83\uc774\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const todoListStatsState = selector({\n  key: 'todoListStatsState',\n  get: ({get}) => {\n    const todoList = get(todoListState);\n    const totalNum = todoList.length;\n    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;\n    const totalUncompletedNum = totalNum - totalCompletedNum;\n    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;\n\n    return {\n      totalNum,\n      totalCompletedNum,\n      totalUncompletedNum,\n      percentCompleted,\n    };\n  },\n});\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"todoListStatsState"),"\uac12\uc744 \uc77d\uae30 \uc704\ud574, \uc6b0\ub9ac\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"useRecoilValue()"),"\ub97c \ud55c \ubc88 \ub354 \uc0ac\uc6a9\ud560 \uac83\uc774\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"function TodoListStats() {\n  const {\n    totalNum,\n    totalCompletedNum,\n    totalUncompletedNum,\n    percentCompleted,\n  } = useRecoilValue(todoListStatsState);\n\n  const formattedPercentCompleted = Math.round(percentCompleted * 100);\n\n  return (\n    <ul>\n      <li>Total items: {totalNum}</li>\n      <li>Items completed: {totalCompletedNum}</li>\n      <li>Items not completed: {totalUncompletedNum}</li>\n      <li>Percent completed: {formattedPercentCompleted}</li>\n    </ul>\n  );\n}\n")),(0,l.kt)("p",null,"\uc694\uc57d\ud558\uc790\uba74, \uc6b0\ub9ac\ub294 \ubaa8\ub4e0 \uc694\uad6c \uc0ac\ud56d\uc744 \ucda9\uc871\ud558\ub294 todo \ub9ac\uc2a4\ud2b8 \uc571\uc744 \ub9cc\ub4e4\uc5c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"todo \uc544\uc774\ud15c \ucd94\uac00"),(0,l.kt)("li",{parentName:"ul"},"todo \uc544\uc774\ud15c \uc218\uc815"),(0,l.kt)("li",{parentName:"ul"},"todo \uc544\uc774\ud15c \uc0ad\uc81c"),(0,l.kt)("li",{parentName:"ul"},"todo \uc544\uc774\ud15c \ud544\ud130\ub9c1"),(0,l.kt)("li",{parentName:"ul"},"\uc720\uc6a9\ud55c \ud1b5\uacc4 \ud45c\uc2dc")))}d.isMDXComponent=!0}}]);