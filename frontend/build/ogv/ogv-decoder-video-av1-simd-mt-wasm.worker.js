"use strict";var Module={},ENVIRONMENT_IS_NODE="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node;if(ENVIRONMENT_IS_NODE){var nodeWorkerThreads=require("worker_threads"),parentPort=nodeWorkerThreads.parentPort;parentPort.on("message",(e=>onmessage({data:e})));var fs=require("fs"),vm=require("vm");Object.assign(global,{self:global,require,Module,location:{href:__filename},Worker:nodeWorkerThreads.Worker,importScripts:e=>vm.runInThisContext(fs.readFileSync(e,"utf8"),{filename:e}),postMessage:e=>parentPort.postMessage(e),performance:global.performance||{now:Date.now}})}var initializedJS=!1;function threadPrintErr(...e){var a=e.join(" ");ENVIRONMENT_IS_NODE&&fs.writeSync(2,a+"\n")}function threadAlert(...e){var a=e.join(" ");postMessage({cmd:"alert",text:a,threadId:Module._pthread_self()})}var err=threadPrintErr;function handleMessage(e){try{if("load"===e.data.cmd){let r=[];self.onmessage=e=>r.push(e),self.startWorker=e=>{Module=e,postMessage({cmd:"loaded"});for(let e of r)handleMessage(e);self.onmessage=handleMessage},Module.wasmModule=e.data.wasmModule;for(const a of e.data.handlers)Module[a]=(...e)=>{postMessage({cmd:"callHandler",handler:a,args:e})};if(Module.wasmMemory=e.data.wasmMemory,Module.buffer=Module.wasmMemory.buffer,Module.ENVIRONMENT_IS_PTHREAD=!0,"string"==typeof e.data.urlOrBlob)importScripts(e.data.urlOrBlob);else{var a=URL.createObjectURL(e.data.urlOrBlob);importScripts(a),URL.revokeObjectURL(a)}OGVDecoderVideoAV1SIMDMTW(Module)}else if("run"===e.data.cmd){Module.__emscripten_thread_init(e.data.pthread_ptr,0,0,1),Module.__emscripten_thread_mailbox_await(e.data.pthread_ptr),Module.establishStackSpace(),Module.PThread.receiveObjectTransfer(e.data),Module.PThread.threadInitTLS(),initializedJS||(initializedJS=!0);try{Module.invokeEntryPoint(e.data.start_routine,e.data.arg)}catch(e){if("unwind"!=e)throw e}}else"cancel"===e.data.cmd?Module._pthread_self()&&Module.__emscripten_thread_exit(-1):"setimmediate"===e.data.target||("checkMailbox"===e.data.cmd?initializedJS&&Module.checkMailbox():e.data.cmd&&(err(`worker.js received unknown command ${e.data.cmd}`),err(e.data)))}catch(e){throw Module.__emscripten_thread_crashed?.(),e}}self.alert=threadAlert,Module.instantiateWasm=(e,a)=>{var r=Module.wasmModule;return Module.wasmModule=null,a(new WebAssembly.Instance(r,e))},self.onunhandledrejection=e=>{throw e.reason||e},self.onmessage=handleMessage;