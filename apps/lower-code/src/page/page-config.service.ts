import { Injectable } from '@nestjs/common';

@Injectable()
export class PageConfigService {
  create() {
    return 'This action adds a new pageConfig';
  }

  findAll() {
    return `This action returns all pageConfig`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pageConfig`;
  }

  update(id: number) {
    return `This action updates a #${id} pageConfig`;
  }

  remove(id: number) {
    return `This action removes a #${id} pageConfig`;
  }
}
