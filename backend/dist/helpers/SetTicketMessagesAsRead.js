const a249_0x28fb69=a249_0x4885;(function(_0x3d04b7,_0x2bcbba){const _0x23f17e=a249_0x4885,_0x445524=_0x3d04b7();while(!![]){try{const _0x41366a=-parseInt(_0x23f17e(0xec))/0x1*(-parseInt(_0x23f17e(0x107))/0x2)+-parseInt(_0x23f17e(0xee))/0x3*(parseInt(_0x23f17e(0x105))/0x4)+parseInt(_0x23f17e(0xe8))/0x5*(-parseInt(_0x23f17e(0x100))/0x6)+parseInt(_0x23f17e(0xe5))/0x7*(-parseInt(_0x23f17e(0xf6))/0x8)+parseInt(_0x23f17e(0x10c))/0x9+-parseInt(_0x23f17e(0x10d))/0xa*(parseInt(_0x23f17e(0x101))/0xb)+parseInt(_0x23f17e(0xf5))/0xc*(parseInt(_0x23f17e(0xe4))/0xd);if(_0x41366a===_0x2bcbba)break;else _0x445524['push'](_0x445524['shift']());}catch(_0x244ab5){_0x445524['push'](_0x445524['shift']());}}}(a249_0x3a82,0xdaecf));const a249_0x1e11fc=(function(){let _0x23297b=!![];return function(_0x57e825,_0x974753){const _0xf64301=_0x23297b?function(){const _0x466cd6=a249_0x4885;if(_0x974753){const _0x4e4f4f=_0x974753[_0x466cd6(0xf9)](_0x57e825,arguments);return _0x974753=null,_0x4e4f4f;}}:function(){};return _0x23297b=![],_0xf64301;};}()),a249_0x3ddb68=a249_0x1e11fc(this,function(){const _0x44e58e=a249_0x4885;return a249_0x3ddb68[_0x44e58e(0x109)]()[_0x44e58e(0xe6)](_0x44e58e(0xf4))['toString']()['constructor'](a249_0x3ddb68)[_0x44e58e(0xe6)](_0x44e58e(0xf4));});a249_0x3ddb68();function a249_0x3a82(){const _0x456beb=['warn','110402HtjrWG','dataJson','toString','__importDefault','company-','3968838uSvSdz','10gNFiYm','contactId','__esModule','getIO','key','set','length','../models/Message','14982760qljQcw','21RZGUlc','search','createdAt','340ZCkbIp','-notification','../utils/logger','parse','1PbYUwu','read','233787GkXPSR','-ticket','substring','contact','update','status','(((.+)+)+)+$','24qsfTJo','941816fbZfUe','number','map','apply','../libs/cache','contacts:','@s.whatsapp.net','default','findAll','cacheLayer','99156MMcTDr','2988667wCHLQu','DESC','updateUnread','companyId','8ZzTYpY'];a249_0x3a82=function(){return _0x456beb;};return a249_0x3a82();}'use strict';function a249_0x4885(_0x1eab39,_0x4d501d){const _0x4361be=a249_0x3a82();return a249_0x4885=function(_0x3ddb68,_0x1e11fc){_0x3ddb68=_0x3ddb68-0xe3;let _0x3a82d1=_0x4361be[_0x3ddb68];return _0x3a82d1;},a249_0x4885(_0x1eab39,_0x4d501d);}var __importDefault=this&&this[a249_0x28fb69(0x10a)]||function(_0x35d84c){return _0x35d84c&&_0x35d84c['__esModule']?_0x35d84c:{'default':_0x35d84c};};Object['defineProperty'](exports,a249_0x28fb69(0x10f),{'value':!![]});const socket_1=require('../libs/socket'),Message_1=__importDefault(require(a249_0x28fb69(0xe3))),logger_1=require(a249_0x28fb69(0xea)),GetTicketWbot_1=__importDefault(require('./GetTicketWbot')),cache_1=require(a249_0x28fb69(0xfa)),SetTicketMessagesAsRead=async _0x29c8d4=>{const _0x5157dc=a249_0x28fb69;async function _0x50b232(_0x5e3f55,_0x9d164d,_0x2ec81b,_0x3505d6){const _0x167b27=a249_0x4885;await _0x5e3f55['sendReceipt'](_0x9d164d,_0x2ec81b,[_0x3505d6],_0x167b27(0xed));}await _0x29c8d4[_0x5157dc(0xf2)]({'unreadMessages':0x0});try{const _0x44f44b=await(0x0,GetTicketWbot_1[_0x5157dc(0xfd)])(_0x29c8d4),_0x4c3bf5=await Message_1['default'][_0x5157dc(0xfe)]({'where':{'ticketId':_0x29c8d4['id'],'fromMe':![],'read':![]},'order':[[_0x5157dc(0xe7),_0x5157dc(0x102)]]});_0x4c3bf5[_0x5157dc(0xf8)](async _0x171d32=>{const _0x505c97=_0x5157dc,_0x25d0d4=JSON['parse'](_0x171d32[_0x505c97(0x108)]);_0x25d0d4['key']&&await _0x44f44b['readMessages']([_0x25d0d4[_0x505c97(0x111)]]);});if(_0x4c3bf5[_0x5157dc(0x113)]>0x0){const _0x26fac0=JSON[_0x5157dc(0xeb)](_0x4c3bf5[0x0][_0x5157dc(0x108)]),_0x486f70=_0x29c8d4['isGroup']?_0x29c8d4[_0x5157dc(0xf1)][_0x5157dc(0xf7)]['substring'](0xc,0x0)+'-'+_0x29c8d4['contact']['number'][_0x5157dc(0xf0)](0xc)+'@g.us':_0x29c8d4[_0x5157dc(0xf1)]['number']+_0x5157dc(0xfc);_0x26fac0[_0x5157dc(0x111)]&&_0x26fac0[_0x5157dc(0x111)]['fromMe']===![]&&await _0x44f44b['chatModify']({'markRead':!![],'lastMessages':[_0x26fac0]},_0x486f70);}await Message_1[_0x5157dc(0xfd)]['update']({'read':!![]},{'where':{'ticketId':_0x29c8d4['id'],'read':![]}}),await cache_1[_0x5157dc(0xff)][_0x5157dc(0x112)](_0x5157dc(0xfb)+_0x29c8d4[_0x5157dc(0x10e)]+':unreads','0');}catch(_0x4dd8d5){logger_1['logger'][_0x5157dc(0x106)]('Could\x20not\x20mark\x20messages\x20as\x20read.\x20Maybe\x20whatsapp\x20session\x20disconnected?\x20Err:\x20'+_0x4dd8d5);}const _0x56a2f9=(0x0,socket_1[_0x5157dc(0x110)])();_0x56a2f9['to'](_0x5157dc(0x10b)+_0x29c8d4[_0x5157dc(0x104)]+'-'+_0x29c8d4[_0x5157dc(0xf3)])['to'](_0x5157dc(0x10b)+_0x29c8d4[_0x5157dc(0x104)]+_0x5157dc(0xe9))['emit'](_0x5157dc(0x10b)+_0x29c8d4[_0x5157dc(0x104)]+_0x5157dc(0xef),{'action':_0x5157dc(0x103),'ticketId':_0x29c8d4['id']});};exports[a249_0x28fb69(0xfd)]=SetTicketMessagesAsRead;