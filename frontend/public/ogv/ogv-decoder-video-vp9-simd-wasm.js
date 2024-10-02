
var OGVDecoderVideoVP9SIMDW = (() => {
  var _scriptDir = typeof document != 'undefined' ? document.currentScript?.src : undefined;
  if (typeof __filename != 'undefined') _scriptDir ||= __filename;
  return (
function(moduleArg = {}) {

var b=moduleArg,aa,n,readyPromise=new Promise((a,c)=>{aa=a;n=c}),ba=Object.assign({},b),fa="object"==typeof window,p="function"==typeof importScripts,ha="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,u="",v,w,x;
if(ha){var fs=require("fs"),z=require("path");u=p?z.dirname(u)+"/":__dirname+"/";v=(a,c)=>{a=A(a)?new URL(a):z.normalize(a);return fs.readFileSync(a,c?void 0:"utf8")};x=a=>{a=v(a,!0);a.buffer||(a=new Uint8Array(a));return a};w=(a,c,e,d=!0)=>{a=A(a)?new URL(a):z.normalize(a);fs.readFile(a,d?void 0:"utf8",(f,g)=>{f?e(f):c(d?g.buffer:g)})};process.argv.slice(2)}else if(fa||p)p?u=self.location.href:"undefined"!=typeof document&&document.currentScript&&(u=document.currentScript.src),_scriptDir&&(u=_scriptDir),
u.startsWith("blob:")?u="":u=u.substr(0,u.replace(/[?#].*/,"").lastIndexOf("/")+1),v=a=>{var c=new XMLHttpRequest;c.open("GET",a,!1);c.send(null);return c.responseText},p&&(x=a=>{var c=new XMLHttpRequest;c.open("GET",a,!1);c.responseType="arraybuffer";c.send(null);return new Uint8Array(c.response)}),w=(a,c,e)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?c(d.response):e()};d.onerror=e;d.send(null)};b.print||console.log.bind(console);
var D=b.printErr||console.error.bind(console);Object.assign(b,ba);ba=null;var G;b.wasmBinary&&(G=b.wasmBinary);var H,ia=!1,I;function ja(){var a=H.buffer;b.HEAP8=new Int8Array(a);b.HEAP16=new Int16Array(a);b.HEAPU8=I=new Uint8Array(a);b.HEAPU16=new Uint16Array(a);b.HEAP32=new Int32Array(a);b.HEAPU32=new Uint32Array(a);b.HEAPF32=new Float32Array(a);b.HEAPF64=new Float64Array(a)}var ka=[],la=[],ma=[];function na(){var a=b.preRun.shift();ka.unshift(a)}
var J=0,oa=null,M=null,pa=a=>a.startsWith("data:application/octet-stream;base64,"),A=a=>a.startsWith("file://"),N;N="ogv-decoder-video-vp9-simd-wasm.wasm";if(!pa(N)){var qa=N;N=b.locateFile?b.locateFile(qa,u):u+qa}function ra(a){if(a==N&&G)return new Uint8Array(G);if(x)return x(a);throw"both async and sync fetching of the wasm failed";}
function sa(a){if(!G&&(fa||p)){if("function"==typeof fetch&&!A(a))return fetch(a,{credentials:"same-origin"}).then(c=>{if(!c.ok)throw`failed to load wasm binary file at '${a}'`;return c.arrayBuffer()}).catch(()=>ra(a));if(w)return new Promise((c,e)=>{w(a,d=>c(new Uint8Array(d)),e)})}return Promise.resolve().then(()=>ra(a))}
function ta(a,c,e){return sa(a).then(d=>WebAssembly.instantiate(d,c)).then(e,d=>{D(`failed to asynchronously prepare wasm: ${d}`);b.onAbort?.(d);d="Aborted("+d+")";D(d);ia=!0;d=new WebAssembly.RuntimeError(d+". Build with -sASSERTIONS for more info.");n(d);throw d;})}
function ua(a,c){var e=N;return G||"function"!=typeof WebAssembly.instantiateStreaming||pa(e)||A(e)||ha||"function"!=typeof fetch?ta(e,a,c):fetch(e,{credentials:"same-origin"}).then(d=>WebAssembly.instantiateStreaming(d,a).then(c,function(f){D(`wasm streaming compile failed: ${f}`);D("falling back to ArrayBuffer instantiation");return ta(e,a,c)}))}
var va=a=>{for(;0<a.length;)a.shift()(b)},O=[],Ha,P=a=>{var c=O[a];c||(a>=O.length&&(O.length=a+1),O[a]=c=Ha.get(a));return c},Qa={h:(a,c,e)=>I.copyWithin(a,c,c+e),j:()=>{throw Infinity;},k:a=>{var c=I.length;a>>>=0;if(2147483648<a)return!1;for(var e=1;4>=e;e*=2){var d=c*(1+.2/e);d=Math.min(d,a+100663296);var f=Math;d=Math.max(a,d);a:{f=(f.min.call(f,2147483648,d+(65536-d%65536)%65536)-H.buffer.byteLength+65535)/65536;try{H.grow(f);ja();var g=1;break a}catch(h){}g=void 0}if(g)return!0}return!1},b:Ia,
d:Ja,g:Ka,e:La,c:Ma,a:Na,i:Oa,f:Pa,l:function(a,c,e,d,f,g,h,l,q,r,t,K,S,T,ca,da){function ea(E,k,B,wa,xa,ya,Ta,Ua,U){E.set(new Uint8Array(Va,k,B*wa));var C,y;for(C=y=0;C<ya;C++,y+=B)for(k=0;k<B;k++)E[y+k]=U;for(;C<ya+Ua;C++,y+=B){for(k=0;k<xa;k++)E[y+k]=U;for(k=xa+Ta;k<B;k++)E[y+k]=U}for(;C<wa;C++,y+=B)for(k=0;k<B;k++)E[y+k]=U;return E}var Va=H.buffer,m=b.videoFormat,za=(S&-2)*q/h,Aa=(T&-2)*r/l,Ba=t*q/h,Ca=K*r/l;t===m.cropWidth&&K===m.cropHeight&&(ca=m.displayWidth,da=m.displayHeight);for(var Da=
b.recycledFrames,F,Ea=l*c,Fa=r*d,Ga=r*g;0<Da.length;){var L=Da.shift();m=L.format;if(m.width===h&&m.height===l&&m.chromaWidth===q&&m.chromaHeight===r&&m.cropLeft===S&&m.cropTop===T&&m.cropWidth===t&&m.cropHeight===K&&m.displayWidth===ca&&m.displayHeight===da&&L.y.bytes.length===Ea&&L.u.bytes.length===Fa&&L.v.bytes.length===Ga){F=L;break}}F||={format:{width:h,height:l,chromaWidth:q,chromaHeight:r,cropLeft:S,cropTop:T,cropWidth:t,cropHeight:K,displayWidth:ca,displayHeight:da},y:{bytes:new Uint8Array(Ea),
stride:c},u:{bytes:new Uint8Array(Fa),stride:d},v:{bytes:new Uint8Array(Ga),stride:g}};ea(F.y.bytes,a,c,l,S,T,t,K,0);ea(F.u.bytes,e,d,r,za,Aa,Ba,Ca,128);ea(F.v.bytes,f,g,r,za,Aa,Ba,Ca,128);b.frameBuffer=F}},Q=function(){function a(e){Q=e.exports;H=Q.m;ja();Ha=Q.t;la.unshift(Q.n);J--;b.monitorRunDependencies?.(J);0==J&&(null!==oa&&(clearInterval(oa),oa=null),M&&(e=M,M=null,e()));return Q}var c={a:Qa};J++;b.monitorRunDependencies?.(J);if(b.instantiateWasm)try{return b.instantiateWasm(c,a)}catch(e){D(`Module.instantiateWasm callback failed with error: ${e}`),
n(e)}ua(c,function(e){a(e.instance)}).catch(n);return{}}();b._ogv_video_decoder_init=()=>(b._ogv_video_decoder_init=Q.o)();b._ogv_video_decoder_async=()=>(b._ogv_video_decoder_async=Q.p)();b._ogv_video_decoder_destroy=()=>(b._ogv_video_decoder_destroy=Q.q)();b._ogv_video_decoder_process_header=(a,c)=>(b._ogv_video_decoder_process_header=Q.r)(a,c);b._ogv_video_decoder_process_frame=(a,c)=>(b._ogv_video_decoder_process_frame=Q.s)(a,c);b._malloc=a=>(b._malloc=Q.u)(a);b._free=a=>(b._free=Q.v)(a);
var R=(a,c)=>(R=Q.w)(a,c),V=a=>(V=Q.x)(a),W=()=>(W=Q.y)();function Ka(a,c,e,d,f){var g=W();try{return P(a)(c,e,d,f)}catch(h){V(g);if(h!==h+0)throw h;R(1,0)}}function Na(a,c,e,d,f){var g=W();try{P(a)(c,e,d,f)}catch(h){V(g);if(h!==h+0)throw h;R(1,0)}}function Pa(a,c,e,d,f,g,h,l,q){var r=W();try{P(a)(c,e,d,f,g,h,l,q)}catch(t){V(r);if(t!==t+0)throw t;R(1,0)}}function La(a,c,e,d,f,g){var h=W();try{return P(a)(c,e,d,f,g)}catch(l){V(h);if(l!==l+0)throw l;R(1,0)}}
function Ja(a,c,e,d){var f=W();try{return P(a)(c,e,d)}catch(g){V(f);if(g!==g+0)throw g;R(1,0)}}function Oa(a,c,e,d,f,g,h){var l=W();try{P(a)(c,e,d,f,g,h)}catch(q){V(l);if(q!==q+0)throw q;R(1,0)}}function Ia(a,c,e){var d=W();try{return P(a)(c,e)}catch(f){V(d);if(f!==f+0)throw f;R(1,0)}}function Ma(a,c){var e=W();try{P(a)(c)}catch(d){V(e);if(d!==d+0)throw d;R(1,0)}}var X;M=function Ra(){X||Sa();X||(M=Ra)};
function Sa(){function a(){if(!X&&(X=!0,b.calledRun=!0,!ia)){va(la);aa(b);if(b.onRuntimeInitialized)b.onRuntimeInitialized();if(b.postRun)for("function"==typeof b.postRun&&(b.postRun=[b.postRun]);b.postRun.length;){var c=b.postRun.shift();ma.unshift(c)}va(ma)}}if(!(0<J)){if(b.preRun)for("function"==typeof b.preRun&&(b.preRun=[b.preRun]);b.preRun.length;)na();va(ka);0<J||(b.setStatus?(b.setStatus("Running..."),setTimeout(function(){setTimeout(function(){b.setStatus("")},1);a()},1)):a())}}
if(b.preInit)for("function"==typeof b.preInit&&(b.preInit=[b.preInit]);0<b.preInit.length;)b.preInit.pop()();Sa();var Y,Wa,Xa;Xa="undefined"===typeof performance||"undefined"===typeof performance.now?Date.now:performance.now.bind(performance);function Z(a){var c=Xa();a=a();b.cpuTime+=Xa()-c;return a}b.loadedMetadata=!!b.videoFormat;b.videoFormat=b.videoFormat||null;b.frameBuffer=null;b.cpuTime=0;Object.defineProperty(b,"processing",{get:function(){return!1}});
b.init=function(a){Z(function(){b._ogv_video_decoder_init()});a()};b.processHeader=function(a,c){var e=Z(function(){var d=a.byteLength;Y&&Wa>=d||(Y&&b._free(Y),Wa=d,Y=b._malloc(Wa));var f=Y;(new Uint8Array(H.buffer,f,d)).set(new Uint8Array(a));return b._ogv_video_decoder_process_header(f,d)});c(e)};b.A=[];
b.processFrame=function(a,c){function e(l){b._free(g);c(l)}var d=b._ogv_video_decoder_async(),f=a.byteLength,g=b._malloc(f);d&&b.A.push(e);var h=Z(function(){(new Uint8Array(H.buffer,g,f)).set(new Uint8Array(a));return b._ogv_video_decoder_process_frame(g,f)});d||e(h)};b.close=function(){};b.sync=function(){b._ogv_video_decoder_async()&&(b.A.push(function(){}),Z(function(){b._ogv_video_decoder_process_frame(0,0)}))};b.recycledFrames=[];
b.recycleFrame=function(a){var c=b.recycledFrames;c.push(a);16<c.length&&c.shift()};


  return readyPromise
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = OGVDecoderVideoVP9SIMDW;
else if (typeof define === 'function' && define['amd'])
  define([], () => OGVDecoderVideoVP9SIMDW);
