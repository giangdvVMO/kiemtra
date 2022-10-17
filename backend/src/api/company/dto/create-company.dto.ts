import { ApiProperty } from '@nestjs/swagger';

export class CreateCompanyDto {
  @ApiProperty({
    type: 'string',
    name: 'PK_SanphamID',
  })
  PK_SanphamID: string;

  @ApiProperty({
    type: 'string',
    name: 'TenSanpham',
  })
  TenSanpham: string;

  @ApiProperty({
    type: 'number',
    name: 'NamSanxuat',
  })
  NamSanxuat: number;

  @ApiProperty({
    type: 'number',
    name: 'Trongluong',
  })
  Trongluong: number;

  @ApiProperty({
    type: 'boolean',
    name: 'Devo',
  })
  Devo: boolean;
}
