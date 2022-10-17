import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { companyProvider } from './company.provider';
import { DatabaseModule } from 'src/configs/database/database.module';
import { CompanyRepository } from './company.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [CompanyController],
  providers: [CompanyService, ...companyProvider, CompanyRepository],
  exports: [CompanyService],
})
export class CompanyModule {}
