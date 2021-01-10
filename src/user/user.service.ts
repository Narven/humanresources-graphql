import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserInput } from './inputs/user.input';
import UserRole from './user-role.enum';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
  private readonly _logger = new Logger('UserService');

  constructor(
    @InjectModel('User')
    private readonly userModel: Model<UserDocument>,
  ) {}

  async findAll(roleAccess: UserRole): Promise<User[]> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const accessModel = this.userModel.byAccess(roleAccess);
    return accessModel.find().populate('department').exec();
  }

  async create(userInput: UserInput): Promise<User> {
    const createUser = new this.userModel(userInput);
    return await createUser.save();
  }

  async assignRole(userId: string, role: UserRole): Promise<User> {
    await this.userModel.updateOne({ _id: userId }, { role });
    return this.userModel.findById(userId);
  }

  async getById(roleAccess: UserRole, userId: string): Promise<User> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const accessModel = this.userModel.byAccess(roleAccess);
    return accessModel.findById(userId).populate('department');
  }
}
