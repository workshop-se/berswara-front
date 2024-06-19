import { NewsRepository } from './repositories';

export const datasource = {
  news: new NewsRepository(
    process.env.HOST_NEWS || 'https://wrpl.yazidrizkik.dev/api/content'
  )
}
