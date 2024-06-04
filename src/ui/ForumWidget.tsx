import { faker } from "@faker-js/faker";
import Link from "next/link";

export default function ForumWidget() {
  const mustReadPosts = [
    { title: faker.lorem.words(3), link: faker.string.uuid() },
    { title: faker.lorem.words(3), link: faker.string.uuid() },
    { title: faker.lorem.words(3), link: faker.string.uuid() },
  ]

  const featuredLinks = [
    { title: faker.lorem.words(3), link: faker.string.uuid() },
    { title: faker.lorem.words(3), link: faker.string.uuid() },
    { title: faker.lorem.words(3), link: faker.string.uuid() },
  ]
  return (
    <div className="w-[270px] py-[30px] px-[20px] bg-white shadow rounded-[5px] flex flex-col gap-y-[40px] self-start">
      <SubWidget title="Must Read Posts" lists={mustReadPosts} />
      <SubWidget title="Featured Links" lists={featuredLinks} />
    </div>
  );
}

function SubWidget({ title, lists }: { title: string, lists: { title: string, link: string }[] }) {
  return (
    <div className="">
      <h2 className="text-[15px] pb-[10px]">{title}</h2>
      <div className="h-[1px] bg-gray-200 w-full mb-[5px]"></div>
      <ul className="list-disc list-inside text-[13px] flex flex-col gap-y-[10px]">
        {lists.map((list) => (
          <li key={list.title} className="text-firebrick-0">
            <Link href={`/forum/${list.link}`}>
              {list.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
