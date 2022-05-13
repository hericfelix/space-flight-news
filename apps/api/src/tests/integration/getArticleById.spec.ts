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

  it('should get user and return status 200', async () => {
    await ArticleRepository.save(validArticle);

    const response = await request(app).get('/articles/1');

    expect(response.status).toBe(200);
  });
  it("should'nt be able to get user and return status 404", async () => {
    const response = await request(app).get('/articles/1');

    expect(response.status).toBe(404);
    expect(Object.values(response.body)[0]).toBe('article not found');
  });
});
