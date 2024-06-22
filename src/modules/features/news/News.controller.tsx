'use client'
import { useNews, useNewsById } from './News.hook';
import { NewsCards, NewsDetail, NewsError, NewsLoading } from './News.view';

export function NewsPage() {
  const { news, loading, error } = useNews(1, 10);
  return (
    <>
      {news && <NewsCards  news={news} />}
      {loading && <NewsLoading />}
      {error && <NewsError message={error} />}
    </>
  )
}

export function NewsPageById({ id }: { id: string }) {
  const { news, loading } = useNewsById(id);

  return (
    <>
      {news && <NewsDetail news={news} />}
      {loading && <NewsLoading />}
      {!loading && !news && <NewsError message="News not found" />}
    </>
  )
}
