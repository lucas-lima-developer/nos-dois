import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { CouplesModule } from './couples/couples.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    CouplesModule
  ],
  controllers: [AppController],
})
export class AppModule {}
