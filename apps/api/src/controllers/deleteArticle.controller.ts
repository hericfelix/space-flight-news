import { Request, Response } from 'express';
import { ArticleRepository } from '../repositories';
import { ErrorHandler, handleError } from '../utils';

const deleteArticleController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deleteResult = await new ArticleRepository().deleteArticle(id);

    if (deleteResult.affected === 0) {
      throw new ErrorHandler(404, 'article not found');
    }

    return res.status(204).json();
  } catch (error) {
    return handleError(error, res);
  }
};

export default deleteArticleController;
