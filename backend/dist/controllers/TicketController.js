const a40_0x53e878=a40_0x1450;(function(_0x134d3c,_0x3550bc){const _0x427cd7=a40_0x1450,_0x1274ad=_0x134d3c();while(!![]){try{const _0xb9f61e=parseInt(_0x427cd7(0x111))/0x1*(-parseInt(_0x427cd7(0x140))/0x2)+parseInt(_0x427cd7(0x10f))/0x3+parseInt(_0x427cd7(0x126))/0x4*(-parseInt(_0x427cd7(0x109))/0x5)+-parseInt(_0x427cd7(0x11e))/0x6+-parseInt(_0x427cd7(0x127))/0x7*(parseInt(_0x427cd7(0x120))/0x8)+parseInt(_0x427cd7(0x112))/0x9+parseInt(_0x427cd7(0x11d))/0xa;if(_0xb9f61e===_0x3550bc)break;else _0x1274ad['push'](_0x1274ad['shift']());}catch(_0x4a02f6){_0x1274ad['push'](_0x1274ad['shift']());}}}(a40_0x42ee,0xd0c52));const a40_0x3824b7=(function(){let _0x3fabc6=!![];return function(_0x3c04cf,_0x2b9098){const _0xa1b076=_0x3fabc6?function(){const _0x5ea309=a40_0x1450;if(_0x2b9098){const _0x21039d=_0x2b9098[_0x5ea309(0x13d)](_0x3c04cf,arguments);return _0x2b9098=null,_0x21039d;}}:function(){};return _0x3fabc6=![],_0xa1b076;};}()),a40_0xcf2428=a40_0x3824b7(this,function(){const _0x554925=a40_0x1450;return a40_0xcf2428[_0x554925(0x135)]()[_0x554925(0x12f)](_0x554925(0x134))[_0x554925(0x135)]()[_0x554925(0x114)](a40_0xcf2428)[_0x554925(0x12f)](_0x554925(0x134));});a40_0xcf2428();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x57f10b){const _0x56bc05=a40_0x1450;return _0x57f10b&&_0x57f10b[_0x56bc05(0x10a)]?_0x57f10b:{'default':_0x57f10b};};Object[a40_0x53e878(0x130)](exports,a40_0x53e878(0x10a),{'value':!![]}),exports[a40_0x53e878(0x12a)]=exports[a40_0x53e878(0x12c)]=exports['closeAll']=exports[a40_0x53e878(0x138)]=exports[a40_0x53e878(0x132)]=exports[a40_0x53e878(0x11a)]=exports['store']=exports['index']=void 0x0;const socket_1=require(a40_0x53e878(0x136)),Ticket_1=__importDefault(require(a40_0x53e878(0x12d))),CreateTicketService_1=__importDefault(require('../services/TicketServices/CreateTicketService')),DeleteTicketService_1=__importDefault(require(a40_0x53e878(0x13f))),ListTicketsService_1=__importDefault(require(a40_0x53e878(0x10e))),ShowTicketFromUUIDService_1=__importDefault(require(a40_0x53e878(0x117))),ShowTicketService_1=__importDefault(require('../services/TicketServices/ShowTicketService')),UpdateTicketService_1=__importDefault(require('../services/TicketServices/UpdateTicketService')),ListTicketsServiceKanban_1=__importDefault(require('../services/TicketServices/ListTicketsServiceKanban')),async_mutex_1=require(a40_0x53e878(0x124)),User_1=__importDefault(require(a40_0x53e878(0x10d))),index=async(_0x417f84,_0x42f175)=>{const _0x42e736=a40_0x53e878,{pageNumber:_0x3fc4e9,status:_0x3fb746,date:_0x4c8297,updatedAt:_0x1dbd6a,searchParam:_0x144e7d,showAll:_0x17d78c,queueIds:_0x11fb21,tags:_0x4d2f4a,users:_0x3eabdb,withUnreadMessages:_0x1e9348}=_0x417f84['query'],_0x294d1c=_0x417f84[_0x42e736(0x113)]['id'],{companyId:_0x4fa5d1}=_0x417f84[_0x42e736(0x113)];let _0x55e3e3=[],_0x3a7b4a=[],_0x173b0f=[];_0x11fb21&&(_0x55e3e3=JSON[_0x42e736(0x110)](_0x11fb21));_0x4d2f4a&&(_0x3a7b4a=JSON[_0x42e736(0x110)](_0x4d2f4a));_0x3eabdb&&(_0x173b0f=JSON[_0x42e736(0x110)](_0x3eabdb));const _0x37069b=_0x417f84[_0x42e736(0x133)][_0x42e736(0x118)],_0x353ecd=_0x417f84[_0x42e736(0x133)][_0x42e736(0x11b)],{tickets:_0x22a340,count:_0x53594a,hasMore:_0x110a5f}=await(0x0,ListTicketsService_1['default'])({'searchParam':_0x144e7d,'tags':_0x3a7b4a,'users':_0x173b0f,'pageNumber':_0x3fc4e9,'status':_0x3fb746,'date':_0x4c8297,'updatedAt':_0x1dbd6a,'showAll':_0x17d78c,'userId':_0x294d1c,'queueIds':_0x55e3e3,'withUnreadMessages':_0x1e9348,'companyId':_0x4fa5d1,'startDate':_0x37069b,'endDate':_0x353ecd});return _0x42f175['status'](0xc8)['json']({'tickets':_0x22a340,'count':_0x53594a,'hasMore':_0x110a5f});};exports[a40_0x53e878(0x123)]=index;const store=async(_0x520f72,_0x2c6b41)=>{const _0x5dc79e=a40_0x53e878,{contactId:_0x51bfb9,status:_0x55e44b,userId:_0x4d8362,queueId:_0x235d88,whatsappId:_0xc3eb59}=_0x520f72[_0x5dc79e(0x115)],{companyId:_0x3f068c,id:_0x85756b}=_0x520f72[_0x5dc79e(0x113)],_0x1a5434=await Ticket_1[_0x5dc79e(0x11c)][_0x5dc79e(0x122)]({'where':{'userId':_0x85756b,'status':_0x5dc79e(0x10c),'companyId':_0x3f068c}}),{limitAttendance:_0x29c6d9,name:_0x4e0403}=await User_1['default'][_0x5dc79e(0x13c)](_0x85756b);if(_0x1a5434>=_0x29c6d9){}const _0x101eaa=await(0x0,CreateTicketService_1[_0x5dc79e(0x11c)])({'contactId':_0x51bfb9,'status':_0x55e44b,'userId':_0x4d8362,'companyId':_0x3f068c,'queueId':_0x235d88,'whatsappId':_0xc3eb59}),_0x436871=(0x0,socket_1[_0x5dc79e(0x12b)])();return _0x436871['to']('company-'+_0x101eaa['companyId']+'-'+_0x101eaa[_0x5dc79e(0x13a)])['to'](_0x5dc79e(0x125)+_0x101eaa[_0x5dc79e(0x10b)]+'-'+_0x101eaa[_0x5dc79e(0x13a)])[_0x5dc79e(0x128)](_0x5dc79e(0x12e)+_0x3f068c+_0x5dc79e(0x11f),{'action':_0x5dc79e(0x12c),'ticket':_0x101eaa}),_0x2c6b41[_0x5dc79e(0x13a)](0xc8)['json'](_0x101eaa);};exports['store']=store;const kanban=async(_0x2d6a58,_0xfe7f79)=>{const _0x178b39=a40_0x53e878,{pageNumber:_0x176121,status:_0x17dd76,date:_0xed84bd,updatedAt:_0x400f8a,searchParam:_0x2ea35d,showAll:_0x1408c9,queueIds:_0x2980d0,tags:_0x43d6dc,users:_0x55531b,withUnreadMessages:_0x2c4977}=_0x2d6a58[_0x178b39(0x133)],_0x2927dd=_0x2d6a58['user']['id'],{companyId:_0x3d62ff}=_0x2d6a58['user'];let _0x3c69bb=[],_0x1d2411=[],_0x27901e=[];_0x2980d0&&(_0x3c69bb=JSON[_0x178b39(0x110)](_0x2980d0));_0x43d6dc&&(_0x1d2411=JSON['parse'](_0x43d6dc));_0x55531b&&(_0x27901e=JSON[_0x178b39(0x110)](_0x55531b));const {tickets:_0x5daf53,count:_0x120041,hasMore:_0x5beeaa}=await(0x0,ListTicketsServiceKanban_1['default'])({'searchParam':_0x2ea35d,'tags':_0x1d2411,'users':_0x27901e,'pageNumber':_0x176121,'status':_0x17dd76,'date':_0xed84bd,'updatedAt':_0x400f8a,'showAll':_0x1408c9,'userId':_0x2927dd,'queueIds':_0x3c69bb,'withUnreadMessages':_0x2c4977,'companyId':_0x3d62ff});return _0xfe7f79[_0x178b39(0x13a)](0xc8)[_0x178b39(0x121)]({'tickets':_0x5daf53,'count':_0x120041,'hasMore':_0x5beeaa});};function a40_0x42ee(){const _0x4118f1=['__esModule','queueId','open','../models/User','../services/TicketServices/ListTicketsService','3235608lOYrwI','parse','7NykWta','215568IuobEz','user','constructor','body','params','../services/TicketServices/ShowTicketFromUUIDService','startDate','tokenData','kanban','endDate','default','41654250YWmlPs','4822854XQhXPK','-ticket','8dUzPja','json','count','index','async-mutex','queue-','3032IUGJej','7492681AzKuLM','emit','-notification','remove','getIO','update','../models/Ticket','company-','search','defineProperty','runExclusive','show','query','(((.+)+)+)+$','toString','../libs/socket','closeAll','showFromUUID','userId','status','all\x20tickets\x20closed','findByPk','apply','companyId','../services/TicketServices/DeleteTicketService','314478dUCURp','9485MWNcSe'];a40_0x42ee=function(){return _0x4118f1;};return a40_0x42ee();}exports[a40_0x53e878(0x11a)]=kanban;const show=async(_0x5f0502,_0x250d09)=>{const _0x4d10bc=a40_0x53e878,{ticketId:_0x417d63}=_0x5f0502['params'],{companyId:_0x13b94c}=_0x5f0502['user'],_0x4ada8c=await(0x0,ShowTicketService_1[_0x4d10bc(0x11c)])(_0x417d63,_0x13b94c);return _0x250d09[_0x4d10bc(0x13a)](0xc8)[_0x4d10bc(0x121)](_0x4ada8c);};exports[a40_0x53e878(0x132)]=show;const showFromUUID=async(_0x1d4cca,_0xc1c83e)=>{const _0x424096=a40_0x53e878,{uuid:_0x50ff6a}=_0x1d4cca[_0x424096(0x116)],_0x242d41=await(0x0,ShowTicketFromUUIDService_1['default'])(_0x50ff6a);return _0xc1c83e[_0x424096(0x13a)](0xc8)[_0x424096(0x121)](_0x242d41);};exports[a40_0x53e878(0x138)]=showFromUUID;function a40_0x1450(_0x48bfc2,_0x4e0005){const _0x21932d=a40_0x42ee();return a40_0x1450=function(_0xcf2428,_0x3824b7){_0xcf2428=_0xcf2428-0x109;let _0x42eec6=_0x21932d[_0xcf2428];return _0x42eec6;},a40_0x1450(_0x48bfc2,_0x4e0005);}const closeAll=async(_0x1256b9,_0x245c9f)=>{const _0xf882c1=a40_0x53e878,{companyId:_0x264f1a}=_0x1256b9[_0xf882c1(0x113)];var _0x3e72d4=_0x1256b9['body'][_0xf882c1(0x13a)],_0xf57f0e=await Ticket_1['default']['findAll']({'where':{'companyId':_0x264f1a,'status':_0x3e72d4}});for(const _0x51011c of _0xf57f0e){(0x0,UpdateTicketService_1[_0xf882c1(0x11c)])({'ticketData':{'status':'closed','userId':_0x51011c[_0xf882c1(0x139)]||null,'queueId':_0x51011c[_0xf882c1(0x10b)]||null,'unreadMessages':0x0,'amountUsedBotQueues':0x0,'sendFarewellMessage':![]},'ticketId':_0x51011c['id'],'companyId':_0x264f1a});}return _0x245c9f[_0xf882c1(0x13a)](0xc8)[_0xf882c1(0x121)]({'message':_0xf882c1(0x13b)});};exports[a40_0x53e878(0x137)]=closeAll;const update=async(_0x1dfc7c,_0x4521a9)=>{const _0x190a8f=a40_0x53e878,{ticketId:_0x5db7af}=_0x1dfc7c[_0x190a8f(0x116)],_0x3c8e92=_0x1dfc7c[_0x190a8f(0x115)],{companyId:_0x3c33df,id:_0x48c3dc}=_0x1dfc7c[_0x190a8f(0x113)],_0x3b68aa=await Ticket_1[_0x190a8f(0x11c)][_0x190a8f(0x122)]({'where':{'userId':_0x48c3dc,'status':_0x190a8f(0x10c),'companyId':_0x3c33df}}),{limitAttendance:_0x187fdb,name:_0x24ae61}=await User_1['default'][_0x190a8f(0x13c)](_0x48c3dc);if(_0x3c8e92[_0x190a8f(0x13a)]===_0x190a8f(0x10c)&&_0x3b68aa>=_0x187fdb){}const _0x54fdae=new async_mutex_1['Mutex'](),{ticket:_0x1bd2a8}=await _0x54fdae[_0x190a8f(0x131)](async()=>{const _0x540f16=_0x190a8f;return await(0x0,UpdateTicketService_1[_0x540f16(0x11c)])({'ticketData':_0x1dfc7c[_0x540f16(0x115)],'ticketId':_0x5db7af,'companyId':_0x3c33df,'tokenData':_0x1dfc7c[_0x540f16(0x119)]});});return _0x4521a9[_0x190a8f(0x13a)](0xc8)['json'](_0x1bd2a8);};exports[a40_0x53e878(0x12c)]=update;const remove=async(_0x23fd29,_0x2dd579)=>{const _0x3909e2=a40_0x53e878,{ticketId:_0x150be6}=_0x23fd29[_0x3909e2(0x116)],{companyId:_0x450a27}=_0x23fd29['user'];await(0x0,ShowTicketService_1[_0x3909e2(0x11c)])(_0x150be6,_0x450a27);const _0x14789c=await(0x0,DeleteTicketService_1[_0x3909e2(0x11c)])(_0x150be6),_0x129636=(0x0,socket_1[_0x3909e2(0x12b)])();return _0x129636['to'](_0x3909e2(0x12e)+_0x450a27+'-'+_0x14789c[_0x3909e2(0x13a)])['to'](_0x150be6)['to'](_0x3909e2(0x125)+_0x14789c[_0x3909e2(0x10b)]+_0x3909e2(0x129))['to']('queue-'+_0x14789c['queueId']+'-'+_0x14789c[_0x3909e2(0x13a)])['to'](_0x3909e2(0x12e)+_0x14789c[_0x3909e2(0x13e)]+_0x3909e2(0x129))[_0x3909e2(0x128)](_0x3909e2(0x12e)+_0x450a27+_0x3909e2(0x11f),{'action':'delete','ticketId':+_0x150be6}),_0x2dd579[_0x3909e2(0x13a)](0xc8)[_0x3909e2(0x121)]({'message':'ticket\x20deleted'});};exports[a40_0x53e878(0x12a)]=remove;