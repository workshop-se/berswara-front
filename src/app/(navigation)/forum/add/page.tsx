'use client'
import { postThread } from "@/lib/forum";
import ForumWidget from "@/ui/ForumWidget";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();
  const [isNull, setIsNull] = useState(true);

  const handleChange = () => {
    const title = titleRef.current?.value;
    const body = bodyRef.current?.value;
    setIsNull(title === "" || body === "");
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const title = titleRef.current?.value;
    const body = bodyRef.current?.value;

    const data = await postThread(title!, body!);
    
    if (data.error) {
      console.error(data.message);
    } else {
      router.push("/forum");
    }
  }

  return (
    <div className="flex gap-x-[45px] px-[45px] py-[40px]">
      <form onSubmit={handleSubmit} className="grow bg-white shadow-lg px-[40px] py-[30px] gap-y-[20px] flex flex-col">
        {/*
        <select defaultValue="" className="pl-[10px] h-[34px] bg-white rounded-[5px] ring ring-whitesmoke text-gray text-[12px] font-light">
          <option value="" disabled>Choose categories</option>
          <option value="new">New</option>
          <option value="top">Top</option>
          <option value="hot">Hot</option>
          <option value="closed">Closed</option>
        </select>
        */}

        <input ref={titleRef} onChange={handleChange} type="text" placeholder="Type catching attention title" className="pl-[10px] h-[34px] bg-white rounded-[5px] ring ring-whitesmoke text-[15px] font-light" />
        <textarea ref={bodyRef} onChange={handleChange} placeholder="Type your question" className="pl-[10px] py-[10px] h-[344px] bg-white rounded-[5px] ring ring-whitesmoke text-[15px] font-light" />
        <div className="flex gap-x-[20px]">
          {/*
          <div className="bg-firebrick-0 flex px-[20px] py-[12px] rounded-[5px] text-white">
            <div>Icon</div>
            <div>Add image</div>
          </div>
          <div className="grow"></div>
          <div className="bg-whitesmoke flex px-[20px] py-[12px] rounded-[5px] text-gray">
            <div>Icon</div>
            <div>Save as draft</div>
          </div>
        */}

          {
            isNull
              ? <div className="bg-firebrick-0/[0.5] flex px-[20px] py-[12px] rounded-[5px] text-white">
                <div></div> {/* todo:icon */}
                <div>Publish</div>
              </div>
              : <button className="bg-firebrick-0 flex px-[20px] py-[12px] rounded-[5px] text-white">
                <div></div> {/* todo:icon */}
                <div>Publish</div>
              </button>
          }
        </div>
      </form>
      <ForumWidget></ForumWidget>
    </div>
  );
}


