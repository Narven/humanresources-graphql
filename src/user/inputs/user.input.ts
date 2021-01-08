import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserInput {
  @Field()
  readonly name: string;
  @Field()
  readonly email: string;
  @Field()
  readonly phone: string;
  @Field()
  readonly role: string;
  @Field()
  readonly department: string;
}
