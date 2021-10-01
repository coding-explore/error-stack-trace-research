import {
  ArgumentsHost,
  Catch,
  ConsoleLogger,
  HttpException,
  HttpStatus,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Request, Response } from 'express';

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  // https://docs.nestjs.com/exception-filters#catch-everything
  // https://github.com/nestjs/nest/issues/949
  catch(exception: unknown, host: ArgumentsHost) {
    // 不然会出现 UnhandledPromiseRejectionWarning: Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    // super.catch(exception, host);
    console.trace('AllExceptionsFilter catch');
    console.log('-----');
    console.log('-----');
    console.log('-----');
    console.time('exception');
    console.log(exception, typeof exception);
    console.timeEnd('exception');
    console.time('host');
    console.log(host, typeof host);
    console.timeEnd('host');
    if (exception instanceof UnauthorizedException) {
      console.log('UnauthorizedException error ignore', host.getArgs());
      return;
    }
    const response = host.switchToHttp().getResponse<Response>();
    const request = host.switchToHttp().getRequest<Request>();
    // 接口不存在的情况
    if (exception instanceof NotFoundException) {
      const status =
        exception instanceof HttpException
          ? exception.getStatus()
          : HttpStatus.INTERNAL_SERVER_ERROR;

      response.status(status).json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
        method: request.method,
      });
      return;
    }


  }
}
