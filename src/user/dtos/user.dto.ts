import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Department } from '../../department/department.schema';
import { DepartmentDto } from '../../department/dtos/department.dto';
import UserRole from '../user-role.enum';

registerEnumType(UserRole, {
  name: 'UserRole',
  description: 'Allowed roles',
  valuesMap: {
    Admin: {
      description: 'The creator and ruler of the universe',
    },
    User: {
      description: 'Standard Hu-man',
    },
  },
});

@ObjectType({
  description: 'User',
})
export class UserDto {
  @Field(() => ID)
  readonly id: string;

  @Field(() => String, { nullable: true })
  readonly name?: string;

  @Field(() => String)
  readonly email: string;

  @Field(() => String)
  readonly phone: string;

  @Field(() => UserRole, { nullable: true })
  readonly role?: UserRole;

  @Field(() => DepartmentDto)
  readonly department: Department;
}
