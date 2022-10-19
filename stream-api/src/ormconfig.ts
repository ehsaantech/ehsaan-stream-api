import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const config: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'stream',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/database/migration/*.js}'],
  // cli: {
  //   migrationsDir: 'src/database/migration',
  // },
  synchronize: true,
};

export default config;
