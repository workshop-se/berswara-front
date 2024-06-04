import ForumWidget from "@/ui/ForumWidget";
import { faker } from "@faker-js/faker";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const posts = Array.from({ length: 10 }, () => (
    {
      title: faker.lorem.sentence(),
      id: faker.string.uuid(),
      content: faker.lorem.paragraph(),
      tags: [faker.lorem.word(), faker.lorem.word()],
      username: faker.person.fullName(),
      avatar: faker.image.avatar(),
      time: faker.date.recent(),
      upvote: faker.number.int(50),
      views: faker.number.int(50),
      answers: faker.number.int(50),
    }))


  return (
    <div className="flex gap-x-[45px] px-[45px] py-[40px]">
      <div className="grow flex flex-col gap-y-[30px]">
        <div className="flex gap-x-[10px] text-[13px]">
          <div className="rounded-[100px] bg-firebrick-0 text-white p-2">New</div>
          <div className="rounded-[100px] bg-whitesmoke text-gray p-2">Top</div>
          <div className="rounded-[100px] bg-whitesmoke text-gray p-2">Hot</div>
          <div className="rounded-[100px] bg-whitesmoke text-gray p-2">Closed</div>
        </div>
        <div className="flex flex-col gap-y-[23px]">
          {posts.map((post) => (
            <div key={post.id} className="bg-white shadow rounded-[5px] px-[30px] py-[25px] flex flex-col gap-y-[15px]">
              <div className="flex gap-x-[15px]">
                <Image className="rounded-full" src={post.avatar} alt={post.title} width={40} height={40}></Image>
                <div className="grow">
                  <div className="text-[13px]">{post.username}</div>
                  <div className="text-[10px] text-gray">{`${post.time}`}</div>
                </div>
              </div>
              <div>
                <div className="font-bold text-[14px]">{post.title}</div>
                <div className="font-normal">{post.content}</div>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-x-[10px]">
                  {post.tags.map((tag) => (
                    <div key={tag} className="bg-whitesmoke px-[10px] py-[5px] font-normal rounded-[5px]">{tag}</div>
                  ))}
                </div>
                <div className="flex gap-x-[15px] font-normal">
                  <div>{post.views}</div>
                  <div>{post.answers}</div>
                  <div>{post.upvote}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ForumWidget></ForumWidget>
      <Link href="/forum/add" className="fixed bottom-[50px] right-[50px] bg-firebrick-0 text-white px-4 py-2 rounded-[5px] shadow-lg">
        Ask a question
      </Link>
    </div>
  );
}

