import { faker } from "@faker-js/faker";
// id: faker.string.uuid(),
// content: faker.lorem.paragraph(),
// createdAt: faker.date.recent().toString(),
// updatedAt: faker.date.recent().toString(),
// owner: {
//   id: faker.string.uuid(),
//   username: faker.internet.userName()
// },

// replies: [
import { Reply } from "@/lib/types";
import Link from "next/link";

export default function ReplyCard({ reply }: { reply: Reply }) {
  return (
    <Link href={`forum/reply/${reply.id}`} key={reply.id} className="bg-white shadow rounded-[5px] mx-[10px] px-[30px] py-[25px] flex flex-col gap-y-[15px]">
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
    </Link>
  )
}

// export default function ThreadCard({ reply }: { thread: Thread }) {
//   return (
//     <Link href={`forum/${reply.id}`} key={thread.id} className="bg-white shadow rounded-[5px] px-[30px] py-[25px] flex flex-col gap-y-[15px]">
//       <div className="flex gap-x-[15px]">
//         <Image className="rounded-full" src={faker.image.avatar()} alt={reply.title} width={40} height={40} />
//         <div className="grow">
//           <div className="text-[13px]">{reply.owner.username}</div>
//           <div className="text-[10px] text-gray">{`${reply.updatedAt}`}</div>
//         </div>
//       </div>
//       <div>
//         <div className="font-bold text-[14px]">{reply.title}</div>
//         <div className="font-normal">{reply.body}</div>
//       </div>
//       <div className="flex justify-between">
//         <div className="flex gap-x-[10px]">
//         </div>
//         <div className="flex gap-x-[15px] font-normal">
//           <div>{faker.number.int(50)}</div>
//           <div>{faker.number.int(50)}</div>
//           <div>{faker.number.int(50)}</div>
//         </div>
//       </div>
//     </Link>
//   )
// }
