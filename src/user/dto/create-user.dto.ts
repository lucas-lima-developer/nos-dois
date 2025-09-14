import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'Email do usuário', example: 'user@example.com' })
  @IsEmail({}, { message: 'O email deve ser um endereço válido' })
  email: string;

  @ApiProperty({ description: 'Nome do usuário', example: 'João Silva' })
  @IsString({ message: 'O nome deve ser uma string' })
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  name: string;
}