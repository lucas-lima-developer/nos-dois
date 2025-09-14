import { Body, Controller, Get, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiParam, ApiResponse } from "@nestjs/swagger";
import { User } from "./entities/user.entity";

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos os usuários' })
  @ApiResponse({ status: 200, description: 'Lista de usuários retornada com sucesso.', type: [User] })
  async findAll(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter um usuário por ID' })
  @ApiParam({ name: 'id', description: 'ID do usuário', example: 1, type: Number })
  @ApiResponse({ status: 200, description: 'Usuário encontrado.', type: User })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado.' })
  async getById(@Param('id') id: number): Promise<User | null> {
    const user = await this.userService.getById(id);

    if (!user) {
      throw new NotFoundException('Usuário não encontrado.');
    }
    return user;
  }

  @Post()
  @ApiOperation({ summary: 'Criar um novo usuário' })
  @ApiBody({ type: CreateUserDto })
  @ApiCreatedResponse({ type: User, description: 'Usuário criado com sucesso.' })
  async create(@Body() data: CreateUserDto): Promise<User> {
    return this.userService.createUser(data);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar um usuário existente' })
  @ApiParam({ name: 'id', description: 'ID do usuário a ser atualizado', example: 1, type: Number })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ status: 200, description: 'Usuário atualizado com sucesso.', type: User })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado.' })
  async update(@Param('id') id: number, @Body() data: CreateUserDto) : Promise<User> {
    const user = await this.userService.updateUser(id, data);

    return user;
    // Implementar lógica de atualização
  }
}