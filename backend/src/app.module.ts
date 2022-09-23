import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from './api/user/user.module';
import { AuthModule } from './api/auth/auth.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    MongooseModule.forRoot('mongodb://localhost/test'),
  ],
})
export class AppModule {}
