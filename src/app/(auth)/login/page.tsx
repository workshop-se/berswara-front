'use client'

import Link from 'next/link';
import FormCard from '@/ui/FormCard';
import useSWR from "swr";

import { authButton } from "@/configs/routes";
import { login } from "@/lib/auth";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Poppins } from 'next/font/google';
import AuthTextInput from '@/ui/AuthTextInput';

const poppins = Poppins({ weight: "500", subsets: ["latin"] });

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Page() {
  const [errMsg, setErrMsg] = useState('');
  const [isCanSubmit, setIsCanSubmit] = useState(false);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
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
      router.replace('/forum');
    }
  };

  const handleInput = () => {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    setIsCanSubmit(!!username && !!password);
    const button = buttonRef.current;
    if (button) {
      button.disabled = !isCanSubmit;
    }
  }

  return (
    <main className="flex justify-center p-[40px]">
      <FormCard>
        <div className="w-[442px] h-[41px] rounded-[10px] flex overflow-hidden text-center text-[13.16px] text-white font-bold">
          <Link href={authButton[0].url} className="grow hover:scale-110 bg-silver flex flex-col justify-center">{authButton[0].name}</Link>
          <Link href={authButton[1].url} className="grow hover:scale-110 bg-darkslategray flex flex-col justify-center">{authButton[1].name}</Link>
        </div>
        <div className={`w-[333px] mx-auto text-[18px] text-xs font-normal ${poppins.className}`}>
          <h1 className="text-center p-[30px] text-lg font-medium">Log in</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-[15px]" >

              <AuthTextInput label="Username" type="text" id="username" name="username" ref={usernameRef} onInput={handleInput} />
              <AuthTextInput label="Password" type="password" id="password" name="password" ref={passwordRef} onInput={handleInput} />

              <p className="text-[14px] text-firebrick-0">{errMsg}</p>

              <Link href={authButton[2].url} className="text-[10px] underline">{authButton[2].name}</Link>

              <button ref={buttonRef} disabled type="submit" className={`rounded-[30px] text-white h-[41px] col-span-2 ${isCanSubmit ? "bg-firebrick-0" : "bg-silver"}`}>Log in</button>
            </div>
          </form>
        </div>
      </FormCard>
    </main>
  );
}
