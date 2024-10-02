
var OGVDecoderVideoVP8W = (() => {
  var _scriptDir = typeof document != 'undefined' ? document.currentScript?.src : undefined;
  if (typeof __filename != 'undefined') _scriptDir ||= __filename;
  return (
function(moduleArg = {}) {

var b=moduleArg,aa,k,readyPromise=new Promise((a,c)=>{aa=a;k=c}),ba=Object.assign({},b),fa="object"==typeof window,n="function"==typeof importScripts,ha="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,t="",u,x,A;
if(ha){var fs=require("fs"),B=require("path");t=n?B.dirname(t)+"/":__dirname+"/";u=(a,c)=>{a=C(a)?new URL(a):B.normalize(a);return fs.readFileSync(a,c?void 0:"utf8")};A=a=>{a=u(a,!0);a.buffer||(a=new Uint8Array(a));return a};x=(a,c,e,d=!0)=>{a=C(a)?new URL(a):B.normalize(a);fs.readFile(a,d?void 0:"utf8",(f,g)=>{f?e(f):c(d?g.buffer:g)})};process.argv.slice(2)}else if(fa||n)n?t=self.location.href:"undefined"!=typeof document&&document.currentScript&&(t=document.currentScript.src),_scriptDir&&(t=_scriptDir),
t.startsWith("blob:")?t="":t=t.substr(0,t.replace(/[?#].*/,"").lastIndexOf("/")+1),u=a=>{var c=new XMLHttpRequest;c.open("GET",a,!1);c.send(null);return c.responseText},n&&(A=a=>{var c=new XMLHttpRequest;c.open("GET",a,!1);c.responseType="arraybuffer";c.send(null);return new Uint8Array(c.response)}),x=(a,c,e)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?c(d.response):e()};d.onerror=e;d.send(null)};b.print||console.log.bind(console);
var D=b.printErr||console.error.bind(console);Object.assign(b,ba);ba=null;var E;b.wasmBinary&&(E=b.wasmBinary);var F,ia=!1,G;function ja(){var a=F.buffer;b.HEAP8=new Int8Array(a);b.HEAP16=new Int16Array(a);b.HEAPU8=G=new Uint8Array(a);b.HEAPU16=new Uint16Array(a);b.HEAP32=new Int32Array(a);b.HEAPU32=new Uint32Array(a);b.HEAPF32=new Float32Array(a);b.HEAPF64=new Float64Array(a)}var ka=[],la=[],ma=[];function na(){var a=b.preRun.shift();ka.unshift(a)}
var K=0,oa=null,L=null,pa=a=>a.startsWith("data:application/octet-stream;base64,"),C=a=>a.startsWith("file://"),M;M="ogv-decoder-video-vp8-wasm.wasm";if(!pa(M)){var qa=M;M=b.locateFile?b.locateFile(qa,t):t+qa}function ra(a){if(a==M&&E)return new Uint8Array(E);if(A)return A(a);throw"both async and sync fetching of the wasm failed";}
function sa(a){if(!E&&(fa||n)){if("function"==typeof fetch&&!C(a))return fetch(a,{credentials:"same-origin"}).then(c=>{if(!c.ok)throw`failed to load wasm binary file at '${a}'`;return c.arrayBuffer()}).catch(()=>ra(a));if(x)return new Promise((c,e)=>{x(a,d=>c(new Uint8Array(d)),e)})}return Promise.resolve().then(()=>ra(a))}
function ta(a,c,e){return sa(a).then(d=>WebAssembly.instantiate(d,c)).then(e,d=>{D(`failed to asynchronously prepare wasm: ${d}`);b.onAbort?.(d);d="Aborted("+d+")";D(d);ia=!0;d=new WebAssembly.RuntimeError(d+". Build with -sASSERTIONS for more info.");k(d);throw d;})}
function ua(a,c){var e=M;return E||"function"!=typeof WebAssembly.instantiateStreaming||pa(e)||C(e)||ha||"function"!=typeof fetch?ta(e,a,c):fetch(e,{credentials:"same-origin"}).then(d=>WebAssembly.instantiateStreaming(d,a).then(c,function(f){D(`wasm streaming compile failed: ${f}`);D("falling back to ArrayBuffer instantiation");return ta(e,a,c)}))}
var va=a=>{for(;0<a.length;)a.shift()(b)},N=[],Ha,O=a=>{var c=N[a];c||(a>=N.length&&(N.length=a+1),N[a]=c=Ha.get(a));return c},Na={f:(a,c,e)=>G.copyWithin(a,c,c+e),d:()=>{throw Infinity;},e:a=>{var c=G.length;a>>>=0;if(2147483648<a)return!1;for(var e=1;4>=e;e*=2){var d=c*(1+.2/e);d=Math.min(d,a+100663296);var f=Math;d=Math.max(a,d);a:{f=(f.min.call(f,2147483648,d+(65536-d%65536)%65536)-F.buffer.byteLength+65535)/65536;try{F.grow(f);ja();var g=1;break a}catch(m){}g=void 0}if(g)return!0}return!1},b:Ia,
h:Ja,c:Ka,g:La,a:Ma,i:function(a,c,e,d,f,g,m,p,R,q,H,I,S,T,ca,da){function ea(y,h,v,wa,xa,ya,Ra,Sa,U){y.set(new Uint8Array(Ta,h,v*wa));var w,r;for(w=r=0;w<ya;w++,r+=v)for(h=0;h<v;h++)y[r+h]=U;for(;w<ya+Sa;w++,r+=v){for(h=0;h<xa;h++)y[r+h]=U;for(h=xa+Ra;h<v;h++)y[r+h]=U}for(;w<wa;w++,r+=v)for(h=0;h<v;h++)y[r+h]=U;return y}var Ta=F.buffer,l=b.videoFormat,za=(S&-2)*R/m,Aa=(T&-2)*q/p,Ba=H*R/m,Ca=I*q/p;H===l.cropWidth&&I===l.cropHeight&&(ca=l.displayWidth,da=l.displayHeight);for(var Da=b.recycledFrames,
z,Ea=p*c,Fa=q*d,Ga=q*g;0<Da.length;){var J=Da.shift();l=J.format;if(l.width===m&&l.height===p&&l.chromaWidth===R&&l.chromaHeight===q&&l.cropLeft===S&&l.cropTop===T&&l.cropWidth===H&&l.cropHeight===I&&l.displayWidth===ca&&l.displayHeight===da&&J.y.bytes.length===Ea&&J.u.bytes.length===Fa&&J.v.bytes.length===Ga){z=J;break}}z||={format:{width:m,height:p,chromaWidth:R,chromaHeight:q,cropLeft:S,cropTop:T,cropWidth:H,cropHeight:I,displayWidth:ca,displayHeight:da},y:{bytes:new Uint8Array(Ea),stride:c},u:{bytes:new Uint8Array(Fa),
stride:d},v:{bytes:new Uint8Array(Ga),stride:g}};ea(z.y.bytes,a,c,p,S,T,H,I,0);ea(z.u.bytes,e,d,q,za,Aa,Ba,Ca,128);ea(z.v.bytes,f,g,q,za,Aa,Ba,Ca,128);b.frameBuffer=z}},P=function(){function a(e){P=e.exports;F=P.j;ja();Ha=P.q;la.unshift(P.k);K--;b.monitorRunDependencies?.(K);0==K&&(null!==oa&&(clearInterval(oa),oa=null),L&&(e=L,L=null,e()));return P}var c={a:Na};K++;b.monitorRunDependencies?.(K);if(b.instantiateWasm)try{return b.instantiateWasm(c,a)}catch(e){D(`Module.instantiateWasm callback failed with error: ${e}`),
k(e)}ua(c,function(e){a(e.instance)}).catch(k);return{}}();b._ogv_video_decoder_init=()=>(b._ogv_video_decoder_init=P.l)();b._ogv_video_decoder_async=()=>(b._ogv_video_decoder_async=P.m)();b._ogv_video_decoder_destroy=()=>(b._ogv_video_decoder_destroy=P.n)();b._ogv_video_decoder_process_header=(a,c)=>(b._ogv_video_decoder_process_header=P.o)(a,c);b._ogv_video_decoder_process_frame=(a,c)=>(b._ogv_video_decoder_process_frame=P.p)(a,c);b._malloc=a=>(b._malloc=P.r)(a);b._free=a=>(b._free=P.s)(a);
var Q=(a,c)=>(Q=P.t)(a,c),V=a=>(V=P.u)(a),W=()=>(W=P.v)(),Oa=b.dynCall_iiiij=(a,c,e,d,f,g)=>(Oa=b.dynCall_iiiij=P.w)(a,c,e,d,f,g);function Ma(a,c,e,d,f){var g=W();try{O(a)(c,e,d,f)}catch(m){V(g);if(m!==m+0)throw m;Q(1,0)}}function Ia(a,c,e){var d=W();try{return O(a)(c,e)}catch(f){V(d);if(f!==f+0)throw f;Q(1,0)}}function Ja(a,c,e,d){var f=W();try{return O(a)(c,e,d)}catch(g){V(f);if(g!==g+0)throw g;Q(1,0)}}function La(a,c){var e=W();try{O(a)(c)}catch(d){V(e);if(d!==d+0)throw d;Q(1,0)}}
function Ka(a,c,e,d,f,g){var m=W();try{return Oa(a,c,e,d,f,g)}catch(p){V(m);if(p!==p+0)throw p;Q(1,0)}}var X;L=function Pa(){X||Qa();X||(L=Pa)};
function Qa(){function a(){if(!X&&(X=!0,b.calledRun=!0,!ia)){va(la);aa(b);if(b.onRuntimeInitialized)b.onRuntimeInitialized();if(b.postRun)for("function"==typeof b.postRun&&(b.postRun=[b.postRun]);b.postRun.length;){var c=b.postRun.shift();ma.unshift(c)}va(ma)}}if(!(0<K)){if(b.preRun)for("function"==typeof b.preRun&&(b.preRun=[b.preRun]);b.preRun.length;)na();va(ka);0<K||(b.setStatus?(b.setStatus("Running..."),setTimeout(function(){setTimeout(function(){b.setStatus("")},1);a()},1)):a())}}
if(b.preInit)for("function"==typeof b.preInit&&(b.preInit=[b.preInit]);0<b.preInit.length;)b.preInit.pop()();Qa();var Y,Ua,Va;Va="undefined"===typeof performance||"undefined"===typeof performance.now?Date.now:performance.now.bind(performance);function Z(a){var c=Va();a=a();b.cpuTime+=Va()-c;return a}b.loadedMetadata=!!b.videoFormat;b.videoFormat=b.videoFormat||null;b.frameBuffer=null;b.cpuTime=0;Object.defineProperty(b,"processing",{get:function(){return!1}});
b.init=function(a){Z(function(){b._ogv_video_decoder_init()});a()};b.processHeader=function(a,c){var e=Z(function(){var d=a.byteLength;Y&&Ua>=d||(Y&&b._free(Y),Ua=d,Y=b._malloc(Ua));var f=Y;(new Uint8Array(F.buffer,f,d)).set(new Uint8Array(a));return b._ogv_video_decoder_process_header(f,d)});c(e)};b.A=[];
b.processFrame=function(a,c){function e(p){b._free(g);c(p)}var d=b._ogv_video_decoder_async(),f=a.byteLength,g=b._malloc(f);d&&b.A.push(e);var m=Z(function(){(new Uint8Array(F.buffer,g,f)).set(new Uint8Array(a));return b._ogv_video_decoder_process_frame(g,f)});d||e(m)};b.close=function(){};b.sync=function(){b._ogv_video_decoder_async()&&(b.A.push(function(){}),Z(function(){b._ogv_video_decoder_process_frame(0,0)}))};b.recycledFrames=[];
b.recycleFrame=function(a){var c=b.recycledFrames;c.push(a);16<c.length&&c.shift()};


  return readyPromise
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = OGVDecoderVideoVP8W;
else if (typeof define === 'function' && define['amd'])
  define([], () => OGVDecoderVideoVP8W);
