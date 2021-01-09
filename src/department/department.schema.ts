import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { User } from '../user/user.schema';

export type DepartmentDocument = Department & Document;

@Schema()
export class Department {
  @Prop()
  name: string;

  @Prop({
    type: [
      {
        ref: 'User',
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
  })
  users: User[];
}

export const DepartmentSchema = SchemaFactory.createForClass(Department);
