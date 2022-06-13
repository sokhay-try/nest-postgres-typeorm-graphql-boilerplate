import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities';
import { UserRepository } from 'src/repositories';
import { UserResolver } from './user/user.resolver';
import { UserService } from './user/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, UserRepository])],
  providers: [
    //--,
    UserResolver,
    UserService,
  ],
})
export class GraphQLModules {}
