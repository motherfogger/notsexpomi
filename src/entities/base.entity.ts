import { Entity, PrimaryKey, Property, SerializedPrimaryKey } from '@mikro-orm/core';

@Entity()
export abstract class BaseEntity {
  @PrimaryKey()
  id!: number;

  @Property({ type: 'date' })
  createdAt: Date = new Date();

  @Property({ type: 'date', onUpdate: () => new Date() })
  updatedAt: Date = new Date();
}

