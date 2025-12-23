import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VERSION_NEUTRAL, VersioningType } from '@nestjs/common';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { NestExpressApplication } from '@nestjs/platform-express';
import { BaseExceptionFilter } from './common/filters/base.exception.filter';
import { HttpExceptionFilter } from './common/filters/http.exception.filter';
import { generateDocument } from './doc';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // 接口版本化管理
  app.enableVersioning({
    defaultVersion: [VERSION_NEUTRAL],
    type: VersioningType.URI,
  });

  // 创建文档
  generateDocument(app);
  // 统一响应体格式
  app.useGlobalInterceptors(new TransformInterceptor());
  // 异常过滤器
  app.useGlobalFilters(
    // new BaseExceptionFilter(),
    new HttpExceptionFilter(),
  );
  await app.listen(process.env.PORT ?? 3002);
}
bootstrap();
