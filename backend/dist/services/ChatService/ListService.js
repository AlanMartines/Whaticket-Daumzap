function a382_0x5d5e(){const _0x2652f9=['constructor','975520HmYhVP','__esModule','createdAt','3TdRAgG','findAll','693uiKNBG','96382TIDtSJ','1308kLuVsG','../../models/User','user','../../models/Chat','sequelize','default','DESC','12861erqSSp','length','(((.+)+)+)+$','2044926zJkliy','17200kqeRlk','../../models/ChatUser','593004eQyUbG','toString','search','210pEgDlM','defineProperty','181010HxrNJl','apply','12knzdRz','map','chatId'];a382_0x5d5e=function(){return _0x2652f9;};return a382_0x5d5e();}const a382_0x1f09e9=a382_0x5d91;(function(_0x3a0db7,_0x216786){const _0x2026e9=a382_0x5d91,_0x5d30dc=_0x3a0db7();while(!![]){try{const _0x3df619=parseInt(_0x2026e9(0x1df))/0x1*(parseInt(_0x2026e9(0x1d6))/0x2)+parseInt(_0x2026e9(0x1d1))/0x3*(parseInt(_0x2026e9(0x1d8))/0x4)+-parseInt(_0x2026e9(0x1dc))/0x5+parseInt(_0x2026e9(0x1ce))/0x6+-parseInt(_0x2026e9(0x1e1))/0x7*(-parseInt(_0x2026e9(0x1cf))/0x8)+parseInt(_0x2026e9(0x1cb))/0x9*(parseInt(_0x2026e9(0x1d4))/0xa)+-parseInt(_0x2026e9(0x1e2))/0xb*(parseInt(_0x2026e9(0x1e3))/0xc);if(_0x3df619===_0x216786)break;else _0x5d30dc['push'](_0x5d30dc['shift']());}catch(_0x3afcd0){_0x5d30dc['push'](_0x5d30dc['shift']());}}}(a382_0x5d5e,0x48c35));const a382_0xfd3403=(function(){let _0x1b657a=!![];return function(_0x3bbae5,_0x3c225f){const _0x271562=_0x1b657a?function(){const _0x50afa9=a382_0x5d91;if(_0x3c225f){const _0x2a0673=_0x3c225f[_0x50afa9(0x1d7)](_0x3bbae5,arguments);return _0x3c225f=null,_0x2a0673;}}:function(){};return _0x1b657a=![],_0x271562;};}()),a382_0x203ee8=a382_0xfd3403(this,function(){const _0x799213=a382_0x5d91;return a382_0x203ee8['toString']()[_0x799213(0x1d3)](_0x799213(0x1cd))[_0x799213(0x1d2)]()[_0x799213(0x1db)](a382_0x203ee8)['search']('(((.+)+)+)+$');});a382_0x203ee8();'use strict';function a382_0x5d91(_0x2abbf5,_0x361acc){const _0x4d0506=a382_0x5d5e();return a382_0x5d91=function(_0x203ee8,_0xfd3403){_0x203ee8=_0x203ee8-0x1ca;let _0x5d5e52=_0x4d0506[_0x203ee8];return _0x5d5e52;},a382_0x5d91(_0x2abbf5,_0x361acc);}var __importDefault=this&&this['__importDefault']||function(_0x3d6d7c){const _0x375c66=a382_0x5d91;return _0x3d6d7c&&_0x3d6d7c[_0x375c66(0x1dd)]?_0x3d6d7c:{'default':_0x3d6d7c};};Object[a382_0x1f09e9(0x1d5)](exports,'__esModule',{'value':!![]});const sequelize_1=require(a382_0x1f09e9(0x1e7)),Chat_1=__importDefault(require(a382_0x1f09e9(0x1e6))),ChatUser_1=__importDefault(require(a382_0x1f09e9(0x1d0))),User_1=__importDefault(require(a382_0x1f09e9(0x1e4))),ListService=async({ownerId:_0x5e7162,pageNumber:pageNumber='1'})=>{const _0x30072f=a382_0x1f09e9,_0x15b7b3=await ChatUser_1[_0x30072f(0x1e8)][_0x30072f(0x1e0)]({'where':{'userId':_0x5e7162}}),_0x44f7bf=_0x15b7b3[_0x30072f(0x1d9)](_0x3538af=>_0x3538af[_0x30072f(0x1da)]),_0x969670=0x14,_0x1256b5=_0x969670*(+pageNumber-0x1),{count:_0xf14337,rows:_0x59ef79}=await Chat_1['default']['findAndCountAll']({'where':{'id':{[sequelize_1['Op']['in']]:_0x44f7bf}},'include':[{'model':User_1[_0x30072f(0x1e8)],'as':'owner'},{'model':ChatUser_1[_0x30072f(0x1e8)],'as':'users','include':[{'model':User_1[_0x30072f(0x1e8)],'as':_0x30072f(0x1e5)}]}],'limit':_0x969670,'offset':_0x1256b5,'order':[[_0x30072f(0x1de),_0x30072f(0x1ca)]]}),_0x5767e2=_0xf14337>_0x1256b5+_0x59ef79[_0x30072f(0x1cc)];return{'records':_0x59ef79,'count':_0xf14337,'hasMore':_0x5767e2};};exports[a382_0x1f09e9(0x1e8)]=ListService;