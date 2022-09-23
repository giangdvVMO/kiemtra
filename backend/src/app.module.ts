import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from './api/user/user.module';
import { AuthModule } from './api/auth/auth.module';
import { CompanyModule } from './api/company/company.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    MongooseModule.forRoot('mongodb://localhost/test'),
    CompanyModule,
  ],
})
export class AppModule {}
