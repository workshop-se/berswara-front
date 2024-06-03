import Image from "next/image";

export default function Page() {
  return (
    <div className="mt-[125px] m-auto pb-[56px] bg-white max-w-[1166px] flex flex-col rounded-[16px] shadow-md">
      <div className="flex flex-row-reverse p-[16px]">
        <Image src="/icons/x.svg" alt="exit" width={32} height={32} ></Image>
      </div>
      <div className="px-[80px] flex flex-col gap-y-[32px]">
        <div>&larr; Back</div>
        <div className="flex gap-x-[34.73px]">
          <div className="text-[23.16px] text-[#99A9A9]">Pertanyaaan 1/5</div>
          <div className="text-[23.16px] text-[#99A9A9] font-normal">Skor: 0</div>
        </div>
        <div className="text-[46.31px] font-normal text-[#404040]">Berapa tahun dalam satu periode jabatan?</div>
        <div className="flex flex-col gap-y-[11.58px]">
          <div className="text-[23.16px] text-[#404040] p-[23px] bg-[#F2F4F7] rounded-full text-center">5 Tahun</div>
          <div className="text-[23.16px] text-[#404040] p-[23px] bg-[#F2F4F7] rounded-full text-center">5 Tahun</div>
          <div className="text-[23.16px] text-[#404040] p-[23px] bg-[#F2F4F7] rounded-full text-center">5 Tahun</div>
        </div>
      </div>
    </div>
  );
}
