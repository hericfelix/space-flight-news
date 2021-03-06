import { Request, Response } from 'express';
import { ArticleRepository } from '../repositories';
import { ErrorHandler, handleError } from '../utils';

const getArticleByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const article = await new ArticleRepository().getArticleById(id);

    if (!article) {
      throw new ErrorHandler(404, 'article not found');
    }

    return res.status(200).json(article);
  } catch (error) {
    return handleError(error, res);
  }
};

export default getArticleByIdController;
