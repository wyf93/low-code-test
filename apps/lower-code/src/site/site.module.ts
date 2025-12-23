import { Module } from '@nestjs/common';
import { SiteService } from './site.service';
import { SiteController } from './site.controller';
import { DataSource } from 'typeorm';
import { Site } from './entities/site.mongo.entity';

@Module({
  controllers: [SiteController],
  providers: [
    {
      provide: 'SITE_REPOSITORY',
      useFactory: (AppDataSource: DataSource) =>
        AppDataSource.getMongoRepository(Site),
      inject: ['MONGODB_DATA_SOURCE'],
    },
    SiteService,
  ],
})
export class SiteModule {}
