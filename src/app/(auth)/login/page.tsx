'use client'

import Link from 'next/link';
import FormCard from '@/ui/FormCard';
import Image from 'next/image';
import useSWR from "swr";

import { Poppins } from "next/font/google";
import { authButton, socialAuths } from "@/configs/routes";
import { login } from "@/lib/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";

const poppinsMed = Poppins({ weight: "500", subsets: ["latin"] });
const poppinsReg = Poppins({ weight: "300", subsets: ["latin"] });

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function Page() {
  const [errMsg, setErrMsg] = useState('');
  const router = useRouter();
  const { mutate } = useSWR('/api/session', fetcher);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data = await login(
      formData.get('username') as string,
      formData.get('password') as string
    );

    if (data.error) {
      setErrMsg(data.message);
    } else {
      await mutate(null, true);
      router.push('/forum');
    }
  };

  return (
    <main className="flex justify-center p-[40px]">
      <FormCard>
        <div className="w-[442px] h-[41px] rounded-[10px] bg-red-100 grid grid-cols-2 overflow-hidden">
          <Link href={authButton[0].url} className="bg-[#C3C3C3] flex items-center justify-center text-white">{authButton[0].name}</Link>
          <Link href={authButton[1].url} className="bg-gray-800 flex items-center justify-center text-white">{authButton[1].name}</Link>
        </div>
        <div className='w-[333px] mx-auto text-[18px]'>
          <h1 className={`${poppinsMed.className} text-center p-[30px]`}>Log in</h1>
          <div className="grid grid-rows-2 gap-[15px]">
            {socialAuths.map((social) => (
              <button key={social.name} onClick={social.action} className="bg-white flex items-center justify-center p-[10px] rounded-[30px] text-[14px] ring-1 ring-black">
                <Image src={social.src} width={20} height={20} alt={social.name} />
                <span className="ml-[10px]">Continue with {social.name}</span>
              </button>
            ))}
          </div>
          <div className="py-[30px]">
            <fieldset className="border-t border-[#666666]">
              <legend className="mx-auto px-4 text-[13.5px]">OR</legend>
            </fieldset>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-[15px]">

              <div className="col-span-2 flex flex-col">
                <label htmlFor="username" className={`text-[#666666] ${poppinsReg.className} text-[12px]`}>Username</label>
                <input type="text" id="username" name="username" className="h-[41px] ring-1 ring-[#C9C9C9] rounded-[9px]" />
              </div>

              <div className="col-span-2 flex flex-col">
                <label htmlFor="password" className={`text-[#666666] ${poppinsReg.className} text-[12px]`}>Password</label>
                <input type="password" id="password" name="password" className="h-[41px] ring-1 ring-[#C9C9C9] rounded-[9px]" />
              </div>

              {errMsg && <p className="col-span-2 text-[14px] text-red-500">{errMsg}</p>}

              <Link href={authButton[2].url} className={`${poppinsReg.className} text-[10px] underline`}>{authButton[2].name}</Link>

              <button type="submit" className={`rounded-[30px] text-white h-[41px] col-span-2 bg-[#C4C4C4] ${poppinsMed.className}`}>Log in</button>
            </div>
          </form>
        </div>
      </FormCard>
    </main>
  );
}

