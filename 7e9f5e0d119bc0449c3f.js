"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[37650],{955254:(e,t,n)=>{n.d(t,{q:()=>u});var r=n(675860),a=n(173436),o=n(133840),s=n(461061);function i(e,t,n,r,a,o,s){try{var i=e[o](s),c=i.value}catch(e){n(e);return}i.done?t(c):Promise.resolve(c).then(r,a)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function s(e){i(o,r,a,s,c,"next",e)}function c(e){i(o,r,a,s,c,"throw",e)}s(void 0)}))}}var l=function(e,t){var n,r,a,o,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;(r=0,a)&&(o=[2&o[0],a.value]);switch(o[0]){
case 0:case 1:a=o;break;case 4:s.label++;return{value:o[1],done:!1};case 5:s.label++;r=o[1];o=[0];continue;case 7:o=s.ops.pop();s.trys.pop();continue;default:if(!(a=s.trys,a=a.length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){s.label=o[1];break}if(6===o[0]&&s.label<a[1]){s.label=a[1];a=o;break}if(a&&s.label<a[2]){s.label=a[2];s.ops.push(o);break}a[2]&&s.ops.pop();s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e];r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}};function u(e,t,n,r){return h.apply(this,arguments)}function h(){return(h=c((function(e,t,n,i){var c;return l(this,(function(l){switch(l.label){case 0:if(!o.Z.needsToFetchBuildSize(n))return[2];a.Z.dispatch({type:"APPLICATION_BUILD_SIZE_FETCH_START",buildId:n});l.label=1;case 1:l.trys.push([1,3,,4]);return[4,r.Z.post({url:s.ANM.APPLICATION_BUILD_SIZE(e,t,n),body:{manifest_ids:i},oldFormErrors:!0})];case 2:c=l.sent();a.Z.dispatch({
type:"APPLICATION_BUILD_SIZE_FETCH_SUCCESS",buildId:n,sizeKB:c.body.size_kb});return[3,4];case 3:l.sent();a.Z.dispatch({type:"APPLICATION_BUILD_SIZE_FETCH_FAIL",buildId:n});return[3,4];case 4:return[2]}}))}))).apply(this,arguments)}},299767:(e,t,n)=>{n.d(t,{Bv:()=>a,DC:()=>o});var r=n(173436);function a(){r.Z.dispatch({type:"APPLICATION_STORE_ACCEPT_STORE_TERMS"})}function o(e){r.Z.dispatch({type:"APPLICATION_STORE_ACCEPT_EULA",eulaId:e})}},87993:(e,t,n)=>{n.d(t,{RY:()=>o,iD:()=>s,Tb:()=>i,ec:()=>c});var r=n(173436),a=n(150829);function o(e){a.Z.queryDirectory(e,(function(t,n){null==t&&null!=n&&r.Z.dispatch({type:"INSTALLATION_LOCATION_ADD",path:e,metadata:n})}))}function s(e){r.Z.dispatch({type:"INSTALLATION_LOCATION_REMOVE",path:e})}function i(e,t){var n=t.label,a=t.isDefault;r.Z.dispatch({type:"INSTALLATION_LOCATION_UPDATE",path:e,label:n,isDefault:a})}function c(e){var t={},n=0,o=!0,s=!1,i=void 0;try{for(var c,l=function(){var o=c.value
;if(null==o||"string"!=typeof o)return"continue";a.Z.queryDirectory(o,(function(a,s){++n;null==a&&null!=s&&(t[o]=s);n===e.length&&r.Z.dispatch({type:"INSTALLATION_LOCATION_FETCH_METADATA",metadataPayload:t})}))},u=e[Symbol.iterator]();!(o=(c=u.next()).done);o=!0)l()}catch(e){s=!0;i=e}finally{try{o||null==u.return||u.return()}finally{if(s)throw i}}}},655868:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(785893),a=n(667294),o=n(294184),s=n.n(o),i=n(363010),c=n(331535),l=n(400055),u=n(897576),h=n(95467),p=n(461061),f=n(959797),d=n(725746),y=n.n(d);function A(e,t,n,r,a,o,s){try{var i=e[o](s),c=i.value}catch(e){n(e);return}i.done?t(c):Promise.resolve(c).then(r,a)}function v(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function s(e){A(o,r,a,s,i,"next",e)}function i(e){A(o,r,a,s,i,"throw",e)}s(void 0)}))}}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function I(e,t,n){t in e?Object.defineProperty(e,t,{
value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function _(e){_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return _(e)}function L(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e,t){T=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return T(e,t)}var P=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=_(e);if(t){var a=_(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return L(this,n)
}}var E=function(e,t){var n,r,a,o,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;(r=0,a)&&(o=[2&o[0],a.value]);switch(o[0]){case 0:case 1:a=o;break;case 4:s.label++;return{value:o[1],done:!1};case 5:s.label++;r=o[1];o=[0];continue;case 7:o=s.ops.pop();s.trys.pop();continue;default:if(!(a=s.trys,a=a.length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){s.label=o[1];break}if(6===o[0]&&s.label<a[1]){s.label=a[1];a=o;break}if(a&&s.label<a[2]){s.label=a[2];s.ops.push(o);break}a[2]&&s.ops.pop();s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e];r=0}finally{n=a=0}
if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&T(e,t)}(a,e);var t=O(a);function a(){b(this,a);var e;(e=t.apply(this,arguments)).state={hasAcceptedTerms:!e.props.forceShow&&e.props.hasPreviouslyAcceptedTerms,hasAcceptedEULA:!e.props.forceShow&&e.props.hasPreviouslyAcceptedEULA,hasAcceptedWithdrawalWaiver:!1};e.handleToggleTermsAcceptance=function(t,n){e.setState({hasAcceptedTerms:n})};e.handleToggleEUWithdralWaiverAcceptance=function(t,n){e.setState({hasAcceptedWithdrawalWaiver:n})};e.handleToggleEULAAcceptance=function(t,n){e.setState({hasAcceptedEULA:n})};return e}var o=a.prototype;o.componentDidMount=function(){this.props.onChange(this.hasAcceptedNeccessaryTerms(this.props,this.state))};o.componentDidUpdate=function(e,t){
var n=this.hasAcceptedNeccessaryTerms(e,t),r=this.hasAcceptedNeccessaryTerms(this.props,this.state);r!==n&&this.props.onChange(r)};o.hasAcceptedNeccessaryTerms=function(e,t){return t.hasAcceptedTerms&&(null==e.eulaId||t.hasAcceptedEULA)&&(!e.showWithdrawalWaiver||t.hasAcceptedWithdrawalWaiver)};o.render=function(){var e=this.props,t=e.eulaId,a=e.applicationName,o=e.hasPreviouslyAcceptedTerms,i=e.hasPreviouslyAcceptedEULA,l=e.forceShow,d=e.disabled,A=e.className,b=e.checkboxLabel,_=e.checkboxClassname,L=e.checkboxLabelClassname,T=e.finePrint,P=e.showPricingLink,O=e.showWithdrawalWaiver,m=this.state,N=m.hasAcceptedTerms,g=m.hasAcceptedEULA,C=m.hasAcceptedWithdrawalWaiver;return l||!o||null!=t&&!i||O?(0,r.jsxs)("div",{className:A,children:[(0,r.jsx)(c.vw,{className:y().formTitle,children:O?f.Z.Messages.BILLING_ONLINE_PURCHASE_WAIVER:f.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO}),l||!o?(0,r.jsx)(c.XZ,{type:c.XZ.Types.INVERTED,value:N,onChange:this.handleToggleTermsAcceptance,disabled:d,
className:s()(y().checkbox,_),children:(0,r.jsx)("div",{className:s()(y().checkboxLabel,L),children:null!=b?b:f.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL.format({termsURL:p.EYA.TERMS,paidURL:p.EYA.PAID_TERMS})})}):null,null==t||!l&&i?null:(0,r.jsx)(c.XZ,{type:c.XZ.Types.INVERTED,value:g,onChange:this.handleToggleEULAAcceptance,disabled:d,className:y().checkbox,children:(0,r.jsx)("div",{className:y().checkboxLabel,children:f.Z.Messages.BILLING_THIRD_PARTY_EULA_LABEL.format({applicationName:a,onClick:function(e){(0,u.ZD)(v((function(){var e,a;return E(this,(function(o){switch(o.label){case 0:return[4,Promise.all([n.e(40532),n.e(47007),n.e(20590),n.e(42410)]).then(n.bind(n,226838))];case 1:e=o.sent(),a=e.default;return[2,function(e){return(0,r.jsx)(a,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){
return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){I(e,t,n[t])}))}return e}({eulaId:t},e))}]}}))})));e.preventDefault()}})})}),null==T?null:(0,r.jsx)("div",{className:y().finePrint,children:T}),O?(0,r.jsxs)("div",{className:A,children:[(0,r.jsx)(c.XZ,{type:c.XZ.Types.INVERTED,value:C,onChange:this.handleToggleEUWithdralWaiverAcceptance,disabled:d,className:s()(y().checkbox,_),children:(0,r.jsx)("div",{className:s()(y().checkboxLabel,L),children:f.Z.Messages.BILLING_ONLINE_PURCHASE_WAIVER_CHECKBOX})}),(0,r.jsx)("div",{className:y().finePrint,children:f.Z.Messages.BILLING_ONLINE_PURCHASE_WAIVER_DISCLAIMER})]}):null,(0,r.jsx)("div",{className:y().finePrint,children:P&&(0,r.jsxs)(r.Fragment,{children:["*",f.Z.Messages.BILLING_HOW_PRICING_WORKS.format({documentationLink:h.Z.getArticleURL(p.BhN.LOCALIZED_PRICING)})]})})]}):null};return a}(a.Component);const N=i.ZP.connectStores([l.Z],(function(e){var t=e.eulaId;return{
hasPreviouslyAcceptedTerms:l.Z.hasAcceptedStoreTerms,hasPreviouslyAcceptedEULA:null!=t&&l.Z.hasAcceptedEULA(t)}}))(m)},432859:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(785893),a=n(667294),o=n(363010),s=n(331535),i=n(87993),c=n(664252),l=n(371452),u=n(588641),h=n(959797),p=n(890339),f=n.n(p);function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e){y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return y(e)}function A(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e,t){v=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return v(e,t)}var b=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function I(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var a=y(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return A(this,n)}}var _="select",L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&v(e,t)}(n,e);var t=I(n);function n(){d(this,n);var e;(e=t.apply(this,arguments)).state={newInstallationPath:null};e.fetchedMetadataPaths=new Set;e.handleChange=function(t){t===_?u.default.showOpenDialog(["openDirectory"]).then((function(t){if(null!=t&&t.length>0){var n=t[0];e.setState({newInstallationPath:null!=e.props.installationPaths.find((function(e){return e.path===n}))?null:n});e.sendChange(n)}
})):e.sendChange(t)};return e}var a=n.prototype;a.fetchAllDirectoryMetadata=function(){var e=this,t=this.props.installationPaths.map((function(e){return e.path})),n=this.state.newInstallationPath;null!=n&&t.push(n);t=t.filter((function(t){return!e.fetchedMetadataPaths.has(t)}));(0,i.ec)(t);var r=!0,a=!1,o=void 0;try{for(var s,c=t[Symbol.iterator]();!(r=(s=c.next()).done);r=!0){var l=s.value;this.fetchedMetadataPaths.add(l)}}catch(e){a=!0;o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}};a.componentDidMount=function(){this.fetchAllDirectoryMetadata()};a.componentDidUpdate=function(e){this.fetchAllDirectoryMetadata();this.props.requiredDiskKB===e.requiredDiskKB&&this.props.installationPathsMetadata===e.installationPathsMetadata||this.sendChange(this.props.value)};a.getOptions=function(){var e=this,t=this.props.installationPaths,n=this.state.newInstallationPath,r=t.map((function(t){var n=t.path,r=t.label;return{value:n,label:e.renderLabel(n,r)}}));null!=n&&r.push({
value:n,label:this.renderLabel(n)});r.push({value:_,label:h.Z.Messages.APPLICATION_INSTALLATION_MODAL_SELECT_DIRECTORY});return r};a.hasEnoughDiskSpace=function(e){var t=this.props,n=t.requiredDiskKB,r=t.installationPathsMetadata,a=null!=r[e]?r[e].availableKB:null;return null==n||null==a||n<a};a.sendChange=function(e){var t=this.props,n=t.installationPathsMetadata;(0,t.onChange)(e,null!=n[e]&&!1===n[e].hasPermission||!this.hasEnoughDiskSpace(e))};a.renderError=function(){var e=this.props,t=e.value,n=e.installationPathsMetadata;return null!=n[t]&&!1===n[t].hasPermission?(0,r.jsx)("div",{className:f().error,children:h.Z.Messages.APPLICATION_INSTALLATION_MODAL_NO_PERMISSION}):this.hasEnoughDiskSpace(t)?null:(0,r.jsx)("div",{className:f().error,children:h.Z.Messages.APPLICATION_INSTALLATION_MODAL_NOT_ENOUGH_SPACE})};a.renderLabel=function(e,t){var n=this.props.installationPathsMetadata,r=null!=t?t:e
;return null!=n[e]&&null!=n[e].availableKB?h.Z.Messages.APPLICATION_INSTALLATION_MODAL_DIRECTORY_WITH_SPACE.format({path:r,size:(0,l.BU)(n[e].availableKB,{useKibibytes:!0})}):r};a.render=function(){var e=this.props,t=e.value,n=e.className,a=e.autoFocus;return(0,r.jsxs)("div",{className:n,children:[(0,r.jsx)(s.vw,{tag:"h5",children:h.Z.Messages.APPLICATION_INSTALLATION_MODAL_LOCATION}),(0,r.jsx)(s.q4,{autoFocus:a,options:this.getOptions(),value:t,onChange:this.handleChange}),this.renderError()]})};return n}(a.PureComponent);const T=o.ZP.connectStores([c.Z],(function(){return{installationPaths:c.Z.installationPaths,installationPathsMetadata:c.Z.installationPathsMetadata}}))(L)}}]);
//# sourceMappingURL=7e9f5e0d119bc0449c3f.js.map