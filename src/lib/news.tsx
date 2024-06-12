const HOST = process.env.HOST_NEWS || 'https://wrpl.yazidrizkik.dev/api/content';

interface News {
  id: number;
  title: string;
  body: string;
  publishedAt: Date;
}

const getNews = async (page: number, limit: number) => {
  try {
    const response = await fetch(`${HOST}/news?page=${page}&limit=${limit}`);
    if (response.status !== 200) {
      throw new Error("Error fetching questions");
    }
    const data = await response.json();
    const formattedNews = data.data.news.map((news: { id: number; title: string; body: string; publishedAt: string; }) => ({
      id: news.id,
      title: news.title,
      body: news.body,
      publishedAt: formatDateToIndonesia(news.publishedAt.split('T')[0]),
    
    }))
    return formattedNews
  } catch (error) {
    return {
      error: true,
      message: error,
      modules: [],
    }
  }
}

const getNewsByID = async (id: string) => {
  try {
    const response = await fetch(`${HOST}/news/${id}`);
    if (response.status !== 200) {
      throw new Error("Error fetching questions");
    }
    const data = await response.json();
    return {
      id: data.data.news.id,
      title: data.data.news.title,
      body: data.data.news.body,
      publishedAt: formatDateToIndonesia(data.data.news.publishedAt.split('T')[0]),
    }
  } catch (error) {
    return {
      error: true,
      message: error,
      modules: [],
    }
  }
}

const formatDateToIndonesia = (dateString: string) => {
  const [year, month, day] = dateString.split('-');

  const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

  return `${day} ${monthNames[parseInt(month) - 1]} ${year}`;
}

export { getNews, getNewsByID };
export type { News };
