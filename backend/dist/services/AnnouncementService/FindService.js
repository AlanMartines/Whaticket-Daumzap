const a352_0x36a4d6=a352_0x26c6;(function(_0x1b1d99,_0x421cc4){const _0x5f5c44=a352_0x26c6,_0x291d83=_0x1b1d99();while(!![]){try{const _0x103ca8=-parseInt(_0x5f5c44(0x1f4))/0x1+parseInt(_0x5f5c44(0x1fc))/0x2+-parseInt(_0x5f5c44(0x1ed))/0x3+parseInt(_0x5f5c44(0x1f1))/0x4*(-parseInt(_0x5f5c44(0x1f6))/0x5)+parseInt(_0x5f5c44(0x1f0))/0x6+-parseInt(_0x5f5c44(0x1f7))/0x7+parseInt(_0x5f5c44(0x1ec))/0x8;if(_0x103ca8===_0x421cc4)break;else _0x291d83['push'](_0x291d83['shift']());}catch(_0x1884f3){_0x291d83['push'](_0x291d83['shift']());}}}(a352_0x1c98,0xe16d4));function a352_0x26c6(_0x1c2a45,_0x1c5bdf){const _0xa1c601=a352_0x1c98();return a352_0x26c6=function(_0x29ee69,_0x3b6e5a){_0x29ee69=_0x29ee69-0x1ec;let _0x1c9831=_0xa1c601[_0x29ee69];return _0x1c9831;},a352_0x26c6(_0x1c2a45,_0x1c5bdf);}function a352_0x1c98(){const _0xa62d80=['search','28867088PduszD','2035524zIIJTG','findAll','toString','9725310ArgVFm','4tTRSON','__importDefault','company','1274497gSNtjQ','__esModule','3864445DTvKuJ','11913804LaRnOJ','defineProperty','(((.+)+)+)+$','createdAt','../../models/Company','243886GRuDTX','apply'];a352_0x1c98=function(){return _0xa62d80;};return a352_0x1c98();}const a352_0x3b6e5a=(function(){let _0x235fee=!![];return function(_0x31dcba,_0x4fdc0d){const _0x2367c2=_0x235fee?function(){const _0x1b9f68=a352_0x26c6;if(_0x4fdc0d){const _0x15d61f=_0x4fdc0d[_0x1b9f68(0x1fd)](_0x31dcba,arguments);return _0x4fdc0d=null,_0x15d61f;}}:function(){};return _0x235fee=![],_0x2367c2;};}()),a352_0x29ee69=a352_0x3b6e5a(this,function(){const _0x4231c4=a352_0x26c6;return a352_0x29ee69[_0x4231c4(0x1ef)]()[_0x4231c4(0x1fe)](_0x4231c4(0x1f9))[_0x4231c4(0x1ef)]()['constructor'](a352_0x29ee69)[_0x4231c4(0x1fe)]('(((.+)+)+)+$');});a352_0x29ee69();'use strict';var __importDefault=this&&this[a352_0x36a4d6(0x1f2)]||function(_0x2acd46){const _0x56090f=a352_0x36a4d6;return _0x2acd46&&_0x2acd46[_0x56090f(0x1f5)]?_0x2acd46:{'default':_0x2acd46};};Object[a352_0x36a4d6(0x1f8)](exports,a352_0x36a4d6(0x1f5),{'value':!![]});const Announcement_1=__importDefault(require('../../models/Announcement')),Company_1=__importDefault(require(a352_0x36a4d6(0x1fb))),FindService=async({companyId:_0x4b9e66})=>{const _0x4422d9=a352_0x36a4d6,_0x7e5924=await Announcement_1['default'][_0x4422d9(0x1ee)]({'where':{'companyId':_0x4b9e66},'include':[{'model':Company_1['default'],'as':_0x4422d9(0x1f3),'attributes':['id','name']}],'order':[[_0x4422d9(0x1fa),'DESC']]});return _0x7e5924;};exports['default']=FindService;