function a447_0x5c54(){const _0x20256a=['(((.+)+)+)+$','__esModule','queue','10ZHGrMZ','24pfxNkQ','oldMessages','../../models/Message','../../models/OldMessage','9uwtCCx','default','quotedMsg','547507TXRQLW','5484ZPuCeM','toString','995tIXBrq','1053796awwNMl','length','defineProperty','3193497RpnXbY','__importDefault','13660383nzGciN','search','sequelize','DESC','queueId','1636102KhtwCE','findAndCountAll','../../errors/AppError','contact','apply','5826863tdxTzp'];a447_0x5c54=function(){return _0x20256a;};return a447_0x5c54();}const a447_0x22b5df=a447_0x3a32;(function(_0x370379,_0x16c20a){const _0x2f27b6=a447_0x3a32,_0x259589=_0x370379();while(!![]){try{const _0x3460a2=parseInt(_0x2f27b6(0x91))/0x1+-parseInt(_0x2f27b6(0x9f))/0x2+parseInt(_0x2f27b6(0x8e))/0x3*(-parseInt(_0x2f27b6(0x95))/0x4)+parseInt(_0x2f27b6(0x94))/0x5*(parseInt(_0x2f27b6(0x92))/0x6)+-parseInt(_0x2f27b6(0xa4))/0x7+parseInt(_0x2f27b6(0x8a))/0x8*(parseInt(_0x2f27b6(0x98))/0x9)+parseInt(_0x2f27b6(0x89))/0xa*(parseInt(_0x2f27b6(0x9a))/0xb);if(_0x3460a2===_0x16c20a)break;else _0x259589['push'](_0x259589['shift']());}catch(_0x3f7ea7){_0x259589['push'](_0x259589['shift']());}}}(a447_0x5c54,0x913fa));const a447_0x4a4a4a=(function(){let _0x2f1b36=!![];return function(_0x5b19b6,_0x5b8ebd){const _0x422bef=_0x2f1b36?function(){const _0x2d0ee4=a447_0x3a32;if(_0x5b8ebd){const _0x432cc7=_0x5b8ebd[_0x2d0ee4(0xa3)](_0x5b19b6,arguments);return _0x5b8ebd=null,_0x432cc7;}}:function(){};return _0x2f1b36=![],_0x422bef;};}()),a447_0x261473=a447_0x4a4a4a(this,function(){const _0x311190=a447_0x3a32;return a447_0x261473[_0x311190(0x93)]()[_0x311190(0x9b)](_0x311190(0xa5))['toString']()['constructor'](a447_0x261473)[_0x311190(0x9b)](_0x311190(0xa5));});function a447_0x3a32(_0x4725e9,_0x369b60){const _0xed7efc=a447_0x5c54();return a447_0x3a32=function(_0x261473,_0x4a4a4a){_0x261473=_0x261473-0x87;let _0x5c54f0=_0xed7efc[_0x261473];return _0x5c54f0;},a447_0x3a32(_0x4725e9,_0x369b60);}a447_0x261473();'use strict';var __importDefault=this&&this[a447_0x22b5df(0x99)]||function(_0x4cdb8b){return _0x4cdb8b&&_0x4cdb8b['__esModule']?_0x4cdb8b:{'default':_0x4cdb8b};};Object[a447_0x22b5df(0x97)](exports,a447_0x22b5df(0x87),{'value':!![]});const sequelize_1=require(a447_0x22b5df(0x9c)),AppError_1=__importDefault(require(a447_0x22b5df(0xa1))),Message_1=__importDefault(require(a447_0x22b5df(0x8c))),ShowTicketService_1=__importDefault(require('../TicketServices/ShowTicketService')),Queue_1=__importDefault(require('../../models/Queue')),OldMessage_1=__importDefault(require(a447_0x22b5df(0x8d))),ListMessagesService=async({pageNumber:pageNumber='1',ticketId:_0x35be55,companyId:_0x335faa,queues:queues=[]})=>{const _0x2b35ae=a447_0x22b5df,_0x4969b9=await(0x0,ShowTicketService_1[_0x2b35ae(0x8f)])(_0x35be55,_0x335faa);if(!_0x4969b9)throw new AppError_1[(_0x2b35ae(0x8f))]('ERR_NO_TICKET_FOUND',0x194);const _0x28311d=0x14,_0x5798cc=_0x28311d*(+pageNumber-0x1),_0x5eea51={'where':{'ticketId':_0x35be55,'companyId':_0x335faa}};queues['length']>0x0&&(_0x5eea51['where'][_0x2b35ae(0x9e)]={[sequelize_1['Op']['or']]:{[sequelize_1['Op']['in']]:queues,[sequelize_1['Op']['eq']]:null}});const {count:_0x102686,rows:_0x398ef3}=await Message_1[_0x2b35ae(0x8f)][_0x2b35ae(0xa0)]({..._0x5eea51,'limit':_0x28311d,'include':[_0x2b35ae(0xa2),{'model':Message_1[_0x2b35ae(0x8f)],'as':_0x2b35ae(0x90),'include':['contact']},{'model':OldMessage_1['default'],'as':_0x2b35ae(0x8b)},{'model':Queue_1['default'],'as':_0x2b35ae(0x88)}],'offset':_0x5798cc,'order':[['createdAt',_0x2b35ae(0x9d)]]}),_0x5469e7=_0x102686>_0x5798cc+_0x398ef3[_0x2b35ae(0x96)];return{'messages':_0x398ef3['reverse'](),'ticket':_0x4969b9,'count':_0x102686,'hasMore':_0x5469e7};};exports['default']=ListMessagesService;