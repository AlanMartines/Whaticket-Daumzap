const a236_0x39960d=a236_0x2feb;function a236_0x2feb(_0x1400fb,_0x6aa7e){const _0x58b8bf=a236_0x4208();return a236_0x2feb=function(_0x46ad4b,_0x4a43ef){_0x46ad4b=_0x46ad4b-0x193;let _0x42080b=_0x58b8bf[_0x46ad4b];return _0x42080b;},a236_0x2feb(_0x1400fb,_0x6aa7e);}(function(_0x16da6a,_0x478ffe){const _0xdba742=a236_0x2feb,_0x53433c=_0x16da6a();while(!![]){try{const _0x5473cd=parseInt(_0xdba742(0x199))/0x1+parseInt(_0xdba742(0x1a1))/0x2+-parseInt(_0xdba742(0x198))/0x3+parseInt(_0xdba742(0x197))/0x4+parseInt(_0xdba742(0x1a5))/0x5*(-parseInt(_0xdba742(0x1a7))/0x6)+parseInt(_0xdba742(0x19c))/0x7+-parseInt(_0xdba742(0x1a0))/0x8;if(_0x5473cd===_0x478ffe)break;else _0x53433c['push'](_0x53433c['shift']());}catch(_0x4b48ae){_0x53433c['push'](_0x53433c['shift']());}}}(a236_0x4208,0x4651d));function a236_0x4208(){const _0x2e1108=['apply','./GetDefaultWhatsAppByUser','constructor','CONNECTED','397516EkwqfU','1143891YkcxeO','287978mWFvge','search','../models/Whatsapp','2337153owPKru','findOne','defineProperty','__esModule','1110536bCOrwG','275966Iayjio','ERR_NO_DEF_WAPP_FOUND\x20in\x20COMPANY\x20','toString','default','255380Bduhvk','status','6bJPDbm','(((.+)+)+)+$'];a236_0x4208=function(){return _0x2e1108;};return a236_0x4208();}const a236_0x4a43ef=(function(){let _0x773bfe=!![];return function(_0x1a1646,_0x4506d0){const _0x48c7f8=_0x773bfe?function(){const _0x4bc635=a236_0x2feb;if(_0x4506d0){const _0x528903=_0x4506d0[_0x4bc635(0x193)](_0x1a1646,arguments);return _0x4506d0=null,_0x528903;}}:function(){};return _0x773bfe=![],_0x48c7f8;};}()),a236_0x46ad4b=a236_0x4a43ef(this,function(){const _0x1d5c42=a236_0x2feb;return a236_0x46ad4b[_0x1d5c42(0x1a3)]()[_0x1d5c42(0x19a)](_0x1d5c42(0x1a8))['toString']()[_0x1d5c42(0x195)](a236_0x46ad4b)[_0x1d5c42(0x19a)](_0x1d5c42(0x1a8));});a236_0x46ad4b();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x349c6d){return _0x349c6d&&_0x349c6d['__esModule']?_0x349c6d:{'default':_0x349c6d};};Object[a236_0x39960d(0x19e)](exports,a236_0x39960d(0x19f),{'value':!![]});const AppError_1=__importDefault(require('../errors/AppError')),Whatsapp_1=__importDefault(require(a236_0x39960d(0x19b))),GetDefaultWhatsAppByUser_1=__importDefault(require(a236_0x39960d(0x194))),GetDefaultWhatsApp=async(_0x563478,_0x533c56)=>{const _0x438068=a236_0x39960d;let _0x5edbc2;const _0x44a30f=await Whatsapp_1[_0x438068(0x1a4)][_0x438068(0x19d)]({'where':{'isDefault':!![],'companyId':_0x563478}});if(_0x44a30f?.[_0x438068(0x1a6)]===_0x438068(0x196))_0x5edbc2=_0x44a30f;else{const _0x508b9a=await Whatsapp_1[_0x438068(0x1a4)]['findOne']({'where':{'status':_0x438068(0x196),'companyId':_0x563478}});_0x5edbc2=_0x508b9a;}if(_0x533c56){const _0x178d61=await(0x0,GetDefaultWhatsAppByUser_1['default'])(_0x533c56);if(_0x178d61?.['status']===_0x438068(0x196))_0x5edbc2=_0x178d61;else{const _0x4b23e0=await Whatsapp_1[_0x438068(0x1a4)]['findOne']({'where':{'status':_0x438068(0x196),'companyId':_0x563478}});_0x5edbc2=_0x4b23e0;}}if(!_0x5edbc2)throw new AppError_1[(_0x438068(0x1a4))](_0x438068(0x1a2)+_0x563478);return _0x5edbc2;};exports[a236_0x39960d(0x1a4)]=GetDefaultWhatsApp;