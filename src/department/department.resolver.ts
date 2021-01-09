import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DepartmentService } from './department.service';
import { DepartmentDto } from './dtos/department.dto';
import { DepartmentInput } from './inputs/department.input';

@Resolver()
export class DepartmentResolver {
  constructor(private readonly departmentService: DepartmentService) {}

  @Query(() => [DepartmentDto])
  async departments() {
    return this.departmentService.findAll();
  }

  @Mutation(() => DepartmentDto)
  async createDepartment(@Args('input') input: DepartmentInput) {
    return this.departmentService.create(input);
  }
}
