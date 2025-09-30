import { ApiProperty } from "@nestjs/swagger";

export class DateEntity {
  @ApiProperty({ description: 'ID do encontro', example: 1 })
  id: number;

  @ApiProperty({ description: 'ID do casal', example: 1 })
  coupleId: number;

  @ApiProperty({ description: 'Data do encontro', example: '2023-01-01T00:00:00Z' })
  date: Date;

  @ApiProperty({ description: 'Descrição do encontro', example: 'Jantar romântico', required: false })
  description?: string | null;

  @ApiProperty({ description: 'Data de criação do encontro', example: '2023-01-01T00:00:00Z' })
  createdAt: Date;
}