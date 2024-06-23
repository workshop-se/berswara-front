'use client'
import { News, getNewsByID } from '@/lib/news';
import { useState, useEffect } from 'react';

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const [news, setNews] = useState<News>();
  useEffect(() => {
    const fetchNews = async () => {
      const data = await getNewsByID(id);
      setNews(data as unknown as News);
    }
    fetchNews();
  }, []);

  // split news to every sentence
  const splitNews = news?.body.split(/(?<=\.)/);
  
  return (
    <div className="bg-white shadow-md mt-[54px] w-[1304px] m-auto px-[87px] py-[47px]">
      {
        news ? (
          <div className="flex flex-col">
            <div className="text-[32px] font-bold">{news.title}</div>
            <div className="text-[16px] font-normal text-left">Published at : {new Date(news.publishedAt).toLocaleDateString('id-ID')}</div>
            <br />
            {
            splitNews && splitNews.reduce((acc : string[][], sentence, index) => {
              if (index % 4 === 0) {
                acc.push([]);
              }
              acc[acc.length - 1].push(sentence);
              return acc;
            }, []).map((paragraph, index) => (
              <><div key={index} className="text-[16px] font-normal text-left">
                {paragraph.join(' ')}
              </div><br /></>
            ))
          }
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center"></div>
        )
      }
    </div>
  )
}

export const runtime = 'edge';
