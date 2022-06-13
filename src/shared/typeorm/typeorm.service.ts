import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as Entities from '../../entities';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  @Inject(ConfigService)
  private readonly config: ConfigService;

  public createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.config.get<string>('DB_HOST'),
      port: this.config.get<number>('DB_PORT'),
      database: this.config.get<string>('DB_DATABASE'),
      username: this.config.get<string>('DB_USERNAME'),
      password: this.config.get<string>('DB_PASSWORD'),
      entities: Object.values(Entities),
      logger: 'file',
      synchronize: true, // never use TRUE in production!
    };
  }
}
