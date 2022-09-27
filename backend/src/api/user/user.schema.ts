import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({
  collection: 'tbl_user',
})
export class User {
  @Prop()
  _id: number;

  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  email: string;

  @Prop()
  fullname: string;

  @Prop()
  birthday: Date;

  @Prop()
  role: string;

  @Prop({ default: 0 })
  status: boolean;

  @Prop()
  phone: string;

  @Prop({ default: null })
  idCompany: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.index({ email: 1, username: 1 }, { unique: true });
