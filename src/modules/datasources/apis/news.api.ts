import { ErrorResDTO } from "@/modules/commons/dtos";
import { GetListNewsResDTO } from "../dtos/news.dto";
import { News } from "../entities";

export class NewsApi {
  constructor(private HOST: string) { }

  public async getNews(page: number, limit: number): Promise<GetListNewsResDTO | ErrorResDTO> {
    try {
      const response = await fetch(`${this.HOST}/news?page=${page}&limit=${limit}`);
      if (!response.ok) {
        return Promise.reject({
          errors: {
            message: "Error fetching news",
          },
        } as ErrorResDTO)
      }
      const data = await response.json();
      if (data.errors) {
        return Promise.reject({
          errors: {
            message: data.errors.message,
          },
        } as ErrorResDTO)
      }
      const formattedNews: GetListNewsResDTO = {
        message: data.message,
        data: {
          news: data.data.news.map((news: News) => ({
            id: news.id,
            title: news.title,
            body: news.body,
            publishedAt: this.formatDateToIndonesia(news.publishedAt.split('T')[0]),
          }))
        }
      };
      return Promise.resolve(formattedNews);
    } catch (error) {
      return Promise.reject({
        errors: {
          message: error,
        },
      } as ErrorResDTO)
    }
  }

  public async getNewsByID(id: string) {
    try {
      const response = await fetch(`${this.HOST}/news/${id}`);
      if (response.status !== 200) {
        throw new Error("Error fetching questions");
      }
      const data = await response.json();
      return {
        id: data.data.news.id,
        title: data.data.news.title,
        body: data.data.news.body,
        publishedAt: this.formatDateToIndonesia(data.data.news.publishedAt.split('T')[0]),
      }
    } catch (error) {
      return {
        error: true,
        message: error,
        modules: [],
      }
    }
  }

  private formatDateToIndonesia(dateString: string) {
    const [year, month, day] = dateString.split('-');

    const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

    return `${day} ${monthNames[parseInt(month) - 1]} ${year}`;
  }
}
