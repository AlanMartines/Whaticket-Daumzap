'use strict';const a2_0x38a9fa=a2_0x1dfd;function a2_0x576b(){const _0x1ff3af=['1050146czencA','JWT_SECRET','logger','toString','5lJcXRT','(((.+)+)+)+$','769806ahkCon','365d','constructor','26291030aNcJCN','7208VLVRAe','__esModule','search','hex','[auth.ts]\x20JWT\x20Refresh\x20Secret:\x20','JWT_REFRESH_SECRET','24h','default','7407MhlhUA','defineProperty','825432bddZpv','10899LOuetr','debug','[auth.ts]\x20JWT\x20Secret:\x20','568CvPRXl','5219872efEsaR','randomBytes'];a2_0x576b=function(){return _0x1ff3af;};return a2_0x576b();}(function(_0x3c6833,_0x570386){const _0x4c510f=a2_0x1dfd,_0xe926b4=_0x3c6833();while(!![]){try{const _0x569245=-parseInt(_0x4c510f(0x1bd))/0x1+-parseInt(_0x4c510f(0x1c4))/0x2+parseInt(_0x4c510f(0x1be))/0x3*(parseInt(_0x4c510f(0x1c1))/0x4)+parseInt(_0x4c510f(0x1c8))/0x5*(parseInt(_0x4c510f(0x1af))/0x6)+-parseInt(_0x4c510f(0x1c2))/0x7+-parseInt(_0x4c510f(0x1b3))/0x8*(parseInt(_0x4c510f(0x1bb))/0x9)+parseInt(_0x4c510f(0x1b2))/0xa;if(_0x569245===_0x570386)break;else _0xe926b4['push'](_0xe926b4['shift']());}catch(_0x4b8e32){_0xe926b4['push'](_0xe926b4['shift']());}}}(a2_0x576b,0x6a56e));Object[a2_0x38a9fa(0x1bc)](exports,a2_0x38a9fa(0x1b4),{'value':!![]});const logger_1=require('../utils/logger'),crypto_1=require('crypto');function generateJwtSecret(){const _0x35444d=a2_0x38a9fa;return(0x0,crypto_1[_0x35444d(0x1c3)])(0x20)[_0x35444d(0x1c7)](_0x35444d(0x1b6));}function generateJwtRefreshSecret(){const _0x1658d5=a2_0x38a9fa,_0x184815=(function(){let _0x4ee310=!![];return function(_0x3a1abf,_0x53cdf1){const _0x2e67e1=_0x4ee310?function(){if(_0x53cdf1){const _0x497998=_0x53cdf1['apply'](_0x3a1abf,arguments);return _0x53cdf1=null,_0x497998;}}:function(){};return _0x4ee310=![],_0x2e67e1;};}()),_0x580e8c=_0x184815(this,function(){const _0x4eb580=a2_0x1dfd;return _0x580e8c[_0x4eb580(0x1c7)]()[_0x4eb580(0x1b5)](_0x4eb580(0x1ae))[_0x4eb580(0x1c7)]()[_0x4eb580(0x1b1)](_0x580e8c)[_0x4eb580(0x1b5)](_0x4eb580(0x1ae));});return _0x580e8c(),(0x0,crypto_1[_0x1658d5(0x1c3)])(0x20)['toString'](_0x1658d5(0x1b6));}const jwtConfig={'secret':process['env'][a2_0x38a9fa(0x1c5)]||generateJwtSecret(),'expiresIn':a2_0x38a9fa(0x1b9),'refreshSecret':process['env'][a2_0x38a9fa(0x1b8)]||generateJwtRefreshSecret(),'refreshExpiresIn':a2_0x38a9fa(0x1b0)};function a2_0x1dfd(_0x3ebd67,_0x370c84){const _0x5393c2=a2_0x576b();return a2_0x1dfd=function(_0xe47c58,_0x5dc906){_0xe47c58=_0xe47c58-0x1ae;let _0x576b33=_0x5393c2[_0xe47c58];return _0x576b33;},a2_0x1dfd(_0x3ebd67,_0x370c84);}logger_1[a2_0x38a9fa(0x1c6)][a2_0x38a9fa(0x1bf)](a2_0x38a9fa(0x1c0)+jwtConfig['secret']),logger_1[a2_0x38a9fa(0x1c6)][a2_0x38a9fa(0x1bf)](a2_0x38a9fa(0x1b7)+jwtConfig['refreshSecret']),exports[a2_0x38a9fa(0x1ba)]=jwtConfig;