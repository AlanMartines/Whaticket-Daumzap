function a512_0x2f5b(_0x477c8a,_0x160def){const _0x640952=a512_0xc388();return a512_0x2f5b=function(_0x257246,_0xc9b1aa){_0x257246=_0x257246-0xb7;let _0xc38856=_0x640952[_0x257246];return _0xc38856;},a512_0x2f5b(_0x477c8a,_0x160def);}function a512_0xc388(){const _0x176f7a=['create','952404YCNpAh','save','4946942nWGQYe','668694ArAyNg','Erro\x20ao\x20criar\x20a\x20tarefa.','Erro\x20ao\x20excluir\x20a\x20tarefa.','4LQMRgy','24tubjjq','defineProperty','toString','15455Bytkfj','constructor','destroy','(((.+)+)+)+$','10YRnycJ','35rsmXTt','findByPk','5273072BcxOeq','__esModule','error','../../models/Task','8376uSVhwh','3844413xSMmfC','82754QmDLDb','default','search','__importDefault','Erro\x20ao\x20atualizar\x20a\x20tarefa.'];a512_0xc388=function(){return _0x176f7a;};return a512_0xc388();}const a512_0x5bc3f8=a512_0x2f5b;(function(_0x2ce415,_0x1fb370){const _0x332296=a512_0x2f5b,_0x4a22ff=_0x2ce415();while(!![]){try{const _0x1de1e5=parseInt(_0x332296(0xc1))/0x1*(parseInt(_0x332296(0xce))/0x2)+parseInt(_0x332296(0xc7))/0x3*(parseInt(_0x332296(0xcd))/0x4)+-parseInt(_0x332296(0xb9))/0x5*(-parseInt(_0x332296(0xca))/0x6)+-parseInt(_0x332296(0xc9))/0x7+parseInt(_0x332296(0xbb))/0x8+parseInt(_0x332296(0xc0))/0x9*(-parseInt(_0x332296(0xb8))/0xa)+-parseInt(_0x332296(0xd1))/0xb*(parseInt(_0x332296(0xbf))/0xc);if(_0x1de1e5===_0x1fb370)break;else _0x4a22ff['push'](_0x4a22ff['shift']());}catch(_0x4b7086){_0x4a22ff['push'](_0x4a22ff['shift']());}}}(a512_0xc388,0x9b168));const a512_0xc9b1aa=(function(){let _0xbf8585=!![];return function(_0x27620c,_0x49596d){const _0x3fd206=_0xbf8585?function(){if(_0x49596d){const _0x4e9a9b=_0x49596d['apply'](_0x27620c,arguments);return _0x49596d=null,_0x4e9a9b;}}:function(){};return _0xbf8585=![],_0x3fd206;};}()),a512_0x257246=a512_0xc9b1aa(this,function(){const _0x4a72ef=a512_0x2f5b;return a512_0x257246[_0x4a72ef(0xd0)]()[_0x4a72ef(0xc3)](_0x4a72ef(0xb7))[_0x4a72ef(0xd0)]()[_0x4a72ef(0xd2)](a512_0x257246)[_0x4a72ef(0xc3)]('(((.+)+)+)+$');});a512_0x257246();'use strict';var __importDefault=this&&this[a512_0x5bc3f8(0xc4)]||function(_0x4d91da){const _0x2b932c=a512_0x5bc3f8;return _0x4d91da&&_0x4d91da[_0x2b932c(0xbc)]?_0x4d91da:{'default':_0x4d91da};};Object[a512_0x5bc3f8(0xcf)](exports,a512_0x5bc3f8(0xbc),{'value':!![]});const Task_1=__importDefault(require(a512_0x5bc3f8(0xbe))),TaskService={'createTask':async(_0x1ae918,_0x2d0368,_0x2c4f9d)=>{const _0x3bba2c=a512_0x5bc3f8;try{const _0x13ec98=await Task_1['default'][_0x3bba2c(0xc6)]({'text':_0x1ae918,'description':_0x2d0368,'companyId':_0x2c4f9d});return _0x13ec98;}catch(_0x4a4950){console[_0x3bba2c(0xbd)](_0x4a4950);throw new Error(_0x3bba2c(0xcb));}},'getAllTasks':async _0x3c996f=>{const _0x25981c=a512_0x5bc3f8;try{const _0x4ec211=await Task_1['default']['findAll']({'where':{'companyId':_0x3c996f}});return _0x4ec211;}catch(_0x4d15c6){console[_0x25981c(0xbd)](_0x4d15c6);throw new Error('Erro\x20ao\x20buscar\x20tarefas.');}},'getTaskById':async(_0x1118de,_0x48ec20)=>{const _0x1912b2=a512_0x5bc3f8;try{const _0x3b75f6=await Task_1[_0x1912b2(0xc2)][_0x1912b2(0xba)](_0x1118de,{'where':{'companyId':_0x48ec20}});if(!_0x3b75f6)return null;return _0x3b75f6;}catch(_0x35a735){console['error'](_0x35a735);throw new Error('Erro\x20ao\x20buscar\x20a\x20tarefa.');}},'updateTask':async(_0x3b4f9b,_0x1ad0bf,_0x52dab3)=>{const _0x3db3b0=a512_0x5bc3f8;try{const _0x2ec664=await Task_1[_0x3db3b0(0xc2)][_0x3db3b0(0xba)](_0x3b4f9b,{'where':{'companyId':_0x52dab3}});if(!_0x2ec664)return null;return _0x1ad0bf!==undefined&&(_0x2ec664['text']=_0x1ad0bf),await _0x2ec664[_0x3db3b0(0xc8)](),_0x2ec664;}catch(_0x548f7b){console[_0x3db3b0(0xbd)](_0x548f7b);throw new Error(_0x3db3b0(0xc5));}},'deleteTask':async(_0x25d692,_0x2ac6cc)=>{const _0x34641b=a512_0x5bc3f8;try{const _0x2dc53a=await Task_1[_0x34641b(0xc2)][_0x34641b(0xba)](_0x25d692,{'where':{'companyId':_0x2ac6cc}});if(!_0x2dc53a)return![];return await _0x2dc53a[_0x34641b(0xd3)](),!![];}catch(_0x260666){console[_0x34641b(0xbd)](_0x260666);throw new Error(_0x34641b(0xcc));}},'updateTaskDescription':async(_0x3686f6,_0x13335a,_0x1e1429)=>{const _0x494b00=a512_0x5bc3f8;try{const _0x15b279=await Task_1[_0x494b00(0xc2)][_0x494b00(0xba)](_0x3686f6,{'where':{'companyId':_0x1e1429}});if(!_0x15b279)return null;return _0x15b279['description']=_0x13335a,await _0x15b279['save'](),_0x15b279;}catch(_0x55978a){console[_0x494b00(0xbd)](_0x55978a);throw new Error('Erro\x20ao\x20atualizar\x20a\x20descrição\x20da\x20tarefa.');}}};exports[a512_0x5bc3f8(0xc2)]=TaskService;