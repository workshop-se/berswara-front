import { News } from "../entities";

interface GetListNewsResDTO {
  message: string;
  data: {
    news: News[];
  };
}

export type { GetListNewsResDTO };
