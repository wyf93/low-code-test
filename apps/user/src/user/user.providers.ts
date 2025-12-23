import { DataSource } from 'typeorm';
import { User } from './entities/user.mysql.entity';

export const UserProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (AppDataSource: DataSource) =>
      AppDataSource.getRepository(User),
    inject: ['MYSQL_DATA_SOURCE'],
  },
];
