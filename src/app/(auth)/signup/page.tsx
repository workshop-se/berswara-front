'use client'

import Link from 'next/link';
import FormCard from '@/ui/FormCard';
import useSWR from "swr";
import { useState, useRef } from "react";

import { Poppins } from "next/font/google";
import { authButton } from "@/configs/routes";
import { login, signup } from "@/lib/auth";
import { useRouter } from 'next/navigation';
import AuthTextInput from '@/ui/AuthTextInput';

const poppins = Poppins({ weight: "500", subsets: ["latin"] });

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Page() {
  const [errMsg, setErrMsg] = useState('');
  const router = useRouter();
  const { mutate } = useSWR('/api/session', fetcher);

  const fullnameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isCanSubmit, setIsCanSubmit] = useState(false);


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
      router.replace('/forum');
    }
  }

  const handleInput = () => {
    const fullname = fullnameRef.current?.value;
    const email = emailRef.current?.value;
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    setIsCanSubmit(!!fullname && !!email && !!username && !!password);
    const button = buttonRef.current;
    if (button) {
      button.disabled = !isCanSubmit;
    }
  }

  return (
    <main className="flex justify-center p-[40px]">
      <FormCard>
        <div className="w-[442px] h-[41px] rounded-[10px] flex text-center overflow-hidden text-[13.16px] text-white font-bold">
          <Link href={authButton[0].url} className="grow hover:scale-110 bg-darkslategray flex flex-col justify-center">{authButton[0].name}</Link>
          <Link href={authButton[1].url} className="grow hover:scale-110 bg-silver flex flex-col justify-center">{authButton[1].name}</Link>
        </div>
        <div className={`w-[333px] mx-auto text-[18px] text-xs font-normal ${poppins.className}`}>
          <h1 className="text-center p-[30px] text-lg font-medium">Sign up</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-[15px]">
              <AuthTextInput label="Full Name" type="text" id="fullname" name="fullname" ref={fullnameRef} onInput={handleInput} />

              <AuthTextInput label="Email Address" type="email" id="email" name="email" ref={emailRef} onInput={handleInput} />

              <AuthTextInput label="Username" type="text" id="username" name="username" ref={usernameRef} onInput={handleInput} />

              <AuthTextInput label="Password" type="password" id="password" name="password" ref={passwordRef} onInput={handleInput} />

              <p className="text-[14px] text-red-500">{errMsg}</p>

              <button ref={buttonRef} disabled type="submit" className={`rounded-[30px] text-white h-[41px] col-span-2 ${isCanSubmit ? "bg-firebrick-0" : "bg-silver"}`}>Sign up</button>
            </div>
          </form>
        </div>
      </FormCard>
    </main>
  );
}
