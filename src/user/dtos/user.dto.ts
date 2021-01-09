import { Extensions, Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
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

@ObjectType()
export class UserDto {
  @Field(() => ID)
  readonly id: string;

  @Field()
  readonly name: string;

  @Field()
  readonly email: string;

  @Field()
  // @Extensions({ role: UserRole.User })
  readonly phone: string;

  @Field(() => UserRole)
  // @Extensions({ role: UserRole.Admin })
  readonly role: UserRole;

  @Field(() => DepartmentDto)
  // @Extensions({ role: UserRole.User })
  readonly department: Department;
}
