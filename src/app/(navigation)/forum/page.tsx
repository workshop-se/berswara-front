'use client'
import { useEffect, useState } from "react";
import { getThreads, Thread } from "@/lib/forum";
import ForumWidget from "@/ui/ForumWidget";
import { faker } from "@faker-js/faker";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const [threads, setThreads] = useState<Thread[]>([]);

  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const data = await getThreads(1, 10);
        console.log("Fetched threads data:", data);
        if (data.error) {
          console.error(data.message);
        } else {
          setThreads(data);
        }
      } catch (error) {
        console.error("Error fetching threads:", error);
      }
    };
    fetchThreads();
  }, []);

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
          {threads.map((thread) => (
            <Link href={`forum/${thread.id}`} key={thread.id} className="bg-white shadow rounded-[5px] px-[30px] py-[25px] flex flex-col gap-y-[15px]">
              <div className="flex gap-x-[15px]">
                <Image className="rounded-full" src={faker.image.avatar()} alt={thread.title} width={40} height={40} />
                <div className="grow">
                  <div className="text-[13px]">{thread.owner.username}</div>
                  <div className="text-[10px] text-gray">{`${thread.updatedAt}`}</div>
                </div>
              </div>
              <div>
                <div className="font-bold text-[14px]">{thread.title}</div>
                <div className="font-normal">{thread.body}</div>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-x-[10px]">
                </div>
                <div className="flex gap-x-[15px] font-normal">
                  <div>{faker.number.int(50)}</div>
                  <div>{faker.number.int(50)}</div>
                  <div>{faker.number.int(50)}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <ForumWidget />
      <Link href="/forum/add" className="fixed bottom-[50px] right-[50px] bg-firebrick-0 text-white px-4 py-2 rounded-[5px] shadow-lg">
        Ask a question
      </Link>
    </div>
  );
}

