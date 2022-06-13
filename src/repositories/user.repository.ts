import { EntityRepository } from 'typeorm';

import * as I from './interfaces/user.interface';
import { UserEntity } from 'src/entities';
import { BaseRepository } from 'src/shared/typeorm/base.repository';

@EntityRepository(UserEntity)
export class UserRepository extends BaseRepository<UserEntity> {
  findByName(username: string) {
    return this.findOne({ where: { username } });
  }
}
