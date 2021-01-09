import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DepartmentService } from '../department/department.service';
import { UserDto } from './dtos/user.dto';
import { UserInput } from './inputs/user.input';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly departmentService: DepartmentService,
  ) {}

  @Query(() => [UserDto])
  async users() {
    return this.userService.findAll();
  }

  @Query(() => UserDto)
  async user(@Args('id') id: string) {
    return this.userService.getById(id);
  }

  @Mutation(() => UserDto)
  async createUser(@Args('input') input: UserInput) {
    const user = await this.userService.create(input);
    await this.departmentService.addToDepartment(input.department, user);
    return user;
  }

  @Mutation(() => UserDto)
  async assignRole(@Args('userId') userId: string, @Args('role') role: string) {
    return this.userService.assignRole(userId, role);
  }
}
