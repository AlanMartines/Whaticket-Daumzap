const a536_0x408a28=a536_0x21f1;function a536_0x35f4(){const _0x214f91=['findByPk','name','../../errors/AppError','whatsappId','search','allTicket','default','9762232dwVAjh','../../models/Queue','spy','color','defineProperty','33VzMvCL','4836vMmdNJ','isTricked','212682IEnqyI','__importDefault','503oXVZQO','9hrLIoq','5006323oOGLYv','company','416844eoOvvQ','startWork','companyId','3360SYmdvo','3142610jRjAIu','../../models/Company','4yGkzOb','tokenVersion','endWork','ERR_NO_USER_FOUND','toString','email','profile','338NaxCBE','constructor','super','ERR_FORBIDDEN','174KOdhGs','defaultMenu','__esModule','apply','(((.+)+)+)+$'];a536_0x35f4=function(){return _0x214f91;};return a536_0x35f4();}(function(_0x3e33fd,_0x8a415d){const _0x4eb6c7=a536_0x21f1,_0x8d747=_0x3e33fd();while(!![]){try{const _0x3aaf93=-parseInt(_0x4eb6c7(0xed))/0x1*(parseInt(_0x4eb6c7(0xe9))/0x2)+parseInt(_0x4eb6c7(0xeb))/0x3*(-parseInt(_0x4eb6c7(0xf7))/0x4)+parseInt(_0x4eb6c7(0xf4))/0x5*(-parseInt(_0x4eb6c7(0x102))/0x6)+parseInt(_0x4eb6c7(0xef))/0x7+parseInt(_0x4eb6c7(0xe3))/0x8*(parseInt(_0x4eb6c7(0xee))/0x9)+parseInt(_0x4eb6c7(0xf5))/0xa*(parseInt(_0x4eb6c7(0xe8))/0xb)+-parseInt(_0x4eb6c7(0xf1))/0xc*(parseInt(_0x4eb6c7(0xfe))/0xd);if(_0x3aaf93===_0x8a415d)break;else _0x8d747['push'](_0x8d747['shift']());}catch(_0x258e04){_0x8d747['push'](_0x8d747['shift']());}}}(a536_0x35f4,0xa3325));const a536_0x53cf82=(function(){let _0x2caac9=!![];return function(_0x21746b,_0x5884a4){const _0x764c4b=_0x2caac9?function(){const _0x448d44=a536_0x21f1;if(_0x5884a4){const _0x2732e5=_0x5884a4[_0x448d44(0xda)](_0x21746b,arguments);return _0x5884a4=null,_0x2732e5;}}:function(){};return _0x2caac9=![],_0x764c4b;};}()),a536_0x5afd17=a536_0x53cf82(this,function(){const _0x17c308=a536_0x21f1;return a536_0x5afd17['toString']()['search'](_0x17c308(0xdb))[_0x17c308(0xfb)]()[_0x17c308(0xff)](a536_0x5afd17)[_0x17c308(0xe0)](_0x17c308(0xdb));});a536_0x5afd17();'use strict';var __importDefault=this&&this[a536_0x408a28(0xec)]||function(_0x4ac205){return _0x4ac205&&_0x4ac205['__esModule']?_0x4ac205:{'default':_0x4ac205};};Object[a536_0x408a28(0xe7)](exports,a536_0x408a28(0xd9),{'value':!![]});const User_1=__importDefault(require('../../models/User')),AppError_1=__importDefault(require(a536_0x408a28(0xde))),Queue_1=__importDefault(require(a536_0x408a28(0xe4))),Company_1=__importDefault(require(a536_0x408a28(0xf6))),ShowUserService=async(_0x23ff88,_0x2d0c95)=>{const _0x218f8e=a536_0x408a28,_0x1ea27c=await User_1[_0x218f8e(0xe2)][_0x218f8e(0xdc)](_0x23ff88,{'attributes':[_0x218f8e(0xdd),'id',_0x218f8e(0xfc),_0x218f8e(0xf3),_0x218f8e(0xfd),_0x218f8e(0x100),_0x218f8e(0xf8),_0x218f8e(0xdf),_0x218f8e(0xe1),_0x218f8e(0xf2),_0x218f8e(0xf9),_0x218f8e(0xe5),_0x218f8e(0xea),_0x218f8e(0xd8)],'include':[{'model':Queue_1[_0x218f8e(0xe2)],'as':'queues','attributes':['id','name',_0x218f8e(0xe6)]},{'model':Company_1['default'],'as':_0x218f8e(0xf0),'attributes':['id',_0x218f8e(0xdd)]}]});if(!_0x1ea27c)throw new AppError_1[(_0x218f8e(0xe2))](_0x218f8e(0xfa),0x194);if(_0x2d0c95){const _0x5e9705=await User_1[_0x218f8e(0xe2)]['findByPk'](_0x2d0c95);if(!_0x5e9705)throw new AppError_1['default'](_0x218f8e(0xfa),0x194);if(!_0x5e9705[_0x218f8e(0x100)]&&_0x1ea27c[_0x218f8e(0xf3)]!==_0x5e9705[_0x218f8e(0xf3)])throw new AppError_1[(_0x218f8e(0xe2))](_0x218f8e(0x101),0x193);}return _0x1ea27c;};function a536_0x21f1(_0x4474e4,_0x163543){const _0x5aec0b=a536_0x35f4();return a536_0x21f1=function(_0x5afd17,_0x53cf82){_0x5afd17=_0x5afd17-0xd8;let _0x35f451=_0x5aec0b[_0x5afd17];return _0x35f451;},a536_0x21f1(_0x4474e4,_0x163543);}exports[a536_0x408a28(0xe2)]=ShowUserService;