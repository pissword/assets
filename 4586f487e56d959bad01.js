"use strict";(this.webpackChunkdiscord_developers=this.webpackChunkdiscord_developers||[]).push([[375],{33473:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=t.MINIMUM_DATE=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=o(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=a?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(n,l,i):n[l]=e[l]}n.default=e;r&&r.set(e,n);return n}(r(67294)),a=i(r(23855)),l=i(r(45245));function i(e){return e&&e.__esModule?e:{default:e}}function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(o=function(e){return e?r:t})(e)}function u(){u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
;for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};return u.apply(this,arguments)}var f=(0,a.default)("2018-12-06");t.MINIMUM_DATE=f;var s=function(e){return n.createElement(l.default,u({minDate:f},e))};s.displayName="ApplicationAnalyticsPageWrapper";var c=s;t.default=c},2695:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=o(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=a?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(n,l,i):n[l]=e[l]}n.default=e;r&&r.set(e,n)}(r(67294));var n,a,l=(n=r(19462))&&n.__esModule?n:{default:n},i=r(34596);function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap
;return(o=function(e){return e?r:t})(e)}function u(e,t,r,n){a||(a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var l=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=n;else if(i>1){for(var o=new Array(i),u=0;u<i;u++)o[u]=arguments[u+3];t.children=o}if(t&&l)for(var f in l)void 0===t[f]&&(t[f]=l[f]);else t||(t=l||{});return{$$typeof:a,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var f=function(e){return 0===e.acquired?[]:Object.keys(e).sort((function(t,r){var n=e[t],a=e[r];return n>a?-1:n<a?1:0})).map((function(t){return{type:l.default.Types.COLUMN,data:[{name:t,y:e[t]}],name:t}}))},s=function(e){var t=e.activationFunnel;return null==t?null:u(l.default,{csvFilename:"activation-funnel",rawData:[t],hideXAxis:!0,title:i.Messages.Analytics.ACQUIRE_TO_PLAY_FUNNEL,series:f(t)})};s.displayName="AcquireToPlayFunnelChart";var c=s;t.default=c},70589:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0})
;t.default=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=a?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(n,l,i):n[l]=e[l]}n.default=e;r&&r.set(e,n)}(r(67294));var n,a=u(r(23855)),l=r(96486),i=u(r(19462)),o=r(34596);function u(e){return e&&e.__esModule?e:{default:e}}function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}function s(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var l=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var o=new Array(i),u=0;u<i;u++)o[u]=arguments[u+3];t.children=o}
if(t&&l)for(var f in l)void 0===t[f]&&(t[f]=l[f]);else t||(t=l||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var c=function(e){var t=e.installationsByDate;if(null==t)return null;var r=(0,l.sortBy)(t.map((function(e){return{x:(0,a.default)(e.date).valueOf(),y:e.installations}})),"x");return s(i.default,{csvFilename:"installations-by-date",hideLegend:!0,rawData:t,series:[{type:i.default.Types.COLUMN,name:o.Messages.Analytics.INSTALLATIONS,data:r}],title:o.Messages.Analytics.INSTALLATIONS,xAxisDateTime:!0,yAxisTitle:o.Messages.Analytics.INSTALLATIONS})};c.displayName="InstallationsByDateChart";var d=c;t.default=d},80313:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor
;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=a?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(n,l,i):n[l]=e[l]}n.default=e;r&&r.set(e,n)}(r(67294));var n,a=u(r(23855)),l=r(96486),i=u(r(19462)),o=r(34596);function u(e){return e&&e.__esModule?e:{default:e}}function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}function s(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var l=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var o=new Array(i),u=0;u<i;u++)o[u]=arguments[u+3];t.children=o}if(t&&l)for(var f in l)void 0===t[f]&&(t[f]=l[f]);else t||(t=l||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var c=function(e){var t=e.newPlayersByDate;if(null==t)return null;var r=(0,l.sortBy)(t.map((function(e){return{x:(0,
a.default)(e.date).valueOf(),y:e.new_players}})),"x");return s(i.default,{csvFilename:"new-players-by-date",hideLegend:!0,rawData:t,series:[{type:i.default.Types.COLUMN,name:o.Messages.Analytics.NEW_PLAYERS,data:r}],title:o.Messages.Analytics.NEW_PLAYERS_WITH_EXPLANATION,xAxisDateTime:!0,yAxisTitle:o.Messages.Analytics.NEW_PLAYERS})};c.displayName="NewPlayersByDateChart";var d=c;t.default=d},96598:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=a?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(n,l,i):n[l]=e[l]}n.default=e;r&&r.set(e,n)}(r(67294));var n,a=u(r(23855)),l=r(96486),i=u(r(19462)),o=r(34596);function u(e){
return e&&e.__esModule?e:{default:e}}function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}function s(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var l=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var o=new Array(i),u=0;u<i;u++)o[u]=arguments[u+3];t.children=o}if(t&&l)for(var f in l)void 0===t[f]&&(t[f]=l[f]);else t||(t=l||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var c=function(e){var t=e.reactivatedPlayersByDate;if(null==t)return null;var r=(0,l.sortBy)(t.map((function(e){return{x:(0,a.default)(e.date).valueOf(),y:e.reactivated_players}})),"x");return s(i.default,{csvFilename:"reactivated-players-by-date",hideLegend:!0,rawData:t,series:[{type:i.default.Types.COLUMN,name:o.Messages.Analytics.REACTIVATED_PLAYERS,data:r}],
title:o.Messages.Analytics.REACTIVATED_PLAYERS_WITH_EXPLANATION,xAxisDateTime:!0,yAxisTitle:o.Messages.Analytics.REACTIVATED_PLAYERS})};c.displayName="ReactivatedPlayersByDateChart";var d=c;t.default=d},79007:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n,a=g(r(67294)),l=g(r(71668)),i=O(r(33473)),o=O(r(31055)),u=g(r(84455)),f=r(19290),s=O(r(2695)),c=O(r(70589)),d=O(r(80313)),p=O(r(96598)),y=r(70348),v=r(34596);function O(e){return e&&e.__esModule?e:{default:e}}function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(h=function(e){return e?r:t})(e)}function g(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=h(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=a?Object.getOwnPropertyDescriptor(e,l):null
;i&&(i.get||i.set)?Object.defineProperty(n,l,i):n[l]=e[l]}n.default=e;r&&r.set(e,n);return n}function A(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var l=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var o=new Array(i),u=0;u<i;u++)o[u]=arguments[u+3];t.children=o}if(t&&l)for(var f in l)void 0===t[f]&&(t[f]=l[f]);else t||(t=l||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function P(e,t){P=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return P(e,t)}var _=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;P(e,t)}(t,e);function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];(t=e.call.apply(e,[this].concat(n))||this).state={activationFunnel:null,errorMessage:null,installationsByDate:null,isLoadingFilteredData:!0,newPlayersByDate:null,
reactivatedPlayersByDate:null};t.handleFilterBarChange=function(e,r,n){var a=t.props.match.params.id;t.setState({isLoadingFilteredData:!0});var i={isLoadingFilteredData:!1},o=[l.fetchInstallations(a,e,r,y.AnalyticsQueryTypes.BY_INTERVAL,n).then((function(e){i.installationsByDate=e})),l.fetchActivationsFunnel(a,e,r).then((function(e){i.activationFunnel=e})),l.fetchNewPlayers(a,e,r,n).then((function(e){i.newPlayersByDate=e})),l.fetchReactivatedPlayers(a,e,r,n).then((function(e){i.reactivatedPlayersByDate=e}))];Promise.all(o).then((function(){t.setState(i)})).catch((function(e){t.setState({errorMessage:(0,f.getMessageFromAPIError)(e,v.Messages.Errors.ERROR_LOADING_ANALYTICS_DATA.format()),isLoadingFilteredData:!1})}))};return t}var r=t.prototype;r.renderFilteredData=function(){var e=this.state,t=e.activationFunnel,r=e.errorMessage,n=e.installationsByDate,a=e.newPlayersByDate,l=e.reactivatedPlayersByDate;return null!=r?A(o.default,{type:o.default.Types.ERROR
},void 0,r):A(u.default,{},void 0,A(u.GridSection,{},void 0,A(u.GridChild,{columnSpread:12,columnSpreadLarge:6,columnSpreadExtraLarge:6},void 0,A(c.default,{installationsByDate:n})),A(u.GridChild,{columnSpread:12,columnSpreadLarge:6,columnSpreadExtraLarge:6},void 0,A(s.default,{activationFunnel:t}))),A(u.GridSection,{},void 0,A(u.GridChild,{columnSpread:12,columnSpreadLarge:6,columnSpreadExtraLarge:6},void 0,A(d.default,{newPlayersByDate:a})),A(u.GridChild,{columnSpread:12,columnSpreadLarge:6,columnSpreadExtraLarge:6},void 0,A(p.default,{reactivatedPlayersByDate:l}))))};r.render=function(){var e=this.state,t=e.isLoadingFilteredData,r=e.errorMessage;return A(i.default,{heading:v.Messages.Analytics.ACTIVATION_HEADING,isLoading:t,onFilterBarChange:this.handleFilterBarChange,hasError:null!=r,subheading:v.Messages.Analytics.ACTIVATION_SUBHEADING},void 0,this.renderFilteredData())};return t}(a.Component);_.displayName="Activation";var b=_;t.default=b}}]);
//# sourceMappingURL=4586f487e56d959bad01.js.map