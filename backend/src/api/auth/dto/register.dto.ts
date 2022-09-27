import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  IsDateString,
  IsEnum,
  IsPhoneNumber,
  maxLength,
} from 'class-validator';
import { maxLengthPhone } from 'src/share/common/constanst';
import { RoleEnum } from 'src/share/common/enum';

export class RegisterDto {
  @ApiProperty({
    description: 'username',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  username: string;

  @ApiProperty({
    description: 'password',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  password: string;

  @ApiProperty({
    description: 'email',
  })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'fullname',
  })
  @IsNotEmpty()
  @IsString()
  fullname: string;

  @ApiProperty({
    description: 'birthday',
  })
  @IsNotEmpty()
  @IsString()
  @IsDateString()
  birthday: string;

  @ApiProperty({
    description: 'phone',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(maxLengthPhone, {
    message: `Số điện thoại tối đa ${maxLengthPhone} kí tự`,
  })
  @IsPhoneNumber()
  phone: string;

  @ApiProperty({
    description: 'role',
  })
  @IsNotEmpty()
  @IsEnum(RoleEnum)
  role: string;
}
