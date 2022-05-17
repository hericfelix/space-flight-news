import { EventsInterface, LaunchesInterface } from '@space-flight/types';
import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity()
export class Article {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  featured: boolean;

  @Column()
  title: string;

  @Column()
  url: string;

  @Column()
  imageUrl: string;

  @Column()
  newsSite: string;

  @Column()
  summary: string;

  @Column()
  publishedAt: string;

  @Column()
  launches: LaunchesInterface[];

  @Column()
  events: EventsInterface[];
}
