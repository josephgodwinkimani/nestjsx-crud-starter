import { DataSource } from 'typeorm';

exports.default = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'mysql',
  database: 'nestjsxtest',
  entities: ['./**/*.entity.ts'],
  migrationsTableName: 'migrations',
});
