import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { LoginResponseDto } from './dto/login-response.dto';
import { UsersService } from '../users/users.service';
import { ValidatorService } from './validations/check-expiration-time';
import { JwtPayload } from './payloads/jwt.payload';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
    private readonly validatorService: ValidatorService,
  ) {}

  async validateUser(email: string, password: string): Promise<UserEntity> {
    const user = await this.userService.findOne(email);
    if (!user) {
      throw new BadRequestException('User not found, disabled or locked');
    }
    const comparePassword = await bcrypt.compare(password, user.password);
    if (user && comparePassword) {
      return user;
    }
    return null;
  }

  async login(user: UserEntity): Promise<LoginResponseDto> {
    const rolePermissions =
      await this.rolesPermissionService.findAllByCondition({ role: user.role });

    const permissions = rolePermissions.data.map((rolePermiss) => {
      return rolePermiss.permission.name;
    });

    const payload: JwtPayload = {
      sub: user.id,
      email: user.email,
      scopes: permissions,
      isAdministrator: user.is_administrator,
      name: user.first_name,
    };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
