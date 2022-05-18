import express, { json, NextFunction, Request, Response } from 'express';
import articleRouter from './routes';
import { handleError } from './utils';

const app = express();

app.use(json());

app.use('', articleRouter);

//eslint-disable-next-line
app.use((err: any, _: Request, res: Response, __: NextFunction) => {
  return handleError(err, res);
});

export default app;
