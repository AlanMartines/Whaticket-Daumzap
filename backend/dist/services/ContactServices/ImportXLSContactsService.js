const a417_0x2e25f2=a417_0x4bbe;(function(_0x59a284,_0x4cf1c5){const _0xd9cbd1=a417_0x4bbe,_0x2fae20=_0x59a284();while(!![]){try{const _0x1aa2d5=-parseInt(_0xd9cbd1(0x1eb))/0x1*(-parseInt(_0xd9cbd1(0x1e2))/0x2)+parseInt(_0xd9cbd1(0x1d1))/0x3+-parseInt(_0xd9cbd1(0x1e1))/0x4*(parseInt(_0xd9cbd1(0x1ec))/0x5)+parseInt(_0xd9cbd1(0x1ef))/0x6*(-parseInt(_0xd9cbd1(0x1e6))/0x7)+-parseInt(_0xd9cbd1(0x1ca))/0x8+parseInt(_0xd9cbd1(0x1cd))/0x9+-parseInt(_0xd9cbd1(0x1ce))/0xa*(-parseInt(_0xd9cbd1(0x1cc))/0xb);if(_0x1aa2d5===_0x4cf1c5)break;else _0x2fae20['push'](_0x2fae20['shift']());}catch(_0x533b69){_0x2fae20['push'](_0x2fae20['shift']());}}}(a417_0x5eee,0xdda16));const a417_0x55a455=(function(){let _0x7ce030=!![];return function(_0x1bf5fe,_0x2409b4){const _0x5bb0ec=_0x7ce030?function(){if(_0x2409b4){const _0x341fbc=_0x2409b4['apply'](_0x1bf5fe,arguments);return _0x2409b4=null,_0x341fbc;}}:function(){};return _0x7ce030=![],_0x5bb0ec;};}()),a417_0x347b30=a417_0x55a455(this,function(){const _0x34dee3=a417_0x4bbe;return a417_0x347b30[_0x34dee3(0x1ed)]()[_0x34dee3(0x1e7)]('(((.+)+)+)+$')[_0x34dee3(0x1ed)]()[_0x34dee3(0x1d3)](a417_0x347b30)[_0x34dee3(0x1e7)](_0x34dee3(0x1c6));});a417_0x347b30();'use strict';var __importDefault=this&&this[a417_0x2e25f2(0x1ee)]||function(_0x5e7de0){const _0x270e90=a417_0x2e25f2;return _0x5e7de0&&_0x5e7de0[_0x270e90(0x1da)]?_0x5e7de0:{'default':_0x5e7de0};};Object[a417_0x2e25f2(0x1cf)](exports,a417_0x2e25f2(0x1da),{'value':!![]}),exports[a417_0x2e25f2(0x1e5)]=void 0x0;function a417_0x4bbe(_0x2cd2a2,_0x577266){const _0xfc7659=a417_0x5eee();return a417_0x4bbe=function(_0x347b30,_0x55a455){_0x347b30=_0x347b30-0x1c6;let _0x5eee23=_0xfc7659[_0x347b30];return _0x5eee23;},a417_0x4bbe(_0x2cd2a2,_0x577266);}const lodash_1=require('lodash'),xlsx_1=__importDefault(require('xlsx')),lodash_2=require(a417_0x2e25f2(0x1d2)),CheckNumber_1=__importDefault(require(a417_0x2e25f2(0x1dd))),logger_1=require(a417_0x2e25f2(0x1cb)),Contact_1=__importDefault(require('../../models/Contact')),attrNames={'NAME':['nome',a417_0x2e25f2(0x1e9)],'NUMBER':['numero',a417_0x2e25f2(0x1dc),a417_0x2e25f2(0x1db),a417_0x2e25f2(0x1c7)],'EMAIL':['email','e-mail',a417_0x2e25f2(0x1d6),a417_0x2e25f2(0x1c8)]};function extractContact(_0x91b5fc,_0x2d7ef4){const _0x2d8133=a417_0x2e25f2,_0x22c21c=getValue(_0x91b5fc,attrNames[_0x2d8133(0x1c9)]);let _0x3ac9d3=getValue(_0x91b5fc,attrNames['NUMBER']);_0x3ac9d3=(''+_0x3ac9d3)['replace'](/\D/g,'');const _0x55d4c8=getValue(_0x91b5fc,attrNames[_0x2d8133(0x1e3)]);return{'name':_0x22c21c,'number':_0x3ac9d3,'email':_0x55d4c8,'companyId':_0x2d7ef4};}function a417_0x5eee(){const _0x4659af=['__esModule','Numero','número','../WbotServices/CheckNumber','Sheets','map','readFile','3956XlPDrw','2RWVGTa','EMAIL','number','ImportXLSContactsService','49pPYkmC','search','default','Nome','replace','39986XdmjnR','9115irTCWX','toString','__importDefault','259476bzqFqJ','jid','findOrCreate','(((.+)+)+)+$','Número','E-mail','NAME','11737464ypCTJZ','../../utils/logger','121gWUeQz','7164711cKhcOf','2144440ShlYCw','defineProperty','push','3857103sGJuTH','lodash','constructor','Número\x20de\x20contato\x20inválido:\x20','has','Email','sheet_to_json','head','path'];a417_0x5eee=function(){return _0x4659af;};return a417_0x5eee();}function getValue(_0x1c0d01,_0x1d17e9){const _0x2fe135=a417_0x2e25f2;for(const _0x48d3b1 of _0x1d17e9){if((0x0,lodash_2[_0x2fe135(0x1d5)])(_0x1c0d01,_0x48d3b1))return _0x1c0d01[_0x48d3b1];}return'';}async function ImportXLSContactsService(_0x4edf41,_0x416f85){const _0x7d85d4=a417_0x2e25f2,_0x4b496d=xlsx_1[_0x7d85d4(0x1e8)][_0x7d85d4(0x1e0)](_0x416f85?.[_0x7d85d4(0x1d9)]),_0x39bcc4=(0x0,lodash_1[_0x7d85d4(0x1d8)])(Object['values'](_0x4b496d[_0x7d85d4(0x1de)])),_0x5ce670=xlsx_1[_0x7d85d4(0x1e8)]['utils'][_0x7d85d4(0x1d7)](_0x39bcc4,{'header':0x0}),_0xb937bc=_0x5ce670[_0x7d85d4(0x1df)](_0x2afe86=>extractContact(_0x2afe86,_0x4edf41)),_0xae6deb=[];for(const _0x41af32 of _0xb937bc){const [_0x18c994,_0x49f42f]=await Contact_1[_0x7d85d4(0x1e8)][_0x7d85d4(0x1f1)]({'where':{'number':''+_0x41af32[_0x7d85d4(0x1e4)],'companyId':_0x41af32['companyId']},'defaults':_0x41af32});_0x49f42f&&_0xae6deb[_0x7d85d4(0x1d0)](_0x18c994);}if(_0xae6deb)for(let _0x59ed0c of _0xae6deb){try{const _0x4b1c51=await(0x0,CheckNumber_1[_0x7d85d4(0x1e8)])(_0x59ed0c[_0x7d85d4(0x1e4)],_0x4edf41),_0x4125f5=_0x4b1c51[_0x7d85d4(0x1f0)][_0x7d85d4(0x1ea)](/\D/g,'');_0x59ed0c[_0x7d85d4(0x1e4)]=_0x4125f5,await _0x59ed0c['save']();}catch(_0x23ab3f){logger_1['logger']['error'](_0x7d85d4(0x1d4)+_0x59ed0c[_0x7d85d4(0x1e4)]);}}return _0xae6deb;}exports[a417_0x2e25f2(0x1e5)]=ImportXLSContactsService;