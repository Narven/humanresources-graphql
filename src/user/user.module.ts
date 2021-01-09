import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DepartmentModule } from '../department/department.module';
import { DepartmentSchema } from '../department/department.schema';
import { DepartmentService } from '../department/department.service';
import { UserResolver } from './user.resolver';
import { UserSchema } from './user.schema';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'User',
        schema: UserSchema,
      },
      {
        name: 'Department',
        schema: DepartmentSchema,
      },
    ]),
    DepartmentModule,
  ],
  providers: [UserResolver, UserService, DepartmentService],
})
export class UserModule {}
