import { BadRequestException, NotFoundException } from '@nestjs/common';
import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { UserFilter, UserInput } from './dto/user.input.dto';
import { UserType } from './dto/user.model.dto';
import { UserService } from './user.service';

// @AuthenticateAuthorize()
@Resolver((of) => UserType)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => UserType)
  async getUserById(@Args('id') id: number): Promise<any> {
    const doc = await this.userService.getUserById(id);
    if (!doc) return new NotFoundException('Record not found');
    return doc;
  }

  @Mutation((of) => UserType)
  async createUser(@Args('userInput') userInput: UserInput) {
    console.log('.dd::', userInput);
    return this.userService.createUser(userInput);
  }
}
