import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { TypeOrmRepository } from 'src/share/database/typeorm.repository';
import { COMPANY_CONST } from './company.constant';
import { CompanyEntity } from './company.entity';

@Injectable()
export class CompanyRepository extends TypeOrmRepository<CompanyEntity> {
  constructor(
    @Inject(COMPANY_CONST.MODEL_PROVIDER)
    companyEntity: Repository<CompanyEntity>,
  ) {
    super(companyEntity);
  }
}
