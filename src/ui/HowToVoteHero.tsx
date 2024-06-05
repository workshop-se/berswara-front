import Image from "next/image";

export default function HowToVoteHero() {
  return (
    <div className="bg-[#FFFCF7] flex flex-col py-[108px]">
      <h1 className="text-[48px] text-center font-bold">
        Learn How to Vote Today!
      </h1>
      <p className="text-[18px] text-center text-[#5F5F75]">
        Berswara memiliki beberapa fitur untuk membantu kamu menentukan
        suaramu.
      </p>
      <div className="mt-[24px] flex flex-col-reverse xl:flex-row gap-y-[48px] justify-center items-center">
        <div className="flex flex-col justify-center">
          <Item title="Modul Belajar Pemilu" description="Belajar langkah-langkah dan prosedur pemilihan umum." icon="/images/icon-modul.svg" />
          <Item title="Quiz Interaktif" description="Uji pengetahuan kebangsaan dan pengetahuan politikmu!" icon="/images/icon-quiz.svg" />
          <Item title="Kenali Calon Kandidatmu!" description="Kenali calon kandidat yang mewakili suaramu!" icon="/images/icon-kandidat.svg" />
        </div>
        <Image
          src="/images/hero-2.svg"
          alt="hero-2"
          width={637}
          height={464}
        />
      </div>
    </div >
  )
}

function Item({ title, description, icon }: { title: string, description: string, icon: string }) {
  return (
    <div className="flex flex-row mb-[50px]">
      <div className="mr-[29px]">
        <Image
          className="object-cover w-[72px] h-[72px]"
          src={icon}
          alt="icon modul"
          width={0}
          height={0}
        />
      </div>
      <div className="w-[389px]">
        <h1 className="text-[24px] font-bold text-left">
          {title}
        </h1>
        <p className="text-[18px] text-[#5F5F75] text-left">
          {description}
        </p>
      </div>
    </div>
  )
}
