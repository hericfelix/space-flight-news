import { Request, Response } from 'express';
import { ArticleRepository } from '../repositories';
import { ErrorHandler } from '../utils';

const getArticleByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { validated } = req;

  const article = await new ArticleRepository().updateArticle(id, validated);

  if (!article) {
    throw new ErrorHandler(404, 'article not found');
  }

  return res.status(200).json(article);
};

export default getArticleByIdController;
