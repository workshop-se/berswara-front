import { NewsItemModel } from "@/datasources/model/news.model";
import Link from "next/link";
import { NewsItem } from "./news.item";

export const NewsContainer = ({ news }: { news: NewsItemModel[] }) => {
  return (
    <div className='w-[1128px] m-auto pt-[105px]'>
      <h1 className='text-[64px]'>Baca berita terbaru!</h1>
      <div className='flex flex-col gap-y-[47px] pb-[126px]'>
        {news.map((item) => (
          <NewsItem key={item.id} news={item} />
        ))}
      </div>
    </div>

  );
}
