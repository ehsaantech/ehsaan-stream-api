import { DataSource, DataSourceOptions } from 'typeorm';
export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'stream',
  entities: ['dist/**/*.entity.js'],
  migrations: [ 'dist/db/migrations/*.js' ],
  logging: true,
  migrationsRun: true,

};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;


