const a18_0x28a877=a18_0x523c;(function(_0x21db87,_0x5a5eda){const _0x296372=a18_0x523c,_0x31d2aa=_0x21db87();while(!![]){try{const _0x4de8ba=-parseInt(_0x296372(0x90))/0x1+-parseInt(_0x296372(0xa4))/0x2+parseInt(_0x296372(0xc0))/0x3*(-parseInt(_0x296372(0x91))/0x4)+-parseInt(_0x296372(0xad))/0x5+parseInt(_0x296372(0x89))/0x6*(parseInt(_0x296372(0xab))/0x7)+parseInt(_0x296372(0x8c))/0x8*(-parseInt(_0x296372(0xa0))/0x9)+parseInt(_0x296372(0x9f))/0xa;if(_0x4de8ba===_0x5a5eda)break;else _0x31d2aa['push'](_0x31d2aa['shift']());}catch(_0x2b42bb){_0x31d2aa['push'](_0x31d2aa['shift']());}}}(a18_0x517f,0x48339));function a18_0x517f(){const _0x155504=['*/30\x20*\x20*\x20*\x20*\x20*','findAll','Erro\x20ao\x20agendar\x20o\x20envio\x20de\x20e-mail:','not','Erro\x20ao\x20listar\x20e-mails\x20enviados','error','companyId','87Wmpgtk','printf','mensagem','search','default','__importDefault','Erro\x20ao\x20enviar\x20agendamentos\x20pendentes:','json','listarEmailsEnviados','toString','sender','6KqYBgj','constructor','A\x20data\x20de\x20envio\x20deve\x20ser\x20no\x20futuro','48HsCDGn','enviarEmail','winston','Erro\x20ao\x20enviar\x20e-mail:','28119NSqJXp','80DPGXil','format','defineProperty','SendMail',',\x20erro:\x20','node-cron','body','../services/EmailService/EmailService','lte','listarEmailsAgendados','E-mail\x20agendado\x20enviado\x20com\x20sucesso\x20para:\x20','info','update','user','3156020JyccqS','645399jijpvw','Erro\x20ao\x20listar\x20e-mails\x20agendados:','Erro\x20ao\x20enviar\x20e-mail\x20agendado\x20para:\x20','combine','174744GshmNB','subject','Erro\x20ao\x20agendar\x20o\x20envio\x20de\x20e-mail','add','assunto','status','E-mail\x20agendado\x20com\x20sucesso','4087118zGCuXE','__esModule','287010LHwKab','timestamp','Erro\x20ao\x20enviar\x20e-mail','Erro\x20ao\x20listar\x20e-mails\x20enviados:','apply','toDate','E-mail\x20enviado\x20com\x20sucesso','Erro\x20ao\x20listar\x20e-mails\x20agendados','hour','(((.+)+)+)+$','email','sequelize'];a18_0x517f=function(){return _0x155504;};return a18_0x517f();}function a18_0x523c(_0x1da578,_0xeb1a48){const _0x3d79e4=a18_0x517f();return a18_0x523c=function(_0xed043b,_0x41462b){_0xed043b=_0xed043b-0x87;let _0x517fbd=_0x3d79e4[_0xed043b];return _0x517fbd;},a18_0x523c(_0x1da578,_0xeb1a48);}const a18_0x41462b=(function(){let _0x1dfb77=!![];return function(_0x34f574,_0xfebe48){const _0x53151e=_0x1dfb77?function(){const _0x1ca379=a18_0x523c;if(_0xfebe48){const _0x30aa46=_0xfebe48[_0x1ca379(0xb1)](_0x34f574,arguments);return _0xfebe48=null,_0x30aa46;}}:function(){};return _0x1dfb77=![],_0x53151e;};}()),a18_0xed043b=a18_0x41462b(this,function(){const _0x21908=a18_0x523c;return a18_0xed043b['toString']()[_0x21908(0xc3)](_0x21908(0xb6))[_0x21908(0x87)]()[_0x21908(0x8a)](a18_0xed043b)[_0x21908(0xc3)](_0x21908(0xb6));});a18_0xed043b();'use strict';var __importDefault=this&&this[a18_0x28a877(0xc5)]||function(_0xa0c964){return _0xa0c964&&_0xa0c964['__esModule']?_0xa0c964:{'default':_0xa0c964};};Object[a18_0x28a877(0x93)](exports,a18_0x28a877(0xac),{'value':!![]}),exports['agendarEnvioEmail']=exports[a18_0x28a877(0x9a)]=exports['listarEmailsEnviados']=exports[a18_0x28a877(0x8d)]=void 0x0;const EmailService_1=require(a18_0x28a877(0x98)),Email_1=__importDefault(require('../models/Email')),moment_1=__importDefault(require('moment')),node_cron_1=__importDefault(require(a18_0x28a877(0x96))),sequelize_1=require(a18_0x28a877(0xb8)),winston_1=__importDefault(require(a18_0x28a877(0x8e))),logger=winston_1[a18_0x28a877(0xc4)]['createLogger']({'level':'info','format':winston_1[a18_0x28a877(0xc4)][a18_0x28a877(0x92)][a18_0x28a877(0xa3)](winston_1['default'][a18_0x28a877(0x92)][a18_0x28a877(0xae)](),winston_1[a18_0x28a877(0xc4)][a18_0x28a877(0x92)][a18_0x28a877(0xc1)](({timestamp:_0x64de4e,level:_0x1be244,message:_0x42a620})=>{return _0x64de4e+'\x20'+_0x1be244+':\x20'+_0x42a620;})),'transports':[new winston_1[(a18_0x28a877(0xc4))]['transports']['Console']()]}),enviarEmail=async(_0x18b8b9,_0x283bea)=>{const _0x238534=a18_0x28a877;try{const _0x4b006b=_0x18b8b9[_0x238534(0x9e)]['companyId'],{email:_0x1a0949,tokenSenha:_0x4e736c,assunto:_0x1db384,mensagem:_0x11bdb5}=_0x18b8b9[_0x238534(0x97)],_0x5725c1=(0x0,moment_1[_0x238534(0xc4)])()[_0x238534(0xa7)](0x1,_0x238534(0xb5))[_0x238534(0x92)]('YYYY-MM-DDTHH:mm'),_0x56552f=await(0x0,EmailService_1['SendMail'])(_0x4b006b,_0x1a0949,_0x4e736c,_0x1db384,_0x11bdb5,_0x5725c1);if(_0x56552f[_0x238534(0xbe)])return _0x283bea['status'](0x1f4)['json']({'error':_0x56552f[_0x238534(0xbe)]});_0x283bea['status'](0xc8)['json']({'message':_0x238534(0xb3)});}catch(_0x456f36){console[_0x238534(0xbe)](_0x238534(0x8f),_0x456f36),_0x283bea[_0x238534(0xa9)](0x1f4)[_0x238534(0xc7)]({'error':_0x238534(0xaf)});}};exports[a18_0x28a877(0x8d)]=enviarEmail;const listarEmailsEnviados=async(_0x4b7b05,_0x21661a)=>{const _0x382130=a18_0x28a877;try{const _0x21b522=await Email_1[_0x382130(0xc4)]['findAll']({'where':{'companyId':_0x4b7b05[_0x382130(0x9e)]['companyId'],'scheduled':null,'sendAt':null}});_0x21661a[_0x382130(0xa9)](0xc8)['json'](_0x21b522);}catch(_0x39ce4e){console[_0x382130(0xbe)](_0x382130(0xb0),_0x39ce4e),_0x21661a[_0x382130(0xa9)](0x1f4)[_0x382130(0xc7)]({'error':_0x382130(0xbd)});}};exports[a18_0x28a877(0xc8)]=listarEmailsEnviados;const listarEmailsAgendados=async(_0x239200,_0x44c5d4)=>{const _0x1c4f32=a18_0x28a877;try{const _0x2fe154=await Email_1['default'][_0x1c4f32(0xba)]({'where':{'companyId':_0x239200[_0x1c4f32(0x9e)][_0x1c4f32(0xbf)],'scheduled':!![],'sendAt':{[sequelize_1['Op'][_0x1c4f32(0xbc)]]:null}}});_0x44c5d4[_0x1c4f32(0xa9)](0xc8)[_0x1c4f32(0xc7)](_0x2fe154);}catch(_0x4665b8){console[_0x1c4f32(0xbe)](_0x1c4f32(0xa1),_0x4665b8),_0x44c5d4['status'](0x1f4)['json']({'error':_0x1c4f32(0xb4)});}};exports['listarEmailsAgendados']=listarEmailsAgendados;const agendarEnvioEmail=async(_0x21712c,_0x13e4e5)=>{const _0x414828=a18_0x28a877;try{const _0x617164=_0x21712c[_0x414828(0x9e)][_0x414828(0xbf)],{recipient:_0x20517b,subject:_0x1628b6,message:_0x38dd03,sendAt:_0x935060}=_0x21712c['body'],_0x42b69f=new Date(_0x935060);if(_0x42b69f<=new Date())return _0x13e4e5['status'](0x190)[_0x414828(0xc7)]({'error':_0x414828(0x8b)});await Email_1[_0x414828(0xc4)]['create']({'sender':_0x21712c[_0x414828(0x97)][_0x414828(0xb7)],'subject':_0x21712c[_0x414828(0x97)][_0x414828(0xa8)],'message':_0x21712c['body'][_0x414828(0xc2)],'companyId':_0x617164,'scheduled':!![],'sendAt':new Date(_0x935060)}),_0x13e4e5['status'](0xc8)[_0x414828(0xc7)]({'message':_0x414828(0xaa)});}catch(_0x8f0688){console[_0x414828(0xbe)](_0x414828(0xbb),_0x8f0688),_0x13e4e5['status'](0x1f4)['json']({'error':_0x414828(0xa6)});}};exports['agendarEnvioEmail']=agendarEnvioEmail;const enviarAgendamentosPendentes=async()=>{const _0x1d1a01=a18_0x28a877;try{const _0x12a531=(0x0,moment_1[_0x1d1a01(0xc4)])(),_0x2b2ec3=await Email_1['default']['findAll']({'where':{'scheduled':!![],'sendAt':{[sequelize_1['Op'][_0x1d1a01(0x99)]]:_0x12a531[_0x1d1a01(0xb2)]()}}});for(const _0x3e750e of _0x2b2ec3){const _0x44a475=await(0x0,EmailService_1[_0x1d1a01(0x94)])(_0x3e750e[_0x1d1a01(0xbf)],_0x3e750e[_0x1d1a01(0x88)],'',_0x3e750e[_0x1d1a01(0xa5)],_0x3e750e['message'],_0x3e750e['sendAt']['toISOString'](),'');!_0x44a475[_0x1d1a01(0xbe)]?(await _0x3e750e[_0x1d1a01(0x9d)]({'scheduled':![]}),logger[_0x1d1a01(0x9c)](_0x1d1a01(0x9b)+_0x3e750e[_0x1d1a01(0x88)])):logger[_0x1d1a01(0xbe)](_0x1d1a01(0xa2)+_0x3e750e[_0x1d1a01(0x88)]+_0x1d1a01(0x95)+_0x44a475[_0x1d1a01(0xbe)]);}}catch(_0x42c56d){logger[_0x1d1a01(0xbe)](_0x1d1a01(0xc6),_0x42c56d);}};node_cron_1[a18_0x28a877(0xc4)]['schedule'](a18_0x28a877(0xb9),enviarAgendamentosPendentes);