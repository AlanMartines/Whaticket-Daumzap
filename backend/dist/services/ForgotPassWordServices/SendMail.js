const a431_0x268a0b=a431_0x14dc;(function(_0x3c0ca9,_0x214253){const _0xb2f2ee=a431_0x14dc,_0x1b126a=_0x3c0ca9();while(!![]){try{const _0x7966f6=parseInt(_0xb2f2ee(0x198))/0x1+parseInt(_0xb2f2ee(0x19f))/0x2*(parseInt(_0xb2f2ee(0x18d))/0x3)+parseInt(_0xb2f2ee(0x194))/0x4*(-parseInt(_0xb2f2ee(0x1b3))/0x5)+parseInt(_0xb2f2ee(0x1b2))/0x6*(-parseInt(_0xb2f2ee(0x195))/0x7)+-parseInt(_0xb2f2ee(0x197))/0x8*(parseInt(_0xb2f2ee(0x192))/0x9)+parseInt(_0xb2f2ee(0x1a9))/0xa+parseInt(_0xb2f2ee(0x1aa))/0xb*(parseInt(_0xb2f2ee(0x191))/0xc);if(_0x7966f6===_0x214253)break;else _0x1b126a['push'](_0x1b126a['shift']());}catch(_0x3790d7){_0x1b126a['push'](_0x1b126a['shift']());}}}(a431_0x3ade,0x6dd8b));const a431_0x46e65b=(function(){let _0x556a46=!![];return function(_0x633c5,_0x25446f){const _0x413a17=_0x556a46?function(){const _0x4df28a=a431_0x14dc;if(_0x25446f){const _0x24b51c=_0x25446f[_0x4df28a(0x1a1)](_0x633c5,arguments);return _0x25446f=null,_0x24b51c;}}:function(){};return _0x556a46=![],_0x413a17;};}()),a431_0x1150b0=a431_0x46e65b(this,function(){const _0x17272f=a431_0x14dc;return a431_0x1150b0['toString']()[_0x17272f(0x19b)](_0x17272f(0x18e))['toString']()['constructor'](a431_0x1150b0)[_0x17272f(0x19b)](_0x17272f(0x18e));});a431_0x1150b0();'use strict';var __importDefault=this&&this[a431_0x268a0b(0x1ad)]||function(_0x5b037c){const _0x165eb5=a431_0x268a0b;return _0x5b037c&&_0x5b037c[_0x165eb5(0x19a)]?_0x5b037c:{'default':_0x5b037c};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const nodemailer_1=__importDefault(require(a431_0x268a0b(0x193))),sequelize_1=__importDefault(require(a431_0x268a0b(0x19e))),database_1=__importDefault(require('../../database')),Setting_1=__importDefault(require(a431_0x268a0b(0x1b1))),SendMail=async(_0x2dfa72,_0x3273cb)=>{const _0x3db48e=a431_0x268a0b;try{const _0x54653a=0x1,{hasResult:_0x2b914d,data:_0xe4e24b}=await filterEmail(_0x2dfa72);if(!_0x2b914d)return{'status':0x194,'message':'Email\x20não\x20encontrado'};const _0x3454b6=_0xe4e24b[0x0];if(!_0x3454b6||_0x3454b6[_0x3db48e(0x196)]===undefined)return{'status':0x194,'message':'Dados\x20do\x20usuário\x20não\x20encontrados'};const [_0x978ef1,_0x1ff8ed,_0x37dacd,_0x3c9119]=await Promise['all']([Setting_1['default']['findOne']({'where':{'companyId':_0x54653a,'key':'smtpauth'}}),Setting_1['default'][_0x3db48e(0x1af)]({'where':{'companyId':_0x54653a,'key':_0x3db48e(0x1b5)}}),Setting_1[_0x3db48e(0x1ae)][_0x3db48e(0x1af)]({'where':{'companyId':_0x54653a,'key':_0x3db48e(0x1ac)}}),Setting_1[_0x3db48e(0x1ae)]['findOne']({'where':{'companyId':_0x54653a,'key':_0x3db48e(0x1ab)}})]),_0x1419e1=_0x978ef1?.[_0x3db48e(0x1a7)],_0x164c53=_0x1ff8ed?.[_0x3db48e(0x1a7)],_0xe7fe85=_0x37dacd?.[_0x3db48e(0x1a7)],_0x5c6d85=_0x164c53,_0x20917e=_0x3c9119?.[_0x3db48e(0x1a7)];if(!_0x1419e1||!_0x164c53||!_0xe7fe85||!_0x20917e)throw new Error(_0x3db48e(0x18f));const _0xc56f61=nodemailer_1[_0x3db48e(0x1ae)][_0x3db48e(0x1a8)]({'host':_0x1419e1,'port':Number(_0x20917e),'secure':![],'auth':{'user':_0x164c53,'pass':_0xe7fe85}}),{hasResults:_0x55b34a}=await insertToken(_0x2dfa72,_0x3273cb);if(!_0x55b34a)return{'status':0x194,'message':_0x3db48e(0x19d)};const _0x2b941d={'from':_0x5c6d85,'to':_0x2dfa72,'subject':_0x3db48e(0x1a2),'text':'Olá,\x0a\x0aVocê\x20solicitou\x20a\x20redefinição\x20de\x20senha\x20para\x20sua\x20conta,\x20utilize\x20o\x20seguinte\x20Código\x20de\x20Verificação\x20para\x20concluir\x20o\x20processo\x20de\x20redefinição\x20de\x20senha:\x0a\x0aCódigo\x20de\x20Verificação:\x20'+_0x3273cb+_0x3db48e(0x190)},_0x1a9195=await _0xc56f61[_0x3db48e(0x1a0)](_0x2b941d);return{'status':0xc8,'message':_0x3db48e(0x1a3),'info':_0x1a9195};}catch(_0x251925){return console['error'](_0x3db48e(0x199),_0x251925),{'status':0x1f4,'message':_0x3db48e(0x1b0)};}},filterEmail=async _0x380f1c=>{const _0x2b122c=a431_0x268a0b,_0x262585=_0x2b122c(0x1b4)+_0x380f1c+'\x27',_0x1db44d=await database_1[_0x2b122c(0x1ae)][_0x2b122c(0x1a6)](_0x262585,{'type':sequelize_1[_0x2b122c(0x1ae)][_0x2b122c(0x19c)][_0x2b122c(0x1a4)]});return{'hasResult':_0x1db44d['length']>0x0,'data':_0x1db44d};},insertToken=async(_0x558031,_0x1f4586)=>{const _0x5a43d1=a431_0x268a0b,_0x201614='UPDATE\x20\x22Users\x22\x20SET\x20\x22resetPassword\x22=\x20\x27'+_0x1f4586+_0x5a43d1(0x1a5)+_0x558031+'\x27',_0x40ea60=await database_1[_0x5a43d1(0x1ae)][_0x5a43d1(0x1a6)](_0x201614,{'type':sequelize_1['default']['QueryTypes']['UPDATE']});return{'hasResults':_0x40ea60[0x1]>0x0,'datas':_0x40ea60};};function a431_0x14dc(_0x153f6b,_0x56d484){const _0x12e8a2=a431_0x3ade();return a431_0x14dc=function(_0x1150b0,_0x46e65b){_0x1150b0=_0x1150b0-0x18d;let _0x3adeb8=_0x12e8a2[_0x1150b0];return _0x3adeb8;},a431_0x14dc(_0x153f6b,_0x56d484);}function a431_0x3ade(){const _0x3a7c0f=['SELECT\x20*\x20FROM\x20\x22Users\x22\x20WHERE\x20email\x20=\x27','usersmtpauth','3OtjGni','(((.+)+)+)+$','Configurações\x20SMTP\x20estão\x20incompletas','\x0a\x0aPor\x20favor,\x20copie\x20e\x20cole\x20o\x20Código\x20de\x20Verificação\x20no\x20campo\x20\x27Código\x20de\x20Verificação\x27.\x0a\x0aSe\x20você\x20não\x20solicitou\x20esta\x20redefinição\x20de\x20senha,\x20por\x20favor,\x20ignore\x20este\x20e-mail.\x0a\x0a\x0aAtenciosamente','48qSinyM','1411659WEKJGU','nodemailer','1644868dmAfNb','7oTHeEx','companyId','16kpYMDT','407785boMRTT','Erro\x20ao\x20enviar\x20e-mail:','__esModule','search','QueryTypes','Não\x20foi\x20possível\x20inserir\x20o\x20token\x20de\x20redefinição','sequelize','1312508KXYKUt','sendMail','apply','Redefinição\x20de\x20Senha','E-mail\x20enviado\x20com\x20sucesso','SELECT','\x27\x20WHERE\x20email\x20=\x27','query','value','createTransport','2120360dNIBbM','1755996hmkrqB','smtpport','clientsecretsmtpauth','__importDefault','default','findOne','Erro\x20interno\x20do\x20servidor','../../models/Setting','4438614oDxncM','5VvOPYf'];a431_0x3ade=function(){return _0x3a7c0f;};return a431_0x3ade();}exports[a431_0x268a0b(0x1ae)]=SendMail;