import { faker } from '@faker-js/faker';
import Link from 'next/link';

const newses = Array.from({ length: 4 }, () => ({
  title: faker.lorem.sentence(),
  description: faker.lorem.paragraph(),
  isOngoing: faker.datatype.boolean(),
  tags: Array.from({ length: 3 }, () => faker.lorem.word()),
  link: faker.internet.url()
}))

export default function Page() {
  return (
    <div className='w-[1128px] m-auto pt-[105px]'>
      <h1 className='text-[64px]'>Baca berita terbaru</h1>
      <p className='text-[24px] pb-[60px]'>Come join the team!</p>
      <div className='flex flex-col gap-y-[47px] pb-[126px]'>
        {newses.map((news) => (
          <div key={news.title} className='bg-white p-[48px] rounded-[16px] drop-shadow-md flex gap-[48px]'>
            <div className='grow'>
              <h2 className='text-[36px]'>
                {news.title}
              </h2>
              <p className='text-[18px] text-[#7A7A7A]'>
                {news.description}
              </p>
            </div>
            <div className='w-[201px] flex flex-col gap-y-[13px]'>
              <Link className='bg-[#6059C9] text-white text-center p-[13px] rounded-[10px]' href={news.link}>
                Apply now
              </Link>
              <p className='text-center text-[18px]'>On going what?</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

