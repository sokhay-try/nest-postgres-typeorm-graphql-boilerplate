import { Field, InputType, Int } from '@nestjs/graphql';
import { VARIABLE } from 'src/common/constants';

@InputType()
export class BaseFilter {
  @Field(() => Int, { defaultValue: VARIABLE.defaultLimit, nullable: true })
  readonly limit!: number;
  @Field(() => Int, { defaultValue: VARIABLE.defaultPageNum, nullable: true })
  readonly page!: number;
}
