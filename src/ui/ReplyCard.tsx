import { faker } from "@faker-js/faker";
import { Reply } from "@/lib/types";

export default function ReplyCard({ reply }: { reply: Reply }) {
  return (
    <div className="flex flex-col gap-y-[10px]">
      <div className="bg-white shadow rounded-[5px] mx-[10px] px-[30px] py-[25px] flex flex-col gap-y-[15px]">
        <div className="flex gap-x-[15px]">
          <div className="grow">
            <div className="text-[13px]">@{reply.owner.username}</div>
            <div className="text-[10px] text-gray">{`${reply.updatedAt}`}</div>
          </div>
        </div>
        <div>
          <div className="font-normal">{reply.content}</div>
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
      </div>
      <div className="flex flex-col mx-[10px]">
        {reply.replies.map((reply) => (
          <ReplyCard key={reply.id} reply={reply} />
        ))}
      </div>
    </div>
  )
}
