import Image from "next/image";
import Link from "next/link";

export default function QuizHero() {
  return (
    <div className="bg-[#FFFCF7] p-[148px]">
      <h1 className="text-[48px] text-center font-bold">
        Quiz Kebangsaan Interaktif
      </h1>
      <div className="flex flex-row justify-center mt-[79px]">
        <div>
          <h2 className="text-[30px] text-wrap w-[439px] mb-[15px]">
            Uji Pengetahuan mu dengan Quiz kami!
          </h2>
          <p className="text-wrap w-[409px]">
            Millions of people come to Campoal to start and sign petitions
            that boldly call for social change. Become a member today and fuel
            our mission to empower everyone to create the kind of change they
            want to see.
          </p>
          <br></br>
          <div className="bg-[#F5EFE0] w-[195px] h-[48px] rounded-[10px] pt-[11px]">
            <Link className="flex flex-row justify-center items-center" href="/quiz/play">
              <p className="text-[18px] text-[#B30D19] mr-[13px]">
                Mulai Quiz
              </p>
              <Image
                className="object-cover w-[12px] h-[24px] "
                src="/images/angle-right-red.svg"
                alt="angle-right-red"
                width={0}
                height={0}
              />
            </Link>
          </div>
        </div>
        <div>
          <Image
            src="/images/hero-quiz.svg"
            alt="hero-quiz"
            width={0}
            height={0}
            className="object-scale-down w-[637px]"
          />
        </div>
      </div>
    </div>
  )
}
