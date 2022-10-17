import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { LoginResponseDto } from './dto/login-response.dto';
// import { UserService } from '../user/user.service';
import { ValidatorService } from './validations/check-expiration-time';
import { JwtPayload } from './payloads/jwt.payload';
// import { UserSchema } from '../../api/user/user.schema';

@Injectable()
export class AuthService {
  constructor(
    // private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly validatorService: ValidatorService,
  ) {}

  // async validateUser(username: string, password: string) {
  //   const user: any = await this.userService.findOneByCondition({
  //     username: username,
  //   });
  //   console.log(user);
  //   if (!user.length) {
  //     throw new BadRequestException('User not found, disabled or locked');
  //   }
  //   const comparePassword = bcrypt.compareSync(password, user[0].password);
  //   if (user.length && comparePassword) {
  //     return user[0];
  //   }
  //   return null;
  // }

  async login(user: any): Promise<LoginResponseDto> {
    const payload: JwtPayload = {
      sub: user._id,
      username: user.username,
      email: user.email,
    };
    console.log(payload);
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
