import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { LoginResponseDto } from './dto/login-response.dto';
import { UserService } from '../user/user.service';
import { ValidatorService } from './validations/check-expiration-time';
import { JwtPayload } from './payloads/jwt.payload';
import { UserSchema } from '../../api/user/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly validatorService: ValidatorService,
  ) {}

  async validateUser(username: string, password: string) {
    const user: any = await this.userService.findOneByCondition({
      username: username,
    });
    if (!user) {
      throw new BadRequestException('User not found, disabled or locked');
    }
    const comparePassword = await bcrypt.compare(password, user.password);
    if (user && comparePassword) {
      return user;
    }
    return null;
  }

  async login(user: any): Promise<LoginResponseDto> {
    // const rolePermissions =
    //   await this.rolesPermissionService.findAllByCondition({ role: user.role });

    // const permissions = rolePermissions.data.map((rolePermiss) => {
    //   return rolePermiss.permission.name;
    // });

    const payload: JwtPayload = {
      sub: user._id,
      username: user.username,
      // scopes: permissions,
      // isAdministrator: user.is_administrator,
      // name: user.first_name,
    };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
