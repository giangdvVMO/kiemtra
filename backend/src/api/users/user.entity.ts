import { Exclude } from 'class-transformer';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

import {
  UserGender,
  UserPosition,
  UserStatus,
  UserTypes,
  USER_CONST,
} from './user.constant';
import { BaseEntity } from '../../share/database/base.entity';
import { RoleEntity } from '../roles/entities/role.entity';
import { PostEntity } from '../post/post.entity';
@Entity({ name: USER_CONST.MODEL_NAME })
export class UserEntity extends BaseEntity {
  @Column({ length: 255, default: null })
  last_name: string;

  @Column({ length: 255, default: null })
  first_name: string;

  @Column({ length: 255, unique: true })
  email: string;

  @Column({ length: 100 })
  @Exclude()
  password: string;

  @Column({ length: 100, nullable: true })
  avatar: string;

  @Column({ type: 'enum', enum: UserTypes })
  type: number;

  @Column({ type: 'enum', enum: UserGender })
  gender: number;

  @Column({ type: 'enum', enum: UserPosition })
  position: number;

  @Column({ length: 50, nullable: true })
  birthday: string;

  @Column({ default: false })
  is_administrator: boolean;

  @Column({ type: 'enum', enum: UserStatus, default: UserStatus.ACTIVE })
  status: number;

  @Column({ type: 'bigint', nullable: true })
  created_by: number;

  @Column({ length: 15, nullable: true })
  phone: string;

  @Column({ length: 50, nullable: true })
  start_date: string;

  @Column({ length: 50, nullable: true })
  expired_date: string;

  @Column({ type: 'datetime', nullable: true })
  last_login: Date;

  @ManyToOne(() => RoleEntity)
  @JoinColumn({ name: 'role_id' })
  role: RoleEntity;

  @OneToMany(() => PostEntity, (postEntity) => postEntity.id)
  @JoinColumn({ name: 'post_id' })
  post: PostEntity[];
}
