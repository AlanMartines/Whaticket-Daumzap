const a495_0x1e45b7=a495_0x1124;(function(_0x1bbdde,_0xee3f5d){const _0x33434b=a495_0x1124,_0x1105e0=_0x1bbdde();while(!![]){try{const _0x315e11=-parseInt(_0x33434b(0x196))/0x1*(-parseInt(_0x33434b(0x18d))/0x2)+parseInt(_0x33434b(0x183))/0x3*(parseInt(_0x33434b(0x18f))/0x4)+parseInt(_0x33434b(0x18b))/0x5+parseInt(_0x33434b(0x190))/0x6+-parseInt(_0x33434b(0x191))/0x7+-parseInt(_0x33434b(0x181))/0x8+-parseInt(_0x33434b(0x18a))/0x9*(parseInt(_0x33434b(0x193))/0xa);if(_0x315e11===_0xee3f5d)break;else _0x1105e0['push'](_0x1105e0['shift']());}catch(_0x3ebc6d){_0x1105e0['push'](_0x1105e0['shift']());}}}(a495_0x3c00,0xb710a));function a495_0x1124(_0x2037c9,_0xd3d419){const _0x3ebe7a=a495_0x3c00();return a495_0x1124=function(_0x3c7ff4,_0x40062b){_0x3c7ff4=_0x3c7ff4-0x17f;let _0x3c0046=_0x3ebe7a[_0x3c7ff4];return _0x3c0046;},a495_0x1124(_0x2037c9,_0xd3d419);}function a495_0x3c00(){const _0x4e34ea=['502080MUxmtw','ERR_NO_SCHEDULE_FOUND','24052IkhohI','companyId','64irBXVU','7633248tqrABv','1838564cqEUiu','default','680cyQtPw','__importDefault','../../models/User','52GxuVnn','user','../../models/Schedule','../../errors/AppError','1389392fOYTjw','Não\x20é\x20possível\x20excluir\x20registro\x20de\x20outra\x20empresa','46149diFwOI','search','apply','name','(((.+)+)+)+$','constructor','../../models/Contact','140022vnxnup'];a495_0x3c00=function(){return _0x4e34ea;};return a495_0x3c00();}const a495_0x40062b=(function(){let _0x14ff03=!![];return function(_0x400cb1,_0x54ad8e){const _0x262653=_0x14ff03?function(){const _0x12d7d0=a495_0x1124;if(_0x54ad8e){const _0x1c19f9=_0x54ad8e[_0x12d7d0(0x185)](_0x400cb1,arguments);return _0x54ad8e=null,_0x1c19f9;}}:function(){};return _0x14ff03=![],_0x262653;};}()),a495_0x3c7ff4=a495_0x40062b(this,function(){const _0x3676dd=a495_0x1124;return a495_0x3c7ff4['toString']()[_0x3676dd(0x184)](_0x3676dd(0x187))['toString']()[_0x3676dd(0x188)](a495_0x3c7ff4)[_0x3676dd(0x184)](_0x3676dd(0x187));});a495_0x3c7ff4();'use strict';var __importDefault=this&&this[a495_0x1e45b7(0x194)]||function(_0x3e6d4c){return _0x3e6d4c&&_0x3e6d4c['__esModule']?_0x3e6d4c:{'default':_0x3e6d4c};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const Schedule_1=__importDefault(require(a495_0x1e45b7(0x17f))),AppError_1=__importDefault(require(a495_0x1e45b7(0x180))),Contact_1=__importDefault(require(a495_0x1e45b7(0x189))),User_1=__importDefault(require(a495_0x1e45b7(0x195))),ScheduleService=async(_0x186004,_0x32e3c2)=>{const _0x595f7f=a495_0x1e45b7,_0x384f63=await Schedule_1[_0x595f7f(0x192)]['findByPk'](_0x186004,{'include':[{'model':Contact_1[_0x595f7f(0x192)],'as':'contact','attributes':['id',_0x595f7f(0x186)]},{'model':User_1[_0x595f7f(0x192)],'as':_0x595f7f(0x197),'attributes':['id',_0x595f7f(0x186)]}]});if(_0x384f63?.[_0x595f7f(0x18e)]!==_0x32e3c2)throw new AppError_1['default'](_0x595f7f(0x182));if(!_0x384f63)throw new AppError_1[(_0x595f7f(0x192))](_0x595f7f(0x18c),0x194);return _0x384f63;};exports[a495_0x1e45b7(0x192)]=ScheduleService;