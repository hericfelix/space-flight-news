import { NextFunction, Response, Request } from 'express';
import { validateSchema } from '../../middlewares';
import { validArticle, invalidArticle } from '../';
import { createArticleSchema } from '../../schemas';

describe('Tests for validation schema middleware', () => {
  const mockRes: Partial<Response> = {};
  const mockReq: Partial<Request> = {};
  const mockNext: NextFunction = jest.fn();

  beforeEach(() => {
    mockRes.json = jest.fn().mockReturnValue(mockRes);
    mockRes.status = jest.fn().mockReturnValue(mockRes);
    mockReq.body = {};
  });
  it('should be an invalid object', async () => {
    mockReq.body = invalidArticle;

    await validateSchema(createArticleSchema)(
      mockReq as Request,
      mockRes as Response,
      mockNext as NextFunction
    );

    expect(mockRes.status).toHaveBeenCalledWith(400);
    expect(mockRes.json).toHaveBeenCalledWith({
      error: ['url is a required field'],
    });
    expect(mockNext).toHaveBeenCalledTimes(0);
  });
  it('should be a valid object', async () => {
    mockReq.body = validArticle;

    await validateSchema(createArticleSchema)(
      mockReq as Request,
      mockRes as Response,
      mockNext as NextFunction
    );

    expect(mockNext).toBeCalledTimes(1);
  });
});
