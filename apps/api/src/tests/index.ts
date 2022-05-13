import { MongoMemoryServer } from 'mongodb-memory-server';
import { createConnection, getConnection } from 'typeorm';

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

  constructor() {
    this.mongoServer = new MongoMemoryServer();
  }

  connect = async () => {
    const mongoUri = this.mongoServer.getUri();

    await createConnection({
      type: 'mongodb',
      url: mongoUri,
      database: 'test',
    });
  };

  close = async () => {
    this.mongoServer.stop();
    await getConnection().close();
  };
}

console.log('hey');
