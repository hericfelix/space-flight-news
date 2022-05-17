import { Request, Response } from 'express';
import { ArticleRepository } from '../repositories';
import { ErrorHandler } from '../utils';

const deleteArticleController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const article = await new ArticleRepository().deleteArticle(id);

  if (!article) {
    throw new ErrorHandler(404, 'article not found');
  }

  return res.status(204);
};

export default deleteArticleController;
