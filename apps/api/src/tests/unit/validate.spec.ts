import { NextFunction, Response, Request } from 'express';
import { validate } from '../../middlewares';
import { validArticle, invalidArticle } from '../';
import { articleSchema } from '../../schemas';

describe('Tests for validation schema middleware', () => {
  const mockRes: Partial<Response> = {};
  const mockReq: Partial<Request> = {};
  const mockNext: Partial<NextFunction> = jest.fn();

  beforeEach(() => {
    mockRes.json = jest.fn().mockReturnValue(mockRes);
    mockRes.status = jest.fn().mockReturnValue(mockRes);
    mockReq.body = {};
  });
  it('should be an invalid object', async () => {
    mockReq.body = invalidArticle;

    await validate(articleSchema)(mockReq, mockRes, mockNext);

    expect(mockRes.status).toHaveBeenCalledWith(400);
    expect(mockRes.json).toHaveBeenCalledWith({
      message: 'url is a required field',
    });
    expect(mockNext).toHaveBeenCalledTimes(0);
  });
  it('should be a valid object', async () => {
    mockReq.body = validArticle;

    await validate(articleSchema)(mockReq, mockRes, mockNext);

    expect(mockNext).toHaveBeenCalledTimes(1);
  });
});
