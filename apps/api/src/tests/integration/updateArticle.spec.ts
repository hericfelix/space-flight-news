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

  it('should update user and return status 200', async () => {
    await new ArticleRepository().createArticle(validArticle);

    const response = await request(app)
      .put('/articles/1')
      .send({ title: 'novo titulo' });

    expect(response.status).toBe(200);
  });
  it("should'nt be able to update user and return status 404", async () => {
    const response = await request(app).put('/articles/1');

    expect(response.status).toBe(404);
    expect(Object.values(response.body)[0]).toBe('article not found');
  });
});
