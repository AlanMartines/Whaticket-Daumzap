const a380_0x4182c6=a380_0x3e80;function a380_0x3e80(_0x24ee8c,_0x453a69){const _0x5d74ba=a380_0x1fde();return a380_0x3e80=function(_0x30df4f,_0x4f974b){_0x30df4f=_0x30df4f-0x130;let _0x1fdec2=_0x5d74ba[_0x30df4f];return _0x1fdec2;},a380_0x3e80(_0x24ee8c,_0x453a69);}function a380_0x1fde(){const _0x5208a9=['7RRxlVW','72002NdJNTS','../../models/ChatMessage','length','../../errors/AppError','30wuFEBs','3cBNuho','count','toString','1885428goBkcd','DESC','default','findAndCountAll','99575zrCsyz','constructor','lodash','376233txOQtl','search','sortBy','apply','(((.+)+)+)+$','1120131OESkkV','../../models/ChatUser','542048SpqBzX','674552MCJmRU','name'];a380_0x1fde=function(){return _0x5208a9;};return a380_0x1fde();}(function(_0x35618a,_0x2e83a7){const _0x3ed3a5=a380_0x3e80,_0x13b721=_0x35618a();while(!![]){try{const _0x582b92=parseInt(_0x3ed3a5(0x145))/0x1*(-parseInt(_0x3ed3a5(0x140))/0x2)+parseInt(_0x3ed3a5(0x135))/0x3+parseInt(_0x3ed3a5(0x13d))/0x4+parseInt(_0x3ed3a5(0x132))/0x5+-parseInt(_0x3ed3a5(0x148))/0x6+-parseInt(_0x3ed3a5(0x13f))/0x7*(parseInt(_0x3ed3a5(0x13c))/0x8)+parseInt(_0x3ed3a5(0x13a))/0x9*(parseInt(_0x3ed3a5(0x144))/0xa);if(_0x582b92===_0x2e83a7)break;else _0x13b721['push'](_0x13b721['shift']());}catch(_0x2bdc71){_0x13b721['push'](_0x13b721['shift']());}}}(a380_0x1fde,0x302e0));const a380_0x4f974b=(function(){let _0x38c968=!![];return function(_0x4ca6fb,_0x42242b){const _0x169918=_0x38c968?function(){const _0x2983e3=a380_0x3e80;if(_0x42242b){const _0x5581e4=_0x42242b[_0x2983e3(0x138)](_0x4ca6fb,arguments);return _0x42242b=null,_0x5581e4;}}:function(){};return _0x38c968=![],_0x169918;};}()),a380_0x30df4f=a380_0x4f974b(this,function(){const _0x2fb249=a380_0x3e80;return a380_0x30df4f[_0x2fb249(0x147)]()['search'](_0x2fb249(0x139))[_0x2fb249(0x147)]()[_0x2fb249(0x133)](a380_0x30df4f)[_0x2fb249(0x136)](_0x2fb249(0x139));});a380_0x30df4f();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x19eacf){return _0x19eacf&&_0x19eacf['__esModule']?_0x19eacf:{'default':_0x19eacf};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const AppError_1=__importDefault(require(a380_0x4182c6(0x143))),ChatMessage_1=__importDefault(require(a380_0x4182c6(0x141))),ChatUser_1=__importDefault(require(a380_0x4182c6(0x13b))),User_1=__importDefault(require('../../models/User')),lodash_1=require(a380_0x4182c6(0x134)),FindMessages=async({chatId:_0x11c2d6,ownerId:_0x5a80fa,pageNumber:pageNumber='1'})=>{const _0x5c090d=a380_0x4182c6,_0x5ab9c6=await ChatUser_1[_0x5c090d(0x130)][_0x5c090d(0x146)]({'where':{'chatId':_0x11c2d6,'userId':_0x5a80fa}});if(_0x5ab9c6===0x0)throw new AppError_1['default']('UNAUTHORIZED',0x190);const _0x3b65ef=0x14,_0x4c98a1=_0x3b65ef*(+pageNumber-0x1),{count:_0x5060ae,rows:_0x2ef9c8}=await ChatMessage_1[_0x5c090d(0x130)][_0x5c090d(0x131)]({'where':{'chatId':_0x11c2d6},'include':[{'model':User_1[_0x5c090d(0x130)],'as':'sender','attributes':['id',_0x5c090d(0x13e)]}],'limit':_0x3b65ef,'offset':_0x4c98a1,'order':[['createdAt',_0x5c090d(0x149)]]}),_0x188216=_0x5060ae>_0x4c98a1+_0x2ef9c8[_0x5c090d(0x142)],_0x170425=(0x0,lodash_1[_0x5c090d(0x137)])(_0x2ef9c8,['id','ASC']);return{'records':_0x170425,'count':_0x5060ae,'hasMore':_0x188216};};exports['default']=FindMessages;