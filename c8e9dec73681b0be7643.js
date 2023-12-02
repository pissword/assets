(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{1520:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.makeId=function(e,t){return e+"-"+t},t.makeGridId=function(e,t,n){return e+"-"+t+"-"+n},t.setRef=function(e,t){"function"==typeof e?e(t):e.current=t},t.throttle=function(e,t){var n=!1;return function(){n||(e.apply(void 0,arguments),n=!0,setTimeout((function(){return n=!1}),t))}},t.HandlerMemoizer=void 0;var r=function(){function e(e){this.makeHandler=e,this.handlers=new Map,this.makeHandler=e}var t=e.prototype;return t.get=function(e){return this.handlers.has(e)||this.handlers.set(e,this.makeHandler(e)),this.handlers.get(e)},t.clean=function(){delete this.handlers,this.handlers=new Map},e}();t.HandlerMemoizer=r},463:function(e,t,n){"use strict";var r,u;Object.defineProperty(t,"__esModule",{value:!0}),t.Keys=t.ActionType=void 0,t.ActionType=r,function(e){e.NAVIGATE_UP="NAVIGATE_UP",e.NAVIGATE_DOWN="NAVIGATE_DOWN",e.NAVIGATE_LEFT="NAVIGATE_LEFT",e.NAVIGATE_RIGHT="NAVIGATE_RIGHT",e.NAVIGATE_START="NAVIGATE_START",e.NAVIGATE_END="NAVIGATE_END",e.NAVIGATE_INLINE_START="NAVIGATE_INLINE_START",e.NAVIGATE_INLINE_END="NAVIGATE_INLINE_END",e.NAVIGATE_CROSSLINE_START="NAVIGATE_CROSSLINE_START",e.NAVIGATE_CROSSLINE_END="NAVIGATE_CROSSLINE_END",e.NAVIGATE_NEXT_INTERACTABLE="NAVIGATE_NEXT_INTERACTABLE",e.NAVIGATE_PREV_INTERACTABLE="NAVIGATE_PREV_INTERACTABLE",e.NAVIGATE_IN="NAVIGATE_IN",e.NAVIGATE_OUT="NAVIGATE_OUT",e.SELECT_FOCUSED_ITEM="SELECT_FOCUSED_ITEM",e.QUERY_START="QUERY_START",e.QUERY_CLEAR="QUERY_CLEAR"}(r||(t.ActionType=r={})),t.Keys=u,function(e){e.ENTER="Enter",e.SPACE=" ",e.ESCAPE="Escape",e.TAB="Tab",e.F10="F10",e.HOME="Home",e.END="End",e.UP="ArrowUp",e.DOWN="ArrowDown",e.LEFT="ArrowLeft",e.RIGHT="ArrowRight"}(u||(t.Keys=u={}))},472:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={ActionType:!0,useGridNavigator:!0,useListNavigator:!0,useMenuNavigator:!0,useTreeNavigator:!0};Object.defineProperty(t,"ActionType",{enumerable:!0,get:function(){return u.ActionType}}),Object.defineProperty(t,"useGridNavigator",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"useListNavigator",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"useMenuNavigator",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"useTreeNavigator",{enumerable:!0,get:function(){return a.default}});var u=n(463),o=f(n(6491));Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(r,e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}}))}));var i=f(n(6493));Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(r,e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}}))}));var c=f(n(6495));Object.keys(c).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(r,e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return c[e]}}))}));var a=f(n(6497));function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var o=r?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(n,u,o):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(r,e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}}))}))},5625:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){switch(t.type){case u.ActionType.NAVIGATE_UP:return function(e,t){return o({},e,{focusedIndex:Math.max(0,e.focusedIndex-1)})}(e);case u.ActionType.NAVIGATE_DOWN:return function(e,t){return o({},e,{focusedIndex:Math.min(e.focusedIndex+1,e.itemCount-1)})}(e);case u.ActionType.NAVIGATE_START:return function(e,t){return o({},e,{focusedIndex:0})}(e);case u.ActionType.NAVIGATE_END:return function(e,t){return o({},e,{focusedIndex:e.itemCount-1})}(e);case r.UPDATE_ITEM_COUNT:return function(e,t){var n=t.itemCount;return o({},e,{itemCount:n,focusedIndex:Math.min(n-1,e.focusedIndex)})}(e,t);case r.SET_FOCUSED_INDEX:return function(e,t){var n=t.index;return o({},e,{focusedIndex:Math.max(0,Math.min(n,e.itemCount-1))})}(e,t);case u.ActionType.SELECT_FOCUSED_ITEM:return e;default:console.warn("Listbox navigator was given an unhandled action "+t.type)}return e},t.ListActionType=void 0;var r,u=n(463);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}t.ListActionType=r,function(e){e.UPDATE_ITEM_COUNT="UPDATE_ITEM_COUNT",e.SET_FOCUSED_INDEX="SET_FOCUSED_INDEX"}(r||(t.ListActionType=r={}))},5627:function(e,t,n){"use strict";e.exports.parse=function(e){var t,n=/^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(e);if(!n)return null;n.shift();var r=null,u=[];n[2]&&(r=(t=n[2].split("-")).shift(),u=t);var o=[];n[5]&&(o=n[5].split("-")).shift();var i=[];if(n[6]){var c;(t=n[6].split("-")).shift();for(var a=[];t.length;){var s=t.shift();1===s.length?c?(i.push({singleton:c,extension:a}),c=s,a=[]):c=s:a.push(s)}i.push({singleton:c,extension:a})}var f=[];n[7]&&((f=n[7].split("-")).shift(),f.shift());var l=[];return n[8]&&(l=n[8].split("-")).shift(),{langtag:{language:{language:r,extlang:u},script:n[3]||null,region:n[4]||null,variant:o,extension:i,privateuse:f},privateuse:l,grandfathered:{irregular:n[0]||null,regular:n[1]||null}}}},6491:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.navId,n=e.columnCounts,c=e.focusedX,a=void 0===c?0:c,d=e.focusedY,T=void 0===d?0:d,p=e.onSelect,A=e.prepareFocus,E=e.getNewFocusPosition,y=e.maintainFocusPosition,v=void 0===y||y,I=e.enabled,_=void 0===I||I,N=e.onDispatch,h=e.autoFocusElement,O=void 0===h||h,m=r.useCallback((function(e,t){var n=(0,u.default)(e,t);return null!=N&&N(e,n,t),n}),[N]),g=r.useReducer(m,{focusedX:a,focusedY:T,columnCounts:n}),S=g[0],b=g[1],P=S.columnCounts,C=S.focusedX,D=S.focusedY,M=r.useState((function(){return(0,i.throttle)(b,16)}))[0];return r.useEffect((function(){b({type:u.GridActionType.UPDATE_COLUMN_COUNTS,columnCounts:n})}),[n]),function(e){var t=e.navId,n=e.columnCounts,c=e.focusedX,a=e.focusedY,d=e.onSelect,T=e.prepareFocus,p=e.getNewFocusPosition,A=e.dispatch,E=e.maintainFocusPosition,y=e.enabled,v=e.autoFocusElement,I=r.useRef();I.current=y;var _=l(f(t,c,a)),N=r.useState(!1),h=N[0],O=N[1],m=r.useState(!1),g=m[0],S=m[1],b=r.useState(!1),P=b[0],C=b[1],D=r.useState((function(){return new i.HandlerMemoizer((function(e){var t=e.split(",").map(Number),n=t[0],r=t[1];return function(){O(!0),A({type:u.GridActionType.SET_FOCUSED_POSITION,x:n,y:r})}}))}))[0];r.useEffect((function(){return function(){return D.clean()}}),[D]);var M=r.useCallback((function(e){if(!I.current||!v)return!1;e.focus()}),[v]),G=r.useCallback((function(e,n){var r=f(t,e,n);(null!=T?T(e,n,r):Promise.resolve()).then((function(){var e=l(r);null!=e?(M(e),S(!1)):requestAnimationFrame((function(){return S(!0)}))}))}),[t,T,M]),x=r.useCallback((function(e){void 0===e&&(e=!0);var n=null!=p?p(c,a):[c,a],r=n[0],o=n[1];if(r===c&&o===a||(A({type:u.GridActionType.SET_FOCUSED_POSITION,x:r,y:o}),e)){var i=l(f(t,r,o));null!=i&&(C(!0),M(i))}else C(!0)}),[A,c,a,p,t,M]),V=r.useState(!1),U=V[0],F=V[1];r.useEffect((function(){if(U&&h){F(!1);var e=l(f(t,c,a));if(null==e){O(!1);var n=l(f(t));null!=n&&M(n)}else M(e)}}),[t,U,h,M,c,a]);var k=r.useCallback((function(e){I.current&&null==e&&F(!0)}),[]);r.useEffect((function(){h&&g&&null!=_&&(M(_),S(!1))}),[g,_]),r.useEffect((function(){h&&(P||G(c,a),C(!1))}),[c,a]);var w=r.useCallback((function(e){if(I.current){if(s.includes(e.key)&&!(e.shiftKey||e.altKey||e.metaKey||e.ctrlKey)&&e.currentTarget===e.target)return e.preventDefault(),e.stopPropagation(),void x();var t,n=function(e){switch(e.key){case o.Keys.ENTER:case o.Keys.SPACE:return o.ActionType.SELECT_FOCUSED_ITEM;case o.Keys.UP:return o.ActionType.NAVIGATE_UP;case o.Keys.DOWN:return o.ActionType.NAVIGATE_DOWN;case o.Keys.RIGHT:return o.ActionType.NAVIGATE_RIGHT;case o.Keys.LEFT:return o.ActionType.NAVIGATE_LEFT;case o.Keys.HOME:return e.ctrlKey?o.ActionType.NAVIGATE_START:o.ActionType.NAVIGATE_INLINE_START;case o.Keys.END:return e.ctrlKey?o.ActionType.NAVIGATE_END:o.ActionType.NAVIGATE_INLINE_END}return}(e);switch(n){case o.ActionType.NAVIGATE_UP:case o.ActionType.NAVIGATE_DOWN:case o.ActionType.NAVIGATE_RIGHT:case o.ActionType.NAVIGATE_LEFT:case o.ActionType.NAVIGATE_INLINE_START:case o.ActionType.NAVIGATE_INLINE_END:case o.ActionType.NAVIGATE_START:case o.ActionType.NAVIGATE_END:return e.preventDefault(),e.stopPropagation(),void A({type:n});case o.ActionType.SELECT_FOCUSED_ITEM:if(v&&(t=_,document.activeElement!==t))return;if(e.repeat)return;e.preventDefault(),e.stopPropagation(),A({type:n}),null!=d?d(c,a,e):null!=_&&_.click()}}}),[x,A,v,_,d,c,a]),L=r.useCallback((function(e){return e.currentTarget!==e.target?(h||(O(!0),C(!0)),!1):h?(x(!1),!1):void(E&&null!=_?G(c,a):x(!0))}),[h,E,_,x,G,c,a]),j=r.useCallback((function(e){if(e.target!==e.currentTarget){if(e.currentTarget.contains(e.relatedTarget))return!1;O(!1)}}),[]),R=r.useMemo((function(){return Math.max.apply(Math,n)}),[n]),K=r.useCallback((function(){return{role:"grid","aria-rowcount":n.length,"aria-colcount":R,tabIndex:h&&E?-1:0,"data-ref-id":t,onKeyDown:w,onFocus:L,onBlur:j}}),[n.length,R,h,E,t,w,L,j]),z=r.useCallback((function(e,n){var r={role:"gridcell","aria-rowindex":n+1,"aria-colindex":e+1,id:(0,i.makeGridId)(t,e,n),tabIndex:E&&e===c&&n===a?0:-1,onFocus:D.get(e+","+n)};return e===c&&n===a&&(r.ref=k),r}),[t,E,c,a,D,k]),H=r.useCallback((function(e){return{role:"row","aria-rowindex":e+1}}),[]);return r.useMemo((function(){return{dispatch:A,getContainerProps:K,getItemProps:z,getRowProps:H}}),[A,K,z,H])}({navId:t,columnCounts:P,focusedX:C,focusedY:D,dispatch:M,onSelect:p,prepareFocus:A,getNewFocusPosition:E,maintainFocusPosition:v,enabled:_,autoFocusElement:O})},Object.defineProperty(t,"GridActionType",{enumerable:!0,get:function(){return u.GridActionType}});var r=a(n(0)),u=a(n(6492)),o=n(463),i=n(1520);function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var o=r?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(n,u,o):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}var s=[o.Keys.TAB];function f(e,t,n){return null!=t&&null!=n?"#"+(0,i.makeGridId)(e,t,n):"[data-ref-id="+e+"]"}function l(e){return document.querySelector(e)}},6492:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){switch(t.type){case u.ActionType.NAVIGATE_UP:return function(e,t){var n=Math.max(0,e.focusedY-1);return o({},e,{focusedX:Math.min(e.columnCounts[n]-1,e.focusedX),focusedY:n})}(e);case u.ActionType.NAVIGATE_DOWN:return function(e,t){var n=Math.min(e.focusedY+1,e.columnCounts.length-1);return o({},e,{focusedX:Math.min(e.columnCounts[n]-1,e.focusedX),focusedY:n})}(e);case u.ActionType.NAVIGATE_RIGHT:return function(e,t){var n=!(e.focusedY===e.columnCounts.length-1)&&e.focusedX+1===e.columnCounts[e.focusedY],r=n?0:Math.min(e.focusedX+1,e.columnCounts[e.focusedY]-1),u=n?e.focusedY+1:e.focusedY;return o({},e,{focusedX:r,focusedY:u})}(e);case u.ActionType.NAVIGATE_LEFT:return function(e,t){var n=!(0===e.focusedY)&&0===e.focusedX,r=n?e.focusedY-1:e.focusedY,u=n?e.columnCounts[r]-1:Math.max(0,e.focusedX-1);return o({},e,{focusedX:u,focusedY:r})}(e);case u.ActionType.NAVIGATE_INLINE_START:return function(e,t){return o({},e,{focusedX:0})}(e);case u.ActionType.NAVIGATE_INLINE_END:return function(e,t){return o({},e,{focusedX:e.columnCounts[e.focusedY]-1})}(e);case u.ActionType.NAVIGATE_START:return function(e,t){return o({},e,{focusedX:0,focusedY:0})}(e);case u.ActionType.NAVIGATE_END:return function(e,t){var n=e.columnCounts.length-1;return o({},e,{focusedX:e.columnCounts[n]-1,focusedY:n})}(e);case r.UPDATE_COLUMN_COUNTS:return function(e,t){var n=t.columnCounts,r=Math.min(Math.max(0,n.length-1),e.focusedY);return o({},e,{columnCounts:n,focusedX:Math.min(null==n[r]?0:n[r]-1,e.focusedX),focusedY:r})}(e,t);case r.SET_FOCUSED_POSITION:return function(e,t){var n=t.x,r=t.y,u=Math.max(0,Math.min(r,e.columnCounts.length-1));return o({},e,{focusedX:Math.max(0,Math.min(n,e.columnCounts[u]-1)),focusedY:u})}(e,t);case u.ActionType.SELECT_FOCUSED_ITEM:return e;default:console.warn("Grid navigator was given an unhandled action "+t.type)}return e},t.GridActionType=void 0;var r,u=n(463);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}t.GridActionType=r,function(e){e.UPDATE_COLUMN_COUNTS="UPDATE_COLUMN_COUNTS",e.SET_FOCUSED_POSITION="SET_FOCUSED_POSITION"}(r||(t.GridActionType=r={}))},6493:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useSparseListNavigator=function(e){var t=e.navId,n=e.items,u=e.focusedIndex,i=void 0===u?0:u,a=e.onSelect,s=e.setFocus,f=e.getNewFocusIndex,l=e.maintainFocusPosition,d=void 0===l||l,T=e.includeSetSizes,A=void 0===T||T,E=e.focusOnMount,y=void 0===E||E,v=e.enabled,I=void 0===v||v,_=e.onDispatch,N=r.useCallback((function(e,t){var n=(0,o.default)(e,t);return null!=_&&_(e,n,t),n}),[_]),h=r.useReducer(N,{focusedIndex:i,itemCount:n.length,items:n}),O=h[0],m=h[1],g=O.itemCount,S=O.focusedIndex,b=r.useState((function(){return(0,c.throttle)(m,16)}))[0];return r.useEffect((function(){m({type:o.SparseListActionType.UPDATE_ITEMS,items:n})}),[n]),p({navId:t,itemCount:g,focusedIndex:S,dispatch:b,onSelect:a,setFocus:s,getNewFocusIndex:f,maintainFocusPosition:d,includeSetSizes:A,focusOnMount:y,enabled:I})},t.default=function(e){var t=e.navId,n=e.itemCount,o=e.focusedIndex,i=void 0===o?0:o,a=e.onSelect,s=e.setFocus,f=e.getNewFocusIndex,l=e.maintainFocusPosition,d=void 0===l||l,T=e.includeSetSizes,A=void 0===T||T,E=e.focusOnMount,y=void 0===E||E,v=e.enabled,I=void 0===v||v,_=e.onDispatch,N=r.useCallback((function(e,t){var n=(0,u.default)(e,t);return null!=_&&_(e,n,t),n}),[_]),h=r.useReducer(N,{focusedIndex:i,itemCount:n}),O=h[0],m=h[1],g=O.itemCount,S=O.focusedIndex,b=r.useState((function(){return(0,c.throttle)(m,16)}))[0];return r.useEffect((function(){m({type:u.ListActionType.UPDATE_ITEM_COUNT,itemCount:n})}),[n]),p({navId:t,itemCount:g,focusedIndex:S,dispatch:b,onSelect:a,setFocus:s,getNewFocusIndex:f,maintainFocusPosition:d,includeSetSizes:A,focusOnMount:y,enabled:I})},Object.defineProperty(t,"ListActionType",{enumerable:!0,get:function(){return u.ListActionType}});var r=s(n(0)),u=s(n(5625)),o=s(n(6494)),i=n(463),c=n(1520);function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function s(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var o=r?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(n,u,o):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}var f=[i.Keys.TAB,i.Keys.UP,i.Keys.DOWN];function l(e,t){return null!=t?"#"+(0,c.makeId)(e,t):"#"+e}function d(e){return document.querySelector(e)}function T(e){var t;null===(t=document.getElementById(e))||void 0===t||t.focus()}function p(e){var t=e.navId,n=e.itemCount,o=e.focusedIndex,a=e.onSelect,s=e.setFocus,p=void 0===s?T:s,A=e.getNewFocusIndex,E=e.dispatch,y=e.maintainFocusPosition,v=e.focusOnMount,I=e.enabled,_=r.useRef();r.useEffect((function(){_.current=I}),[I]);var N=r.useState(!1),h=N[0],O=N[1],m=r.useState((function(){return new c.HandlerMemoizer((function(e){return function(){E({type:u.ListActionType.SET_FOCUSED_INDEX,index:e})}}))}))[0];r.useEffect((function(){return function(){return m.clean()}}),[m]);var g=r.useCallback((function(e,t){_.current&&p(e,t)}),[p]),S=r.useState(!0),b=S[0],P=S[1];r.useEffect((function(){!b||v?g((0,c.makeId)(t,o),o):P(!1)}),[o]);var C=r.useCallback((function(e){void 0===e&&(e=!0);var n=null!=A?A(o):o;n!==o&&E({type:u.ListActionType.SET_FOCUSED_INDEX,index:n}),e&&g((0,c.makeId)(t,n),n)}),[o,A,p,E,t]),D=r.useCallback((function(e){if(_.current){if(f.includes(e.key)&&!(e.shiftKey||e.altKey||e.metaKey||e.ctrlKey)&&e.currentTarget===e.target)return e.preventDefault(),e.stopPropagation(),void C();var n,r=function(e){switch(e.key){case i.Keys.ENTER:case i.Keys.SPACE:return i.ActionType.SELECT_FOCUSED_ITEM;case i.Keys.UP:return i.ActionType.NAVIGATE_UP;case i.Keys.DOWN:return i.ActionType.NAVIGATE_DOWN;case i.Keys.HOME:return i.ActionType.NAVIGATE_START;case i.Keys.END:return i.ActionType.NAVIGATE_END}}(e);switch(r){case i.ActionType.NAVIGATE_UP:case i.ActionType.NAVIGATE_DOWN:case i.ActionType.NAVIGATE_START:case i.ActionType.NAVIGATE_END:return e.preventDefault(),e.stopPropagation(),void E({type:r});case i.ActionType.SELECT_FOCUSED_ITEM:var u=d(l(t,o));if(n=u,document.activeElement!==n)return;if(e.repeat)return;if(e.preventDefault(),e.stopPropagation(),E({type:r}),null!=a)return void a(o);null==u||u.click()}}}),[E,o,C,a]),M=r.useCallback((function(){!h&&O(!0)}),[]),G=r.useCallback((function(){h||(y?g((0,c.makeId)(t,o),o):C(!0))}),[y,h,o,C]),x=r.useCallback((function(e){e.currentTarget.contains(e.relatedTarget)||requestAnimationFrame((function(){null!=d(l(t,o))?O(!1):g(t)}))}),[t,o]),V=r.useRef(null);r.useLayoutEffect((function(){var e=V.current;if(null!=e)return e.addEventListener("focusin",M),e.addEventListener("focus",G),e.addEventListener("focusout",x),function(){e.removeEventListener("focusin",M),e.removeEventListener("focus",G),e.removeEventListener("focusout",x)}}),[G,M,x]);var U=r.useCallback((function(){return{role:"list",tabIndex:h&&y?-1:0,id:t,onKeyDown:D,ref:V}}),[t,h,D,y]),F=r.useCallback((function(e){var r=e.index;return{role:"listitem","aria-setsize":n,"aria-posinset":r+1,id:(0,c.makeId)(t,r),tabIndex:y&&r===o?0:-1,onFocus:m.get(r)}}),[t,o,n,y,m]);return r.useMemo((function(){return{dispatch:E,getContainerProps:U,getItemProps:F}}),[E,U,F])}},6494:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){switch(t.type){case o.ActionType.NAVIGATE_UP:return function(e,t){for(var n=e.items,r=e.focusedIndex,u=-1,o=r-1;o>0;o--)if(void 0!==n[o]){u=o;break}return i({},e,{focusedIndex:Math.max(0,u)})}(e);case o.ActionType.NAVIGATE_DOWN:return function(e,t){for(var n=e.items,r=e.itemCount,u=e.focusedIndex,o=1/0,c=u+1;c<r-1;c++)if(void 0!==n[c]){o=c;break}return i({},e,{focusedIndex:Math.min(o,r-1)})}(e);case o.ActionType.NAVIGATE_START:return function(e,t){for(var n=e.items,r=e.itemCount,u=0,o=0;o<r;o++)if(void 0!==n[o]){u=o;break}return i({},e,{focusedIndex:u})}(e);case o.ActionType.NAVIGATE_END:return function(e,t){for(var n=e.items,r=e.itemCount,u=r,o=r-1;o>0;o--)if(void 0!==n[o]){u=o;break}return i({},e,{focusedIndex:u})}(e);case r.UPDATE_ITEMS:return function(e,t){var n=t.items,r=n.length,u=e.items[e.focusedIndex],o=n.indexOf(u);return i({},e,{itemCount:r,items:n,focusedIndex:-1===o?Math.min(e.focusedIndex,r):o})}(e,t);case u.ListActionType.SET_FOCUSED_INDEX:return function(e,t){var n=t.index;return i({},e,{focusedIndex:Math.max(0,Math.min(n,e.itemCount-1))})}(e,t);case o.ActionType.SELECT_FOCUSED_ITEM:return e;default:console.warn("SparseListReducer was given an unhandled action "+t.type)}return e},t.SparseListActionType=void 0;var r,u=n(5625),o=n(463);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}t.SparseListActionType=r,function(e){e.UPDATE_ITEMS="UPDATE_ITEMS"}(r||(t.SparseListActionType=r={}))},6495:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.navId,n=e.items,c=e.initialFocusPath,a=e.onSelect,s=e.enabled,f=void 0===s||s,l=r.useRef(f);r.useLayoutEffect((function(){l.current=f}),[f]);var d=r.useReducer(u.default,{items:n,focusPath:c}),T=d[0],p=d[1],A=r.useMemo((function(){return(0,i.throttle)(p,30)}),[p]);r.useEffect((function(){p({type:u.MenuActionType.UPDATE_ITEMS,items:n})}),[n]);var E=T.focusPath,y=r.useState(!1),v=y[0],I=y[1],_=r.useState((function(){return{onItemFocusMemoizer:new i.HandlerMemoizer((function(e){return function(){I(!0),p({type:u.MenuActionType.SET_FOCUS_PATH,path:e.split("--")})}})),onItemMouseEnterMemoizer:new i.HandlerMemoizer((function(e){return function(){p({type:u.MenuActionType.SET_FOCUS_PATH,path:e.split("--")})}}))}}))[0],N=_.onItemFocusMemoizer,h=_.onItemMouseEnterMemoizer,O=r.useCallback((function(e){if(l.current){var n,r=function(e){switch(e.key){case o.Keys.ENTER:case o.Keys.SPACE:return o.ActionType.SELECT_FOCUSED_ITEM;case o.Keys.UP:return o.ActionType.NAVIGATE_UP;case o.Keys.DOWN:return o.ActionType.NAVIGATE_DOWN;case o.Keys.RIGHT:return o.ActionType.NAVIGATE_IN;case o.Keys.LEFT:return o.ActionType.NAVIGATE_OUT}return}(e);switch(r){case o.ActionType.NAVIGATE_UP:case o.ActionType.NAVIGATE_DOWN:case o.ActionType.NAVIGATE_IN:case o.ActionType.NAVIGATE_OUT:return e.preventDefault(),e.stopPropagation(),void A({type:r});case o.ActionType.SELECT_FOCUSED_ITEM:if(e.repeat)return;if(e.preventDefault(),e.stopPropagation(),A({type:r}),null!=a)return void a(E);var u=(n=function(e,t){return null!=t?"#"+(0,i.makeId)(e,t.join("--")):"#"+e}(t,E),document.querySelector(n));null!=u&&u.click()}}}),[A,t,E,a]),m=r.useCallback((function(){v||I(!0)}),[v]),g=r.useCallback((function(e){if(e.target!==e.currentTarget){if(e.currentTarget.contains(e.relatedTarget))return;v&&I(!1)}}),[v]),S=r.useCallback((function(){p({type:u.MenuActionType.SET_FOCUS_PATH,path:[]}),I(!1)}),[]),b=r.useCallback((function(e){return e.every((function(e,t){return E[t]===e}))}),[E]),P=r.useCallback((function(){return{role:"menu",id:t,tabIndex:-1,onKeyDown:O,onFocus:m,onBlur:g,onMouseLeave:S,"aria-activedescendant":E.length>0?(0,i.makeId)(t,E.join("--")):void 0}}),[t,O,g,m,E]),C=r.useCallback((function(e){var n=e.path;return{role:"menu",tabIndex:-1,"aria-activedescendant":b(n)?(0,i.makeId)(t,E.join("--")):void 0}}),[t,E,b]),D=r.useCallback((function(e){var n=e.path,r=e.role,u=void 0===r?"menuitem":r,o=n.join("--");return{role:u,id:(0,i.makeId)(t,o),tabIndex:-1,onFocus:N.get(o),onMouseEnter:h.get(o)}}),[t,N,h]);return r.useMemo((function(){return{dispatch:A,getContainerProps:P,getSubmenuProps:C,getItemProps:D,isFocused:b}}),[A,P,C,D,b])},Object.defineProperty(t,"MenuActionType",{enumerable:!0,get:function(){return u.MenuActionType}}),Object.defineProperty(t,"MenuItem",{enumerable:!0,get:function(){return u.MenuItem}});var r=a(n(0)),u=a(n(6496)),o=n(463),i=n(1520);function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var o=r?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(n,u,o):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}},6496:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){switch(t.type){case u.ActionType.NAVIGATE_UP:return function(e,t){var n=c(e),r=a(e);if(null==r)return e;var u=(i(r,n)-1)%r.length;u<0&&(u=r.length-1);return null==r[u]?e:o({},e,{focusPath:[].concat(e.focusPath.slice(0,-1),[r[u].key])})}(e);case u.ActionType.NAVIGATE_DOWN:return function(e,t){var n=c(e),r=a(e);if(null==r)return e;var u=(i(r,n)+1)%r.length;return null==r[u]?e:o({},e,{focusPath:[].concat(e.focusPath.slice(0,-1),[r[u].key])})}(e);case u.ActionType.NAVIGATE_IN:return function(e,t){var n,r=c(e),u=a(e);if(null==u)return e;var s=u[i(u,r)],f=null==s||null===(n=s.children)||void 0===n?void 0:n[0];return null==f?e:o({},e,{focusPath:[].concat(e.focusPath,[f.key])})}(e);case u.ActionType.NAVIGATE_OUT:return function(e,t){return e.focusPath.length<=1?e:o({},e,{focusPath:e.focusPath.slice(0,-1)})}(e);case r.UPDATE_ITEMS:return function(e,t){var n=t.items;return o({},e,{items:n,focusPath:s(n,e.focusPath)})}(e,t);case r.SET_FOCUS_PATH:return function(e,t){var n=t.path;return o({},e,{focusPath:s(e.items,n)})}(e,t);case u.ActionType.SELECT_FOCUSED_ITEM:return e;default:throw new Error("Menu navigator was given an unhandled action "+t.type)}return e},t.MenuActionType=void 0;var r,u=n(463);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){return e.findIndex((function(e){return t===e.key}))}function c(e){return e.focusPath[e.focusPath.length-1]}function a(e){for(var t=e.items,n=0;n<e.focusPath.length-1;n++){if(null==t)return;t=t[i(t,e.focusPath[n])].children}return t}function s(e,t){for(var n=e,r=[],u=0;u<t.length&&null!=n;u++){var o=t[u],c=i(n,o);if(c<0||c>=n.length){var a=n[0];null!=a&&r.push(a.key);break}r.push(o),n=n[c].children}return r}t.MenuActionType=r,function(e){e.UPDATE_ITEMS="UPDATE_ITEMS",e.SET_FOCUS_PATH="SET_FOCUS_PATH"}(r||(t.MenuActionType=r={}))},6497:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.nodes,n=e.rootIds,c=e.navId,a=e.enabled,l=void 0===a||a,d=e.onSelect,T=r.useReducer(u.default,void 0,(function(){return(0,u.treeReducerInitializer)(t,n)})),p=T[0],A=T[1],E=r.useState((function(){return(0,i.throttle)(A,16)}))[0],y=r.useState((function(){return new u.TreeNavigatorStore(p)}))[0];y._updateState(p);var v=r.useState(!1),I=v[0],_=v[1],N=r.useState(!1),h=N[0],O=N[1],m=r.useRef();m.current=l;var g=y.getFocusedIndex(),S=y.getFocusedNode(),b=f(s(c,g)),P=r.useState((function(){return new i.HandlerMemoizer((function(e){return function(){O(!0),E({type:u.TreeActionType.SET_FOCUSED_NODE,nodeId:e})}}))}))[0];r.useEffect((function(){return function(){return P.clean()}}),[P]);var C=r.useCallback((function(e){if(!m.current)return!1;document.activeElement!=e&&e.focus()}),[]);r.useEffect((function(){E({type:u.TreeActionType.UPDATE_NODES,newNodes:t,rootIds:n})}),[t,n,E]),r.useEffect((function(){if(h)if(I)_(!1);else{var e=f(s(c,g));null!=e&&C(e)}}),[g]);var D=r.useCallback((function(e){if(m.current){var t,n=function(e){switch(e.key){case o.Keys.ENTER:case o.Keys.SPACE:return o.ActionType.SELECT_FOCUSED_ITEM;case o.Keys.UP:return o.ActionType.NAVIGATE_UP;case o.Keys.DOWN:return o.ActionType.NAVIGATE_DOWN;case o.Keys.LEFT:return o.ActionType.NAVIGATE_LEFT;case o.Keys.RIGHT:return o.ActionType.NAVIGATE_RIGHT;case o.Keys.HOME:return o.ActionType.NAVIGATE_START;case o.Keys.END:return o.ActionType.NAVIGATE_END}return}(e);switch(n){case o.ActionType.NAVIGATE_UP:case o.ActionType.NAVIGATE_DOWN:case o.ActionType.NAVIGATE_LEFT:case o.ActionType.NAVIGATE_RIGHT:case o.ActionType.NAVIGATE_START:case o.ActionType.NAVIGATE_END:return e.preventDefault(),e.stopPropagation(),void E({type:n});case o.ActionType.SELECT_FOCUSED_ITEM:if(t=b,document.activeElement!==t)return;if(e.repeat)return;e.preventDefault(),e.stopPropagation(),E({type:n}),null!=d?null!=S&&d(S):null!=b&&b.click()}}}),[E,S,b,d]),M=r.useCallback((function(){h||(O(!0),_(!0))}),[h]),G=r.useCallback((function(e){if(e.target!==e.currentTarget){if(e.currentTarget.contains(e.relatedTarget))return!1;h&&O(!1)}}),[h]),x=r.useCallback((function(){return{role:"tree","data-ref-id":c,tabIndex:-1,onKeyDown:D,onFocus:M,onBlur:G}}),[D,G,M,c]),V=r.useCallback((function(e){var t,n=e.id,r=y.getNode(n),u=null!==(t=y.getVisibleNodeIndex(n))&&void 0!==t?t:-1,o=null!=r&&r.children.length>0,a={role:"treeitem",tabIndex:u===g?0:-1,"aria-setsize":y.getVisibleNodeCount(),"aria-posinset":u+1,"data-ref-id":(0,i.makeId)(c,u),onFocus:P.get(n)};return o&&(a["aria-expanded"]=null!=r&&r.expanded),a}),[c,g,y,P]);return{store:y,dispatch:E,getContainerProps:x,getItemProps:V}},Object.defineProperty(t,"TreeActionType",{enumerable:!0,get:function(){return u.TreeActionType}}),Object.defineProperty(t,"TreeNode",{enumerable:!0,get:function(){return u.TreeNode}});var r=a(n(0)),u=a(n(6498)),o=n(463),i=n(1520);function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var o=r?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(n,u,o):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}function s(e,t){return null!=t?"[data-ref-id="+(0,i.makeId)(e,t)+"]":"[data-ref-id="+e+"]"}function f(e){return document.querySelector(e)}},6498:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){switch(t.type){case u.ActionType.NAVIGATE_UP:return function(e,t){return i({},e,{focusedIndex:Math.max(0,e.focusedIndex-1)})}(e);case u.ActionType.NAVIGATE_DOWN:return function(e,t){return i({},e,{focusedIndex:Math.min(e.visibleNodeList.length-1,e.focusedIndex+1)})}(e);case u.ActionType.NAVIGATE_START:return function(e,t){return i({},e,{focusedIndex:0})}(e);case u.ActionType.NAVIGATE_END:return function(e,t){return i({},e,{focusedIndex:Math.max(0,e.visibleNodeList.length-1)})}(e);case u.ActionType.NAVIGATE_LEFT:return function(e,t){var n=a(e);if(null==n)return e;if(n.expanded)return f(e,n.id,i({},n,{expanded:!1}));if(null!=n.parent){var r,u=null!==(r=s(e,n.parent))&&void 0!==r?r:0;return i({},e,{focusedIndex:u})}return e}(e);case u.ActionType.NAVIGATE_RIGHT:return function(e,t){var n=a(e);if(null==n)return e;var r=n.children.length>0;if(r&&!n.expanded)return f(e,n.id,i({},n,{expanded:!0}));if(r&&n.expanded){var u,o=null!==(u=s(e,n.children[0]))&&void 0!==u?u:0;return i({},e,{focusedIndex:o})}return e}(e);case r.UPDATE_NODE:return function(e,t){var n=t.node;return f(e,n.id,n)}(e,t);case r.UPDATE_NODES:return function(e,t){var n=t.newNodes,r=t.rootIds;return function(e,t,n){var r,u=a(e),o=i({},e,{nodes:t,rootIds:n});return o.visibleNodeList=l(o),i({},o,{focusedIndex:null!=u&&null!==(r=s(o,u.id))&&void 0!==r?r:0})}(e,n,r)}(e,t);case r.REMOVE_NODE:return function(e,t){var n=t.node,r=e.nodes,u=n.id,c=(r[u],function(e,t){if(null==e)return{};var n,r,u={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(u[n]=e[n]);return u}(r,[u].map(o)));return i({},e,{nodes:c,visibleNodeList:l(e),focusedIndex:Math.min(e.visibleNodeList.length-1,e.focusedIndex)})}(e,t);case r.SET_FOCUSED_NODE:return function(e,t){var n,r=t.nodeId,u=null!==(n=s(e,r))&&void 0!==n?n:0;return i({},e,{focusedIndex:u})}(e,t);case u.ActionType.SELECT_FOCUSED_ITEM:return e;default:console.warn("Tree navigator was given an unhandled action "+t.type)}return e},t.treeReducerInitializer=function(e,t){var n={nodes:e,rootIds:t,visibleNodeList:[],focusedIndex:0};return n.visibleNodeList=l(n),n},t.TreeNavigatorStore=t.TreeActionType=void 0;var r,u=n(463);function o(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){return e.nodes[t]}function a(e){return c(e,e.visibleNodeList[e.focusedIndex])}function s(e,t){if(null!=t){var n=e.visibleNodeList.indexOf(t);return-1===n?void 0:n}}function f(e,t,n){var r,u,o=a(e),c=i({},e,{nodes:i({},e.nodes,(r={},r[t]=n,r))});return c.visibleNodeList=l(c),i({},c,{focusedIndex:null!=o&&null!==(u=s(c,o.id))&&void 0!==u?u:0})}function l(e){var t=[];return e.rootIds.forEach((function(n){Array.prototype.push.apply(t,function e(t,n){if(null==n)return[];var r=c(t,n);if(null==r)return[];if(!r.expanded||0===r.children.length)return[n];var u=[n];return r.children.forEach((function(n){var r=e(t,n);Array.prototype.push.apply(u,r)})),u}(e,n))})),t}t.TreeActionType=r,function(e){e.UPDATE_NODE="UPDATE_NODE",e.UPDATE_NODES="UPDATE_NODES",e.REMOVE_NODE="REMOVE_NODE",e.SET_FOCUSED_NODE="SET_FOCUSED_NODE"}(r||(t.TreeActionType=r={}));var d=function(){function e(e){this.state=e}var t=e.prototype;return t._updateState=function(e){this.state=e},t.getNodes=function(){return this.state.nodes},t.getNode=function(e){return c(this.state,e)},t.getVisibleNodeIndex=function(e){return s(this.state,e)},t.getVisibleNodeCount=function(){return this.state.visibleNodeList.length},t.getFocusedIndex=function(){return this.state.focusedIndex},t.getFocusedNode=function(){return a(this.state)},t.isHighlighted=function(e){var t=this.getFocusedNode();return null!=t&&t.id===e},e}();t.TreeNavigatorStore=d}}]);
//# sourceMappingURL=c8e9dec73681b0be7643.js.map