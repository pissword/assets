(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[76692],{514285:(e,t,n)=>{e.exports=n.p+"75f486e68c011b04def1e50f62931738.svg"},174447:(e,t,n)=>{e.exports=n.p+"c65ed19c37bdcdddd9a23e1ab0c9b488.svg"},179211:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(675860),o=n(173436),i=n(585771),c=n(301513),u=n(461061),l=n(959797);function a(e,t,n,r,o,i,c){try{var u=e[i](c),l=u.value}catch(e){n(e);return}u.done?t(l):Promise.resolve(l).then(r,o)}var s=function(e,t){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;(r=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:
c.label++;return{value:i[1],done:!1};case 5:c.label++;r=i[1];i=[0];continue;case 7:i=c.ops.pop();c.trys.pop();continue;default:if(!(o=c.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1];o=i;break}if(o&&c.label<o[2]){c.label=o[2];c.ops.push(i);break}o[2]&&c.ops.pop();c.trys.pop();continue}i=t.call(e,c)}catch(e){i=[6,e];r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};function f(e,t){o.Z.dispatch({type:"MFA_SMS_TOGGLE"});return r.Z.post({url:e,body:{password:t},oldFormErrors:!0}).then((function(e){o.Z.dispatch({type:"MFA_SMS_TOGGLE_COMPLETE"});return e}),(function(e){o.Z.dispatch({type:"MFA_SMS_TOGGLE_COMPLETE"});throw e}))}const p={enableMFAStart:function(e){return(t=function(){return s(this,(function(t){switch(t.label){case 0:return[4,r.Z.post({url:u.ANM.MFA_TOTP_ENABLE,body:{password:e},oldFormErrors:!0})];case 1:
return[2,t.sent().body]}}))},function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(e){a(i,r,o,c,u,"next",e)}function u(e){a(i,r,o,c,u,"throw",e)}c(void 0)}))})();var t},enable:function(e){var t=e.password,n=e.code,i=e.secret;return r.Z.post({url:u.ANM.MFA_TOTP_ENABLE,body:{code:n,secret:i,password:t},oldFormErrors:!0}).then((function(e){return o.Z.dispatch({type:"MFA_ENABLE_SUCCESS",token:e.body.token,codes:e.body.backup_codes})}))},disable:function(){(0,c.Z)((function(e){return r.Z.post({url:u.ANM.MFA_TOTP_DISABLE,body:e,oldFormErrors:!0})}),{checkEnabled:!0,modalProps:{title:l.Z.Messages.TWO_FA_DISABLE,actionText:l.Z.Messages.TWO_FA_REMOVE}}).then((function(e){var t=e.body.token;return o.Z.dispatch({type:"MFA_DISABLE_SUCCESS",token:t})}))},enableSMS:function(e){return f(u.ANM.MFA_SMS_ENABLE,e)},disableSMS:function(e){return f(u.ANM.MFA_SMS_DISABLE,e)},sendMFABackupCodesVerificationKeyEmail:function(e){return r.Z.post({
url:u.ANM.MFA_SEND_VERIFICATION_KEY,body:{password:e},oldFormErrors:!0}).then((function(e){return o.Z.dispatch({type:"MFA_SEND_VERIFICATION_KEY",nonces:{viewNonce:e.body.nonce,regenerateNonce:e.body.regenerate_nonce}})}),(function(e){throw e}))},confirmViewBackupCodes:function(e,t){var n=i.Z.getNonces(),c=n.viewNonce,l=n.regenerateNonce,a=t?l:c;return r.Z.post({url:u.ANM.MFA_CODES_VERIFICATION,body:{key:e,nonce:a,regenerate:t},oldFormErrors:!0}).then((function(t){return o.Z.dispatch({type:"MFA_VIEW_BACKUP_CODES",codes:t.body.backup_codes,key:e})}),(function(e){throw e}))},clearBackupCodes:function(){o.Z.dispatch({type:"MFA_CLEAR_BACKUP_CODES"})}}},376692:(e,t,n)=>{"use strict";n.r(t);n.d(t,{default:()=>I});var r=n(785893),o=n(667294),i=n(331535),c=n(490048),u=n(7046),l=n(90522),a=n(897576),s=n(363798),f=n(97401),p=n(294184),d=n.n(p),b=n(832010),y=n(523283),h=n(240243),g=n(461061);function v(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0
}):e[t]=n;return e}function O(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||(o[n]=e[n])}return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}}return o}function w(e){var t=e.width,n=void 0===t?24:t,o=e.height,i=void 0===o?24:o,c=e.color,u=void 0===c?(0,
b.Lq)(g.Ilk.WHITE_500):c,l=e.backgroundColor,a=void 0===l?(0,b.Lq)(g.Ilk.BRAND_500):l,s=m(e,["width","height","color","backgroundColor"]);return(0,r.jsxs)("svg",O(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){v(e,t,n[t])}))}return e}({},(0,h.Z)(s)),{width:n,height:i,viewBox:"0 0 14 14",children:[(0,r.jsx)("path",{fill:a,d:"M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166"}),(0,r.jsx)("path",{d:"M6.5,10.3L3.4,8l0.9-1.2l1.8,1.4l3.3-4.3l1.2,0.9L6.5,10.3z",fill:u})]}))}var E=n(959797),S=n(581588),_=n.n(S),j=(n(174447),n(302540),function(e){
var t=e.name,n=e.description,o=e.checked,c=e.actionLabel,u=e.actionHandler,l=null;l=o?(0,r.jsx)(w,{width:20,height:20}):(0,r.jsx)(y.Z,{color:(0,b.Lq)(g.Ilk.RED_400),width:20,height:20});return(0,r.jsxs)("div",{className:_().checklistItem,children:[(0,r.jsx)("div",{className:_().checklistIcon,children:l}),(0,r.jsxs)("div",{className:d()(_().checklistText,o&&_().ineligibleRow),children:[(0,r.jsx)(i.X6,{variant:"heading-md/semibold",className:_().checklistItemName,children:t}),(0,r.jsx)(i.xv,{color:"interactive-normal",variant:"text-sm/normal",children:n})]}),null!=c&&(0,r.jsx)("div",{className:_().eligibilityActionContainer,children:(0,r.jsx)(i.zx,{className:_().eligibilityActionButton,look:i.iL.OUTLINED,color:i.Tt.PRIMARY,onClick:u,grow:!0,children:c})})]})}),A=n(864473),M=n(651962),C=n.n(M),P=n(514285),k=n.n(P);function x(){return(0,r.jsxs)("div",{className:C().eligibilityHeader,children:[(0,r.jsx)(i.X6,{className:C().eligibilityHeaderText,variant:"heading-lg/extrabold",
color:"header-primary",children:E.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_NOT_ELIGIBLE_TITLE_V2}),(0,r.jsx)("img",{className:C().eligibilityHeaderImage,src:k(),alt:""}),(0,r.jsx)(s.ol,{className:C().eligibilityHeaderCloseButton,onClick:function(){(0,a.Mr)(A.Q)}})]})}function N(e){var t=e.eligibility,n=e.eligibilityLoading,s=e.eligibilityError,p=e.guildId,d=e.onEligibilityBecameStale,b=o.useMemo((function(){return{onEligibilityBecameStale:d,sortedByIneligible:!0,actions:{onEnableMFAClick:l.Z.enableMFA,onRequireModeratorMFAClick:function(){(0,a.Mr)(A.Q);u.Z.open(p,g.pNK.MODERATION)}}}}),[p,d]),y=(0,c.Z)(t,b);return null!=s?(0,r.jsx)("div",{className:C().paddedContainer,children:(0,r.jsx)(f.Z,{children:s.message})}):null==y||n?(0,r.jsx)("div",{className:C().paddedContainer,children:(0,r.jsx)(i.$j,{})}):(0,r.jsx)("div",{children:y.map((function(e,t){return(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)(j,{name:e.checked?e.checkedLabel:e.uncheckedLabel,description:e.description,
checked:e.checked,actionLabel:e.actionLabel,actionHandler:e.actionHandler}),t<y.length-1?(0,r.jsx)(i.$i,{}):null]},e.checkedLabel)}))})}function I(e){var t=e.eligibility,n=e.eligibilityLoading,o=e.eligibilityError,i=e.refreshEligibility,c=e.guildId,u=e.transitionState;return(0,r.jsxs)(s.Y0,{className:C().eligibilityModal,size:s.Cg.MEDIUM,transitionState:u,children:[(0,r.jsx)(x,{}),(0,r.jsx)(s.hz,{children:(0,r.jsx)(N,{eligibility:t,eligibilityLoading:n,eligibilityError:o,guildId:c,onEligibilityBecameStale:i})})]})}},90522:(e,t,n)=>{"use strict";n.d(t,{Z:()=>I});var r=n(785893),o=n(667294),i=n(856864),c=n(179211),u=n(897576),l=n(461061),a=n(959797);function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t,n,r,o,i,c){try{var u=e[i](c),l=u.value}catch(e){n(e);return}u.done?t(l):Promise.resolve(l).then(r,o)}function p(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function c(e){
f(i,r,o,c,u,"next",e)}function u(e){f(i,r,o,c,u,"throw",e)}c(void 0)}))}}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return!0}catch(e){return!1}}function b(e,t,n){b=d()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));n&&w(o,n.prototype);return o};return b.apply(null,arguments)}function y(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function h(e){h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return h(e)}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){
return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){y(e,t,n[t])}))}return e}function v(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function O(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||(o[n]=e[n])}return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}}return o}function m(e,t){
return!t||"object"!==S(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e,t){w=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return w(e,t)}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],c=!0,u=!1;try{for(n=n.call(e);!(c=(r=n.next()).done);c=!0){i.push(r.value);if(t&&i.length===t)break}}catch(e){u=!0;o=e}finally{try{c||null==n.return||n.return()}finally{if(u)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){
throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var S=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function _(e){var t="function"==typeof Map?new Map:void 0;_=function(e){if(null===e||!(n=e,-1!==Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return b(e,arguments,h(this).constructor)}r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}});return w(r,e)};return _(e)}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{
Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}var A=function(e,t){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;(r=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:c.label++;return{value:i[1],done:!1};case 5:c.label++;r=i[1];i=[0];continue;case 7:i=c.ops.pop();c.trys.pop();continue;default:if(!(o=c.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){c=0;continue}
if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1];o=i;break}if(o&&c.label<o[2]){c.label=o[2];c.ops.push(i);break}o[2]&&c.ops.pop();c.trys.pop();continue}i=t.call(e,c)}catch(e){i=[6,e];r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},M=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&w(e,t)}(n,e);var t=j(n);function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);return t.call(this,null!=e?e:"Canceled")}return n}(_(Error));function C(e){var t=e.onError,n=e.onSuccess,u=e.PasswordConfirm,s=O(e,["onError","onSuccess","PasswordConfirm"]),f=E(o.useState(""),2),p=f[0],d=f[1];return(0,r.jsx)(u,v(g({},s),{handleSubmit:function(e){return c.Z.enableMFAStart(e)},
onError:function(e){if(function(e){return"object"==typeof e&&null!=e&&(0,i.nr)(e,"code")&&"number"==typeof e.code?e.code:0}(e)===l.evJ.MFA_INVALID_SECRET){n(p);s.onClose()}else t(e)},onPasswordChange:d,title:a.Z.Messages.TWO_FA_ENABLE,actionText:a.Z.Messages.CONTINUE}))}function P(){return new Promise((function(e,t){(0,u.ZD)(p((function(){var o,i;return A(this,(function(c){switch(c.label){case 0:return[4,Promise.all([n.e(40532),n.e(44133)]).then(n.bind(n,444133))];case 1:o=c.sent(),i=o.default;return[2,function(n){return(0,r.jsx)(C,v(g({},n),{onSuccess:e,onError:t,PasswordConfirm:i}))}]}}))})),{onCloseCallback:function(){t(new M)}})}))}function k(e){return new Promise((function(t,o){(0,u.ZD)(p((function(){var o,i;return A(this,(function(c){switch(c.label){case 0:return[4,Promise.all([n.e(40532),n.e(1653),n.e(35517)]).then(n.bind(n,135517))];case 1:o=c.sent(),i=o.default;return[2,function(n){return(0,r.jsx)(i,v(g({},n),{password:e,handleEnableMFASuccess:t}))}]}}))})),{
onCloseCallback:function(){o(new M)}})}))}function x(){return new Promise((function(e){(0,u.ZD)(p((function(){var e,t;return A(this,(function(o){switch(o.label){case 0:return[4,Promise.all([n.e(40532),n.e(97846),n.e(331)]).then(n.bind(n,900331))];case 1:e=o.sent(),t=e.default;return[2,function(e){return(0,r.jsx)(t,g({},e))}]}}))})),{onCloseCallback:e,onCloseRequest:l.VqG})}))}function N(){return(N=p((function(){return A(this,(function(e){switch(e.label){case 0:return[4,P()];case 1:return[4,k(e.sent())];case 2:e.sent();return[4,x()];case 3:e.sent();return[2]}}))}))).apply(this,arguments)}const I={enableMFA:function(){return N.apply(this,arguments)}}},585771:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(496486),o=n.n(r),i=n(974119),c=n(363010),u=n(173436);function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1;r.configurable=!0;"value"in r&&(r.writable=!0)
;Object.defineProperty(e,r.key,r)}}function s(e){s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return s(e)}function f(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e,t){p=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return p(e,t)}var d=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}var y=!1,h=[],g="",v={
viewNonce:"",regenerateNonce:""};var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&p(e,t)}(n,e);var t=b(n);function n(){l(this,n);return t.apply(this,arguments)}var r=n.prototype;r.getVerificationKey=function(){return g};r.getBackupCodes=function(){return h};r.getNonces=function(){return v};r.__getLocalVars=function(){return{togglingSMS:y,backupCodes:h,verificationKey:g,backupCodesNonces:v}};!function(e,t,n){t&&a(e.prototype,t);n&&a(e,n)}(n,[{key:"togglingSMS",get:function(){return y}}]);return n}(c.ZP.Store);O.displayName="MFAStore";const m=new O(u.Z,{MFA_ENABLE_SUCCESS:function(e){var t=e.token,n=e.codes;i.Z.setToken(t);h=n},MFA_DISABLE_SUCCESS:function(e){var t=e.token;i.Z.setToken(t)},MFA_SMS_TOGGLE:function(){y=!0},MFA_SMS_TOGGLE_COMPLETE:function(){y=!1},MFA_CLEAR_BACKUP_CODES:function(){h=[]},
MFA_VIEW_BACKUP_CODES:function(e){var t=e.codes,n=e.key;h=o().sortBy(t,"code");g=n},MFA_SEND_VERIFICATION_KEY:function(e){var t=e.nonces;v=t}})}}]);
//# sourceMappingURL=1fac7e90e211279376f8.js.map