import { Body, Controller, Get, Post } from "@nestjs/common";
import { Prisma, User } from "@prisma/client";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() data: CreateUserDto): Promise<User> {
    return this.userService.createUser(data);
  }
}