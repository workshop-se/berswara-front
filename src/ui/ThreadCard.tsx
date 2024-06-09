import { Thread } from "@/lib/types";
import { faker } from "@faker-js/faker";
import Image from "next/image";
import Link from "next/link";

export default function ThreadCard({ thread }: { thread: Thread }) {
  return (
    <Link href={`/forum/thread/${thread.id}`} key={thread.id} className="bg-white shadow rounded-[5px] px-[30px] py-[25px] flex flex-col gap-y-[15px]">
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
  )
}
