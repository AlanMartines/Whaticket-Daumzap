const a566_0x29a7b6=a566_0x3889;(function(_0x47ca4a,_0x38d477){const _0x4cf2e1=a566_0x3889,_0x11312d=_0x47ca4a();while(!![]){try{const _0x4c9446=-parseInt(_0x4cf2e1(0xca))/0x1+parseInt(_0x4cf2e1(0xc4))/0x2+-parseInt(_0x4cf2e1(0xc1))/0x3+parseInt(_0x4cf2e1(0xd8))/0x4*(-parseInt(_0x4cf2e1(0xd3))/0x5)+parseInt(_0x4cf2e1(0xc3))/0x6*(parseInt(_0x4cf2e1(0xcb))/0x7)+-parseInt(_0x4cf2e1(0xbb))/0x8*(parseInt(_0x4cf2e1(0xc7))/0x9)+parseInt(_0x4cf2e1(0xb8))/0xa*(parseInt(_0x4cf2e1(0xbd))/0xb);if(_0x4c9446===_0x38d477)break;else _0x11312d['push'](_0x11312d['shift']());}catch(_0x1e1c1b){_0x11312d['push'](_0x11312d['shift']());}}}(a566_0x57f8,0xeb886));const a566_0x2a67d1=(function(){let _0x37f4ae=!![];return function(_0xebfe07,_0x586051){const _0x7b5839=_0x37f4ae?function(){const _0x16760b=a566_0x3889;if(_0x586051){const _0x376b02=_0x586051[_0x16760b(0xb7)](_0xebfe07,arguments);return _0x586051=null,_0x376b02;}}:function(){};return _0x37f4ae=![],_0x7b5839;};}()),a566_0x2c34e2=a566_0x2a67d1(this,function(){const _0x15a139=a566_0x3889;return a566_0x2c34e2['toString']()[_0x15a139(0xbf)](_0x15a139(0xd0))['toString']()[_0x15a139(0xc2)](a566_0x2c34e2)[_0x15a139(0xbf)](_0x15a139(0xd0));});function a566_0x57f8(){const _0x3937d6=['30pztoIr','attributes','integrationId','Não\x20é\x20possível\x20acessar\x20registros\x20de\x20outra\x20empresa','prompt','311028YcuGzM','apply','20VNYvsC','color','default','8dLSsQU','../../models/Queue','4873737uIziSo','greetingMessage','search','session','879630JgZtOe','constructor','2082NLtdkr','2766498Eqmoho','ERR_NO_WAPP_FOUND','../../models/Prompt','7164324UlhdyR','../../models/Whatsapp','orderQueue','1455052pNFGjh','34419VOEMkO','queues','../../errors/AppError','mediaName','__esModule','(((.+)+)+)+$','defineProperty','name'];a566_0x57f8=function(){return _0x3937d6;};return a566_0x57f8();}a566_0x2c34e2();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x4bc930){const _0x4b5462=a566_0x3889;return _0x4bc930&&_0x4bc930[_0x4b5462(0xcf)]?_0x4bc930:{'default':_0x4bc930};};Object[a566_0x29a7b6(0xd1)](exports,a566_0x29a7b6(0xcf),{'value':!![]});function a566_0x3889(_0x4d17b7,_0x2cb9cf){const _0x2afa9c=a566_0x57f8();return a566_0x3889=function(_0x2c34e2,_0x2a67d1){_0x2c34e2=_0x2c34e2-0xb7;let _0x57f832=_0x2afa9c[_0x2c34e2];return _0x57f832;},a566_0x3889(_0x4d17b7,_0x2cb9cf);}const Whatsapp_1=__importDefault(require(a566_0x29a7b6(0xc8))),AppError_1=__importDefault(require(a566_0x29a7b6(0xcd))),Queue_1=__importDefault(require(a566_0x29a7b6(0xbc))),QueueOption_1=__importDefault(require('../../models/QueueOption')),Prompt_1=__importDefault(require(a566_0x29a7b6(0xc6))),ShowWhatsAppService=async(_0x505e93,_0x40d309,_0x24569a)=>{const _0x2637ae=a566_0x29a7b6,_0xba88a7={'include':[{'model':Queue_1[_0x2637ae(0xba)],'as':_0x2637ae(0xcc),'attributes':['id',_0x2637ae(0xd2),_0x2637ae(0xb9),_0x2637ae(0xbe),_0x2637ae(0xd5),'promptId','mediaPath',_0x2637ae(0xce),'keywords'],'include':[{'model':QueueOption_1[_0x2637ae(0xba)],'as':'options'}]},{'model':Prompt_1[_0x2637ae(0xba)],'as':_0x2637ae(0xd7)}],'order':[['queues',_0x2637ae(0xc9),'ASC']]};_0x24569a!==undefined&&_0x24569a==0x0&&(_0xba88a7[_0x2637ae(0xd4)]={'exclude':[_0x2637ae(0xc0)]});const _0x183a31=await Whatsapp_1[_0x2637ae(0xba)]['findByPk'](_0x505e93,_0xba88a7);if(_0x183a31?.['companyId']!==_0x40d309)throw new AppError_1[(_0x2637ae(0xba))](_0x2637ae(0xd6));if(!_0x183a31)throw new AppError_1[(_0x2637ae(0xba))](_0x2637ae(0xc5),0x194);return _0x183a31;};exports[a566_0x29a7b6(0xba)]=ShowWhatsAppService;