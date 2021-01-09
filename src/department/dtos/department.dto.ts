import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DepartmentDto {
  @Field(() => ID)
  readonly id: string;

  @Field()
  readonly name: string;
}
