import { NewsItem, NewsDetail } from './news';

export interface NewsOutput {
  getNews: Promise<NewsItem[]>;
}
