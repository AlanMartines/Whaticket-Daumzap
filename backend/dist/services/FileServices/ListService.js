const a427_0x3e4ea7=a427_0x489d;function a427_0x13ac(){const _0x1f3d40=['defineProperty','3573746kAaYMf','default','findAndCountAll','search','toString','apply','ASC','1627011pVYAWH','like','3623990pCHcNL','../../models/Files','name','(((.+)+)+)+$','length','11773370aZbmXC','sequelize','__esModule','__importDefault','636936SRaOLz','3422184FGqQGU','1412915lhHOrJ'];a427_0x13ac=function(){return _0x1f3d40;};return a427_0x13ac();}(function(_0x59b523,_0x569843){const _0x3058f7=a427_0x489d,_0x56e244=_0x59b523();while(!![]){try{const _0x35a14d=parseInt(_0x3058f7(0x1ce))/0x1+parseInt(_0x3058f7(0x1d0))/0x2+-parseInt(_0x3058f7(0x1c1))/0x3+-parseInt(_0x3058f7(0x1cd))/0x4+parseInt(_0x3058f7(0x1c3))/0x5+parseInt(_0x3058f7(0x1cc))/0x6+-parseInt(_0x3058f7(0x1c8))/0x7;if(_0x35a14d===_0x569843)break;else _0x56e244['push'](_0x56e244['shift']());}catch(_0x3c252b){_0x56e244['push'](_0x56e244['shift']());}}}(a427_0x13ac,0xe82a5));const a427_0x3bf415=(function(){let _0x30c712=!![];return function(_0x33538e,_0x4689c3){const _0x1795bb=_0x30c712?function(){const _0x56e692=a427_0x489d;if(_0x4689c3){const _0x4e5495=_0x4689c3[_0x56e692(0x1bf)](_0x33538e,arguments);return _0x4689c3=null,_0x4e5495;}}:function(){};return _0x30c712=![],_0x1795bb;};}()),a427_0x5c4ccf=a427_0x3bf415(this,function(){const _0x31b01b=a427_0x489d;return a427_0x5c4ccf['toString']()[_0x31b01b(0x1d3)](_0x31b01b(0x1c6))[_0x31b01b(0x1be)]()['constructor'](a427_0x5c4ccf)[_0x31b01b(0x1d3)](_0x31b01b(0x1c6));});function a427_0x489d(_0x143213,_0xc65cb5){const _0x1c0bd9=a427_0x13ac();return a427_0x489d=function(_0x5c4ccf,_0x3bf415){_0x5c4ccf=_0x5c4ccf-0x1be;let _0x13ac12=_0x1c0bd9[_0x5c4ccf];return _0x13ac12;},a427_0x489d(_0x143213,_0xc65cb5);}a427_0x5c4ccf();'use strict';var __importDefault=this&&this[a427_0x3e4ea7(0x1cb)]||function(_0x452b70){const _0x324f73=a427_0x3e4ea7;return _0x452b70&&_0x452b70[_0x324f73(0x1ca)]?_0x452b70:{'default':_0x452b70};};Object[a427_0x3e4ea7(0x1cf)](exports,a427_0x3e4ea7(0x1ca),{'value':!![]});const sequelize_1=require(a427_0x3e4ea7(0x1c9)),Files_1=__importDefault(require(a427_0x3e4ea7(0x1c4))),ListService=async({searchParam:_0x3703b9,pageNumber:pageNumber='1',companyId:_0x2e1f2a})=>{const _0x1d5b13=a427_0x3e4ea7;let _0x48f276={};const _0x3c6418=0x14,_0x30610f=_0x3c6418*(+pageNumber-0x1);_0x3703b9&&(_0x48f276={[sequelize_1['Op']['or']]:[{'name':{[sequelize_1['Op'][_0x1d5b13(0x1c2)]]:'%'+_0x3703b9+'%'}}]});const {count:_0x4bc8a3,rows:_0x4d8247}=await Files_1[_0x1d5b13(0x1d1)][_0x1d5b13(0x1d2)]({'where':{'companyId':_0x2e1f2a,..._0x48f276},'limit':_0x3c6418,'offset':_0x30610f,'order':[[_0x1d5b13(0x1c5),_0x1d5b13(0x1c0)]]}),_0xe20269=_0x4bc8a3>_0x30610f+_0x4d8247[_0x1d5b13(0x1c7)];return{'files':_0x4d8247,'count':_0x4bc8a3,'hasMore':_0xe20269};};exports[a427_0x3e4ea7(0x1d1)]=ListService;