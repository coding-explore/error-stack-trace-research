import { ConsoleLogger, Logger } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AllExceptionsFilter } from './all-exceptions.filter';
import { AppModule } from './app.module';


process.on('uncaughtException', (error) => {
  //   Trace: Error: global error
  //   at Timeout._onTimeout (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/src/main.ts:165:9)
  //   at listOnTimeout (internal/timers.js:554:17)
  //   at processTimers (internal/timers.js:497:7)
  //   at process.<anonymous> (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/src/main.ts:9:11)
  //   at process.emit (events.js:314:20)
  //   at process.emit (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/node_modules/.pnpm/registry.nlark.com+source-map-support@0.5.20/node_modules/source-map-support/source-map-support.js:516:21)
  //   at process._fatalException (internal/process/execution.js:165:25)
  // glabol uncaughtException: 0.969ms
  console.time('glabol uncaughtException');
  console.trace(error);
  console.timeEnd('glabol uncaughtException');
  // [Nest] 60203  - 10/01/2021, 11:38:09 AM   ERROR [global uncaughtException] Error: myTraceError b function
  // Logger.error(error, 'global uncaughtException');

  //   Trace: Error: global error
  //   at Timeout._onTimeout (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/src/main.ts:155:9)
  //   at listOnTimeout (internal/timers.js:554:17)
  //   at processTimers (internal/timers.js:497:7)
  //   at process.<anonymous> (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/src/main.ts:15:11)
  //   at process.emit (events.js:314:20)
  //   at process.emit (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/node_modules/.pnpm/registry.nlark.com+source-map-support@0.5.20/node_modules/source-map-support/source-map-support.js:516:21)
  //   at process._fatalException (internal/process/execution.js:165:25)
  // glabol uncaughtException error.stack: 0.316ms
  console.time('glabol uncaughtException error.stack');
  console.trace(error.stack);
  console.timeEnd('glabol uncaughtException error.stack');
  
  // Error: global error
  //     at Timeout._onTimeout (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/src/main.ts:165:9)
  //     at listOnTimeout (internal/timers.js:554:17)
  //     at processTimers (internal/timers.js:497:7)
  console.group('uncaughtException group');
  console.error(error);
  console.groupEnd();
});

process.on('unhandledRejection', (error) => {
//   Trace: Error: triggerPromiseError
//     at AppController.triggerPromiseError (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/src/app.controller.ts:24:11)
//     at AppController.promiseUncatch (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/src/app.controller.ts:20:10)
//     at /Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/node_modules/.pnpm/registry.npmmirror.com+@nestjs+core@8.0.9_4524e5af4121e95afe63bd902a119bba/node_modules/@nestjs/core/router/router-execution-context.js:38:29
//     at InterceptorsConsumer.intercept (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/node_modules/.pnpm/registry.npmmirror.com+@nestjs+core@8.0.9_4524e5af4121e95afe63bd902a119bba/node_modules/@nestjs/core/interceptors/interceptors-consumer.js:11:20)
//     at /Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/node_modules/.pnpm/registry.npmmirror.com+@nestjs+core@8.0.9_4524e5af4121e95afe63bd902a119bba/node_modules/@nestjs/core/router/router-execution-context.js:46:60
//     at /Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/node_modules/.pnpm/registry.npmmirror.com+@nestjs+core@8.0.9_4524e5af4121e95afe63bd902a119bba/node_modules/@nestjs/core/router/router-proxy.js:9:23
//     at Layer.handle [as handle_request] (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/node_modules/.pnpm/registry.nlark.com+express@4.17.1/node_modules/express/lib/router/layer.js:95:5)
//     at next (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/node_modules/.pnpm/registry.nlark.com+express@4.17.1/node_modules/express/lib/router/route.js:137:13)
//     at Route.dispatch (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/node_modules/.pnpm/registry.nlark.com+express@4.17.1/node_modules/express/lib/router/route.js:112:3)
//     at Layer.handle [as handle_request] (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/node_modules/.pnpm/registry.nlark.com+express@4.17.1/node_modules/express/lib/router/layer.js:95:5)
//     at process.<anonymous> (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/src/main.ts:35:11)
//     at process.emit (events.js:314:20)
//     at process.emit (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/node_modules/.pnpm/registry.nlark.com+source-map-support@0.5.20/node_modules/source-map-support/source-map-support.js:516:21)
//     at processPromiseRejections (internal/process/promises.js:209:33)
//     at processTicksAndRejections (internal/process/task_queues.js:98:32)
// global unhandledRejection: 3.710ms
  console.time('global unhandledRejection');
  console.trace(error);
  console.timeEnd('global unhandledRejection');
  // unhandledRejection=> Error: triggerPromiseError
  //   at AppController.triggerPromiseError (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/src/app.controller.ts:24:11)
  //   at AppController.promiseUncatch (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/src/app.controller.ts:20:10)
  //   at /Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/node_modules/.pnpm/registry.npmmirror.com+@nestjs+core@8.0.9_4524e5af4121e95afe63bd902a119bba/node_modules/@nestjs/core/router/router-execution-context.js:38:29
  //   at InterceptorsConsumer.intercept (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/node_modules/.pnpm/registry.npmmirror.com+@nestjs+core@8.0.9_4524e5af4121e95afe63bd902a119bba/node_modules/@nestjs/core/interceptors/interceptors-consumer.js:11:20)
  //   at /Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/node_modules/.pnpm/registry.npmmirror.com+@nestjs+core@8.0.9_4524e5af4121e95afe63bd902a119bba/node_modules/@nestjs/core/router/router-execution-context.js:46:60
  //   at /Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/node_modules/.pnpm/registry.npmmirror.com+@nestjs+core@8.0.9_4524e5af4121e95afe63bd902a119bba/node_modules/@nestjs/core/router/router-proxy.js:9:23
  //   at Layer.handle [as handle_request] (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/node_modules/.pnpm/registry.nlark.com+express@4.17.1/node_modules/express/lib/router/layer.js:95:5)
  //   at next (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/node_modules/.pnpm/registry.nlark.com+express@4.17.1/node_modules/express/lib/router/route.js:137:13)
  //   at Route.dispatch (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/node_modules/.pnpm/registry.nlark.com+express@4.17.1/node_modules/express/lib/router/route.js:112:3)
  //   at Layer.handle [as handle_request] (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/node_modules/.pnpm/registry.nlark.com+express@4.17.1/node_modules/express/lib/router/layer.js:95:5)
  console.error('unhandledRejection=>', error);
  // Logger.error(error, 'global unhandledRejection');
});


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
  await app.listen(3000);
}
bootstrap();

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Stack
function trace() {
  try {
    throw new Error('myTraceError');
  }
  catch(e) {
    // Error: myTraceError
    // at trace (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/src/main.ts:29:11)
    // at b (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/src/main.ts:38:3)
    // at a (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/src/main.ts:43:3)
    // at Object.<anonymous> (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/src/main.ts:46:1)
    // at Module._compile (internal/modules/cjs/loader.js:999:30)
    // at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
    // at Module.load (internal/modules/cjs/loader.js:863:32)
    // at Function.Module._load (internal/modules/cjs/loader.js:708:14)
    // at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12)
    // at internal/main/run_main_module.js:17:47
    // try catch trace: 6.852ms
    console.time('try catch trace');
    console.error(e);
    console.timeEnd('try catch trace');

    //     Error: myTraceError
    //     at trace (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/src/main.ts:65:11)
    //     at b (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/src/main.ts:90:3)
    //     at a (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/src/main.ts:95:3)
    //     at Object.<anonymous> (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/src/main.ts:103:3)
    //     at Module._compile (internal/modules/cjs/loader.js:999:30)
    //     at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
    //     at Module.load (internal/modules/cjs/loader.js:863:32)
    //     at Function.Module._load (internal/modules/cjs/loader.js:708:14)
    //     at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12)
    //     at internal/main/run_main_module.js:17:47
    // try catch trace log e.stack: 0.038ms
    console.time('try catch trace log e.stack');
    console.error(e.stack);
    console.timeEnd('try catch trace log e.stack');
  }
}
function b() {
  trace();
  throw new Error('myTraceError b function');
}
function a() {
  // @ts-ignore
  b(3, 4, '\n\n', undefined, {});
}
// 报错后后续的代码不执行了。
// @ts-ignore
// a('first call, firstarg');

try {
  // @ts-ignore
  a('first call, firstarg');
} catch(error) {
//   Error: myTraceError b function
//   at b (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/src/main.ts:55:9)
//   at a (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/src/main.ts:59:3)
//   at Object.<anonymous> (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/src/main.ts:67:3)
//   at Module._compile (internal/modules/cjs/loader.js:999:30)
//   at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
//   at Module.load (internal/modules/cjs/loader.js:863:32)
//   at Function.Module._load (internal/modules/cjs/loader.js:708:14)
//   at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12)
//   at internal/main/run_main_module.js:17:47
// try catch a function trace: 0.524ms
  console.time('try catch a function trace');
  console.error(error);
  console.timeEnd('try catch a function trace');
}


// console.log('11111');
setTimeout(() => {
//   Trace: Error: global error
//     at Timeout._onTimeout (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/src/main.ts:78:9)
//     at listOnTimeout (internal/timers.js:554:17)
//     at processTimers (internal/timers.js:497:7)
//     at process.<anonymous> (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/src/main.ts:8:11)
//     at process.emit (events.js:314:20)
//     at process.emit (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/node_modules/.pnpm/registry.nlark.com+source-map-support@0.5.20/node_modules/source-map-support/source-map-support.js:516:21)
//     at process._fatalException (internal/process/execution.js:165:25)
// uncaughtException=> Error: global error
//     at Timeout._onTimeout (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/src/main.ts:78:9)
//     at listOnTimeout (internal/timers.js:554:17)
//     at processTimers (internal/timers.js:497:7)
  Logger.log('setTimeout throw Error');
  throw new Error('global error');
}, 300);

