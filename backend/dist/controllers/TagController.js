const a38_0x53b7c6=a38_0x7a97;(function(_0x3bce5f,_0x43cf49){const _0x3dd055=a38_0x7a97,_0x495f57=_0x3bce5f();while(!![]){try{const _0x2701db=-parseInt(_0x3dd055(0x1df))/0x1+-parseInt(_0x3dd055(0x1c5))/0x2+-parseInt(_0x3dd055(0x1ce))/0x3*(parseInt(_0x3dd055(0x1ba))/0x4)+parseInt(_0x3dd055(0x1c7))/0x5+parseInt(_0x3dd055(0x1c9))/0x6+-parseInt(_0x3dd055(0x1d1))/0x7*(parseInt(_0x3dd055(0x1c0))/0x8)+parseInt(_0x3dd055(0x1c3))/0x9;if(_0x2701db===_0x43cf49)break;else _0x495f57['push'](_0x495f57['shift']());}catch(_0x439634){_0x495f57['push'](_0x495f57['shift']());}}}(a38_0x178d,0x2dd51));const a38_0x383be9=(function(){let _0x105df9=!![];return function(_0xf74f29,_0x1f301e){const _0x2964ff=_0x105df9?function(){const _0x32652f=a38_0x7a97;if(_0x1f301e){const _0x56f285=_0x1f301e[_0x32652f(0x1ca)](_0xf74f29,arguments);return _0x1f301e=null,_0x56f285;}}:function(){};return _0x105df9=![],_0x2964ff;};}()),a38_0x480649=a38_0x383be9(this,function(){const _0x4bb1f0=a38_0x7a97;return a38_0x480649['toString']()[_0x4bb1f0(0x1d0)](_0x4bb1f0(0x1b4))['toString']()['constructor'](a38_0x480649)[_0x4bb1f0(0x1d0)](_0x4bb1f0(0x1b4));});a38_0x480649();'use strict';var __importDefault=this&&this[a38_0x53b7c6(0x1d2)]||function(_0x18b368){const _0x5c1065=a38_0x53b7c6;return _0x18b368&&_0x18b368[_0x5c1065(0x1d6)]?_0x18b368:{'default':_0x18b368};};Object[a38_0x53b7c6(0x1e0)](exports,a38_0x53b7c6(0x1d6),{'value':!![]}),exports[a38_0x53b7c6(0x1de)]=exports[a38_0x53b7c6(0x1dc)]=exports[a38_0x53b7c6(0x1d9)]=exports[a38_0x53b7c6(0x1b2)]=exports['update']=exports[a38_0x53b7c6(0x1c8)]=exports[a38_0x53b7c6(0x1da)]=exports['store']=exports[a38_0x53b7c6(0x1c4)]=void 0x0;const socket_1=require(a38_0x53b7c6(0x1b8)),AppError_1=__importDefault(require(a38_0x53b7c6(0x1c2))),CreateService_1=__importDefault(require(a38_0x53b7c6(0x1c6))),ListService_1=__importDefault(require(a38_0x53b7c6(0x1b3))),UpdateService_1=__importDefault(require(a38_0x53b7c6(0x1b1))),ShowService_1=__importDefault(require('../services/TagServices/ShowService')),DeleteService_1=__importDefault(require(a38_0x53b7c6(0x1bd))),DeleteAllTagService_1=__importDefault(require(a38_0x53b7c6(0x1b7))),SimpleListService_1=__importDefault(require(a38_0x53b7c6(0x1dd))),SyncTagsService_1=__importDefault(require(a38_0x53b7c6(0x1d4))),KanbanListService_1=__importDefault(require(a38_0x53b7c6(0x1b6))),index=async(_0x3cbfaf,_0x39c983)=>{const _0x4da809=a38_0x53b7c6,{pageNumber:_0x1fce3c,searchParam:_0x51a1d7}=_0x3cbfaf[_0x4da809(0x1ad)],{companyId:_0x54eb44}=_0x3cbfaf[_0x4da809(0x1d7)],{tags:_0xf70fb7,count:_0x44c5c1,hasMore:_0x1fb456}=await(0x0,ListService_1[_0x4da809(0x1af)])({'searchParam':_0x51a1d7,'pageNumber':_0x1fce3c,'companyId':_0x54eb44});return _0x39c983[_0x4da809(0x1cf)]({'tags':_0xf70fb7,'count':_0x44c5c1,'hasMore':_0x1fb456});};exports[a38_0x53b7c6(0x1c4)]=index;const store=async(_0x167c27,_0x210521)=>{const _0x37a3c4=a38_0x53b7c6,{name:_0x31d479,color:_0xfd7e42,kanban:_0xa8c53}=_0x167c27[_0x37a3c4(0x1bb)],{companyId:_0x2d2641}=_0x167c27[_0x37a3c4(0x1d7)],_0x3fec66=await(0x0,CreateService_1[_0x37a3c4(0x1af)])({'name':_0x31d479,'color':_0xfd7e42,'kanban':_0xa8c53||null,'companyId':_0x2d2641}),_0x4e533d=(0x0,socket_1[_0x37a3c4(0x1e1)])();return _0x4e533d['to'](_0x37a3c4(0x1b5)+_0x2d2641+'-mainchannel')[_0x37a3c4(0x1d5)](_0x37a3c4(0x1be),{'action':_0x37a3c4(0x1b9),'tag':_0x3fec66}),_0x210521[_0x37a3c4(0x1d8)](0xc8)['json'](_0x3fec66);};exports[a38_0x53b7c6(0x1cc)]=store;const kanban=async(_0x139fe8,_0x2503cf)=>{const _0x48666a=a38_0x53b7c6,{companyId:_0x242a40}=_0x139fe8['user'],_0x4d9a76=await(0x0,KanbanListService_1['default'])({'companyId':_0x242a40});return _0x2503cf[_0x48666a(0x1cf)]({'lista':_0x4d9a76});};exports[a38_0x53b7c6(0x1da)]=kanban;const show=async(_0x2ed009,_0x24b8de)=>{const _0x3cbb02=a38_0x53b7c6,{tagId:_0x4ba553}=_0x2ed009[_0x3cbb02(0x1bf)],_0x26225e=await(0x0,ShowService_1[_0x3cbb02(0x1af)])(_0x4ba553);return _0x24b8de[_0x3cbb02(0x1d8)](0xc8)[_0x3cbb02(0x1cf)](_0x26225e);};function a38_0x7a97(_0x45de9b,_0x4f4207){const _0x1b39df=a38_0x178d();return a38_0x7a97=function(_0x480649,_0x383be9){_0x480649=_0x480649-0x1ac;let _0x178d71=_0x1b39df[_0x480649];return _0x178d71;},a38_0x7a97(_0x45de9b,_0x4f4207);}exports[a38_0x53b7c6(0x1c8)]=show;const update=async(_0x10e5d1,_0x3a4931)=>{const _0x219262=a38_0x53b7c6;if(_0x10e5d1['user'][_0x219262(0x1ae)]!=='admin')throw new AppError_1[(_0x219262(0x1af))](_0x219262(0x1d3),0x193);const {tagId:_0x52e483}=_0x10e5d1[_0x219262(0x1bf)],_0x393b82=_0x10e5d1[_0x219262(0x1bb)],_0x10aaa3=await(0x0,UpdateService_1['default'])({'tagData':_0x393b82,'id':_0x52e483}),_0x5ee80d=(0x0,socket_1[_0x219262(0x1e1)])();return _0x5ee80d[_0x219262(0x1d5)](_0x219262(0x1be),{'action':_0x219262(0x1bc),'tag':_0x10aaa3}),_0x3a4931[_0x219262(0x1d8)](0xc8)['json'](_0x10aaa3);};exports['update']=update;const remove=async(_0xe00ef4,_0x257a43)=>{const _0x4d3946=a38_0x53b7c6,{tagId:_0xc9e290}=_0xe00ef4['params'];await(0x0,DeleteService_1[_0x4d3946(0x1af)])(_0xc9e290);const _0x467659=(0x0,socket_1[_0x4d3946(0x1e1)])();return _0x467659[_0x4d3946(0x1d5)](_0x4d3946(0x1be),{'action':_0x4d3946(0x1ac),'tagId':_0xc9e290}),_0x257a43[_0x4d3946(0x1d8)](0xc8)[_0x4d3946(0x1cf)]({'message':_0x4d3946(0x1b0)});};exports[a38_0x53b7c6(0x1b2)]=remove;const removeAll=async(_0x3ce4a3,_0x11b99b)=>{const _0x955945=a38_0x53b7c6,{companyId:_0x227fbb}=_0x3ce4a3[_0x955945(0x1d7)];try{return await(0x0,DeleteAllTagService_1[_0x955945(0x1af)])(_0x227fbb),_0x11b99b[_0x955945(0x1d8)](0xc8)[_0x955945(0x1cb)]({'message':_0x955945(0x1db)});}catch(_0x3652f8){return console[_0x955945(0x1c1)](_0x3652f8),_0x11b99b[_0x955945(0x1d8)](0x1f4)[_0x955945(0x1cb)]({'message':_0x955945(0x1cd)});}};exports['removeAll']=removeAll;const list=async(_0x1565f1,_0x31ae61)=>{const _0x3a0a7b=a38_0x53b7c6,{searchParam:_0x2c1933}=_0x1565f1[_0x3a0a7b(0x1ad)],{companyId:_0x3f7828}=_0x1565f1[_0x3a0a7b(0x1d7)],_0xc19bd0=await(0x0,SimpleListService_1[_0x3a0a7b(0x1af)])({'searchParam':_0x2c1933,'companyId':_0x3f7828});return _0x31ae61[_0x3a0a7b(0x1cf)](_0xc19bd0);};exports['list']=list;const syncTags=async(_0x1cc40c,_0x5d09ce)=>{const _0x40cbad=a38_0x53b7c6,_0x582926=_0x1cc40c[_0x40cbad(0x1bb)],{companyId:_0x1c208b}=_0x1cc40c['user'],_0x28811e=await(0x0,SyncTagsService_1[_0x40cbad(0x1af)])({..._0x582926,'companyId':_0x1c208b});return _0x5d09ce['json'](_0x28811e);};function a38_0x178d(){const _0x3698f8=['json','search','2359273bNNZcr','__importDefault','ERR_NO_PERMISSION','../services/TagServices/SyncTagsService','emit','__esModule','user','status','removeAll','kanban','All\x20tags\x20deleted\x20successfully','list','../services/TagServices/SimpleListService','syncTags','76315ApxPeG','defineProperty','getIO','delete','query','profile','default','Tag\x20deleted','../services/TagServices/UpdateService','remove','../services/TagServices/ListService','(((.+)+)+)+$','company-','../services/TagServices/KanbanListService','../services/TagServices/DeleteAllTagService','../libs/socket','create','996724HpKFkF','body','update','../services/TagServices/DeleteService','tag','params','8nRleJT','error','../errors/AppError','9712827KsEONj','index','551756FQjlUS','../services/TagServices/CreateService','22910ChvOXr','show','254142swetGA','apply','send','store','Error\x20deleting\x20all\x20tags','3aepycW'];a38_0x178d=function(){return _0x3698f8;};return a38_0x178d();}exports['syncTags']=syncTags;