"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[56050],{395951:(t,e,n)=>{n.d(e,{FD:()=>y,Zy:()=>b,ss:()=>v,S2:()=>N,Mn:()=>g,ol:()=>A,V3:()=>m,I5:()=>C,OZ:()=>U,cV:()=>I,b9:()=>P,si:()=>R,W3:()=>w,P6:()=>j,_V:()=>D});var r=n(675860),o=n(444450),i=n(338093),u=n(173436),c=n(655695),a=n(932847),s=n(917870),l=n(301513),f=n(742269),p=n(461061),S=n(959797);function d(t,e,n,r,o,i,u){try{var c=t[i](u),a=c.value}catch(t){n(t);return}c.done?e(a):Promise.resolve(a).then(r,o)}function O(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function u(t){d(i,r,o,u,c,"next",t)}function c(t){d(i,r,o,u,c,"throw",t)}u(void 0)}))}}function _(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n;return t}function T(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n)
;"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))));r.forEach((function(e){_(t,e,n[e])}))}return t}var E=function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;(r=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:u.label++;return{value:i[1],done:!1};case 5:u.label++;r=i[1];i=[0];continue;case 7:i=u.ops.pop();u.trys.pop();continue;default:if(!(o=u.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}
if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1];o=i;break}if(o&&u.label<o[2]){u.label=o[2];u.ops.push(i);break}o[2]&&u.ops.pop();u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t];r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};function y(){u.Z.dispatch({type:"USER_SETTINGS_ACCOUNT_INIT"})}function b(){u.Z.dispatch({type:"USER_SETTINGS_ACCOUNT_CLOSE"})}function v(t,e){var n=e?S.Z.Messages.DELETE_ACCOUNT:S.Z.Messages.DISABLE_ACCOUNT,o=e?p.ANM.DELETE_ACCOUNT:p.ANM.DISABLE_ACCOUNT;return(0,l.Z)((function(e){return r.Z.post({url:o,body:T({password:t},e),oldFormErrors:!0})}),{modalProps:{title:n},checkEnabled:!1}).then((function(){u.Z.dispatch({type:"LOGOUT"});(0,c.uL)(p.Z5c.DEFAULT_LOGGED_OUT)}))}function N(t){return h.apply(this,arguments)}function h(){return(h=O((function(t){var e,n,o;return E(this,(function(i){switch(i.label){case 0:return[4,r.Z.patch({url:p.ANM.ME,body:t,oldFormErrors:!0})]
;case 1:e=i.sent();if((n=e.body).token){o=n.token;delete n.token;u.Z.dispatch({type:"UPDATE_TOKEN",token:o,userId:n.id});null!=(null==t?void 0:t.password)&&null!=(null==t?void 0:t.new_password)&&u.Z.dispatch({type:"PASSWORD_UPDATED",userId:n.id})}u.Z.dispatch({type:"CURRENT_USER_UPDATE",user:n});return[2,e]}}))}))).apply(this,arguments)}function g(t){var e=t.username,n=t.discriminator,r=t.email,i=t.emailToken,c=t.password,d=t.avatar,O=t.avatarDecoration,_=t.newPassword,E=t.displayName;u.Z.dispatch({type:"USER_SETTINGS_ACCOUNT_SUBMIT"});return(0,l.Z)((function(t){var u=T({username:e,email:r,email_token:i,password:c,avatar:d,discriminator:n,display_name:E,new_password:_},t);void 0!==O&&(null==O?u.avatar_decoration_preset=null:O.isCustom?u.avatar_decoration=O.data:u.avatar_decoration_preset=O.name);var a=o.Z.get(p.JkL),s=(0,f.xJ)();if(null!=s&&null!=a){u.push_provider=s;u.push_token=a}var l=o.Z.get(p.scU);if(null!=p.mvA&&null!=l){u.push_voip_provider=p.mvA;u.push_voip_token=l}return N(u)
}),{checkEnabled:!1,modalProps:{title:S.Z.Messages.TWO_FA_CHANGE_ACCOUNT},hooks:{onEarlyClose:function(){return u.Z.dispatch({type:"USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",errors:{}})}}}).then((function(t){var e=t.body;a.default.track(p.rMx.USER_AVATAR_UPDATED,{animated:(0,s.xR)(e.avatar)});u.Z.dispatch({type:"USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"});return t}),(function(t){u.Z.dispatch({type:"USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",errors:t.body});return t}))}function A(){return r.Z.get({url:p.ANM.USER_HARVEST,oldFormErrors:!0})}function m(){return r.Z.post({url:p.ANM.USER_HARVEST,oldFormErrors:!0})}function C(t){u.Z.dispatch({type:"USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",avatar:t});null==t?i.uv.announce(S.Z.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE):i.uv.announce(S.Z.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)}function U(t){u.Z.dispatch({type:"USER_SETTINGS_ACCOUNT_SET_PENDING_DISPLAY_NAME",displayName:t})}function I(t){u.Z.dispatch({
type:"USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",avatarDecoration:t})}function P(){u.Z.dispatch({type:"USER_SETTINGS_CLEAR_ERRORS"})}function R(){u.Z.dispatch({type:"USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"})}function w(){u.Z.dispatch({type:"USER_SETTINGS_RESET_ALL_PENDING"})}function j(){u.Z.dispatch({type:"USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"})}function D(t){u.Z.dispatch({type:"USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",disable:t})}},429244:(t,e,n)=>{n.d(e,{P:()=>u});var r=n(112712),o=n(911324),i=n(959797);function u(){(0,o.CF)((0,r.Yz)(i.Z.Messages.USER_SETTINGS_UPDATE_FAILURE,r.pC.FAILURE))}},493925:(t,e,n)=>{n.d(e,{Z:()=>j});var r=n(363010),o=n(173436),i=n(461061);function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t){c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)};return c(t)}function a(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?function(t){
if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t,e){s=Object.setPrototypeOf||function(t,e){t.__proto__=e;return t};return s(t,e)}var l=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}var p,S,d,O,_,T,E,y,b,v,N,h=i.QZA.CLOSED,g={},A=!1;function m(){h=i.QZA.OPEN;g={}}function C(){h=i.QZA.CLOSED;g={}}function U(){I();P();g={}}function I(){p=void 0;S=void 0;d=void 0}function P(){O=void 0;_=void 0;T=void 0;E=void 0;y=void 0}function R(){v=void 0;N=void 0
;b=void 0}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}});e&&s(t,e)}(n,t);var e=f(n);function n(){u(this,n);return e.apply(this,arguments)}var r=n.prototype;r.getFormState=function(){return h};r.getErrors=function(){return g};r.showNotice=function(){return void 0!==p||void 0!==O||void 0!==_||void 0!==T||void 0!==E||void 0!==y||void 0!==d||void 0!==S};r.getPendingAvatar=function(){return p};r.getPendingDisplayName=function(){return S};r.getPendingBanner=function(){return O};r.getPendingBio=function(){return _};r.getPendingPronouns=function(){return T};r.getPendingAccentColor=function(){return E};r.getPendingThemeColors=function(){return y};r.getPendingAvatarDecoration=function(){return d};r.getAllPending=function(){return{pendingAvatar:p,pendingBanner:O,pendingBio:_,pendingPronouns:T,
pendingAccentColor:E,pendingThemeColors:y,pendingAvatarDecoration:d,pendingDisplayName:S}};r.getTryItOutThemeColors=function(){return b};r.getTryItOutAvatar=function(){return v};r.getTryItOutBanner=function(){return N};r.getAllTryItOut=function(){return{tryItOutThemeColors:b,tryItOutAvatar:v,tryItOutBanner:N}};r.getIsDisableSubmit=function(){return A};r.__getLocalVars=function(){return{formState:h,errors:g,pendingAvatar:p,pendingDisplayName:S,pendingAvatarDecoration:d,pendingBanner:O,pendingBio:_,pendingPronouns:T,pendingAccentColor:E,pendingThemeColors:y,disableSubmit:A,tryItOutThemeColors:b,tryItOutAvatar:v,tryItOutBanner:N}};return n}(r.ZP.Store);w.displayName="UserSettingsAccountStore";const j=new w(o.Z,{USER_SETTINGS_ACCOUNT_INIT:m,USER_SETTINGS_MODAL_INIT:m,USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS:m,USER_SETTINGS_MODAL_SET_SECTION:function(t){return t.section===i.oAB.ACCOUNT&&m()},USER_SETTINGS_ACCOUNT_CLOSE:C,USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM:function(){U();R();C()},
USER_SETTINGS_ACCOUNT_SUBMIT:function(){h=i.QZA.SUBMITTING;g={}},USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE:function(t){if(h!==i.QZA.SUBMITTING)return!1;h=i.QZA.OPEN;var e;g=null!==(e=t.errors)&&void 0!==e?e:{}},USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR:function(t){var e=t.avatar;p=e;v=void 0},USER_SETTINGS_ACCOUNT_SET_PENDING_DISPLAY_NAME:function(t){var e=t.displayName;S=e},USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION:function(t){var e=t.avatarDecoration;d=e},USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER:function(t){var e=t.banner;O=e},USER_SETTINGS_ACCOUNT_SET_PENDING_BIO:function(t){var e=t.bio;_=e},USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS:function(t){var e=t.pronouns;T=e},USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR:function(t){var e=t.color;E=e},USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS:function(t){var e=t.themeColors;y=e},USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR:function(t){var e=t.avatar;v=e},USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER:function(t){var e=t.banner;N=e},
USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS:function(t){var e=t.themeColors;b=e},USER_SETTINGS_CLEAR_ERRORS:function(){g={}},USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES:I,USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES:P,USER_SETTINGS_RESET_ALL_PENDING:U,USER_SETTINGS_RESET_ALL_TRY_IT_OUT:R,LOGOUT:function(){p=void 0},USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT:function(t){var e=t.disable;A=e}})},954766:(t,e,n)=>{n.d(e,{Mi:()=>b,My:()=>v});var r=n(785893),o=n(667294),i=n(248088),u=n(506884),c=n(606076),a=n(665232),s=n(39802),l=n(64833),f=n(404239),p=n(160036),S=n(559159);function d(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n;return t}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))))
;r.forEach((function(e){d(t,e,n[e])}))}return t}function _(t,e){e=null!=e?e:{};Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})));n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}));return t}function T(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++){n=i[r];e.indexOf(n)>=0||(o[n]=t[n])}return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++){n=i[r];e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}}return o}var E={mass:1,tension:300,friction:28,clamp:!0};function y(t,e){return function(n){if(0===n)return"auto"
;var r="forwards"===e.current,o=n>0,i=!1;o&&r&&"left"===t&&(i=!0);o&&!r&&"right"===t&&(i=!0);!o&&r&&"right"===t&&(i=!0);o||r||"left"!==t||(i=!0);return i?"".concat(100*Math.abs(n),"%"):"auto"}}function b(t){return null}function v(t){var e=t.contentDisplay,n=T(t,["contentDisplay"]),d={},b=(0,l.Z)().analyticsLocations;o.Children.forEach(n.children,(function(t,e){d[t.props.id]={children:t.props.children,impressionName:t.props.impressionName,impressionProperties:t.props.impressionProperties,index:e}}));var v,N,h=n.activeSlide,g=(0,a.Z)(n.activeSlide),A=(v=null!=g?d[g]:null,N=d[h],null==v?null:v.index>N.index?"backwards":v.index<N.index?"forwards":null),m=o.useContext(s.S).reducedMotion,C=o.useContext(f.Z),U=d[h].impressionName,I=_(O({},d[h].impressionProperties),{location_stack:b});C({type:u.nv.MODAL,name:U,properties:I,_stackContext:{isSlide:!0}});var P,R=o.useRef(null),w=(0,S.Z)(R,!0,[h]),j=O({},E,n.springConfig,m.enabled?{clamp:!0}:null),D=(0,i.useSpring)({
immediate:null==g||null!=w&&w.observed,width:null!==(P=n.width)&&void 0!==P?P:null!=w?w.width:0,height:null!=w?w.height:0,config:j}),G=(0,i.useTransition)(h,{immediate:null==g,value:0,from:{value:1},enter:{value:0},leave:{value:-1},config:j,onRest:function(t,e){var r=e.item;r===h&&null!=n.onSlideReady&&n.onSlideReady(r)}}),L=(0,p.Z)(A),Z=n.width,M=n.centered,x=void 0===M||M,k=c.tq?"100%":D.width.to((function(t){return Math.round(t)})),B=c.tq?"100%":D.height.to((function(t){return Math.round(t)})),F=c.tq?{}:x?{transform:"translate3d(0, -50%, 0) scale(1.0, 1.0)",top:"50%"}:{transform:"scale(1.0, 1.0)"},V=c.tq?{}:{overflow:"hidden"};return(0,r.jsx)(i.animated.div,{style:O({position:"relative",width:k,height:B},V),children:G((function(t,n,o){var u=o.key;return(0,r.jsx)(i.animated.div,{ref:n===h?R:null,style:O({position:"absolute",display:e,flexDirection:"column",backfaceVisibility:"hidden",width:c.tq?"100%":Z},F,m.enabled?{opacity:t.value.to((function(t){return 1-Math.abs(t)}))}:{
left:t.value.to(y("left",L)),right:t.value.to(y("right",L))}),children:d[n].children},u)}))})}},112712:(t,e,n)=>{n.d(e,{pC:()=>T.pC,Yz:()=>v,ZP:()=>N});var r=n(785893),o=n(667294),i=n(468811),u=n.n(i),c=n(331535),a=n(240243);function s(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n;return t}function l(t,e){e=null!=e?e:{};Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})));n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}));return t}function f(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++){n=i[r];e.indexOf(n)>=0||(o[n]=t[n])}return o}(t,e)
;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++){n=i[r];e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}}return o}function p(t){var e=t.width,n=void 0===e?24:e,o=t.height,i=void 0===o?24:o,u=f(t,["width","height"]);return(0,r.jsx)("svg",l(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))));r.forEach((function(e){s(t,e,n[e])}))}return t}({},(0,a.Z)(u)),{width:n,height:i,viewBox:"0 0 24 24",children:(0,r.jsx)("path",{fill:"#ED4245",d:"M18.4 1.879L22.121 5.6l-6.4 6.4 6.4 6.4-3.721 3.721-6.4-6.4-6.4 6.4L1.879 18.4l6.4-6.4-6.4-6.4L5.6 1.879l6.4 6.4 6.4-6.4z"})}))}function S(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n;return t}
function d(t,e){e=null!=e?e:{};Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})));n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}));return t}function O(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++){n=i[r];e.indexOf(n)>=0||(o[n]=t[n])}return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++){n=i[r];e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}}return o}function _(t){var e=t.width,n=void 0===e?24:e,o=t.height,i=void 0===o?24:o,u=t.className,c=O(t,["width","height","className"]);return(0,r.jsx)("svg",d(function(t){
for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))));r.forEach((function(e){S(t,e,n[e])}))}return t}({className:u,width:n,height:i,viewBox:"0 0 24 24",fill:"none"},(0,a.Z)(c)),{children:(0,r.jsx)("path",{fill:"#3BA55C",d:"M9.00043 14.0492L19.5904 3.46924L23.1212 7.00006L8.99993 21.1214L1.28485 13.4063L4.83367 9.88248L9.00043 14.0492Z"})}))}var T=n(441640),E=n(167753),y=n.n(E),b=function(t){switch(t){case T.pC.SUCCESS:return(0,r.jsx)(_,{className:y().icon});case T.pC.FAILURE:return(0,r.jsx)(p,{className:y().icon});default:return null}},v=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:T.si,r=n.position,o=void 0===r?T.si.position:r,i=n.component,c=void 0===i?T.si.component:i,a=n.duration,s=void 0===a?T.si.duration:a;return{message:t,id:u().v4(),
type:e,options:{position:o,component:c,duration:s}}};const N=o.memo((function(t){var e=t.message,n=t.type,o=t.id,i=t.options,u=(void 0===i?T.si:i).component,a=void 0===u?T.si.component:u;return null!=a?(0,r.jsx)(r.Fragment,{children:a}):(0,r.jsxs)("div",{id:o,className:y().toast,children:[b(n),(0,r.jsx)(c.xv,{className:y().content,color:"header-primary",variant:"text-md/normal",children:e})]})}))},911324:(t,e,n)=>{n.d(e,{Es:()=>c,CF:()=>a,z5:()=>s});function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n;return t}function i(t,e){e=null!=e?e:{};Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))
;n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}));return t}function u(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=(0,n(185253).Z)((function(){return{currentToast:null,queuedToasts:[]}}));function a(t){c.setState((function(e){return null!=e.currentToast?i(function(t){for(var e=1;e<arguments.length;e++){
var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))));r.forEach((function(e){o(t,e,n[e])}))}return t}({},e),{queuedToasts:u(e.queuedToasts).concat([t])}):{currentToast:t,queuedToasts:[]}}))}function s(){c.setState((function(t){var e=t.queuedToasts;return e.length>0?{currentToast:e[0],queuedToasts:e.slice(1)}:{currentToast:null,queuedToasts:[]}}))}},441640:(t,e,n)=>{n.d(e,{pC:()=>r,az:()=>o,si:()=>i});var r,o;!function(t){t[t.MESSAGE=0]="MESSAGE";t[t.SUCCESS=1]="SUCCESS";t[t.FAILURE=2]="FAILURE";t[t.CUSTOM=3]="CUSTOM"}(r||(r={}));!function(t){t[t.TOP=0]="TOP";t[t.BOTTOM=1]="BOTTOM"}(o||(o={}));var i={position:o.TOP,component:null,duration:3e3}}}]);
//# sourceMappingURL=65683272b9e16b71e375.js.map