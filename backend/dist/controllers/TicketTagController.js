const a42_0x43c68d=a42_0xd4c8;(function(_0x1a398e,_0x1af187){const _0x111a98=a42_0xd4c8,_0x32d118=_0x1a398e();while(!![]){try{const _0x4a4877=-parseInt(_0x111a98(0x1cd))/0x1+-parseInt(_0x111a98(0x1d6))/0x2+parseInt(_0x111a98(0x1ce))/0x3+-parseInt(_0x111a98(0x1dd))/0x4*(parseInt(_0x111a98(0x1d0))/0x5)+parseInt(_0x111a98(0x1d9))/0x6*(-parseInt(_0x111a98(0x1e8))/0x7)+-parseInt(_0x111a98(0x1e3))/0x8*(-parseInt(_0x111a98(0x1cf))/0x9)+parseInt(_0x111a98(0x1d1))/0xa;if(_0x4a4877===_0x1af187)break;else _0x32d118['push'](_0x32d118['shift']());}catch(_0x4cf18a){_0x32d118['push'](_0x32d118['shift']());}}}(a42_0x54fc,0x9ba22));const a42_0x22d9b6=(function(){let _0x978b44=!![];return function(_0x1e227a,_0x57a146){const _0x30c56c=_0x978b44?function(){const _0x521ffa=a42_0xd4c8;if(_0x57a146){const _0x3ba1b2=_0x57a146[_0x521ffa(0x1e2)](_0x1e227a,arguments);return _0x57a146=null,_0x3ba1b2;}}:function(){};return _0x978b44=![],_0x30c56c;};}()),a42_0x5d6d77=a42_0x22d9b6(this,function(){const _0x391d2c=a42_0xd4c8;return a42_0x5d6d77['toString']()['search'](_0x391d2c(0x1db))[_0x391d2c(0x1cc)]()[_0x391d2c(0x1da)](a42_0x5d6d77)[_0x391d2c(0x1e1)](_0x391d2c(0x1db));});function a42_0xd4c8(_0x566d9d,_0xb2ac98){const _0xe0f79=a42_0x54fc();return a42_0xd4c8=function(_0x5d6d77,_0x22d9b6){_0x5d6d77=_0x5d6d77-0x1ca;let _0x54fcb3=_0xe0f79[_0x5d6d77];return _0x54fcb3;},a42_0xd4c8(_0x566d9d,_0xb2ac98);}a42_0x5d6d77();'use strict';var __importDefault=this&&this[a42_0x43c68d(0x1e6)]||function(_0x1195a7){const _0x30363e=a42_0x43c68d;return _0x1195a7&&_0x1195a7[_0x30363e(0x1d5)]?_0x1195a7:{'default':_0x1195a7};};function a42_0x54fc(){const _0x10803d=['Failed\x20to\x20remove\x20ticket\x20tags.','toString','334373aQHdZm','2149140iUnFnR','90549sQIcea','85LdzsFO','29546910QRIxrY','Ticket\x20tags\x20removed\x20successfully.','findAll','default','__esModule','2056188ihmkNv','json','tagId','1228764zOCgqn','constructor','(((.+)+)+)+$','Failed\x20to\x20store\x20ticket\x20tag.','191676AhxYCU','remove','map','store','search','apply','296exaPMk','status','create','__importDefault','params','42VxYnqE','../models/TicketTag'];a42_0x54fc=function(){return _0x10803d;};return a42_0x54fc();}Object['defineProperty'](exports,a42_0x43c68d(0x1d5),{'value':!![]}),exports[a42_0x43c68d(0x1de)]=exports[a42_0x43c68d(0x1e0)]=void 0x0;const TicketTag_1=__importDefault(require(a42_0x43c68d(0x1ca))),Tag_1=__importDefault(require('../models/Tag')),store=async(_0x159ec0,_0x457080)=>{const _0x4dcaa3=a42_0x43c68d,{ticketId:_0x10f2d1,tagId:_0x258da4}=_0x159ec0['params'];try{const _0x1e0911=await TicketTag_1['default'][_0x4dcaa3(0x1e5)]({'ticketId':_0x10f2d1,'tagId':_0x258da4});return _0x457080['status'](0xc9)['json'](_0x1e0911);}catch(_0x23e64c){return _0x457080[_0x4dcaa3(0x1e4)](0x1f4)[_0x4dcaa3(0x1d7)]({'error':_0x4dcaa3(0x1dc)});}};exports['store']=store;const remove=async(_0x3f7a37,_0x1cac24)=>{const _0xd763a9=a42_0x43c68d,{ticketId:_0x58598f}=_0x3f7a37[_0xd763a9(0x1e7)];try{const _0x100061=await TicketTag_1['default'][_0xd763a9(0x1d3)]({'where':{'ticketId':_0x58598f}}),_0x3f8db3=_0x100061[_0xd763a9(0x1df)](_0x480c3b=>_0x480c3b[_0xd763a9(0x1d8)]),_0xfdafd8=await Tag_1[_0xd763a9(0x1d4)][_0xd763a9(0x1d3)]({'where':{'id':_0x3f8db3,'kanban':0x1}}),_0x299ee6=_0xfdafd8[_0xd763a9(0x1df)](_0x53bca7=>_0x53bca7['id']);if(_0x299ee6)await TicketTag_1['default']['destroy']({'where':{'ticketId':_0x58598f,'tagId':_0x299ee6}});return _0x1cac24[_0xd763a9(0x1e4)](0xc8)[_0xd763a9(0x1d7)]({'message':_0xd763a9(0x1d2)});}catch(_0x25d1eb){return _0x1cac24['status'](0x1f4)[_0xd763a9(0x1d7)]({'error':_0xd763a9(0x1cb)});}};exports[a42_0x43c68d(0x1de)]=remove;