const myObject ={}
Error.captureStackTrace(myObject)
// Error
//     at Object.<anonymous> (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nodejs/Error.captureStackTrace.js:2:7)
//     at Module._compile (internal/modules/cjs/loader.js:999:30)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
//     at Module.load (internal/modules/cjs/loader.js:863:32)
//     at Function.Module._load (internal/modules/cjs/loader.js:708:14)
//     at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12)
//     at internal/main/run_main_module.js:17:47
console.log(myObject.stack)