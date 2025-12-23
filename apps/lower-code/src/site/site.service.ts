import { Inject, Injectable } from '@nestjs/common';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';
import { MongoRepository } from 'typeorm';
import { Site } from './entities/site.mongo.entity';

@Injectable()
export class SiteService {
  constructor(
    @Inject('SITE_REPOSITORY')
    private readonly siteRepository: MongoRepository<Site>,
  ) {}

  create(createSiteDto: CreateSiteDto) {
    return this.siteRepository.save(createSiteDto);
  }

  findAll() {
    return `This action returns all site`;
  }

  findOne(id: string) {
    return this.siteRepository.findOneBy({
      _id: id,
    });
  }

  update(id: number, updateSiteDto: UpdateSiteDto) {
    return `This action updates a #${id} site`;
  }

  remove(id: number) {
    return `This action removes a #${id} site`;
  }
}
