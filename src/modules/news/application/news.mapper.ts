import { NewsItem as NewsItemDomain, NewsDetail as NewsDetailDomain } from '../domain/news';
import { NewsItem, NewsDetail } from './news';

export const mapNewsItem = (newsItems: NewsItemDomain[]): NewsItem[] =>
  newsItems.map((itemDomain: NewsItemDomain) => ({
    id: itemDomain.id,
    title: itemDomain.title,
    body: itemDomain.body,
    publishedAt: itemDomain.publishedAt,
  }))

export const mapNewsDetail = (newsDetails: NewsDetailDomain[]): NewsDetail[] => 
  newsDetails.map((detailDomain: NewsDetailDomain) => ({
    id: detailDomain.id,
    title: detailDomain.title,
    body: detailDomain.body,
    publishedAt: detailDomain.publishedAt,
  }))
