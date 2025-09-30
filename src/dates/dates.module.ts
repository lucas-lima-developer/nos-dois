import { Module } from "@nestjs/common";
import { CouplesModule } from "src/couples/couples.module";
import { DateController } from "./date.controller";
import { DateService } from "./date.service";

@Module({
  imports: [CouplesModule],
  controllers: [DateController],
  providers: [DateService],
  exports: [DateService]
})
export class DatesModule {}