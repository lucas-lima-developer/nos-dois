import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { User } from "./entities/user.entity";

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo usuário' })
  @ApiBody({ type: CreateUserDto })
  @ApiCreatedResponse({ type: User, description: 'Usuário criado com sucesso.' })
  async create(@Body() data: CreateUserDto): Promise<User> {
    return this.userService.createUser(data);
  }
}