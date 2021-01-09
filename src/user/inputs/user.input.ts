import { Field, InputType } from '@nestjs/graphql';
import UserRole from '../user-role.enum';

@InputType()
export class UserInput {
  @Field({
    description: 'User name',
    nullable: false,
  })
  readonly name: string;

  @Field({
    description: 'Email of the User',
    nullable: false,
  })
  readonly email: string;

  @Field({
    nullable: false,
  })
  readonly phone: string;

  @Field({
    defaultValue: UserRole.User,
    description: 'Role of the User',
    nullable: false,
  })
  readonly role: UserRole;

  @Field({
    description: 'ID of the department',
    nullable: false,
  })
  readonly department: string;
}
