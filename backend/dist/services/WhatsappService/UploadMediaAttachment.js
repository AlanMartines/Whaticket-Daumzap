const a568_0x45c97d=a568_0x2084;function a568_0x2084(_0x584350,_0x9ea248){const _0x5b1de1=a568_0x320d();return a568_0x2084=function(_0x23b25a,_0xe1963a){_0x23b25a=_0x23b25a-0x112;let _0x320dd5=_0x5b1de1[_0x23b25a];return _0x320dd5;},a568_0x2084(_0x584350,_0x9ea248);}function a568_0x320d(){const _0xdc7347=['23205Uipigy','Arquivo\x20adicionado!','lodash','params','1000nEbhwq','path','__esModule','Arquivo\x20excluído','138787ouiNwk','constructor','save','unlinkSync','head','1133995bJXERx','296151nmXVJi','12hzFPue','search','__importDefault','defineProperty','apply','files','2lAKMME','message','../../errors/AppError','findByPk','greetingMediaAttachment','public','deleteMedia','toString','8280935epmeaT','1138756lMzXJX','resolve','(((.+)+)+)+$','default','mediaUpload','2016skbaYL','send','../../models/Whatsapp','2860fVmgch','6gteAUS','3BGRfGT'];a568_0x320d=function(){return _0xdc7347;};return a568_0x320d();}(function(_0x355edf,_0x520e5b){const _0x3127d6=a568_0x2084,_0x4fb46f=_0x355edf();while(!![]){try{const _0x5d6c60=-parseInt(_0x3127d6(0x12d))/0x1*(-parseInt(_0x3127d6(0x134))/0x2)+-parseInt(_0x3127d6(0x11e))/0x3*(-parseInt(_0x3127d6(0x114))/0x4)+parseInt(_0x3127d6(0x12c))/0x5*(-parseInt(_0x3127d6(0x11d))/0x6)+-parseInt(_0x3127d6(0x11f))/0x7*(parseInt(_0x3127d6(0x123))/0x8)+-parseInt(_0x3127d6(0x119))/0x9*(parseInt(_0x3127d6(0x11c))/0xa)+-parseInt(_0x3127d6(0x127))/0xb+-parseInt(_0x3127d6(0x12e))/0xc*(-parseInt(_0x3127d6(0x113))/0xd);if(_0x5d6c60===_0x520e5b)break;else _0x4fb46f['push'](_0x4fb46f['shift']());}catch(_0x1e5a1c){_0x4fb46f['push'](_0x4fb46f['shift']());}}}(a568_0x320d,0x7a10c));const a568_0xe1963a=(function(){let _0x4b7cfc=!![];return function(_0x1173ae,_0x2810b2){const _0x49ff7a=_0x4b7cfc?function(){const _0x9f0429=a568_0x2084;if(_0x2810b2){const _0x21cbb2=_0x2810b2[_0x9f0429(0x132)](_0x1173ae,arguments);return _0x2810b2=null,_0x21cbb2;}}:function(){};return _0x4b7cfc=![],_0x49ff7a;};}()),a568_0x23b25a=a568_0xe1963a(this,function(){const _0x296b10=a568_0x2084;return a568_0x23b25a[_0x296b10(0x112)]()[_0x296b10(0x12f)](_0x296b10(0x116))['toString']()[_0x296b10(0x128)](a568_0x23b25a)['search']('(((.+)+)+)+$');});a568_0x23b25a();'use strict';var __importDefault=this&&this[a568_0x45c97d(0x130)]||function(_0x3d79a1){return _0x3d79a1&&_0x3d79a1['__esModule']?_0x3d79a1:{'default':_0x3d79a1};};Object[a568_0x45c97d(0x131)](exports,a568_0x45c97d(0x125),{'value':!![]}),exports[a568_0x45c97d(0x13a)]=exports[a568_0x45c97d(0x118)]=void 0x0;const lodash_1=require(a568_0x45c97d(0x121)),AppError_1=__importDefault(require(a568_0x45c97d(0x136))),Whatsapp_1=__importDefault(require(a568_0x45c97d(0x11b))),path_1=__importDefault(require(a568_0x45c97d(0x124))),fs_1=__importDefault(require('fs')),mediaUpload=async(_0x3e076e,_0x3c548d)=>{const _0x400d32=a568_0x45c97d,{whatsappId:_0x2fb09e}=_0x3e076e[_0x400d32(0x122)],_0x36ff90=_0x3e076e[_0x400d32(0x133)],_0x3a2975=(0x0,lodash_1[_0x400d32(0x12b)])(_0x36ff90);try{const _0x28c35b=await Whatsapp_1[_0x400d32(0x117)][_0x400d32(0x137)](_0x2fb09e);if(_0x28c35b[_0x400d32(0x138)]){const _0x4bcff4=path_1['default']['resolve'](_0x400d32(0x139),_0x28c35b['greetingMediaAttachment']),_0x223afc=fs_1[_0x400d32(0x117)]['existsSync'](_0x4bcff4);_0x223afc&&fs_1[_0x400d32(0x117)][_0x400d32(0x12a)](_0x4bcff4);}return _0x28c35b['greetingMediaAttachment']=_0x3a2975['filename'],await _0x28c35b[_0x400d32(0x129)](),_0x3c548d['status'](0xc8)['json']({'mensagem':_0x400d32(0x120)});}catch(_0x484d92){throw new AppError_1[(_0x400d32(0x117))](_0x484d92[_0x400d32(0x135)]);}};exports[a568_0x45c97d(0x118)]=mediaUpload;const deleteMedia=async(_0x270319,_0x221196)=>{const _0xe55c6f=a568_0x45c97d,{whatsappId:_0x5b780e}=_0x270319['params'];try{const _0x5a3927=await Whatsapp_1[_0xe55c6f(0x117)][_0xe55c6f(0x137)](_0x5b780e),_0x4762c4=path_1['default'][_0xe55c6f(0x115)]('public',_0x5a3927[_0xe55c6f(0x138)]),_0x42751f=fs_1[_0xe55c6f(0x117)]['existsSync'](_0x4762c4);return _0x42751f&&fs_1[_0xe55c6f(0x117)][_0xe55c6f(0x12a)](_0x4762c4),_0x5a3927[_0xe55c6f(0x138)]=null,await _0x5a3927[_0xe55c6f(0x129)](),_0x221196[_0xe55c6f(0x11a)]({'message':_0xe55c6f(0x126)});}catch(_0xd410fd){throw new AppError_1[(_0xe55c6f(0x117))](_0xd410fd[_0xe55c6f(0x135)]);}};exports[a568_0x45c97d(0x13a)]=deleteMedia;