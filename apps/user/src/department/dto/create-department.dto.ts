import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateDepartmentDto {
  @ApiProperty({ example: '技术部' })
  @IsNotEmpty()
  name: string;
}
