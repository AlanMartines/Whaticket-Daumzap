const a448_0x32c158=a448_0x2933;(function(_0x3334ad,_0x5a26b2){const _0xed7226=a448_0x2933,_0x228958=_0x3334ad();while(!![]){try{const _0x4eeec0=-parseInt(_0xed7226(0xc4))/0x1*(parseInt(_0xed7226(0xc8))/0x2)+-parseInt(_0xed7226(0xc1))/0x3+parseInt(_0xed7226(0xbb))/0x4+parseInt(_0xed7226(0xb6))/0x5*(parseInt(_0xed7226(0xb3))/0x6)+parseInt(_0xed7226(0xbf))/0x7*(parseInt(_0xed7226(0xc2))/0x8)+parseInt(_0xed7226(0xbe))/0x9+-parseInt(_0xed7226(0xb5))/0xa*(parseInt(_0xed7226(0xb9))/0xb);if(_0x4eeec0===_0x5a26b2)break;else _0x228958['push'](_0x228958['shift']());}catch(_0x50ed87){_0x228958['push'](_0x228958['shift']());}}}(a448_0x2135,0x61ee8));const a448_0x38d6e7=(function(){let _0x3f0001=!![];return function(_0xa9fca6,_0x3cc55f){const _0x13b591=_0x3f0001?function(){if(_0x3cc55f){const _0xd2a350=_0x3cc55f['apply'](_0xa9fca6,arguments);return _0x3cc55f=null,_0xd2a350;}}:function(){};return _0x3f0001=![],_0x13b591;};}()),a448_0x16ee18=a448_0x38d6e7(this,function(){const _0x260da7=a448_0x2933;return a448_0x16ee18[_0x260da7(0xc9)]()[_0x260da7(0xb4)](_0x260da7(0xb8))['toString']()[_0x260da7(0xb7)](a448_0x16ee18)['search']('(((.+)+)+)+$');});a448_0x16ee18();function a448_0x2933(_0x51b17b,_0x1f7882){const _0x1921bc=a448_0x2135();return a448_0x2933=function(_0x16ee18,_0x38d6e7){_0x16ee18=_0x16ee18-0xb3;let _0x2135a3=_0x1921bc[_0x16ee18];return _0x2135a3;},a448_0x2933(_0x51b17b,_0x1f7882);}'use strict';function a448_0x2135(){const _0x1a533d=['../../models/Ticket','2FeVOhJ','toString','findByPk','90qSLDLT','search','50gpAvtb','138420UqMhlA','constructor','(((.+)+)+)+$','3012988jjjpeC','__importDefault','2455064usezyA','ticketId','../../models/Message','5709798XurvVW','14sttpkw','default','1262322RmeDlQ','2680472CFKrMP','query','142124nasNzO','length','GetWhatsAppFromMessage'];a448_0x2135=function(){return _0x1a533d;};return a448_0x2135();}var __importDefault=this&&this[a448_0x32c158(0xba)]||function(_0x437b1f){return _0x437b1f&&_0x437b1f['__esModule']?_0x437b1f:{'default':_0x437b1f};};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[a448_0x32c158(0xc6)]=void 0x0;const database_1=__importDefault(require('../../database')),Message_1=__importDefault(require(a448_0x32c158(0xbd))),Ticket_1=__importDefault(require(a448_0x32c158(0xc7))),ShowMessageService=async _0x1208ed=>{const _0x5608cc=a448_0x32c158,_0x495e11=await database_1['default'][_0x5608cc(0xc3)]('select\x20*\x20from\x20\x22Messages\x22\x20where\x20id\x20=\x20\x27'+_0x1208ed+'\x27',{'model':Message_1[_0x5608cc(0xc0)],'mapToModel':!![]});if(_0x495e11[_0x5608cc(0xc5)]>0x0)return _0x495e11[0x0];return undefined;},GetWhatsAppFromMessage=async _0x37ffe3=>{const _0x25b869=a448_0x32c158,_0xc0fa56=_0x37ffe3[_0x25b869(0xbc)],_0x1e0d44=await Ticket_1[_0x25b869(0xc0)][_0x25b869(0xca)](_0xc0fa56);if(!_0x1e0d44)return null;return _0x1e0d44['whatsappId'];};exports[a448_0x32c158(0xc6)]=GetWhatsAppFromMessage,exports[a448_0x32c158(0xc0)]=ShowMessageService;