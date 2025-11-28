import { Controller, Get, Version } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUser(): string {
    return 'user';
  }

  @Get()
  @Version('2')
  getHello(): string {
    return this.appService.getHello();
  }
}
