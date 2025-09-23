import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserService } from "../user/user.service";
import { CreateCoupleDto } from "./dto/create-couple.dto";
import { Couple } from "./entities/Couple.entity";

@Injectable()
export class CoupleService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
  ) {}


  async createCouple(data: CreateCoupleDto): Promise<Couple> {
    const { user1Id, user2Id } = data;

    const user1 = await this.userService.getById(user1Id);
    const user2 = await this.userService.getById(user2Id);

    if (!user1 || !user2) {
      throw new NotFoundException('Um ou ambos os usuários não foram encontrados.');
    }

    if (user1 === user2) {
      throw new BadRequestException('Os IDs dos usuários devem ser diferentes.');
    }

    const existingCouple = await this.prisma.couple.findFirst({
      where: {
        OR: [
          { user1Id },
          { user2Id },
          { user1Id: user2Id },
          { user2Id: user1Id },
        ],
      },
    });

    if (existingCouple) {
      throw new BadRequestException('Um dos usuários já está em um casal.');
    }

    return await this.prisma.couple.create({
      data: { user1Id, user2Id },
    });
  }
}