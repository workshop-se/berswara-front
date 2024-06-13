'use client'

import { getMyAnswers, getThreadById, postReply } from "@/lib/forum"
import { Thread, myReply } from "@/lib/types"
import ForumWidget from "@/ui/ForumWidget"
import ReplyCard from "@/ui/ReplyCard"
import ThreadCard from "@/ui/ThreadCard"
import { useEffect, useState, useRef } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function Page() {
  const [myReplies, setMyReplies] = useState<myReply[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const router = useRouter()

  useEffect(() => {
    const fetchThread = async () => {
      setLoading(true)
      try {
        const data = await getMyAnswers()
        console.log("Fetched data:", data);
        if (data.error) {
          setError(data.message)
        } else {
          setMyReplies(data)
        }
      } catch (error) {
        setError('Failed to fetch thread data')
      } finally {
        setLoading(false)
      }
    }
    fetchThread()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="flex gap-x-[45px] mx-[45px] my-[40px]">
      <div className="grow flex flex-col gap-y-[20px]">
        <div className="flex flex-col gap-y-[20px]">
          {myReplies.map((reply: myReply) => (
            <Link href={`/forum/thread/${reply.thread.id}`} key={reply.id}>
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
                      <h1 className="">To thread: {reply.thread.title}</h1>
                      <div className="font-normal">{reply.content}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            // <ReplyCard key={reply.id} reply={reply} />
          ))}
        </div>
      </div>
      <ForumWidget />
    </div>
  )
}

export const runtime = 'edge';
