const a499_0x35cec3=a499_0x3e22;(function(_0x161b01,_0x3f58cd){const _0x27ae4f=a499_0x3e22,_0x249a7d=_0x161b01();while(!![]){try{const _0x2bf05b=-parseInt(_0x27ae4f(0x1b8))/0x1*(parseInt(_0x27ae4f(0x1bb))/0x2)+-parseInt(_0x27ae4f(0x1b3))/0x3+-parseInt(_0x27ae4f(0x1b6))/0x4+parseInt(_0x27ae4f(0x1af))/0x5+parseInt(_0x27ae4f(0x1b7))/0x6*(parseInt(_0x27ae4f(0x1bc))/0x7)+parseInt(_0x27ae4f(0x1c2))/0x8+parseInt(_0x27ae4f(0x1bd))/0x9*(parseInt(_0x27ae4f(0x1b9))/0xa);if(_0x2bf05b===_0x3f58cd)break;else _0x249a7d['push'](_0x249a7d['shift']());}catch(_0xd1915b){_0x249a7d['push'](_0x249a7d['shift']());}}}(a499_0x41be,0xe3176));const a499_0x363854=(function(){let _0x59f5c0=!![];return function(_0x4efd72,_0xb1eed1){const _0x49dc11=_0x59f5c0?function(){const _0x296483=a499_0x3e22;if(_0xb1eed1){const _0x2ea810=_0xb1eed1[_0x296483(0x1b5)](_0x4efd72,arguments);return _0xb1eed1=null,_0x2ea810;}}:function(){};return _0x59f5c0=![],_0x49dc11;};}()),a499_0x1a1bc9=a499_0x363854(this,function(){const _0x41a359=a499_0x3e22;return a499_0x1a1bc9['toString']()[_0x41a359(0x1c1)]('(((.+)+)+)+$')[_0x41a359(0x1b2)]()[_0x41a359(0x1b0)](a499_0x1a1bc9)[_0x41a359(0x1c1)](_0x41a359(0x1ba));});a499_0x1a1bc9();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x541589){const _0x3653a1=a499_0x3e22;return _0x541589&&_0x541589[_0x3653a1(0x1c4)]?_0x541589:{'default':_0x541589};};function a499_0x3e22(_0x2de100,_0x2e0ada){const _0xf14cf7=a499_0x41be();return a499_0x3e22=function(_0x1a1bc9,_0x363854){_0x1a1bc9=_0x1a1bc9-0x1af;let _0x41beab=_0xf14cf7[_0x1a1bc9];return _0x41beab;},a499_0x3e22(_0x2de100,_0x2e0ada);}Object[a499_0x35cec3(0x1b1)](exports,a499_0x35cec3(0x1c4),{'value':!![]});function a499_0x41be(){const _0x2cb3e6=['192024SYzYGV','10135104xGkZGw','6865UYlURI','500fxdvAx','(((.+)+)+)+$','400coDiDf','7jwsjtm','156789ceKZSL','key','value','findOne','search','1597992fHXSca','default','__esModule','4023055rSAlsA','constructor','defineProperty','toString','3640266vfWlsw','../../models/Setting','apply'];a499_0x41be=function(){return _0x2cb3e6;};return a499_0x41be();}const AppError_1=__importDefault(require('../../errors/AppError')),Setting_1=__importDefault(require(a499_0x35cec3(0x1b4))),ListSettingByKeyService=async _0x1e5b79=>{const _0x5d8973=a499_0x35cec3,_0x1528e8=await Setting_1[_0x5d8973(0x1c3)][_0x5d8973(0x1c0)]({'where':{'value':_0x1e5b79}});if(!_0x1528e8)throw new AppError_1[(_0x5d8973(0x1c3))]('ERR_NO_KEY_FOUND',0x194);return{'key':_0x1528e8[_0x5d8973(0x1be)],'value':_0x1528e8[_0x5d8973(0x1bf)]};};exports['default']=ListSettingByKeyService;