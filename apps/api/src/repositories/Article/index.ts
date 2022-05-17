import { ArticleInterface } from '@space-flight/types';
import {
  DeleteResult,
  getMongoRepository,
  MongoRepository,
  UpdateResult,
} from 'typeorm';
import { Article } from '../../entities/Article';

interface ArticleRepo {
  createArticle: (article: ArticleInterface) => Promise<ArticleInterface>;
  getArticleById: (id: string) => Promise<Article>;
  getArticles: () => Promise<Article[]>;
  updateArticle: (
    id: string,
    data: Partial<ArticleInterface>
  ) => Promise<UpdateResult>;
  deleteArticle: (id: string) => Promise<DeleteResult>;
}

class ArticleRepository implements ArticleRepo {
  private ormRepo: MongoRepository<Article>;

  constructor() {
    this.ormRepo = getMongoRepository(Article);
  }

  createArticle = async (data: ArticleInterface) =>
    await this.ormRepo.save(data);

  getArticleById = async (id: string) => await this.ormRepo.findOne(id);

  getArticles = async () => await this.ormRepo.find();

  updateArticle = async (id: string, data: Partial<ArticleInterface>) =>
    await this.ormRepo.update(id, data);

  deleteArticle = async (id: string) => await this.ormRepo.delete(id);
}

export default ArticleRepository;
