'use client'
import { News, getNews } from '@/lib/news';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Page() {
  const [newses, setNewses] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchNews = async () => {
      const data = await getNews(1, 4);
      if (data.error) {
        console.error(data.message);
      }
      setNewses(data);
      setLoading(false);
    }
    fetchNews();
  }, []);
  return (
    <div className='w-[1128px] m-auto pt-[105px]'>
      <h1 className='text-[64px]'>Baca berita terbaru!</h1>
      <div className='flex flex-col gap-y-[47px] pb-[126px]'>
        {newses.map((news) => (
          <div key={news.id} className='bg-white px-[48px] py-[40px] rounded-[16px] drop-shadow-md flex flex-col gap-[48px]'>
            <div className='grow'>
              <h2 className='text-[36px]'>
                {news.title}
              </h2>
              <p className='text-[18px] text-[#7A7A7A]'>
                {news.body}
              </p>
            </div>
            <div className='flex justify-between'>
              <div className='flex items-center text-[#7A7A7A]'>{news.publishedAt}</div>
              <Link className='w-[201px] h-[48px] bg-[#B30D19] text-white rounded-[10px] flex items-center justify-center' href={`/news/${news.id}`}>Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

