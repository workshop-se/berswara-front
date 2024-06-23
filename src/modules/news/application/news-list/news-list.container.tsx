import React, { useState } from 'react';
import { NewsItem } from '../news';
import { NewsItem as NewsItemDomain } from '../../domain/news';

export const NewsListContainer = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const _getNews = async () => {
    try {
      const newsDomain: NewsItemDomain[] = await getNews(1, 10);
    } catch (error) {
    } finally {
      setLoading(false);
    }   
  }
}

// export function useNews(page: number, limit: number) {
//   const [news, setNews] = useState<News[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string|undefined>(undefined);
//
//   useEffect(() => {
//     const fetchNews = async () => {
//       await datasource.news.getNews(page, limit)
//       .then((data: GetListNewsResDTO|ErrorResDTO) => {
//         if ('errors' in data) {
//           setError(data.errors.message);
//           return;
//         }
//         setNews(data.data.news as unknown as News[]);
//       })
//       .catch((error: ErrorResDTO) => {
//         console.error(error.errors.message);
//         setError(error.errors.message);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//     }
//     fetchNews();
//   }, [page, limit]);
//   return {
//     news,
//     loading,
//     error
//   };
// }
//
// export function useNewsById(id: string) {
//   const [news, setNews] = useState<News>();
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const fetchNews = async () => {
//       const data = await datasource.news.getNewsByID(id);
//       setNews(data as unknown as News);
//       setLoading(false);
//     }
//     fetchNews();
//   }, [id]);
//   return {
//     news,
//     loading,
//   };
// }
