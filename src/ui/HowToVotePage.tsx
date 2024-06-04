import Image from "next/image";

export default function HowToVotePage() {
  return (

    <div className="bg-[#FFFCF7]">
      <div className="grid grid-col-2">
        <div className="col-span-2 mb-[30px]">
          <h1 className="text-[48px] text-center font-bold">
            Learn How to Vote Today!
          </h1>
          <p className="text-[18px] text-center text-[#5F5F75]">
            Berswara memiliki beberapa fitur untuk membantu kamu menentukan
            suaramu.
          </p>
        </div>
        <div className="flex flex-col ml-[200px]">
          <div className="flex flex-row mb-[50px]">
            <div className="mr-[29px]">
              <Image
                className="object-cover w-[72px] h-[72px]"
                src="/images/icon-modul.svg"
                alt="icon modul"
                width={0}
                height={0}
              />
            </div>
            <div className="w-[389px]">
              <h1 className="text-[24px] font-bold text-left">
                Modul Belajar Pemilu
              </h1>
              <p className="text-[18px] text-[#5F5F75] text-left">
                Belajar langkah-langkah dan prosedur pemilihan umum.
              </p>
            </div>
          </div>
          <div className="flex flex-row mb-[50px]">
            <div className="mr-[29px]">
              <Image
                className="object-cover w-[72px] h-[72px]"
                src="/images/icon-quiz.svg"
                alt="icon quiz"
                width={0}
                height={0}
              />
            </div>
            <div className="w-[389px]">
              <h1 className="text-[24px] font-bold text-left">
                Quiz Interaktif
              </h1>
              <p className="text-[18px] text-[#5F5F75] text-left">
                Uji pengetahuan kebangsaan dan pengetahuan politikmu!
              </p>
            </div>
          </div>
          <div className="flex flex-row mb-[50px]">
            <div className="mr-[29px]">
              <Image
                className="object-cover w-[72px] h-[72px]"
                src="/images/icon-kandidat.svg"
                alt="icon kandidat"
                width={0}
                height={0}
              />
            </div>
            <div className="w-[389px]">
              <h1 className="text-[24px] font-bold text-left">
                Kenali Calon Kandidatmu!
              </h1>
              <p className="text-[18px] text-[#5F5F75] text-left">
                Kenali calon kandidat yang mewakili suaramu!
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/images/hero-2.svg"
            alt="hero-2"
            width={0}
            height={0}
            className="object-scale-down w-[637px]"
          />
        </div>
      </div>
    </div>
  )
}
