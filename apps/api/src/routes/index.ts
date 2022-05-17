import { Router } from 'express';
import {
  createArticleController,
  deleteArticleController,
  getArticleByIdController,
  getArticlesController,
  updateArticleController,
} from '../controllers';
import { validateSchema } from '../middlewares';
import { createArticleSchema, updateArticleSchema } from '../schemas';

const articleRouter = Router();

articleRouter.get('/articles', getArticlesController);
articleRouter.get('/articles/:id', getArticleByIdController);
articleRouter.post(
  '/articles',
  validateSchema(createArticleSchema),
  createArticleController
);
articleRouter.put(
  '/articles/:id',
  validateSchema(updateArticleSchema),
  updateArticleController
);
articleRouter.delete('/articles/:id', deleteArticleController);

export default articleRouter;
