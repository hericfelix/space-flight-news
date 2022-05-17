declare namespace Express {
  export interface Request {
    validated: Partial<ArticleInterface>;
  }
}
