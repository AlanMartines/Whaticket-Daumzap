const a382_0x1f32bc=a382_0x44ab;function a382_0x4929(){const _0x2df7a8=['../../models/User','5MvNCud','toString','122lQczhm','createdAt','__importDefault','search','default','sequelize','9176274tEEmYX','3283356xoaxPG','../../models/ChatUser','3644812qyWble','313203RHwTtS','DESC','findAll','7237BueZvK','__esModule','owner','apply','3306861kJyRrq','(((.+)+)+)+$','chatId','5619656gJCVSk','defineProperty','170tANvzf','7oywwca','length'];a382_0x4929=function(){return _0x2df7a8;};return a382_0x4929();}(function(_0x210b07,_0x17366e){const _0x5c8b47=a382_0x44ab,_0x52c325=_0x210b07();while(!![]){try{const _0x3a4aaa=parseInt(_0x5c8b47(0x19a))/0x1*(parseInt(_0x5c8b47(0x18d))/0x2)+parseInt(_0x5c8b47(0x19e))/0x3+parseInt(_0x5c8b47(0x196))/0x4+parseInt(_0x5c8b47(0x18b))/0x5*(-parseInt(_0x5c8b47(0x194))/0x6)+parseInt(_0x5c8b47(0x188))/0x7*(-parseInt(_0x5c8b47(0x1a1))/0x8)+-parseInt(_0x5c8b47(0x193))/0x9+-parseInt(_0x5c8b47(0x187))/0xa*(-parseInt(_0x5c8b47(0x197))/0xb);if(_0x3a4aaa===_0x17366e)break;else _0x52c325['push'](_0x52c325['shift']());}catch(_0x1f5c60){_0x52c325['push'](_0x52c325['shift']());}}}(a382_0x4929,0xa3817));const a382_0x496a1b=(function(){let _0x1c8e03=!![];return function(_0x320a3,_0x3874bc){const _0xf9409b=_0x1c8e03?function(){const _0x2495ed=a382_0x44ab;if(_0x3874bc){const _0x5ea429=_0x3874bc[_0x2495ed(0x19d)](_0x320a3,arguments);return _0x3874bc=null,_0x5ea429;}}:function(){};return _0x1c8e03=![],_0xf9409b;};}()),a382_0x53e78b=a382_0x496a1b(this,function(){const _0x57b6f9=a382_0x44ab;return a382_0x53e78b[_0x57b6f9(0x18c)]()[_0x57b6f9(0x190)](_0x57b6f9(0x19f))[_0x57b6f9(0x18c)]()['constructor'](a382_0x53e78b)['search'](_0x57b6f9(0x19f));});function a382_0x44ab(_0x2a52e7,_0x1dcc32){const _0x3c1cb1=a382_0x4929();return a382_0x44ab=function(_0x53e78b,_0x496a1b){_0x53e78b=_0x53e78b-0x186;let _0x4929a5=_0x3c1cb1[_0x53e78b];return _0x4929a5;},a382_0x44ab(_0x2a52e7,_0x1dcc32);}a382_0x53e78b();'use strict';var __importDefault=this&&this[a382_0x1f32bc(0x18f)]||function(_0x1732d8){return _0x1732d8&&_0x1732d8['__esModule']?_0x1732d8:{'default':_0x1732d8};};Object[a382_0x1f32bc(0x186)](exports,a382_0x1f32bc(0x19b),{'value':!![]});const sequelize_1=require(a382_0x1f32bc(0x192)),Chat_1=__importDefault(require('../../models/Chat')),ChatUser_1=__importDefault(require(a382_0x1f32bc(0x195))),User_1=__importDefault(require(a382_0x1f32bc(0x18a))),ListService=async({ownerId:_0x16e2a7,pageNumber:pageNumber='1'})=>{const _0x86cce5=a382_0x1f32bc,_0x3fb306=await ChatUser_1['default'][_0x86cce5(0x199)]({'where':{'userId':_0x16e2a7}}),_0x228713=_0x3fb306['map'](_0x10a4a4=>_0x10a4a4[_0x86cce5(0x1a0)]),_0x32c290=0x14,_0x15ee70=_0x32c290*(+pageNumber-0x1),{count:_0x37462a,rows:_0x1ed1b8}=await Chat_1['default']['findAndCountAll']({'where':{'id':{[sequelize_1['Op']['in']]:_0x228713}},'include':[{'model':User_1[_0x86cce5(0x191)],'as':_0x86cce5(0x19c)},{'model':ChatUser_1[_0x86cce5(0x191)],'as':'users','include':[{'model':User_1[_0x86cce5(0x191)],'as':'user'}]}],'limit':_0x32c290,'offset':_0x15ee70,'order':[[_0x86cce5(0x18e),_0x86cce5(0x198)]]}),_0x540b3a=_0x37462a>_0x15ee70+_0x1ed1b8[_0x86cce5(0x189)];return{'records':_0x1ed1b8,'count':_0x37462a,'hasMore':_0x540b3a};};exports[a382_0x1f32bc(0x191)]=ListService;