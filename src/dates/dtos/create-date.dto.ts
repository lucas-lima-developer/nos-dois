import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateDateDto {
  @ApiProperty({ description: 'ID do casal', example: 1 })
  @IsNotEmpty({ message: 'O ID do casal é obrigatório' })
  @IsNumber({}, { message: 'O ID do casal deve ser um número' })
  coupleId: number;
  
  @ApiProperty({ description: 'Data do encontro', example: '2025-09-25T10:00:00.000' })
  @IsDateString({}, { message: 'A data deve ser uma string de data válida (ISO 8601)' })
  @IsNotEmpty({ message: 'A data do encontro é obrigatória' })
  date: string;  

  @ApiProperty({ description: 'Descrição do encontro', example: 'Jantar romântico', required: false })
  @IsOptional()
  @IsString({ message: 'A descrição deve ser uma string' })
  description?: string;
}