function a523_0x4915(_0x55e1ca,_0x110e45){const _0x5af7bf=a523_0x31a3();return a523_0x4915=function(_0x1fcad8,_0xfd8a24){_0x1fcad8=_0x1fcad8-0x1c2;let _0x31a355=_0x5af7bf[_0x1fcad8];return _0x31a355;},a523_0x4915(_0x55e1ca,_0x110e45);}const a523_0x3741ed=a523_0x4915;(function(_0x3de1de,_0x3e8d19){const _0x5178b2=a523_0x4915,_0x26835c=_0x3de1de();while(!![]){try{const _0x32715f=-parseInt(_0x5178b2(0x1dd))/0x1*(parseInt(_0x5178b2(0x1e1))/0x2)+-parseInt(_0x5178b2(0x1df))/0x3+parseInt(_0x5178b2(0x1d2))/0x4*(parseInt(_0x5178b2(0x1c2))/0x5)+-parseInt(_0x5178b2(0x1d4))/0x6+-parseInt(_0x5178b2(0x1d3))/0x7+-parseInt(_0x5178b2(0x1cb))/0x8+parseInt(_0x5178b2(0x1c7))/0x9*(parseInt(_0x5178b2(0x1e3))/0xa);if(_0x32715f===_0x3e8d19)break;else _0x26835c['push'](_0x26835c['shift']());}catch(_0x124b1c){_0x26835c['push'](_0x26835c['shift']());}}}(a523_0x31a3,0xc44c1));const a523_0xfd8a24=(function(){let _0x830f0b=!![];return function(_0x37ef51,_0x504d41){const _0xfccd61=_0x830f0b?function(){const _0x25cced=a523_0x4915;if(_0x504d41){const _0x455aae=_0x504d41[_0x25cced(0x1da)](_0x37ef51,arguments);return _0x504d41=null,_0x455aae;}}:function(){};return _0x830f0b=![],_0xfccd61;};}()),a523_0x1fcad8=a523_0xfd8a24(this,function(){const _0x49163e=a523_0x4915;return a523_0x1fcad8['toString']()[_0x49163e(0x1cf)]('(((.+)+)+)+$')[_0x49163e(0x1ce)]()[_0x49163e(0x1c9)](a523_0x1fcad8)['search'](_0x49163e(0x1d8));});a523_0x1fcad8();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x27eb50){const _0x4007ec=a523_0x4915;return _0x27eb50&&_0x27eb50[_0x4007ec(0x1db)]?_0x27eb50:{'default':_0x27eb50};};Object[a523_0x3741ed(0x1d5)](exports,a523_0x3741ed(0x1db),{'value':!![]});function a523_0x31a3(){const _0x2dea3d=['./ShowTicketService','7650hODiEL','sequelize','between','65GZWAay','status','default','DESC','pending','39843RiVqrb','findOne','constructor','value','6316616ZAIRlU','open','closed','toString','search','create','date-fns','440292yDEgLA','6763218bqLhIN','1566642vYlUHW','defineProperty','isGroup','userId','(((.+)+)+)+$','update','apply','__esModule','whatsappId','307boFOlw','../../models/Ticket','3714348WFBIKR','updatedAt','4942VSegxW'];a523_0x31a3=function(){return _0x2dea3d;};return a523_0x31a3();}const date_fns_1=require(a523_0x3741ed(0x1d1)),sequelize_1=require(a523_0x3741ed(0x1e4)),Ticket_1=__importDefault(require(a523_0x3741ed(0x1de))),ShowTicketService_1=__importDefault(require(a523_0x3741ed(0x1e2))),FindOrCreateATicketTrakingService_1=__importDefault(require('./FindOrCreateATicketTrakingService')),Setting_1=__importDefault(require('../../models/Setting')),Whatsapp_1=__importDefault(require('../../models/Whatsapp')),FindOrCreateTicketService=async(_0x496314,_0x136e8d,_0x467245,_0x97c764,_0x31b11f,_0x4411da)=>{const _0x315dc8=a523_0x3741ed;let _0x314093=await Ticket_1['default'][_0x315dc8(0x1c8)]({'where':{'status':{[sequelize_1['Op']['or']]:[_0x315dc8(0x1cc),_0x315dc8(0x1c6),_0x315dc8(0x1cd)]},'contactId':_0x31b11f?_0x31b11f['id']:_0x496314['id'],'companyId':_0x97c764,'whatsappId':_0x136e8d},'order':[['id',_0x315dc8(0x1c5)]]});_0x314093&&(_0x314093[_0x315dc8(0x1c3)]===_0x315dc8(0x1cd)?await _0x314093['update']({'unreadMessages':_0x467245,'whatsappId':_0x136e8d,'queueId':null,'userId':null,'status':_0x315dc8(0x1c6),'imported':_0x4411da?new Date():null}):await _0x314093[_0x315dc8(0x1d9)]({'unreadMessages':_0x467245,'whatsappId':_0x136e8d,'imported':_0x4411da?new Date():null}));if(!_0x314093&&_0x31b11f){_0x314093=await Ticket_1['default']['findOne']({'where':{'contactId':_0x31b11f['id'],'whatsappId':_0x136e8d},'order':[[_0x315dc8(0x1e0),_0x315dc8(0x1c5)]]});_0x314093&&(await _0x314093['update']({'status':_0x315dc8(0x1c6),'imported':_0x4411da?new Date():null,'userId':null,'unreadMessages':_0x467245,'isGroup':_0x496314[_0x315dc8(0x1d6)],'whatsappId':_0x136e8d,'queueId':null,'companyId':_0x97c764}),await(0x0,FindOrCreateATicketTrakingService_1[_0x315dc8(0x1c4)])({'ticketId':_0x314093['id'],'companyId':_0x97c764,'whatsappId':_0x314093['whatsappId'],'userId':_0x314093[_0x315dc8(0x1d7)]}));const _0x507de9=await Setting_1['default']['findOne']({'where':{'key':'timeCreateNewTicket'}}),_0x11704d=_0x507de9?parseInt(_0x507de9[_0x315dc8(0x1ca)],0xa):0x1c20;}!_0x314093&&!_0x31b11f&&(_0x314093=await Ticket_1[_0x315dc8(0x1c4)][_0x315dc8(0x1c8)]({'where':{'updatedAt':{[sequelize_1['Op'][_0x315dc8(0x1e5)]]:[+(0x0,date_fns_1['subHours'])(new Date(),0x2),+new Date()]},'contactId':_0x496314['id'],'whatsappId':_0x136e8d},'order':[[_0x315dc8(0x1e0),_0x315dc8(0x1c5)]]}),_0x314093&&(await _0x314093[_0x315dc8(0x1d9)]({'status':'pending','imported':_0x4411da?new Date():null,'userId':null,'isGroup':_0x496314[_0x315dc8(0x1d6)],'unreadMessages':_0x467245,'whatsappId':_0x136e8d,'queueId':null,'companyId':_0x97c764}),await(0x0,FindOrCreateATicketTrakingService_1[_0x315dc8(0x1c4)])({'ticketId':_0x314093['id'],'companyId':_0x97c764,'whatsappId':_0x314093[_0x315dc8(0x1dc)],'userId':_0x314093[_0x315dc8(0x1d7)]})));if(!_0x314093){const _0x6b5cc3=await Whatsapp_1['default'][_0x315dc8(0x1c8)]({'where':{'id':_0x136e8d}});_0x314093=await Ticket_1['default'][_0x315dc8(0x1d0)]({'imported':_0x4411da?new Date():null,'contactId':_0x31b11f?_0x31b11f['id']:_0x496314['id'],'status':_0x315dc8(0x1c6),'isGroup':!!_0x31b11f||_0x496314[_0x315dc8(0x1d6)],'unreadMessages':_0x467245,'whatsappId':_0x136e8d,'whatsapp':_0x6b5cc3,'companyId':_0x97c764}),await(0x0,FindOrCreateATicketTrakingService_1[_0x315dc8(0x1c4)])({'ticketId':_0x314093['id'],'companyId':_0x97c764,'whatsappId':_0x136e8d,'userId':_0x314093[_0x315dc8(0x1d7)]});}return _0x314093=await(0x0,ShowTicketService_1['default'])(_0x314093['id'],_0x97c764),_0x314093;};exports[a523_0x3741ed(0x1c4)]=FindOrCreateTicketService;