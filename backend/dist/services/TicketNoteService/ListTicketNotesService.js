const a517_0x27f09f=a517_0x3baf;(function(_0x2efa83,_0x1a8661){const _0x6ea66=a517_0x3baf,_0xaf7f3b=_0x2efa83();while(!![]){try{const _0x46bde0=-parseInt(_0x6ea66(0x7e))/0x1+-parseInt(_0x6ea66(0x74))/0x2*(-parseInt(_0x6ea66(0x7b))/0x3)+-parseInt(_0x6ea66(0x89))/0x4*(-parseInt(_0x6ea66(0x79))/0x5)+-parseInt(_0x6ea66(0x7d))/0x6+parseInt(_0x6ea66(0x82))/0x7*(parseInt(_0x6ea66(0x85))/0x8)+-parseInt(_0x6ea66(0x8c))/0x9+-parseInt(_0x6ea66(0x8d))/0xa;if(_0x46bde0===_0x1a8661)break;else _0xaf7f3b['push'](_0xaf7f3b['shift']());}catch(_0x3dacc3){_0xaf7f3b['push'](_0xaf7f3b['shift']());}}}(a517_0x1113,0x1fa4d));function a517_0x1113(){const _0x24115e=['col','toString','568lqBVIn','constructor','LOWER','DESC','48kSfiOO','(((.+)+)+)+$','where','271305OZzgTC','500060RByHvz','length','sequelize','trim','__esModule','66376DeyZaj','../../models/TicketNote','apply','LIKE','__importDefault','81690OFzpqj','Sequelize','3MJiCqP','default','256452hQMcFv','20545WcaNaX','toLowerCase','createdAt','defineProperty','4319LhPdUK'];a517_0x1113=function(){return _0x24115e;};return a517_0x1113();}const a517_0x57db6c=(function(){let _0x20cd0a=!![];return function(_0x3d8ef3,_0x3757e2){const _0xdddd99=_0x20cd0a?function(){const _0x257a0c=a517_0x3baf;if(_0x3757e2){const _0x11a732=_0x3757e2[_0x257a0c(0x76)](_0x3d8ef3,arguments);return _0x3757e2=null,_0x11a732;}}:function(){};return _0x20cd0a=![],_0xdddd99;};}()),a517_0x2449bd=a517_0x57db6c(this,function(){const _0x57cfe5=a517_0x3baf;return a517_0x2449bd['toString']()['search'](_0x57cfe5(0x8a))[_0x57cfe5(0x84)]()[_0x57cfe5(0x86)](a517_0x2449bd)['search'](_0x57cfe5(0x8a));});a517_0x2449bd();'use strict';var __importDefault=this&&this[a517_0x27f09f(0x78)]||function(_0x18b137){const _0x1fb603=a517_0x27f09f;return _0x18b137&&_0x18b137[_0x1fb603(0x73)]?_0x18b137:{'default':_0x18b137};};Object[a517_0x27f09f(0x81)](exports,'__esModule',{'value':!![]});const sequelize_1=require(a517_0x27f09f(0x8f)),TicketNote_1=__importDefault(require(a517_0x27f09f(0x75))),ListTicketNotesService=async({searchParam:searchParam='',pageNumber:pageNumber='1'})=>{const _0x28a5a4=a517_0x27f09f,_0x25b36c={[sequelize_1['Op']['or']]:[{'note':sequelize_1[_0x28a5a4(0x7a)][_0x28a5a4(0x8b)](sequelize_1[_0x28a5a4(0x7a)]['fn'](_0x28a5a4(0x87),sequelize_1[_0x28a5a4(0x7a)][_0x28a5a4(0x83)]('note')),_0x28a5a4(0x77),'%'+searchParam[_0x28a5a4(0x7f)]()[_0x28a5a4(0x90)]()+'%')}]},_0x4b8885=0x14,_0x1dd07b=_0x4b8885*(+pageNumber-0x1),{count:_0x11a574,rows:_0x5eac31}=await TicketNote_1[_0x28a5a4(0x7c)]['findAndCountAll']({'where':_0x25b36c,'limit':_0x4b8885,'offset':_0x1dd07b,'order':[[_0x28a5a4(0x80),_0x28a5a4(0x88)]]}),_0x39b775=_0x11a574>_0x1dd07b+_0x5eac31[_0x28a5a4(0x8e)];return{'ticketNotes':_0x5eac31,'count':_0x11a574,'hasMore':_0x39b775};};function a517_0x3baf(_0xe3f4d4,_0x47293f){const _0x3a9c19=a517_0x1113();return a517_0x3baf=function(_0x2449bd,_0x57db6c){_0x2449bd=_0x2449bd-0x73;let _0x11133e=_0x3a9c19[_0x2449bd];return _0x11133e;},a517_0x3baf(_0xe3f4d4,_0x47293f);}exports['default']=ListTicketNotesService;