const a495_0x51578e=a495_0x5f4f;(function(_0x1e3249,_0x1d0ba4){const _0x38c2a0=a495_0x5f4f,_0x2cd780=_0x1e3249();while(!![]){try{const _0x3c28e8=-parseInt(_0x38c2a0(0x186))/0x1*(-parseInt(_0x38c2a0(0x185))/0x2)+-parseInt(_0x38c2a0(0x17c))/0x3+-parseInt(_0x38c2a0(0x18d))/0x4*(-parseInt(_0x38c2a0(0x188))/0x5)+-parseInt(_0x38c2a0(0x190))/0x6+parseInt(_0x38c2a0(0x18a))/0x7+-parseInt(_0x38c2a0(0x180))/0x8*(parseInt(_0x38c2a0(0x196))/0x9)+parseInt(_0x38c2a0(0x17f))/0xa*(-parseInt(_0x38c2a0(0x197))/0xb);if(_0x3c28e8===_0x1d0ba4)break;else _0x2cd780['push'](_0x2cd780['shift']());}catch(_0x3694d6){_0x2cd780['push'](_0x2cd780['shift']());}}}(a495_0x1f7f,0x2a7bd));const a495_0x20b891=(function(){let _0x582031=!![];return function(_0x5654d1,_0x189972){const _0x142dd4=_0x582031?function(){const _0x3f999d=a495_0x5f4f;if(_0x189972){const _0x4c2d69=_0x189972[_0x3f999d(0x183)](_0x5654d1,arguments);return _0x189972=null,_0x4c2d69;}}:function(){};return _0x582031=![],_0x142dd4;};}()),a495_0x4479e8=a495_0x20b891(this,function(){const _0x25253b=a495_0x5f4f;return a495_0x4479e8[_0x25253b(0x18e)]()[_0x25253b(0x194)](_0x25253b(0x18c))[_0x25253b(0x18e)]()['constructor'](a495_0x4479e8)['search']('(((.+)+)+)+$');});a495_0x4479e8();'use strict';function a495_0x5f4f(_0x3cd485,_0x335bb2){const _0x596b95=a495_0x1f7f();return a495_0x5f4f=function(_0x4479e8,_0x20b891){_0x4479e8=_0x4479e8-0x17c;let _0x1f7fbe=_0x596b95[_0x4479e8];return _0x1f7fbe;},a495_0x5f4f(_0x3cd485,_0x335bb2);}function a495_0x1f7f(){const _0x2a8a09=['apply','contact','2UcHpOD','69977tSnuXN','../../models/Schedule','146210hqTINk','../../errors/AppError','2248323blOJTL','defineProperty','(((.+)+)+)+$','44hgPnZJ','toString','__importDefault','1728558bNhgRR','ERR_NO_SCHEDULE_FOUND','companyId','Não\x20é\x20possível\x20excluir\x20registro\x20de\x20outra\x20empresa','search','findByPk','1788498TbkYce','83347MZysvE','110538nPXxVP','default','user','20dySIDG','8morxuC','__esModule','../../models/User'];a495_0x1f7f=function(){return _0x2a8a09;};return a495_0x1f7f();}var __importDefault=this&&this[a495_0x51578e(0x18f)]||function(_0x2fc2d1){const _0x58c584=a495_0x51578e;return _0x2fc2d1&&_0x2fc2d1[_0x58c584(0x181)]?_0x2fc2d1:{'default':_0x2fc2d1};};Object[a495_0x51578e(0x18b)](exports,a495_0x51578e(0x181),{'value':!![]});const Schedule_1=__importDefault(require(a495_0x51578e(0x187))),AppError_1=__importDefault(require(a495_0x51578e(0x189))),Contact_1=__importDefault(require('../../models/Contact')),User_1=__importDefault(require(a495_0x51578e(0x182))),ScheduleService=async(_0x224e25,_0x21cd01)=>{const _0x34dc5d=a495_0x51578e,_0x1a55d1=await Schedule_1['default'][_0x34dc5d(0x195)](_0x224e25,{'include':[{'model':Contact_1[_0x34dc5d(0x17d)],'as':_0x34dc5d(0x184),'attributes':['id','name']},{'model':User_1[_0x34dc5d(0x17d)],'as':_0x34dc5d(0x17e),'attributes':['id','name']}]});if(_0x1a55d1?.[_0x34dc5d(0x192)]!==_0x21cd01)throw new AppError_1[(_0x34dc5d(0x17d))](_0x34dc5d(0x193));if(!_0x1a55d1)throw new AppError_1[(_0x34dc5d(0x17d))](_0x34dc5d(0x191),0x194);return _0x1a55d1;};exports[a495_0x51578e(0x17d)]=ScheduleService;