const a261_0x83fb3b=a261_0x1b62;(function(_0x4de49a,_0x548085){const _0x2c9597=a261_0x1b62,_0x57d846=_0x4de49a();while(!![]){try{const _0x181aac=parseInt(_0x2c9597(0x182))/0x1*(parseInt(_0x2c9597(0x193))/0x2)+-parseInt(_0x2c9597(0x197))/0x3*(parseInt(_0x2c9597(0x192))/0x4)+parseInt(_0x2c9597(0x18b))/0x5+-parseInt(_0x2c9597(0x180))/0x6+parseInt(_0x2c9597(0x188))/0x7*(parseInt(_0x2c9597(0x17f))/0x8)+-parseInt(_0x2c9597(0x18e))/0x9+-parseInt(_0x2c9597(0x18f))/0xa*(-parseInt(_0x2c9597(0x185))/0xb);if(_0x181aac===_0x548085)break;else _0x57d846['push'](_0x57d846['shift']());}catch(_0x1ecf0a){_0x57d846['push'](_0x57d846['shift']());}}}(a261_0x554e,0x7d99f));const a261_0x5e486f=(function(){let _0x3f5f31=!![];return function(_0x62a513,_0x261372){const _0x59c692=_0x3f5f31?function(){const _0x348e2a=a261_0x1b62;if(_0x261372){const _0x3285bc=_0x261372[_0x348e2a(0x196)](_0x62a513,arguments);return _0x261372=null,_0x3285bc;}}:function(){};return _0x3f5f31=![],_0x59c692;};}()),a261_0x3d44f3=a261_0x5e486f(this,function(){const _0x11a9bf=a261_0x1b62;return a261_0x3d44f3[_0x11a9bf(0x184)]()[_0x11a9bf(0x199)](_0x11a9bf(0x186))['toString']()[_0x11a9bf(0x190)](a261_0x3d44f3)[_0x11a9bf(0x199)](_0x11a9bf(0x186));});a261_0x3d44f3();'use strict';function a261_0x1b62(_0x1f1717,_0x33dea0){const _0xb4eeb0=a261_0x554e();return a261_0x1b62=function(_0x3d44f3,_0x5e486f){_0x3d44f3=_0x3d44f3-0x17f;let _0x554e89=_0xb4eeb0[_0x3d44f3];return _0x554e89;},a261_0x1b62(_0x1f1717,_0x33dea0);}var __importDefault=this&&this[a261_0x83fb3b(0x191)]||function(_0x70e248){return _0x70e248&&_0x70e248['__esModule']?_0x70e248:{'default':_0x70e248};};Object[a261_0x83fb3b(0x18d)](exports,a261_0x83fb3b(0x183),{'value':!![]});function a261_0x554e(){const _0x3cdbe3=['20ZfkAcx','constructor','__importDefault','4WjlnVx','12JxYXlJ','ERR_SESSION_EXPIRED','default','apply','3013881BnEpYv','../services/SettingServices/ListSettingByValueService','search','log','6552952jJqJMw','5390178eQteIv','Invalid\x20token.\x20We\x27ll\x20try\x20to\x20assign\x20a\x20new\x20one\x20on\x20next\x20request','25807AWmgwC','__esModule','toString','6047107SebzeW','(((.+)+)+)+$','../errors/AppError','7oYcHdi','headers','value','3502995bugxfD','split','defineProperty','3209229vDnAYO'];a261_0x554e=function(){return _0x3cdbe3;};return a261_0x554e();}const AppError_1=__importDefault(require(a261_0x83fb3b(0x187))),ListSettingByValueService_1=__importDefault(require(a261_0x83fb3b(0x198))),isAuthApi=async(_0xe13b01,_0x45cdcf,_0x3d63be)=>{const _0x513a12=a261_0x83fb3b,_0xd1fadb=_0xe13b01[_0x513a12(0x189)]['authorization'];if(!_0xd1fadb)throw new AppError_1[(_0x513a12(0x195))](_0x513a12(0x194),0x191);const [,_0x3d4a9d]=_0xd1fadb[_0x513a12(0x18c)]('\x20');try{const _0x25b0a0=await(0x0,ListSettingByValueService_1[_0x513a12(0x195)])(_0x3d4a9d);if(!_0x25b0a0)throw new AppError_1['default'](_0x513a12(0x194),0x191);if(_0x25b0a0[_0x513a12(0x18a)]!==_0x3d4a9d)throw new AppError_1['default'](_0x513a12(0x194),0x191);}catch(_0x1b339a){console[_0x513a12(0x19a)](_0x1b339a);throw new AppError_1[(_0x513a12(0x195))](_0x513a12(0x181),0x193);}return _0x3d63be();};exports['default']=isAuthApi;