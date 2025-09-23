import { Body, Controller, Post, Get, Param } from "@nestjs/common";
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { CoupleService } from "./couples.service";
import { CreateCoupleDto } from "./dto/create-couple.dto";
import { Couple } from "./entities/Couple.entity";

@Controller('couples')
export class CouplesController {
  constructor(private coupleService: CoupleService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo casal' })
  @ApiBody({ type: CreateCoupleDto })
  @ApiCreatedResponse({ type: Couple, description: 'Casal criado com sucesso.' })
  async create(@Body() data: CreateCoupleDto): Promise<Couple> {
    return this.coupleService.createCouple(data);
  }

  @Get()
  @ApiOperation({ summary: 'Obter todos os casais' })
  @ApiResponse({ type: [Couple], description: 'Lista de casais obtida com sucesso.' })
  async findAll(): Promise<Couple[]> {
    return this.coupleService.getAllCouples();
  }

  @Get(':userId')
  @ApiOperation({ summary: 'Obter casal por ID de usuário' })
  @ApiResponse({ type: Couple, description: 'Casal obtido com sucesso.' })
  async findByUserId(@Param('userId') userId: number): Promise<Couple | null> {
    return this.coupleService.getCoupleByUserId(userId);
  }
}