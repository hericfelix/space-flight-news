import { Request, Response } from 'express';
import { ArticleRepository } from '../repositories';

const getArticleByIdController = async (req: Request, res: Response) => {
  const { validated } = req;

  const article = await new ArticleRepository().createArticle(validated);

  return res.status(201).json({ message: 'article created' });
};

export default getArticleByIdController;
