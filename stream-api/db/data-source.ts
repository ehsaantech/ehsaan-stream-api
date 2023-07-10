require("dotenv").config();

import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.USER_NAME,
  password: process.env.DB_PASSWORD,
  database: process.env.MYSQL_DATABASE_NAME,
  entities: ['dist/**/*.entity.js'],
  migrations: [ 'dist/db/migrations/*.js' ],
  logging: true,
  migrationsRun: true,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;