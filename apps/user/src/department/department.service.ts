import { Inject, Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Repository } from 'typeorm';
import { Department } from './entities/department.mysql.entity';

@Injectable()
export class DepartmentService {
  constructor(
    @Inject('DEPARTMENT_REPOSITORY')
    private readonly departmentRepository: Repository<Department>,
  ) {}

  create(createDepartmentDto: CreateDepartmentDto) {
    return this.departmentRepository.save(createDepartmentDto);
  }

  findAll() {
    return this.departmentRepository.find({ relations: ['users'] });
  }

  findOne(id: number) {
    return this.departmentRepository.findOneBy({ id });
  }

  update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    return this.departmentRepository.update({ id }, updateDepartmentDto);
  }

  remove(id: number) {
    return this.departmentRepository.delete(id);
  }
}
