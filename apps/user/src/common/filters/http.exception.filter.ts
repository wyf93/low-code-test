import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import {
  type BusinessError,
  BusinessException,
} from '../exceptions/business.expection';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    // 处理业务异常
    if (exception instanceof BusinessException) {
      const error = exception.getResponse() as BusinessError;
      response.status(status).json({
        data: null,
        status: error.code,
        extra: {},
        message: error.message,
        success: false,
      });
      return;
    }

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: exception.getResponse(),
    });
  }
}
