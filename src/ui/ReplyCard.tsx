import { Reply } from "@/lib/types";
import SubReplyCard from "./SubReplyCard";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { deleteReply, postSubReply } from "@/lib/forum";
import { getUsername } from "@/lib/auth";

export default function ReplyCard({ threadId, reply }: { threadId: string, reply: Reply }) {
  const [showReply, setShowReply] = useState(false);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [isNull, setIsNull] = useState(true);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [showDeleteMenu, setShowDeleteMenu] = useState(false);
  const [showTricolon, setShowTricolon] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUsername();
      if (user === reply.owner.username) {
        setShowTricolon(true);
      }
    }
    fetchUser()
  }, [reply.owner.username]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!hovering) {
      timer = setTimeout(() => setShowDeleteMenu(false), 1000);
    }
    return () => clearTimeout(timer);
  }, [hovering]);

  const handleChange = () => {
    const content = textareaRef.current?.value;
    setIsNull(content === "");
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const content = textareaRef.current?.value;
    const response = await postSubReply(threadId, reply.id, content!);
    if (response.error) {
      console.error(response.message);
    } else {
      window.location.href = `/forum/thread/${threadId}`;
    }
  }

  const handleDelete = async () => {
    const response = await deleteReply(threadId, reply.id);
    if (response.error) {
      console.error(response.message);
    } else {
      window.location.href = `/forum/thread/${threadId}`;
    }
  }

  const handleTricolonMouseEnter = () => {
    setHovering(true);
    setShowDeleteMenu(true);
  };

  const handleTricolonMouseLeave = () => {
    setHovering(false);
  };

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
            {showTricolon && (
              <div
                className="relative"
                onMouseEnter={handleTricolonMouseEnter}
                onMouseLeave={handleTricolonMouseLeave}
              >
                <div onClick={() => setShowDeleteMenu(!showDeleteMenu)} className="cursor-pointer">&#8285;</div>
                {showDeleteMenu && (
                  <div className="absolute right-0 mt-2 w-[100px] bg-white shadow-lg rounded-[5px]">
                    <div onClick={handleDelete} className="px-4 py-2 font-normal cursor-pointer hover:bg-gray-100">Delete</div>
                  </div>
                )}
              </div>
            )}
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
              <div className="flex gap-x-[5px] cursor-pointer" onClick={() => setShowReplyForm(!showReplyForm)}>
                <Image src="/icons/corner-down-right.svg" alt="comments" width={14} height={14} />
                Reply
              </div>
            </div>
          </div>
        </div>
      </div>
      {showReplyForm && (
        <form onSubmit={handleSubmit} className="bg-white shadow rounded-[5px] px-[40px] py-[30px] flex flex-col gap-y-[15px]">
          <textarea ref={textareaRef} onChange={handleChange} className="ring ring-whitesmoke rounded-[5px] h-[43px] font-normal px-[10px] py-[10px] text-[14px]" placeholder="Type here your reply"></textarea>
          <div className="flex justify-end gap-x-[12px]">
            <button type="reset" className="font-normal bg-whitesmoke text-gray px-[20px] py-[12px] rounded-[5px]">Cancel</button>
            {isNull
              ? <div className="bg-firebrick-0/[0.5] text-white px-[20px] py-[12px] rounded-[5px]">Suggest</div>
              : <button type="submit" className="bg-firebrick-0 text-white px-[20px] py-[12px] rounded-[5px]">Reply</button>
            }
          </div>
        </form>
      )}
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

