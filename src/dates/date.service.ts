import { Injectable, NotFoundException } from "@nestjs/common";
import { CoupleService } from "../couples/couples.service";
import { PrismaService } from "../prisma/prisma.service";
import { CreateDateDto } from "./dtos/create-date.dto";
import { DateEntity } from "./entities/date.entity";

@Injectable()
export class DateService {
  constructor(
    private prisma: PrismaService,
    private coupleService: CoupleService
  ) {}

  async createDate(data: CreateDateDto): Promise<DateEntity> {
    await this.coupleService.getCoupleById(data.coupleId);

    return this.prisma.date.create({
      data: {
        coupleId: data.coupleId,
        date: new Date(data.date),
        description: data.description
      }
    });
  }
}