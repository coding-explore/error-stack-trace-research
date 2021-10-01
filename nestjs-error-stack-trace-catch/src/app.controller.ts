import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/promise-uncatch')
  async promiseUncatch() {
    // return await new Promise((resolve, reject) => {
    //   // AllExceptionsFilter 客户捕获
    //   // throw new Error('trigger promise error');
    //   resolve(true);
    // });
    this.triggerPromiseError();
  }
  
  async triggerPromiseError() {
    throw new Error('triggerPromiseError');
  }
}
