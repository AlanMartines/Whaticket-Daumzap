const a534_0x22d7f5=a534_0x1243;function a534_0x5bde(){const _0x13b746=['480mKdyfj','__esModule','destroy','super','ERR_NO_USER_FOUND','toString','1773924qqDItq','length','constructor','findOne','open','ERR_NO_USER_DELETE','75108kbYObJ','default','135968DeVEHo','$get','1980486jKTUPA','companyId','(((.+)+)+)+$','5wZwmai','7fOjWtX','ERR_FORBIDDEN','search','2694120AEtpZk','42gvpstf','../../helpers/UpdateDeletedUserOpenTicketsStatus','83171EOmQTK','55932GnaXUn','../../models/User','apply'];a534_0x5bde=function(){return _0x13b746;};return a534_0x5bde();}(function(_0x57065c,_0x21b76c){const _0x4bf521=a534_0x1243,_0x265185=_0x57065c();while(!![]){try{const _0x5331a4=-parseInt(_0x4bf521(0x1cf))/0x1+parseInt(_0x4bf521(0x1bb))/0x2*(parseInt(_0x4bf521(0x1be))/0x3)+parseInt(_0x4bf521(0x1cd))/0x4*(parseInt(_0x4bf521(0x1b6))/0x5)+parseInt(_0x4bf521(0x1c7))/0x6*(-parseInt(_0x4bf521(0x1b7))/0x7)+-parseInt(_0x4bf521(0x1ba))/0x8+parseInt(_0x4bf521(0x1b3))/0x9+-parseInt(_0x4bf521(0x1c1))/0xa*(-parseInt(_0x4bf521(0x1bd))/0xb);if(_0x5331a4===_0x21b76c)break;else _0x265185['push'](_0x265185['shift']());}catch(_0x155cdc){_0x265185['push'](_0x265185['shift']());}}}(a534_0x5bde,0x36e80));const a534_0x319bde=(function(){let _0x541b5a=!![];return function(_0xeee8bc,_0x23c772){const _0x459e59=_0x541b5a?function(){const _0x1c8c56=a534_0x1243;if(_0x23c772){const _0x28fabf=_0x23c772[_0x1c8c56(0x1c0)](_0xeee8bc,arguments);return _0x23c772=null,_0x28fabf;}}:function(){};return _0x541b5a=![],_0x459e59;};}()),a534_0x3a6434=a534_0x319bde(this,function(){const _0x338a54=a534_0x1243;return a534_0x3a6434[_0x338a54(0x1c6)]()[_0x338a54(0x1b9)](_0x338a54(0x1b5))['toString']()[_0x338a54(0x1c9)](a534_0x3a6434)[_0x338a54(0x1b9)]('(((.+)+)+)+$');});a534_0x3a6434();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x3c16ea){const _0x360c3f=a534_0x1243;return _0x3c16ea&&_0x3c16ea[_0x360c3f(0x1c2)]?_0x3c16ea:{'default':_0x3c16ea};};Object['defineProperty'](exports,a534_0x22d7f5(0x1c2),{'value':!![]});function a534_0x1243(_0x532386,_0x1acf6e){const _0x3704fd=a534_0x5bde();return a534_0x1243=function(_0x3a6434,_0x319bde){_0x3a6434=_0x3a6434-0x1b2;let _0x5bdeb2=_0x3704fd[_0x3a6434];return _0x5bdeb2;},a534_0x1243(_0x532386,_0x1acf6e);}const User_1=__importDefault(require(a534_0x22d7f5(0x1bf))),AppError_1=__importDefault(require('../../errors/AppError')),UpdateDeletedUserOpenTicketsStatus_1=__importDefault(require(a534_0x22d7f5(0x1bc))),DeleteUserService=async(_0xe1524,_0x2ea234)=>{const _0x22b431=a534_0x22d7f5,_0x4e6d3a=await User_1[_0x22b431(0x1ce)][_0x22b431(0x1ca)]({'where':{'id':_0xe1524}});if(!_0x4e6d3a)throw new AppError_1[(_0x22b431(0x1ce))](_0x22b431(0x1c5),0x194);const _0x4bbddd=await User_1[_0x22b431(0x1ce)]['findByPk'](_0x2ea234);if(!_0x4bbddd)throw new AppError_1[(_0x22b431(0x1ce))]('ERR_NO_USER_FOUND',0x194);if(!_0x4bbddd[_0x22b431(0x1c4)]&&_0x4e6d3a['companyId']!==_0x4bbddd[_0x22b431(0x1b4)])throw new AppError_1[(_0x22b431(0x1ce))](_0x22b431(0x1b8),0x193);if(_0x4e6d3a[_0x22b431(0x1c4)])throw new AppError_1[(_0x22b431(0x1ce))](_0x22b431(0x1cc),0x193);const _0x4ae78e=await _0x4e6d3a[_0x22b431(0x1b2)]('tickets',{'where':{'status':_0x22b431(0x1cb)}});_0x4ae78e[_0x22b431(0x1c8)]>0x0&&await(0x0,UpdateDeletedUserOpenTicketsStatus_1[_0x22b431(0x1ce)])(_0x4ae78e,_0x4e6d3a[_0x22b431(0x1b4)]),await _0x4e6d3a[_0x22b431(0x1c3)]();};exports[a534_0x22d7f5(0x1ce)]=DeleteUserService;