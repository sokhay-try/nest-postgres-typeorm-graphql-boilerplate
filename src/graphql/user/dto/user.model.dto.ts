import { Field, ObjectType, ID } from '@nestjs/graphql';
import { BaseModel } from 'src/common/helper/graphql-helpers/base.model.helper';
import { Paginated } from 'src/common/helper/graphql-helpers/paginated.helper';

@ObjectType()
export class UserType extends BaseModel {
  @Field(() => ID)
  id!: string;

  @Field({ nullable: true })
  username?: string;

  @Field({ nullable: true })
  password?: string;

  @Field({ nullable: true })
  token?: string;
}

@ObjectType()
export class PaginatedUserType extends Paginated(UserType) {}
