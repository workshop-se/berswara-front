import { getThreads } from "@/lib/forum";
import { faker } from "@faker-js/faker";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Thread } from "@/lib/types";

export default function ForumWidget() {
  const [mustRead, setMustRead] = useState<Thread>()
  const [isLoading, setIsLoading] = useState<boolean>(true)

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

  useEffect(() => {
    const fetchMustRead = async () => {
      try {
        const data = await getThreads(1, 3);
        if (data.error) {
          console.error(data.message);
        } else {
          setMustRead(data);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching must read posts:", error);
      }
    };
    fetchMustRead();
  }, [])
  return (
    <div className="w-[270px] py-[30px] px-[20px] bg-white shadow rounded-[5px] flex flex-col gap-y-[40px] self-start">
      {isLoading ? <div>Loading...</div> : (
        <SubWidget title="Must Read Posts" lists={mustRead} />
      )}
      {/*<SubWidget title="Featured Links" lists={featuredLinks} />*/}
    </div>
  );
}

function SubWidget({ title, lists }: { title: string, lists: Thread[] }) {
  return (
    <div>
      <h2 className="text-[15px] pb-[10px]">{title}</h2>
      <div className="h-[1px] bg-gray-200 w-full mb-[5px]"></div>
      <ul className="list-disc list-inside text-[13px] flex flex-col gap-y-[10px]">
        {lists.map((list) => (
          <li key={list.id} className="text-firebrick-0">
            <Link href={`/forum/thread/${list.id}`}>
              {list.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

