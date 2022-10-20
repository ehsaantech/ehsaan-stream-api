import { DataSource, DataSourceOptions } from 'typeorm';
import { SeedChannels1666260997197 } from './migrations/1666260997197-SeedChannels';
export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'stream',
  entities: ['dist/**/*.entity.js'],
  migrations: { SeedChannels1666260997197 },
  synchronize: true,
  logging: true,
  migrationsRun: true,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
