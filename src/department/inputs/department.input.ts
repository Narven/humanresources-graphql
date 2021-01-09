import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DepartmentInput {
  @Field()
  readonly name: string;
}
