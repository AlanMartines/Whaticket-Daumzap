const a524_0x361a8a=a524_0x1a6c;(function(_0x51726d,_0x460ef3){const _0x16b801=a524_0x1a6c,_0x530cdc=_0x51726d();while(!![]){try{const _0x324bcd=-parseInt(_0x16b801(0x15b))/0x1+-parseInt(_0x16b801(0x158))/0x2+parseInt(_0x16b801(0x179))/0x3+parseInt(_0x16b801(0x192))/0x4*(parseInt(_0x16b801(0x15f))/0x5)+parseInt(_0x16b801(0x154))/0x6+parseInt(_0x16b801(0x167))/0x7*(-parseInt(_0x16b801(0x16a))/0x8)+parseInt(_0x16b801(0x16b))/0x9*(-parseInt(_0x16b801(0x186))/0xa);if(_0x324bcd===_0x460ef3)break;else _0x530cdc['push'](_0x530cdc['shift']());}catch(_0xe338de){_0x530cdc['push'](_0x530cdc['shift']());}}}(a524_0x283a,0x42b1d));function a524_0x283a(){const _0x3397d0=['constructor','62110XfMeKL','push','disabled','user','toString','search','profilePicUrl','not','__esModule','../../models/User','presence','contact','1453388dEDprh','endOfDay','trim','default','1222350ybymNv','intersection','contact.name','LOWER','167830QTmTEl','queue','DESC','288096qbrXDn','body','enabled','startOfDay','5TMlIOS','date-fns','../../models/Tag','color','profile','__importDefault','apply','../../models/Queue','6377bYtgdw','sequelize','name','1592qDCNWi','36CGXclp','LIKE','like','map','../../models/TicketTag','findAndCountAll','where','parseISO','../../models/Whatsapp','queues','isArray','ticketId','allTicket','defineProperty','852759xPGlLY','col','length','(((.+)+)+)+$','../../models/Contact','whatsapp','findAll','between','tags','pending','true','../UserServices/ShowUserService'];a524_0x283a=function(){return _0x3397d0;};return a524_0x283a();}const a524_0x20328d=(function(){let _0x58391a=!![];return function(_0xe1f52a,_0x271d07){const _0x556581=_0x58391a?function(){const _0x3d197a=a524_0x1a6c;if(_0x271d07){const _0xc7406a=_0x271d07[_0x3d197a(0x165)](_0xe1f52a,arguments);return _0x271d07=null,_0xc7406a;}}:function(){};return _0x58391a=![],_0x556581;};}()),a524_0x3479e0=a524_0x20328d(this,function(){const _0x171d95=a524_0x1a6c;return a524_0x3479e0[_0x171d95(0x18a)]()['search']('(((.+)+)+)+$')[_0x171d95(0x18a)]()[_0x171d95(0x185)](a524_0x3479e0)[_0x171d95(0x18b)](_0x171d95(0x17c));});a524_0x3479e0();function a524_0x1a6c(_0x5f1b85,_0x2b0920){const _0x4c4811=a524_0x283a();return a524_0x1a6c=function(_0x3479e0,_0x20328d){_0x3479e0=_0x3479e0-0x152;let _0x283a3e=_0x4c4811[_0x3479e0];return _0x283a3e;},a524_0x1a6c(_0x5f1b85,_0x2b0920);}'use strict';var __importDefault=this&&this[a524_0x361a8a(0x164)]||function(_0x3a549a){const _0x271fa4=a524_0x361a8a;return _0x3a549a&&_0x3a549a[_0x271fa4(0x18e)]?_0x3a549a:{'default':_0x3a549a};};Object[a524_0x361a8a(0x178)](exports,a524_0x361a8a(0x18e),{'value':!![]});const sequelize_1=require(a524_0x361a8a(0x168)),date_fns_1=require(a524_0x361a8a(0x160)),Ticket_1=__importDefault(require('../../models/Ticket')),Contact_1=__importDefault(require(a524_0x361a8a(0x17d))),Message_1=__importDefault(require('../../models/Message')),Queue_1=__importDefault(require(a524_0x361a8a(0x166))),User_1=__importDefault(require(a524_0x361a8a(0x18f))),ShowUserService_1=__importDefault(require(a524_0x361a8a(0x184))),Tag_1=__importDefault(require(a524_0x361a8a(0x161))),TicketTag_1=__importDefault(require(a524_0x361a8a(0x16f))),lodash_1=require('lodash'),Whatsapp_1=__importDefault(require(a524_0x361a8a(0x173))),ListTicketsService=async({searchParam:searchParam='',pageNumber:pageNumber='1',queueIds:_0x53e68e,tags:_0x4d0709,users:_0x5b70ae,status:_0x19df00,date:_0x36b422,startDate:_0x442f6b,endDate:_0xa0bb4b,updatedAt:_0x57d6c9,showAll:_0x2ec851,userId:_0x37f3c,withUnreadMessages:_0x4aa5f9,companyId:_0x2d167b})=>{const _0x5dd815=a524_0x361a8a,_0x132daf=await(0x0,ShowUserService_1['default'])(_0x37f3c),_0x1c0ff7=_0x132daf[_0x5dd815(0x174)]['map'](_0x6cd59d=>_0x6cd59d['id']);let _0x4ab1a4={[sequelize_1['Op']['or']]:[{'userId':_0x37f3c},{'status':_0x5dd815(0x182)}],'queueId':{[sequelize_1['Op']['or']]:[_0x53e68e,null]}},_0x1235e3;_0x1235e3=[{'model':Contact_1[_0x5dd815(0x153)],'as':_0x5dd815(0x191),'attributes':['id','name','number','email',_0x5dd815(0x18c),_0x5dd815(0x190)]},{'model':Queue_1[_0x5dd815(0x153)],'as':_0x5dd815(0x159),'attributes':['id','name','color']},{'model':User_1[_0x5dd815(0x153)],'as':_0x5dd815(0x189),'attributes':['id',_0x5dd815(0x169)]},{'model':Tag_1[_0x5dd815(0x153)],'as':_0x5dd815(0x181),'attributes':['id',_0x5dd815(0x169),_0x5dd815(0x162)]},{'model':Whatsapp_1[_0x5dd815(0x153)],'as':_0x5dd815(0x17e),'attributes':[_0x5dd815(0x169)]}];if(_0x132daf[_0x5dd815(0x163)]===_0x5dd815(0x189)&&_0x132daf[_0x5dd815(0x177)]===_0x5dd815(0x15d)){const _0x121c03=[];let _0x359057=[];_0x359057=await Ticket_1['default']['findAll']({'where':{'userId':{[sequelize_1['Op']['or']]:[_0x132daf['id'],null]},'companyId':_0x2d167b}});_0x359057&&_0x121c03[_0x5dd815(0x187)](_0x359057[_0x5dd815(0x16e)](_0x4cff68=>_0x4cff68['id']));const _0x4f2672=(0x0,lodash_1['intersection'])(..._0x121c03);_0x4ab1a4={..._0x4ab1a4,'id':_0x4f2672};}if(_0x132daf[_0x5dd815(0x163)]==='user'&&_0x132daf[_0x5dd815(0x177)]===_0x5dd815(0x188)){const _0x3644c5=[];let _0xf4826f=[];_0xf4826f=await Ticket_1[_0x5dd815(0x153)]['findAll']({'where':{'userId':{[sequelize_1['Op']['or']]:[_0x132daf['id'],null]},'companyId':_0x2d167b,'queueId':{[sequelize_1['Op'][_0x5dd815(0x18d)]]:null}}});_0xf4826f&&_0x3644c5[_0x5dd815(0x187)](_0xf4826f[_0x5dd815(0x16e)](_0x5b1d26=>_0x5b1d26['id']));const _0x5882fb=(0x0,lodash_1[_0x5dd815(0x155)])(..._0x3644c5);_0x4ab1a4={..._0x4ab1a4,'id':_0x5882fb};}_0x2ec851===_0x5dd815(0x183)&&(_0x4ab1a4={'queueId':{[sequelize_1['Op']['or']]:[_0x53e68e,null]}});_0x19df00&&(_0x4ab1a4={..._0x4ab1a4,'status':_0x19df00});_0x442f6b&&_0xa0bb4b&&(_0x4ab1a4={..._0x4ab1a4,'createdAt':{[sequelize_1['Op'][_0x5dd815(0x180)]]:[+(0x0,date_fns_1[_0x5dd815(0x15e)])((0x0,date_fns_1[_0x5dd815(0x172)])(_0x442f6b)),+(0x0,date_fns_1[_0x5dd815(0x193)])((0x0,date_fns_1[_0x5dd815(0x172)])(_0xa0bb4b))]}});if(searchParam){const _0x1a1772=searchParam['toLocaleLowerCase']()[_0x5dd815(0x152)]();_0x1235e3=[..._0x1235e3,{'model':Message_1[_0x5dd815(0x153)],'as':'messages','attributes':['id',_0x5dd815(0x15c)],'where':{'body':(0x0,sequelize_1[_0x5dd815(0x171)])((0x0,sequelize_1['fn'])(_0x5dd815(0x157),(0x0,sequelize_1[_0x5dd815(0x17a)])(_0x5dd815(0x15c))),'LIKE','%'+_0x1a1772+'%')},'required':![],'duplicating':![]}],_0x4ab1a4={..._0x4ab1a4,[sequelize_1['Op']['or']]:[{'$contact.name$':(0x0,sequelize_1[_0x5dd815(0x171)])((0x0,sequelize_1['fn'])(_0x5dd815(0x157),(0x0,sequelize_1[_0x5dd815(0x17a)])(_0x5dd815(0x156))),_0x5dd815(0x16c),'%'+_0x1a1772+'%')},{'$contact.number$':{[sequelize_1['Op'][_0x5dd815(0x16d)]]:'%'+_0x1a1772+'%'}},{'$message.body$':(0x0,sequelize_1[_0x5dd815(0x171)])((0x0,sequelize_1['fn'])(_0x5dd815(0x157),(0x0,sequelize_1[_0x5dd815(0x17a)])(_0x5dd815(0x15c))),_0x5dd815(0x16c),'%'+_0x1a1772+'%')}]};}_0x36b422&&(_0x4ab1a4={'createdAt':{[sequelize_1['Op'][_0x5dd815(0x180)]]:[+(0x0,date_fns_1[_0x5dd815(0x15e)])((0x0,date_fns_1[_0x5dd815(0x172)])(_0x36b422)),+(0x0,date_fns_1['endOfDay'])((0x0,date_fns_1['parseISO'])(_0x36b422))]}});_0x57d6c9&&(_0x4ab1a4={'updatedAt':{[sequelize_1['Op'][_0x5dd815(0x180)]]:[+(0x0,date_fns_1[_0x5dd815(0x15e)])((0x0,date_fns_1[_0x5dd815(0x172)])(_0x57d6c9)),+(0x0,date_fns_1[_0x5dd815(0x193)])((0x0,date_fns_1[_0x5dd815(0x172)])(_0x57d6c9))]}});if(_0x4aa5f9==='true'){const _0x1a0a84=await(0x0,ShowUserService_1[_0x5dd815(0x153)])(_0x37f3c),_0x321e68=_0x1a0a84[_0x5dd815(0x174)]['map'](_0x2dd898=>_0x2dd898['id']);_0x4ab1a4={[sequelize_1['Op']['or']]:[{'userId':_0x37f3c},{'status':_0x5dd815(0x182)}],'queueId':{[sequelize_1['Op']['or']]:[_0x321e68,null]},'unreadMessages':{[sequelize_1['Op']['gt']]:0x0}};}if(Array[_0x5dd815(0x175)](_0x4d0709)&&_0x4d0709[_0x5dd815(0x17b)]>0x0){const _0xb1bf3f=[];for(let _0x4737ec of _0x4d0709){const _0x4582e4=await TicketTag_1['default'][_0x5dd815(0x17f)]({'where':{'tagId':_0x4737ec}});_0x4582e4&&_0xb1bf3f[_0x5dd815(0x187)](_0x4582e4[_0x5dd815(0x16e)](_0x43fecd=>_0x43fecd[_0x5dd815(0x176)]));}const _0x3fb7c2=(0x0,lodash_1[_0x5dd815(0x155)])(..._0xb1bf3f);_0x4ab1a4={..._0x4ab1a4,'id':{[sequelize_1['Op']['in']]:_0x3fb7c2}};}if(Array[_0x5dd815(0x175)](_0x5b70ae)&&_0x5b70ae['length']>0x0){const _0x312037=[];for(let _0x38969e of _0x5b70ae){const _0x4bcf43=await Ticket_1[_0x5dd815(0x153)][_0x5dd815(0x17f)]({'where':{'userId':_0x38969e}});_0x4bcf43&&_0x312037[_0x5dd815(0x187)](_0x4bcf43[_0x5dd815(0x16e)](_0x4f2105=>_0x4f2105['id']));}const _0x3da066=(0x0,lodash_1[_0x5dd815(0x155)])(..._0x312037);_0x4ab1a4={..._0x4ab1a4,'id':{[sequelize_1['Op']['in']]:_0x3da066}};}const _0x44ef72=0x28,_0xa06036=_0x44ef72*(+pageNumber-0x1);_0x4ab1a4={..._0x4ab1a4,'companyId':_0x2d167b};const {count:_0x1eb413,rows:_0x1d2ac8}=await Ticket_1['default'][_0x5dd815(0x170)]({'where':_0x4ab1a4,'include':_0x1235e3,'distinct':!![],'limit':_0x44ef72,'offset':_0xa06036,'order':[['updatedAt',_0x5dd815(0x15a)]],'subQuery':![]}),_0x2abd4e=_0x1eb413>_0xa06036+_0x1d2ac8[_0x5dd815(0x17b)];return{'tickets':_0x1d2ac8,'count':_0x1eb413,'hasMore':_0x2abd4e};};exports[a524_0x361a8a(0x153)]=ListTicketsService;