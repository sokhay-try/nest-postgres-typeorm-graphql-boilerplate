import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities';
import { Repository } from 'typeorm';
import { UserInput } from './dto/user.input.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
  ) {}

  async getUserById(id: number): Promise<UserEntity> {
    return this.userRepo.findOne({ where: { id } });
  }

  async createUser(userInput: UserInput): Promise<UserEntity> {
    return this.userRepo.save(userInput);
  }
}
