import Link from "next/link";
import Image from 'next/image';

const heroButton = [
  {name : "Get Started", url : "/"},
  {name : "Learn More", url : "/"}
]

export default function Home() {
  return (
    <div className="">
      <div>
        <div>
          {/* Todo: Landing Page */}
          <h1 className="text-[72px] text-center font-bold">Lorem Ipsum Dolor Sir Amet</h1>
          <p className="text-[24px] text-center font-bold">We’re offer complete solution to launch your social movements.</p>
        </div>
        <div className="w-[818px] h-[632px] relative mx-auto">
          <Image className="mt-6" src="/images/hero.svg" alt="hero" width={0} height={0} layout="fill"/> 
          <div className="flex justify-center m-[52px] z-10 relative">
            <Link href={heroButton[0].url} className="mx-[16.5px] text-white bg-[#B30D19] py-[13px] px-[49px] rounded-[27px]">
              {heroButton[0].name}
            </Link>
            <Link href={heroButton[1].url} className="mx-[16.5px] bg-[#F1ECE8] py-[13px] px-[49px] rounded-[27px]">
              {heroButton[1].name}
            </Link>
          </div>
        </div>
      </div>

      
      <div className="bg-[#FFFCF7]">
        <div className="grid grid-col-2">
          <div className="col-span-2 mb-[30px]">
            <h1 className="text-[48px] text-center font-bold">Learn How to Vote Today!</h1>
            <p className="text-[18px] text-center text-[#5F5F75]">Berswara memiliki beberapa fitur untuk membantu kamu menentukan suaramu.</p>
          </div>
          <div className="flex flex-col ml-[200px]">
            <div className="flex flex-row mb-[50px]">
                <div className="mr-[29px]">
                    <Image className="object-cover w-[72px] h-[72px]" src="/images/icon-modul.svg" alt="icon modul" width={0} height={0} />
                </div>
                <div className="w-[389px]">
                    <h1 className="text-[24px] font-bold text-left">Modul Belajar Pemilu</h1> 
                    <p className="text-[18px] text-[#5F5F75] text-left">Belajar langkah-langkah dan prosedur pemilihan umum.</p>
                </div>
            </div>
            <div className="flex flex-row mb-[50px]">
                <div className="mr-[29px]">
                    <Image className="object-cover w-[72px] h-[72px]" src="/images/icon-quiz.svg" alt="icon quiz" width={0} height={0} />
                </div>
                <div className="w-[389px]">
                    <h1 className="text-[24px] font-bold text-left">Quiz Interaktif</h1> 
                    <p className="text-[18px] text-[#5F5F75] text-left">Uji pengetahuan kebangsaan dan pengetahuan politikmu!</p>
                </div>
            </div>
            <div className="flex flex-row mb-[50px]">
                <div className="mr-[29px]">
                    <Image className="object-cover w-[72px] h-[72px]" src="/images/icon-kandidat.svg" alt="icon kandidat" width={0} height={0} />
                </div>
                <div className="w-[389px]">
                    <h1 className="text-[24px] font-bold text-left">Kenali Calon Kandidatmu!</h1> 
                    <p className="text-[18px] text-[#5F5F75] text-left">Kenali calon kandidat yang mewakili suaramu!</p>
                </div>
            </div>
          </div>
          <div>
            <Image src="/images/hero-2.svg" alt="hero-2" width={0} height={0} className="object-scale-down w-[637px]"/>
          </div>
        </div>
      </div>

      <div className="bg-[#FFFCF7]">
       <div className="">
          <h1 className="text-[48px] text-center font-bold">Modul Prosedur Proses Pemilihan</h1>
          <p className="text-[18px] text-center text-[#5F5F75] w-[577px]">Berikut adalah langkah-langkah yang harus anda lakukan agar dapat mengikuti pemilihan dan menggunakan hak suara anda.</p>
       </div>
       <div className="flex flex-auto">
            todo : cards
       </div>
      </div>

    </div>
  );
}
