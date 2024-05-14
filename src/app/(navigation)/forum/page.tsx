import { faker } from '@faker-js/faker';
import Link from 'next/link';
import Image from 'next/image';

const forums = Array.from({ length: 12 }, () => ({
  title: faker.lorem.sentence(),
  description: faker.lorem.paragraph(20),
  isOngoing: faker.datatype.boolean(),
  date: faker.date.recent().toDateString(),
  numComments: faker.datatype.number(100),
  minRead: faker.datatype.number(10),
  author: faker.name.firstName() + " " + faker.name.lastName(),
  authorAvatar: faker.image.avatar(),
  thumbnail: faker.image.image(),
}))

export default function Page() {
  return (
    <div className='w-[1128px] m-auto pt-[105px]'>
      <h1 className='text-[64px]'>Baca dan berswara dalam diskusi forum!</h1>
      <p className='text-[24px] pb-[60px]'>Come join the team!</p>
      <div className='flex w-[1128px] gap-x-[48px]'>
        <div className='grow flex flex-col gap-y-[32px] rounded-[16px]'>
          {forums.map((forum) => (
            <div className='bg-white flex overflow-hidden h-[304px] rounded-[16px] drop-shadow-md' key={forum.date}>
              <div className='w-[238px] relative'>
                <Image
                  className='object-cover'
                  src={forum.thumbnail}
                  alt={forum.title}
                  layout='fill'
                />
              </div>
              <div className='grow p-[24px] flex flex-col'>
                <div>
                  todo:head
                </div>

                <div className='grow'>
                  todo:content
                </div>

                <div>
                  todo:foot
                </div>
              </div>
            </div>
          ))}
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

