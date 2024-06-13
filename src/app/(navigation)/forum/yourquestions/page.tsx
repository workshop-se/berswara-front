'use client'
import { useEffect, useState } from "react";
import { getMyThreads, getThreads } from "@/lib/forum";
import ForumWidget from "@/ui/ForumWidget";
import Link from "next/link";
import ThreadCard from "@/ui/ThreadCard";
import { Thread } from "@/lib/types";

export default function Page() {
  const [threads, setThreads] = useState<Thread[]>([]);

  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const data = await getMyThreads();
        // console.log("Fetched threads my threads:", data);
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
        {/*
        <div className="flex gap-x-[10px] text-[13px]">
          <div className="rounded-[100px] bg-firebrick-0 text-white p-2">New</div>
          <div className="rounded-[100px] bg-whitesmoke text-gray p-2">Top</div>
          <div className="rounded-[100px] bg-whitesmoke text-gray p-2">Hot</div>
          <div className="rounded-[100px] bg-whitesmoke text-gray p-2">Closed</div>
        </div>
        */}
        <div className="flex flex-col gap-y-[23px]">
          {threads.map((thread) => (
            <ThreadCard key={thread.id} thread={thread} />
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
