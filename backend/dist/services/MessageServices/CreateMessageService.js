function a444_0x375a(_0x3b4e31,_0x396ea2){const _0x2ae775=a444_0x37ae();return a444_0x375a=function(_0x3497a1,_0x2ce606){_0x3497a1=_0x3497a1-0x71;let _0x37aec3=_0x2ae775[_0x3497a1];return _0x37aec3;},a444_0x375a(_0x3b4e31,_0x396ea2);}const a444_0x58cfc9=a444_0x375a;(function(_0x290c16,_0x67155d){const _0xe57ea6=a444_0x375a,_0x55bd54=_0x290c16();while(!![]){try{const _0x446fdb=-parseInt(_0xe57ea6(0x77))/0x1+-parseInt(_0xe57ea6(0x7f))/0x2*(parseInt(_0xe57ea6(0x89))/0x3)+parseInt(_0xe57ea6(0x8d))/0x4+parseInt(_0xe57ea6(0x8c))/0x5+-parseInt(_0xe57ea6(0x85))/0x6+-parseInt(_0xe57ea6(0x7b))/0x7+parseInt(_0xe57ea6(0x84))/0x8*(parseInt(_0xe57ea6(0x88))/0x9);if(_0x446fdb===_0x67155d)break;else _0x55bd54['push'](_0x55bd54['shift']());}catch(_0x248328){_0x55bd54['push'](_0x55bd54['shift']());}}}(a444_0x37ae,0x35425));const a444_0x2ce606=(function(){let _0x23d05b=!![];return function(_0xfa03a2,_0x28ea2e){const _0x37a054=_0x23d05b?function(){const _0x298957=a444_0x375a;if(_0x28ea2e){const _0x49c5c2=_0x28ea2e[_0x298957(0x7a)](_0xfa03a2,arguments);return _0x28ea2e=null,_0x49c5c2;}}:function(){};return _0x23d05b=![],_0x37a054;};}()),a444_0x3497a1=a444_0x2ce606(this,function(){const _0x104284=a444_0x375a;return a444_0x3497a1[_0x104284(0x93)]()[_0x104284(0x87)](_0x104284(0x72))[_0x104284(0x93)]()[_0x104284(0x80)](a444_0x3497a1)[_0x104284(0x87)](_0x104284(0x72));});a444_0x3497a1();function a444_0x37ae(){const _0xcbbdc8=['975665LMmGFI','1147988gIRdvN','status','emit','queue','ticket','ticketId','toString','company-','__importDefault','findByPk','../../models/Message','(((.+)+)+)+$','contact','queueId','default','reload','123923VBwcHR','-appMessage','-contact','apply','51086UJYfjk','-mainchannel','create','quotedMsg','2ztCham','constructor','ERR_CREATING_MESSAGE','queue-','update','266480pGoZZQ','973074bAVLqe','-notification','search','36ekFWVn','311463dAFpRd','available','whatsapp'];a444_0x37ae=function(){return _0xcbbdc8;};return a444_0x37ae();}'use strict';var __importDefault=this&&this[a444_0x58cfc9(0x95)]||function(_0x42f511){return _0x42f511&&_0x42f511['__esModule']?_0x42f511:{'default':_0x42f511};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const socket_1=require('../../libs/socket'),Message_1=__importDefault(require(a444_0x58cfc9(0x71))),Ticket_1=__importDefault(require('../../models/Ticket')),OldMessage_1=__importDefault(require('../../models/OldMessage')),CreateMessageService=async({messageData:_0x449007,ticket:_0x5246e7,companyId:_0x4240c8})=>{const _0x1e0e2e=a444_0x58cfc9;await Message_1[_0x1e0e2e(0x75)]['upsert']({..._0x449007,'companyId':_0x4240c8});const _0x4232a6=await Message_1[_0x1e0e2e(0x75)][_0x1e0e2e(0x96)](_0x449007['id'],{'include':[_0x1e0e2e(0x73),{'model':Ticket_1[_0x1e0e2e(0x75)],'as':_0x1e0e2e(0x91),'include':['contact',_0x1e0e2e(0x90),_0x1e0e2e(0x8b)]},{'model':Message_1[_0x1e0e2e(0x75)],'as':_0x1e0e2e(0x7e),'include':[_0x1e0e2e(0x73)]},{'model':OldMessage_1[_0x1e0e2e(0x75)],'as':'oldMessages'}]});if(_0x5246e7['contact'])await _0x5246e7[_0x1e0e2e(0x73)][_0x1e0e2e(0x83)]({'presence':_0x1e0e2e(0x8a)}),await _0x5246e7[_0x1e0e2e(0x73)][_0x1e0e2e(0x76)](),_0x5246e7[_0x1e0e2e(0x74)]!==null&&_0x4232a6[_0x1e0e2e(0x74)]===null&&await _0x4232a6[_0x1e0e2e(0x83)]({'queueId':_0x5246e7['queueId']});else throw new Error(_0x1e0e2e(0x81));if(!_0x4232a6)throw new Error(_0x1e0e2e(0x81));const _0x35c727=(0x0,socket_1['getIO'])();return _0x35c727['to'](_0x4232a6[_0x1e0e2e(0x92)][_0x1e0e2e(0x93)]())['to'](_0x1e0e2e(0x94)+_0x4240c8+'-'+_0x5246e7[_0x1e0e2e(0x8e)])['to'](_0x1e0e2e(0x94)+_0x4240c8+_0x1e0e2e(0x86))['to']('queue-'+_0x4232a6[_0x1e0e2e(0x74)]+'-notification')['to'](_0x1e0e2e(0x82)+_0x4232a6[_0x1e0e2e(0x74)]+'-'+_0x5246e7['status'])[_0x1e0e2e(0x8f)]('company-'+_0x4240c8+_0x1e0e2e(0x78),{'action':_0x1e0e2e(0x7d),'message':_0x4232a6,'ticket':_0x5246e7,'contact':_0x5246e7['contact']}),_0x35c727['to']('company-'+_0x4240c8+_0x1e0e2e(0x7c))[_0x1e0e2e(0x8f)]('company-'+_0x4240c8+_0x1e0e2e(0x79),{'action':_0x1e0e2e(0x83),'contact':_0x5246e7['contact']}),_0x4232a6;};exports[a444_0x58cfc9(0x75)]=CreateMessageService;