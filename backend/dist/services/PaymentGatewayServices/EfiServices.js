const a450_0x256d5e=a450_0x4894;(function(_0x5e27ce,_0xad80af){const _0x4040bc=a450_0x4894,_0x6b142b=_0x5e27ce();while(!![]){try{const _0xae51c4=parseInt(_0x4040bc(0x1a9))/0x1+parseInt(_0x4040bc(0x1b6))/0x2+-parseInt(_0x4040bc(0x1a7))/0x3*(parseInt(_0x4040bc(0x1b3))/0x4)+parseInt(_0x4040bc(0x1bf))/0x5*(parseInt(_0x4040bc(0x1d3))/0x6)+parseInt(_0x4040bc(0x1ce))/0x7*(-parseInt(_0x4040bc(0x199))/0x8)+parseInt(_0x4040bc(0x1ae))/0x9+-parseInt(_0x4040bc(0x192))/0xa*(-parseInt(_0x4040bc(0x196))/0xb);if(_0xae51c4===_0xad80af)break;else _0x6b142b['push'](_0x6b142b['shift']());}catch(_0x3859b1){_0x6b142b['push'](_0x6b142b['shift']());}}}(a450_0x5c9c,0xb3e40));const a450_0x3501d5=(function(){let _0x503135=!![];return function(_0x30383a,_0x1d5c6e){const _0x49988f=_0x503135?function(){const _0x18edf8=a450_0x4894;if(_0x1d5c6e){const _0x3d1140=_0x1d5c6e[_0x18edf8(0x1b0)](_0x30383a,arguments);return _0x1d5c6e=null,_0x3d1140;}}:function(){};return _0x503135=![],_0x49988f;};}()),a450_0x478194=a450_0x3501d5(this,function(){const _0x254d23=a450_0x4894;return a450_0x478194[_0x254d23(0x19f)]()[_0x254d23(0x1a0)](_0x254d23(0x18d))['toString']()[_0x254d23(0x1d9)](a450_0x478194)[_0x254d23(0x1a0)](_0x254d23(0x18d));});a450_0x478194();'use strict';var __importDefault=this&&this[a450_0x256d5e(0x1a8)]||function(_0x57ef47){const _0x1bd7aa=a450_0x256d5e;return _0x57ef47&&_0x57ef47[_0x1bd7aa(0x1b9)]?_0x57ef47:{'default':_0x57ef47};};Object[a450_0x256d5e(0x1cd)](exports,a450_0x256d5e(0x1b9),{'value':!![]}),exports['efiCreateSubscription']=exports[a450_0x256d5e(0x18a)]=exports[a450_0x256d5e(0x1a4)]=exports[a450_0x256d5e(0x197)]=void 0x0;const sdk_node_apis_efi_1=__importDefault(require(a450_0x256d5e(0x1b4))),path_1=__importDefault(require('path')),GetSuperSettingService_1=__importDefault(require(a450_0x256d5e(0x18e))),logger_1=require(a450_0x256d5e(0x198)),Invoices_1=__importDefault(require(a450_0x256d5e(0x1cb))),Company_1=__importDefault(require(a450_0x256d5e(0x187))),AppError_1=__importDefault(require(a450_0x256d5e(0x1b8))),PaymentGatewayServices_1=require(a450_0x256d5e(0x19d)),webhookUrl=process[a450_0x256d5e(0x1be)]['BACKEND_URL']+a450_0x256d5e(0x1a3);async function getEfiOptions(){const _0x402278=a450_0x256d5e,_0x35b0b7=path_1[_0x402278(0x1a2)]['join'](__dirname,_0x402278(0x1b2)+await(0x0,GetSuperSettingService_1['default'])({'key':'_efiCertFile'}));return{'sandbox':![],'client_id':await(0x0,GetSuperSettingService_1['default'])({'key':_0x402278(0x1d1)}),'client_secret':await(0x0,GetSuperSettingService_1['default'])({'key':'_efiClientSecret'}),'pix_cert':_0x35b0b7,'validateMtls':![]};}const newEfiPayInstance=async()=>{const _0x1f69ef=a450_0x256d5e,_0x5d0ea5=await getEfiOptions();return new sdk_node_apis_efi_1[(_0x1f69ef(0x1a2))](_0x5d0ea5);},createWebHook=async _0x2b84a5=>{const _0xe8268e=a450_0x256d5e,_0x15465c={'chave':await(0x0,GetSuperSettingService_1['default'])({'key':_0xe8268e(0x193)})},_0x461722={'webhookUrl':webhookUrl};return _0x2b84a5[_0xe8268e(0x1c5)](_0x15465c,_0x461722)[_0xe8268e(0x1bc)](_0x13ca02=>{const _0x11e823=_0xe8268e;logger_1[_0x11e823(0x1c6)][_0x11e823(0x1a5)]({'result':_0x13ca02},_0x11e823(0x1ad));},_0x3d148c=>{const _0x2e770e=_0xe8268e;logger_1[_0x2e770e(0x1c6)][_0x2e770e(0x1d0)]({'result':_0x3d148c},'pixConfigWebhook\x20error:');});},efiInitialize=async()=>{const _0x484d46=a450_0x256d5e,_0x558314=await(0x0,GetSuperSettingService_1[_0x484d46(0x1a2)])({'key':'_paymentGateway'});if(!webhookUrl[_0x484d46(0x191)](_0x484d46(0x1ab))){logger_1['logger'][_0x484d46(0x18b)](_0x484d46(0x189));return;}try{if(_0x558314===_0x484d46(0x19e)){const _0x5d23d2=await getEfiOptions(),_0x3782d0=new sdk_node_apis_efi_1[(_0x484d46(0x1a2))](_0x5d23d2),_0x76857={'chave':await(0x0,GetSuperSettingService_1[_0x484d46(0x1a2)])({'key':_0x484d46(0x193)})};_0x3782d0['pixDetailWebhook'](_0x76857)[_0x484d46(0x1bc)](_0x38ab74=>{const _0x24d0ec=_0x484d46;_0x38ab74?.[_0x24d0ec(0x1d8)]!==webhookUrl?createWebHook(_0x3782d0):logger_1[_0x24d0ec(0x1c6)][_0x24d0ec(0x18b)]({'result':_0x38ab74},'efiInitialize:\x20webhook\x20correto\x20já\x20instalado');},_0x248712=>{const _0x2e86e4=_0x484d46;_0x248712?.['nome']===_0x2e86e4(0x1c2)?createWebHook(_0x3782d0):logger_1[_0x2e86e4(0x1c6)][_0x2e86e4(0x1d0)](_0x248712,_0x2e86e4(0x1b5));});}}catch(_0x30cdce){logger_1[_0x484d46(0x1c6)]['error'](_0x30cdce,_0x484d46(0x1d5));}};exports[a450_0x256d5e(0x197)]=efiInitialize;function a450_0x4894(_0x3dcada,_0x364567){const _0x46e6d4=a450_0x5c9c();return a450_0x4894=function(_0x478194,_0x3501d5){_0x478194=_0x478194-0x187;let _0x5c9c2f=_0x46e6d4[_0x478194];return _0x5c9c2f;},a450_0x4894(_0x3dcada,_0x364567);}const efiWebhook=async(_0x42b607,_0x31335c)=>{const _0x2a4ddb=a450_0x256d5e,{evento:_0x289490}=_0x42b607[_0x2a4ddb(0x19a)];if(_0x289490===_0x2a4ddb(0x18f))return _0x31335c['json']({'ok':!![]});return _0x42b607[_0x2a4ddb(0x19a)][_0x2a4ddb(0x1c4)]&&await Promise[_0x2a4ddb(0x1ba)](_0x42b607[_0x2a4ddb(0x19a)][_0x2a4ddb(0x1c4)][_0x2a4ddb(0x1d2)](async _0x8014b4=>{const _0x104b9c=_0x2a4ddb;logger_1['logger'][_0x104b9c(0x18b)](_0x8014b4,_0x104b9c(0x1b1));const _0x4b2613=await Invoices_1[_0x104b9c(0x1a2)]['findOne']({'where':{'txId':_0x8014b4[_0x104b9c(0x1cf)],'status':_0x104b9c(0x1c7)},'include':[{'model':Company_1[_0x104b9c(0x1a2)],'as':'company'}]});if(!_0x4b2613){logger_1[_0x104b9c(0x1c6)][_0x104b9c(0x18b)]('efiWebhook:\x20Invoice\x20not\x20found\x20or\x20already\x20paid');return;}const _0x1f7d46=parseFloat(_0x8014b4[_0x104b9c(0x1af)]);if(_0x1f7d46<_0x4b2613['value']){logger_1[_0x104b9c(0x1c6)][_0x104b9c(0x18b)](_0x104b9c(0x188));return;}await(0x0,PaymentGatewayServices_1[_0x104b9c(0x1d4)])(_0x4b2613);})),_0x31335c[_0x2a4ddb(0x1b7)]({'ok':!![]});};exports['efiWebhook']=efiWebhook;const efiCheckStatus=async(_0x57eee6,_0x488b8c=null)=>{const _0x49188a=a450_0x256d5e;try{!_0x488b8c&&(_0x488b8c=await newEfiPayInstance());const _0x1cc4b1=await _0x488b8c[_0x49188a(0x1d7)]({'txid':_0x57eee6[_0x49188a(0x1ac)]});if(_0x1cc4b1[_0x49188a(0x18c)]!==_0x49188a(0x190))return![];const {pix:_0x2c59a0}=_0x1cc4b1,_0x388c75=parseFloat(_0x2c59a0[0x0]['valor']);if(_0x388c75>=_0x57eee6['value'])return await(0x0,PaymentGatewayServices_1[_0x49188a(0x1d4)])(_0x57eee6),!![];return![];}catch(_0x1aef15){logger_1[_0x49188a(0x1c6)][_0x49188a(0x1d0)](_0x1aef15,_0x49188a(0x1a1));}return![];};exports[a450_0x256d5e(0x18a)]=efiCheckStatus;const efiPollCheckStatus=async(_0x15437b,_0x235272,_0x192715=0xa,_0x14047e=0x7530)=>{let _0x406443=0x0;async function _0x2ebd1d(){const _0x59c3ee=a450_0x4894;await _0x235272[_0x59c3ee(0x1d6)]();if(_0x235272[_0x59c3ee(0x18c)]===_0x59c3ee(0x1c1)){logger_1[_0x59c3ee(0x1c6)][_0x59c3ee(0x18b)](_0x59c3ee(0x1a6)+_0x235272['id']+_0x59c3ee(0x1bb));return;}const _0x210709=await(0x0,exports[_0x59c3ee(0x18a)])(_0x235272,_0x15437b);if(_0x210709)return;_0x406443+=0x1;if(_0x406443>=_0x192715){(0x0,PaymentGatewayServices_1[_0x59c3ee(0x1c3)])(_0x235272);return;}await new Promise(_0x206686=>setTimeout(_0x206686,_0x14047e)),await _0x2ebd1d();}return _0x2ebd1d();},efiCreateSubscription=async(_0x2e3781,_0x582770)=>{const _0x4185ba=a450_0x256d5e,{price:_0x3390fb,invoiceId:_0x4a97ad}=_0x2e3781[_0x4185ba(0x19a)],_0x3b5da0=parseFloat(_0x3390fb),_0x1f75da={'calendario':{'expiracao':0x12c},'valor':{'original':_0x3b5da0[_0x4185ba(0x1ca)](_0x4185ba(0x19c),{'minimumFractionDigits':0x2})[_0x4185ba(0x194)](',','.')},'chave':await(0x0,GetSuperSettingService_1[_0x4185ba(0x1a2)])({'key':_0x4185ba(0x193)}),'solicitacaoPagador':_0x4185ba(0x1c8)+_0x4a97ad},_0x5ced59=await getEfiOptions();try{const _0x24420f=await Invoices_1[_0x4185ba(0x1a2)][_0x4185ba(0x1c9)](_0x4a97ad);if(!_0x24420f)throw new Error('Invoice\x20not\x20found');await(0x0,exports[_0x4185ba(0x197)])();const _0xdb237b=new sdk_node_apis_efi_1[(_0x4185ba(0x1a2))](_0x5ced59),_0x5b471=await _0xdb237b[_0x4185ba(0x195)]([],_0x1f75da);return await _0x24420f[_0x4185ba(0x1aa)]({'txId':_0x5b471[_0x4185ba(0x1cf)],'payGw':_0x4185ba(0x19e),'payGwData':JSON[_0x4185ba(0x19b)](_0x5b471)}),await _0x24420f['reload'](),efiPollCheckStatus(_0xdb237b,_0x24420f),_0x582770[_0x4185ba(0x1b7)]({'qrcode':{'qrcode':_0x5b471['pixCopiaECola']},'valor':{'original':_0x1f75da['valor'][_0x4185ba(0x1bd)]}});}catch(_0x5d3185){logger_1[_0x4185ba(0x1c6)][_0x4185ba(0x1d0)]({'efiOptions':_0x5ced59,'error':_0x5d3185},'efiCreateSubscription\x20error');throw new AppError_1[(_0x4185ba(0x1a2))](_0x4185ba(0x1c0),0x190);}};function a450_0x5c9c(){const _0x4a715b=['toLocaleString','../../models/Invoices','efiCreateSubscription','defineProperty','7ouoBjZ','txid','error','_efiClientId','map','6WmgVzD','processInvoicePaid','efiInitialize:\x20','reload','pixDetailCharge','webhookUrl','constructor','../../models/Company','Recebido\x20valor\x20menor','efiInitialize:\x20only\x20SSL\x20webhooks\x20are\x20supported','efiCheckStatus','debug','status','(((.+)+)+)+$','../SettingServices/GetSuperSettingService','teste_webhook','CONCLUIDA','startsWith','10pMhTkp','_efiPixKey','replace','pixCreateImmediateCharge','13761506gNTdrH','efiInitialize','../../utils/logger','2176312KmROKH','body','stringify','pt-br','./PaymentGatewayServices','efi','toString','search','Error\x20getting\x20detail\x20of\x20txid','default','/subscription/aa/webhook','efiWebhook','info','efiPollCheckStatus:\x20Invoice\x20','81bRiiac','__importDefault','194572bkgGee','update','https://','txId','pixConfigWebhook\x20ok','4303440GNxUgH','valor','apply','Processando\x20pagamento','../../../private/','184684eNqnXo','sdk-node-apis-efi','efiInitialize:\x20fail\x20to\x20verify\x20current\x20webhook','636256uceUBy','json','../../errors/AppError','__esModule','all','\x20already\x20paid,\x20finishing\x20polling','then','original','env','67910DzXwoJ','Problema\x20encontrado,\x20entre\x20em\x20contato\x20com\x20o\x20suporte!','paid','webhook_nao_encontrado','processInvoiceExpired','pix','pixConfigWebhook','logger','open','#Fatura:','findByPk'];a450_0x5c9c=function(){return _0x4a715b;};return a450_0x5c9c();}exports[a450_0x256d5e(0x1cc)]=efiCreateSubscription;