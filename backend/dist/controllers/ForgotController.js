const a20_0x39f323=a20_0x3519;function a20_0xe5dd(){const _0x3f9d8a=['store','141012JbLNQG','json','1119057WYACZV','796EhUkBZ','defineProperty','11CVHsgw','E-mail\x20não\x20enviado','status','../services/ResetPasswordService/ResetPassword','__importDefault','74055BQmuOx','uuid','9319128rChfRD','../services/ForgotPassWordServices/SendMail','constructor','toString','7ISFLOu','Senha\x20redefinida\x20com\x20sucesso','search','default','1706502omnubm','body','3115272UXapyN','apply','resetPasswords','__esModule','10Drpsmy','(((.+)+)+)+$','8825AnWRdW','80sSbhEr'];a20_0xe5dd=function(){return _0x3f9d8a;};return a20_0xe5dd();}(function(_0x2ed8c3,_0x5b20e2){const _0x5a254a=a20_0x3519,_0x124a0b=_0x2ed8c3();while(!![]){try{const _0x2ec26f=parseInt(_0x5a254a(0x135))/0x1*(-parseInt(_0x5a254a(0x126))/0x2)+parseInt(_0x5a254a(0x12d))/0x3+parseInt(_0x5a254a(0x12e))/0x4*(-parseInt(_0x5a254a(0x128))/0x5)+parseInt(_0x5a254a(0x120))/0x6+parseInt(_0x5a254a(0x13b))/0x7*(-parseInt(_0x5a254a(0x122))/0x8)+parseInt(_0x5a254a(0x12b))/0x9*(-parseInt(_0x5a254a(0x129))/0xa)+-parseInt(_0x5a254a(0x130))/0xb*(-parseInt(_0x5a254a(0x137))/0xc);if(_0x2ec26f===_0x5b20e2)break;else _0x124a0b['push'](_0x124a0b['shift']());}catch(_0x54684d){_0x124a0b['push'](_0x124a0b['shift']());}}}(a20_0xe5dd,0x30487));const a20_0x2b0919=(function(){let _0x2e1128=!![];return function(_0x5db59f,_0x100895){const _0x53bca3=_0x2e1128?function(){const _0x218c44=a20_0x3519;if(_0x100895){const _0x594bb3=_0x100895[_0x218c44(0x123)](_0x5db59f,arguments);return _0x100895=null,_0x594bb3;}}:function(){};return _0x2e1128=![],_0x53bca3;};}()),a20_0x3aa298=a20_0x2b0919(this,function(){const _0x193746=a20_0x3519;return a20_0x3aa298['toString']()[_0x193746(0x13d)]('(((.+)+)+)+$')[_0x193746(0x13a)]()[_0x193746(0x139)](a20_0x3aa298)[_0x193746(0x13d)](_0x193746(0x127));});a20_0x3aa298();'use strict';function a20_0x3519(_0x2de89e,_0x318924){const _0xf46b98=a20_0xe5dd();return a20_0x3519=function(_0x3aa298,_0x2b0919){_0x3aa298=_0x3aa298-0x120;let _0xe5ddd3=_0xf46b98[_0x3aa298];return _0xe5ddd3;},a20_0x3519(_0x2de89e,_0x318924);}var __importDefault=this&&this[a20_0x39f323(0x134)]||function(_0x48c4e1){const _0x4c8df2=a20_0x39f323;return _0x48c4e1&&_0x48c4e1[_0x4c8df2(0x125)]?_0x48c4e1:{'default':_0x48c4e1};};Object[a20_0x39f323(0x12f)](exports,a20_0x39f323(0x125),{'value':!![]}),exports[a20_0x39f323(0x124)]=exports['store']=void 0x0;const uuid_1=require(a20_0x39f323(0x136)),SendMail_1=__importDefault(require(a20_0x39f323(0x138))),ResetPassword_1=__importDefault(require(a20_0x39f323(0x133))),store=async(_0x26e3aa,_0x1c3fab)=>{const _0x5bd177=a20_0x39f323,{email:_0x23f4bc}=_0x26e3aa['body'],_0x4abe23=(0x0,uuid_1['v4'])(),_0x38a99b=await(0x0,SendMail_1[_0x5bd177(0x13e)])(_0x23f4bc,_0x4abe23);if(!_0x38a99b)return _0x1c3fab[_0x5bd177(0x132)](0x194)[_0x5bd177(0x12c)]({'error':_0x5bd177(0x131)});return _0x1c3fab[_0x5bd177(0x12c)]({'message':'E-mail\x20enviado\x20com\x20sucesso'});};exports[a20_0x39f323(0x12a)]=store;const resetPasswords=async(_0x15d101,_0x1312be)=>{const _0x500bd3=a20_0x39f323,{email:_0x5fe0bf,token:_0xff003,password:_0x1053d1}=_0x15d101[_0x500bd3(0x121)],_0x118f61=await(0x0,ResetPassword_1[_0x500bd3(0x13e)])(_0x5fe0bf,_0xff003,_0x1053d1);if(!_0x118f61)return _0x1312be[_0x500bd3(0x132)](0x194)[_0x500bd3(0x12c)]({'error':'Verifique\x20o\x20Token\x20informado'});return _0x1312be[_0x500bd3(0x12c)]({'message':_0x500bd3(0x13c)});};exports[a20_0x39f323(0x124)]=resetPasswords;