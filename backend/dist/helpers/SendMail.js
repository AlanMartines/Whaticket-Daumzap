const a243_0x1b443d=a243_0x3aa2;(function(_0x2e484e,_0x3fe256){const _0x612bae=a243_0x3aa2,_0x404ce1=_0x2e484e();while(!![]){try{const _0x583ea3=parseInt(_0x612bae(0x152))/0x1*(-parseInt(_0x612bae(0x15e))/0x2)+parseInt(_0x612bae(0x15d))/0x3+parseInt(_0x612bae(0x158))/0x4*(-parseInt(_0x612bae(0x166))/0x5)+parseInt(_0x612bae(0x165))/0x6+parseInt(_0x612bae(0x157))/0x7*(parseInt(_0x612bae(0x14d))/0x8)+-parseInt(_0x612bae(0x156))/0x9*(-parseInt(_0x612bae(0x149))/0xa)+parseInt(_0x612bae(0x15c))/0xb*(parseInt(_0x612bae(0x15f))/0xc);if(_0x583ea3===_0x3fe256)break;else _0x404ce1['push'](_0x404ce1['shift']());}catch(_0x4f2d43){_0x404ce1['push'](_0x404ce1['shift']());}}}(a243_0xc240,0x83690));const a243_0x4bc462=(function(){let _0x4cddca=!![];return function(_0x4597c1,_0x342fad){const _0xaa7526=_0x4cddca?function(){const _0x11134c=a243_0x3aa2;if(_0x342fad){const _0x2027d5=_0x342fad[_0x11134c(0x14a)](_0x4597c1,arguments);return _0x342fad=null,_0x2027d5;}}:function(){};return _0x4cddca=![],_0xaa7526;};}()),a243_0x70d107=a243_0x4bc462(this,function(){const _0x2d5e38=a243_0x3aa2;return a243_0x70d107['toString']()[_0x2d5e38(0x164)](_0x2d5e38(0x160))[_0x2d5e38(0x154)]()[_0x2d5e38(0x15a)](a243_0x70d107)[_0x2d5e38(0x164)](_0x2d5e38(0x160));});a243_0x70d107();'use strict';var __importDefault=this&&this[a243_0x1b443d(0x14e)]||function(_0x16eb8b){const _0x3499ac=a243_0x1b443d;return _0x16eb8b&&_0x16eb8b[_0x3499ac(0x159)]?_0x16eb8b:{'default':_0x16eb8b};};Object[a243_0x1b443d(0x155)](exports,'__esModule',{'value':!![]}),exports[a243_0x1b443d(0x14c)]=void 0x0;const nodemailer_1=__importDefault(require(a243_0x1b443d(0x168))),Setting_1=__importDefault(require('../models/Setting')),companyId=0x1;async function loadSmtpSettings(_0x242676){const _0x558db8=a243_0x1b443d,[_0x9484ae,_0x39fbe4,_0x1f7340,_0x3130ec]=await Promise[_0x558db8(0x163)]([Setting_1[_0x558db8(0x167)][_0x558db8(0x162)]({'where':{'companyId':_0x242676,'key':_0x558db8(0x15b)}}),Setting_1[_0x558db8(0x167)][_0x558db8(0x162)]({'where':{'companyId':_0x242676,'key':'usersmtpauth'}}),Setting_1[_0x558db8(0x167)][_0x558db8(0x162)]({'where':{'companyId':_0x242676,'key':_0x558db8(0x151)}}),Setting_1['default'][_0x558db8(0x162)]({'where':{'companyId':_0x242676,'key':'smtpport'}})]);return{'urlSmtp':_0x9484ae?.['value'],'userSmtp':_0x39fbe4?.[_0x558db8(0x153)],'passwordSmtp':_0x1f7340?.['value'],'portSmtp':_0x3130ec?.[_0x558db8(0x153)]};}async function SendMail(_0x30f63d){const _0x432039=a243_0x1b443d,{urlSmtp:_0x18c26f,userSmtp:_0x42ba43,passwordSmtp:_0xbdceed,portSmtp:_0x577e7f}=await loadSmtpSettings(companyId),_0x86c471=nodemailer_1[_0x432039(0x167)]['createTransport']({'host':_0x18c26f,'port':Number(_0x577e7f),'secure':![],'auth':{'user':_0x42ba43,'pass':_0xbdceed}});let _0x269d8e=_0x86c471[_0x432039(0x14f)]({'from':_0x42ba43,'to':_0x30f63d['to'],'subject':_0x30f63d[_0x432039(0x150)],'text':_0x30f63d[_0x432039(0x14b)],'html':_0x30f63d[_0x432039(0x161)]||_0x30f63d[_0x432039(0x14b)]});console['log']('Message\x20sent:\x20%s',_0x269d8e);}function a243_0xc240(){const _0xa6f1c5=['11KRmasx','1116102JdJrLU','4SnKPGp','546264rdtpcR','(((.+)+)+)+$','html','findOne','all','search','2979060ifNMom','5XQQlky','default','nodemailer','3796900NCUNoe','apply','text','SendMail','1880sZrIrd','__importDefault','sendMail','subject','clientsecretsmtpauth','530890fXFEwo','value','toString','defineProperty','9MKtoJK','30135gSMKei','2821580sjiUNm','__esModule','constructor','smtpauth'];a243_0xc240=function(){return _0xa6f1c5;};return a243_0xc240();}function a243_0x3aa2(_0x33b2ff,_0x2b154d){const _0x2848d6=a243_0xc240();return a243_0x3aa2=function(_0x70d107,_0x4bc462){_0x70d107=_0x70d107-0x149;let _0xc240b=_0x2848d6[_0x70d107];return _0xc240b;},a243_0x3aa2(_0x33b2ff,_0x2b154d);}exports[a243_0x1b443d(0x14c)]=SendMail;