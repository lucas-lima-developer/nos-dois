import { Body, Controller, Post } from "@nestjs/common";
import { DateService } from "./date.service";
import { CreateDateDto } from "./dtos/create-date.dto";
import { DateEntity } from "./entities/date.entity";
import { ApiBody, ApiOperation, ApiResponse } from "@nestjs/swagger";

@Controller('dates')
export class DateController {
  constructor(private dateService: DateService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo encontro para um casal' })
  @ApiBody({ type: CreateDateDto })
  @ApiResponse({ status: 201, description: 'Encontro criado com sucesso', type: DateEntity })
  async createDate(@Body() data: CreateDateDto): Promise<DateEntity> {
    return this.dateService.createDate(data);
  }
}