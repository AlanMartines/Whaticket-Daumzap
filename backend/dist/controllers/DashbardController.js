const a17_0x58103f=a17_0x252c;(function(_0x3385e8,_0x19ef76){const _0x27ce39=a17_0x252c,_0x1f3a42=_0x3385e8();while(!![]){try{const _0x49ff9e=parseInt(_0x27ce39(0x9d))/0x1+parseInt(_0x27ce39(0xa4))/0x2+-parseInt(_0x27ce39(0xab))/0x3*(-parseInt(_0x27ce39(0xa5))/0x4)+parseInt(_0x27ce39(0x9c))/0x5+parseInt(_0x27ce39(0xa7))/0x6*(parseInt(_0x27ce39(0xac))/0x7)+-parseInt(_0x27ce39(0xa2))/0x8*(-parseInt(_0x27ce39(0x96))/0x9)+-parseInt(_0x27ce39(0x9e))/0xa;if(_0x49ff9e===_0x19ef76)break;else _0x1f3a42['push'](_0x1f3a42['shift']());}catch(_0x50c36c){_0x1f3a42['push'](_0x1f3a42['shift']());}}}(a17_0x404d,0xc656b));const a17_0x5bb3cd=(function(){let _0x40e28b=!![];return function(_0x5d4194,_0xabc3a1){const _0x5038a6=_0x40e28b?function(){if(_0xabc3a1){const _0x58541a=_0xabc3a1['apply'](_0x5d4194,arguments);return _0xabc3a1=null,_0x58541a;}}:function(){};return _0x40e28b=![],_0x5038a6;};}()),a17_0x49a5eb=a17_0x5bb3cd(this,function(){const _0x1da0ef=a17_0x252c;return a17_0x49a5eb[_0x1da0ef(0xaa)]()[_0x1da0ef(0x94)](_0x1da0ef(0xad))[_0x1da0ef(0xaa)]()[_0x1da0ef(0x93)](a17_0x49a5eb)[_0x1da0ef(0x94)](_0x1da0ef(0xad));});function a17_0x252c(_0x2c067a,_0x500f15){const _0x4ef1bf=a17_0x404d();return a17_0x252c=function(_0x49a5eb,_0x5bb3cd){_0x49a5eb=_0x49a5eb-0x8f;let _0x404d80=_0x4ef1bf[_0x49a5eb];return _0x404d80;},a17_0x252c(_0x2c067a,_0x500f15);}a17_0x49a5eb();'use strict';var __importDefault=this&&this[a17_0x58103f(0xa9)]||function(_0x504d67){return _0x504d67&&_0x504d67['__esModule']?_0x504d67:{'default':_0x504d67};};Object['defineProperty'](exports,a17_0x58103f(0x95),{'value':!![]}),exports[a17_0x58103f(0x97)]=exports['ticketsDay']=exports['reportsUsers']=exports[a17_0x58103f(0x90)]=void 0x0;const DashbardDataService_1=__importDefault(require(a17_0x58103f(0xa6))),TicketsAttendanceService_1=__importDefault(require('../services/ReportService/TicketsAttendanceService')),TicketsDayService_1=__importDefault(require(a17_0x58103f(0x98))),TicketsQueueService_1=__importDefault(require(a17_0x58103f(0x9a))),index=async(_0x4cf453,_0xe9cda6)=>{const _0x51bdec=a17_0x58103f,_0x596f3f=_0x4cf453[_0x51bdec(0xa8)],{companyId:_0x2b2630}=_0x4cf453[_0x51bdec(0xa0)];let _0x1499ae=0x3;const _0xdca72c=await(0x0,DashbardDataService_1[_0x51bdec(0xa1)])(_0x2b2630,_0x596f3f);return _0xe9cda6[_0x51bdec(0x92)](0xc8)[_0x51bdec(0x8f)](_0xdca72c);};exports[a17_0x58103f(0x90)]=index;const reportsUsers=async(_0x210ddb,_0x4f5be5)=>{const _0x10f7cd=a17_0x58103f,{companyId:_0x147e10}=_0x210ddb['user'],_0x47ac0d=_0x210ddb[_0x10f7cd(0xa8)]['dateStart'],_0x36c7df=_0x210ddb[_0x10f7cd(0xa8)]['dateEnd'];return _0x4f5be5[_0x10f7cd(0x92)](0xc8)['json']({'data':await(0x0,TicketsAttendanceService_1[_0x10f7cd(0xa1)])({'companyId':_0x147e10,'dateStart':_0x47ac0d,'dateEnd':_0x36c7df})});};exports['reportsUsers']=reportsUsers;function a17_0x404d(){const _0x2df4ab=['index','dateEnd','status','constructor','search','__esModule','9sWYfBW','DashTicketsQueues','../services/ReportService/TicketsDayService','ticketsDay','../services/ReportService/TicketsQueueService','initialDate','6217165qPQXLP','562257mJAhwm','26415460itDrov','finalDate','user','default','4262408okRPYs','profile','710240BGNKox','14976cDbWEV','../services/ReportService/DashbardDataService','16404ChgYgK','query','__importDefault','toString','147tfhRhR','1477IAgEAd','(((.+)+)+)+$','json'];a17_0x404d=function(){return _0x2df4ab;};return a17_0x404d();}const ticketsDay=async(_0x22d849,_0x5e753b)=>{const _0x47230b=a17_0x58103f,{companyId:_0x385012}=_0x22d849['user'],_0x235876=_0x22d849[_0x47230b(0xa8)][_0x47230b(0x9b)],_0x3c4180=_0x22d849[_0x47230b(0xa8)][_0x47230b(0x9f)];return _0x5e753b[_0x47230b(0x92)](0xc8)[_0x47230b(0x8f)]({'data':await(0x0,TicketsDayService_1[_0x47230b(0xa1)])({'companyId':_0x385012,'dateStart':_0x235876,'dateEnd':_0x3c4180})});};exports[a17_0x58103f(0x99)]=ticketsDay;const DashTicketsQueues=async(_0x1fbf02,_0x360bef)=>{const _0xa9f641=a17_0x58103f,{companyId:_0xb9a3a2}=_0x1fbf02['user'],_0x4fb45b=_0x1fbf02[_0xa9f641(0xa8)]['dateStart'],_0xabdec8=_0x1fbf02['query'][_0xa9f641(0x91)],_0x537d74=_0x1fbf02[_0xa9f641(0xa8)][_0xa9f641(0x92)],_0x2c5fd5=_0x1fbf02[_0xa9f641(0xa0)]['id'],_0x2c7a60=_0x1fbf02['user'][_0xa9f641(0xa3)];return _0x360bef[_0xa9f641(0x92)](0xc8)[_0xa9f641(0x8f)]({'data':await(0x0,TicketsQueueService_1['default'])({'companyId':_0xb9a3a2,'dateStart':_0x4fb45b,'dateEnd':_0xabdec8,'status':_0x537d74,'userId':_0x2c5fd5,'profile':_0x2c7a60})});};exports['DashTicketsQueues']=DashTicketsQueues;