"use strict";(this.webpackChunkdiscord_developers=this.webpackChunkdiscord_developers||[]).push([[7017],{67177:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var o,n,a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=l(t);if(r&&r.has(e))return r.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=n?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(o,a,u):o[a]=e[a]}o.default=e;r&&r.set(e,o);return o}(r(67294)),u=(o=r(56117))&&o.__esModule?o:{default:o};function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(l=function(e){return e?r:t})(e)}function i(e,t,r,o){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,u=arguments.length-3;if(t||0===u||(t={children:void 0
}),1===u)t.children=o;else if(u>1){for(var l=new Array(u),i=0;i<u;i++)l[i]=arguments[i+3];t.children=l}if(t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function s(e,t){s=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return s(e,t)}var d=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;s(e,t)}(t,e);function t(){for(var t,r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];(t=e.call.apply(e,[this].concat(o))||this).handleButtonClick=function(){var e=t.props,r=e.id,o=e.filename,n=e.onClick;null!=n&&n(r,o)};return t}t.prototype.render=function(){var e=this.props,t=e.className,r=e.children,o=e.href,n=e.onClick;return i(u.default,{className:t,look:u.default.Look.LINK,height:u.default.Height.AUTO,color:u.default.Color.LINK,href:o,onClick:null!=n?this.handleButtonClick:null},void 0,r)};return t}(a.Component);t.default=d
;d.displayName="CsvButton"},88037:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var o,n=O(r(67294)),a=r(59402),u=S(r(36211)),l=r(48656),i=S(r(67177)),s=S(r(77932)),d=S(r(81061)),f=S(r(91464)),c=S(r(86750)),p=S(r(58350)),y=S(r(8550)),h=O(r(34704)),g=S(r(77797)),P=O(r(25991)),v=r(19290),m=r(70348),_=O(r(34596)),T=S(r(30189));function S(e){return e&&e.__esModule?e:{default:e}}function E(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(E=function(e){return e?r:t})(e)}function O(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=E(t);if(r&&r.has(e))return r.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=n?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(o,a,u):o[a]=e[a]}o.default=e;r&&r.set(e,o);return o}function b(e,t,r,n){
o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,u=arguments.length-3;if(t||0===u||(t={children:void 0}),1===u)t.children=n;else if(u>1){for(var l=new Array(u),i=0;i<u;i++)l[i]=arguments[i+3];t.children=l}if(t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});return{$$typeof:o,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function N(e,t){N=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return N(e,t)}var w=function(e,t,r){if(null!=r&&"date"===r.columnKey){var o=r.sortDirection===P.default.SortDirections.DESCENDING?t:e,n=r.sortDirection===P.default.SortDirections.DESCENDING?e:t,a="number"!=typeof o.id?Number(o.id):o.id,u="number"!=typeof n.id?Number(n.id):n.id;return a===u?0:a<u?-1:1}return(0,P.defaultSort)(e,t,r)},A=b(f.default,{}),R=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;N(e,t)}(t,e);function t(){
for(var t,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];(t=e.call.apply(e,[this].concat(o))||this).beforeTableNode=n.createRef();t.state={currentPageIndex:0,errorMessage:null,hasNextPage:!1,isLoading:null==t.props.payoutHistory};t.handlePaginationChange=function(e){t.setState({currentPageIndex:e},(function(){var e=t.state.currentPageIndex,r=t.props.payoutHistory;null!=r&&r.length>=(e+1)*l.DEFAULT_PAYOUTS_PER_REQUEST&&t.fetchNextPage()}))};t.fetchNextPage=function(){var e=t.props,r=e.match,o=e.payoutHistory,n=t.state.currentPageIndex,a=r.params.teamId;if(null!=o){var u=o[(n+1)*l.DEFAULT_PAYOUTS_PER_REQUEST-1];t.scrollToTopOfTable();null!=u&&o.length<=(n+1)*l.DEFAULT_PAYOUTS_PER_REQUEST&&(0,l.fetchPayoutHistory)(a,u.id)}};t.scrollToTopOfTable=function(){null!=t.beforeTableNode.current&&t.beforeTableNode.current.scrollIntoView()};t.renderDownloadSkuReport=function(e){var r=t.props.match.params.teamId;return b(i.default,{className:T.default.downloadButton,
onClick:function(){return(0,l.downloadPayoutReport)(r,e.id,m.PayoutReportTypes.SKU)}},void 0,_.Messages.PayoutHistory.BY_SKU)};t.renderDownloadTransactionReport=function(e){var r=t.props.match.params.teamId;return b(i.default,{className:T.default.downloadButton,onClick:function(){return(0,l.downloadPayoutReport)(r,e.id,m.PayoutReportTypes.TRANSACTION)}},void 0,_.Messages.PayoutHistory.BY_TRANSACTION)};return t}var r=t.prototype;r.componentDidMount=function(){var e=this,t=this.props,r=t.match,o=t.payoutHistory,n=r.params.teamId;null==o&&(0,l.fetchPayoutHistory)(n,null,2*l.DEFAULT_PAYOUTS_PER_REQUEST).then((function(){e.setState({isLoading:!1})})).catch((function(t){e.setState({isLoading:!1,errorMessage:(0,v.getMessageFromAPIError)(t,t.message)})}))};r.getTableColumns=function(){return[{cellProps:{grow:1,shrink:1,style:{minWidth:100}},heading:_.Messages.PayoutHistory.DATE_RANGE,key:"date",render:this.renderDateRange},{cellProps:{grow:0,shrink:0,style:{width:100}},
heading:_.Messages.PayoutHistory.STATUS,key:"status",render:this.renderStatus},{cellProps:{grow:0,shrink:0,style:{width:120}},heading:_.Messages.PayoutHistory.AMOUNT,key:"amount",render:this.renderAmount},{cellProps:{align:P.default.CellAlignment.RIGHT,className:T.default.downloadButtonCell,grow:0,shrink:0,style:{width:85}},key:"download-sku-report",render:this.renderDownloadSkuReport},{cellProps:{align:P.default.CellAlignment.RIGHT,className:T.default.downloadButtonCell,grow:0,shrink:0,style:{width:125}},key:"download-transaction-report",render:this.renderDownloadTransactionReport}]};r.renderAmount=function(e){return null==e.amount?null:(0,a.formatPrice)(e.amount,m.CurrencyCodes.USD,_.default.getLocale())};r.renderDateRange=function(e){var t=e.status===m.PayoutStatusTypes.OPEN?_.Messages.PayoutHistory.CURRENT:e.period_end;return b("div",{},void 0,b("span",{className:T.default.dateString},void 0,e.period_start)," – ",b("span",{className:T.default.dateString},void 0,t))}
;r.renderPagination=function(){var e=this.props.payoutHistory,t=this.state.currentPageIndex;return null==e||e.length===l.DEFAULT_PAYOUTS_PER_REQUEST?null:b(g.default,{currentPageIndex:t,hasNextPage:e.length>(t+1)*l.DEFAULT_PAYOUTS_PER_REQUEST,onChangePage:this.handlePaginationChange})};r.renderStatus=function(e){return(0,m.getPayoutStatusLabels)()[e.status]};r.renderPayoutHistoryTable=function(){var e=this.state,t=e.isLoading,r=e.currentPageIndex,o=e.errorMessage,a=this.props.payoutHistory;return t?A:null!=o?b(h.default,{type:h.AlertTypes.ERROR},void 0,o):null==a||0===a.length?b(s.default,{imageUri:m.Images.EMPTY_GENERIC,primaryCopy:_.Messages.PayoutHistory.NO_PAYOUTS_FOUND_PRIMARY,secondaryCopy:_.Messages.PayoutHistory.NO_PAYOUTS_FOUND_SECONDARY}):b(n.Fragment,{},void 0,n.createElement("div",{ref:this.beforeTableNode}),b(P.default,{defaultSortKey:"date",defaultSortDirection:P.default.SortDirections.DESCENDING,defaultValue:P.defaultCellValue,sort:w,columns:this.getTableColumns(),
rows:a.slice(r*l.DEFAULT_PAYOUTS_PER_REQUEST,(r+1)*l.DEFAULT_PAYOUTS_PER_REQUEST),tableWrapPoint:P.ViewportWrapWidth.SMALL}),this.renderPagination())};r.render=function(){return b(n.Fragment,{},void 0,b(c.default,{},void 0,b(d.default,{},void 0,_.Messages.PayoutHistory.HEADING),b(p.default,{isFlush:!0},void 0,_.Messages.PayoutHistory.SUBHEADING)),b(c.default,{isFlush:!0},void 0,this.renderPayoutHistoryTable()))};return t}(n.Component);R.displayName="PayoutHistory";var D=u.default.connectStores([y.default],(function(e){var t=e.match.params.teamId;return{payoutHistory:y.default.getPayoutHistory(t)}}))(R);t.default=D}}]);
//# sourceMappingURL=9d0aebaf924ed4b6ffdd.js.map