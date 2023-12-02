"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[34076],{34076:(t,n,e)=>{e.d(n,{Z:()=>I});var r=e(173436),i=e(7046),o=e(4231),a=e(696534);function c(t,n,e,r,i,o,a){try{var c=t[o](a),u=c.value}catch(t){e(t);return}c.done?n(u):Promise.resolve(u).then(r,i)}function u(t){return function(){var n=this,e=arguments;return new Promise((function(r,i){var o=t.apply(n,e);function a(t){c(o,r,i,a,u,"next",t)}function u(t){c(o,r,i,a,u,"throw",t)}a(void 0)}))}}var s=function(t,n){var e,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;(r=0,i)&&(o=[2&o[0],i.value]);switch(o[0]){case 0:
case 1:i=o;break;case 4:a.label++;return{value:o[1],done:!1};case 5:a.label++;r=o[1];o=[0];continue;case 7:o=a.ops.pop();a.trys.pop();continue;default:if(!(i=a.trys,i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1];i=o;break}if(i&&a.label<i[2]){a.label=i[2];a.ops.push(o);break}i[2]&&a.ops.pop();a.trys.pop();continue}o=n.call(t,a)}catch(t){o=[6,t];r=0}finally{e=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}};const I={init:function(){r.Z.dispatch({type:"INTEGRATION_SETTINGS_INIT"})},setSection:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;r.Z.dispatch({type:"INTEGRATION_SETTINGS_SET_SECTION",section:t,sectionId:n})},startEditingCommandPermissions:function(t){r.Z.dispatch({type:"INTEGRATION_SETTINGS_START_EDITING_COMMAND",commandId:t})},stopEditingCommandPermissions:function(t){r.Z.dispatch({
type:"INTEGRATION_SETTINGS_STOP_EDITING_COMMAND",commandId:t})},startEditingIntegration:function(t){r.Z.dispatch({type:"INTEGRATION_SETTINGS_START_EDITING_INTEGRATION",integrationId:t})},stopEditingIntegration:function(){r.Z.dispatch({type:"INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION"})},updateIntegration:function(t){r.Z.dispatch({type:"INTEGRATION_SETTINGS_UPDATE_INTEGRATION",settings:t})},startEditingWebhook:function(t){r.Z.dispatch({type:"INTEGRATION_SETTINGS_START_EDITING_WEBHOOK",webhookId:t})},stopEditingWebhook:function(){r.Z.dispatch({type:"INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK"})},updateWebhook:function(t){r.Z.dispatch({type:"INTEGRATION_SETTINGS_UPDATE_WEBHOOK",settings:t})},saveApplicationPermissions:function(t,n,e){return u((function(){var i;return s(this,(function(a){switch(a.label){case 0:a.trys.push([0,2,,3]);r.Z.dispatch({type:"INTEGRATION_SETTINGS_SUBMITTING"});return[4,o.U3({applicationId:t,commandId:t,defaultEveryoneValue:!0,defaultEverywhereValue:!0,guildId:n,
permissions:e})];case 1:a.sent();r.Z.dispatch({type:"INTEGRATION_SETTINGS_SAVE_SUCCESS"});return[3,3];case 2:i=a.sent();r.Z.dispatch({type:"INTEGRATION_SETTINGS_SAVE_FAILURE",errors:i.body});return[3,3];case 3:return[2]}}))}))()},saveIntegration:function(t,n){return u((function(){var e;return s(this,(function(o){switch(o.label){case 0:o.trys.push([0,2,,3]);r.Z.dispatch({type:"INTEGRATION_SETTINGS_SUBMITTING"});return[4,i.Z.updateIntegration(t,n.id,n.expire_behavior,n.expire_grace_period,n.enable_emoticons)];case 1:o.sent();r.Z.dispatch({type:"INTEGRATION_SETTINGS_SAVE_SUCCESS"});return[3,3];case 2:e=o.sent();r.Z.dispatch({type:"INTEGRATION_SETTINGS_SAVE_FAILURE",errors:e.body});return[3,3];case 3:return[2]}}))}))()},saveWebhook:function(t,n){return u((function(){var e;return s(this,(function(i){switch(i.label){case 0:i.trys.push([0,2,,3]);r.Z.dispatch({type:"INTEGRATION_SETTINGS_SUBMITTING"});return[4,a.Z.update(t,n.id,n)];case 1:i.sent();r.Z.dispatch({
type:"INTEGRATION_SETTINGS_SAVE_SUCCESS"});return[3,3];case 2:e=i.sent();r.Z.dispatch({type:"INTEGRATION_SETTINGS_SAVE_FAILURE",errors:e.body});return[3,3];case 3:return[2]}}))}))()}}},696534:(t,n,e)=>{e.d(n,{Z:()=>s});var r=e(496486),i=e.n(r),o=e(675860),a=e(173436),c=e(461061),u=["Spidey Bot","Captain Hook"];const s={fetchForGuild:function(t){a.Z.dispatch({type:"WEBHOOKS_FETCHING",guildId:t});o.Z.get({url:c.ANM.GUILD_WEBHOOKS(t),oldFormErrors:!0}).then((function(n){var e=n.body;return a.Z.dispatch({type:"WEBHOOKS_UPDATE",guildId:t,webhooks:e})})).catch((function(n){var e=n.body;a.Z.dispatch({type:"WEBHOOKS_UPDATE",guildId:t,error:e.message})}))},fetchForChannel:function(t,n){a.Z.dispatch({type:"WEBHOOKS_FETCHING",guildId:t,channelId:n});o.Z.get({url:c.ANM.CHANNEL_WEBHOOKS(n),oldFormErrors:!0}).then((function(e){var r=e.body;return a.Z.dispatch({type:"WEBHOOKS_UPDATE",guildId:t,channelId:n,webhooks:r})}))},create:function(t,n,e){null==e&&(e=u[i().random(0,u.length-1)])
;return o.Z.post({url:c.ANM.CHANNEL_WEBHOOKS(n),body:{name:e},oldFormErrors:!0}).then((function(n){var e=n.body;a.Z.dispatch({type:"WEBHOOK_CREATE",guildId:t,webhook:e});return e}))},delete:function(t,n){return o.Z.delete({url:c.ANM.WEBHOOK(n),oldFormErrors:!0}).then((function(){a.Z.dispatch({type:"WEBHOOK_DELETE",guildId:t,webhookId:n})}))},update:function(t,n,e){return o.Z.patch({url:c.ANM.WEBHOOK(n),body:e,oldFormErrors:!0}).then((function(n){var e=n.body;a.Z.dispatch({type:"WEBHOOK_UPDATE",guildId:t,webhook:e});return e}))}}},4231:(t,n,e)=>{e.d(n,{kZ:()=>d,W4:()=>T,Sn:()=>l,gq:()=>E,I4:()=>S,Ui:()=>_,U3:()=>h});var r=e(675860),i=e(173436),o=e(361138),a=e(99298),c=e(461061);function u(t,n,e,r,i,o,a){try{var c=t[o](a),u=c.value}catch(t){e(t);return}c.done?n(u):Promise.resolve(u).then(r,i)}function s(t){return function(){var n=this,e=arguments;return new Promise((function(r,i){var o=t.apply(n,e);function a(t){u(o,r,i,a,c,"next",t)}function c(t){u(o,r,i,a,c,"throw",t)}a(void 0)}))}}
function I(t,n,e){n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e;return t}var p=function(t,n){var e,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;(r=0,i)&&(o=[2&o[0],i.value]);switch(o[0]){case 0:case 1:i=o;break;case 4:a.label++;return{value:o[1],done:!1};case 5:a.label++;r=o[1];o=[0];continue;case 7:o=a.ops.pop();a.trys.pop();continue;default:if(!(i=a.trys,i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1];i=o;break}if(i&&a.label<i[2]){
a.label=i[2];a.ops.push(o);break}i[2]&&a.ops.pop();a.trys.pop();continue}o=n.call(t,a)}catch(t){o=[6,t];r=0}finally{e=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}};function d(){i.Z.dispatch({type:"INTEGRATION_PERMISSION_SETTINGS_CLEAR"})}function T(t,n,e){i.Z.dispatch({applicationId:t,commandId:n,permissions:e,type:"INTEGRATION_PERMISSION_SETTINGS_EDIT"})}function l(t,n){r.Z.get(c.ANM.GUILD_COMMANDS_FOR_APPLICATION(t,n)).then((function(e){i.Z.dispatch({type:"INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS",applicationId:n,commands:e.body.application_commands,guildId:t,permissions:e.body.permissions})}),(function(){i.Z.dispatch({type:"INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE",applicationId:n})}))}function E(t,n,e){return N.apply(this,arguments)}function N(){return(N=s((function(t,n,e){var o,a;return p(this,(function(u){switch(u.label){case 0:o=[];u.label=1;case 1:u.trys.push([1,3,,4])
;return[4,r.Z.get(c.ANM.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(t,n,e))];case 2:(a=u.sent()).ok&&(o=a.body.permissions);return[3,4];case 3:if(404!==u.sent().status){i.Z.dispatch({type:"INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE",applicationId:t,commandId:e,guildId:n});return[2]}return[3,4];case 4:i.Z.dispatch({type:"INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",applicationId:t,commandId:e,guildId:n,permissions:o});return[2]}}))}))).apply(this,arguments)}function S(t){i.Z.dispatch({applicationId:t,type:"INTEGRATION_PERMISSION_SETTINGS_INIT"})}function _(t){i.Z.dispatch({commandId:t,type:"INTEGRATION_PERMISSION_SETTINGS_RESET"})}function h(t){return f.apply(this,arguments)}function f(){return(f=s((function(t){var n,e,r,a,c,u,s,I;return p(this,(function(p){switch(p.label){case 0:n=t.applicationId,e=t.commandId,r=t.defaultEveryoneValue,a=t.defaultEverywhereValue,c=t.guildId,u=t.permissions;s=e===n?O(c,u,r,a):u;return[4,o.dh(n,c,e,s)];case 1:
(I=p.sent()).ok&&i.Z.dispatch({type:"INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",applicationId:n,commandId:e,guildId:c,permissions:I.body.permissions});return[2]}}))}))).apply(this,arguments)}function O(t,n,e,r){if(!e||!r)return n;var i,o=(I(i={},t,e),I(i,(0,a.bD)(t),r),i);return n.filter((function(t){var n=o[t.id];return null==n||t.permission!==n}))}}}]);
//# sourceMappingURL=e7dd3d315162dde35a56.js.map