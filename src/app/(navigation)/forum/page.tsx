import { faker } from '@faker-js/faker';
import Link from 'next/link';
import Image from 'next/image';

const forums = Array.from({ length: 12 }, () => ({
  title: faker.lorem.sentence(),
  description: faker.lorem.paragraph(20),
  type: "Petition",
  date: faker.date.recent().toDateString(),
  numComments: faker.datatype.number(100),
  minRead: faker.datatype.number(10),
  author: faker.name.firstName() + " " + faker.name.lastName(),
  authorAvatar: faker.image.avatar(),
  thumbnail: faker.image.image(),
}))

const fPosts = Array.from({ length: 5 }, () => ({
  title: faker.lorem.sentence(),
  date: faker.date.recent().toDateString(),
  thumbnail: faker.image.image(),
}))

export default function Page() {
  return (
    <div className='w-[1128px] m-auto pt-[105px]'>
      <h1 className='text-[64px]'>Baca dan berswara dalam diskusi forum!</h1>
      <p className='text-[24px] pb-[60px]'>Come join the team!</p>
      <div className='flex max-w-[1128px] gap-x-[48px]'>
        <div className='grow flex flex-col gap-y-[32px] rounded-[16px]'>
          {forums.map((forum) => (
            <div className='bg-white flex overflow-hidden h-[304px] rounded-[16px] drop-shadow-md' key={forum.date}>
              <div className='min-w-[238px] relative'>
                <Image
                  className='object-cover'
                  src={forum.thumbnail}
                  alt={forum.title}
                  layout='fill'
                />
              </div>
              <div className='grow flex flex-col p-[24px]'>
                <div className='grow flex flex-col gap-y-[16px]'>
                  <div className='flex gap-x-[11px] h-[25px] text-[12px]'>
                    <div className='bg-[#6059C9] text-white px-[11px] pt-[3px] rounded-[8px]'>{forum.type}</div>
                    <div className='bg-[#F2EAE1] px-[11px] pt-[3px] rounded-[8px] text-[#5F5F75]'>{forum.date}</div>
                  </div>

                  <h2 className='text-[24px]'>{forum.title}</h2>
                  <p className='text-[#7A7A7A] h-[65px] text-[16px] overflow-hidden'>{forum.description}</p>
                </div>
                <div className='flex'>
                  <div className='flex grow gap-x-[6px] text-[12px]'>
                    <div className='self-center h-[25px] bg-[#F2EAE1] px-[11px] pt-[3px] rounded-[8px] text-[#5F5F75]'>
                      {forum.numComments} comments
                    </div>
                    <div className='self-center h-[25px] bg-[#F2EAE1] px-[11px] pt-[3px] rounded-[8px] text-[#5F5F75]'>
                      {forum.minRead} min reads
                    </div>
                  </div>
                  <div>
                    <div className='flex gap-x-[6px]'>
                      <p className='self-center text-[16px]'>{forum.author}</p>
                      <div className='w-[32px] h-[32px] relative'>
                        <Image
                          className='object-cover rounded-full'
                          src={forum.authorAvatar}
                          alt={forum.author}
                          layout='fill'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className='flex gap-x-[4px] pb-[52px] pt-[70px]'>
            <div className='bg-[#6059C9] text-white px-[11px] pt-[3px] rounded-full'>1</div>
            <div className='bg-[#F2EAE1] text-[#5F5F75] px-[11px] pt-[3px] rounded-full'>2</div>
            <div className='bg-[#F2EAE1] text-[#5F5F75] px-[11px] pt-[3px] rounded-full'>3</div>
            <div className='bg-[#F2EAE1] text-[#5F5F75] px-[11px] pt-[3px] rounded-full'>4</div>
            <div className='bg-[#F2EAE1] text-[#5F5F75] px-[11px] pt-[3px] rounded-full'>5</div>
          </div>

        </div>
        <div>
          <div className='min-w-[317px] flex flex-col gap-y-[32px]'>
            <h2 className='text-[24px]'>Featured Posts</h2>
            {fPosts.map((post) => (
              <div className='flex gap-x-[24px]'>
                <div className='min-w-[80px] min-h-[80px] max-w-[80px] max-h-[80px] relative'>
                  <Image
                    className='object-cover rounded-[10px]'
                    src={post.thumbnail}
                    alt={post.title}
                    layout='fill'
                  />
                </div>
                <div>
                  <h3 className='self-center text-[16px]'>{post.title}</h3>
                  <p className='text-[#7A7A7A] text-[12px]'>{post.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            todo: posts
          </div>
        </div>
      </div>
    </div>
  );
}

