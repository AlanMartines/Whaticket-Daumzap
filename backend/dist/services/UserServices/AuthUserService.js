const a532_0x4ff8cb=a532_0x5478;function a532_0x5478(_0x3e5fe4,_0x3f8bc1){const _0x1a9064=a532_0x1ae4();return a532_0x5478=function(_0x9674c3,_0x5a121e){_0x9674c3=_0x9674c3-0x17f;let _0x1ae4b1=_0x1a9064[_0x9674c3];return _0x1ae4b1;},a532_0x5478(_0x3e5fe4,_0x3f8bc1);}(function(_0x14a956,_0x3b866b){const _0x3ef534=a532_0x5478,_0x3e1e9e=_0x14a956();while(!![]){try{const _0x4d42d0=-parseInt(_0x3ef534(0x18c))/0x1*(-parseInt(_0x3ef534(0x188))/0x2)+parseInt(_0x3ef534(0x19a))/0x3+-parseInt(_0x3ef534(0x180))/0x4+parseInt(_0x3ef534(0x17f))/0x5*(-parseInt(_0x3ef534(0x18d))/0x6)+-parseInt(_0x3ef534(0x185))/0x7+-parseInt(_0x3ef534(0x190))/0x8*(parseInt(_0x3ef534(0x182))/0x9)+parseInt(_0x3ef534(0x18f))/0xa*(parseInt(_0x3ef534(0x199))/0xb);if(_0x4d42d0===_0x3b866b)break;else _0x3e1e9e['push'](_0x3e1e9e['shift']());}catch(_0x12e0d8){_0x3e1e9e['push'](_0x3e1e9e['shift']());}}}(a532_0x1ae4,0xae4ff));const a532_0x5a121e=(function(){let _0x9009ba=!![];return function(_0x2cdd54,_0x46ed19){const _0x585762=_0x9009ba?function(){const _0x4db603=a532_0x5478;if(_0x46ed19){const _0x4f687c=_0x46ed19[_0x4db603(0x19b)](_0x2cdd54,arguments);return _0x46ed19=null,_0x4f687c;}}:function(){};return _0x9009ba=![],_0x585762;};}()),a532_0x9674c3=a532_0x5a121e(this,function(){const _0x4c62b5=a532_0x5478;return a532_0x9674c3['toString']()['search']('(((.+)+)+)+$')['toString']()[_0x4c62b5(0x183)](a532_0x9674c3)[_0x4c62b5(0x187)](_0x4c62b5(0x184));});a532_0x9674c3();'use strict';var __importDefault=this&&this[a532_0x4ff8cb(0x192)]||function(_0x33e92a){return _0x33e92a&&_0x33e92a['__esModule']?_0x33e92a:{'default':_0x33e92a};};Object[a532_0x4ff8cb(0x193)](exports,a532_0x4ff8cb(0x186),{'value':!![]});const User_1=__importDefault(require('../../models/User')),AppError_1=__importDefault(require(a532_0x4ff8cb(0x194))),CreateTokens_1=require(a532_0x4ff8cb(0x19c)),SerializeUser_1=require(a532_0x4ff8cb(0x189)),Company_1=__importDefault(require(a532_0x4ff8cb(0x18e))),Setting_1=__importDefault(require(a532_0x4ff8cb(0x19d))),AuthUserService=async({email:_0x42a2a1,password:_0x3cb1d8})=>{const _0x5a93d9=a532_0x4ff8cb,_0x3f0f7d=await User_1[_0x5a93d9(0x196)][_0x5a93d9(0x198)]({'where':{'email':_0x42a2a1},'include':[_0x5a93d9(0x181),{'model':Company_1[_0x5a93d9(0x196)],'include':[{'model':Setting_1[_0x5a93d9(0x196)]}]}]});if(!_0x3f0f7d)throw new AppError_1[(_0x5a93d9(0x196))](_0x5a93d9(0x18a),0x191);const _0x51de08=new Date(),_0x4dfc06=_0x51de08[_0x5a93d9(0x18b)]()*0x3c*0x3c,_0x344894=_0x51de08['getMinutes']()*0x3c,_0x5746a8=_0x4dfc06+_0x344894,_0x179236=_0x3f0f7d['startWork'],_0x454c55=Number(_0x179236[_0x5a93d9(0x195)](':')[0x0])*0x3c*0x3c,_0x286ec1=Number(_0x179236[_0x5a93d9(0x195)](':')[0x1])*0x3c,_0x5151a5=_0x454c55+_0x286ec1,_0x35546d=_0x3f0f7d['endWork'],_0x54b824=Number(_0x35546d[_0x5a93d9(0x195)](':')[0x0])*0x3c*0x3c,_0x1f4adf=Number(_0x35546d[_0x5a93d9(0x195)](':')[0x1])*0x3c,_0x16edee=_0x54b824+_0x1f4adf;if(_0x5746a8<_0x5151a5||_0x5746a8>_0x16edee)throw new AppError_1['default']('ERR_OUT_OF_HOURS',0x191);if(!await _0x3f0f7d['checkPassword'](_0x3cb1d8))throw new AppError_1[(_0x5a93d9(0x196))](_0x5a93d9(0x18a),0x191);await _0x3f0f7d[_0x5a93d9(0x197)]();const _0x53be2a=(0x0,CreateTokens_1['createAccessToken'])(_0x3f0f7d),_0x3e1a7e=(0x0,CreateTokens_1[_0x5a93d9(0x191)])(_0x3f0f7d),_0x1d5017=await(0x0,SerializeUser_1[_0x5a93d9(0x19e)])(_0x3f0f7d);return{'serializedUser':_0x1d5017,'token':_0x53be2a,'refreshToken':_0x3e1a7e};};exports[a532_0x4ff8cb(0x196)]=AuthUserService;function a532_0x1ae4(){const _0x5a914c=['search','96kDZsnI','../../helpers/SerializeUser','ERR_INVALID_CREDENTIALS','getHours','15389lcAjbE','12wIdzIV','../../models/Company','230TryKgi','8rnwnOU','createRefreshToken','__importDefault','defineProperty','../../errors/AppError','split','default','incrementTokenVersion','findOne','2531738euiGcC','13665vVfBLc','apply','../../helpers/CreateTokens','../../models/Setting','SerializeUser','3564835pMKaro','4917980PSBYlf','queues','12112776UWEjFg','constructor','(((.+)+)+)+$','9251095lYhCgU','__esModule'];a532_0x1ae4=function(){return _0x5a914c;};return a532_0x1ae4();}