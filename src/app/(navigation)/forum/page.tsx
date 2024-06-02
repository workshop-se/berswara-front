import ForumWidget from "@/ui/ForumWidget";

export default function Page() {
  return (
    <div className="flex gap-x-[45px] px-[45px] py-[40px]">
      <div className="grow">Todo: Content</div>
      <ForumWidget></ForumWidget>
    </div>
  );
}

