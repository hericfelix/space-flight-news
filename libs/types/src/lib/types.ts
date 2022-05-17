export interface LaunchesInterface {
  id: string;
  provider: string;
}

export interface EventsInterface {
  id: string;
  provider: string;
}

export interface ArticleInterface {
  id?: string;
  featured: boolean;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  launches: LaunchesInterface[];
  events: EventsInterface[];
}
