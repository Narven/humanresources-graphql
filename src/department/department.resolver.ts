import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GetClaims } from '../decorators/get-claims.decorator';
import ITokenClaims from '../interfaces/token-claims.interface';
import { DepartmentService } from './department.service';
import { DepartmentDto } from './dtos/department.dto';
import { DepartmentInput } from './inputs/department.input';

@Resolver()
export class DepartmentResolver {
  constructor(private readonly departmentService: DepartmentService) {}

  @Query(() => [DepartmentDto])
  async departments(@GetClaims() claims: ITokenClaims) {
    return this.departmentService.findAll(claims.role);
  }

  @Query(() => DepartmentDto)
  async department(@GetClaims() claims: ITokenClaims, @Args('id') id: string) {
    return this.departmentService.getById(claims.role, id);
  }

  @Mutation(() => DepartmentDto)
  async createDepartment(@Args('input') input: DepartmentInput) {
    return this.departmentService.create(input);
  }
}
