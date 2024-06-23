import { News, } from "@/lib/news";
import { ErrorResDTO } from "@/modules/commons/dtos";
import { datasource } from "@/modules/datasources/datasource.module";
import { GetListNewsResDTO } from "@/modules/datasources/dtos/news.dto";
import { useEffect, useState } from "react";

export function useNews(page: number, limit: number) {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string|undefined>(undefined);

  useEffect(() => {
    const fetchNews = async () => {
      await datasource.news.getNews(page, limit)
      .then((data: GetListNewsResDTO|ErrorResDTO) => {
        if ('errors' in data) {
          setError(data.errors.message);
          return;
        }
        setNews(data.data.news as unknown as News[]);
      })
      .catch((error: ErrorResDTO) => {
        console.error(error.errors.message);
        setError(error.errors.message);
      })
      .finally(() => {
        setLoading(false);
      });
    }
    fetchNews();
  }, [page, limit]);
  return {
    news,
    loading,
    error
  };
}

export function useNewsById(id: string) {
  const [news, setNews] = useState<News>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchNews = async () => {
      const data = await datasource.news.getNewsByID(id);
      setNews(data as unknown as News);
      setLoading(false);
    }
    fetchNews();
  }, [id]);
  return {
    news,
    loading,
  };
}
