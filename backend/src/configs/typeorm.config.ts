import { CompanyEntity } from 'src/api/company/company.entity';
import { DataSource } from 'typeorm';
import { MYSQL_CONFIG } from './constant.config';

export default new DataSource({
  type: 'mysql',
  host: MYSQL_CONFIG.host,
  port: 3306,
  username: MYSQL_CONFIG.username,
  password: MYSQL_CONFIG.password,
  database: MYSQL_CONFIG.database,
  entities: [CompanyEntity],
  synchronize: true,
});
