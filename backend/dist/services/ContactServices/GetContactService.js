const a416_0x5734d5=a416_0x2621;(function(_0x4a5bdd,_0x2289ac){const _0x56ad6e=a416_0x2621,_0x5ec697=_0x4a5bdd();while(!![]){try{const _0x2fef50=-parseInt(_0x56ad6e(0x8e))/0x1+parseInt(_0x56ad6e(0x8c))/0x2*(parseInt(_0x56ad6e(0x95))/0x3)+parseInt(_0x56ad6e(0x8d))/0x4+parseInt(_0x56ad6e(0x97))/0x5*(-parseInt(_0x56ad6e(0xa2))/0x6)+parseInt(_0x56ad6e(0x9b))/0x7+parseInt(_0x56ad6e(0x92))/0x8+parseInt(_0x56ad6e(0x98))/0x9*(-parseInt(_0x56ad6e(0xa1))/0xa);if(_0x2fef50===_0x2289ac)break;else _0x5ec697['push'](_0x5ec697['shift']());}catch(_0x409bc8){_0x5ec697['push'](_0x5ec697['shift']());}}}(a416_0x352d,0x86dd4));function a416_0x352d(){const _0x28a837=['25NpNVte','144bJfYUw','../../errors/AppError','__importDefault','2552837FIsidd','apply','constructor','(((.+)+)+)+$','__esModule','findOne','101250QyYuWc','848742YlFdnr','2TuLIlo','2875120skJxWF','304339DYkFej','./CreateContactService','default','search','2701664fxOwfG','toString','CONTACT_NOT_FIND','914547aiavrJ','../../models/Contact'];a416_0x352d=function(){return _0x28a837;};return a416_0x352d();}const a416_0x51e9a1=(function(){let _0x17de42=!![];return function(_0x51144f,_0x15702a){const _0x38ab60=_0x17de42?function(){const _0x234052=a416_0x2621;if(_0x15702a){const _0xfa48e7=_0x15702a[_0x234052(0x9c)](_0x51144f,arguments);return _0x15702a=null,_0xfa48e7;}}:function(){};return _0x17de42=![],_0x38ab60;};}()),a416_0x461c2e=a416_0x51e9a1(this,function(){const _0x5afac7=a416_0x2621;return a416_0x461c2e['toString']()['search'](_0x5afac7(0x9e))[_0x5afac7(0x93)]()[_0x5afac7(0x9d)](a416_0x461c2e)[_0x5afac7(0x91)](_0x5afac7(0x9e));});a416_0x461c2e();'use strict';var __importDefault=this&&this[a416_0x5734d5(0x9a)]||function(_0xdbc308){const _0x3abf3f=a416_0x5734d5;return _0xdbc308&&_0xdbc308[_0x3abf3f(0x9f)]?_0xdbc308:{'default':_0xdbc308};};Object['defineProperty'](exports,a416_0x5734d5(0x9f),{'value':!![]});function a416_0x2621(_0x39c483,_0x57934d){const _0x1e8560=a416_0x352d();return a416_0x2621=function(_0x461c2e,_0x51e9a1){_0x461c2e=_0x461c2e-0x8c;let _0x352d1b=_0x1e8560[_0x461c2e];return _0x352d1b;},a416_0x2621(_0x39c483,_0x57934d);}const AppError_1=__importDefault(require(a416_0x5734d5(0x99))),Contact_1=__importDefault(require(a416_0x5734d5(0x96))),CreateContactService_1=__importDefault(require(a416_0x5734d5(0x8f))),GetContactService=async({name:_0x3dfcec,number:_0x55b1a4,companyId:_0xfe957c})=>{const _0x5a020d=a416_0x5734d5,_0x137adf=await Contact_1[_0x5a020d(0x90)][_0x5a020d(0xa0)]({'where':{'number':_0x55b1a4,'companyId':_0xfe957c}});if(!_0x137adf){const _0x502eb9=await(0x0,CreateContactService_1['default'])({'name':_0x3dfcec,'number':_0x55b1a4,'companyId':_0xfe957c});if(_0x502eb9==null)throw new AppError_1['default'](_0x5a020d(0x94));else return _0x502eb9;}return _0x137adf;};exports[a416_0x5734d5(0x90)]=GetContactService;