const a512_0x13a1b1=a512_0x32ff;function a512_0x32ff(_0x4cfaf9,_0xc68dd4){const _0x391e70=a512_0x1eba();return a512_0x32ff=function(_0x34c824,_0x1228d0){_0x34c824=_0x34c824-0x17b;let _0x1eba49=_0x391e70[_0x34c824];return _0x1eba49;},a512_0x32ff(_0x4cfaf9,_0xc68dd4);}(function(_0x2010c8,_0x57462d){const _0x195f55=a512_0x32ff,_0x164c40=_0x2010c8();while(!![]){try{const _0x55990e=-parseInt(_0x195f55(0x194))/0x1+-parseInt(_0x195f55(0x17e))/0x2+parseInt(_0x195f55(0x183))/0x3*(parseInt(_0x195f55(0x182))/0x4)+parseInt(_0x195f55(0x185))/0x5+-parseInt(_0x195f55(0x190))/0x6*(parseInt(_0x195f55(0x18e))/0x7)+-parseInt(_0x195f55(0x184))/0x8+-parseInt(_0x195f55(0x187))/0x9*(-parseInt(_0x195f55(0x186))/0xa);if(_0x55990e===_0x57462d)break;else _0x164c40['push'](_0x164c40['shift']());}catch(_0x11bc97){_0x164c40['push'](_0x164c40['shift']());}}}(a512_0x1eba,0x605ca));const a512_0x1228d0=(function(){let _0x4bc63e=!![];return function(_0x427382,_0x428cde){const _0x1e9663=_0x4bc63e?function(){const _0x5a231f=a512_0x32ff;if(_0x428cde){const _0x5e5280=_0x428cde[_0x5a231f(0x17f)](_0x427382,arguments);return _0x428cde=null,_0x5e5280;}}:function(){};return _0x4bc63e=![],_0x1e9663;};}()),a512_0x34c824=a512_0x1228d0(this,function(){const _0x34cf45=a512_0x32ff;return a512_0x34c824['toString']()['search'](_0x34cf45(0x18c))[_0x34cf45(0x18b)]()[_0x34cf45(0x197)](a512_0x34c824)[_0x34cf45(0x191)](_0x34cf45(0x18c));});a512_0x34c824();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x4a29ff){const _0x52aa8f=a512_0x32ff;return _0x4a29ff&&_0x4a29ff[_0x52aa8f(0x192)]?_0x4a29ff:{'default':_0x4a29ff};};Object[a512_0x13a1b1(0x181)](exports,a512_0x13a1b1(0x192),{'value':!![]});const Task_1=__importDefault(require('../../models/Task')),TaskService={'createTask':async(_0x1a3cd3,_0x279064,_0x42f84d)=>{const _0x2f402f=a512_0x13a1b1;try{const _0x3ede98=await Task_1[_0x2f402f(0x17c)][_0x2f402f(0x196)]({'text':_0x1a3cd3,'description':_0x279064,'companyId':_0x42f84d});return _0x3ede98;}catch(_0x46a858){console[_0x2f402f(0x18d)](_0x46a858);throw new Error(_0x2f402f(0x180));}},'getAllTasks':async _0x519e85=>{const _0x2e05b8=a512_0x13a1b1;try{const _0x5a5033=await Task_1[_0x2e05b8(0x17c)][_0x2e05b8(0x18a)]({'where':{'companyId':_0x519e85}});return _0x5a5033;}catch(_0x14e9ec){console[_0x2e05b8(0x18d)](_0x14e9ec);throw new Error(_0x2e05b8(0x189));}},'getTaskById':async(_0x1f0994,_0x1d9134)=>{const _0xf238eb=a512_0x13a1b1;try{const _0x47d027=await Task_1['default']['findByPk'](_0x1f0994,{'where':{'companyId':_0x1d9134}});if(!_0x47d027)return null;return _0x47d027;}catch(_0x23a40e){console[_0xf238eb(0x18d)](_0x23a40e);throw new Error(_0xf238eb(0x195));}},'updateTask':async(_0x51fbcf,_0x5b7752,_0x591e59)=>{const _0x119cd4=a512_0x13a1b1;try{const _0x5613f7=await Task_1[_0x119cd4(0x17c)][_0x119cd4(0x188)](_0x51fbcf,{'where':{'companyId':_0x591e59}});if(!_0x5613f7)return null;return _0x5b7752!==undefined&&(_0x5613f7['text']=_0x5b7752),await _0x5613f7[_0x119cd4(0x17b)](),_0x5613f7;}catch(_0x31f711){console[_0x119cd4(0x18d)](_0x31f711);throw new Error('Erro\x20ao\x20atualizar\x20a\x20tarefa.');}},'deleteTask':async(_0xcb3e54,_0x23c17f)=>{const _0x1d8086=a512_0x13a1b1;try{const _0x416dc7=await Task_1['default'][_0x1d8086(0x188)](_0xcb3e54,{'where':{'companyId':_0x23c17f}});if(!_0x416dc7)return![];return await _0x416dc7[_0x1d8086(0x18f)](),!![];}catch(_0x32cfa8){console[_0x1d8086(0x18d)](_0x32cfa8);throw new Error('Erro\x20ao\x20excluir\x20a\x20tarefa.');}},'updateTaskDescription':async(_0x4b3766,_0x5c92f0,_0x332284)=>{const _0x5344bb=a512_0x13a1b1;try{const _0x194ee4=await Task_1[_0x5344bb(0x17c)][_0x5344bb(0x188)](_0x4b3766,{'where':{'companyId':_0x332284}});if(!_0x194ee4)return null;return _0x194ee4[_0x5344bb(0x17d)]=_0x5c92f0,await _0x194ee4[_0x5344bb(0x17b)](),_0x194ee4;}catch(_0x5b3b17){console['error'](_0x5b3b17);throw new Error(_0x5344bb(0x193));}}};function a512_0x1eba(){const _0x3eac14=['__esModule','Erro\x20ao\x20atualizar\x20a\x20descrição\x20da\x20tarefa.','268254IYgJlL','Erro\x20ao\x20buscar\x20a\x20tarefa.','create','constructor','save','default','description','400348FqHBzk','apply','Erro\x20ao\x20criar\x20a\x20tarefa.','defineProperty','50440WTsdjN','174RDqsfn','136888ZHYLwp','2394355BqhZDW','35410QmVvOR','981DxHOpC','findByPk','Erro\x20ao\x20buscar\x20tarefas.','findAll','toString','(((.+)+)+)+$','error','861mWZEDl','destroy','34926lqmGCr','search'];a512_0x1eba=function(){return _0x3eac14;};return a512_0x1eba();}exports[a512_0x13a1b1(0x17c)]=TaskService;