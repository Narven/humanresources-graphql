import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { User } from '../user/user.schema';
import * as mongoFields from 'mongoose-fields-filter';

export type DepartmentDocument = Department & Document;

@Schema()
export class Department {
  @Prop({
    access: ['user', 'admin'],
  })
  name: string;

  @Prop({
    type: [
      {
        ref: 'User',
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
    access: ['admin'],
  })
  users: User[];
}

const DepartmentSchema = SchemaFactory.createForClass(Department);

DepartmentSchema.plugin(mongoFields);

export { DepartmentSchema };
