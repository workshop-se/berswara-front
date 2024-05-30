'use client'
import Link from "next/link";
import Image from "next/image";
import { navItems, authButton } from "@/configs/routes";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function Header() {
  const [token, setToken] = useState(Cookies.get('accessToken'));

  useEffect(() => {
    const handleTokenChange = () => setToken(Cookies.get('accessToken'));
    
    window.addEventListener('cookiechange', handleTokenChange);
    
    return () => {
      window.removeEventListener('cookiechange', handleTokenChange);
    };
  }, []);

  return (
    <nav className="flex h-[70px]">
      <div className="m-auto">
        <Image className="mx-[12px] h-[51px]" src="/images/logo.svg" width={206} height={36} alt="Logo" />
      </div>
      <div className="grow flex justify-center m-auto">
        {navItems.map((item) => (
          <Link key={item.name} href={item.url} className="p-[10px]">{item.name}</Link>
        ))}
      </div>
      {token
        ? <Link href={authButton[3].url} className="m-auto p-[10px]">{authButton[3].name}</Link>
        : <div className="m-auto w-[206px] h-[36px] rounded-[10px] bg-red-100 mx-[12px] grid grid-cols-2 overflow-hidden">
          <Link href={authButton[0].url} className="bg-gray-800 flex items-center justify-center text-white">{authButton[0].name}</Link>
          <Link href={authButton[1].url} className="bg-red-700 flex items-center justify-center text-white">{authButton[1].name}</Link>
        </div>
      }
    </nav>
  );
}

