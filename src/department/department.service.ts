import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Department, DepartmentDocument } from './department.schema';
import { CreateDepartmentDto } from './dtos/create-department.dto';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectModel('Department')
    private readonly departmentModel: Model<DepartmentDocument>,
  ) {
  }

  async findAll(): Promise<Department[]> {
    return this.departmentModel.find().exec();
  }

  async create(createDepartmentDto: CreateDepartmentDto): Promise<Department> {
    const createDepartment = new this.departmentModel(createDepartmentDto);
    console.debug('createDepartmentDto', createDepartmentDto);
    return await createDepartment.save();
  }

  async getById(id: string): Promise<Department> {
    return this.departmentModel.findById(id);
  }
}
