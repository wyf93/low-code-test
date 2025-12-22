import { Controller, Get } from '@nestjs/common';
import { DevopsService } from './devops.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class DevopsController {
  constructor(
    private readonly devopsService: DevopsService,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  getHello(): string {
    return this.configService.get('TEST_VALUE').name;
  }
}
