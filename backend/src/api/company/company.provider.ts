import { DataSource } from 'typeorm';
import { COMPANY_CONST } from './company.constant';
import { CompanyEntity } from './company.entity';

export const companyProvider = [
  {
    provide: COMPANY_CONST.MODEL_PROVIDER,
    useFactory: (connection: DataSource) =>
      connection.getRepository(CompanyEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
