import { ApiProperty } from "@nestjs/swagger";

export class Couple {
  @ApiProperty({ description: 'ID do casal', example: 1 })
  id: number;

  @ApiProperty({ description: 'ID do primeiro usuário', example: 1 })
  user1Id: number;
  
  @ApiProperty({ description: 'ID do segundo usuário', example: 2 })
  user2Id: number;

  @ApiProperty({ description: 'Data de criação do casal', example: '2024-01-01T00:00:00.000Z' })
  createdAt: Date;
}