const a12_0x587c77=a12_0x130f;(function(_0x2238c4,_0x469c01){const _0x4ba7ad=a12_0x130f,_0x480b7a=_0x2238c4();while(!![]){try{const _0x2e9e60=-parseInt(_0x4ba7ad(0x146))/0x1+parseInt(_0x4ba7ad(0x13e))/0x2+parseInt(_0x4ba7ad(0x135))/0x3+-parseInt(_0x4ba7ad(0x11c))/0x4*(-parseInt(_0x4ba7ad(0x12d))/0x5)+parseInt(_0x4ba7ad(0x130))/0x6+-parseInt(_0x4ba7ad(0x13b))/0x7*(parseInt(_0x4ba7ad(0x115))/0x8)+-parseInt(_0x4ba7ad(0x138))/0x9;if(_0x2e9e60===_0x469c01)break;else _0x480b7a['push'](_0x480b7a['shift']());}catch(_0x31e8e4){_0x480b7a['push'](_0x480b7a['shift']());}}}(a12_0x5b62,0xe6b59));const a12_0x1cb4b3=(function(){let _0x537660=!![];return function(_0x18994d,_0x46c392){const _0x5ba67c=_0x537660?function(){const _0x4faa4a=a12_0x130f;if(_0x46c392){const _0x17c85b=_0x46c392[_0x4faa4a(0x11a)](_0x18994d,arguments);return _0x46c392=null,_0x17c85b;}}:function(){};return _0x537660=![],_0x5ba67c;};}()),a12_0x566b40=a12_0x1cb4b3(this,function(){const _0x1b419d=a12_0x130f;return a12_0x566b40[_0x1b419d(0x145)]()['search'](_0x1b419d(0x131))[_0x1b419d(0x145)]()['constructor'](a12_0x566b40)[_0x1b419d(0x128)](_0x1b419d(0x131));});function a12_0x5b62(){const _0x4b63d5=['userId','defineProperty','new-message','search','users','../models/User','query','../services/ChatService/DeleteService','2897545GWzxpN','-chat-user-','__esModule','3107634ORTsSJ','(((.+)+)+)+$','company-','index','findByPk','4248792bIOhjE','owner','../models/Chat','16449021uCkcuR','default','update','21YycGnf','emit','-mainchannel','2104382nyDUWC','../services/ChatService/CreateService','saveMessage','forEach','../services/ChatService/ListService','remove','body','toString','663682AmZfUH','-chat','delete','getIO','messages','345512ZGzWPt','__importDefault','json','findOne','status','apply','user','4BhBpRo','params','../services/ChatService/FindMessages','Chat\x20deleted','../services/ChatService/ShowFromUuidService','-chat-','../services/ChatService/UpdateService','store','show'];a12_0x5b62=function(){return _0x4b63d5;};return a12_0x5b62();}a12_0x566b40();function a12_0x130f(_0x454606,_0x4fae0b){const _0x35a951=a12_0x5b62();return a12_0x130f=function(_0x566b40,_0x1cb4b3){_0x566b40=_0x566b40-0x114;let _0x5b6283=_0x35a951[_0x566b40];return _0x5b6283;},a12_0x130f(_0x454606,_0x4fae0b);}'use strict';var __importDefault=this&&this[a12_0x587c77(0x116)]||function(_0x2f97e4){return _0x2f97e4&&_0x2f97e4['__esModule']?_0x2f97e4:{'default':_0x2f97e4};};Object[a12_0x587c77(0x126)](exports,a12_0x587c77(0x12f),{'value':!![]}),exports[a12_0x587c77(0x114)]=exports['checkAsRead']=exports[a12_0x587c77(0x140)]=exports['remove']=exports[a12_0x587c77(0x124)]=exports[a12_0x587c77(0x13a)]=exports[a12_0x587c77(0x123)]=exports[a12_0x587c77(0x133)]=void 0x0;const socket_1=require('../libs/socket'),CreateService_1=__importDefault(require(a12_0x587c77(0x13f))),ListService_1=__importDefault(require(a12_0x587c77(0x142))),ShowFromUuidService_1=__importDefault(require(a12_0x587c77(0x120))),DeleteService_1=__importDefault(require(a12_0x587c77(0x12c))),FindMessages_1=__importDefault(require(a12_0x587c77(0x11e))),UpdateService_1=__importDefault(require(a12_0x587c77(0x122))),Chat_1=__importDefault(require(a12_0x587c77(0x137))),CreateMessageService_1=__importDefault(require('../services/ChatService/CreateMessageService')),User_1=__importDefault(require(a12_0x587c77(0x12a))),ChatUser_1=__importDefault(require('../models/ChatUser')),index=async(_0x362395,_0x3bec15)=>{const _0x5d0bcc=a12_0x587c77,{pageNumber:_0x29c4f2}=_0x362395[_0x5d0bcc(0x12b)],_0x3a020f=+_0x362395[_0x5d0bcc(0x11b)]['id'],{records:_0x3a29e2,count:_0x1ecc09,hasMore:_0x1e9f0b}=await(0x0,ListService_1[_0x5d0bcc(0x139)])({'ownerId':_0x3a020f,'pageNumber':_0x29c4f2});return _0x3bec15[_0x5d0bcc(0x117)]({'records':_0x3a29e2,'count':_0x1ecc09,'hasMore':_0x1e9f0b});};exports[a12_0x587c77(0x133)]=index;const store=async(_0x5c1bf1,_0x19dec5)=>{const _0x5184c4=a12_0x587c77,{companyId:_0x524357}=_0x5c1bf1['user'],_0x502b2e=+_0x5c1bf1['user']['id'],_0x555c43=_0x5c1bf1[_0x5184c4(0x144)],_0x1ff479=await(0x0,CreateService_1[_0x5184c4(0x139)])({..._0x555c43,'ownerId':_0x502b2e,'companyId':_0x524357}),_0x412ba5=(0x0,socket_1[_0x5184c4(0x149)])();return _0x1ff479[_0x5184c4(0x129)][_0x5184c4(0x141)](_0x940dbc=>{const _0x15ce04=_0x5184c4;_0x412ba5['to'](_0x15ce04(0x132)+_0x524357+'-mainchannel')[_0x15ce04(0x13c)](_0x15ce04(0x132)+_0x524357+_0x15ce04(0x12e)+_0x940dbc[_0x15ce04(0x125)],{'action':'create','record':_0x1ff479});}),_0x19dec5[_0x5184c4(0x119)](0xc8)[_0x5184c4(0x117)](_0x1ff479);};exports[a12_0x587c77(0x123)]=store;const update=async(_0x3e3c86,_0x19f13e)=>{const _0x576248=a12_0x587c77,{companyId:_0x787f2}=_0x3e3c86[_0x576248(0x11b)],_0x480cdb=_0x3e3c86[_0x576248(0x144)],{id:_0x3a3769}=_0x3e3c86[_0x576248(0x11d)],_0x3b6398=await(0x0,UpdateService_1[_0x576248(0x139)])({..._0x480cdb,'id':+_0x3a3769}),_0x35b221=(0x0,socket_1[_0x576248(0x149)])();return _0x3b6398['users'][_0x576248(0x141)](_0x326cdb=>{const _0x5bf651=_0x576248;_0x35b221['to'](_0x5bf651(0x132)+_0x787f2+'-mainchannel')[_0x5bf651(0x13c)]('company-'+_0x787f2+_0x5bf651(0x12e)+_0x326cdb[_0x5bf651(0x125)],{'action':_0x5bf651(0x13a),'record':_0x3b6398});}),_0x19f13e[_0x576248(0x119)](0xc8)[_0x576248(0x117)](_0x3b6398);};exports[a12_0x587c77(0x13a)]=update;const show=async(_0x104634,_0x375864)=>{const _0x5d0002=a12_0x587c77,{id:_0x577791}=_0x104634[_0x5d0002(0x11d)],_0x3dbbcd=await(0x0,ShowFromUuidService_1['default'])(_0x577791);return _0x375864[_0x5d0002(0x119)](0xc8)['json'](_0x3dbbcd);};exports['show']=show;const remove=async(_0x1f6408,_0x3dfed7)=>{const _0x2ad821=a12_0x587c77,{id:_0x453d6c}=_0x1f6408[_0x2ad821(0x11d)],{companyId:_0x22f3b5}=_0x1f6408['user'];await(0x0,DeleteService_1[_0x2ad821(0x139)])(_0x453d6c);const _0x44aa21=(0x0,socket_1[_0x2ad821(0x149)])();return _0x44aa21['to'](_0x2ad821(0x132)+_0x22f3b5+'-mainchannel')[_0x2ad821(0x13c)]('company-'+_0x22f3b5+'-chat',{'action':_0x2ad821(0x148),'id':_0x453d6c}),_0x3dfed7['status'](0xc8)['json']({'message':_0x2ad821(0x11f)});};exports[a12_0x587c77(0x143)]=remove;const saveMessage=async(_0x1104bf,_0x30393a)=>{const _0xb9bfa8=a12_0x587c77,{companyId:_0x4cf91c}=_0x1104bf['user'],{message:_0x367d92}=_0x1104bf[_0xb9bfa8(0x144)],{id:_0x93e05b}=_0x1104bf['params'],_0x44578b=+_0x1104bf[_0xb9bfa8(0x11b)]['id'],_0xa3769f=+_0x93e05b,_0x281196=await(0x0,CreateMessageService_1[_0xb9bfa8(0x139)])({'chatId':_0xa3769f,'senderId':_0x44578b,'message':_0x367d92}),_0x25ac56=await Chat_1[_0xb9bfa8(0x139)][_0xb9bfa8(0x134)](_0xa3769f,{'include':[{'model':User_1[_0xb9bfa8(0x139)],'as':_0xb9bfa8(0x136)},{'model':ChatUser_1[_0xb9bfa8(0x139)],'as':_0xb9bfa8(0x129)}]}),_0x53c59c=(0x0,socket_1[_0xb9bfa8(0x149)])();return _0x53c59c['to'](_0xb9bfa8(0x132)+_0x4cf91c+_0xb9bfa8(0x13d))[_0xb9bfa8(0x13c)](_0xb9bfa8(0x132)+_0x4cf91c+_0xb9bfa8(0x121)+_0xa3769f,{'action':_0xb9bfa8(0x127),'newMessage':_0x281196,'chat':_0x25ac56}),_0x53c59c['to'](_0xb9bfa8(0x132)+_0x4cf91c+'-mainchannel')['emit'](_0xb9bfa8(0x132)+_0x4cf91c+_0xb9bfa8(0x147),{'action':_0xb9bfa8(0x127),'newMessage':_0x281196,'chat':_0x25ac56}),_0x30393a[_0xb9bfa8(0x117)](_0x281196);};exports[a12_0x587c77(0x140)]=saveMessage;const checkAsRead=async(_0x1b6204,_0xe409b0)=>{const _0x287e78=a12_0x587c77,{companyId:_0x2ed009}=_0x1b6204[_0x287e78(0x11b)],{userId:_0x49a3d2}=_0x1b6204[_0x287e78(0x144)],{id:_0x3e6a22}=_0x1b6204[_0x287e78(0x11d)],_0x3a66ca=await ChatUser_1[_0x287e78(0x139)][_0x287e78(0x118)]({'where':{'chatId':_0x3e6a22,'userId':_0x49a3d2}});await _0x3a66ca[_0x287e78(0x13a)]({'unreads':0x0});const _0xa94068=await Chat_1[_0x287e78(0x139)][_0x287e78(0x134)](_0x3e6a22,{'include':[{'model':User_1[_0x287e78(0x139)],'as':_0x287e78(0x136)},{'model':ChatUser_1[_0x287e78(0x139)],'as':_0x287e78(0x129)}]}),_0x1cbebe=(0x0,socket_1[_0x287e78(0x149)])();return _0x1cbebe['to'](_0x287e78(0x132)+_0x2ed009+_0x287e78(0x13d))[_0x287e78(0x13c)](_0x287e78(0x132)+_0x2ed009+_0x287e78(0x121)+_0x3e6a22,{'action':'update','chat':_0xa94068}),_0x1cbebe['to'](_0x287e78(0x132)+_0x2ed009+_0x287e78(0x13d))[_0x287e78(0x13c)](_0x287e78(0x132)+_0x2ed009+'-chat',{'action':'update','chat':_0xa94068}),_0xe409b0[_0x287e78(0x117)](_0xa94068);};exports['checkAsRead']=checkAsRead;const messages=async(_0x33de44,_0x5cc459)=>{const _0x2ea6d3=a12_0x587c77,{pageNumber:_0xe83633}=_0x33de44[_0x2ea6d3(0x12b)],{id:_0x4fd1f3}=_0x33de44['params'],_0x1d902c=+_0x33de44['user']['id'],{records:_0x5039ad,count:_0x55636f,hasMore:_0x419f90}=await(0x0,FindMessages_1['default'])({'chatId':_0x4fd1f3,'ownerId':_0x1d902c,'pageNumber':_0xe83633});return _0x5cc459[_0x2ea6d3(0x117)]({'records':_0x5039ad,'count':_0x55636f,'hasMore':_0x419f90});};exports['messages']=messages;