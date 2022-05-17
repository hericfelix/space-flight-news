import { Request, Response } from 'express';
import { ArticleRepository } from '../repositories';

const getArticlesController = async (_: Request, res: Response) => {
  const articles = await new ArticleRepository().getArticles();

  return res.status(200).json(articles);
};

export default getArticlesController;
