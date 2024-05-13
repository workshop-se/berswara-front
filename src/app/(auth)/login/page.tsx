'use client'

import { Poppins } from "next/font/google";
import Link from 'next/link';
import FormCard from '@/components/FormCard';
import { authButton, socialAuths } from "@/configs/routes";
import Image from 'next/image';


const poppinsMed = Poppins({ weight: "500", subsets: ["latin"] });
const poppinsReg = Poppins({ weight: "300", subsets: ["latin"] });


export default function Page() {
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
              <button onClick={social.action} className="bg-white flex items-center justify-center p-[10px] rounded-[30px] text-[14px] ring-1 ring-black">
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
          <form>
            <div className="grid grid-cols-2 gap-[15px]">

              <div className="col-span-2 flex flex-col">
                <label htmlFor="email" className={`text-[#666666] ${poppinsReg.className} text-[12px]`}>Email Address</label>
                <input type="email" id="email" className="h-[41px] ring-1 ring-[#C9C9C9] rounded-[9px]" />
              </div>

              <div className="col-span-2 flex flex-col">
                <label htmlFor="password" className={`text-[#666666] ${poppinsReg.className} text-[12px]`}>Password</label>
                <input type="password" id="password" className="h-[41px] ring-1 ring-[#C9C9C9] rounded-[9px]" />
              </div>


              <Link href={authButton[2].url} className={`${poppinsReg.className} text-[10px] underline`}>{authButton[2].name}</Link>

              <button type="submit" className={`rounded-[30px] text-white h-[41px] col-span-2 bg-[#C4C4C4] ${poppinsMed.className}`}>Log in</button>
            </div>
          </form>
        </div>
      </FormCard>
    </main>
  );
}
