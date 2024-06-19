'use client'
import { useNews, useNewsById } from './News.usecase';
import { newsCards, newsDetail, newsError, newsLoading } from './News.view';

export function NewsPage() {
  const { newses, loading, error } = useNews(1, 10);
  return (
    <>
      {newses && newsCards(newses)}
      {loading && newsLoading()}
      {error && newsError(error)}
    </>
  )
}

export function NewsPageById({ id }: { id: string }) {
  const { news, loading } = useNewsById(id);

  return (
    <>
      {news && newsDetail(news)}
      {loading && newsLoading()}
      {!loading && !news && newsError('Failed to load news')}
    </>
  )
}
