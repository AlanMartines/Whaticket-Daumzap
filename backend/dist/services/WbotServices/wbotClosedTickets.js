function a556_0x1abb(){const _0x496eba=['whatsappId','../../models/Ticket','search','getWbot','g.us','constructor','./wbotMessageListener','s.whatsapp.net','update','toString','trace','SendPresenceStatus','(((.+)+)+)+$','contact','../TicketServices/ShowTicketService','emit','apply','DESC','7CyBOfW','__esModule','fromMe','getIO','default','../../helpers/Mustache','7608990GyxgNS','728OtPjFM','setMinutes','1178742CzVWYs','../../models/TicketTraking','66SaUxvc','string','__importDefault','-open','22IbnhBA','201065CqaIHy','nps','5979KumdCj','../../helpers/SendPresenceStatus','1830483WRKtkc','open','findAndCountAll','-ticket','../../libs/socket','verifyMessage','isGroup','getMinutes','findByPk','status','body\x20is\x20not\x20a\x20string','company-','355139SOYzHB','delete','updatedAt','./SendWhatsAppMessage','4446632TBgjHf','../../libs/wbot','ClosedAllOpenTickets','log','sequelize'];a556_0x1abb=function(){return _0x496eba;};return a556_0x1abb();}function a556_0x2cec(_0x3b0a3a,_0x312b1b){const _0x143bbe=a556_0x1abb();return a556_0x2cec=function(_0x2cd0cc,_0x414a28){_0x2cd0cc=_0x2cd0cc-0xa3;let _0x1abbc6=_0x143bbe[_0x2cd0cc];return _0x1abbc6;},a556_0x2cec(_0x3b0a3a,_0x312b1b);}const a556_0x5620ed=a556_0x2cec;(function(_0x11a6c4,_0x450d3e){const _0x514f4f=a556_0x2cec,_0x33f9f0=_0x11a6c4();while(!![]){try{const _0x5669d5=-parseInt(_0x514f4f(0xdc))/0x1+-parseInt(_0x514f4f(0xc5))/0x2+-parseInt(_0x514f4f(0xce))/0x3*(parseInt(_0x514f4f(0xc3))/0x4)+parseInt(_0x514f4f(0xcc))/0x5*(parseInt(_0x514f4f(0xc7))/0x6)+parseInt(_0x514f4f(0xbc))/0x7*(-parseInt(_0x514f4f(0xa5))/0x8)+parseInt(_0x514f4f(0xd0))/0x9+parseInt(_0x514f4f(0xc2))/0xa*(parseInt(_0x514f4f(0xcb))/0xb);if(_0x5669d5===_0x450d3e)break;else _0x33f9f0['push'](_0x33f9f0['shift']());}catch(_0x2f1fb0){_0x33f9f0['push'](_0x33f9f0['shift']());}}}(a556_0x1abb,0x4a54f));const a556_0x414a28=(function(){let _0x33ee71=!![];return function(_0x164e76,_0x47b9a6){const _0x9492ce=_0x33ee71?function(){const _0x485404=a556_0x2cec;if(_0x47b9a6){const _0x1e5711=_0x47b9a6[_0x485404(0xba)](_0x164e76,arguments);return _0x47b9a6=null,_0x1e5711;}}:function(){};return _0x33ee71=![],_0x9492ce;};}()),a556_0x2cd0cc=a556_0x414a28(this,function(){const _0x505442=a556_0x2cec;return a556_0x2cd0cc[_0x505442(0xb3)]()[_0x505442(0xac)](_0x505442(0xb6))[_0x505442(0xb3)]()[_0x505442(0xaf)](a556_0x2cd0cc)[_0x505442(0xac)](_0x505442(0xb6));});a556_0x2cd0cc();'use strict';var __importDefault=this&&this[a556_0x5620ed(0xc9)]||function(_0xba1cc9){const _0x2616b5=a556_0x5620ed;return _0xba1cc9&&_0xba1cc9[_0x2616b5(0xbd)]?_0xba1cc9:{'default':_0xba1cc9};};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[a556_0x5620ed(0xa7)]=void 0x0;const sequelize_1=require(a556_0x5620ed(0xa9)),Ticket_1=__importDefault(require(a556_0x5620ed(0xab))),Whatsapp_1=__importDefault(require('../../models/Whatsapp')),socket_1=require(a556_0x5620ed(0xd4)),Mustache_1=__importDefault(require(a556_0x5620ed(0xc1))),SendWhatsAppMessage_1=__importDefault(require(a556_0x5620ed(0xa4))),moment_1=__importDefault(require('moment')),ShowTicketService_1=__importDefault(require(a556_0x5620ed(0xb8))),wbotMessageListener_1=require(a556_0x5620ed(0xb0)),TicketTraking_1=__importDefault(require(a556_0x5620ed(0xc6))),SendPresenceStatus_1=require(a556_0x5620ed(0xcf)),wbot_1=require(a556_0x5620ed(0xa6)),ClosedAllOpenTickets=async _0x4181ad=>{const _0x26992a=a556_0x5620ed,_0xbcd88b=async(_0x220b3e,_0x310bef,_0x40eb7f)=>{const _0x18d2d9=a556_0x2cec;if(_0x310bef===_0x18d2d9(0xcd))typeof _0x40eb7f!=_0x18d2d9(0xc8)&&console[_0x18d2d9(0xb4)]('body\x20is\x20not\x20a\x20string',_0x40eb7f),await _0x220b3e[_0x18d2d9(0xb2)]({'status':'closed','lastMessage':_0x40eb7f,'unreadMessages':0x0,'amountUseBotQueues':0x0});else _0x310bef==='open'?(typeof _0x40eb7f!=_0x18d2d9(0xc8)&&console[_0x18d2d9(0xb4)](_0x18d2d9(0xda),_0x40eb7f),await _0x220b3e['update']({'status':'closed','lastMessage':_0x40eb7f,'unreadMessages':0x0,'amountUseBotQueues':0x0})):await _0x220b3e[_0x18d2d9(0xb2)]({'status':'closed','unreadMessages':0x0});},_0x27e3de=(0x0,socket_1[_0x26992a(0xbf)])();try{const {rows:_0x10c1aa}=await Ticket_1[_0x26992a(0xc0)][_0x26992a(0xd2)]({'where':{'status':{[sequelize_1['Op']['in']]:[_0x26992a(0xd1)]},'companyId':_0x4181ad},'order':[[_0x26992a(0xa3),_0x26992a(0xbb)]]});for(const _0x1e5286 of _0x10c1aa){const _0x3a1f32=await(0x0,ShowTicketService_1[_0x26992a(0xc0)])(_0x1e5286['id'],_0x4181ad),_0x5686bc=await Whatsapp_1[_0x26992a(0xc0)][_0x26992a(0xd8)](_0x3a1f32?.[_0x26992a(0xaa)]);if(!_0x5686bc)continue;const _0x16a856=await TicketTraking_1[_0x26992a(0xc0)]['findOne']({'where':{'ticketId':_0x1e5286['id'],'finishedAt':null}});let {expiresInactiveMessage:_0x3f5af5,expiresTicket:_0x2a98c1}=_0x5686bc;if(_0x2a98c1&&_0x2a98c1!==''&&_0x2a98c1!=='0'&&Number(_0x2a98c1)>0x0){const _0x5708a5=(0x0,Mustache_1['default'])('‎\x20'+_0x3f5af5,_0x3a1f32),_0x123999=new Date();_0x123999[_0x26992a(0xc4)](_0x123999[_0x26992a(0xd7)]()-Number(_0x2a98c1));if(_0x3a1f32[_0x26992a(0xd9)]===_0x26992a(0xd1)&&!_0x3a1f32['isGroup']){const _0x3e275f=new Date(_0x3a1f32[_0x26992a(0xa3)]);if(_0x3e275f<_0x123999&&_0x3a1f32[_0x26992a(0xbe)]){await _0xbcd88b(_0x3a1f32,_0x3a1f32[_0x26992a(0xd9)],_0x5708a5);if(_0x3f5af5!==''&&_0x3f5af5!==undefined){await(0x0,SendPresenceStatus_1[_0x26992a(0xb5)])((0x0,wbot_1[_0x26992a(0xad)])(_0x1e5286[_0x26992a(0xaa)]),_0x1e5286[_0x26992a(0xb7)]['number']+'@'+(_0x1e5286[_0x26992a(0xd6)]?_0x26992a(0xae):_0x26992a(0xb1)));const _0x38d369=await(0x0,SendWhatsAppMessage_1[_0x26992a(0xc0)])({'body':_0x5708a5,'ticket':_0x3a1f32});await(0x0,wbotMessageListener_1[_0x26992a(0xd5)])(_0x38d369,_0x3a1f32,_0x3a1f32[_0x26992a(0xb7)]);}await _0x16a856[_0x26992a(0xb2)]({'finishedAt':(0x0,moment_1[_0x26992a(0xc0)])()['toDate'](),'closedAt':(0x0,moment_1[_0x26992a(0xc0)])()['toDate'](),'whatsappId':_0x1e5286[_0x26992a(0xaa)],'userId':_0x1e5286['userId']}),_0x27e3de['to']('company-'+_0x1e5286['companyId']+_0x26992a(0xca))[_0x26992a(0xb9)](_0x26992a(0xdb)+_0x4181ad+_0x26992a(0xd3),{'action':_0x26992a(0xdd),'ticketId':_0x3a1f32['id']});}}}}}catch(_0xf82a83){console[_0x26992a(0xa8)]('e',_0xf82a83);}};exports[a556_0x5620ed(0xa7)]=ClosedAllOpenTickets;