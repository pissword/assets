"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[75782],{375782:(e,t,r)=>{r.r(t);r.d(t,{default:()=>w});var n=r(785893),o=r(667294),i=r(441143),s=r.n(i),u=r(363010),l=r(331535),c=r(354290),a=r(653772),f=r(31165),d=r(941724),y=r(757987),b=r(67416),h=r(339710),p=r(612562),m=r(544934),O=r(959797),g=r(286242),j=r.n(g);function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function x(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));n.forEach((function(t){x(e,t,r[t])}))}return e}function C(e,t){t=null!=t?t:{}
;Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}));return e}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],s=!0,u=!1;try{for(r=r.call(e);!(s=(n=r.next()).done);s=!0){i.push(n.value);if(t&&i.length===t)break}}catch(e){u=!0;o=e}finally{try{s||null==r.return||r.return()}finally{if(u)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name)
;if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e){var t=e.categoryValue,r=e.editPermissions,i=e.guildId,g=e.hasMemberSearch,v=e.headerText,x=e.onClose,w=e.overwrittenKeys,I=e.search,M=e.searchPlaceholderText,k=e.selectedPermissionCount,A=e.transitionState,N=(0,u.e7)([a.Z],(function(){return a.Z.getGuild(i)}),[i]);s()(null!=N,"");var E=P(o.useState(null),2),Z=E[0],T=E[1],D=I(i),_=D.query,z=D.results,R=D.setQuery,L=P(o.useState({}),2),q=L[0],X=L[1],B=o.useMemo((function(){return Object.keys(q).length+k>=m._n}),[k,q]),G=o.useMemo((function(){return z.filter((function(e){var t=(0,h.rE)(e.id,e.type);return!w.includes(t)}))}),[w,z]),Y=o.useCallback((function(e,r){X((function(n){var o=(0,h.rE)(e,r),i=S({},n)
;o in n?delete i[o]:B||(i[o]={id:e,permission:!t,type:r});return i}))}),[t,B,X]),K=o.useCallback((function(){Object.keys(q).length>0&&r(q,[]);x()}),[r,x,q]);o.useEffect((function(){return function(){return clearTimeout(Z)}}),[Z]);var U=o.useCallback((function(e){R(e);g&&T((function(t){clearTimeout(t);return 0===e.length?null:setTimeout((function(){c.Z.requestMembers(i,e,200,!1)}),500)}))}),[i,g,R,T]),V=o.useCallback((function(e){var t=G[e],r=(0,h.rE)(t.id,t.type),o=B&&!(r in q);return(0,n.jsx)("div",{className:j().item,children:(0,n.jsx)(y.ZP,{text:O.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_MAX,shouldShow:o,children:function(e){return(0,n.jsx)("div",C(S({},e),{children:(0,n.jsx)(l.XZ,C(S({},e),{type:l.XZ.Types.INVERTED,disabled:o,value:r in q,onChange:function(){return Y(t.id,t.type)},children:(0,n.jsx)(p.Z,{guild:N,id:t.id,isLocked:!1,type:t.type})}))}))}})},r)}),[G,N,B,Y,q]);o.useEffect((function(){c.Z.requestMembers(i,void 0,200,!1)}),[i]);return(0,n.jsxs)(b.Y0,{
"aria-label":O.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_PERMISSIONS_MODIFY,transitionState:A,children:[(0,n.jsx)(b.xB,{separator:!1,children:(0,n.jsx)(l.X6,{variant:"heading-xl/semibold",className:j().header,children:v})}),(0,n.jsxs)(b.hz,{className:j().modalContent,children:[(0,n.jsx)(f.Z,{className:j().searchBar,query:_,placeholder:M,"aria-label":M,onChange:U,onClear:function(){return R("")},size:f.Z.Sizes.MEDIUM}),(0,n.jsx)(d.Z,{role:"listbox",renderRow:V,rowCount:G.length,rowCountBySection:[G.length],rowHeight:36,className:j().list})]}),(0,n.jsxs)(b.mz,{children:[(0,n.jsx)(l.zx,{type:"submit",onClick:K,children:O.Z.Messages.ADD}),(0,n.jsx)(l.zx,{onClick:x,look:l.zx.Looks.LINK,color:l.zx.Colors.PRIMARY,children:O.Z.Messages.CANCEL})]})]})}}}]);
//# sourceMappingURL=9a6f179ce696fc231bd8.js.map