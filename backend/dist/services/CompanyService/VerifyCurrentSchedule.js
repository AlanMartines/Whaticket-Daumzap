const a396_0x48d183=a396_0x3d40;(function(_0x451ce3,_0x30e359){const _0x5776d3=a396_0x3d40,_0x3ac164=_0x451ce3();while(!![]){try{const _0x35960e=-parseInt(_0x5776d3(0x93))/0x1+-parseInt(_0x5776d3(0x88))/0x2+parseInt(_0x5776d3(0x96))/0x3+parseInt(_0x5776d3(0x83))/0x4*(-parseInt(_0x5776d3(0x84))/0x5)+-parseInt(_0x5776d3(0x7f))/0x6+parseInt(_0x5776d3(0x97))/0x7+parseInt(_0x5776d3(0x7e))/0x8;if(_0x35960e===_0x30e359)break;else _0x3ac164['push'](_0x3ac164['shift']());}catch(_0x4038d7){_0x3ac164['push'](_0x3ac164['shift']());}}}(a396_0x105c,0x704b3));function a396_0x3d40(_0x4f822c,_0x2ccaa2){const _0x44d503=a396_0x105c();return a396_0x3d40=function(_0x1962d2,_0x48f8cc){_0x1962d2=_0x1962d2-0x79;let _0x105c02=_0x44d503[_0x1962d2];return _0x105c02;},a396_0x3d40(_0x4f822c,_0x2ccaa2);}const a396_0x48f8cc=(function(){let _0x201f8d=!![];return function(_0x3260f4,_0xc671b8){const _0x37d085=_0x201f8d?function(){const _0x453159=a396_0x3d40;if(_0xc671b8){const _0x52930a=_0xc671b8[_0x453159(0x92)](_0x3260f4,arguments);return _0xc671b8=null,_0x52930a;}}:function(){};return _0x201f8d=![],_0x37d085;};}()),a396_0x1962d2=a396_0x48f8cc(this,function(){const _0x27182f=a396_0x3d40;return a396_0x1962d2['toString']()['search'](_0x27182f(0x8a))[_0x27182f(0x94)]()[_0x27182f(0x86)](a396_0x1962d2)[_0x27182f(0x7c)](_0x27182f(0x8a));});a396_0x1962d2();'use strict';var __importDefault=this&&this[a396_0x48d183(0x7a)]||function(_0x3e07f7){return _0x3e07f7&&_0x3e07f7['__esModule']?_0x3e07f7:{'default':_0x3e07f7};};Object[a396_0x48d183(0x90)](exports,a396_0x48d183(0x91),{'value':!![]});const Company_1=__importDefault(require(a396_0x48d183(0x79))),moment_1=__importDefault(require('moment')),VerifyCurrentSchedule=async _0x2be3f8=>{const _0x337f9c=a396_0x48d183,_0x3dc07d=new Date()[_0x337f9c(0x8e)]('en-US',{'weekday':_0x337f9c(0x8f)})[_0x337f9c(0x82)]()[_0x337f9c(0x89)](),_0x5846f6=await Company_1['default']['findOne']({'where':{'id':_0x2be3f8},'attributes':['id',_0x337f9c(0x87)],'raw':!![]});if(!_0x5846f6)throw new Error(_0x337f9c(0x85));const _0x2bee2a=_0x5846f6[_0x337f9c(0x87)]['find'](_0x1e4743=>_0x1e4743[_0x337f9c(0x8b)][_0x337f9c(0x82)]()['toLowerCase']()===_0x3dc07d);if(!_0x2bee2a||!_0x2bee2a[_0x337f9c(0x8c)]||!_0x2bee2a[_0x337f9c(0x7b)])return;const _0x5146e=(0x0,moment_1[_0x337f9c(0x95)])(),_0x1db2b5=(0x0,moment_1[_0x337f9c(0x95)])(_0x2bee2a[_0x337f9c(0x8c)],_0x337f9c(0x7d)),_0x7f12bd=(0x0,moment_1['default'])(_0x2bee2a[_0x337f9c(0x7b)],'hh:mm');let _0x39f69c=_0x1db2b5[_0x337f9c(0x8d)](_0x5146e)&&_0x5146e[_0x337f9c(0x8d)](_0x7f12bd);if(_0x39f69c&&_0x2bee2a[_0x337f9c(0x80)]&&_0x2bee2a[_0x337f9c(0x81)]){const _0x7e78e2=(0x0,moment_1[_0x337f9c(0x95)])(_0x2bee2a[_0x337f9c(0x80)],_0x337f9c(0x7d)),_0x29dfe0=(0x0,moment_1[_0x337f9c(0x95)])(_0x2bee2a[_0x337f9c(0x81)],_0x337f9c(0x7d));_0x39f69c=!(_0x7e78e2['isBefore'](_0x5146e)&&_0x5146e[_0x337f9c(0x8d)](_0x29dfe0));}const _0x521cfb={'id':_0x5846f6['id'],'currentWeekday':_0x3dc07d,'currentSchedule':_0x2bee2a,'startTime':_0x2bee2a['startTime'],'endTime':_0x2bee2a['endTime'],'inActivity':_0x39f69c};return _0x521cfb;};function a396_0x105c(){const _0x57b149=['Company\x20not\x20found','constructor','schedules','139202tXBNoP','toLowerCase','(((.+)+)+)+$','weekdayEn','startTime','isBefore','toLocaleDateString','long','defineProperty','__esModule','apply','462878rIIABM','toString','default','2232084UYaHor','5801488MmSFix','../../models/Company','__importDefault','endTime','search','hh:mm','246240ZFgcua','1222830fMePZQ','startLunchTime','endLunchTime','trim','92pHttDi','88555skNWzP'];a396_0x105c=function(){return _0x57b149;};return a396_0x105c();}exports[a396_0x48d183(0x95)]=VerifyCurrentSchedule;