import { News } from "@/lib/news";
import Link from "next/link";

export const newsLoading = () =>
  <>
    Loading...
  </>

export const newsError = (message: string) =>
  <>
    {message}
  </>

export const newsCards = (newses: News[]) =>
  <div className='w-[1128px] m-auto pt-[105px]'>
    <h1 className='text-[64px]'>Baca berita terbaru!</h1>
    <div className='flex flex-col gap-y-[47px] pb-[126px]'>
      {newses.map((news) => (
        newsCard(news)
      ))}
    </div>
  </div>

const newsCard = (news: News) =>
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
      <div className='flex items-center text-gray'>{new Date(news.publishedAt).toLocaleDateString('id-ID')}</div>
      <Link className='w-[201px] h-[48px] bg-firebrick-0 text-white rounded-[10px] flex items-center justify-center' href={`/news/${news.id}`}>Read More</Link>
    </div>
  </div>


export const newsDetail = (news: News) => {
  const splitNews = news?.body.split(/(?<=\.)/);
  return (

    <div className="bg-white shadow-md mt-[54px] w-[1304px] m-auto px-[87px] py-[47px]">
      {
        <div className="flex flex-col">
          <div className="text-[32px] font-bold">{news.title}</div>
          <div className="text-[16px] font-normal text-left">Published at : {new Date(news.publishedAt).toLocaleDateString('id-ID')}</div>
          <br />
          {
            splitNews && splitNews.reduce((acc: string[][], sentence, index) => {
              if (index % 4 === 0) {
                acc.push([]);
              }
              acc[acc.length - 1].push(sentence);
              return acc;
            }, []).map((paragraph, index) => paragraphItem(index, paragraph))
          }
        </div>
      }
    </div>
  )
}

const paragraphItem = (key: any, paragraph: string[]) =>
  <div key={key} className="text-[16px] font-normal text-left">
    {paragraph.join(' ')}
  </div>
