import ForumWidget from "@/ui/ForumWidget";

export default function Page() {


  return (
    <div className="flex gap-x-[45px] px-[45px] py-[40px]">
      <form className="grow bg-white shadow-lg px-[40px] py-[30px] gap-y-[20px] flex flex-col">
        <select defaultValue="" className="pl-[10px] h-[34px] bg-white rounded-[5px] ring ring-whitesmoke text-gray text-[12px] font-light">
          <option value="" disabled>Choose categories</option>
          <option value="new">New</option>
          <option value="top">Top</option>
          <option value="hot">Hot</option>
          <option value="closed">Closed</option>
        </select>

        <input type="text" placeholder="Type catching attention title" className="pl-[10px] h-[34px] bg-white rounded-[5px] ring ring-whitesmoke text-gray text-[12px] font-light"/>
        <textarea placeholder="Type your question" className="pl-[10px] py-[10px] h-[344px] bg-white rounded-[5px] ring ring-whitesmoke text-gray text-[12px] font-light"/>
        <div className="flex gap-x-[20px]">
          <div className="bg-firebrick-0 flex px-[20px] py-[12px] rounded-[5px] text-white">
            <div></div> {/* todo:icon */}
            <div>Add image</div>
          </div>
          <div className="grow"></div>
          <div className="bg-whitesmoke flex px-[20px] py-[12px] rounded-[5px] text-gray">
            <div></div> {/* todo:icon */}
            <div>Save as draft</div>
          </div>

          <div className="bg-firebrick-0/[0.5] flex px-[20px] py-[12px] rounded-[5px] text-white">
            <div></div> {/* todo:icon */}
            <div>Publish</div>
          </div>
        </div>
      </form>
      <ForumWidget></ForumWidget>
    </div>
  );
}


