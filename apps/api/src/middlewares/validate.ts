import { AnySchema } from 'yup';
import { NextFunction, Request, Response } from 'express';
import { ErrorHandler } from '../utils';

const validateSchema =
  (schema: AnySchema) =>
  async (req: Request, _: Response, next: NextFunction) => {
    try {
      const validated = await schema.validate(req.body, {
        stripUnknown: true,
      });

      req.validated = validated;

      return next();
    } catch (error) {
      throw new ErrorHandler(400, error);
    }
  };

export default validateSchema;
