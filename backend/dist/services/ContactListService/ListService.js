function a409_0x48a6(){const _0x54543c=['contacts.id','756yfkgVY','ContactList.name','isEmpty','134124tuHzYI','6yBSXrX','default','contactsCount','946ioKCgK','toString','2293046UfVhTU','1013395loIVtQ','ASC','(((.+)+)+)+$','../../models/ContactList','constructor','trim','lodash','3644eZwaOT','length','defineProperty','search','582784ImVBvk','count','where','61176sAsYkU','LOWER','ContactList.id','../../models/ContactListItem','50TCTqJA','name','565065EoViPJ','4KlGGUR'];a409_0x48a6=function(){return _0x54543c;};return a409_0x48a6();}const a409_0x2746aa=a409_0x361e;(function(_0x3f1e4a,_0x4ce532){const _0x512387=a409_0x361e,_0x2bbd75=_0x3f1e4a();while(!![]){try{const _0x365da1=-parseInt(_0x512387(0x17c))/0x1*(parseInt(_0x512387(0x175))/0x2)+parseInt(_0x512387(0x17e))/0x3*(-parseInt(_0x512387(0x18f))/0x4)+-parseInt(_0x512387(0x188))/0x5*(-parseInt(_0x512387(0x182))/0x6)+-parseInt(_0x512387(0x187))/0x7+parseInt(_0x512387(0x172))/0x8+-parseInt(_0x512387(0x17b))/0x9*(parseInt(_0x512387(0x179))/0xa)+parseInt(_0x512387(0x185))/0xb*(parseInt(_0x512387(0x181))/0xc);if(_0x365da1===_0x4ce532)break;else _0x2bbd75['push'](_0x2bbd75['shift']());}catch(_0x478cfc){_0x2bbd75['push'](_0x2bbd75['shift']());}}}(a409_0x48a6,0x3b67a));const a409_0x4e5669=(function(){let _0x4769f2=!![];return function(_0x556d5d,_0x399fa0){const _0x4ad1d5=_0x4769f2?function(){if(_0x399fa0){const _0x2865c7=_0x399fa0['apply'](_0x556d5d,arguments);return _0x399fa0=null,_0x2865c7;}}:function(){};return _0x4769f2=![],_0x4ad1d5;};}()),a409_0x3adc8e=a409_0x4e5669(this,function(){const _0x579cb2=a409_0x361e;return a409_0x3adc8e[_0x579cb2(0x186)]()['search'](_0x579cb2(0x18a))[_0x579cb2(0x186)]()[_0x579cb2(0x18c)](a409_0x3adc8e)[_0x579cb2(0x171)]('(((.+)+)+)+$');});a409_0x3adc8e();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x5a71ea){return _0x5a71ea&&_0x5a71ea['__esModule']?_0x5a71ea:{'default':_0x5a71ea};};Object[a409_0x2746aa(0x170)](exports,'__esModule',{'value':!![]});const sequelize_1=require('sequelize'),ContactList_1=__importDefault(require(a409_0x2746aa(0x18b))),ContactListItem_1=__importDefault(require(a409_0x2746aa(0x178))),lodash_1=require(a409_0x2746aa(0x18e)),ListService=async({searchParam:searchParam='',pageNumber:pageNumber='1',companyId:_0x363bf8})=>{const _0x2c1ae9=a409_0x2746aa;let _0x430e14={'companyId':_0x363bf8};!(0x0,lodash_1[_0x2c1ae9(0x180)])(searchParam)&&(_0x430e14={..._0x430e14,[sequelize_1['Op']['or']]:[{'name':(0x0,sequelize_1[_0x2c1ae9(0x174)])((0x0,sequelize_1['fn'])(_0x2c1ae9(0x176),(0x0,sequelize_1['col'])(_0x2c1ae9(0x17f))),'LIKE','%'+searchParam['toLowerCase']()[_0x2c1ae9(0x18d)]()+'%')}]});const _0x5d91cf=0x14,_0x12b116=_0x5d91cf*(+pageNumber-0x1),{count:_0x5b5800,rows:_0x51bb6d}=await ContactList_1[_0x2c1ae9(0x183)]['findAndCountAll']({'where':_0x430e14,'limit':_0x5d91cf,'offset':_0x12b116,'order':[[_0x2c1ae9(0x17a),_0x2c1ae9(0x189)]],'subQuery':![],'include':[{'model':ContactListItem_1[_0x2c1ae9(0x183)],'as':'contacts','attributes':[],'required':![]}],'attributes':['id',_0x2c1ae9(0x17a),[(0x0,sequelize_1['fn'])(_0x2c1ae9(0x173),(0x0,sequelize_1['col'])(_0x2c1ae9(0x17d))),_0x2c1ae9(0x184)]],'group':[_0x2c1ae9(0x177)]}),_0xed323e=_0x5b5800>_0x12b116+_0x51bb6d[_0x2c1ae9(0x16f)];return{'records':_0x51bb6d,'count':_0x5b5800,'hasMore':_0xed323e};};function a409_0x361e(_0x1ad762,_0x5725b4){const _0x78389d=a409_0x48a6();return a409_0x361e=function(_0x3adc8e,_0x4e5669){_0x3adc8e=_0x3adc8e-0x16f;let _0x48a6b7=_0x78389d[_0x3adc8e];return _0x48a6b7;},a409_0x361e(_0x1ad762,_0x5725b4);}exports[a409_0x2746aa(0x183)]=ListService;