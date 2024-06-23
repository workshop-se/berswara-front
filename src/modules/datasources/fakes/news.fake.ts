import { faker } from '@faker-js/faker'
import { NewsDetailModel, NewsItemModel } from '../model/news.model'
export class FakeNews {
  constructor() { }
  public async getNews(page: number, limit: number): Promise<NewsItemModel[]> {
    return Array.from({ length: limit }, (_, i) => {
      return {
        id: i,
        title: faker.lorem.sentence(),
        body: faker.lorem.paragraph(),
        publishedAt: faker.date.recent().toISOString(),
      } as NewsItemModel
    })
  }

  public async getNewsByID(id: string): Promise<NewsDetailModel> {
    const body = Array.from({ length: 3 }, () => faker.lorem.paragraph())
    return {
      id: parseInt(id),
      title: faker.lorem.sentence(),
      body: body,
      publishedAt: faker.date.recent().toISOString(),
    } as NewsDetailModel
  }
}
