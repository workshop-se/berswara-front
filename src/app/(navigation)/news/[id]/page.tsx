export default function Page({ params }: { params: { id: string } }) {

  return (
    <div className="bg-white shadow-md mt-[54px] w-[1304px] m-auto px-[87px] py-[47px]">
      {params.id}
    </div>
  )
}

