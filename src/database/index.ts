import { EntityRepository, MikroORM, Options } from '@mikro-orm/core';
import { EntityManager } from '@mikro-orm/postgresql';

import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { NODE_ENV, DB_USER, DB_PASSWORD,  DB_HOST, DB_PORT, DB_DATABASE } from '@config';
import { BaseEntity } from '@entities/base.entity';
import { UserEntity } from '@entities/users.entity';

export const dbOptions: Options = {
  type: 'postgresql',
  clientUrl: `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`,

  entities: [BaseEntity, UserEntity],
  highlighter: new SqlHighlighter(),
  debug: NODE_ENV === 'development' ? true : false,
};

export const DI = {} as {
  orm: MikroORM;
  em: EntityManager;
  userRepository: EntityRepository<UserEntity>;
};
