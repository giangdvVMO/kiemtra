import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({
  collection: 'tbl_user',
})
export class User {
  @Prop({
    type: Number,
  })
  _id: number;

  @Prop({})
  username: string;

  @Prop()
  email: number;

  @Prop()
  password: string;

  @Prop()
  fullname: string;

  @Prop()
  birthday: number;

  @Prop()
  role: string;

  @Prop({ default: 0 })
  status: boolean;

  @Prop()
  phone: string;

  @Prop({
    type: Number,
    ref: 'tbl_company',
    nullable: true,
  })
  idCompany: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.index({ email: 1, username: 1 }, { unique: true });
