import request from 'supertest';
import { ConnectionTestJest, validArticle } from '../';
import app from '../../app';
import { ArticleRepository } from '../../repositories';

describe('get article by id route integration test', () => {
  let conn: ConnectionTestJest;

  beforeEach(async () => {
    conn = new ConnectionTestJest();
    await conn.connect();
  });

  afterEach(async () => {
    await conn.close();
  });

  it('should get users and return status 200', async () => {
    await ArticleRepository.save(validArticle);

    const response = await request(app).get('/articles');

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(1);
  });
  it('should be able to get users, return status 200 and an empty array', async () => {
    const response = await request(app).get('/articles');

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(0);
  });
});
