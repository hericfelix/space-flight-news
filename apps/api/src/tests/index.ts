import { MongoMemoryServer } from 'mongodb-memory-server';
import { createConnection, getConnection } from 'typeorm';
import Article from '../entities/Article';

export const validArticle = {
  featured: false,
  title: 'string',
  url: 'string',
  imageUrl: 'string',
  newsSite: 'string',
  summary: 'string',
  publishedAt: 'string',
  launches: [
    {
      id: 'string',
      provider: 'string',
    },
  ],
  events: [
    {
      id: 'string',
      provider: 'string',
    },
  ],
};

export const invalidArticle = {
  featured: false,
  title: 'string',
  imageUrl: 'string',
  newsSite: 'string',
  summary: 'string',
  publishedAt: 'string',
  launches: [
    {
      id: 'string',
      provider: 'string',
    },
  ],
  events: [
    {
      id: 'string',
      provider: 'string',
    },
  ],
};

export class ConnectionTestJest {
  mongoServer: MongoMemoryServer;

  connect = async () => {
    this.mongoServer = await MongoMemoryServer.create();
    const mongoUri = this.mongoServer.getUri();

    await createConnection({
      type: 'mongodb',
      url: mongoUri,
      database: 'test',
      entities: [Article],
    });
  };

  close = async () => {
    await getConnection().close();
    await this.mongoServer.stop();
  };
}
