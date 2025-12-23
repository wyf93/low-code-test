import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { DepartmentModule } from './department/department.module';
import { DatabaseModule } from '@comm/comm/database/database.module';
import { getConfig } from '@comm/comm/utils';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [getConfig],
    }),
    DatabaseModule,
    UserModule,
    DepartmentModule,
  ],
})
export class AppModule {}
