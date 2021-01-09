import { Extensions, Field, ID, ObjectType } from '@nestjs/graphql';
import { UserDto } from '../../user/dtos/user.dto';
import UserRole from '../../user/user-role.enum';
import { User } from '../../user/user.schema';

@ObjectType()
export class DepartmentDto {
  @Field(() => ID)
  readonly id: string;

  @Field()
  readonly name: string;

  @Field(() => [UserDto])
  // @Extensions({ role: UserRole.Admin })
  readonly users: User[];
}
