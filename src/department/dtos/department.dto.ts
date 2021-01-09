import { Field, ID, ObjectType } from '@nestjs/graphql';
import { UserDto } from '../../user/dtos/user.dto';
import { User } from '../../user/user.schema';

@ObjectType()
export class DepartmentDto {
  @Field(() => ID)
  readonly id: string;

  @Field()
  readonly name: string;

  @Field(() => [UserDto])
  readonly users: User[];
}
