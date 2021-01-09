import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserDto } from './dtos/user.dto';
import { UserInput } from './inputs/user.input';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [UserDto])
  async users() {
    return this.userService.findAll();
  }

  @Mutation(() => UserDto)
  async createUser(@Args('input') input: UserInput) {
    return this.userService.create(input);
  }

  @Mutation(() => UserDto)
  async assignRole(@Args('userId') userId: string, @Args('role') role: string) {
    return this.userService.assignRole(userId, role);
  }
}
