import { Reply } from "@/lib/types";
import SubReplyCard from "./SubReplyCard";
import Image from "next/image";
import { useState } from "react";

export default function ReplyCard({ reply }: { reply: Reply }) {
  const [showReply, setShowReply] = useState(false);
  return (
    <div className="flex flex-col gap-y-[20px]">
      <div className="bg-white shadow rounded-[5px] flex overflow-hidden">
        <div className="bg-firebrick-0 w-[5px]"></div>
        <div className="grow mx-[10px] px-[40px] py-[20px] flex flex-col gap-y-[15px]">
          <div className="flex gap-x-[15px]">
            <div className="grow">
              <div className="text-[13px]">@{reply.owner.username}</div>
              <div className="text-[10px] text-gray">{`${reply.updatedAt}`}</div>
            </div>
          </div>
          <div>
            <div className="font-normal">{reply.content}</div>
          </div>
          <div className="bg-silver h-[1px]"></div>
          <div className="flex justify-between">
            <div className="flex gap-x-[10px]">
            </div>
            <div className="flex gap-x-[15px] font-normal text-firebrick-0">
              <div onClick={() => setShowReply(!showReply)} className="cursor-pointer flex gap-x-[5px]">
                <Image src="/icons/chevrons-up.svg" alt="comments" width={14} height={14} />
                {showReply ? "Hide" : "Show"} All Replies ({reply.replies.length})
              </div>
              <div className="flex gap-x-[5px]">
                <Image src="/icons/corner-down-right.svg" alt="comments" width={14} height={14} />
                Reply
              </div>
            </div>
          </div>
        </div>
      </div>
      {showReply && (
        <div className="flex flex-col gap-y-[20px]">
          {reply.replies.map((nestedReply) => (
            <SubReplyCard key={nestedReply.id} reply={nestedReply} />
          ))}
        </div>
      )}
    </div>
  )
}
