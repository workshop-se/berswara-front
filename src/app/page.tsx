import Link from "next/link";
import Image from 'next/image';

let heroButton = [
  {name : "Get Started", url : "/"},
  {name : "Learn More", url : "/"}
]

export default function Home() {
  return (
    <main className="">
      <div>
        {/* Todo: Landing Page */}
        <h1 className="text-[72px] text-center font-bold">Lorem Ipsum Dolor Sir Amet</h1>
        <p className="text-[24px] text-center font-bold">We’re offer complete solution to launch your social movements.</p>
      </div>
      <div className="w-[818px] h-[632px] relative mx-auto">
        <Image className="mt-6" src="/images/hero.svg" alt="hero" width={0} height={0} layout="fill">
        </Image>
        <div className="flex justify-center m-[52px] z-10 relative">
          <Link href={heroButton[0].url} className="mx-[16.5px] text-white bg-[#B30D19] py-[13px] px-[49px] rounded-[27px]">
            {heroButton[0].name}
          </Link>
          <Link href={heroButton[1].url} className="mx-[16.5px] bg-[#F1ECE8] py-[13px] px-[49px] rounded-[27px]">
            {heroButton[1].name}
          </Link>
        </div>
      </div>
      
    </main>
  );
}
