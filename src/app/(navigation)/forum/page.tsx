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
      <h1 className='text-[64px]'>Baca dan berswara dalam diskusi forum!</h1>
      <p className='text-[24px] pb-[60px]'>Come join the team!</p>
      <div className='flex w-[1128px]'>
        <div className='grow'>
          todo: reads
        </div>
        <div>
          <div>
            todo: posts
          </div>
          <div>
            todo: posts
          </div>
        </div>
      </div>
    </div>
  );
}

