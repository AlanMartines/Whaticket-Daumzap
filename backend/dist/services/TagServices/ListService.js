const a507_0x3169a6=a507_0x43f9;(function(_0x4f4f19,_0x51d40d){const _0x4898e2=a507_0x43f9,_0x838e60=_0x4f4f19();while(!![]){try{const _0x116d9e=parseInt(_0x4898e2(0x12a))/0x1+-parseInt(_0x4898e2(0x12d))/0x2*(-parseInt(_0x4898e2(0x12f))/0x3)+-parseInt(_0x4898e2(0x126))/0x4*(-parseInt(_0x4898e2(0x129))/0x5)+parseInt(_0x4898e2(0x12e))/0x6+parseInt(_0x4898e2(0x122))/0x7+-parseInt(_0x4898e2(0x136))/0x8+-parseInt(_0x4898e2(0x137))/0x9;if(_0x116d9e===_0x51d40d)break;else _0x838e60['push'](_0x838e60['shift']());}catch(_0x2a2925){_0x838e60['push'](_0x838e60['shift']());}}}(a507_0x3878,0x52bf8));function a507_0x43f9(_0x35dfa0,_0x3da0d0){const _0xb8e830=a507_0x3878();return a507_0x43f9=function(_0x70037c,_0x2ebff5){_0x70037c=_0x70037c-0x121;let _0x3878fa=_0xb8e830[_0x70037c];return _0x3878fa;},a507_0x43f9(_0x35dfa0,_0x3da0d0);}const a507_0x2ebff5=(function(){let _0x89dee1=!![];return function(_0x51209f,_0x54283b){const _0x3d2784=_0x89dee1?function(){const _0x15439f=a507_0x43f9;if(_0x54283b){const _0x3a0198=_0x54283b[_0x15439f(0x13b)](_0x51209f,arguments);return _0x54283b=null,_0x3a0198;}}:function(){};return _0x89dee1=![],_0x3d2784;};}()),a507_0x70037c=a507_0x2ebff5(this,function(){const _0x46b676=a507_0x43f9;return a507_0x70037c[_0x46b676(0x131)]()[_0x46b676(0x123)](_0x46b676(0x135))[_0x46b676(0x131)]()[_0x46b676(0x133)](a507_0x70037c)[_0x46b676(0x123)]('(((.+)+)+)+$');});a507_0x70037c();'use strict';var __importDefault=this&&this[a507_0x3169a6(0x125)]||function(_0x44dd8c){const _0x46e848=a507_0x3169a6;return _0x44dd8c&&_0x44dd8c[_0x46e848(0x134)]?_0x44dd8c:{'default':_0x44dd8c};};Object[a507_0x3169a6(0x13a)](exports,a507_0x3169a6(0x134),{'value':!![]});const sequelize_1=require(a507_0x3169a6(0x139)),Tag_1=__importDefault(require(a507_0x3169a6(0x132))),TicketTag_1=__importDefault(require(a507_0x3169a6(0x124))),ListService=async({companyId:_0x1c91ba,searchParam:_0x263321,pageNumber:pageNumber='1'})=>{const _0x2c2e2a=a507_0x3169a6;let _0x5d973b={};const _0x41e47a=0x14,_0x31fa9d=_0x41e47a*(+pageNumber-0x1);_0x263321&&(_0x5d973b={[sequelize_1['Op']['or']]:[{'name':{[sequelize_1['Op'][_0x2c2e2a(0x127)]]:'%'+_0x263321+'%'}},{'color':{[sequelize_1['Op'][_0x2c2e2a(0x127)]]:'%'+_0x263321+'%'}}]});const {count:_0x2ee5e5,rows:_0x547af1}=await Tag_1['default']['findAndCountAll']({'where':{..._0x5d973b,'companyId':_0x1c91ba},'limit':_0x41e47a,'offset':_0x31fa9d,'order':[['name',_0x2c2e2a(0x128)]],'subQuery':![],'include':[{'model':TicketTag_1[_0x2c2e2a(0x12c)],'as':_0x2c2e2a(0x12b),'attributes':[],'required':![]}],'attributes':['id',_0x2c2e2a(0x13c),'color',[(0x0,sequelize_1['fn'])('count',(0x0,sequelize_1['col'])(_0x2c2e2a(0x121))),_0x2c2e2a(0x130)]],'group':[_0x2c2e2a(0x138)]}),_0x5dfb41=_0x2ee5e5>_0x31fa9d+_0x547af1[_0x2c2e2a(0x13d)];return{'tags':_0x547af1,'count':_0x2ee5e5,'hasMore':_0x5dfb41};};exports[a507_0x3169a6(0x12c)]=ListService;function a507_0x3878(){const _0x253730=['ASC','160ZcJPph','459148HMNlmV','ticketTags','default','457286aKJLWF','3456990GSctSF','3JqzgoJ','ticketsCount','toString','../../models/Tag','constructor','__esModule','(((.+)+)+)+$','4548776MCHxww','7709445emXblc','Tag.id','sequelize','defineProperty','apply','name','length','ticketTags.tagId','2231418eZhFsM','search','../../models/TicketTag','__importDefault','22676PGgMFb','like'];a507_0x3878=function(){return _0x253730;};return a507_0x3878();}