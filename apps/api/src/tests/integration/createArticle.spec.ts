import request from 'supertest';
import { ConnectionTestJest, invalidArticle, validArticle } from '../';
import app from '../../app';

describe('create article route integration test', () => {
  let conn: ConnectionTestJest;

  beforeEach(async () => {
    conn = new ConnectionTestJest();
    await conn.connect();
  });

  afterEach(async () => {
    await conn.close();
  });

  it('should create user and return status 201', async () => {
    const response = await request(app).post('/articles').send(validArticle);

    expect(response.status).toBe(201);
    expect(Object.values(response.body)[0]).toBe('article created');
  });

  it("should'nt be able to create user and return status 400", async () => {
    const response = await request(app).post('/articles').send(invalidArticle);

    expect(response.status).toBe(400);
    expect(Object.values(response.body)[0]).toStrictEqual([
      'url is a required field',
    ]);
  });
});
