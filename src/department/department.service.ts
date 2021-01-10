import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import UserRole from '../user/user-role.enum';
import { User } from '../user/user.schema';
import { Department, DepartmentDocument } from './department.schema';
import { CreateDepartmentDto } from './dtos/create-department.dto';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectModel('Department')
    private readonly departmentModel: Model<DepartmentDocument>,
  ) {}

  async findAll(roleAccess: UserRole): Promise<Department[]> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const accessModel = this.departmentModel.byAccess(roleAccess);
    return accessModel.find().populate('users').exec();
  }

  async create(createDepartmentDto: CreateDepartmentDto): Promise<Department> {
    const createDepartment = new this.departmentModel(createDepartmentDto);
    return await createDepartment.save();
  }

  async getById(roleAccess: UserRole, id: string): Promise<Department> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const accessModel = this.departmentModel.byAccess(roleAccess);
    return accessModel.findById(id).populate('users').exec();
  }

  async addToDepartment(departmentId: string, user: User) {
    return this.departmentModel.updateOne(
      { _id: departmentId },
      { $push: { users: user } },
    );
  }
}
