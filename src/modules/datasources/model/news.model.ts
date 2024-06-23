export interface NewsItemModel {
  id: number;
  title: string;
  body: string;
  publishedAt: string;
}

export interface NewsDetailModel {
  id: number;
  title: string;
  body: string[];
  publishedAt: string;
}
