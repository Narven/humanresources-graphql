import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dtos/create-user.dto';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
  private readonly _logger = new Logger('UserService');

  constructor(
    @InjectModel('User')
    private readonly userModel: Model<UserDocument>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createUser = new this.userModel(createUserDto);
    return await createUser.save();
  }

  async assignRole(userId: string, role: string): Promise<User> {
    await this.userModel.updateOne({ _id: userId }, { role });
    return this.userModel.findById(userId);
  }

  async getById(userId: string): Promise<User> {
    return this.userModel.findById(userId);
  }
}
