import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateDepartmentDto {
  @Field()
  readonly name: string;
}
