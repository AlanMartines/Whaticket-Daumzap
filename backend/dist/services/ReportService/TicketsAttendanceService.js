const a488_0x57c6bb=a488_0x3615;(function(_0x45ba0b,_0x243cff){const _0x16f5ac=a488_0x3615,_0x3b6752=_0x45ba0b();while(!![]){try{const _0x285ba1=-parseInt(_0x16f5ac(0x1b4))/0x1*(parseInt(_0x16f5ac(0x1a7))/0x2)+parseInt(_0x16f5ac(0x1ab))/0x3+-parseInt(_0x16f5ac(0x1b3))/0x4+parseInt(_0x16f5ac(0x1b6))/0x5+parseInt(_0x16f5ac(0x1a9))/0x6*(parseInt(_0x16f5ac(0x1a2))/0x7)+-parseInt(_0x16f5ac(0x1a5))/0x8*(-parseInt(_0x16f5ac(0x1b9))/0x9)+-parseInt(_0x16f5ac(0x19b))/0xa;if(_0x285ba1===_0x243cff)break;else _0x3b6752['push'](_0x3b6752['shift']());}catch(_0x5484ff){_0x3b6752['push'](_0x3b6752['shift']());}}}(a488_0x1262,0x31088));const a488_0x1a2fa6=(function(){let _0x27c481=!![];return function(_0x51533f,_0x3fd23c){const _0x63ca21=_0x27c481?function(){const _0x1fab35=a488_0x3615;if(_0x3fd23c){const _0x52d5b3=_0x3fd23c[_0x1fab35(0x1ad)](_0x51533f,arguments);return _0x3fd23c=null,_0x52d5b3;}}:function(){};return _0x27c481=![],_0x63ca21;};}()),a488_0xeb847e=a488_0x1a2fa6(this,function(){const _0x5a4c7e=a488_0x3615;return a488_0xeb847e[_0x5a4c7e(0x1b2)]()[_0x5a4c7e(0x1aa)](_0x5a4c7e(0x1a3))[_0x5a4c7e(0x1b2)]()[_0x5a4c7e(0x1b8)](a488_0xeb847e)[_0x5a4c7e(0x1aa)](_0x5a4c7e(0x1a3));});a488_0xeb847e();'use strict';var __importDefault=this&&this[a488_0x57c6bb(0x198)]||function(_0x4a1311){const _0x2862bc=a488_0x57c6bb;return _0x4a1311&&_0x4a1311[_0x2862bc(0x1a8)]?_0x4a1311:{'default':_0x4a1311};};Object[a488_0x57c6bb(0x1b7)](exports,'__esModule',{'value':!![]});function a488_0x3615(_0x1973d1,_0xbca82){const _0x313049=a488_0x1262();return a488_0x3615=function(_0xeb847e,_0x1a2fa6){_0xeb847e=_0xeb847e-0x198;let _0x1262a8=_0x313049[_0xeb847e];return _0x1262a8;},a488_0x3615(_0x1973d1,_0xbca82);}const sequelize_1=require(a488_0x57c6bb(0x1a6)),User_1=__importDefault(require(a488_0x57c6bb(0x1b1))),TicketTraking_1=__importDefault(require(a488_0x57c6bb(0x1b5))),TicketsAttendanceService=async({companyId:_0x5f0918,dateStart:_0x2b8328,dateEnd:_0x1c4676})=>{const _0x33156d=a488_0x57c6bb,_0x5931e2=await User_1['default'][_0x33156d(0x199)]({'attributes':['id',_0x33156d(0x1a1)],'where':{'companyId':_0x5f0918}}),_0x1d0101=(await TicketTraking_1[_0x33156d(0x1a0)][_0x33156d(0x199)]({'attributes':['userId',[sequelize_1[_0x33156d(0x19c)]['fn'](_0x33156d(0x19e),sequelize_1['Sequelize'][_0x33156d(0x1a4)](_0x33156d(0x1ac))),_0x33156d(0x19f)]],'where':{'companyId':_0x5f0918,'createdAt':{[sequelize_1['Op'][_0x33156d(0x1af)]]:_0x2b8328+_0x33156d(0x1b0),[sequelize_1['Op'][_0x33156d(0x19a)]]:_0x1c4676+'\x2023:59:59'},'ticketId':{[sequelize_1['Op']['ne']]:null}},'group':[_0x33156d(0x1ac)]}))['map'](_0x5f5de9=>{return _0x5f5de9['dataValues'];}),_0x2a0d85=_0x5931e2[_0x33156d(0x19d)](_0x46e9cb=>{const _0x106fa2=_0x33156d,_0x145ba2=_0x1d0101[_0x106fa2(0x1ae)](_0x5dc970=>_0x5dc970[_0x106fa2(0x1ac)]===_0x46e9cb['id']);return{'name':_0x46e9cb[_0x106fa2(0x1a1)],'quantity':_0x145ba2?.[_0x106fa2(0x19f)]||0x0};});return{'data':_0x2a0d85};};exports['default']=TicketsAttendanceService;function a488_0x1262(){const _0x5c1ff7=['search','139884hWytUL','userId','apply','find','gte','\x2000:00:00','../../models/User','toString','295296uqwujg','157819QpZeUm','../../models/TicketTraking','1063685SdFYfy','defineProperty','constructor','81rLvwfO','__importDefault','findAll','lte','1974070BdiTpM','Sequelize','map','COUNT','quantidade','default','name','1337LFytec','(((.+)+)+)+$','col','302408hKjTlv','sequelize','4YikrWo','__esModule','5910qDNhnJ'];a488_0x1262=function(){return _0x5c1ff7;};return a488_0x1262();}