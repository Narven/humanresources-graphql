import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserInput } from './inputs/user.input';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => String)
  async hello() {
    return 'hello';
  }

  @Query(() => [CreateUserDto])
  async users() {
    return this.userService.findAll();
  }

  @Mutation(() => [CreateUserDto])
  async createUser(@Args('input') input: UserInput) {
    return this.userService.create(input);
  }
}
