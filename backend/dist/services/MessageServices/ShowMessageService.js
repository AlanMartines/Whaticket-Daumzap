const a448_0xae2a7=a448_0x1519;function a448_0x5aeb(){const _0x21de26=['10633840RKvGNG','whatsappId','16210SaynWs','constructor','default','select\x20*\x20from\x20\x22Messages\x22\x20where\x20id\x20=\x20\x27','search','findByPk','defineProperty','__esModule','(((.+)+)+)+$','length','200508OGZnBA','toString','11061rBuCJa','10Yzsgkl','919813BQKGRG','5449395pMblsv','92gkPhlr','3331116fSbynf','GetWhatsAppFromMessage','ticketId','query','88895GcEZdp','../../database','apply'];a448_0x5aeb=function(){return _0x21de26;};return a448_0x5aeb();}(function(_0x45ac5d,_0x2b5a33){const _0x1c9bcd=a448_0x1519,_0x52087c=_0x45ac5d();while(!![]){try{const _0x581ce3=-parseInt(_0x1c9bcd(0x18c))/0x1+parseInt(_0x1c9bcd(0x18b))/0x2*(parseInt(_0x1c9bcd(0x188))/0x3)+-parseInt(_0x1c9bcd(0x18e))/0x4*(-parseInt(_0x1c9bcd(0x193))/0x5)+-parseInt(_0x1c9bcd(0x18f))/0x6+parseInt(_0x1c9bcd(0x18d))/0x7+-parseInt(_0x1c9bcd(0x17c))/0x8+parseInt(_0x1c9bcd(0x18a))/0x9*(parseInt(_0x1c9bcd(0x17e))/0xa);if(_0x581ce3===_0x2b5a33)break;else _0x52087c['push'](_0x52087c['shift']());}catch(_0x5ebc6a){_0x52087c['push'](_0x52087c['shift']());}}}(a448_0x5aeb,0xad3ba));const a448_0x2da491=(function(){let _0x262889=!![];return function(_0x1986ee,_0x17df10){const _0x5e6846=_0x262889?function(){const _0x396fb4=a448_0x1519;if(_0x17df10){const _0x3ff2f6=_0x17df10[_0x396fb4(0x195)](_0x1986ee,arguments);return _0x17df10=null,_0x3ff2f6;}}:function(){};return _0x262889=![],_0x5e6846;};}()),a448_0xba586a=a448_0x2da491(this,function(){const _0x382149=a448_0x1519;return a448_0xba586a[_0x382149(0x189)]()[_0x382149(0x182)]('(((.+)+)+)+$')[_0x382149(0x189)]()[_0x382149(0x17f)](a448_0xba586a)[_0x382149(0x182)](_0x382149(0x186));});a448_0xba586a();'use strict';function a448_0x1519(_0x193e83,_0xd1e0ca){const _0x336dd0=a448_0x5aeb();return a448_0x1519=function(_0xba586a,_0x2da491){_0xba586a=_0xba586a-0x17c;let _0x5aebaf=_0x336dd0[_0xba586a];return _0x5aebaf;},a448_0x1519(_0x193e83,_0xd1e0ca);}var __importDefault=this&&this['__importDefault']||function(_0x123be0){const _0x1863c7=a448_0x1519;return _0x123be0&&_0x123be0[_0x1863c7(0x185)]?_0x123be0:{'default':_0x123be0};};Object[a448_0xae2a7(0x184)](exports,a448_0xae2a7(0x185),{'value':!![]}),exports[a448_0xae2a7(0x190)]=void 0x0;const database_1=__importDefault(require(a448_0xae2a7(0x194))),Message_1=__importDefault(require('../../models/Message')),Ticket_1=__importDefault(require('../../models/Ticket')),ShowMessageService=async _0x33ba95=>{const _0x2d818b=a448_0xae2a7,_0x1ba5b1=await database_1[_0x2d818b(0x180)][_0x2d818b(0x192)](_0x2d818b(0x181)+_0x33ba95+'\x27',{'model':Message_1['default'],'mapToModel':!![]});if(_0x1ba5b1[_0x2d818b(0x187)]>0x0)return _0x1ba5b1[0x0];return undefined;},GetWhatsAppFromMessage=async _0x140fe7=>{const _0x472be1=a448_0xae2a7,_0x55a898=_0x140fe7[_0x472be1(0x191)],_0x38a352=await Ticket_1['default'][_0x472be1(0x183)](_0x55a898);if(!_0x38a352)return null;return _0x38a352[_0x472be1(0x17d)];};exports['GetWhatsAppFromMessage']=GetWhatsAppFromMessage,exports['default']=ShowMessageService;