const a428_0x2fb88e=a428_0x5904;(function(_0x4c0db7,_0x1bd995){const _0x176fc8=a428_0x5904,_0x40a944=_0x4c0db7();while(!![]){try{const _0x2b4c5c=-parseInt(_0x176fc8(0x125))/0x1+parseInt(_0x176fc8(0x128))/0x2*(-parseInt(_0x176fc8(0x129))/0x3)+-parseInt(_0x176fc8(0x12b))/0x4*(-parseInt(_0x176fc8(0x11e))/0x5)+parseInt(_0x176fc8(0x12c))/0x6*(-parseInt(_0x176fc8(0x130))/0x7)+parseInt(_0x176fc8(0x11b))/0x8+parseInt(_0x176fc8(0x12f))/0x9*(parseInt(_0x176fc8(0x127))/0xa)+parseInt(_0x176fc8(0x11f))/0xb;if(_0x2b4c5c===_0x1bd995)break;else _0x40a944['push'](_0x40a944['shift']());}catch(_0x1d22b6){_0x40a944['push'](_0x40a944['shift']());}}}(a428_0x7ef8,0xf40ad));const a428_0x2fec2d=(function(){let _0x5b66b3=!![];return function(_0x32afb1,_0x407383){const _0x2ccf9b=_0x5b66b3?function(){if(_0x407383){const _0x46e2c5=_0x407383['apply'](_0x32afb1,arguments);return _0x407383=null,_0x46e2c5;}}:function(){};return _0x5b66b3=![],_0x2ccf9b;};}()),a428_0x559012=a428_0x2fec2d(this,function(){const _0x435883=a428_0x5904;return a428_0x559012[_0x435883(0x11c)]()['search'](_0x435883(0x11d))[_0x435883(0x11c)]()[_0x435883(0x120)](a428_0x559012)[_0x435883(0x122)](_0x435883(0x11d));});a428_0x559012();function a428_0x7ef8(){const _0x201d56=['default','ASC','416996FrADkm','findOne','1622710uqBrOT','70bofcFV','67395jlSKUm','options','8QFPixq','6qLneah','../../errors/AppError','ERR_NO_FILE_FOUND','9DRDztI','4171097pjVIzl','../../models/Files','7713760LpHXiI','toString','(((.+)+)+)+$','2543770smZzJC','7202140GjWKNK','constructor','__esModule','search'];a428_0x7ef8=function(){return _0x201d56;};return a428_0x7ef8();}'use strict';function a428_0x5904(_0x3fab71,_0x14d91a){const _0x577f47=a428_0x7ef8();return a428_0x5904=function(_0x559012,_0x2fec2d){_0x559012=_0x559012-0x11b;let _0x7ef8a0=_0x577f47[_0x559012];return _0x7ef8a0;},a428_0x5904(_0x3fab71,_0x14d91a);}var __importDefault=this&&this['__importDefault']||function(_0x354261){const _0x1ee188=a428_0x5904;return _0x354261&&_0x354261[_0x1ee188(0x121)]?_0x354261:{'default':_0x354261};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const Files_1=__importDefault(require(a428_0x2fb88e(0x131))),AppError_1=__importDefault(require(a428_0x2fb88e(0x12d))),FilesOptions_1=__importDefault(require('../../models/FilesOptions')),ShowFileService=async(_0x178b8c,_0x1d7d4f)=>{const _0x4e5ef6=a428_0x2fb88e,_0xef0bb1=await Files_1[_0x4e5ef6(0x123)][_0x4e5ef6(0x126)]({'where':{'id':_0x178b8c,'companyId':_0x1d7d4f},'include':[_0x4e5ef6(0x12a),{'model':FilesOptions_1[_0x4e5ef6(0x123)],'as':_0x4e5ef6(0x12a),'order':[['id',_0x4e5ef6(0x124)]]}]});if(!_0xef0bb1)throw new AppError_1[(_0x4e5ef6(0x123))](_0x4e5ef6(0x12e),0x194);return _0xef0bb1;};exports[a428_0x2fb88e(0x123)]=ShowFileService;