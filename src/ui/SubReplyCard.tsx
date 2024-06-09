import { Reply } from "@/lib/types";
import Image from "next/image";

export default function SubReplyCard({ reply }: { reply: Reply }) {
  return (
    <div className="flex flex-col gap-y-[20px]">
      <div className="bg-white shadow rounded-[5px] flex overflow-hidden">
        <div className="w-[10px] bg-firebrick-0">
        </div>
        <div className="grow px-[40px] py-[20px] flex flex-col gap-y-[15px]">
          <div className="flex gap-x-[15px]">
            <div className="grow">
              <div className="text-[10px] text-gray">{`${reply.createdAt}`}</div>
            </div>
          </div>
          <div>
            <div className="font-normal">{reply.content}</div>
          </div>
          <div className="h-[1px] bg-silver"></div>
          <div className="flex justify-between">
            <div className="flex gap-x-[10px]">
              <div className="text-[13px]">by @{reply.owner.username}</div>
            </div>
            <div className="flex gap-x-[5px] font-normal text-firebrick-0">
              <Image src="/icons/corner-down-right.svg" alt="comments" width={14} height={14} />
              <span>Reply</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
