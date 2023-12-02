(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{1487:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=h();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r(1)),o=v(r(5)),i=v(r(1479)),l=r(135),u=v(r(1548)),s=v(r(423)),d=v(r(182)),f=r(74),c=r(18),p=v(r(1301));function v(e){return e&&e.__esModule?e:{default:e}}function h(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return h=function(){return e},e}function y(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var l=new Array(i),u=0;u<i;u++)l[u]=arguments[u+3];t.children=l}if(t&&o)for(var s in o)void 0===t[s]&&(t[s]=o[s]);else t||(t=o||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var g={CIRCLE:p.default.circle,SQUARE:p.default.square},m=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).state={error:null},t.handleFileChange=function(e){e.stopPropagation(),e.preventDefault();var r=e.target.files[0],n=t.props,a=n.size,o=n.minSize,i=n.onChange,l=n.fieldName;if(null!=r){var s=new FileReader;s.onload=function(e){var r=new Image;r.src=e.target.result,r.onload=function(){if(null!=o&&(r.width<o||r.height<o))t.setState({error:c.Messages.AvatarUploader.MINIMUM_SIZE.format({size:o})});else{null!=t.state.error&&t.setState({error:null});var e=document.createElement("canvas");e.width=r.width,e.height=r.height,e.getContext("2d").drawImage(r,0,0,e.width,e.height);var n=r.width<r.height?r.width/a:r.height/a,s=document.createElement("canvas");s.width=r.width/n,s.height=r.height/n,u.default.resizeCanvas(e,s,{alpha:!0},function(){var e=document.createElement("canvas");e.width=a,e.height=a;var t=(s.width-e.width)/-2,r=(s.height-e.height)/-2;e.getContext("2d").drawImage(s,t,r,s.width,s.height),i(e.toDataURL("image/png"),l)})}}},s.readAsDataURL(r)}},t.handleRemove=function(){var e=t.props,r=e.fieldName;(0,e.onChange)(null,r)},t}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=n.prototype;return a.renderRemoveButton=function(){var e=this.props,t=e.disableRemoveAction,r=e.disabled,n=e.size,a=e.avatar,o=this.state.error;return t?null:r?y("small",{className:p.default.removeButtonSmall},void 0,c.Messages.AvatarUploader.SIZE.format({size:n})):null!=o?y("small",{className:p.default.removeButtonSmallError},void 0,o):null!=a?y(s.default,{className:p.default.removeButton,onClick:this.handleRemove},void 0,c.Messages.AvatarUploader.REMOVE):y("small",{className:(0,f.getClass)(p.default,"removeButtonSmall",null!=o?"Error":null)},void 0,c.Messages.AvatarUploader.SIZE.format({size:n}))},a.render=function(){var e,t,r,n,a=this.props,u=a.avatar,s=a.hint,f=a.name,v=a.makeURL,h=a.hasBorder,g=a.shape;return(t=null!=u&&/^data:/.test(u)?u:v(u))?r='url("'+t+'")':n=y("div",{className:p.default.acronym},void 0,(0,l.getAcronym)(f)),y("div",{className:(0,o.default)(p.default.avatarUploader,(e={},e[p.default.border]=h,e))},void 0,y("div",{className:(0,o.default)(p.default.avatarUploaderInner,g),style:{backgroundImage:r}},void 0,y("div",{className:p.default.addPhotoWrapper},void 0,y(d.default,{className:p.default.addPhotoIcon,name:d.default.Names.ADD_PHOTO})),n,y("div",{className:p.default.hint},void 0,s),y(i.default,{onChange:this.handleFileChange,filters:[{name:c.Messages.AvatarUploader.IMAGES,extensions:["jpg","jpeg","png"]}]})),this.renderRemoveButton())},n}(a.PureComponent);t.default=m,m.displayName="AvatarUploader",m.Shape=g,m.defaultProps={disableRemoveAction:!1,name:"",size:64,makeURL:function(e){return e},hint:c.Messages.AvatarUploader.SELECT_IMAGE,disabled:!1,hasBorder:!1,shape:g.CIRCLE}},1516:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;!function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}r.default=e,t&&t.set(e,r)}(r(1));var n,a=l(r(5)),o=r(74),i=l(r(1308));function l(e){return e&&e.__esModule?e:{default:e}}function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function s(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var l=new Array(i),u=0;u<i;u++)l[u]=arguments[u+3];t.children=l}if(t&&o)for(var s in o)void 0===t[s]&&(t[s]=o[s]);else t||(t=o||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var f={DEFAULT:i.default.themeDefault,CLEAR:i.default.themeClear},c={DEFAULT:i.default.sizeDefault,MINI:i.default.sizeMini},p="enabled",v="disabled",h=function(e){var t=e.id,r=e.onChange,n=e.value,l=e.defaultValue,u=e.fill,h=e.theme,y=void 0===h?f.DEFAULT:h,g=e.disabled,m=e.className,_=e.size,O=void 0===_?c.DEFAULT:_,A=e.style,b=e.name,E=g?v:p;return null!=u&&n&&(A=d({},A,{backgroundColor:u})),s("div",{className:(0,a.default)(m,(0,o.getClass)(i.default,"switch",E),O,y),style:A},void 0,s("input",{id:t,className:(0,a.default)(i.default.input,(0,o.getClass)(i.default,"checkbox",E)),type:"checkbox",disabled:g,onChange:r,checked:n,defaultChecked:l,name:b}),s("div",{className:i.default.indicator}))};h.displayName="Switch",h.Themes=f,h.Sizes=c;var y=h;t.default=y},1549:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r(1)),i=r(18),l=(n=r(1315))&&n.__esModule?n:{default:n};function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function s(e,t,r,n){a||(a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=n;else if(i>1){for(var l=new Array(i),u=0;u<i;u++)l[u]=arguments[u+3];t.children=l}if(t&&o)for(var s in o)void 0===t[s]&&(t[s]=o[s]);else t||(t=o||{});return{$$typeof:a,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var d=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).state={isRevealed:!1},t.handleRevealClick=function(){t.setState({isRevealed:!0})},t}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this.state.isRevealed,t=this.props,r=t.children,n=t.revealActionContent;return e?r:s("button",{className:l.default.button,onClick:this.handleRevealClick,type:"button"},void 0,n)},n}(o.Component);t.default=d,d.displayName="ClickToReveal",d.defaultProps={revealActionContent:i.Messages.Actions.CLICK_TO_REVEAL}},1580:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=c(r(1)),o=d(r(56)),i=d(r(29)),l=c(r(188)),u=r(18),s=d(r(432));function d(e){return e&&e.__esModule?e:{default:e}}function f(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function c(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}function p(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var l=new Array(i),u=0;u<i;u++)l[u]=arguments[u+3];t.children=l}if(t&&o)for(var s in o)void 0===t[s]&&(t[s]=o[s]);else t||(t=o||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var v=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).onConfirm=function(){(0,t.props.onConfirm)(!0)},t}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this.props,t=e.label,r=e.open,n=e.message,a=e.confirmText,u=e.cancelText,d=e.submitting,f=e.onCancel;return p(l.default,{onRequestClose:f,open:r},void 0,p(l.ModalContent,{},void 0,p(l.ModalHeader,{},void 0,t),p(i.default,{},void 0,n)),p(l.ModalFooter,{},void 0,p(l.ModalCancel,{onClick:f},void 0,u),p(o.default,{className:s.default.modalFooterButton,submitting:d,onClick:this.onConfirm,type:"button"},void 0,a)))},n}(a.PureComponent);t.default=v,v.displayName="ConfirmModal",v.defaultProps={open:!1,label:u.Messages.DeveloperPages.DEFAULT_CONFIRM_TITLE,message:u.Messages.DeveloperPages.DEFAULT_CONFIRM_MSG,confirmText:u.Messages.DeveloperPages.CONFIRM_BUTTON,cancelText:u.Messages.DeveloperPages.CANCEL_BUTTON}},1581:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toSnakeCase=function(e){var t={};return Object.keys(e).forEach(function(r){var n=r.replace(/([A-Z]+|[0-9])/g,function(e){return"_"+e.toLowerCase()});t[n]=e[r]}),t},t.setSelectionRange=t.getSelectionPosition=void 0;t.getSelectionPosition=function(e){if(null!=e.selectionStart)return{selectionEnd:e.selectionEnd,selectionStart:e.selectionStart};var t=e.value.length;return{selectionEnd:t,selectionStart:t}};t.setSelectionRange=function(e,t){var r=t.selectionEnd,n=t.selectionStart;e.focus(),e.selectionStart=n,e.selectionEnd=r}},1685:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=O(r(1)),o=m(r(12)),i=m(r(128)),l=O(r(127)),u=O(r(56)),s=m(r(58)),d=m(r(1417)),f=m(r(412)),c=m(r(410)),p=m(r(413)),v=m(r(2221)),h=r(3),y=r(18),g=m(r(1345));function m(e){return e&&e.__esModule?e:{default:e}}function _(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return _=function(){return e},e}function O(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}function A(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var l=new Array(i),u=0;u<i;u++)l[u]=arguments[u+3];t.children=l}if(t&&o)for(var s in o)void 0===t[s]&&(t[s]=o[s]);else t||(t=o||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var b=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).state={error:null,success:null},t.renderAlert=function(){var e=t.state,r=e.error,n=e.success;return null!=r?A(d.default,{type:d.default.Types.ERROR},void 0,r):null!=n?A(d.default,{type:d.default.Types.SUCCESS},void 0,n):void 0},t.setMessage=function(e){var r=e.error,n=e.success;t.setState({error:r,success:n})},t.handleApplicationVerification=function(){var e=t.props.application;s.default.transitionTo(h.Routes.APPLICATION_VERIFICATION(e.id))},t}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var o=n.prototype;return o.renderIdentityVerificationAlert=function(){var e=this.props.application;return[h.ApplicationVerificationStates.UNSUBMITTED,h.ApplicationVerificationStates.SUBMITTED].includes(e.verification_state)?e.verification_state===h.ApplicationVerificationStates.SUBMITTED?A(l.default,{type:l.AlertTypes.INFO,heading:y.Messages.Verification.ALERT_SUBMITTED_HEADING},void 0,y.Messages.Verification.ALERT_SUBMITTED_BODY):A(l.default,{type:l.AlertTypes.WARNING,heading:y.Messages.Verification.ALERT_REQUIRED_HEADING},void 0,A("div",{},void 0,y.Messages.Verification.ALERT_REQUIRED_BODY.format({url:h.Links.APPLICATION_VERIFICATION_SUPPORT})),A(u.default,{onClick:this.handleApplicationVerification,height:u.ButtonHeight.SHORT,color:u.ButtonColor.WHITE,className:g.default.verificationCTAButton},void 0,y.Messages.Verification.ALERT_REQUIRED_CTA)):null},o.render=function(){var e=this.props.application;return A(a.Fragment,{},void 0,A(c.default,{},void 0,A(f.default,{},void 0,y.Messages.Bot.HEADING),A(p.default,{},void 0,y.Messages.Bot.SUBHEADING),A("p",{},void 0,y.Messages.Bot.SUBHEADING_LINK.format({link:s.default.prependBasename(h.Routes.DOCS_TOPICS_OAUTH2_BOTS)})),this.renderIdentityVerificationAlert(),this.renderAlert()),A(v.default,{application:e,renderAlert:this.setMessage}))},n}(a.Component);b.displayName="Bots";var E=o.default.connectStores([i.default],function(e){var t=e.match.params.id;return{application:i.default.getApplication(t)}})(b);t.default=E},1686:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.generateUID=function(){var e=1,t=new WeakMap,r=function(n){return"number"==typeof n||"string"==typeof n?"not-uid"+String(n):t.has(n)?"uid"+t.get(n):(t.set(n,e++),r(n))};return r}},2221:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=E(r(1)),o=A(r(50)),i=E(r(129)),l=A(r(56)),u=A(r(40)),s=E(r(408)),d=A(r(1429)),f=r(1581),c=A(r(1580)),p=A(r(410)),v=A(r(415)),h=A(r(1425)),y=E(r(2222)),g=A(r(1687)),m=r(3),_=r(18),O=A(r(1344));function A(e){return e&&e.__esModule?e:{default:e}}function b(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return b=function(){return e},e}function E(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=b();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}function S(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var l=new Array(i),u=0;u<i;u++)l[u]=arguments[u+3];t.children=l}if(t&&o)for(var s in o)void 0===t[s]&&(t[s]=o[s]);else t||(t=o||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var M=S(g.default,{showInteger:!0}),T=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).state={showBuilder:null!=t.props.application.bot,showAddBotModal:!1,showTokenModal:!1,generatingToken:!1,addingBot:!1},t.handleAddBot=function(){var e=t.props,r=e.application,n=e.renderAlert;t.setState({addingBot:!0}),i.createBot(r.id).then(function(){t.setState({showBuilder:!0,showAddBotModal:!1,addingBot:!1}),n({success:_.Messages.Bot.BOT_CREATE_SUCCESS,error:null})}).catch(function(e){n({error:e.message}),t.setState({showAddBotModal:!1,addingBot:!1})})},t.handleGenerateToken=function(){var e=t.props,r=e.application,n=e.renderAlert;t.setState({generatingToken:!0}),i.generateToken(r.id).then(function(){n({success:_.Messages.Common.TOKEN_GENERATE_SUCCESS,error:null}),t.setState({showTokenModal:!1,generatingToken:!1})}).catch(function(e){n({error:e.message}),t.setState({showTokenModal:!1,generatingToken:!1})})},t.handleUpdateBot=function(e){var r=t.props,n=r.application,a=r.renderAlert;if(null==n.bot)return Promise.resolve(null);var l=n.bot.token,u=o.default.pick(e,o.default.values(y.AppFields)),s=o.default.pick(e,o.default.values(y.BotFields));return t.setState({addingBot:!0}),Promise.all([i.updateApplication(n.id,(0,f.toSnakeCase)(u)),i.updateBot(n.id,l,s)]).then(function(){a({success:_.Messages.Bot.UPDATE_BOT_SUCCESS,error:null})}).catch(function(e){return a({error:e.message})})},t.toggleAddBotModal=function(){t.setState(function(e){return{showAddBotModal:!e.showAddBotModal}})},t.toggleOpenTokenModal=function(){t.setState(function(e){return{showTokenModal:!e.showTokenModal}})},t.renderBuilder=function(){var e=t.props.application,r=t.state.showBuilder,n=r?null:S(l.default,{onClick:t.toggleAddBotModal,className:O.default.addButton},void 0,_.Messages.Bot.ADD_BOT);return S(p.default,{},void 0,S(u.default,{direction:u.default.Direction.HORIZONTAL,align:u.default.Align.CENTER,justify:u.default.Justify.BETWEEN,wrap:u.default.Wrap.NO_WRAP},void 0,S("div",{},void 0,S(v.default,{},void 0,_.Messages.Bot.BUILD),S(h.default,{},void 0,_.Messages.Bot.CREATE_BOT)),n),r&&null!=e.bot?S(y.default,{application:e,openTokenModal:t.toggleOpenTokenModal,updateBot:t.handleUpdateBot}):S("img",{alt:_.Messages.Bot.BOT_IMG_ALT,src:m.Images.BOT_ROBOILLO,className:O.default.botFriend}))},t.renderPermissionsCalculator=function(){return t.state.showBuilder?S(p.default,{isFlush:!0},void 0,S(s.default,{},void 0,S(s.GridSection,{},void 0,S(s.GridChild,{columnSpread:12},void 0,S(d.default,{},void 0,S(v.default,{},void 0,_.Messages.Bot.PERMISSIONS_HEADING),S(h.default,{},void 0,_.Messages.Bot.PERMISSIONS_SUBHEADING),M))))):null},t}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this.state,t=e.showAddBotModal,r=e.showTokenModal,n=e.generatingToken,o=e.addingBot;return S(a.Fragment,{},void 0,this.renderBuilder(),this.renderPermissionsCalculator(),S(c.default,{open:r,onCancel:this.toggleOpenTokenModal,onConfirm:this.handleGenerateToken,submitting:n,label:_.Messages.Bot.BOT_TOKEN_GENERATE_MODAL_LABEL,message:_.Messages.Bot.BOT_TOKEN_GENERATE_MODAL_DESCRIPTION}),S(c.default,{open:t,onCancel:this.toggleAddBotModal,onConfirm:this.handleAddBot,submitting:o,label:_.Messages.Bot.BOT_CREATE_MODAL_LABEL,message:_.Messages.Bot.BOT_CREATE_MODAL_DESCRIPTION}))},n}(a.Component);t.default=T,T.displayName="BotBuilder"},2222:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AppFields=t.BotFields=void 0;var n,a=N(r(1)),o=r(73),i=I(r(56)),l=I(r(40)),u=N(r(408)),s=I(r(1429)),d=I(r(2223)),f=I(r(29)),c=I(r(411)),p=r(130),v=r(132),h=r(194),y=I(r(58)),g=I(r(1487)),m=I(r(1549)),_=I(r(1472)),O=I(r(414)),A=I(r(409)),b=I(r(415)),E=I(r(1425)),S=I(r(416)),M=r(3),T=r(18),C=I(r(1343));function I(e){return e&&e.__esModule?e:{default:e}}function P(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return P=function(){return e},e}function N(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=P();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}function B(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var l=new Array(i),u=0;u<i;u++)l[u]=arguments[u+3];t.children=l}if(t&&o)for(var s in o)void 0===t[s]&&(t[s]=o[s]);else t||(t=o||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var w={USERNAME:"username",AVATAR:"avatar"};t.BotFields=w;var D={BOT_PUBLIC:"botPublic",BOT_REQUIRE_CODE_GRANT:"botRequireCodeGrant",FLAGS:"flags"};t.AppFields=D;var U=function(e){return{avatar:null!=e.application.bot?(0,v.getUserAvatarURL)(e.application.bot,p.Sizes.MEDIUM_LARGE):null,username:null!=e.application.bot?e.application.bot.username:null,hasUnsavedChanges:!1,botPublic:e.application.bot_public,botRequireCodeGrant:e.application.bot_require_code_grant,flags:e.application.flags,isAvatarDefined:null!=e.application.bot&&null!=e.application.bot.avatar,isSubmitting:!1,isRegenerating:!1,isFocused:!1}},j=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).state=U(t.props),t.handleBotAvatarChange=function(e){t.setState(function(t,r){var n=null==r.application.bot?0:r.application.bot.discriminator;return{avatar:null!=e?e:(0,v.getDefaultAvatar)(Number(n)),hasUnsavedChanges:!0,isAvatarDefined:null!=e}})},t.handleChange=function(e,r){var n;null!=r&&t.setState(((n={})[r]=e,n.hasUnsavedChanges=!0,n))},t.handleFlagsChange=function(e,r){var n=t.state.flags;t.setState({flags:e?(0,h.addFlag)(n,r):(0,h.removeFlag)(n,r),hasUnsavedChanges:!0})},t.handleGatewayPresenceLimitedFlagChange=function(e){t.handleFlagsChange(e,M.ApplicationFlags.GATEWAY_PRESENCE_LIMITED)},t.handleGatewayGuildMembersLimitedFlagChange=function(e){t.handleFlagsChange(e,M.ApplicationFlags.GATEWAY_GUILD_MEMBERS_LIMITED)},t.onSubmit=function(e){var r=t.props.updateBot,n=t.state.flags;t.setState({isSubmitting:!0}),r(R({},e,{flags:n})).then(function(){t.setState({isSubmitting:!1,hasUnsavedChanges:!1})})},t.handleFocusAndBlur=function(){t.setState(function(e){return{isFocused:!e.isFocused}})},t.handleFormReset=function(){t.setState(U(t.props))},t}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this.props,t=e.application,r=e.openTokenModal,n=this.state,a=n.botPublic,o=n.botRequireCodeGrant,p=n.hasUnsavedChanges,v=n.isAvatarDefined,I=n.isSubmitting,P=n.isRegenerating,N=n.avatar,R=n.username,U=n.isFocused,j=n.flags,L=t.bot;return null==L?null:B(O.default,{onSubmit:this.onSubmit},void 0,B(u.default,{},void 0,B(u.GridSection,{},void 0,B(u.GridChild,{columnSpread:3,className:C.default.avatarUploader},void 0,B(A.default,{},void 0,T.Messages.Bot.BOT_ICON),B(s.default,{},void 0,B("input",{type:"hidden",name:w.AVATAR,value:v?N:""}),B(g.default,{disableRemoveAction:!v,fieldName:w.AVATAR,name:R||"",application:t,onChange:this.handleBotAvatarChange,avatar:N,size:M.AVATAR_UPLOAD_SIZE}))),B(u.GridChild,{columnSpread:8,columnSpreadExtraSmall:12,columnSpreadSmall:12,grow:1,shrink:1},void 0,B(u.default,{},void 0,B(u.GridSection,{},void 0,B(u.GridChild,{columnSpread:12},void 0,B(A.default,{},void 0,T.Messages.Forms.USERNAME),B("div",{className:U?C.default.multiInputFocused:C.default.multiInputBlur},void 0,B(c.default,{maxLength:M.MAXIMUM_BOT_USERNAME_LENGTH,value:R||"",onChange:this.handleChange,onFocus:this.handleFocusAndBlur,onBlur:this.handleFocusAndBlur,name:w.USERNAME,className:C.default.multiInputFirst}),B("div",{className:C.default.inputWrapper},void 0,B("span",{className:C.default.inputPrefix},void 0,"#"),B(c.default,{value:L.discriminator,className:C.default.multiInputLast,disabled:!0}))))),B(u.GridSection,{},void 0,B(u.GridChild,{columnSpread:12},void 0,B(A.default,{},void 0,T.Messages.Bot.TOKEN),B(m.default,{revealActionContent:T.Messages.Bot.REVEAL_TOKEN},void 0,L.token),B("div",{className:C.default.buttonWrap},void 0,B(_.default,{textToCopy:L.token,className:C.default.copyButton}),B(i.default,{height:i.default.Height.SHORT,submitting:P,onClick:r},void 0,T.Messages.Actions.REGENERATE))))))),B(u.GridSection,{},void 0,B(u.GridChild,{columnSpread:12},void 0,B(b.default,{},void 0,T.Messages.Bot.AUTHORIZATION_FLOW),B(E.default,{},void 0,T.Messages.Bot.AUTHORIZATION_FLOW_DESCRIPTION))),B(u.GridSection,{},void 0,B(u.GridChild,{columnSpread:12},void 0,B(A.default,{className:C.default.switchLabel},void 0,T.Messages.Bot.PUBLIC_BOT),B(l.default,{wrap:l.default.Wrap.NO_WRAP},void 0,B(f.default,{className:C.default.firstSwitchItem},void 0,T.Messages.Bot.PUBLIC_BOT_DESCRIPTION),B(d.default,{className:C.default.switch,value:a,name:D.BOT_PUBLIC,onChange:this.handleChange})))),B(u.GridSection,{},void 0,B(u.GridChild,{columnSpread:12},void 0,B(A.default,{},void 0,T.Messages.Bot.REQUIRE_OAUTH2_CODE_GRANT),B(l.default,{wrap:l.default.Wrap.NO_WRAP,className:C.default.lastSwitchItem},void 0,B(f.default,{},void 0,T.Messages.Bot.REQUIRE_OAUTH2_CODE_GRANT_DESCRIPTION),B(d.default,{className:C.default.switch,value:o,name:D.BOT_REQUIRE_CODE_GRANT,onChange:this.handleChange})))),B(u.GridSection,{},void 0,B(u.GridChild,{columnSpread:12},void 0,B(b.default,{},void 0,T.Messages.Bot.GATEWAY_PRIVILEGED_INTENTS),B(E.default,{},void 0,T.Messages.Bot.GATEWAY_PRIVILEGED_INTENTS_DESCRIPTION.format({link:y.default.prependBasename(M.Routes.DOCS_TOPICS_GATEWAY)+"#gateway-intents"})))),B(u.GridSection,{},void 0,B(u.GridChild,{columnSpread:12},void 0,B(A.default,{},void 0,T.Messages.Bot.GATEWAY_PRESENCE_LIMITED),B(l.default,{wrap:l.default.Wrap.NO_WRAP,className:C.default.lastSwitchItem},void 0,B(f.default,{},void 0,T.Messages.Bot.GATEWAY_PRESENCE_LIMITED_DESCRIPTION.format({link:M.Links.APPLICATION_VERIFICATION_SUPPORT})),B(d.default,{className:C.default.switch,value:(0,h.hasFlag)(j,M.ApplicationFlags.GATEWAY_PRESENCE_LIMITED),onChange:this.handleGatewayPresenceLimitedFlagChange})))),B(u.GridSection,{},void 0,B(u.GridChild,{columnSpread:12},void 0,B(A.default,{},void 0,T.Messages.Bot.GATEWAY_GUILD_MEMBERS_LIMITED),B(l.default,{wrap:l.default.Wrap.NO_WRAP,className:C.default.lastSwitchItem},void 0,B(f.default,{},void 0,T.Messages.Bot.GATEWAY_GUILD_MEMBERS_LIMITED_DESCRIPTION.format({link:M.Links.APPLICATION_VERIFICATION_SUPPORT})),B(d.default,{className:C.default.switch,value:(0,h.hasFlag)(j,M.ApplicationFlags.GATEWAY_GUILD_MEMBERS_LIMITED),onChange:this.handleGatewayGuildMembersLimitedFlagChange}))))),B(S.default,{isVisible:p,onReset:this.handleFormReset,submitting:I,hasExtraPadding:!1}))},n}(a.Component);j.displayName="BotDetails";var L=(0,o.withRouter)(j);t.default=L},2223:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=v(r(1)),o=c(r(5)),i=r(2224),l=c(r(40)),u=c(r(1516)),s=c(r(2226)),d=v(r(2227)),f=c(r(1342));function c(e){return e&&e.__esModule?e:{default:e}}function p(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function v(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}function h(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var l=new Array(i),u=0;u<i;u++)l[u]=arguments[u+3];t.children=l}if(t&&o)for(var s in o)void 0===t[s]&&(t[s]=o[s]);else t||(t=o||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var y=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).handleChange=function(e){var r=t.props,n=r.onChange,a=r.name,o=e.currentTarget;o instanceof HTMLInputElement&&n(o.checked,a)},t}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e,t,r,n=this,a=this.props,c=a.value,p=a.defaultValue,v=a.disabled,y=a.fill,g=a.hideBorder,m=a.children,_=a.className,O=a.note,A=a.style,b=a.theme,E=a.size,S=a.name;return E===u.default.Sizes.MINI?(t=f.default.titleMini,r=f.default.dividerMini):(t=f.default.titleDefault,r=f.default.dividerDefault),h(l.default,{style:A,className:(0,o.default)(_,(e={},e[f.default.disabled]=v,e)),direction:l.default.Direction.VERTICAL},void 0,h(i.SmartUID,{},void 0,function(e){return h(l.default,{align:l.default.Align.START},void 0,h(l.default.Child,{},void 0,h("label",{htmlFor:e,className:t},void 0,m)),h(l.default.Child,{grow:0,shrink:0},void 0,h(u.default,{id:e,value:c,defaultValue:p,fill:y,onChange:n.handleChange,disabled:v,theme:b,size:E,name:S})))}),O&&h(l.default.Child,{className:f.default.note},void 0,h(d.default,{disabled:v,type:d.Types.DESCRIPTION},void 0,O)),!g&&h(s.default,{className:r}))},n}(a.PureComponent);y.displayName="SwitchItem",y.Sizes=u.default.Sizes,y.Themes=u.default.Themes,y.defaultProps={disabled:!1,size:u.default.Sizes.DEFAULT,theme:u.default.Themes.DEFAULT,hideBorder:!1,className:f.default.switchItem};var g=y;t.default=g},2224:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1686);t.generateUID=n.generateUID;var a=r(2225);t.UID=a.UID,t.UIDReset=a.UIDReset,t.SmartUID=a.SmartUID;var o=n.generateUID();t.uid=o},2225:function(e,t,r){"use strict";var n,a=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e};Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),l=r(1686),u=function(){return{value:1,uid:l.generateUID()}},s=u(),d=i.createContext(u()),f=function(e){return e.value++},c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={quartz:t.props.idSource||s,id:f(t.props.idSource||s)},t.prefixId=function(e){return String(t.props.name?t.props.name(e):e)},t}return a(t,e),t.prototype.render=function(){var e=this,t=this.props.children,r=this.state,n=r.id,a=r.quartz;return t(this.prefixId(n),function(t){return e.prefixId(a.uid(t))})},t}(i.Component);t.UID=c,t.UIDReset=function(e){var t=e.children;return i.createElement(d.Provider,{value:u()},t)},t.SmartUID=function(e){return i.createElement(d.Consumer,null,function(t){return i.createElement(c,o({},e,{idSource:t}))})}},2226:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r(1)),o=l(r(5)),i=l(r(1340));function l(e){return e&&e.__esModule?e:{default:e}}function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function s(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var l=new Array(i),u=0;u<i;u++)l[u]=arguments[u+3];t.children=l}if(t&&o)for(var s in o)void 0===t[s]&&(t[s]=o[s]);else t||(t=o||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var d=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this.props,t=e.className,r=e.style;return s("div",{className:(0,o.default)(i.default.divider,t),style:r})},n}(a.PureComponent);d.displayName="FormDivider";var f=d;t.default=f},2227:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Types=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r(1)),a=l(r(5)),o=l(r(29)),i=l(r(1341));function l(e){return e&&e.__esModule?e:{default:e}}function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var d={DEFAULT:"default",INPUT_PLACEHOLDER:"placeholder",DESCRIPTION:"description",LABEL_BOLD:"labelBold",LABEL_SELECTED:"labelSelected",LABEL_DESCRIPTOR:"labelDescriptor"};t.Types=d;var f="modeDefault",c="modeDisabled",p="modeSelectable",v=function(e){var t,r;function l(){return e.apply(this,arguments)||this}return r=e,(t=l).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,l.prototype.render=function(){var e=this.props,t=e.type,r=e.className,l=e.disabled,u=e.selectable,d=e.children,v=e.style,h=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["type","className","disabled","selectable","children","style"]),y=f;return l?y=c:u&&(y=p),n.createElement(o.default,s({className:(0,a.default)(i.default[t],r,i.default[y]),color:o.default.Colors.PRIMARY,style:v},h),d)},l}(n.PureComponent);v.displayName="FormText",v.Types=d,v.defaultProps={type:d.DEFAULT};var h=v;t.default=h}}]);
//# sourceMappingURL=e1f917d6573e0b1d02fa.js.map