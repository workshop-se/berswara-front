export default function Page({ params }: { params: { id: string } }) {
  return <div>
    <div className="flex flex-col items-center">
      <p className='text-24px w-[851px] pt-[75px] text-center'>Modul seputar pemilihan umum</p>
      <h1 className="text-[48px] text-center pt-[22px]">1. Pengenalan Pemilu di Indonesia: Sejarah dan Dasar Hukum</h1>
      <div className='grid grid-cols-3 mt-[75px] mb-[120px] gap-x-[27px] gap-y-[47px]'>
        {params.id}
      </div>
    </div>
  </div>
}
