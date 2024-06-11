'use client'

import { getThreadById, postReply } from "@/lib/forum"
import { Thread } from "@/lib/types"
import ForumWidget from "@/ui/ForumWidget"
import ReplyCard from "@/ui/ReplyCard"
import ThreadCard from "@/ui/ThreadCard"
import { useEffect, useState, useRef } from "react"
import { useRouter } from "next/navigation"

export default function Page({ params }: { params: { id: string } }) {
  const [thread, setThread] = useState<Thread | any>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [isNull, setIsNull] = useState<boolean>(true)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const router = useRouter()

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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    const content = textareaRef.current?.value
    const response = await postReply(params.id, content!)
    if (response.error) {
      console.error(response.message)
    } else {
      const data = await getThreadById(params.id)
      if (data.error) {
        setError(data.message)
      } else {
        setThread(data)
        textareaRef.current!.value = ""
      }
    }

  }

  const handleChange = () => {
    const content = textareaRef.current?.value
    setIsNull(content === "")
  }

  return (
    <div className="flex gap-x-[45px] mx-[45px] my-[40px]">
      <div className="grow flex flex-col gap-y-[20px]">
        {thread && <ThreadCard thread={thread} />}
        <span className="text-[15px] font-bold text-center text-[18px] text-gray">Suggestions</span>
        <form onSubmit={handleSubmit} className="bg-white shadow rounded-[5px] px-[40px] py-[30px] flex flex-col gap-y-[15px]">
          <textarea ref={textareaRef} onChange={handleChange} className="ring ring-whitesmoke rounded-[5px] h-[43px] font-normal px-[10px] py-[10px] text-[14px]" placeholder="Type here your wise suggestion"></textarea>
          <div className="flex justify-end gap-x-[12px]">
            <button type="reset" className="font-normal bg-whitesmoke text-gray px-[20px] py-[12px] rounded-[5px]">Cancel</button>
            {isNull
              ? <div className="bg-firebrick-0/[0.5] text-white px-[20px] py-[12px] rounded-[5px]">Suggest</div>
              : <button type="submit" className="bg-firebrick-0 text-white px-[20px] py-[12px] rounded-[5px]">Suggest</button>
            }
          </div>
        </form>
        <div className="flex flex-col gap-y-[20px]">
          {thread?.replies.map((reply:any) => (
            <ReplyCard key={reply.id} threadId={params.id} reply={reply} />
          ))}
        </div>
      </div>
      <ForumWidget />
    </div>
  )
}

