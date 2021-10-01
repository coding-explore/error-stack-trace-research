## console.trace('AllExceptionsFilter catch');
```
Trace: AllExceptionsFilter catch
    at AllExceptionsFilter.catch (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/src/all-exceptions.filter.ts:20:13)
    at ExceptionsHandler.invokeCustomFilters (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/node_modules/.pnpm/registry.npmmirror.com+@nestjs+core@8.0.9_4524e5af4121e95afe63bd902a119bba/node_modules/@nestjs/core/exceptions/exceptions-handler.js:33:26)
    at ExceptionsHandler.next (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/node_modules/.pnpm/registry.npmmirror.com+@nestjs+core@8.0.9_4524e5af4121e95afe63bd902a119bba/node_modules/@nestjs/core/exceptions/exceptions-handler.js:13:18)
    at /Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/node_modules/.pnpm/registry.npmmirror.com+@nestjs+core@8.0.9_4524e5af4121e95afe63bd902a119bba/node_modules/@nestjs/core/router/router-proxy.js:13:35
    at Layer.handle [as handle_request] (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/node_modules/.pnpm/registry.nlark.com+express@4.17.1/node_modules/express/lib/router/layer.js:95:5)
    at trim_prefix (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/node_modules/.pnpm/registry.nlark.com+express@4.17.1/node_modules/express/lib/router/index.js:317:13)
    at /Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/node_modules/.pnpm/registry.nlark.com+express@4.17.1/node_modules/express/lib/router/index.js:284:7
    at Function.process_params (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/node_modules/.pnpm/registry.nlark.com+express@4.17.1/node_modules/express/lib/router/index.js:335:12)
    at next (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/node_modules/.pnpm/registry.nlark.com+express@4.17.1/node_modules/express/lib/router/index.js:275:10)
    at urlencodedParser (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/node_modules/.pnpm/registry.nlark.com+body-parser@1.19.0/node_modules/body-parser/lib/types/urlencoded.js:91:7)
```


## console.log(exception, typeof exception);
```
    NotFoundException: Cannot GET /xxx/xx
    at callback (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/node_modules/.pnpm/registry.npmmirror.com+@nestjs+core@8.0.9_4524e5af4121e95afe63bd902a119bba/node_modules/@nestjs/core/router/routes-resolver.js:77:19)
    at /Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/node_modules/.pnpm/registry.npmmirror.com+@nestjs+core@8.0.9_4524e5af4121e95afe63bd902a119bba/node_modules/@nestjs/core/router/router-proxy.js:9:23
    at Layer.handle [as handle_request] (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/node_modules/.pnpm/registry.nlark.com+express@4.17.1/node_modules/express/lib/router/layer.js:95:5)
    at trim_prefix (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/node_modules/.pnpm/registry.nlark.com+express@4.17.1/node_modules/express/lib/router/index.js:317:13)
    at /Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/node_modules/.pnpm/registry.nlark.com+express@4.17.1/node_modules/express/lib/router/index.js:284:7
    at Function.process_params (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/node_modules/.pnpm/registry.nlark.com+express@4.17.1/node_modules/express/lib/router/index.js:335:12)
    at next (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/node_modules/.pnpm/registry.nlark.com+express@4.17.1/node_modules/express/lib/router/index.js:275:10)
    at urlencodedParser (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/node_modules/.pnpm/registry.nlark.com+body-parser@1.19.0/node_modules/body-parser/lib/types/urlencoded.js:91:7)
    at Layer.handle [as handle_request] (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/node_modules/.pnpm/registry.nlark.com+express@4.17.1/node_modules/express/lib/router/layer.js:95:5)
    at trim_prefix (/Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nestjs-error-stack-trace-catch/node_modules/.pnpm/registry.nlark.com+express@4.17.1/node_modules/express/lib/router/index.js:317:13) {
  response: {
    statusCode: 404,
    message: 'Cannot GET /xxx/xx',
    error: 'Not Found'
  },
  status: 404
} object
```


## console.log(host, typeof host);
```
ExecutionContextHost {
  args: [
    IncomingMessage {
      _readableState: [ReadableState],
      readable: true,
      _events: [Object: null prototype] {},
      _eventsCount: 0,
      _maxListeners: undefined,
      socket: [Socket],
      connection: [Socket],
      httpVersionMajor: 1,
      httpVersionMinor: 1,
      httpVersion: '1.1',
      complete: false,
      headers: [Object],
      rawHeaders: [Array],
      trailers: {},
      rawTrailers: [],
      aborted: false,
      upgrade: false,
      url: '/xxx/xx',
      method: 'GET',
      statusCode: null,
      statusMessage: null,
      client: [Socket],
      _consuming: false,
      _dumped: false,
      next: [Function: next],
      baseUrl: '',
      originalUrl: '/xxx/xx',
      _parsedUrl: [Url],
      params: {},
      query: {},
      res: [ServerResponse],
      body: {},
      [Symbol(kCapture)]: false
    },
    ServerResponse {
      _events: [Object: null prototype],
      _eventsCount: 1,
      _maxListeners: undefined,
      outputData: [],
      outputSize: 0,
      writable: true,
      _last: false,
      chunkedEncoding: false,
      shouldKeepAlive: true,
      _defaultKeepAlive: true,
      useChunkedEncodingByDefault: true,
      sendDate: true,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      _contentLength: null,
      _hasBody: true,
      _trailer: '',
      finished: false,
      _headerSent: false,
      socket: [Socket],
      connection: [Socket],
      _header: null,
      _keepAliveTimeout: 5000,
      _onPendingData: [Function: bound updateOutgoingData],
      _sent100: false,
      _expect_continue: false,
      req: [IncomingMessage],
      locals: [Object: null prototype] {},
      [Symbol(kCapture)]: false,
      [Symbol(kNeedDrain)]: false,
      [Symbol(corked)]: 0,
      [Symbol(kOutHeaders)]: [Object: null prototype]
    },
    [Function: next]
  ],
  constructorRef: null,
  handler: null,
  contextType: 'http'
} object
```