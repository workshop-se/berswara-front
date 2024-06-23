'use client'
import { useEffect, useState } from "react";
import { NewsLoading } from "./view/news.loading";
import { NewsError } from "./view/news.error";
import { NewsContainer } from "./view/news.container";
import { FakeNews } from "@/modules/datasources/fakes";
import { NewsItemModel } from "@/modules/datasources/model/news.model";

export class NewsController {
  private newsService = new FakeNews();

  constructor() { }

  public getNews = ({ page, size }: { page: number, size: number }) => {
    const [news, setNews] = useState<NewsItemModel[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
      const fetchNews = async () => {
        try {
          const data = await this.newsService.getNews(page, size);
          setNews(data);
        } catch (error: any) {
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }

      fetchNews();
    }, [page, size]);

    if (loading) {
      return NewsLoading();
    }
    if (error) {
      return NewsError({ error });
    }
    if (news.length === 0) {
      return NewsError({ error: 'No news found' });
    }
    return NewsContainer({ news: news });
  }
}
