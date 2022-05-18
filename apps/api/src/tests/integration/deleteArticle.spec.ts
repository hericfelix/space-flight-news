import request from 'supertest';
import { ConnectionTestJest, validArticle } from '../';
import app from '../../app';
import { ArticleRepository } from '../../repositories';

describe('delete article route integration test', () => {
  let conn: ConnectionTestJest;
  let articleId: string;

  beforeEach(async () => {
    conn = new ConnectionTestJest();
    await conn.connect();
  });

  afterEach(async () => {
    await conn.close();
  });

  it('should delete user and return status 204', async () => {
    const { id } = await new ArticleRepository().createArticle(validArticle);
    articleId = id.valueOf();
    const response = await request(app).del(`/articles/${articleId}`);

    expect(response.status).toBe(204);
  });

  it("should'nt be able to delete user and return status 404", async () => {
    const response = await request(app).del(`/articles/${articleId}`);

    expect(response.status).toBe(404);
    expect(Object.values(response.body)[0]).toBe('article not found');
  });
});
