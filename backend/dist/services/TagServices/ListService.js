const a507_0x57d3ef=a507_0x378d;function a507_0x378d(_0xca89e1,_0x42da4c){const _0x2eb11d=a507_0xafbc();return a507_0x378d=function(_0x40bf68,_0x43b89c){_0x40bf68=_0x40bf68-0x11e;let _0xafbcfe=_0x2eb11d[_0x40bf68];return _0xafbcfe;},a507_0x378d(_0xca89e1,_0x42da4c);}(function(_0x59e62c,_0x48b06f){const _0x1890e7=a507_0x378d,_0x512068=_0x59e62c();while(!![]){try{const _0x1ee4c0=-parseInt(_0x1890e7(0x124))/0x1+-parseInt(_0x1890e7(0x138))/0x2*(-parseInt(_0x1890e7(0x123))/0x3)+parseInt(_0x1890e7(0x12c))/0x4+-parseInt(_0x1890e7(0x126))/0x5+parseInt(_0x1890e7(0x128))/0x6+parseInt(_0x1890e7(0x133))/0x7*(-parseInt(_0x1890e7(0x129))/0x8)+parseInt(_0x1890e7(0x122))/0x9;if(_0x1ee4c0===_0x48b06f)break;else _0x512068['push'](_0x512068['shift']());}catch(_0x102150){_0x512068['push'](_0x512068['shift']());}}}(a507_0xafbc,0xc29f3));const a507_0x43b89c=(function(){let _0x3e293e=!![];return function(_0x45dc16,_0x556b43){const _0x4cf6b9=_0x3e293e?function(){const _0x5778b0=a507_0x378d;if(_0x556b43){const _0x48e2ab=_0x556b43[_0x5778b0(0x137)](_0x45dc16,arguments);return _0x556b43=null,_0x48e2ab;}}:function(){};return _0x3e293e=![],_0x4cf6b9;};}()),a507_0x40bf68=a507_0x43b89c(this,function(){const _0x21401c=a507_0x378d;return a507_0x40bf68[_0x21401c(0x12b)]()[_0x21401c(0x139)](_0x21401c(0x130))[_0x21401c(0x12b)]()['constructor'](a507_0x40bf68)[_0x21401c(0x139)]('(((.+)+)+)+$');});a507_0x40bf68();'use strict';var __importDefault=this&&this[a507_0x57d3ef(0x134)]||function(_0x4ad2dc){const _0x438c72=a507_0x57d3ef;return _0x4ad2dc&&_0x4ad2dc[_0x438c72(0x127)]?_0x4ad2dc:{'default':_0x4ad2dc};};function a507_0xafbc(){const _0x14204e=['256cWEVDM','ASC','toString','1872608MuZTwX','findAndCountAll','count','ticketTags.tagId','(((.+)+)+)+$','length','default','247688ODuHZv','__importDefault','sequelize','../../models/TicketTag','apply','1607518mdUHYH','search','like','../../models/Tag','Tag.id','defineProperty','23888205hnLKXo','3pbFdlx','1539383osHEwz','col','4354035cprUgK','__esModule','2480958ztbLLr'];a507_0xafbc=function(){return _0x14204e;};return a507_0xafbc();}Object[a507_0x57d3ef(0x121)](exports,'__esModule',{'value':!![]});const sequelize_1=require(a507_0x57d3ef(0x135)),Tag_1=__importDefault(require(a507_0x57d3ef(0x11f))),TicketTag_1=__importDefault(require(a507_0x57d3ef(0x136))),ListService=async({companyId:_0x4f0df0,searchParam:_0x22b8bc,pageNumber:pageNumber='1'})=>{const _0xa6cb64=a507_0x57d3ef;let _0x170e9a={};const _0x4ea8ae=0x14,_0x51092b=_0x4ea8ae*(+pageNumber-0x1);_0x22b8bc&&(_0x170e9a={[sequelize_1['Op']['or']]:[{'name':{[sequelize_1['Op'][_0xa6cb64(0x11e)]]:'%'+_0x22b8bc+'%'}},{'color':{[sequelize_1['Op'][_0xa6cb64(0x11e)]]:'%'+_0x22b8bc+'%'}}]});const {count:_0x25f89e,rows:_0x4d28f0}=await Tag_1[_0xa6cb64(0x132)][_0xa6cb64(0x12d)]({'where':{..._0x170e9a,'companyId':_0x4f0df0},'limit':_0x4ea8ae,'offset':_0x51092b,'order':[['name',_0xa6cb64(0x12a)]],'subQuery':![],'include':[{'model':TicketTag_1[_0xa6cb64(0x132)],'as':'ticketTags','attributes':[],'required':![]}],'attributes':['id','name','color',[(0x0,sequelize_1['fn'])(_0xa6cb64(0x12e),(0x0,sequelize_1[_0xa6cb64(0x125)])(_0xa6cb64(0x12f))),'ticketsCount']],'group':[_0xa6cb64(0x120)]}),_0x82585a=_0x25f89e>_0x51092b+_0x4d28f0[_0xa6cb64(0x131)];return{'tags':_0x4d28f0,'count':_0x25f89e,'hasMore':_0x82585a};};exports[a507_0x57d3ef(0x132)]=ListService;