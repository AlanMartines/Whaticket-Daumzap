const a42_0x2567d1=a42_0x4494;(function(_0x110cd4,_0x4e04ab){const _0x47f1bb=a42_0x4494,_0x263318=_0x110cd4();while(!![]){try{const _0x1395ce=parseInt(_0x47f1bb(0x1b6))/0x1*(parseInt(_0x47f1bb(0x1c3))/0x2)+parseInt(_0x47f1bb(0x1c8))/0x3+parseInt(_0x47f1bb(0x1b2))/0x4+-parseInt(_0x47f1bb(0x1c1))/0x5*(parseInt(_0x47f1bb(0x1ac))/0x6)+-parseInt(_0x47f1bb(0x1b5))/0x7+-parseInt(_0x47f1bb(0x1bb))/0x8*(parseInt(_0x47f1bb(0x1ad))/0x9)+parseInt(_0x47f1bb(0x1ab))/0xa*(parseInt(_0x47f1bb(0x1c6))/0xb);if(_0x1395ce===_0x4e04ab)break;else _0x263318['push'](_0x263318['shift']());}catch(_0x3f6c09){_0x263318['push'](_0x263318['shift']());}}}(a42_0x519c,0x88d65));const a42_0x4f31b1=(function(){let _0x2d5d31=!![];return function(_0x55d4ce,_0x1e8c90){const _0xf74813=_0x2d5d31?function(){const _0x95fb92=a42_0x4494;if(_0x1e8c90){const _0x58c173=_0x1e8c90[_0x95fb92(0x1aa)](_0x55d4ce,arguments);return _0x1e8c90=null,_0x58c173;}}:function(){};return _0x2d5d31=![],_0xf74813;};}()),a42_0x5449c8=a42_0x4f31b1(this,function(){const _0x1aa9b3=a42_0x4494;return a42_0x5449c8['toString']()[_0x1aa9b3(0x1bd)]('(((.+)+)+)+$')[_0x1aa9b3(0x1a8)]()[_0x1aa9b3(0x1a9)](a42_0x5449c8)[_0x1aa9b3(0x1bd)](_0x1aa9b3(0x1b3));});a42_0x5449c8();'use strict';var __importDefault=this&&this[a42_0x2567d1(0x1b9)]||function(_0x39a1a7){return _0x39a1a7&&_0x39a1a7['__esModule']?_0x39a1a7:{'default':_0x39a1a7};};function a42_0x519c(){const _0x327c71=['apply','59090mWEDMy','5252244JQVeuR','70542VAhyxk','../models/TicketTag','__esModule','../models/Tag','findAll','2595280eTHiWU','(((.+)+)+)+$','create','3491530gFzeDc','1062QevLMJ','store','defineProperty','__importDefault','params','72fublPe','map','search','json','default','Ticket\x20tags\x20removed\x20successfully.','5WdTprj','status','1326TVpGdU','Failed\x20to\x20store\x20ticket\x20tag.','destroy','473DqodtZ','remove','1194534XwwVty','toString','constructor'];a42_0x519c=function(){return _0x327c71;};return a42_0x519c();}Object[a42_0x2567d1(0x1b8)](exports,a42_0x2567d1(0x1af),{'value':!![]}),exports['remove']=exports[a42_0x2567d1(0x1b7)]=void 0x0;function a42_0x4494(_0x4c3753,_0x36547a){const _0x3acafa=a42_0x519c();return a42_0x4494=function(_0x5449c8,_0x4f31b1){_0x5449c8=_0x5449c8-0x1a8;let _0x519c21=_0x3acafa[_0x5449c8];return _0x519c21;},a42_0x4494(_0x4c3753,_0x36547a);}const TicketTag_1=__importDefault(require(a42_0x2567d1(0x1ae))),Tag_1=__importDefault(require(a42_0x2567d1(0x1b0))),store=async(_0x5a1e1a,_0x369fd1)=>{const _0x8a4dda=a42_0x2567d1,{ticketId:_0x42d300,tagId:_0x12c06f}=_0x5a1e1a['params'];try{const _0x2383b4=await TicketTag_1['default'][_0x8a4dda(0x1b4)]({'ticketId':_0x42d300,'tagId':_0x12c06f});return _0x369fd1[_0x8a4dda(0x1c2)](0xc9)[_0x8a4dda(0x1be)](_0x2383b4);}catch(_0x4541d2){return _0x369fd1[_0x8a4dda(0x1c2)](0x1f4)[_0x8a4dda(0x1be)]({'error':_0x8a4dda(0x1c4)});}};exports[a42_0x2567d1(0x1b7)]=store;const remove=async(_0x13427c,_0x2432f7)=>{const _0x511fb9=a42_0x2567d1,{ticketId:_0x191560}=_0x13427c[_0x511fb9(0x1ba)];try{const _0x2e0835=await TicketTag_1[_0x511fb9(0x1bf)][_0x511fb9(0x1b1)]({'where':{'ticketId':_0x191560}}),_0x582a59=_0x2e0835[_0x511fb9(0x1bc)](_0x1a7dce=>_0x1a7dce['tagId']),_0x494456=await Tag_1[_0x511fb9(0x1bf)][_0x511fb9(0x1b1)]({'where':{'id':_0x582a59,'kanban':0x1}}),_0x1cd0f8=_0x494456[_0x511fb9(0x1bc)](_0x643d84=>_0x643d84['id']);if(_0x1cd0f8)await TicketTag_1[_0x511fb9(0x1bf)][_0x511fb9(0x1c5)]({'where':{'ticketId':_0x191560,'tagId':_0x1cd0f8}});return _0x2432f7[_0x511fb9(0x1c2)](0xc8)[_0x511fb9(0x1be)]({'message':_0x511fb9(0x1c0)});}catch(_0x21ec5c){return _0x2432f7[_0x511fb9(0x1c2)](0x1f4)[_0x511fb9(0x1be)]({'error':'Failed\x20to\x20remove\x20ticket\x20tags.'});}};exports[a42_0x2567d1(0x1c7)]=remove;