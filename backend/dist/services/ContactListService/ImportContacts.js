const a408_0x23bde4=a408_0xd3c0;(function(_0x35f439,_0x42cbfd){const _0x4c3d97=a408_0xd3c0,_0x475938=_0x35f439();while(!![]){try{const _0x4196f6=-parseInt(_0x4c3d97(0xd9))/0x1*(parseInt(_0x4c3d97(0xca))/0x2)+parseInt(_0x4c3d97(0xcf))/0x3*(parseInt(_0x4c3d97(0xdd))/0x4)+parseInt(_0x4c3d97(0xe5))/0x5*(parseInt(_0x4c3d97(0xe2))/0x6)+parseInt(_0x4c3d97(0xe0))/0x7*(-parseInt(_0x4c3d97(0xd7))/0x8)+parseInt(_0x4c3d97(0xd3))/0x9+-parseInt(_0x4c3d97(0xe7))/0xa+parseInt(_0x4c3d97(0xea))/0xb*(parseInt(_0x4c3d97(0xcc))/0xc);if(_0x4196f6===_0x42cbfd)break;else _0x475938['push'](_0x475938['shift']());}catch(_0xe685e0){_0x475938['push'](_0x475938['shift']());}}}(a408_0x505f,0xbef4a));const a408_0x5afec4=(function(){let _0x2f56ad=!![];return function(_0x167baf,_0x8637cb){const _0x33134f=_0x2f56ad?function(){const _0x37c2c5=a408_0xd3c0;if(_0x8637cb){const _0x403fce=_0x8637cb[_0x37c2c5(0xcb)](_0x167baf,arguments);return _0x8637cb=null,_0x403fce;}}:function(){};return _0x2f56ad=![],_0x33134f;};}()),a408_0x3c9fd1=a408_0x5afec4(this,function(){const _0x5d658c=a408_0xd3c0;return a408_0x3c9fd1[_0x5d658c(0xda)]()[_0x5d658c(0xf1)]('(((.+)+)+)+$')[_0x5d658c(0xda)]()[_0x5d658c(0xd5)](a408_0x3c9fd1)[_0x5d658c(0xf1)](_0x5d658c(0xe8));});a408_0x3c9fd1();function a408_0xd3c0(_0x2d87cf,_0x2cd6af){const _0x574f98=a408_0x505f();return a408_0xd3c0=function(_0x3c9fd1,_0x5afec4){_0x3c9fd1=_0x3c9fd1-0xc9;let _0x505f1b=_0x574f98[_0x3c9fd1];return _0x505f1b;},a408_0xd3c0(_0x2d87cf,_0x2cd6af);}'use strict';var __importDefault=this&&this[a408_0x23bde4(0xf8)]||function(_0x2ed65a){const _0x2048b4=a408_0x23bde4;return _0x2ed65a&&_0x2ed65a[_0x2048b4(0xd2)]?_0x2ed65a:{'default':_0x2ed65a};};Object[a408_0x23bde4(0xdb)](exports,a408_0x23bde4(0xd2),{'value':!![]}),exports[a408_0x23bde4(0xf3)]=void 0x0;const lodash_1=require(a408_0x23bde4(0xdc)),xlsx_1=__importDefault(require('xlsx')),lodash_2=require('lodash'),ContactListItem_1=__importDefault(require(a408_0x23bde4(0xee))),CheckNumber_1=__importDefault(require('../WbotServices/CheckNumber')),logger_1=require('../../utils/logger');async function ImportContacts(_0x264f40,_0x3de53a,_0x4dc51a){const _0x2d524e=a408_0x23bde4,_0x2062ff=xlsx_1[_0x2d524e(0xeb)][_0x2d524e(0xf7)](_0x4dc51a?.[_0x2d524e(0xf6)]),_0x7d087a=(0x0,lodash_1[_0x2d524e(0xe1)])(Object[_0x2d524e(0xf0)](_0x2062ff['Sheets'])),_0x4ff793=xlsx_1['default']['utils'][_0x2d524e(0xe9)](_0x7d087a,{'header':0x0}),_0x37685a=_0x4ff793[_0x2d524e(0xef)](_0x36dacc=>{const _0x5c3101=_0x2d524e;let _0x5be7ad='',_0x53a2ea='',_0x557672='';return((0x0,lodash_2[_0x5c3101(0xf4)])(_0x36dacc,_0x5c3101(0xf5))||(0x0,lodash_2[_0x5c3101(0xf4)])(_0x36dacc,_0x5c3101(0xd4)))&&(_0x5be7ad=_0x36dacc[_0x5c3101(0xf5)]||_0x36dacc[_0x5c3101(0xd4)]),((0x0,lodash_2[_0x5c3101(0xf4)])(_0x36dacc,_0x5c3101(0xdf))||(0x0,lodash_2['has'])(_0x36dacc,_0x5c3101(0xd6))||(0x0,lodash_2[_0x5c3101(0xf4)])(_0x36dacc,_0x5c3101(0xed))||(0x0,lodash_2[_0x5c3101(0xf4)])(_0x36dacc,_0x5c3101(0xd1)))&&(_0x53a2ea=_0x36dacc[_0x5c3101(0xdf)]||_0x36dacc[_0x5c3101(0xd6)]||_0x36dacc['Numero']||_0x36dacc[_0x5c3101(0xd1)],_0x53a2ea=(''+_0x53a2ea)[_0x5c3101(0xd0)](/\D/g,'')),((0x0,lodash_2['has'])(_0x36dacc,'email')||(0x0,lodash_2[_0x5c3101(0xf4)])(_0x36dacc,_0x5c3101(0xf2))||(0x0,lodash_2[_0x5c3101(0xf4)])(_0x36dacc,_0x5c3101(0xec))||(0x0,lodash_2[_0x5c3101(0xf4)])(_0x36dacc,_0x5c3101(0xe4)))&&(_0x557672=_0x36dacc['email']||_0x36dacc['e-mail']||_0x36dacc[_0x5c3101(0xec)]||_0x36dacc[_0x5c3101(0xe4)]),{'name':_0x5be7ad,'number':_0x53a2ea,'email':_0x557672,'contactListId':_0x264f40,'companyId':_0x3de53a};}),_0x5a28ce=[];for(const _0x53cc7a of _0x37685a){const [_0x19e5e4,_0x68d3e9]=await ContactListItem_1[_0x2d524e(0xeb)]['findOrCreate']({'where':{'number':''+_0x53cc7a[_0x2d524e(0xc9)],'contactListId':_0x53cc7a[_0x2d524e(0xe3)],'companyId':_0x53cc7a[_0x2d524e(0xd8)]},'defaults':_0x53cc7a});_0x68d3e9&&_0x5a28ce[_0x2d524e(0xce)](_0x19e5e4);}if(_0x5a28ce)for(let _0x9861cb of _0x5a28ce){try{const _0x117a55=await(0x0,CheckNumber_1['default'])(_0x9861cb[_0x2d524e(0xc9)],_0x3de53a);_0x9861cb['isWhatsappValid']=_0x117a55[_0x2d524e(0xde)];const _0x5af560=_0x117a55[_0x2d524e(0xcd)]['replace'](/\D/g,'');_0x9861cb[_0x2d524e(0xc9)]=_0x5af560,await _0x9861cb['save']();}catch(_0x3fe339){logger_1['logger']['error'](_0x2d524e(0xe6)+_0x9861cb[_0x2d524e(0xc9)]);}}return _0x5a28ce;}exports['ImportContacts']=ImportContacts;function a408_0x505f(){const _0x2e3ca9=['7256790OcqRUU','Nome','constructor','número','67016dBWsde','companyId','1lbZbZs','toString','defineProperty','lodash','4XMIsaV','exists','numero','1036FdOWFL','head','5172cKQosk','contactListId','E-mail','2365JkvadF','Número\x20de\x20contato\x20inválido:\x20','5655660SFgXhM','(((.+)+)+)+$','sheet_to_json','605xeXxXh','default','Email','Numero','../../models/ContactListItem','map','values','search','e-mail','ImportContacts','has','nome','path','readFile','__importDefault','number','806950nuaKKZ','apply','96996dVvTTi','jid','push','3997170kwROHK','replace','Número','__esModule'];a408_0x505f=function(){return _0x2e3ca9;};return a408_0x505f();}