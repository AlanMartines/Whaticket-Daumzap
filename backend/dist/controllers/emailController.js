function a18_0x5a6a(){const _0x1bda8b=['update','SendMail','transports','sender','info','default','*/30\x20*\x20*\x20*\x20*\x20*','companyId','listarEmailsAgendados','search','Erro\x20ao\x20agendar\x20o\x20envio\x20de\x20e-mail:','toDate','24GJyWSO','message','9KluiCE','status','__esModule','schedule','3908268hgwFKW','Erro\x20ao\x20agendar\x20o\x20envio\x20de\x20e-mail','350830mphHVw','928MaqeAX','assunto','(((.+)+)+)+$','createLogger','40691HVYxHD','../models/Email','E-mail\x20agendado\x20com\x20sucesso','defineProperty','winston','878387PxRFIH','format','timestamp','combine','sequelize','enviarEmail','apply','Erro\x20ao\x20enviar\x20agendamentos\x20pendentes:','Erro\x20ao\x20enviar\x20e-mail','2383348CXrjWr','hour','Erro\x20ao\x20listar\x20e-mails\x20agendados','agendarEnvioEmail','add','A\x20data\x20de\x20envio\x20deve\x20ser\x20no\x20futuro','Erro\x20ao\x20enviar\x20e-mail\x20agendado\x20para:\x20','listarEmailsEnviados','subject','891908eRtHqu','Erro\x20ao\x20listar\x20e-mails\x20enviados:','user','node-cron','findAll','Erro\x20ao\x20listar\x20e-mails\x20enviados','3345250BlYblv','json','mensagem','error','YYYY-MM-DDTHH:mm','email','body','not','Erro\x20ao\x20enviar\x20e-mail:','lte','E-mail\x20enviado\x20com\x20sucesso','moment','Erro\x20ao\x20listar\x20e-mails\x20agendados:'];a18_0x5a6a=function(){return _0x1bda8b;};return a18_0x5a6a();}const a18_0x483bbf=a18_0x9be6;(function(_0x6feeb,_0x3240dd){const _0x411c34=a18_0x9be6,_0x2aa87a=_0x6feeb();while(!![]){try{const _0x2125f3=-parseInt(_0x411c34(0x137))/0x1+parseInt(_0x411c34(0x149))/0x2+parseInt(_0x411c34(0x12b))/0x3+parseInt(_0x411c34(0x140))/0x4+-parseInt(_0x411c34(0x12d))/0x5*(parseInt(_0x411c34(0x125))/0x6)+parseInt(_0x411c34(0x132))/0x7*(-parseInt(_0x411c34(0x12e))/0x8)+parseInt(_0x411c34(0x127))/0x9*(parseInt(_0x411c34(0x10c))/0xa);if(_0x2125f3===_0x3240dd)break;else _0x2aa87a['push'](_0x2aa87a['shift']());}catch(_0x25a1cf){_0x2aa87a['push'](_0x2aa87a['shift']());}}}(a18_0x5a6a,0xce791));const a18_0x285ae8=(function(){let _0x1f64fd=!![];return function(_0x24926e,_0xaa35d9){const _0x26c5b1=_0x1f64fd?function(){const _0x84053c=a18_0x9be6;if(_0xaa35d9){const _0x5736c5=_0xaa35d9[_0x84053c(0x13d)](_0x24926e,arguments);return _0xaa35d9=null,_0x5736c5;}}:function(){};return _0x1f64fd=![],_0x26c5b1;};}()),a18_0x3cf75c=a18_0x285ae8(this,function(){const _0x46a9cb=a18_0x9be6;return a18_0x3cf75c['toString']()['search'](_0x46a9cb(0x130))['toString']()['constructor'](a18_0x3cf75c)[_0x46a9cb(0x122)](_0x46a9cb(0x130));});a18_0x3cf75c();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x14160e){const _0x180180=a18_0x9be6;return _0x14160e&&_0x14160e[_0x180180(0x129)]?_0x14160e:{'default':_0x14160e};};Object[a18_0x483bbf(0x135)](exports,a18_0x483bbf(0x129),{'value':!![]}),exports[a18_0x483bbf(0x143)]=exports[a18_0x483bbf(0x121)]=exports[a18_0x483bbf(0x147)]=exports[a18_0x483bbf(0x13c)]=void 0x0;function a18_0x9be6(_0x1614d3,_0x5ad295){const _0x803551=a18_0x5a6a();return a18_0x9be6=function(_0x3cf75c,_0x285ae8){_0x3cf75c=_0x3cf75c-0x10a;let _0x5a6a3e=_0x803551[_0x3cf75c];return _0x5a6a3e;},a18_0x9be6(_0x1614d3,_0x5ad295);}const EmailService_1=require('../services/EmailService/EmailService'),Email_1=__importDefault(require(a18_0x483bbf(0x133))),moment_1=__importDefault(require(a18_0x483bbf(0x117))),node_cron_1=__importDefault(require(a18_0x483bbf(0x14c))),sequelize_1=require(a18_0x483bbf(0x13b)),winston_1=__importDefault(require(a18_0x483bbf(0x136))),logger=winston_1['default'][a18_0x483bbf(0x131)]({'level':a18_0x483bbf(0x11d),'format':winston_1[a18_0x483bbf(0x11e)][a18_0x483bbf(0x138)][a18_0x483bbf(0x13a)](winston_1[a18_0x483bbf(0x11e)][a18_0x483bbf(0x138)][a18_0x483bbf(0x139)](),winston_1[a18_0x483bbf(0x11e)]['format']['printf'](({timestamp:_0x574d13,level:_0x2d1b7e,message:_0x1b84d9})=>{return _0x574d13+'\x20'+_0x2d1b7e+':\x20'+_0x1b84d9;})),'transports':[new winston_1[(a18_0x483bbf(0x11e))][(a18_0x483bbf(0x11b))]['Console']()]}),enviarEmail=async(_0xf605c0,_0x5d35e9)=>{const _0x8c48c8=a18_0x483bbf;try{const _0x21b4a7=_0xf605c0[_0x8c48c8(0x14b)][_0x8c48c8(0x120)],{email:_0x3f1b6d,tokenSenha:_0x1c5a36,assunto:_0x3f4c89,mensagem:_0x425d8d}=_0xf605c0[_0x8c48c8(0x112)],_0x53cad9=(0x0,moment_1['default'])()[_0x8c48c8(0x144)](0x1,_0x8c48c8(0x141))[_0x8c48c8(0x138)](_0x8c48c8(0x110)),_0x318e16=await(0x0,EmailService_1[_0x8c48c8(0x11a)])(_0x21b4a7,_0x3f1b6d,_0x1c5a36,_0x3f4c89,_0x425d8d,_0x53cad9);if(_0x318e16[_0x8c48c8(0x10f)])return _0x5d35e9[_0x8c48c8(0x128)](0x1f4)[_0x8c48c8(0x10d)]({'error':_0x318e16[_0x8c48c8(0x10f)]});_0x5d35e9[_0x8c48c8(0x128)](0xc8)[_0x8c48c8(0x10d)]({'message':_0x8c48c8(0x116)});}catch(_0x169f7c){console[_0x8c48c8(0x10f)](_0x8c48c8(0x114),_0x169f7c),_0x5d35e9['status'](0x1f4)['json']({'error':_0x8c48c8(0x13f)});}};exports[a18_0x483bbf(0x13c)]=enviarEmail;const listarEmailsEnviados=async(_0x54dade,_0x564e63)=>{const _0x126451=a18_0x483bbf;try{const _0x22e659=await Email_1['default'][_0x126451(0x10a)]({'where':{'companyId':_0x54dade[_0x126451(0x14b)][_0x126451(0x120)],'scheduled':null,'sendAt':null}});_0x564e63[_0x126451(0x128)](0xc8)[_0x126451(0x10d)](_0x22e659);}catch(_0x55ab07){console[_0x126451(0x10f)](_0x126451(0x14a),_0x55ab07),_0x564e63['status'](0x1f4)['json']({'error':_0x126451(0x10b)});}};exports['listarEmailsEnviados']=listarEmailsEnviados;const listarEmailsAgendados=async(_0x5bebf7,_0x5f1fe5)=>{const _0x415e75=a18_0x483bbf;try{const _0x18318c=await Email_1[_0x415e75(0x11e)]['findAll']({'where':{'companyId':_0x5bebf7[_0x415e75(0x14b)]['companyId'],'scheduled':!![],'sendAt':{[sequelize_1['Op'][_0x415e75(0x113)]]:null}}});_0x5f1fe5[_0x415e75(0x128)](0xc8)['json'](_0x18318c);}catch(_0x59d933){console['error'](_0x415e75(0x118),_0x59d933),_0x5f1fe5[_0x415e75(0x128)](0x1f4)[_0x415e75(0x10d)]({'error':_0x415e75(0x142)});}};exports[a18_0x483bbf(0x121)]=listarEmailsAgendados;const agendarEnvioEmail=async(_0xdf4a23,_0x24cefd)=>{const _0x215616=a18_0x483bbf;try{const _0x3c6ddf=_0xdf4a23[_0x215616(0x14b)][_0x215616(0x120)],{recipient:_0x51da80,subject:_0x1f3d6d,message:_0x3146a6,sendAt:_0x38793c}=_0xdf4a23['body'],_0x2ba5d7=new Date(_0x38793c);if(_0x2ba5d7<=new Date())return _0x24cefd[_0x215616(0x128)](0x190)[_0x215616(0x10d)]({'error':_0x215616(0x145)});await Email_1[_0x215616(0x11e)]['create']({'sender':_0xdf4a23['body'][_0x215616(0x111)],'subject':_0xdf4a23[_0x215616(0x112)][_0x215616(0x12f)],'message':_0xdf4a23[_0x215616(0x112)][_0x215616(0x10e)],'companyId':_0x3c6ddf,'scheduled':!![],'sendAt':new Date(_0x38793c)}),_0x24cefd[_0x215616(0x128)](0xc8)['json']({'message':_0x215616(0x134)});}catch(_0x32225a){console[_0x215616(0x10f)](_0x215616(0x123),_0x32225a),_0x24cefd[_0x215616(0x128)](0x1f4)['json']({'error':_0x215616(0x12c)});}};exports['agendarEnvioEmail']=agendarEnvioEmail;const enviarAgendamentosPendentes=async()=>{const _0x27d543=a18_0x483bbf;try{const _0xca04ee=(0x0,moment_1[_0x27d543(0x11e)])(),_0x2a9eca=await Email_1[_0x27d543(0x11e)][_0x27d543(0x10a)]({'where':{'scheduled':!![],'sendAt':{[sequelize_1['Op'][_0x27d543(0x115)]]:_0xca04ee[_0x27d543(0x124)]()}}});for(const _0x12ebaa of _0x2a9eca){const _0x16b620=await(0x0,EmailService_1[_0x27d543(0x11a)])(_0x12ebaa[_0x27d543(0x120)],_0x12ebaa[_0x27d543(0x11c)],'',_0x12ebaa[_0x27d543(0x148)],_0x12ebaa[_0x27d543(0x126)],_0x12ebaa['sendAt']['toISOString'](),'');!_0x16b620[_0x27d543(0x10f)]?(await _0x12ebaa[_0x27d543(0x119)]({'scheduled':![]}),logger['info']('E-mail\x20agendado\x20enviado\x20com\x20sucesso\x20para:\x20'+_0x12ebaa[_0x27d543(0x11c)])):logger[_0x27d543(0x10f)](_0x27d543(0x146)+_0x12ebaa['sender']+',\x20erro:\x20'+_0x16b620[_0x27d543(0x10f)]);}}catch(_0x3e7d7f){logger['error'](_0x27d543(0x13e),_0x3e7d7f);}};node_cron_1['default'][a18_0x483bbf(0x12a)](a18_0x483bbf(0x11f),enviarAgendamentosPendentes);