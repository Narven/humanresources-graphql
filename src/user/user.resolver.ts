import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GetClaims } from '../decorators/get-claims.decorator';
import { DepartmentService } from '../department/department.service';
import ITokenClaims from '../interfaces/token-claims.interface';
import { UserDto } from './dtos/user.dto';
import { UserInput } from './inputs/user.input';
import UserRole from './user-role.enum';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly departmentService: DepartmentService,
  ) {}

  @Query(() => UserDto)
  async me(@GetClaims() claims: ITokenClaims) {
    return this.userService.getById(claims.role, claims.uid);
  }

  @Query(() => [UserDto])
  async users(@GetClaims() claims: ITokenClaims) {
    return this.userService.findAll(claims.role);
  }

  @Query(() => UserDto)
  async user(@GetClaims() claims: ITokenClaims, @Args('id') id: string) {
    return this.userService.getById(claims.role, id);
  }

  @Mutation(() => UserDto)
  async createUser(@Args('input') input: UserInput) {
    const user = await this.userService.create(input);
    await this.departmentService.addToDepartment(input.department, user);
    return user;
  }

  @Mutation(() => UserDto)
  async assignRole(
    @Args('userId') userId: string,
    @Args('role') role: UserRole,
  ) {
    return this.userService.assignRole(userId, role);
  }
}
