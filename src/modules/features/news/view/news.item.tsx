import { NewsItemModel } from "@/datasources/model/news.model"
import Link from "next/link"

export const NewsItem = ({ news }: { news: NewsItemModel }) => {
  return (
    <div key={news.id} className='bg-white px-[48px] py-[40px] rounded-[16px] drop-shadow-md flex flex-col gap-[48px]'>
      <div className='grow'>
        <h2 className='text-[36px]'>
          {news.title}
        </h2>
        <p className='text-[18px] text-gray'>
          {news.body}
        </p>
      </div>
      <div className='flex justify-between'>
        <div className='flex items-center text-gray'>{news.publishedAt}</div>
        <Link className='w-[201px] h-[48px] bg-firebrick-0 text-white rounded-[10px] flex items-center justify-center' href={`/news/${news.title}`}>Read More</Link>
      </div>
    </div>
  )
}
