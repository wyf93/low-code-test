import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @ApiProperty({ example: 'wyf' })
  name: string;

  @IsNotEmpty()
  @ApiProperty({ example: 'wyf' })
  username: string;

  @ApiProperty({ example: 'wyf' })
  enName?: string;

  @IsNotEmpty()
  @ApiProperty({ example: '' })
  email: string;

  @ApiProperty({ example: '' })
  avatar?: string;

  @ApiProperty({ example: '' })
  mobile?: string;

  @ApiProperty({ example: 0 })
  departmentId?: number;
}
