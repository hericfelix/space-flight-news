import { Request, Response } from 'express';
import { ArticleRepository } from '../repositories';
import { ErrorHandler, handleError } from '../utils';

const updateArticleController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { validated } = req;

    const updateResult = await new ArticleRepository().updateArticle(
      id,
      validated
    );

    if (updateResult.affected === 0) {
      throw new ErrorHandler(404, 'article not found');
    }

    return res.status(200).json();
  } catch (error) {
    return handleError(error, res);
  }
};

export default updateArticleController;
