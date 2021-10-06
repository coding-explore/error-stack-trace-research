const foo = function () {
  thrownewError('error!!!')
}
const bar = function () {
  setTimeout(foo)
}
bar()

// /Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nodejs/LongStackTrace.js:2
//   thrownewError('error!!!')
//   ^

// ReferenceError: thrownewError is not defined
//     at Timeout.foo [as _onTimeout] (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nodejs/LongStackTrace.js:2:3)
//     at listOnTimeout (internal/timers.js:554:17)