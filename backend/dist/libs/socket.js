const a255_0xa351df=a255_0x29c9;(function(_0x3edac6,_0x7efcd0){const _0x38157b=a255_0x29c9,_0x591d39=_0x3edac6();while(!![]){try{const _0x372aa7=parseInt(_0x38157b(0x1d7))/0x1+parseInt(_0x38157b(0x1ef))/0x2+-parseInt(_0x38157b(0x1be))/0x3*(parseInt(_0x38157b(0x1bb))/0x4)+parseInt(_0x38157b(0x1d3))/0x5*(parseInt(_0x38157b(0x1b9))/0x6)+parseInt(_0x38157b(0x1b0))/0x7*(parseInt(_0x38157b(0x212))/0x8)+parseInt(_0x38157b(0x1ba))/0x9+-parseInt(_0x38157b(0x1b4))/0xa;if(_0x372aa7===_0x7efcd0)break;else _0x591d39['push'](_0x591d39['shift']());}catch(_0x475ae7){_0x591d39['push'](_0x591d39['shift']());}}}(a255_0x40c3,0x62c05));function a255_0x40c3(){const _0x1bd960=['initIO','47747gBhpfk','FRONTEND_URL','-mainchannel','\x20entrou\x20no\x20canal\x20de\x20tickets\x20','data','leave','env','message','\x20da\x20empresa\x20','__importDefault','allTicket','joinTickets','profile','Usuário\x20','forEach','leaveNotification','save','token','getIO','CounterManager','joinNotification[','Usuário\x20não\x20encontrado','test','findByPk','278236SuHUFi','leaveChatBox','notification','instrument','basic','../models/Ticket','joinNotification','Token\x20inválido','Socket\x20IO\x20não\x20inicializado','../config/auth','Erro\x20de\x20autenticação:\x20','jsonwebtoken','leaveChatbox[','admin','defineProperty','../models/User','joinChatbox[','constructor','user','./counter','search','company-','Tentativa\x20não\x20autorizada\x20de\x20entrar\x20no\x20ticket\x20','verify','secret','join','parse','info','companyId','Token\x20não\x20fornecido','apply','Usuário\x20conectado:\x20','logger','query','email','104TSxCHo','leaveTickets','string','incrementCounter','socket.io',']:\x20Canal:\x20','debug','314895HtIAql','Falha\x20na\x20autenticação','status-','Server','7258330isddtO','@socket.io/admin-ui','queue-','__esModule','\x20saiu\x20do\x20canal\x20de\x20notificação\x20da\x20fila\x20','6hqFWtZ','6401043meLpnx','64zgHYzB',']:\x20Usuário:\x20','user-','106620JJdzkM','error','ID\x20de\x20ticket\x20inválido:\x20','queues','ticket-','decrementCounter','connection','\x20pelo\x20usuário\x20','Usuário\x20desconectado:\x20','leaveNotification[','\x20entrou\x20no\x20canal\x20de\x20notificação\x20da\x20fila\x20','../errors/AppError','toString','warn','development','handshake','use','(((.+)+)+)+$','\x20saiu\x20do\x20canal\x20de\x20tickets\x20pendentes\x20da\x20fila\x20','-notification','default','1080305iNDxAH','Admin\x20','online'];a255_0x40c3=function(){return _0x1bd960;};return a255_0x40c3();}const a255_0x2117dc=(function(){let _0x34313d=!![];return function(_0x1b7828,_0x586b5){const _0x1e7529=_0x34313d?function(){const _0x4b5b1f=a255_0x29c9;if(_0x586b5){const _0x5abe7f=_0x586b5[_0x4b5b1f(0x20d)](_0x1b7828,arguments);return _0x586b5=null,_0x5abe7f;}}:function(){};return _0x34313d=![],_0x1e7529;};}()),a255_0x32995b=a255_0x2117dc(this,function(){const _0x43830b=a255_0x29c9;return a255_0x32995b[_0x43830b(0x1ca)]()[_0x43830b(0x203)](_0x43830b(0x1cf))[_0x43830b(0x1ca)]()[_0x43830b(0x200)](a255_0x32995b)[_0x43830b(0x203)](_0x43830b(0x1cf));});a255_0x32995b();'use strict';var __importDefault=this&&this[a255_0xa351df(0x1e0)]||function(_0x398018){const _0x21b94e=a255_0xa351df;return _0x398018&&_0x398018[_0x21b94e(0x1b7)]?_0x398018:{'default':_0x398018};};Object[a255_0xa351df(0x1fd)](exports,'__esModule',{'value':!![]}),exports[a255_0xa351df(0x1e9)]=exports[a255_0xa351df(0x1d6)]=void 0x0;const socket_io_1=require(a255_0xa351df(0x1ad)),admin_ui_1=require(a255_0xa351df(0x1b5)),jsonwebtoken_1=require(a255_0xa351df(0x1fa)),AppError_1=__importDefault(require(a255_0xa351df(0x1c9))),logger_1=require('../utils/logger'),User_1=__importDefault(require(a255_0xa351df(0x1fe))),Queue_1=__importDefault(require('../models/Queue')),Ticket_1=__importDefault(require(a255_0xa351df(0x1f4))),auth_1=__importDefault(require(a255_0xa351df(0x1f8))),counter_1=require(a255_0xa351df(0x202));let io;function a255_0x29c9(_0x4fd44f,_0x595eed){const _0x14d26c=a255_0x40c3();return a255_0x29c9=function(_0x32995b,_0x2117dc){_0x32995b=_0x32995b-0x1aa;let _0x40c3a2=_0x14d26c[_0x32995b];return _0x40c3a2;},a255_0x29c9(_0x4fd44f,_0x595eed);}const initIO=_0x12db1d=>{const _0x1a0e80=a255_0xa351df;return io=new socket_io_1[(_0x1a0e80(0x1b3))](_0x12db1d,{'connectionStateRecovery':{'maxDisconnectionDuration':0x5*0x3c*0x3e8,'skipMiddlewares':!![]},'cors':{'credentials':!![],'origin':process[_0x1a0e80(0x1dd)][_0x1a0e80(0x1d8)]}}),process['env']['SOCKET_ADMIN']&&JSON[_0x1a0e80(0x209)](process[_0x1a0e80(0x1dd)]['SOCKET_ADMIN'])&&User_1[_0x1a0e80(0x1d2)]['findByPk'](0x1)['then'](_0x2f3333=>{const _0x326e37=_0x1a0e80;(0x0,admin_ui_1[_0x326e37(0x1f2)])(io,{'auth':{'type':_0x326e37(0x1f3),'username':_0x2f3333[_0x326e37(0x211)],'password':_0x2f3333['passwordHash']},'mode':_0x326e37(0x1cc)});}),io[_0x1a0e80(0x1ce)](async(_0x17ddc4,_0x4b3d3b)=>{const _0x4682af=_0x1a0e80;try{const _0x169d2f=_0x17ddc4[_0x4682af(0x1cd)]['auth'][_0x4682af(0x1e8)]||_0x17ddc4[_0x4682af(0x1cd)][_0x4682af(0x210)][_0x4682af(0x1e8)];if(!_0x169d2f)throw new Error(_0x4682af(0x20c));const _0x1c1a6a=(0x0,jsonwebtoken_1[_0x4682af(0x206)])(_0x169d2f,auth_1[_0x4682af(0x1d2)][_0x4682af(0x207)]);if(!_0x1c1a6a||typeof _0x1c1a6a['id']!=='number')throw new Error(_0x4682af(0x1f6));const _0x1b56d7=await User_1[_0x4682af(0x1d2)][_0x4682af(0x1ee)](_0x1c1a6a['id'],{'include':[Queue_1[_0x4682af(0x1d2)]]});if(!_0x1b56d7)throw new Error(_0x4682af(0x1ec));_0x17ddc4[_0x4682af(0x1db)][_0x4682af(0x201)]=_0x1b56d7,_0x4b3d3b();}catch(_0x27fb22){logger_1['logger'][_0x4682af(0x1bf)](_0x4682af(0x1f9)+_0x27fb22[_0x4682af(0x1de)]),_0x4b3d3b(new Error(_0x4682af(0x1b1)));}}),io['on'](_0x1a0e80(0x1c4),async _0x4125f5=>{const _0x604612=_0x1a0e80,_0x44e73d=_0x4125f5[_0x604612(0x1db)][_0x604612(0x201)],_0x3fe2ab=new counter_1[(_0x604612(0x1ea))]();logger_1['logger']['info'](_0x604612(0x20e)+_0x44e73d['id']),_0x44e73d['online']=!![],await _0x44e73d[_0x604612(0x1e7)](),_0x4125f5['join'](_0x604612(0x204)+_0x44e73d[_0x604612(0x20b)]+_0x604612(0x1d9)),_0x4125f5[_0x604612(0x208)](_0x604612(0x204)+_0x44e73d[_0x604612(0x20b)]),_0x4125f5[_0x604612(0x208)](_0x604612(0x1bd)+_0x44e73d['id']),_0x4125f5['on']('joinChatBox',async _0x5ebdb5=>{const _0x4dae32=_0x604612;if(typeof _0x5ebdb5!==_0x4dae32(0x1ab)||!/^\d+$/[_0x4dae32(0x1ed)](_0x5ebdb5)){logger_1[_0x4dae32(0x20f)][_0x4dae32(0x1cb)](_0x4dae32(0x1c0)+_0x5ebdb5);return;}try{const _0x3708ee=await Ticket_1['default'][_0x4dae32(0x1ee)](_0x5ebdb5);if(_0x3708ee&&_0x3708ee[_0x4dae32(0x20b)]===_0x44e73d[_0x4dae32(0x20b)]&&(_0x3708ee['userId']===_0x44e73d['id']||_0x44e73d[_0x4dae32(0x1e3)]===_0x4dae32(0x1fc)||_0x44e73d[_0x4dae32(0x1e1)])){const _0x25d485=_0x3fe2ab[_0x4dae32(0x1ac)](_0x4dae32(0x1c2)+_0x5ebdb5);_0x25d485===0x1&&_0x4125f5[_0x4dae32(0x208)](_0x5ebdb5),logger_1[_0x4dae32(0x20f)][_0x4dae32(0x1af)](_0x4dae32(0x1ff)+_0x25d485+_0x4dae32(0x1ae)+_0x5ebdb5+_0x4dae32(0x1c5)+_0x44e73d['id']);}else logger_1[_0x4dae32(0x20f)][_0x4dae32(0x1cb)](_0x4dae32(0x205)+_0x5ebdb5+_0x4dae32(0x1c5)+_0x44e73d['id']);}catch(_0x386626){logger_1[_0x4dae32(0x20f)][_0x4dae32(0x1bf)]('Erro\x20ao\x20buscar\x20ticket\x20'+_0x5ebdb5+':\x20'+_0x386626[_0x4dae32(0x1de)]);}}),_0x4125f5['on'](_0x604612(0x1f0),_0x48d57f=>{const _0x5a4f42=_0x604612;if(typeof _0x48d57f===_0x5a4f42(0x1ab)&&/^\d+$/[_0x5a4f42(0x1ed)](_0x48d57f)){const _0x42ede1=_0x3fe2ab[_0x5a4f42(0x1c3)](_0x5a4f42(0x1c2)+_0x48d57f);_0x42ede1===0x0&&_0x4125f5['leave'](_0x48d57f),logger_1[_0x5a4f42(0x20f)][_0x5a4f42(0x1af)](_0x5a4f42(0x1fb)+_0x42ede1+_0x5a4f42(0x1ae)+_0x48d57f+_0x5a4f42(0x1c5)+_0x44e73d['id']);}}),_0x4125f5['on'](_0x604612(0x1f5),()=>{const _0x20d5a2=_0x604612,_0x87461=_0x3fe2ab[_0x20d5a2(0x1ac)]('notification');_0x87461===0x1&&(_0x44e73d['profile']===_0x20d5a2(0x1fc)||_0x44e73d['allTicket']?_0x4125f5[_0x20d5a2(0x208)](_0x20d5a2(0x204)+_0x44e73d[_0x20d5a2(0x20b)]+'-notification'):_0x44e73d[_0x20d5a2(0x1c1)][_0x20d5a2(0x1e5)](_0x191527=>{const _0x4a227b=_0x20d5a2;logger_1[_0x4a227b(0x20f)]['debug'](_0x4a227b(0x1e4)+_0x44e73d['id']+_0x4a227b(0x1df)+_0x44e73d['companyId']+_0x4a227b(0x1c8)+_0x191527['id']+'.'),_0x4125f5[_0x4a227b(0x208)](_0x4a227b(0x1b6)+_0x191527['id']+_0x4a227b(0x1d1));})),logger_1[_0x20d5a2(0x20f)][_0x20d5a2(0x1af)](_0x20d5a2(0x1eb)+_0x87461+_0x20d5a2(0x1bc)+_0x44e73d['id']);}),_0x4125f5['on'](_0x604612(0x1e6),()=>{const _0x468fd8=_0x604612,_0x8c02b6=_0x3fe2ab['decrementCounter'](_0x468fd8(0x1f1));_0x8c02b6===0x0&&(_0x44e73d[_0x468fd8(0x1e3)]==='admin'||_0x44e73d[_0x468fd8(0x1e1)]?_0x4125f5[_0x468fd8(0x1dc)](_0x468fd8(0x204)+_0x44e73d[_0x468fd8(0x20b)]+_0x468fd8(0x1d1)):_0x44e73d[_0x468fd8(0x1c1)]['forEach'](_0x454139=>{const _0x328a5f=_0x468fd8;logger_1[_0x328a5f(0x20f)][_0x328a5f(0x1af)](_0x328a5f(0x1e4)+_0x44e73d['id']+'\x20da\x20empresa\x20'+_0x44e73d[_0x328a5f(0x20b)]+_0x328a5f(0x1b8)+_0x454139['id']+'.'),_0x4125f5[_0x328a5f(0x1dc)]('queue-'+_0x454139['id']+'-notification');})),logger_1[_0x468fd8(0x20f)][_0x468fd8(0x1af)](_0x468fd8(0x1c7)+_0x8c02b6+_0x468fd8(0x1bc)+_0x44e73d['id']);}),_0x4125f5['on'](_0x604612(0x1e2),_0x3b6691=>{const _0x22ecad=_0x604612;_0x3fe2ab[_0x22ecad(0x1ac)](_0x22ecad(0x1b2)+_0x3b6691)===0x1&&(_0x44e73d[_0x22ecad(0x1e3)]===_0x22ecad(0x1fc)||_0x44e73d[_0x22ecad(0x1e1)]?(logger_1[_0x22ecad(0x20f)][_0x22ecad(0x1af)](_0x22ecad(0x1d4)+_0x44e73d['id']+'\x20da\x20empresa\x20'+_0x44e73d['companyId']+_0x22ecad(0x1da)+_0x3b6691+'.'),_0x4125f5['join'](_0x22ecad(0x204)+_0x44e73d['companyId']+'-'+_0x3b6691)):_0x44e73d[_0x22ecad(0x1c1)][_0x22ecad(0x1e5)](_0x1e6656=>{const _0x450b43=_0x22ecad;logger_1['logger'][_0x450b43(0x1af)]('Usuário\x20'+_0x44e73d['id']+_0x450b43(0x1df)+_0x44e73d[_0x450b43(0x20b)]+'\x20entrou\x20no\x20canal\x20de\x20tickets\x20pendentes\x20da\x20fila\x20'+_0x1e6656['id']+'.'),_0x4125f5[_0x450b43(0x208)]('queue-'+_0x1e6656['id']+'-'+_0x3b6691);}));}),_0x4125f5['on'](_0x604612(0x1aa),_0x5c1952=>{const _0x1518ea=_0x604612;_0x3fe2ab[_0x1518ea(0x1c3)]('status-'+_0x5c1952)===0x0&&(_0x44e73d[_0x1518ea(0x1e3)]==='admin'||_0x44e73d['allTicket']?(logger_1[_0x1518ea(0x20f)]['debug'](_0x1518ea(0x1d4)+_0x44e73d['id']+_0x1518ea(0x1df)+_0x44e73d[_0x1518ea(0x20b)]+'\x20saiu\x20do\x20canal\x20de\x20tickets\x20'+_0x5c1952+'.'),_0x4125f5[_0x1518ea(0x1dc)](_0x1518ea(0x204)+_0x44e73d['companyId']+'-'+_0x5c1952)):_0x44e73d[_0x1518ea(0x1c1)]['forEach'](_0x21fa3f=>{const _0x2d5d72=_0x1518ea;logger_1[_0x2d5d72(0x20f)][_0x2d5d72(0x1af)]('Usuário\x20'+_0x44e73d['id']+_0x2d5d72(0x1df)+_0x44e73d[_0x2d5d72(0x20b)]+_0x2d5d72(0x1d0)+_0x21fa3f['id']+'.'),_0x4125f5['leave']('queue-'+_0x21fa3f['id']+'-'+_0x5c1952);}));}),_0x4125f5['on']('disconnect',async()=>{const _0xa79f71=_0x604612;logger_1[_0xa79f71(0x20f)][_0xa79f71(0x20a)](_0xa79f71(0x1c6)+_0x44e73d['id']),_0x44e73d[_0xa79f71(0x1d5)]=![],await _0x44e73d[_0xa79f71(0x1e7)]();});}),io;};exports['initIO']=initIO;const getIO=()=>{const _0x54d037=a255_0xa351df;if(!io)throw new AppError_1[(_0x54d037(0x1d2))](_0x54d037(0x1f7));return io;};exports[a255_0xa351df(0x1e9)]=getIO;