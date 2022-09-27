import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { CreateUserDto, CreateUserDtoBatch } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async create(createUserDto: CreateUserDto) {
    const userDocument: any = {
      ...createUserDto,
      birthday: Date.parse(createUserDto.birthday),
      _id: 1,
    };
    const user = await this.userModel.create(userDocument);
    return user;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOneByCondition(condition: any) {
    const user = this.userModel.find({ condition });
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
