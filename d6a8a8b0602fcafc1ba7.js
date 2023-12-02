"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[46494],{98728:(e,n,r)=>{r.d(n,{Z:()=>E});var t=r(785893),l=r(667294),a=r(294184),o=r.n(a),u=r(331535),i=r(272729),s=r(67416),c=r(959797),f=r(998723),d=r.n(f);function h(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function p(e,n,r,t,l,a,o){try{var u=e[a](o),i=u.value}catch(e){r(e);return}u.done?n(i):Promise.resolve(i).then(t,l)}function v(e){return function(){var n=this,r=arguments;return new Promise((function(t,l){var a=e.apply(n,r);function o(e){p(a,t,l,o,u,"next",e)}function u(e){p(a,t,l,o,u,"throw",e)}o(void 0)}))}}function m(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,l,a=[],o=!0,u=!1;try{for(r=r.call(e);!(o=(t=r.next()).done);o=!0){a.push(t.value);if(n&&a.length===n)break}}catch(e){u=!0;l=e}finally{try{
o||null==r.return||r.return()}finally{if(u)throw l}}return a}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return h(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var b=function(e,n){var r,t,l,a,o={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,t&&(l=2&a[0]?t.return:a[0]?t.throw||((l=t.return)&&l.call(t),
0):t.next)&&!(l=l.call(t,a[1])).done)return l;(t=0,l)&&(a=[2&a[0],l.value]);switch(a[0]){case 0:case 1:l=a;break;case 4:o.label++;return{value:a[1],done:!1};case 5:o.label++;t=a[1];a=[0];continue;case 7:a=o.ops.pop();o.trys.pop();continue;default:if(!(l=o.trys,l=l.length>0&&l[l.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!l||a[1]>l[0]&&a[1]<l[3])){o.label=a[1];break}if(6===a[0]&&o.label<l[1]){o.label=l[1];l=a;break}if(l&&o.label<l[2]){o.label=l[2];o.ops.push(a);break}l[2]&&o.ops.pop();o.trys.pop();continue}a=n.call(e,o)}catch(e){a=[6,e];t=0}finally{r=l=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}};function E(e){var n=e.errorText,r=e.title,a=e.description,f=e.transitionState,h=e.onCancel,p=e.onConfirm,E=e.children,y=(0,i.Dt)(),x=m(l.useState(!1),2),R=x[0],g=x[1],I=l.useCallback(v((function(){return b(this,(function(e){switch(e.label){case 0:g(!0);e.label=1;case 1:e.trys.push([1,3,4,5]);return[4,p()];case 2:e.sent();return[3,5];case 3:
throw e.sent();case 4:g(!1);return[7];case 5:return[2]}}))})),[p]);return(0,t.jsxs)(s.Y0,{className:d().modal,transitionState:f,"aria-labelledby":y,size:s.Cg.SMALL,children:[(0,t.jsxs)(s.hz,{className:d().modalContent,children:[(0,t.jsx)(u.X6,{variant:"heading-md/semibold",id:y,children:r}),null!=a&&""!==a?(0,t.jsx)(u.xv,{variant:"text-sm/normal",color:"header-secondary",className:d().description,children:a}):null,(0,t.jsx)("div",{className:d().body,children:E}),null!=n&&""!==n?(0,t.jsx)(u.xv,{className:d().errorText,variant:"text-xs/normal",color:"text-danger",children:n}):null]}),(0,t.jsxs)(s.mz,{children:[(0,t.jsx)(u.zx,{submitting:R,className:d().button,size:u.zx.Sizes.SMALL,color:u.zx.Colors.BRAND,onClick:I,children:c.Z.Messages.SAVE}),(0,t.jsx)(u.zx,{className:o()(d().cancelButton,d().button),size:u.zx.Sizes.SMALL,color:u.zx.Colors.PRIMARY,onClick:h,children:c.Z.Messages.CANCEL})]})]})}},646494:(e,n,r)=>{r.r(n);r.d(n,{default:()=>X})
;var t=r(785893),l=r(667294),a=r(294184),o=r.n(a),u=r(873955),i=r.n(u),s=r(176907),c=r(996144),f=r(363010),d=r(331535),h=r(239396),p=r(323657),v=r(952013),m=r(691869),b=r(172458),E=r(741738),y=r(832010),x=r(292074),R=r(356004),g=r(757987),I=r(523283),C=r(58877),_=r(855550),M=r(570239),j=r(98728),O=r(580946),N=r(461061),S=r(959797),A=r(998723),L=r.n(A);function w(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function P(e,n,r,t,l,a,o){try{var u=e[a](o),i=u.value}catch(e){r(e);return}u.done?n(i):Promise.resolve(i).then(t,l)}function k(e,n,r){n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r;return e}function T(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));t.forEach((function(n){
k(e,n,r[n])}))}return e}function U(e,n){n=null!=n?n:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})));r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}));return e}function Z(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,l,a=[],o=!0,u=!1;try{for(r=r.call(e);!(o=(t=r.next()).done);o=!0){a.push(t.value);if(n&&a.length===n)break}}catch(e){u=!0;l=e}finally{try{o||null==r.return||r.return()}finally{if(u)throw l}}return a}}(e,n)||B(e,n)||function(){
throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e){return function(e){if(Array.isArray(e))return w(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||B(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,n){if(e){if("string"==typeof e)return w(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);return"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(e,n):void 0}}var V=function(e,n){var r,t,l,a,o={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},
"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,t&&(l=2&a[0]?t.return:a[0]?t.throw||((l=t.return)&&l.call(t),0):t.next)&&!(l=l.call(t,a[1])).done)return l;(t=0,l)&&(a=[2&a[0],l.value]);switch(a[0]){case 0:case 1:l=a;break;case 4:o.label++;return{value:a[1],done:!1};case 5:o.label++;t=a[1];a=[0];continue;case 7:a=o.ops.pop();o.trys.pop();continue;default:if(!(l=o.trys,l=l.length>0&&l[l.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!l||a[1]>l[0]&&a[1]<l[3])){o.label=a[1];break}if(6===a[0]&&o.label<l[1]){o.label=l[1];l=a;break}if(l&&o.label<l[2]){o.label=l[2];o.ops.push(a);break}l[2]&&o.ops.pop();o.trys.pop();continue}a=n.call(e,o)}catch(e){a=[6,e];t=0}finally{r=l=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},D="RULE";function z(e){
var n=e.rule,r=e.rulesChannel,a=e.index,u=e.onChange,i=e.onKeyDown,f=e.onClear,h=e.onRuleReorder,p=e.isDropHovered,v=e.focused,y=e.onFocus,x=e.previewEnabled,R=l.useRef(null),g=l.useRef(null),_=Z(l.useState((0,b.eK)(n.value)),2),M=_[0],j=M.textValue,N=M.richValue,A=_[1],w=Z((0,s.c)({type:D,item:{rule:n,index:a},end:function(e,n){null==e||n.didDrop()||h(e.rule,null,!0)}}),3),P=w[1],T=w[2],U=Z((0,c.L)({accept:D,hover:function(e,n){var r,t=e.index,l=null===(r=R.current)||void 0===r?void 0:r.getBoundingClientRect(),o=n.getClientOffset();if(null!=l&&null!=o){var u=(l.bottom-l.top)/2,i=o.y-l.top;t<a&&i<u||t>a&&i>u||h(e.rule,a,!1)}},drop:function(e){h(e.rule,a,!0)}}),2),F=U[1];l.useLayoutEffect((function(){P(g);T(F(R));return function(){P(null);F(null)}}),[P,F,T]);l.useEffect((function(){""!==n.value&&""===j&&A((0,b.eK)(n.value))}),[n.value,j]);if(null==r)return null;var B=""!==n.value?n.value:n.id;return(0,t.jsxs)("div",{ref:R,className:o()(L().draggableInputContainer,k({},L().dragging,p)),
"data-dnd-name":B,children:[(0,t.jsxs)("div",{className:L().inputWrapper,children:[(0,t.jsx)(d.P3,{onMouseDown:function(){return y(a)},children:(0,t.jsx)(E.Z,{innerClassName:L().rulesTextAreaInput,type:m.I.RULES_INPUT,textValue:j,richValue:N,channel:r,placeholder:S.Z.Messages.MEMBER_VERIFICATION_RULE_PLACEHOLDER,focused:v,onChange:function(e,n,r){var t=n;t.length>O.fn&&(t=t.slice(0,O.fn));if(n!==t){n=t;r=(0,b.JM)(t)}u(n);A({textValue:n,richValue:r})},onKeyDown:i,canMentionChannels:x,canMentionRoles:x,maxCharacterCount:O.fn,characterCountClassName:L().characterCount,onSubmit:function(){return Promise.resolve({shouldClear:!1,shouldRefocus:!0})}})}),(0,t.jsx)(d.zx,{className:L().clearButton,onClick:f,look:d.zx.Looks.BLANK,size:d.zx.Sizes.NONE,children:(0,t.jsx)(I.Z,{className:L().clearIcon})}),(0,t.jsx)(d.xv,{className:L().rulesInputNumber,variant:"text-md/normal",color:"text-muted",children:"".concat(a+1,".")})]}),(0,t.jsx)("div",{ref:g,className:L().dragContainer,"data-dnd-name":B,
children:(0,t.jsx)(C.Z,{className:L().dragIcon})})]})}function K(e){var n=e.shortRule,r=e.fullRule,l=e.disabled,a=e.onClick;return l?(0,t.jsx)(g.ZP,{text:S.Z.Messages.MEMBER_VERIFICATION_RULE_LIMIT.format({number:O.X2}),children:function(e){return(0,t.jsx)("div",U(T({},e),{className:o()(L().exampleRule,k({},L().disabled,l)),children:(0,t.jsx)(d.xv,{variant:"text-sm/normal",color:"header-secondary",children:n})}))}}):(0,t.jsx)(d.P3,{className:o()(L().exampleRule,k({},L().disabled,l)),onClick:function(){return a(r)},children:(0,t.jsx)(d.xv,{variant:"text-sm/normal",color:"header-secondary",children:n})})}const X=function(e){var n,r,a=e.field,o=e.onSave,u=e.onClose,s=(0,v.ZP)(),c=(0,f.e7)([x.Z],(function(){return x.Z.getProps().guild})),m=null==c?void 0:c.rulesChannelId,b=null==c?void 0:c.hasFeature(N.oNc.PREVIEW_ENABLED),E=(0,f.e7)([R.Z],(function(){return null!=m?R.Z.getChannel(m):null})),g=Z(l.useState(null!=(null==a?void 0:a.values)?null==a?void 0:a.values.map((function(e){return{
id:i()(),value:e}})):[{id:i()(),value:""}]),2),I=g[0],C=g[1],A=Z(l.useState(null),2),w=A[0],k=A[1],B=Z(l.useState(null),2),D=B[0],X=B[1],H=Z(l.useState(0),2),W=H[0],G=H[1],Y=function(e){if(I.length!==O.X2)if(null!=e&&""===I[I.length-1].value){var n=F(I);n[I.length-1].value=e;C(n);G(n.length-1)}else{C(F(I).concat([{id:i()(),value:null!=e?e:""}]));G(I.length)}},q=l.useCallback((function(e,n,r){if(null!=I){var t=I.indexOf(e);if(null!=n&&n!==t){var l=F(I);l.splice(t,1);l.splice(n,0,e);C(l)}r?null!==D&&X(null):n!==D&&X(n)}}),[D,I]),J=(r=(n=function(){var e,n,r,t;return V(this,(function(l){switch(l.label){case 0:null!=w&&k(null);if(0===(e=I.map((function(e){return e.value.trim()})).filter((function(e){return""!==e}))).length){k(S.Z.Messages.MEMBER_VERIFICATION_RULES_REQUIRED_ERROR);return[2]}n={field_type:M.QJ.TERMS,label:S.Z.Messages.MEMBER_VERIFICATION_FORM_RULES_LABEL,values:e,required:!0};l.label=1;case 1:l.trys.push([1,3,,4]);return[4,o(n)];case 2:l.sent();u();return[3,4];case 3:
r=l.sent();t=new p.Hx(r);k(t.getAnyErrorMessage());return[3,4];case 4:return[2]}}))},function(){var e=this,r=arguments;return new Promise((function(t,l){var a=n.apply(e,r);function o(e){P(a,t,l,o,u,"next",e)}function u(e){P(a,t,l,o,u,"throw",e)}o(void 0)}))}),function(){return r.apply(this,arguments)});if(null==c||null==E)return null;var Q=I.length===O.X2;return(0,t.jsx)(h.Z,{page:N.ZY5.GUILD_RULES_CREATE_MODAL,children:(0,t.jsxs)(j.Z,U(T({},e),{errorText:w,title:S.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_RULES,onCancel:u,onConfirm:J,children:[I.map((function(e,n){return(0,t.jsx)(z,{rulesChannel:E,rule:e,index:n,onChange:function(e){return function(e,n){var r=F(I);r[n].value=e;C(r)}(e,n)},onClear:function(){return function(e){var n=F(I.slice(0,e)).concat(F(I.slice(e+1)));C(0===n.length?[{id:i()(),value:""}]:n)}(n)},onRuleReorder:q,isDropHovered:n===D,focused:n===W,onFocus:G,previewEnabled:null==b||b},e.id)})),!Q&&(0,t.jsxs)("div",{className:L().addItemContainer,children:[(0,
t.jsx)(_.Z,{height:17,width:17,color:(0,y.Lq)(s===N.BRd.DARK?N.Ilk.BLUE_345:N.Ilk.BLUE_430)}),(0,t.jsx)(d.P3,{className:L().addItemButton,onClick:function(){return Y()},children:(0,t.jsx)(d.xv,{color:"text-link",variant:"text-md/normal",children:S.Z.Messages.MEMBER_VERIFICATION_ADD_RULE})})]}),(0,t.jsx)("div",{className:L().divider}),(0,t.jsx)(d.vw,{children:S.Z.Messages.MEMBER_VERIFICATION_EXAMPLE_RULES_SUBTITLE}),(0,t.jsxs)("div",{className:L().termsExampleRulesContainer,children:[(0,t.jsxs)("div",{className:L().termsExampleRulePairContainer,children:[(0,t.jsx)(K,{shortRule:S.Z.Messages.MEMBER_VERIFICATION_RULE_BE_RESPECTFUL,fullRule:S.Z.Messages.MEMBER_VERIFICATION_RULE_BE_RESPECTFUL_FULL,disabled:Q,onClick:Y}),(0,t.jsx)(K,{shortRule:S.Z.Messages.MEMBER_VERIFICATION_RULE_NO_SPAM,fullRule:S.Z.Messages.MEMBER_VERIFICATION_RULE_NO_SPAM_FULL,disabled:Q,onClick:Y})]}),(0,t.jsxs)("div",{className:L().termsExampleRulePairContainer,children:[(0,t.jsx)(K,{
shortRule:S.Z.Messages.MEMBER_VERIFICATION_RULE_NO_NSFW,fullRule:S.Z.Messages.MEMBER_VERIFICATION_RULE_NO_NSFW_FULL,disabled:Q,onClick:Y}),(0,t.jsx)(K,{shortRule:S.Z.Messages.MEMBER_VERIFICATION_RULE_SAFE,fullRule:S.Z.Messages.MEMBER_VERIFICATION_RULE_SAFE_FULL,disabled:Q,onClick:Y})]})]})]}))})}}}]);
//# sourceMappingURL=d6a8a8b0602fcafc1ba7.js.map