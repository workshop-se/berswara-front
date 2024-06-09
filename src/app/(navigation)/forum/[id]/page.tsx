'use client'

import { getThreadById } from "@/lib/forum"
import { Thread } from "@/lib/types"
import ForumWidget from "@/ui/ForumWidget"
import ReplyCard from "@/ui/ReplyCard"
import ThreadCard from "@/ui/ThreadCard"
import { useEffect, useState } from "react"

export default function Page({ params }: { params: { id: string } }) {
  const [thread, setThread] = useState<Thread | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchThread = async () => {
      setLoading(true)
      try {
        const data = await getThreadById(params.id)
        if (data.error) {
          setError(data.message)
        } else {
          setThread(data)
        }
      } catch (error) {
        setError('Failed to fetch thread data')
      } finally {
        setLoading(false)
      }
    }
    fetchThread()
  }, [params.id])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="flex gap-x-[45px] mx-[45px] my-[40px]">
      <div className="grow flex flex-col gap-y-[20px]">
        {thread && <ThreadCard thread={thread} />}
        <div className="flex flex-col gap-y[10px]">
          {thread?.replies.map((reply) => (
            <ReplyCard key={reply.id} reply={reply} />
          ))}
        </div>
      </div>
      <ForumWidget />
    </div>
  )
}

