'use client'

import Link from "next/link";
import Image from "next/image";
import { navItems, authButton } from "@/configs/routes";
import { logout } from "@/lib/auth";
import useSWR from "swr";
import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import { useRouter, usePathname } from "next/navigation";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const { data, mutate } = useSWR('/api/session', fetcher);

  useEffect(() => {
    if (data && !data.error) {
      setSession(data);
      if (pathname === "/login" || pathname === "/signup") {
        router.replace("/forum/thread");
      }
    } else {
      if (pathname === "/forum/thread" || pathname === "/profile") {
        router.replace("/login");
      }
    }
    setLoading(false);
  }, [data, pathname, router]);

  const handleClick = async () => {
    await logout();
    mutate(null, true);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 flex flex-col lg:flex-row lg:justify-between text-sm font-bold font-['Sen'] py-[27px] lg:py-0 lg:h-[70px] items-center gap-y-[27px]">
        <Image className="mx-[12px]" src="/images/logo.svg" width={224} height={51} alt="Logo" />
        <button onClick={() => setToggleDrawer(!toggleDrawer)} className="text-[48px] lg:hidden">=</button>
        {toggleDrawer && (
          <div className="flex flex-col items-center justify-center lg:hidden">
            {navItems.map((item) => (
              <Link key={item.name} href={item.url} className="p-[10px] my-auto hover:bg-firebrick-0 hover:text-white hover:rounded-[10px]">{item.name}</Link>
            ))}
          </div>
        )}
        <NavBar className="hidden lg:flex flex-row gap-x-[20px]" />
        {loading
          ? <Skeleton>
            <div className="m-auto p-[10px] mx-[12px] rounded-[10px] bg-silver w-[206px] h-[36px]"></div>
          </Skeleton>
          : !session
            ? <div className="my-auto w-[206px] h-[36px] rounded-[10px] mx-[12px] flex overflow-hidden text-center">
              <Link href={authButton[0].url} className="grow bg-darkslategray text-white hover:scale-110 flex flex-col justify-center">{authButton[0].name}</Link>
              <Link href={authButton[1].url} className="grow bg-firebrick-0 text-white hover:scale-110 flex flex-col justify-center">{authButton[1].name}</Link>
            </div>
            : <Link onClick={handleClick} href={authButton[3].url} className="m-auto p-[10px] mx-[12px] hover:text-white hover:bg-firebrick-0 rounded-[10px]">{authButton[3].name}</Link>
        }
      </nav>
      <nav className="h-[210px] lg:h-[70px]"></nav>
    </>
  );
}

function NavBar({ className }: { className: string }) {
  return (
    <div className={className}>
      {navItems.map((item) => (
        <Link key={item.name} href={item.url} className="p-[10px] my-auto hover:bg-firebrick-0 hover:text-white hover:rounded-[10px]">{item.name}</Link>
      ))}
    </div>
  );
}
