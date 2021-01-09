import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DepartmentSchema } from './department.schema';
import { DepartmentService } from './department.service';
import { DepartmentResolver } from './department.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Department',
        schema: DepartmentSchema,
      },
    ]),
  ],
  providers: [DepartmentService, DepartmentResolver],
})
export class DepartmentModule {}
