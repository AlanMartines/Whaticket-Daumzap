const a563_0x3bdbad=a563_0x452d;(function(_0x49e086,_0x39a1f9){const _0x2da461=a563_0x452d,_0x232937=_0x49e086();while(!![]){try{const _0x2c9fe2=parseInt(_0x2da461(0x1cb))/0x1+parseInt(_0x2da461(0x1d9))/0x2+parseInt(_0x2da461(0x1ca))/0x3*(-parseInt(_0x2da461(0x1cc))/0x4)+parseInt(_0x2da461(0x1e8))/0x5*(parseInt(_0x2da461(0x1cf))/0x6)+parseInt(_0x2da461(0x1d4))/0x7*(-parseInt(_0x2da461(0x1c1))/0x8)+parseInt(_0x2da461(0x1bf))/0x9*(parseInt(_0x2da461(0x1c6))/0xa)+-parseInt(_0x2da461(0x1e5))/0xb;if(_0x2c9fe2===_0x39a1f9)break;else _0x232937['push'](_0x232937['shift']());}catch(_0x34fa12){_0x232937['push'](_0x232937['shift']());}}}(a563_0x4430,0x393c0));const a563_0x5c206a=(function(){let _0x979c8f=!![];return function(_0x36855f,_0x750679){const _0x51f93a=_0x979c8f?function(){const _0x2b1ae1=a563_0x452d;if(_0x750679){const _0x27e680=_0x750679[_0x2b1ae1(0x1c3)](_0x36855f,arguments);return _0x750679=null,_0x27e680;}}:function(){};return _0x979c8f=![],_0x51f93a;};}()),a563_0x2cfc41=a563_0x5c206a(this,function(){const _0x2f1a9c=a563_0x452d;return a563_0x2cfc41[_0x2f1a9c(0x1f2)]()[_0x2f1a9c(0x1f0)](_0x2f1a9c(0x1c9))['toString']()[_0x2f1a9c(0x1cd)](a563_0x2cfc41)[_0x2f1a9c(0x1f0)](_0x2f1a9c(0x1c9));});a563_0x2cfc41();'use strict';var __importDefault=this&&this[a563_0x3bdbad(0x1e6)]||function(_0x2ac4ee){const _0x305f35=a563_0x3bdbad;return _0x2ac4ee&&_0x2ac4ee[_0x305f35(0x1ed)]?_0x2ac4ee:{'default':_0x2ac4ee};};function a563_0x452d(_0x107f65,_0x48ecfb){const _0xa95a1e=a563_0x4430();return a563_0x452d=function(_0x2cfc41,_0x5c206a){_0x2cfc41=_0x2cfc41-0x1b7;let _0x4430d8=_0xa95a1e[_0x2cfc41];return _0x4430d8;},a563_0x452d(_0x107f65,_0x48ecfb);}Object['defineProperty'](exports,a563_0x3bdbad(0x1ed),{'value':!![]}),exports[a563_0x3bdbad(0x1e0)]=void 0x0;const AppError_1=__importDefault(require(a563_0x3bdbad(0x1c0))),Whatsapp_1=__importDefault(require(a563_0x3bdbad(0x1f3))),Ticket_1=__importDefault(require(a563_0x3bdbad(0x1dc))),UpdateTicketService_1=__importDefault(require(a563_0x3bdbad(0x1df))),wbot_1=require('../../libs/wbot'),socket_1=require(a563_0x3bdbad(0x1d2)),wbotMessageListener_1=require(a563_0x3bdbad(0x1da)),moment_1=__importDefault(require(a563_0x3bdbad(0x1d3))),sequelize_1=require(a563_0x3bdbad(0x1b8)),date_fns_1=require(a563_0x3bdbad(0x1b9)),closeImportedTickets=async _0x7dc871=>{const _0x4d4526=a563_0x3bdbad;console[_0x4d4526(0x1b7)](_0x4d4526(0x1e0));const _0x182b1c=await Ticket_1['default'][_0x4d4526(0x1ec)]({'where':{'status':_0x4d4526(0x1c4),'whatsappId':_0x7dc871,'imported':{[sequelize_1['Op']['lt']]:(0x0,date_fns_1[_0x4d4526(0x1d7)])(new Date(),{'hours':0x5})}}});for(const _0x5a7783 of _0x182b1c){await new Promise(_0x459099=>setTimeout(_0x459099,0x14a)),await(0x0,UpdateTicketService_1[_0x4d4526(0x1be)])({'ticketData':{'status':_0x4d4526(0x1d6)},'ticketId':_0x5a7783['id'],'companyId':_0x5a7783[_0x4d4526(0x1ba)]});}let _0x553a08=await Whatsapp_1[_0x4d4526(0x1be)]['findByPk'](_0x7dc871);_0x553a08[_0x4d4526(0x1e3)]({'statusImportMessages':null});const _0x1373b6=(0x0,socket_1[_0x4d4526(0x1e4)])();_0x1373b6['to'](_0x4d4526(0x1d8)+_0x553a08[_0x4d4526(0x1ba)]+'-mainchannel')[_0x4d4526(0x1e2)](_0x4d4526(0x1e9)+_0x553a08[_0x4d4526(0x1ba)],{'action':_0x4d4526(0x1ee)});};exports[a563_0x3bdbad(0x1e0)]=closeImportedTickets;function compareMessageTimestamps(_0x30f0ea,_0x283d07){const _0x188ef8=a563_0x3bdbad;return _0x30f0ea[_0x188ef8(0x1e7)]-_0x283d07[_0x188ef8(0x1e7)];}function removeDuplicateById(_0x5732e2){const _0x4b8dd2=a563_0x3bdbad,_0x12dab4=new Map(),_0xe30e9e=[];for(const _0x38a0e3 of _0x5732e2){const _0x4397b0=_0x38a0e3[_0x4b8dd2(0x1bc)]['id'];!_0x12dab4[_0x4b8dd2(0x1ef)](_0x4397b0)&&(_0x12dab4[_0x4b8dd2(0x1d5)](_0x4397b0,!![]),_0xe30e9e[_0x4b8dd2(0x1db)](_0x38a0e3));}return _0xe30e9e[_0x4b8dd2(0x1dd)](compareMessageTimestamps);}function a563_0x4430(){const _0x253ee=['search','-mainchannel','toString','../../models/Whatsapp','log','sequelize','date-fns','companyId','floor','key','format','default','63puTeJS','../../errors/AppError','109032CPqaOO','whatsapps','apply','pending','processImportMessagesWppId','655380ZPQdHC','DD/MM/YY\x20HH:mm:ss','dataMessages','(((.+)+)+)+$','75hyRJsM','223956GeGsAL','34832nYtKnD','constructor','ERROR_IMPORTING_MESSAGE','163338AwjVSK','ERR_NOT_MESSAGE_TO_IMPORT','handleMessage','../../libs/socket','moment','189MuXBWh','set','closed','add','company-','614684vQLUFr','../WbotServices/wbotMessageListener','push','../../models/Ticket','sort','closedTicketsPostImported','../TicketServices/UpdateTicketService','closeImportedTickets','length','emit','update','getIO','4265063pYJEnm','__importDefault','messageTimestamp','40DcbZsN','importMessages-','low','renderButtonCloseTickets','findAll','__esModule','refresh','has'];a563_0x4430=function(){return _0x253ee;};return a563_0x4430();}const ImportWhatsAppService=async _0x346b77=>{const _0x52d30e=a563_0x3bdbad,_0x564a3e=(0x0,wbot_1['getWbot'])(_0x346b77['id']);try{const _0x4bf1e4=(0x0,socket_1[_0x52d30e(0x1e4)])(),_0x568ab8=removeDuplicateById(wbot_1['dataMessages'][_0x346b77['id']]);console['log'](_0x52d30e(0x1c5));const _0xf035d8=_0x568ab8[_0x52d30e(0x1e1)];let _0x26ca4f=0x0;while(_0x26ca4f<_0xf035d8){try{const _0x473881=_0x568ab8[_0x26ca4f];await(0x0,wbotMessageListener_1[_0x52d30e(0x1d1)])(_0x473881,_0x564a3e,_0x346b77[_0x52d30e(0x1ba)],!![]);if(_0x26ca4f%0x2===0x0){const _0x3e2189=Math[_0x52d30e(0x1bb)](_0x473881['messageTimestamp'][_0x52d30e(0x1ea)]*0x3e8);_0x4bf1e4[_0x52d30e(0x1e2)](_0x52d30e(0x1e9)+_0x346b77['companyId'],{'action':_0x52d30e(0x1e3),'status':{'this':_0x26ca4f+0x1,'all':_0xf035d8,'date':(0x0,moment_1[_0x52d30e(0x1be)])(_0x3e2189)[_0x52d30e(0x1bd)](_0x52d30e(0x1c7))}});}_0x26ca4f+0x1===_0xf035d8&&(wbot_1[_0x52d30e(0x1c8)][_0x346b77['id']]=[],_0x346b77[_0x52d30e(0x1de)]&&await(0x0,exports[_0x52d30e(0x1e0)])(_0x346b77['id']),await _0x346b77[_0x52d30e(0x1e3)]({'statusImportMessages':_0x346b77['closedTicketsPostImported']?null:_0x52d30e(0x1eb),'importOldMessages':null,'importRecentMessages':null}),_0x4bf1e4['to'](_0x52d30e(0x1d8)+_0x346b77['companyId']+_0x52d30e(0x1f1))[_0x52d30e(0x1e2)](_0x52d30e(0x1e9)+_0x346b77['companyId'],{'action':_0x52d30e(0x1ee)}));}catch(_0x53b0fc){console[_0x52d30e(0x1b7)](_0x53b0fc),console[_0x52d30e(0x1b7)](_0x52d30e(0x1ce));}_0x26ca4f++;}}catch(_0x2f2c01){console[_0x52d30e(0x1b7)](_0x2f2c01);throw new AppError_1[(_0x52d30e(0x1be))](_0x52d30e(0x1d0),0x193);}return _0x52d30e(0x1c2);};exports['default']=ImportWhatsAppService;