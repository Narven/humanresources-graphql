import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import UserRole from './user-role.enum';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    unique: true,
    required: true,
  })
  email: string;

  @Prop()
  phone: string;

  @Prop({
    default: UserRole.User,
    enum: UserRole,
    type: String,
  })
  role: string;

  @Prop({
    ref: 'Department',
    required: true,
    type: mongoose.Schema.Types.ObjectId,
  })
  department: string;
}

const UserSchema = SchemaFactory.createForClass(User);

export { UserSchema };
