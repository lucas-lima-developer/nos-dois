import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { CouplesModule } from './couples/couples.module';
import { DatesModule } from './dates/dates.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    CouplesModule,
    DatesModule
  ],
  controllers: [AppController],
})
export class AppModule {}
