const a35_0x44e538=a35_0x80b7;function a35_0x80b7(_0x1e236f,_0x3e6b42){const _0x547f65=a35_0x350f();return a35_0x80b7=function(_0x49df46,_0x11310f){_0x49df46=_0x49df46-0x1e3;let _0x350f4e=_0x547f65[_0x49df46];return _0x350f4e;},a35_0x80b7(_0x1e236f,_0x3e6b42);}(function(_0xf50fb4,_0x3c8e00){const _0x559ef=a35_0x80b7,_0x4deb81=_0xf50fb4();while(!![]){try{const _0x4b591c=-parseInt(_0x559ef(0x208))/0x1*(-parseInt(_0x559ef(0x1f7))/0x2)+parseInt(_0x559ef(0x1f8))/0x3*(parseInt(_0x559ef(0x1ec))/0x4)+-parseInt(_0x559ef(0x209))/0x5*(parseInt(_0x559ef(0x200))/0x6)+-parseInt(_0x559ef(0x1fc))/0x7*(parseInt(_0x559ef(0x20f))/0x8)+parseInt(_0x559ef(0x1f2))/0x9*(parseInt(_0x559ef(0x1e4))/0xa)+-parseInt(_0x559ef(0x1f3))/0xb+parseInt(_0x559ef(0x1ea))/0xc;if(_0x4b591c===_0x3c8e00)break;else _0x4deb81['push'](_0x4deb81['shift']());}catch(_0x6971d2){_0x4deb81['push'](_0x4deb81['shift']());}}}(a35_0x350f,0xcd1eb));const a35_0x11310f=(function(){let _0x3212c0=!![];return function(_0x2dabf3,_0x3b4906){const _0x34cdc7=_0x3212c0?function(){const _0x1cd0dc=a35_0x80b7;if(_0x3b4906){const _0x476687=_0x3b4906[_0x1cd0dc(0x1fd)](_0x2dabf3,arguments);return _0x3b4906=null,_0x476687;}}:function(){};return _0x3212c0=![],_0x34cdc7;};}()),a35_0x49df46=a35_0x11310f(this,function(){const _0x1630c5=a35_0x80b7;return a35_0x49df46[_0x1630c5(0x1ff)]()[_0x1630c5(0x1e9)]('(((.+)+)+)+$')['toString']()[_0x1630c5(0x20d)](a35_0x49df46)[_0x1630c5(0x1e9)](_0x1630c5(0x201));});a35_0x49df46();'use strict';var __importDefault=this&&this[a35_0x44e538(0x1e7)]||function(_0x3d5aa7){return _0x3d5aa7&&_0x3d5aa7['__esModule']?_0x3d5aa7:{'default':_0x3d5aa7};};Object['defineProperty'](exports,a35_0x44e538(0x1e3),{'value':!![]}),exports[a35_0x44e538(0x1f1)]=exports['me']=exports[a35_0x44e538(0x210)]=exports[a35_0x44e538(0x1eb)]=void 0x0;function a35_0x350f(){const _0x1220a2=['../services/AuthServices/RefreshTokenService','constructor','company-','904jbdvCw','update','__esModule','9140tasphc','companyId','body','__importDefault','json','search','25893120DPpQjK','store','1371284UznLif','cookies','email','SendRefreshToken','default','remove','3213dAIlMe','13402411RFcUyt','../services/AuthServices/FindUserFromToken','getIO','ERR_SESSION_EXPIRED','1594844hNDxqR','3ShJrnE','../helpers/SendRefreshToken','user','jrt','11249HJkqmX','apply','status','toString','6Fyyjgm','(((.+)+)+)+$','RefreshTokenService','../errors/AppError','../models/User','../libs/socket','send','emit','1OzEWbu','6920690FNZnMe','clearCookie','-mainchannel'];a35_0x350f=function(){return _0x1220a2;};return a35_0x350f();}const AppError_1=__importDefault(require(a35_0x44e538(0x203))),socket_1=require(a35_0x44e538(0x205)),AuthUserService_1=__importDefault(require('../services/UserServices/AuthUserService')),SendRefreshToken_1=require(a35_0x44e538(0x1f9)),RefreshTokenService_1=require(a35_0x44e538(0x20c)),FindUserFromToken_1=__importDefault(require(a35_0x44e538(0x1f4))),User_1=__importDefault(require(a35_0x44e538(0x204))),store=async(_0x3e82e8,_0x5aef71)=>{const _0x465fcd=a35_0x44e538,{email:_0x38a0e4,password:_0x17a416}=_0x3e82e8[_0x465fcd(0x1e6)],{token:_0x43ed3f,serializedUser:_0x365327,refreshToken:_0x5d2f8f}=await(0x0,AuthUserService_1[_0x465fcd(0x1f0)])({'email':_0x38a0e4,'password':_0x17a416});(0x0,SendRefreshToken_1[_0x465fcd(0x1ef)])(_0x5aef71,_0x5d2f8f);const _0x3be1ae=(0x0,socket_1[_0x465fcd(0x1f5)])();return _0x3be1ae['to'](_0x465fcd(0x20e)+_0x365327[_0x465fcd(0x1e5)]+_0x465fcd(0x20b))[_0x465fcd(0x207)](_0x465fcd(0x20e)+_0x365327[_0x465fcd(0x1e5)]+'-auth',{'action':'update','user':{'id':_0x365327['id'],'email':_0x365327[_0x465fcd(0x1ee)],'companyId':_0x365327['companyId']}}),_0x5aef71[_0x465fcd(0x1fe)](0xc8)[_0x465fcd(0x1e8)]({'token':_0x43ed3f,'user':_0x365327});};exports[a35_0x44e538(0x1eb)]=store;const update=async(_0x5217a6,_0x24369e)=>{const _0x1a0ad4=a35_0x44e538,_0x179c6b=_0x5217a6[_0x1a0ad4(0x1ed)][_0x1a0ad4(0x1fb)];if(!_0x179c6b)throw new AppError_1[(_0x1a0ad4(0x1f0))](_0x1a0ad4(0x1f6),0x191);const {user:_0x5030f2,newToken:_0x2c4b76,refreshToken:_0x39d007}=await(0x0,RefreshTokenService_1[_0x1a0ad4(0x202)])(_0x24369e,_0x179c6b);return(0x0,SendRefreshToken_1[_0x1a0ad4(0x1ef)])(_0x24369e,_0x39d007),_0x24369e[_0x1a0ad4(0x1e8)]({'token':_0x2c4b76,'user':_0x5030f2});};exports[a35_0x44e538(0x210)]=update;const me=async(_0x12e3bc,_0x54b3ae)=>{const _0x14457d=a35_0x44e538,_0x15478c=_0x12e3bc[_0x14457d(0x1ed)][_0x14457d(0x1fb)],_0x4f8aa5=await(0x0,FindUserFromToken_1['default'])(_0x15478c),{id:_0x154f13,profile:_0x43756c,super:_0x3da62b}=_0x4f8aa5;if(!_0x15478c)throw new AppError_1[(_0x14457d(0x1f0))](_0x14457d(0x1f6),0x191);return _0x54b3ae[_0x14457d(0x1e8)]({'id':_0x154f13,'profile':_0x43756c,'super':_0x3da62b});};exports['me']=me;const remove=async(_0x21bcaf,_0xddd955)=>{const _0x40cd39=a35_0x44e538,{id:_0xa94d42}=_0x21bcaf[_0x40cd39(0x1fa)],_0x402604=await User_1[_0x40cd39(0x1f0)]['findByPk'](_0xa94d42);return await _0x402604[_0x40cd39(0x210)]({'online':![]}),_0xddd955[_0x40cd39(0x20a)](_0x40cd39(0x1fb)),_0xddd955[_0x40cd39(0x206)]();};exports[a35_0x44e538(0x1f1)]=remove;