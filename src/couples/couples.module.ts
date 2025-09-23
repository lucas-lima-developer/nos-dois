import { Module } from "@nestjs/common";
import { UserModule } from "../user/user.module";
import { CouplesController } from "./couples.controller";
import { CoupleService } from "./couples.service";

@Module({
  imports: [UserModule],
  controllers: [CouplesController],
  providers: [CoupleService],
  exports: [CoupleService],
})
export class CouplesModule {}