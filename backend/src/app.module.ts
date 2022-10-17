import { Module } from '@nestjs/common';

import { CompanyModule } from './api/company/company.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), CompanyModule],
})
export class AppModule {}
