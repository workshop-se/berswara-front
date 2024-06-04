'use client'

import Link from "next/link";
import Image from "next/image";
import { navItems, authButton } from "@/configs/routes";
import { logout } from "@/lib/auth";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Header() {
  const { data: session, mutate } = useSWR('/api/session', fetcher);

  const handleClick = async () => {
    await logout();
    mutate(null, true);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 flex h-[70px] bg-white shadow-md z-50">
        <div className="m-auto">
          <Image className="mx-[12px] h-[51px]" src="/images/logo.svg" width={206} height={36} alt="Logo" />
        </div>
        <div className="grow flex justify-center m-auto">
          {navItems.map((item) => (
            <Link key={item.name} href={item.url} className="p-[10px]">{item.name}</Link>
          ))}
        </div>
        {!session || session?.error
          ? <div className="m-auto w-[206px] h-[36px] rounded-[10px] bg-red-100 mx-[12px] grid grid-cols-2 overflow-hidden">
            <Link href={authButton[0].url} className="bg-darkslategray flex items-center justify-center text-white">{authButton[0].name}</Link>
            <Link href={authButton[1].url} className="bg-firebrick-0 flex items-center justify-center text-white">{authButton[1].name}</Link>
          </div>
          : <Link onClick={handleClick} href={authButton[3].url} className="m-auto p-[10px] mx-[12px]">{authButton[3].name}</Link>
        }
      </nav>
      <nav className="h-[70px]"></nav>
    </>
  );
}

