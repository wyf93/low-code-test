import { Module } from '@nestjs/common';
import { PageService } from './page.service';
import { PageController } from './page.controller';
import { DataSource } from 'typeorm';
import { Page } from './entities/page.entity';
import { PageConfig } from './entities/page-config.entity';

@Module({
  controllers: [PageController],
  providers: [
    {
      provide: 'PAGE_REPOSITORY',
      useFactory: (AppDataSource: DataSource) =>
        AppDataSource.getMongoRepository(Page),
      inject: ['MONGODB_DATA_SOURCE'],
    },
    {
      provide: 'PAGE_CONFIG_REPOSITORY',
      useFactory: (AppDataSource: DataSource) =>
        AppDataSource.getMongoRepository(PageConfig),
      inject: ['MONGODB_DATA_SOURCE'],
    },
    PageService,
  ],
})
export class PageModule {}
