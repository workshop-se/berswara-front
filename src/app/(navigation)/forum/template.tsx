import Image from "next/image"
import Link from "next/link"

export default function Template({ children }: { children: React.ReactNode }) {
  const search = { title: "Search", icon: "/icons/search.svg", url: "/forum/search" }
  const menus = [
    { title: "Questions", icon: "/icons/list.svg", url: "/" },
    { title: "Tag", icon: "/icons/tag.svg", url: "/forum/tags" },
    { title: "Ranking", icon: "/icons/award.svg", url: "/news/ranking" },
  ]
  const navs = [
    { title: "Your Questions", icon: "/icons/help-circle.svg", url: "/forum/yourquestions" },
    { title: "Your Answers", icon: "/icons/message-circle.svg", url: "/forum/answers" },
    { title: "Your likes & votes", icon: "/icons/heart.svg", url: "/forum/likesandvotes" },
  ]

  return (
    <div className="flex">
      <div className="bg-white w-[310px] pt-[40px] flex flex-col gap-y-[30px] min-h-[1000px]">
        <Item item={search} />
        <Menu title="Menu" items={menus} />
        <Menu title="Personal Navigator" items={navs} />
      </div>
      <div className="grow">
        {children}
      </div>
    </div>
  )
}

function Item({ item }: { item: { title: string, icon: string, url: string } }) {
  return (
    <Link href={item.url} className="px-[50px] hover:bg-[#B30D19]/[0.13] h-[41px] flex gap-x-[12px]">
      <Image src={item.icon} width={18} height={18} alt={item.title}></Image>
      <h1 className="text-[13px] my-auto">{item.title}</h1>
    </Link>
  )
}

function Menu({ title, items }: { title: string, items: { title: string, icon: string, url: string }[] }) {
  return (
    <div className="flex flex-col gap-y-[10px]">
      <h1 className="text-[13px] text-[#858585] px-[50px]">{title}</h1>
      {items.map((item) => (
        <Item key={item.title} item={item} />
      ))}
    </div>
  )
}
