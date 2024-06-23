import { NewsApi } from './apis';

export const datasource = {
  news: new NewsApi(
    process.env.HOST_NEWS || 'https://wrpl.yazidrizkik.dev/api/content'
  )
}
