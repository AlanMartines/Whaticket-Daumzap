const a522_0x4fb3bc=a522_0x516c;(function(_0x47365e,_0x449945){const _0x55c354=a522_0x516c,_0x2a65ef=_0x47365e();while(!![]){try{const _0x39740c=parseInt(_0x55c354(0xab))/0x1+-parseInt(_0x55c354(0xbc))/0x2*(parseInt(_0x55c354(0xc3))/0x3)+-parseInt(_0x55c354(0xb8))/0x4*(-parseInt(_0x55c354(0xb2))/0x5)+parseInt(_0x55c354(0xba))/0x6+parseInt(_0x55c354(0xbd))/0x7*(parseInt(_0x55c354(0xb5))/0x8)+-parseInt(_0x55c354(0xb4))/0x9*(parseInt(_0x55c354(0xac))/0xa)+-parseInt(_0x55c354(0xb9))/0xb;if(_0x39740c===_0x449945)break;else _0x2a65ef['push'](_0x2a65ef['shift']());}catch(_0x680b37){_0x2a65ef['push'](_0x2a65ef['shift']());}}}(a522_0x2ede,0x66adc));const a522_0x70f051=(function(){let _0x12e8fe=!![];return function(_0x3fc54f,_0x4755a1){const _0x6a4d96=_0x12e8fe?function(){const _0x1aa31b=a522_0x516c;if(_0x4755a1){const _0x3694d7=_0x4755a1[_0x1aa31b(0xbe)](_0x3fc54f,arguments);return _0x4755a1=null,_0x3694d7;}}:function(){};return _0x12e8fe=![],_0x6a4d96;};}()),a522_0x37fb4a=a522_0x70f051(this,function(){const _0x28bdf9=a522_0x516c;return a522_0x37fb4a[_0x28bdf9(0xb6)]()[_0x28bdf9(0xb0)](_0x28bdf9(0xc0))[_0x28bdf9(0xb6)]()[_0x28bdf9(0xad)](a522_0x37fb4a)[_0x28bdf9(0xb0)](_0x28bdf9(0xc0));});a522_0x37fb4a();'use strict';var __importDefault=this&&this[a522_0x4fb3bc(0xa9)]||function(_0x1f000b){const _0x6ab950=a522_0x4fb3bc;return _0x1f000b&&_0x1f000b[_0x6ab950(0xb1)]?_0x1f000b:{'default':_0x1f000b};};function a522_0x2ede(){const _0x4c90e5=['7xKNcOD','apply','whatsappId\x20is\x20required','(((.+)+)+)+$','findOne','create','84933vcZcUJ','__importDefault','defineProperty','286998HDbDnI','1546850XUeSvr','constructor','../../models/TicketTraking','default','search','__esModule','55625xXOOId','companyId\x20is\x20required','18MbFJGN','4128824voPNzF','toString','trace','156oeRcak','9096538wtiJgd','4637400SWSQof','sequelize','32uazzxb'];a522_0x2ede=function(){return _0x4c90e5;};return a522_0x2ede();}function a522_0x516c(_0x29014e,_0x15b13a){const _0x2df7f6=a522_0x2ede();return a522_0x516c=function(_0x37fb4a,_0x70f051){_0x37fb4a=_0x37fb4a-0xa9;let _0x2edef4=_0x2df7f6[_0x37fb4a];return _0x2edef4;},a522_0x516c(_0x29014e,_0x15b13a);}Object[a522_0x4fb3bc(0xaa)](exports,a522_0x4fb3bc(0xb1),{'value':!![]});const sequelize_1=require(a522_0x4fb3bc(0xbb)),TicketTraking_1=__importDefault(require(a522_0x4fb3bc(0xae))),FindOrCreateATicketTrakingService=async({ticketId:_0x3c0a9d,companyId:_0x1b1e06,whatsappId:_0x293527,userId:_0x499bc6})=>{const _0x33ae92=a522_0x4fb3bc;if(!_0x3c0a9d){console[_0x33ae92(0xb7)]('ticketId\x20is\x20required');return;}if(!_0x1b1e06){console[_0x33ae92(0xb7)](_0x33ae92(0xb3));return;}if(!_0x1b1e06){console['trace'](_0x33ae92(0xbf));return;}const _0x529a90=await TicketTraking_1[_0x33ae92(0xaf)][_0x33ae92(0xc1)]({'where':{'ticketId':_0x3c0a9d,'finishedAt':{[sequelize_1['Op']['is']]:null}}});if(_0x529a90)return _0x529a90;const _0x20f1b2=await TicketTraking_1[_0x33ae92(0xaf)][_0x33ae92(0xc2)]({'ticketId':_0x3c0a9d,'companyId':_0x1b1e06,'whatsappId':_0x293527,'userId':_0x499bc6});return _0x20f1b2;};exports[a522_0x4fb3bc(0xaf)]=FindOrCreateATicketTrakingService;