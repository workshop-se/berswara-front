import { getUsername } from "@/lib/auth";
import { deleteThread, toggleLike } from "@/lib/forum";
import { Thread } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ThreadCard({ thread }: { thread: Thread }) {
  const [showDeleteMenu, setShowDeleteMenu] = useState<boolean>(false);
  const [showTricolon, setShowTricolon] = useState<boolean>(false);
  const [hovering, setHovering] = useState<boolean>(false);

  const handleDelete = async (event: React.MouseEvent) => {
    event?.stopPropagation();
    const response = await deleteThread(thread.id);
    if (response.error) {
      console.error(response.message);
    } else {
      window.location.href = "/forum/thread";
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const username = await getUsername();
      if (username === thread.owner.username) {
        setShowTricolon(true);
      }
    };
    fetchUser();
  }, [thread.owner.username]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!hovering) {
      timer = setTimeout(() => setShowDeleteMenu(false), 1000);
    }
    return () => clearTimeout(timer);
  }, [hovering]);

  const handleTricolonMouseEnter = () => {
    setHovering(true);
    setShowDeleteMenu(true);
  };

  const handleTricolonMouseLeave = () => {
    setHovering(false);
  };

  const handleLike = async () => {
    const response = await toggleLike(thread.id);
    if (response.error) {
      console.error(response.message);
    } else {
      window.location.reload();
    }
  }

  return (
    <div key={thread.id} className="bg-white shadow rounded-[5px] px-[30px] py-[25px] flex flex-col gap-y-[15px]">
      <div className="flex gap-x-[15px]">
        {/*
        <Image className="rounded-full" src={faker.image.avatar()} alt={thread.title} width={40} height={40} />
        */}
        <div className="grow">
          <div className="text-[13px]">@{thread.owner.username}</div>
          <div className="text-[10px] text-gray">{`${thread.updatedAt}`}</div>
        </div>
        {showTricolon && (
          <div
            className="relative group"
            onMouseEnter={handleTricolonMouseEnter}
            onMouseLeave={handleTricolonMouseLeave}
          >
            <div className="cursor-pointer">&#8285;</div>
            {showDeleteMenu && (
              <div className="absolute right-0 mt-2 w-[100px] bg-white shadow-lg rounded-[5px]">
                <div onClick={handleDelete} className="px-4 py-2 font-normal cursor-pointer hover:bg-gray-100">Delete</div>
              </div>
            )}
          </div>
        )}
      </div>
      <Link href={`/forum/thread/${thread.id}`}>
        <div  className="font-bold text-[14px]">{thread.title}</div>
        <div className="font-normal">{thread.body}</div>
      </Link>
      <div className="flex justify-between">
        <div className="flex gap-x-[10px]">
        </div>
        <div className="flex gap-x-[15px] font-normal">
          <Link href={`/forum/thread/${thread.id}`} className="flex gap-x-[5px] hover:scale-110 cursor-pointer">
            <Image src="/icons/message-square.svg" alt="comments" width={15} height={15} />
            <span>
              {thread.repliesCount}
            </span>
          </Link>

          <div onClick={handleLike} className="flex cursor-pointer gap-x-[5px] hover:scale-110">
            <Image src="/icons/arrow-up.svg" alt="comments" width={15} height={15} />
            <span>
              {thread.likes}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

