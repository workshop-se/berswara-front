'use client'



export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col items-center">
      {params.id}
    </div>
  )
}


