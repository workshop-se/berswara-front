'use client'

import Link from 'next/link';
import FormCard from '@/ui/FormCard';
import Image from 'next/image';
import useSWR from "swr";

import { Poppins } from "next/font/google";
import { authButton, socialAuths } from "@/configs/routes";
import { login, signup } from "@/lib/auth";
import { useState } from "react";
import { useRouter } from 'next/navigation';


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

    let data = await signup(
      formData.get('fullname') as string,
      formData.get('email') as string,
      formData.get('username') as string,
      formData.get('password') as string
    );

    if (data.error) {
      console.error(data.message);
      setErrMsg(data.message);
      return
    }

    console.log(data.message);

    data = await login(
      formData.get('username') as string,
      formData.get('password') as string
    );

    if (data.error) {
      setErrMsg(data.message);
    } else {
      mutate(null, true);
      router.push('/forum');
    }
  }

  return (
    <main className="flex justify-center p-[40px]">
      <FormCard>
        <div className="w-[442px] h-[41px] rounded-[10px] bg-red-100 grid grid-cols-2 overflow-hidden">
          <Link href={authButton[0].url} className="bg-gray-800 flex items-center justify-center text-white">{authButton[0].name}</Link>
          <Link href={authButton[1].url} className="bg-[#C3C3C3] flex items-center justify-center text-white">{authButton[1].name}</Link>
        </div>
        <div className='w-[333px] mx-auto text-[18px]'>
          <h1 className={`${poppinsMed.className} text-center p-[30px]`}>Sign up</h1>
          <div className="grid grid-rows-2 gap-[15px]">
            {socialAuths.map((social) => (
              <button key={social.name} onClick={social.action} className="bg-white flex items-center justify-center p-[10px] rounded-[30px] text-[14px] ring-1 ring-black">
                <Image src={social.src} width={20} height={20} alt={social.name} />
                <span className="ml-[10px]">Sign up with {social.name}</span>
              </button>
            ))}
          </div>
          <div className="py-[30px]">
            <fieldset className="border-t border-[#666666]">
              <legend className="mx-auto px-4 text-[13.5px]">OR</legend>
            </fieldset>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-[15px]">
              <div className="flex flex-col">
                <label htmlFor="fullname" className={`text-[#666666] ${poppinsReg.className} text-[12px]`}>Full Name</label>
                <input type="text" id="fullname" name="fullname" className="h-[41px] ring-1 ring-[#C9C9C9] rounded-[9px]" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className={`text-[#666666] ${poppinsReg.className} text-[12px]`}>Email Address</label>
                <input type="email" id="email" name="email" className="h-[41px] ring-1 ring-[#C9C9C9] rounded-[9px]" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="username" className={`text-[#666666] ${poppinsReg.className} text-[12px]`}>Username</label>
                <input type="text" id="username" name="username" className="h-[41px] ring-1 ring-[#C9C9C9] rounded-[9px]" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="password" className={`text-[#666666] ${poppinsReg.className} text-[12px]`}>Password</label>
                <input type="password" id="password" name="password" className="h-[41px] ring-1 ring-[#C9C9C9] rounded-[9px]" />
              </div>

              {errMsg && <p className="text-[14px] text-red-500">{errMsg}</p>}

              <button type="submit" className={`rounded-[30px] text-white h-[41px] col-span-2 bg-[#C4C4C4] ${poppinsMed.className}`}>Sign up</button>
            </div>
          </form>
        </div>
      </FormCard>
    </main>
  );
}
