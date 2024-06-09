'use client'
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Template({ children }: { children: React.ReactNode }) {
  const search = {
    title: "Search",
    icon: "/icons/search.svg",
    icon_red: "/icons/search-red.svg",
    url: "/forum/search"
  }
  const menus = [
    {
      title: "Questions",
      icon: "/icons/list.svg",
      icon_red: "/icons/list-red.svg",
      url: "/"
    },
    {
      title: "Tag",
      icon: "/icons/tag.svg",
      icon_red: "/icons/tag-red.svg",
      url: "/forum/tags"
    },
    {
      title: "Ranking",
      icon: "/icons/award.svg",
      icon_red: "/icons/award-red.svg",
      url: "/news/ranking"
    },
  ]
  const navs = [
    {
      title: "Your Questions",
      icon: "/icons/help-circle.svg",
      icon_red: "/icons/help-circle-red.svg",
      url: "/forum/yourquestions"
    },
    {
      title: "Your Answers",
      icon: "/icons/message-circle.svg",
      icon_red: "/icons/message-circle-red.svg",
      url: "/forum/answers"
    },
    {
      title: "Your likes & votes",
      icon: "/icons/heart.svg",
      icon_red: "/icons/heart-red.svg",
      url: "/forum/likesandvotes"
    },
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

function Item({ item }: { item: { title: string, icon: string, icon_red: string, url: string } }) {
  const pathname = usePathname();
  const isActive = pathname.includes(item.url);

  return (
    <Link href={item.url} className={`h-[41px] flex gap-x-[12px] ${isActive ? 'bg-firebrick-0/[0.13] text-firebrick-0' : 'pl-[50px] hover:bg-firebrick-0/[0.13] text-black'}`}>
      {isActive && <div className="w-[5px] mr-[33px] h-full bg-firebrick-0"></div>}
      {
        isActive
          ? <Image src={item.icon_red} width={18} height={18} alt={item.title}></Image> 
          : <Image src={item.icon} width={18} height={18} alt={item.title}></Image>
      }
      <h1 className="text-[13px] my-auto">{item.title}</h1>
    </Link>
  )
}

function Menu({ title, items }: { title: string, items: { title: string, icon: string, icon_red: string, url: string }[] }) {
  return (
    <div className="flex flex-col gap-y-[10px]">
      <h1 className="text-[13px] text-gray px-[50px]">{title}</h1>
      {items.map((item) => (
        <Item key={item.title} item={item} />
      ))}
    </div>
  )
}
