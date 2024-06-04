import { faker } from "@faker-js/faker"
import Image from "next/image"

export default function Page({ params }: { params: { id: string } }) {

  const candidate = {
    name: faker.person.fullName(),
    id: params.id,
    avatar: faker.image.avatar(),
    party: faker.company.name(),
    quotes: faker.lorem.paragraph(5),
    said: faker.lorem.paragraph(5),
    bio: faker.lorem.paragraph(10),
    education: faker.lorem.paragraph(10),
    goals: faker.lorem.paragraph(10)
  }

  return (
    <div className="flex gap-x-[40px] mt-[134px] w-[1225px] bg-floralwhite m-auto shadow rounded-[17.54px] py-[59px] px-[61px]">
      <div className="flex flex-col w-[314px]">
        <div className='h-[354px] relative' >
          <div className="w-[263.26px] h-[305.3px] overflow-hidden">
            <Image
              className="object-cover relative"
              src={candidate.avatar}
              alt={candidate.name}
              layout='fill'
            />
          </div>
          <div className='relative b-0 bg-white h-[86.26px] w-[212.85px] z-1 m-auto flex flex-col place-content-center rounded-[10px]'>
            <div className='flex justify-center'>
              <p className='text-[18px] text-center'>{candidate.name}</p>
            </div>
            <div className='flex justify-center'>
              <p className='text-[14px] text-center text-slategray'>{candidate.party}</p>
            </div>
          </div>
        </div>
        <Card className="grow mt-[80px]">
          <h1>Quotes</h1>
          <p className="text-[14px] text-slategray">{candidate.quotes}</p>
        </Card>

        <Card className="grow mt-[58px]">
          <h1>What other said about {candidate.name}</h1>
          <p className="text-[14px] text-slategray">{candidate.said}</p>
        </Card>
      </div>
      <div className="grow flex flex-col gap-y-[50px]">
        <Card className="grow">
          <h1>Bio</h1>
          <p className="text-[14px] text-slategray">{candidate.bio}</p>
        </Card>
        <Card className="grow">
          <h1>Education</h1>
          <p className="text-[14px] text-slategray">{candidate.education}</p>
        </Card>
        <Card className="grow">
          <h1>Goals</h1>
          <p className="text-[14px] text-slategray">{candidate.goals}</p>
        </Card>
      </div>
    </div>
  )
}

// <div className="grow mt-[80px] px-[17px] py-[13px] bg-white shadow-md rounded-[10px]">
//   <h1>Quotes</h1>
//   <p className="text-[14px] text-slategray">{candidate.quotes}</p>
// </div>
function Card({ children, className }: { children: React.ReactNode, className: string }) {
  return (
    <div className={`px-[17px] py-[13px] bg-white shadow-md rounded-[10px] ${className}`}>
      {children}
    </div>
  );
}
