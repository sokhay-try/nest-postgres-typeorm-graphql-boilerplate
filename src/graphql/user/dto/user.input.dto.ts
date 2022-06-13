import { Field, ID, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { BaseFilter } from 'src/common/helper/graphql-helpers/filter.helper';

/**
 * sampleInput
 */
@InputType()
export class UserInput {
  @Field()
  @IsNotEmpty()
  username!: string;

  @Field()
  @IsNotEmpty()
  password!: string;
}

/**
 * timeUpdate
 */
@InputType()
export class UserUpdate extends UserInput {
  @Field(() => ID)
  @IsNotEmpty()
  readonly id?: string;
}
/**
 * sampleFilter
 */
@InputType()
export class UserFilter extends BaseFilter {
  @Field(() => ID, { nullable: true })
  readonly id?: string;

  @Field({ nullable: true })
  readonly username?: string;
}
