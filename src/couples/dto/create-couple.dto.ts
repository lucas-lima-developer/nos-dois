import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsPositive } from "class-validator";

export class CreateCoupleDto {
  @ApiProperty({ description: 'ID do primeiro usuário', example: 1 })
  @IsNumber({}, { message: 'O ID do primeiro usuário deve ser um número' })
  @IsPositive({ message: 'O ID do primeiro usuário deve ser um número positivo' })
  @IsNotEmpty({ message: 'O ID do primeiro usuário é obrigatório' })
  user1Id: number;

  @ApiProperty({ description: 'ID do segundo usuário', example: 2 })
  @IsNumber({}, { message: 'O ID do segundo usuário deve ser um número' })
  @IsPositive({ message: 'O ID do segundo usuário deve ser um número positivo' })
  @IsNotEmpty({ message: 'O ID do segundo usuário é obrigatório' })
  user2Id: number;
}