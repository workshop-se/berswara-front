import HowToVotePage from "@/ui/HowToVotePage";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col">
      <HowToVotePage />
      <div className="bg-[#FFFCF7] h-[108px]"></div>
      <div>
        <div className="grow bg-[#B30D19] py-[148px] pl-[156px] flex flex-col gap-y-[43px] text-[#FFFCF7]">
          <Image src="/icons/module.svg" alt="module" width={96} height={96} />
          <h1 className="text-[36px]">Modul</h1>
          <p className="w-[476px] font-normal  text-[18px]">
            We help you easy start your campaign, collect donations, signatures. You can manage your campaign updates and your supporters on dashboard.
          </p>
          <Link href="/howtovote/module" className="p-[11px] bg-[#FFFCF7] self-start rounded-[10px] text-[#B30D19]">
            <span className="  text-[18px]">Modul lengkap</span>
            {
              // todo: 'add arrow icon'
            }
          </Link>
        </div>
        <div className="grow text-[#B30D19] py-[148px] pl-[156px] flex flex-col gap-y-[43px] bg-[#F5EFE0]">
          <Image src="/icons/idea.svg" alt="module" width={96} height={96} />
          <h1 className="text-[36px]">Quiz</h1>
          <p className="w-[476px] font-normal  text-[18px]">
            Help the campaigns achieve their goals. Make the world better by signing, sharing and donating to spread good values to the community.
          </p>
          <Link href="/quiz" className="p-[11px] text-[#F5EFE0] bg-[#B30D19] self-start rounded-[10px]">
            <span className="text-[18px]">Mulai Quiz</span>
            {
              // todo: 'add arrow icon'
            }
          </Link>
        </div>

      </div>
    </div>
  )

}
