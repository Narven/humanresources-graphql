import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import * as mongoFields from 'mongoose-fields-filter';
import UserRole from './user-role.enum';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({
    required: true,
    access: ['user', 'admin'],
  })
  name?: string;

  @Prop({
    unique: true,
    required: true,
    access: ['user', 'admin'],
  })
  email: string;

  @Prop({
    access: ['user', 'admin'],
  })
  phone: string;

  @Prop({
    default: UserRole.User,
    enum: UserRole,
    type: String,
    access: ['admin'],
  })
  role?: UserRole;

  @Prop({
    ref: 'Department',
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    access: ['user', 'admin'],
  })
  department: string;
}

const UserSchema = SchemaFactory.createForClass(User);

UserSchema.plugin(mongoFields, { depth: 3 });

export { UserSchema };
