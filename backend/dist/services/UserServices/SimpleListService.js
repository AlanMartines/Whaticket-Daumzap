const a537_0x2396c3=a537_0x40b4;function a537_0x3950(){const _0x320e23=['name','toString','ERR_INVALID_COMPANY_ID','default','9EzecMx','98910mydZOK','ASC','1388686WpMoLp','../../errors/AppError','queues','search','4230527lVjubt','defineProperty','__importDefault','126qLmnyF','2231883PVxBaL','8RwGIGd','743799PPtGpP','__esModule','3390320fkRxaH','(((.+)+)+)+$','1259710WHMgpd','apply'];a537_0x3950=function(){return _0x320e23;};return a537_0x3950();}(function(_0x376dc3,_0x36bc53){const _0x466abf=a537_0x40b4,_0x535c17=_0x376dc3();while(!![]){try{const _0xa4232f=parseInt(_0x466abf(0xcc))/0x1+parseInt(_0x466abf(0xd9))/0x2+parseInt(_0x466abf(0xe1))/0x3+-parseInt(_0x466abf(0xce))/0x4+-parseInt(_0x466abf(0xd7))/0x5*(parseInt(_0x466abf(0xe0))/0x6)+parseInt(_0x466abf(0xdd))/0x7*(-parseInt(_0x466abf(0xe2))/0x8)+parseInt(_0x466abf(0xd6))/0x9*(parseInt(_0x466abf(0xd0))/0xa);if(_0xa4232f===_0x36bc53)break;else _0x535c17['push'](_0x535c17['shift']());}catch(_0x24e5d3){_0x535c17['push'](_0x535c17['shift']());}}}(a537_0x3950,0x6b987));const a537_0x3e6279=(function(){let _0x2a231d=!![];return function(_0x1da53b,_0x252959){const _0x402453=_0x2a231d?function(){const _0x393a78=a537_0x40b4;if(_0x252959){const _0x5b1151=_0x252959[_0x393a78(0xd1)](_0x1da53b,arguments);return _0x252959=null,_0x5b1151;}}:function(){};return _0x2a231d=![],_0x402453;};}()),a537_0x5ea782=a537_0x3e6279(this,function(){const _0x2faea8=a537_0x40b4;return a537_0x5ea782['toString']()[_0x2faea8(0xdc)]('(((.+)+)+)+$')[_0x2faea8(0xd3)]()['constructor'](a537_0x5ea782)[_0x2faea8(0xdc)](_0x2faea8(0xcf));});a537_0x5ea782();function a537_0x40b4(_0xf8ecd9,_0x484f20){const _0x57bcce=a537_0x3950();return a537_0x40b4=function(_0x5ea782,_0x3e6279){_0x5ea782=_0x5ea782-0xcc;let _0x39507b=_0x57bcce[_0x5ea782];return _0x39507b;},a537_0x40b4(_0xf8ecd9,_0x484f20);}'use strict';var __importDefault=this&&this[a537_0x2396c3(0xdf)]||function(_0x3e3cf8){return _0x3e3cf8&&_0x3e3cf8['__esModule']?_0x3e3cf8:{'default':_0x3e3cf8};};Object[a537_0x2396c3(0xde)](exports,a537_0x2396c3(0xcd),{'value':!![]});const User_1=__importDefault(require('../../models/User')),AppError_1=__importDefault(require(a537_0x2396c3(0xda))),Queue_1=__importDefault(require('../../models/Queue')),SimpleListService=async({companyId:_0x164389})=>{const _0x10606c=a537_0x2396c3;if(!_0x164389)throw new AppError_1[(_0x10606c(0xd5))](_0x10606c(0xd4),0x190);const _0x4d7853=await User_1[_0x10606c(0xd5)]['findAll']({'where':{'companyId':_0x164389},'attributes':[_0x10606c(0xd2),'id','email'],'include':[{'model':Queue_1[_0x10606c(0xd5)],'as':_0x10606c(0xdb)}],'order':[['id',_0x10606c(0xd8)]]});if(_0x4d7853['length']===0x0)throw new AppError_1[(_0x10606c(0xd5))]('ERR_NO_USER_FOUND',0x194);return _0x4d7853;};exports[a537_0x2396c3(0xd5)]=SimpleListService;