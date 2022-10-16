import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { RoleEnum, StatusEnum } from 'src/share/common/enum';
import { maxLengthPhone } from 'src/share/common/constanst';

export type UserDocument = User & Document;

@Schema({
  collection: 'tbl_sanpham',
})
export class User {
  @Prop({type:String, unique: true, required: true })
  _id: string;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: Number })
  year: number;

  @Prop({ type: Number })
  weight: number;

  @Prop({ type: Boolean })
  devo: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
