import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({
  collection: 'tbl_user',
})
export class User {

  @Prop({
    type: Number
  })
  _id: number;

  @Prop({
    
  })
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

  @Prop()
  phone: string;

  @Prop()
  status: number;

  @Prop({
    type: Number,
    ref:'tbl_company',
    nullable:true
  })
  idCompany: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
