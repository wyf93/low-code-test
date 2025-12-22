import { Controller, Get, Version } from '@nestjs/common';
import { AppService } from './app.service';
import { BusinessException } from './common/exceptions/business.expection';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  getUser(): string {
    const a: any = {};
    try {
      console.log(a.b.c);
    } catch {
      // throw new BusinessException('你这个参数错了');
    }
    return this.configService.get('TEST_VALUE').name;
  }

  @Get()
  @Version('2')
  getHello(): string {
    return this.appService.getHello();
  }
}
