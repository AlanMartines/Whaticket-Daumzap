const a18_0x30a3c0=a18_0x38f6;(function(_0x1857e7,_0x4481a3){const _0x3fea6b=a18_0x38f6,_0x168b30=_0x1857e7();while(!![]){try{const _0x47ddfa=parseInt(_0x3fea6b(0x17a))/0x1+-parseInt(_0x3fea6b(0x13e))/0x2*(parseInt(_0x3fea6b(0x142))/0x3)+-parseInt(_0x3fea6b(0x152))/0x4+-parseInt(_0x3fea6b(0x16e))/0x5*(parseInt(_0x3fea6b(0x15a))/0x6)+parseInt(_0x3fea6b(0x167))/0x7+-parseInt(_0x3fea6b(0x160))/0x8+parseInt(_0x3fea6b(0x148))/0x9;if(_0x47ddfa===_0x4481a3)break;else _0x168b30['push'](_0x168b30['shift']());}catch(_0xb72bd5){_0x168b30['push'](_0x168b30['shift']());}}}(a18_0xabac,0xc70a3));const a18_0xf20935=(function(){let _0x550594=!![];return function(_0x15c41b,_0x5abdb9){const _0x26d832=_0x550594?function(){if(_0x5abdb9){const _0x44a2b0=_0x5abdb9['apply'](_0x15c41b,arguments);return _0x5abdb9=null,_0x44a2b0;}}:function(){};return _0x550594=![],_0x26d832;};}()),a18_0x2f023a=a18_0xf20935(this,function(){const _0x3c60a6=a18_0x38f6;return a18_0x2f023a[_0x3c60a6(0x16c)]()['search']('(((.+)+)+)+$')[_0x3c60a6(0x16c)]()[_0x3c60a6(0x151)](a18_0x2f023a)['search'](_0x3c60a6(0x153));});a18_0x2f023a();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x1e592e){return _0x1e592e&&_0x1e592e['__esModule']?_0x1e592e:{'default':_0x1e592e};};function a18_0x38f6(_0x239102,_0xe5b5b1){const _0x42566b=a18_0xabac();return a18_0x38f6=function(_0x2f023a,_0xf20935){_0x2f023a=_0x2f023a-0x13b;let _0xabacad=_0x42566b[_0x2f023a];return _0xabacad;},a18_0x38f6(_0x239102,_0xe5b5b1);}function a18_0xabac(){const _0x37086f=['body','not','error','toString','format','233115sOkWKi',',\x20erro:\x20','sequelize','Erro\x20ao\x20listar\x20e-mails\x20agendados:','listarEmailsAgendados','sender','createLogger','agendarEnvioEmail','Erro\x20ao\x20listar\x20e-mails\x20enviados:','YYYY-MM-DDTHH:mm','Erro\x20ao\x20listar\x20e-mails\x20agendados','hour','213977FuNiva','winston','sendAt','A\x20data\x20de\x20envio\x20deve\x20ser\x20no\x20futuro','2628890rYCzkj','../services/EmailService/EmailService','lte','Erro\x20ao\x20agendar\x20o\x20envio\x20de\x20e-mail','3gdKwOM','../models/Email','printf','moment','Erro\x20ao\x20enviar\x20e-mail','default','25823520swyEDb','defineProperty','json','transports','schedule','companyId','*/30\x20*\x20*\x20*\x20*\x20*','mensagem','timestamp','constructor','520204jFUTDz','(((.+)+)+)+$','status','Erro\x20ao\x20agendar\x20o\x20envio\x20de\x20e-mail:','E-mail\x20agendado\x20com\x20sucesso','Console','node-cron','Erro\x20ao\x20listar\x20e-mails\x20enviados','36UpiILG','user','combine','Erro\x20ao\x20enviar\x20e-mail\x20agendado\x20para:\x20','assunto','listarEmailsEnviados','7223440qAvsJU','SendMail','info','Erro\x20ao\x20enviar\x20agendamentos\x20pendentes:','create','add','findAll','2514218yEqRik','update'];a18_0xabac=function(){return _0x37086f;};return a18_0xabac();}Object[a18_0x30a3c0(0x149)](exports,'__esModule',{'value':!![]}),exports[a18_0x30a3c0(0x175)]=exports[a18_0x30a3c0(0x172)]=exports[a18_0x30a3c0(0x15f)]=exports['enviarEmail']=void 0x0;const EmailService_1=require(a18_0x30a3c0(0x13f)),Email_1=__importDefault(require(a18_0x30a3c0(0x143))),moment_1=__importDefault(require(a18_0x30a3c0(0x145))),node_cron_1=__importDefault(require(a18_0x30a3c0(0x158))),sequelize_1=require(a18_0x30a3c0(0x170)),winston_1=__importDefault(require(a18_0x30a3c0(0x13b))),logger=winston_1[a18_0x30a3c0(0x147)][a18_0x30a3c0(0x174)]({'level':a18_0x30a3c0(0x162),'format':winston_1[a18_0x30a3c0(0x147)][a18_0x30a3c0(0x16d)][a18_0x30a3c0(0x15c)](winston_1[a18_0x30a3c0(0x147)][a18_0x30a3c0(0x16d)][a18_0x30a3c0(0x150)](),winston_1['default'][a18_0x30a3c0(0x16d)][a18_0x30a3c0(0x144)](({timestamp:_0x5e13f0,level:_0x327377,message:_0x32ffe9})=>{return _0x5e13f0+'\x20'+_0x327377+':\x20'+_0x32ffe9;})),'transports':[new winston_1[(a18_0x30a3c0(0x147))][(a18_0x30a3c0(0x14b))][(a18_0x30a3c0(0x157))]()]}),enviarEmail=async(_0x50a7f9,_0x27bead)=>{const _0x47512a=a18_0x30a3c0;try{const _0x95510f=_0x50a7f9[_0x47512a(0x15b)][_0x47512a(0x14d)],{email:_0x44ad5a,tokenSenha:_0xca8fd5,assunto:_0x3bda33,mensagem:_0x33896d}=_0x50a7f9['body'],_0x1df11a=(0x0,moment_1['default'])()[_0x47512a(0x165)](0x1,_0x47512a(0x179))[_0x47512a(0x16d)](_0x47512a(0x177)),_0x20aa8d=await(0x0,EmailService_1[_0x47512a(0x161)])(_0x95510f,_0x44ad5a,_0xca8fd5,_0x3bda33,_0x33896d,_0x1df11a);if(_0x20aa8d[_0x47512a(0x16b)])return _0x27bead[_0x47512a(0x154)](0x1f4)[_0x47512a(0x14a)]({'error':_0x20aa8d['error']});_0x27bead[_0x47512a(0x154)](0xc8)[_0x47512a(0x14a)]({'message':'E-mail\x20enviado\x20com\x20sucesso'});}catch(_0x2b8965){console[_0x47512a(0x16b)]('Erro\x20ao\x20enviar\x20e-mail:',_0x2b8965),_0x27bead[_0x47512a(0x154)](0x1f4)[_0x47512a(0x14a)]({'error':_0x47512a(0x146)});}};exports['enviarEmail']=enviarEmail;const listarEmailsEnviados=async(_0xd65e1f,_0x353b5c)=>{const _0x2f7382=a18_0x30a3c0;try{const _0x24e2dd=await Email_1[_0x2f7382(0x147)][_0x2f7382(0x166)]({'where':{'companyId':_0xd65e1f[_0x2f7382(0x15b)][_0x2f7382(0x14d)],'scheduled':null,'sendAt':null}});_0x353b5c[_0x2f7382(0x154)](0xc8)[_0x2f7382(0x14a)](_0x24e2dd);}catch(_0x29ac32){console[_0x2f7382(0x16b)](_0x2f7382(0x176),_0x29ac32),_0x353b5c['status'](0x1f4)[_0x2f7382(0x14a)]({'error':_0x2f7382(0x159)});}};exports['listarEmailsEnviados']=listarEmailsEnviados;const listarEmailsAgendados=async(_0x493c0e,_0x50f528)=>{const _0xd8654a=a18_0x30a3c0;try{const _0x101e38=await Email_1[_0xd8654a(0x147)][_0xd8654a(0x166)]({'where':{'companyId':_0x493c0e[_0xd8654a(0x15b)]['companyId'],'scheduled':!![],'sendAt':{[sequelize_1['Op'][_0xd8654a(0x16a)]]:null}}});_0x50f528[_0xd8654a(0x154)](0xc8)[_0xd8654a(0x14a)](_0x101e38);}catch(_0x2b9f4e){console[_0xd8654a(0x16b)](_0xd8654a(0x171),_0x2b9f4e),_0x50f528[_0xd8654a(0x154)](0x1f4)['json']({'error':_0xd8654a(0x178)});}};exports[a18_0x30a3c0(0x172)]=listarEmailsAgendados;const agendarEnvioEmail=async(_0x2e0bca,_0x163e31)=>{const _0x238660=a18_0x30a3c0;try{const _0x279dc4=_0x2e0bca[_0x238660(0x15b)][_0x238660(0x14d)],{recipient:_0x347f23,subject:_0x5b6c5c,message:_0xe72e21,sendAt:_0x2e26e}=_0x2e0bca[_0x238660(0x169)],_0x379fca=new Date(_0x2e26e);if(_0x379fca<=new Date())return _0x163e31[_0x238660(0x154)](0x190)[_0x238660(0x14a)]({'error':_0x238660(0x13d)});await Email_1[_0x238660(0x147)][_0x238660(0x164)]({'sender':_0x2e0bca[_0x238660(0x169)]['email'],'subject':_0x2e0bca[_0x238660(0x169)][_0x238660(0x15e)],'message':_0x2e0bca[_0x238660(0x169)][_0x238660(0x14f)],'companyId':_0x279dc4,'scheduled':!![],'sendAt':new Date(_0x2e26e)}),_0x163e31['status'](0xc8)[_0x238660(0x14a)]({'message':_0x238660(0x156)});}catch(_0x464f96){console['error'](_0x238660(0x155),_0x464f96),_0x163e31[_0x238660(0x154)](0x1f4)[_0x238660(0x14a)]({'error':_0x238660(0x141)});}};exports[a18_0x30a3c0(0x175)]=agendarEnvioEmail;const enviarAgendamentosPendentes=async()=>{const _0x37dd14=a18_0x30a3c0;try{const _0x157bcc=(0x0,moment_1['default'])(),_0x3f3590=await Email_1[_0x37dd14(0x147)]['findAll']({'where':{'scheduled':!![],'sendAt':{[sequelize_1['Op'][_0x37dd14(0x140)]]:_0x157bcc['toDate']()}}});for(const _0x390a98 of _0x3f3590){const _0xf14200=await(0x0,EmailService_1[_0x37dd14(0x161)])(_0x390a98['companyId'],_0x390a98['sender'],'',_0x390a98['subject'],_0x390a98['message'],_0x390a98[_0x37dd14(0x13c)]['toISOString'](),'');!_0xf14200['error']?(await _0x390a98[_0x37dd14(0x168)]({'scheduled':![]}),logger[_0x37dd14(0x162)]('E-mail\x20agendado\x20enviado\x20com\x20sucesso\x20para:\x20'+_0x390a98[_0x37dd14(0x173)])):logger[_0x37dd14(0x16b)](_0x37dd14(0x15d)+_0x390a98[_0x37dd14(0x173)]+_0x37dd14(0x16f)+_0xf14200['error']);}}catch(_0x117671){logger[_0x37dd14(0x16b)](_0x37dd14(0x163),_0x117671);}};node_cron_1[a18_0x30a3c0(0x147)][a18_0x30a3c0(0x14c)](a18_0x30a3c0(0x14e),enviarAgendamentosPendentes);