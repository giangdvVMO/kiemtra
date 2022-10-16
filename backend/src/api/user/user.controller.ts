import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { CreateProduct } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller({
  version: ['1'],
  path: 'user',
})
// @UseInterceptors(ClassSerializerInterceptor)
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create-product')
@UseInterceptors(FileInterceptor('file'))
  async createUser(@Body() data: CreateProduct) {
    return await this.userService.createSP(data);
  }
}
