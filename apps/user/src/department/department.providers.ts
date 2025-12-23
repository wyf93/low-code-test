import { DataSource } from 'typeorm';
import { Department } from './entities/department.mysql.entity';

export const DepartmentProviders = [
  {
    provide: 'DEPARTMENT_REPOSITORY',
    useFactory: (AppDataSource: DataSource) =>
      AppDataSource.getRepository(Department),
    inject: ['MYSQL_DATA_SOURCE'],
  },
];
