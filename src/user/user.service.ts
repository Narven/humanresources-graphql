import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserInput } from './inputs/user.input';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
  private readonly _logger = new Logger('UserService');

  constructor(
    @InjectModel('User')
    private readonly userModel: Model<UserDocument>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userModel.find().populate('department').exec();
  }

  async create(userInput: UserInput): Promise<User> {
    const createUser = new this.userModel(userInput);
    return await createUser.save();
  }

  async assignRole(userId: string, role: string): Promise<User> {
    await this.userModel.updateOne({ _id: userId }, { role });
    return this.userModel.findById(userId);
  }

  async getById(userId: string): Promise<User> {
    return this.userModel.findById(userId).populate('department');
  }
}
