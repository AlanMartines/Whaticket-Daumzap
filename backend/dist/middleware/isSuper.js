function a262_0x1df1(_0x272839,_0x5a5890){const _0x300b15=a262_0x5245();return a262_0x1df1=function(_0x4cffec,_0x46f07c){_0x4cffec=_0x4cffec-0x9d;let _0x5245aa=_0x300b15[_0x4cffec];return _0x5245aa;},a262_0x1df1(_0x272839,_0x5a5890);}const a262_0x13b924=a262_0x1df1;(function(_0x5075c5,_0x4be9c1){const _0x2b5d85=a262_0x1df1,_0x3582cd=_0x5075c5();while(!![]){try{const _0x4d622c=-parseInt(_0x2b5d85(0xad))/0x1+parseInt(_0x2b5d85(0xa0))/0x2+-parseInt(_0x2b5d85(0xa8))/0x3*(-parseInt(_0x2b5d85(0xa1))/0x4)+parseInt(_0x2b5d85(0xac))/0x5+-parseInt(_0x2b5d85(0xaa))/0x6*(parseInt(_0x2b5d85(0xa7))/0x7)+parseInt(_0x2b5d85(0x9d))/0x8+-parseInt(_0x2b5d85(0xa2))/0x9*(parseInt(_0x2b5d85(0xa4))/0xa);if(_0x4d622c===_0x4be9c1)break;else _0x3582cd['push'](_0x3582cd['shift']());}catch(_0x17846f){_0x3582cd['push'](_0x3582cd['shift']());}}}(a262_0x5245,0xea796));const a262_0x46f07c=(function(){let _0x164468=!![];return function(_0x507592,_0x139101){const _0x298302=_0x164468?function(){const _0x572dfa=a262_0x1df1;if(_0x139101){const _0x2ceb09=_0x139101[_0x572dfa(0xab)](_0x507592,arguments);return _0x139101=null,_0x2ceb09;}}:function(){};return _0x164468=![],_0x298302;};}()),a262_0x4cffec=a262_0x46f07c(this,function(){const _0x6da4a1=a262_0x1df1;return a262_0x4cffec['toString']()[_0x6da4a1(0xa3)]('(((.+)+)+)+$')['toString']()[_0x6da4a1(0xa9)](a262_0x4cffec)[_0x6da4a1(0xa3)](_0x6da4a1(0xaf));});a262_0x4cffec();'use strict';var __importDefault=this&&this[a262_0x13b924(0x9f)]||function(_0x1fc7a4){return _0x1fc7a4&&_0x1fc7a4['__esModule']?_0x1fc7a4:{'default':_0x1fc7a4};};Object[a262_0x13b924(0xa5)](exports,'__esModule',{'value':!![]});function a262_0x5245(){const _0xfdd796=['6115480ctVvFa','699327zdHxyK','user','(((.+)+)+)+$','default','11068448BgNayq','../errors/AppError','__importDefault','1045798ZGJwwM','8ayxsrk','191889PvbHpi','search','430lMTGxh','defineProperty','findByPk','12790183xWWSuX','1911231MAJJbd','constructor','6ECGWkh','apply'];a262_0x5245=function(){return _0xfdd796;};return a262_0x5245();}const AppError_1=__importDefault(require(a262_0x13b924(0x9e))),User_1=__importDefault(require('../models/User')),isSuper=async(_0x47582e,_0x8a5e7e,_0x534986)=>{const _0x4f3dd0=a262_0x13b924;if(!_0x47582e[_0x4f3dd0(0xae)])throw new AppError_1[(_0x4f3dd0(0xb0))]('Usuário\x20não\x20autenticado',0x191);const {super:_0x288ee2}=await User_1[_0x4f3dd0(0xb0)][_0x4f3dd0(0xa6)](_0x47582e[_0x4f3dd0(0xae)]['id']);if(!_0x288ee2)throw new AppError_1[(_0x4f3dd0(0xb0))]('Acesso\x20não\x20permitido',0x191);return _0x534986();};exports[a262_0x13b924(0xb0)]=isSuper;