"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[32841],{232841:(e,t,n)=>{n.d(t,{d3:()=>G,s5:()=>w,VS:()=>Q,IP:()=>q,Y1:()=>X,QJ:()=>$,J1:()=>J,Gn:()=>L,to:()=>U,jA:()=>D,y$:()=>P,PC:()=>Z,fe:()=>k,A3:()=>N,kI:()=>A,MZ:()=>W,DV:()=>F,NJ:()=>Y,wC:()=>B,C1:()=>H,_m:()=>K,a2:()=>V});var i=n(667294),r=n(496486),o=n.n(r),u=n(363010),a=n(23816),l=n(182634),s=n(739388),c=n(180918),E=n(356004),d=n(392115),f=n(653772),_=n(379822),m=n(784238),O=n(932847),p=n(331478);const I=(0,n(553494).B)({kind:"user",id:"2023-01_emoji_discovery_backfill",label:"Emoji Hotrail Backfill",defaultConfig:{shouldBackfillEmojis:!1},treatments:[{id:1,label:"Backfills Hotrail With Emojis",config:{shouldBackfillEmojis:!0}}]});var g=n(630725),h=n(175453),y=n(461061),C=n(706594),T=n(298716),M=n(959797);function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function b(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,
configurable:!0,writable:!0}):e[t]=n;return e}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,r,o=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(i=n.next()).done);u=!0){o.push(i.value);if(t&&o.length===t)break}}catch(e){a=!0;r=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw r}}return o}}(e,t)||S(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e){return function(e){if(Array.isArray(e))return j(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||S(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}
function S(e,t){if(e){if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);return"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?j(e,t):void 0}}var A=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null==t?void 0:t.getGuildId();(0,l.O)(n);var r=G(e),a=B(n,e),s=Y(n),c=K(n,e),E=c.topEmojis,_=c.newlyAddedEmojis,O=c.backfillEmojis,I=$(E,_,O),g=(0,u.e7)([d.Z],(function(){return d.Z.getDisambiguatedEmojiContext(n)})),y=(0,u.e7)([f.Z],(function(){var e;return null===(e=f.Z.getGuild(n))||void 0===e?void 0:e.name})),C=i.useMemo((function(){var i=m.Z.getFlattenedGuilds(),u=g.getGroupedCustomEmoji(),l=[];o().each(i,(function(i){var r=null==u?void 0:u[i.id];if(!(null==r||0===r.length||null!=t&&r.every((function(n){return p.ZP.isEmojiFiltered(n,t,e)})))){var o={type:h.En.GUILD,guild:i};i.id!==n?l.push(o):l.unshift(o)}}))
;return d.Z.categories.reduce((function(t,i){if(i===h.UX.TOP_GUILD_EMOJI){if(0===I.length)return t;t.push({type:h.En.TOP_GUILD_EMOJI,id:i,name:M.Z.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({guildName:y})})}else if(i===h.UX.RECENT){if(0===a.length)return t;t.push({type:h.En.RECENT,id:i,name:M.Z.Messages.EMOJI_CATEGORY_RECENT})}else if(i===h.UX.FAVORITES){if(0===s.length)return t;t.push({type:h.En.FAVORITES,id:i,name:M.Z.Messages.CATEGORY_FAVORITE})}else if(i===h.UX.CUSTOM){var o,u=l;r||(u=l.filter((function(e){return e.guild.id===n})));(o=t).push.apply(o,R(u))}else w(e)&&t.push({type:h.En.UNICODE,id:i,name:i});return t}),[])}),[g,t,n,e,I.length,y,a.length,s.length,r]);return C},N=function(e){var t=null!=(null==e?void 0:e.getGuildId());O.default.track(y.rMx.PREMIUM_PROMOTION_OPENED,{location_page:t?y.ZY5.GUILD_CHANNEL:y.ZY5.DM_CHANNEL,location_section:null!=e?y.jXE.EMOJI_PICKER_POPOUT:y.jXE.CUSTOM_STATUS_MODAL})},Z=function(e,t){a.ZP.trackWithMetadata(y.rMx.SEARCH_STARTED,{
search_type:null!=t&&t===y.HzX.REACTION?y.aib.EMOJI_REACTION:y.aib.EMOJI,location:e})},D=function(e,t,n,i){a.ZP.trackWithMetadata(y.rMx.SEARCH_RESULT_VIEWED,{search_type:null!=i&&i===y.HzX.REACTION?y.aib.EMOJI_REACTION:y.aib.EMOJI,total_results:e,num_results_locked:t,location:n})},P=function(e,t,n){var i,r=null!==(i=e.uniqueName)&&void 0!==i?i:e.name;a.ZP.trackWithMetadata(y.rMx.SEARCH_RESULT_SELECTED,{search_type:null!=n&&n===y.HzX.REACTION?y.aib.EMOJI_REACTION:y.aib.EMOJI,location:t,expression_guild_id:e.guildId,emoji_id:e.id,emoji_name:r,is_custom:null!=e.id,is_animated:e.animated})},U=function(e){a.ZP.trackWithMetadata(y.rMx.SEARCH_RESULT_EMPTY,{search_type:y.aib.EMOJI,location:e})},L=function(e){var t=e.emoji,n=e.subCategory,i=e.position,r=e.backfillEmoji,o=e.newlyAddedHighlight;a.ZP.trackWithMetadata(y.rMx.EXPRESSION_PICKER_EXPRESSION_FOCUS,{expression_section:null==n?void 0:n.toString(),newly_added_highlight:o,emoji_id:t.id,emoji_name:t.name,emoji_animated:t.animated,
emoji_backfilled:r,emoji_position:i})},k=function(e){var t,n,i=e.emoji,r=e.location,o=e.pickerIntention,u=e.category,l=e.subCategory,s=void 0===l?h.t0.NONE:l,c=e.position,E=e.backfillEmoji,d=e.newlyAddedHighlight,f=e.isBurstReaction;switch(o){case y.HzX.REACTION:t=f?T.cd.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED:T.cd.EMOJI_PICKER_REACTION_EMOJI_CLICKED;break;case y.HzX.STATUS:t=T.cd.EMOJI_PICKER_STATUS_EMOJI_CLICKED;break;default:t=T.cd.EMOJI_PICKER_EMOJI_CLICKED}var _=null!==(n=i.uniqueName)&&void 0!==n?n:i.name;a.ZP.trackWithMetadata(y.rMx.EXPRESSION_PICKER_EXPRESSION_SELECTED,{type:t,location:r,expression_id:i.id,expression_name:_,expression_guild_id:i.guildId,is_custom:null!=i.id,is_animated:i.animated,expression_picker_section:u,expression_section:null==s?void 0:s.toString(),emoji_position:c,emoji_backfilled:E,newly_added_highlight:d,is_burst:f})},J=function(e){var t,n=e.emoji,i=e.location,r=null!==(t=n.uniqueName)&&void 0!==t?t:n.name
;a.ZP.trackWithMetadata(y.rMx.EXPRESSION_FAVORITED,{location:i,expression_type:C.X1.EMOJI,expression_id:n.id,expression_name:r,expression_guild_id:n.guildId,is_custom:null!=n.id,is_animated:n.animated})},x=function(e){var t=e.containerWidth,n=e.favoriteEmojis,i=e.frequentlyUsedEmoji,r=e.guildEmoji,o=e.emojisTotal,u=e.topEmojis,l=e.newlyAddedEmojis,c=e.backfillEmojis,E=e.pickerIntention,d=e.isBurstReaction,f=void 0!==d&&d,_=e.analyticsObject,m=s.Z.remainingBurstCurrency;a.ZP.trackWithMetadata(E===y.HzX.REACTION?y.rMx.REACTION_PICKER_OPENED:y.rMx.EXPRESSION_PICKER_OPENED,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));i.forEach((function(t){b(e,t,n[t])}))}return e}({width:t,tab:C.X1.EMOJI,badged:!1,num_expressions_favorites:n.length,
num_animated_expressions_favorites:n.filter((function(e){return null==e?void 0:e.animated})).length,num_custom_expressions_favorites:n.filter((function(e){return null!=e.guildId})).length,num_standard_expressions_favorites:n.filter((function(e){return null==e.id})).length,num_expressions_frecent:i.length,num_animated_expressions_frecent:i.filter((function(e){return null==e?void 0:e.animated})).length,num_custom_expressions_frecent:i.filter((function(e){return null!=e.guildId})).length,num_standard_expressions_frecent:i.filter((function(e){return null==e.id})).length,num_current_guild_expressions:r.length,num_custom_expressions_total:o,num_expressions_top_server:u.length,num_animated_expressions_top_server:u.filter((function(e){return e.animated})).length,num_expressions_newly_added:l.length,num_animated_expressions_newly_added:l.filter((function(e){return e.animated})).length,num_expressions_backfilled:c.length,num_animated_expressions_backfilled:c.filter((function(e){return e.animated
})).length},E===y.HzX.REACTION&&{is_burst:f,burst_reaction_balance:m},null!=_&&{location_object:_}))},X=function(e,t){switch(e){case h.UX.TOP_GUILD_EMOJI:return M.Z.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({guildName:t});case h.UX.RECENT:return M.Z.Messages.EMOJI_CATEGORY_RECENT;case h.UX.FAVORITES:return M.Z.Messages.CATEGORY_FAVORITE;case h.UX.ACTIVITY:return M.Z.Messages.EMOJI_CATEGORY_ACTIVITY;case h.UX.FLAGS:return M.Z.Messages.EMOJI_CATEGORY_FLAGS;case h.UX.FOOD:return M.Z.Messages.EMOJI_CATEGORY_FOOD;case h.UX.NATURE:return M.Z.Messages.EMOJI_CATEGORY_NATURE;case h.UX.OBJECTS:return M.Z.Messages.EMOJI_CATEGORY_OBJECTS;case h.UX.PEOPLE:return M.Z.Messages.EMOJI_CATEGORY_PEOPLE;case h.UX.SYMBOLS:return M.Z.Messages.EMOJI_CATEGORY_SYMBOLS;case h.UX.TRAVEL:return M.Z.Messages.EMOJI_CATEGORY_TRAVEL;case h.UX.PREMIUM_UPSELL:return M.Z.Messages.EMOJI_CATEGORY_PREMIUM_UPSELL;default:return null!=t?t:e}},G=function(e){
return e!==y.HzX.COMMUNITY_CONTENT&&e!==y.HzX.COMMUNITY_CONTENT_ONLY&&e!==y.HzX.GUILD_STICKER_RELATED_EMOJI&&e!==y.HzX.GUILD_ROLE_BENEFIT_EMOJI&&e!==y.HzX.SOUNDBOARD},w=function(e){return e!==y.HzX.COMMUNITY_CONTENT_ONLY};function F(e,t,n){i.useEffect((function(){c.DZ.loadIfNecessary()}),[]);var r=G(n);return(0,u.e7)([d.Z],(function(){var i=e.replace(/^:/,"").replace(/:$/,"");return""===i?null:d.Z.searchWithoutFetchingLatest({channel:t,query:i,count:0,intention:n,includeExternalGuilds:r})}),[t,n,e,r],u.pF)}function B(e,t){i.useEffect((function(){t!==y.HzX.SOUNDBOARD&&c.DZ.loadIfNecessary()}),[t]);return(0,u.Wu)([d.Z],(function(){return t!==y.HzX.SOUNDBOARD?d.Z.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest():[]}))}function Y(e){i.useEffect((function(){c.DZ.loadIfNecessary()}),[]);return(0,u.Wu)([d.Z],(function(){return d.Z.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest}))}function H(e,t){i.useEffect((function(){c.DZ.loadIfNecessary()
}),[]);return(0,u.e7)([d.Z],(function(){return null!=t&&d.Z.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(t)}))}function W(e){i.useEffect((function(){c.DZ.loadIfNecessary()}),[]);return(0,u.Wu)([d.Z],(function(){return d.Z.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest()}))}var z=[];function K(e,t){var n=v((0,u.Wu)([d.Z],(function(){return[d.Z.getTopEmoji(e),d.Z.getNewlyAddedEmoji(e),d.Z.getBackfillTopEmojis(e)]})),3),i=n[0],r=n[1],o=n[2],a=(0,g.R)(!0),l=a.shouldSeeNewlyAddedEmoji,s=a.shouldSeeTopEmojiBar,c=I.useExperiment({}).shouldBackfillEmojis;return t===y.HzX.REACTION?{topEmojis:z,newlyAddedEmojis:z,backfillEmojis:z}:{topEmojis:s?i:z,newlyAddedEmojis:l?r:z,backfillEmojis:s&&c?o:z}}function V(e,t,n){var r=(0,u.Wu)([d.Z],(function(){return d.Z.emojiFrecencyWithoutFetchingLatest.frequently.slice()})),o=(0,u.e7)([d.Z],(function(){return d.Z.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems})),a=(0,u.e7)([E.Z,_.Z],(function(){
return E.Z.getChannel(_.Z.getChannelId())})),l=(0,u.Wu)([d.Z],(function(){return null!=a?d.Z.getDisambiguatedEmojiContext(a.getGuildId()).favoriteEmojisWithoutFetchingLatest:[]})),s=r.slice(0,o),c=(0,u.cj)([d.Z],(function(){var e;return null!==(e=d.Z.getDisambiguatedEmojiContext(null==a?void 0:a.getGuildId()).groupedCustomEmojis)&&void 0!==e?e:{}})),f=i.useMemo((function(){var e=null==a?void 0:a.getGuildId();return null!=e?d.Z.getGuildEmoji(e):[]}),[a]),m=Object.values(c).reduce((function(e,t){return e+=t.length}),0),O=K(null==a?void 0:a.getGuildId(),e),p=O.topEmojis,I=O.newlyAddedEmojis,g=O.backfillEmojis,h=i.useCallback((function(){x({favoriteEmojis:l,frequentlyUsedEmoji:s,guildEmoji:f,emojisTotal:m,backfillEmojis:g,topEmojis:p,newlyAddedEmojis:I,pickerIntention:e,isBurstReaction:t,analyticsObject:n})}),[l,s,f,m,g,p,I,e,t,n]);i.useEffect((function(){e===y.HzX.REACTION&&h()}),[]);return{trackOnPickerOpen:h}}function q(e,t,n){if(null==n)return h.t0.NONE;var i,r,o=e.map((function(e){
return null!==(r=null!==(i=e.id)&&void 0!==i?i:e.uniqueName)&&void 0!==r?r:e.name})),u=t.map((function(e){return e.id}));return o.includes(n)?h.t0.TOP_GUILD_EMOJI:u.includes(n)?h.t0.NEWLY_ADDED_EMOJI:h.t0.NONE}function $(e,t,n){var i,r=e.slice(0,9-t.length);if(r.length+t.length<9){var o,u=n.slice(0,9-e.length-t.length);(o=r).push.apply(o,R(u))}(i=r).push.apply(i,R(t));return r}function Q(e){var t=new Set;return e.filter((function(e){if(null==e.uniqueName)return!0;if(!t.has(e.optionallyDiverseSequence)){t.add(e.optionallyDiverseSequence);return!0}}))}},195041:(e,t,n)=>{n.d(t,{pj:()=>u,pr:()=>a,Zg:()=>l});var i=n(675860),r=n(173436),o=n(461061);function u(e){r.Z.dispatch({type:"TOP_EMOJIS_FETCH",guildId:e});i.Z.get({url:o.ANM.TOP_EMOJIS_FOR_GUILD(e),oldFormErrors:!0}).then((function(t){return r.Z.dispatch({type:"TOP_EMOJIS_FETCH_SUCCESS",guildId:e,topEmojisMetadata:t.body.items.map((function(e){return{emojiId:e.emoji_id,rank:e.emoji_rank}})).sort((function(e,t){return e.rank-t.rank}))})
}),(function(){return r.Z.dispatch({type:"TOP_EMOJIS_FETCH_FAILURE",guildId:e})}))}function a(e,t){r.Z.dispatch({type:"NEWLY_ADDED_EMOJI_SEEN_UPDATED"});null!=e&&null!=t&&r.Z.dispatch({type:"NEWLY_ADDED_EMOJI_SEEN_PENDING",guildId:e,emojiId:t})}function l(e,t){null!=e&&null!=t&&r.Z.dispatch({type:"NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED",guildId:e,emojiId:t})}},182634:(e,t,n)=>{n.d(t,{O:()=>l});var i=n(630725),r=n(392115),o=n(859023),u=n(562717),a=n(195041);function l(e){if(null!=e){if(null!=o.default.getCurrentUser()){if((0,i.Y)().shouldSeeTopEmojiBar){var t=r.Z.getTopEmojisMetadata(e);if(null!=t){var n=t.topEmojisTTL;if(null==n||Date.now()<n)return}u.Z.getIsFetching(e)||(0,a.pj)(e)}}}}},739388:(e,t,n)=>{n.d(t,{Z:()=>I});var i=n(363010),r=n(675860),o=n(173436),u=n(461061);function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1;i.configurable=!0
;"value"in i&&(i.writable=!0);Object.defineProperty(e,i.key,i)}}function s(e){s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return s(e)}function c(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e,t){E=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return E(e,t)}var d=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,i=s(e);if(t){var r=s(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return c(this,n)}}
var _={burstCredits:0},m=function(e){var t=e.amount;_.burstCredits=t},O=function(){r.Z.get({url:u.ANM.BURST_CREDIT_BALANCE}).then((function(e){o.Z.dispatch({type:"BURST_CREDITS_SET",amount:e.body.amount})})).catch((function(){}))},p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&E(e,t)}(n,e);var t=f(n);function n(){a(this,n);return t.apply(this,arguments)}var i=n.prototype;i.getState=function(){return _};i.__getLocalVars=function(){return{state:_,handleSetCreditBalance:m,handleFetchFromAPI:O}};!function(e,t,n){t&&l(e.prototype,t);n&&l(e,n)}(n,[{key:"remainingBurstCurrency",get:function(){return _.burstCredits}},{key:"hasAvailableBurstCurrency",get:function(){return this.remainingBurstCurrency>0}}]);return n}(i.ZP.Store);p.displayName="BurstReactionStore";p.persistKey="BurstReactionStore"
;const I=new p(o.Z,{BURST_CREDITS_SET:m,POST_CONNECTION_OPEN:O})}}]);
//# sourceMappingURL=2a94b5d587321fbb15cd.js.map