const a537_0xe39cc9=a537_0x2774;(function(_0x4d821a,_0x49ae5c){const _0x2a331f=a537_0x2774,_0xbef5bd=_0x4d821a();while(!![]){try{const _0x3a164b=-parseInt(_0x2a331f(0x1f4))/0x1+parseInt(_0x2a331f(0x1fe))/0x2*(parseInt(_0x2a331f(0x205))/0x3)+parseInt(_0x2a331f(0x206))/0x4+parseInt(_0x2a331f(0x1fb))/0x5*(-parseInt(_0x2a331f(0x1f2))/0x6)+parseInt(_0x2a331f(0x1f0))/0x7*(-parseInt(_0x2a331f(0x207))/0x8)+-parseInt(_0x2a331f(0x1f5))/0x9+parseInt(_0x2a331f(0x1f9))/0xa;if(_0x3a164b===_0x49ae5c)break;else _0xbef5bd['push'](_0xbef5bd['shift']());}catch(_0x5376a3){_0xbef5bd['push'](_0xbef5bd['shift']());}}}(a537_0x2019,0xd1a59));const a537_0x144022=(function(){let _0x263371=!![];return function(_0x8ea48f,_0x68fca1){const _0xa48028=_0x263371?function(){const _0x59f3fd=a537_0x2774;if(_0x68fca1){const _0x2844cf=_0x68fca1[_0x59f3fd(0x1ff)](_0x8ea48f,arguments);return _0x68fca1=null,_0x2844cf;}}:function(){};return _0x263371=![],_0xa48028;};}()),a537_0x2f61ff=a537_0x144022(this,function(){const _0x17c700=a537_0x2774;return a537_0x2f61ff[_0x17c700(0x1f7)]()['search'](_0x17c700(0x209))[_0x17c700(0x1f7)]()[_0x17c700(0x202)](a537_0x2f61ff)[_0x17c700(0x20b)](_0x17c700(0x209));});a537_0x2f61ff();function a537_0x2019(){const _0x3f8c79=['../../models/Queue','74eivXoG','apply','queues','../../models/User','constructor','findAll','ASC','35823dFwBxb','2585176jWbySD','29672MrzdAv','../../errors/AppError','(((.+)+)+)+$','email','search','588lxqFEO','defineProperty','1383852vuIezv','__importDefault','256091VuXXgI','10429614TmfppR','length','toString','default','21890210fQNQVF','__esModule','15KmdVFC','ERR_NO_USER_FOUND'];a537_0x2019=function(){return _0x3f8c79;};return a537_0x2019();}'use strict';var __importDefault=this&&this[a537_0xe39cc9(0x1f3)]||function(_0x427f62){const _0x17715a=a537_0xe39cc9;return _0x427f62&&_0x427f62[_0x17715a(0x1fa)]?_0x427f62:{'default':_0x427f62};};Object[a537_0xe39cc9(0x1f1)](exports,'__esModule',{'value':!![]});const User_1=__importDefault(require(a537_0xe39cc9(0x201))),AppError_1=__importDefault(require(a537_0xe39cc9(0x208))),Queue_1=__importDefault(require(a537_0xe39cc9(0x1fd))),SimpleListService=async({companyId:_0x3e4889})=>{const _0x1d746f=a537_0xe39cc9;if(!_0x3e4889)throw new AppError_1[(_0x1d746f(0x1f8))]('ERR_INVALID_COMPANY_ID',0x190);const _0x293e67=await User_1[_0x1d746f(0x1f8)][_0x1d746f(0x203)]({'where':{'companyId':_0x3e4889},'attributes':['name','id',_0x1d746f(0x20a)],'include':[{'model':Queue_1[_0x1d746f(0x1f8)],'as':_0x1d746f(0x200)}],'order':[['id',_0x1d746f(0x204)]]});if(_0x293e67[_0x1d746f(0x1f6)]===0x0)throw new AppError_1[(_0x1d746f(0x1f8))](_0x1d746f(0x1fc),0x194);return _0x293e67;};function a537_0x2774(_0x41c57a,_0xb70b4d){const _0x1b4d23=a537_0x2019();return a537_0x2774=function(_0x2f61ff,_0x144022){_0x2f61ff=_0x2f61ff-0x1f0;let _0x201925=_0x1b4d23[_0x2f61ff];return _0x201925;},a537_0x2774(_0x41c57a,_0xb70b4d);}exports[a537_0xe39cc9(0x1f8)]=SimpleListService;