(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{1417:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(1)),o=i(r(5)),a=l(r(127)),s=i(r(1282));function i(e){return e&&e.__esModule?e:{default:e}}function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var f=function(e){var t,r;function i(){return e.apply(this,arguments)||this}return r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,i.prototype.render=function(){var e=this.props,t=e.className,r=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,["className"]);return n.createElement(a.default,c({},r,{className:(0,o.default)(s.default.formStatusAlert,t)}))},i}(n.Component);t.default=f,f.displayName="FormStatusAlert",f.Types=a.AlertTypes},1435:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(1)),a=f(r(5)),s=r(420),i=r(74),u=f(r(182)),l=r(3),c=f(r(1285));function f(e){return e&&e.__esModule?e:{default:e}}function p(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function d(e,t,r,o){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,s=arguments.length-3;if(t||0===s||(t={children:void 0}),1===s)t.children=o;else if(s>1){for(var i=new Array(s),u=0;u<s;u++)i[u]=arguments[u+3];t.children=i}if(t&&a)for(var l in a)void 0===t[l]&&(t[l]=a[l]);else t||(t=a||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var g={DEFAULT:"default",INVERTED:"inverted",GHOST:"ghost"},y={BOX:c.default.box,ROUND:c.default.round},v=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={focused:!1},t.handleFocus=function(){t.setState({focused:!0})},t.handleBlur=function(){t.setState({focused:!1})},t.handleChange=function(e){var r=t.props,n=r.onChange,o=r.name;null!=n&&n(e.currentTarget.checked,o)},t}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var o=n.prototype;return o.getInputMode=function(){return this.props.disabled?"disabled":this.props.readOnly?"readonly":"default"},o.getStyle=function(){var e=this.props,t=e.value,r=e.type,n=e.color,o=this.props.style||{};if(!1===t)return o;switch(o=h({},o),r){case g.DEFAULT:o.borderColor=n;break;case g.GHOST:o.borderColor=(0,s.hex2rgb)(n,.15),o.backgroundColor=(0,s.hex2rgb)(n,.15);break;case g.INVERTED:o.backgroundColor=n,o.borderColor=n}return o},o.getColor=function(){var e=this.props,t=e.value,r=e.type,n=e.color,o=r===g.INVERTED?l.Colors.WHITE:n;return r===g.INVERTED&&n===l.Colors.WHITE&&(o=l.Colors.BLACK),t?o:"transparent"},o.render=function(){var e,t=this.state.focused,r=this.props,n=r.disabled,o=r.readOnly,s=r.value,f=r.shape,p=r.className,g=r.children,y=r.size;return d("label",{className:(0,a.default)((0,i.getClass)(c.default,"checkboxWrapper",n?"disabled":""),p),style:{height:y}},void 0,d("input",{className:(0,i.getClass)(c.default,"input",this.getInputMode()),type:"checkbox",onChange:n||o?l.NOOP:this.handleChange,onFocus:n||o?l.NOOP:this.handleFocus,onBlur:this.handleBlur,checked:s,style:{width:y,height:y}}),d("div",{className:(0,a.default)(c.default.checkbox,f,(e={},e[c.default.checked]=s,e[c.default.focused]=t,e)),style:h({width:y,height:y},this.getStyle())},void 0,d(u.default,{name:u.default.Names.CHECKMARK,width:18,height:18,color:this.getColor()})),g?d("div",{className:c.default.label,style:{lineHeight:y+"px"}},void 0,g):null)},n}(o.PureComponent);v.displayName="Checkbox",v.Types=g,v.Shapes=y,v.defaultProps={size:24,disabled:!1,readOnly:!1,value:!1,type:g.DEFAULT,color:l.Colors.WHITE,shape:y.BOX,onChange:l.NOOP};var b=v;t.default=b},1797:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=S(r(1)),a=r(73),s=b(r(12)),i=S(r(1453)),u=b(r(186)),l=b(r(414)),c=b(r(1417)),f=b(r(412)),p=b(r(410)),d=b(r(413)),h=b(r(416)),g=b(r(2568)),y=r(3),v=r(18);function b(e){return e&&e.__esModule?e:{default:e}}function m(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return m=function(){return e},e}function S(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=m();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}function O(e,t,r,o){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,s=arguments.length-3;if(t||0===s||(t={children:void 0}),1===s)t.children=o;else if(s>1){for(var i=new Array(s),u=0;u<s;u++)i[u]=arguments[u+3];t.children=i}if(t&&a)for(var l in a)void 0===t[l]&&(t[l]=a[l]);else t||(t=a||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var R={hasUnsavedChanges:!1,submitting:!1,hasSubmitted:!1,hasSubmissionError:!1},_=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).esrbRef=o.createRef(),t.pegiRef=o.createRef(),t.state=C({},R),t.handleFormChange=function(){t.state.hasUnsavedChanges||t.setState({hasUnsavedChanges:!0})},t.handleFormSubmit=function(){var e=t.props.match.params,r=e.id,n=e.skuId;if(null!=t.esrbRef.current){var o=t.esrbRef.current.getValuesForAPI();if(null!=t.pegiRef.current){var a={content_ratings:C({},o,{},t.pegiRef.current.getValuesForAPI())};t.setState({submitting:!0},function(){i.updateSku(r,n,a).then(function(){t.setState({submitting:!1,hasSubmitted:!0,hasUnsavedChanges:!1,hasSubmissionError:!1})}).catch(function(){t.setState({submitting:!1,hasSubmissionError:!0,hasSubmitted:!1})})})}}},t.handleReset=function(){t.setState(C({},R)),null!=t.esrbRef.current&&t.esrbRef.current.resetRatings(),null!=t.pegiRef.current&&t.pegiRef.current.resetRatings()},t.renderFormStatus=function(){var e=t.state,r=e.hasSubmitted;return e.hasSubmissionError?O(c.default,{type:c.default.Types.ERROR},void 0,v.Messages.Alerts.ERROR):r?O(c.default,{type:c.default.Types.SUCCESS},void 0,v.Messages.Alerts.SUCCESS_CHANGES_SAVED):null},t}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this.props.sku,t=this.state,r=t.hasUnsavedChanges,n=t.submitting,a=this.renderFormStatus();return O(o.Fragment,{},void 0,O(p.default,{},void 0,O(f.default,{},void 0,v.Messages.SkuRatings.RATINGS),O(d.default,{isFlush:null==a},void 0,v.Messages.SkuRatings.RATINGS_SUBHEADING),a),O(l.default,{onChange:this.handleFormChange,onSubmit:this.handleFormSubmit},void 0,o.createElement(g.default,{ref:this.esrbRef,agency:y.ContentRatingAgencies.ESRB,heading:v.Messages.SkuRatings.ESRB_RATING,descriptorMap:y.ESRBContentDescriptors,onChange:this.handleFormChange,sku:e}),o.createElement(g.default,{isFlush:!0,ref:this.pegiRef,agency:y.ContentRatingAgencies.PEGI,heading:v.Messages.SkuRatings.PEGI_RATING,descriptorMap:y.PEGIContentDescriptors,onChange:this.handleFormChange,sku:e}),O(h.default,{isVisible:r,actionCopy:v.Messages.Actions.PUBLISH_CHANGES,onReset:this.handleReset,submitting:n})))},n}(o.Component);_.displayName="SkuRatings";var k=(0,a.withRouter)(s.default.connectStores([u.default],function(e){return{sku:u.default.getSku(e.match.params.skuId)}})(_));t.default=k},2568:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=y(r(1)),a=h(r(1435)),s=y(r(408)),i=h(r(183)),u=h(r(409)),l=h(r(410)),c=h(r(415)),f=r(3),p=r(18),d=h(r(1376));function h(e){return e&&e.__esModule?e:{default:e}}function g(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return g=function(){return e},e}function y(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=g();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}function v(e,t,r,o){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,s=arguments.length-3;if(t||0===s||(t={children:void 0}),1===s)t.children=o;else if(s>1){for(var i=new Array(s),u=0;u<s;u++)i[u]=arguments[u+3];t.children=i}if(t&&a)for(var l in a)void 0===t[l]&&(t[l]=a[l]);else t||(t=a||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var m=function(e){if(null==e.sku.content_ratings||null==e.sku.content_ratings[e.agency])return{rating:null,descriptors:[],ratingError:null};var t=e.sku.content_ratings[e.agency],r=t.rating,n=t.descriptors;return{descriptors:Array.from(n),rating:r,ratingError:null}},S=function(e,t){return null==e&&t.length>0?p.Messages.Forms.REQUIRED_FIELD:null},O=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state=b({},m(t.props)),t.handleCheckboxClick=function(e,r){var n=t.props.descriptorMap;if(null!=r){var o=n[r];t.setState(function(e){var t=e.descriptors,r=e.rating,n=t.includes(o)?t.filter(function(e){return e!==o}):[].concat(t,[o]);return{descriptors:n,ratingError:S(r,n)}})}},t.handleSelectChange=function(e){var r=t.props.onChange;t.setState(function(t){var r=t.descriptors,n=null==e?null:e.value;return{rating:n,ratingError:S(n,r)}}),r()},t.renderCheckboxes=function(){var e=t.props.descriptorMap,r=t.state.descriptors;return Object.keys(e).map(function(n){return v(s.GridChild,{columnSpread:3,columnSpreadMedium:4,columnSpreadSmallMedium:6,columnSpreadSmall:6,columnSpreadExtraSmall:12},n,v(a.default,{onChange:t.handleCheckboxClick,value:r.includes(e[n]),name:n,type:a.default.Types.INVERTED},void 0,p.Messages.ContentDescriptors[n]))})},t.renderSelectOptions=function(){var e=t.props.agency,r=f.Ratings[e];return Object.keys(r).map(function(e){return{label:p.Messages.SkuRatings[e],value:r[e]}})},t.resetRatings=function(){t.setState(b({},m(t.props)))},t.getValuesForAPI=function(){var e,r=t.props.agency,n=t.state,o=n.rating,a=n.descriptors;return null!=o||a.length>0?((e={})[r]={rating:o,descriptors:a},e):null},t}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this.props,t=e.heading,r=e.isFlush,n=this.state,o=n.descriptors,a=n.rating,f=n.ratingError;return v(l.default,{isFlush:r},void 0,v(c.default,{},void 0,t),v(s.default,{className:d.default.ratingContentGrid},void 0,v(s.GridSection,{},void 0,v(s.GridChild,{columnSpread:4,columnSpreadSmallMedium:6,columnSpreadSmall:8,columnSpreadExtraSmall:10},void 0,v(u.default,{isRequired:o.length>0},void 0,p.Messages.SkuRatings.RATING),v(i.default,{searchable:!1,clearable:!0,value:a,isHidden:!1,options:this.renderSelectOptions(),onChange:this.handleSelectChange,error:f}))),v(s.GridSection,{},void 0,v(s.GridChild,{columnSpread:12},void 0,v(u.default,{},void 0,p.Messages.SkuRatings.CONTENT_DESCRIPTORS)),this.renderCheckboxes())))},n}(o.Component);t.default=O,O.displayName="RatingSection"}}]);
//# sourceMappingURL=103e9cb838ce50a05ce0.js.map