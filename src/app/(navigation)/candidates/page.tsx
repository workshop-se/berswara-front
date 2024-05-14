import { faker } from '@faker-js/faker';
import Image from 'next/image';

const candidates = Array.from({ length: 12 }, () => ({
  name: faker.person.firstName() + " " + faker.person.lastName(),
  avatar: faker.image.avatar(),
  party: faker.company.name()
}))

export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[48px] text-center pt-[75px]">Kenali Kandidatmu</h1>
      <div className="flex bg-white w-[751px] h-[56px]">
        <div>
          <svg className="h-[24px] w-[24px] fill-black m-[16px]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30"
            height="30" viewBox="0 0 30 30">
            <path
              d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
            </path>
          </svg>
        </div>
        <input className="grow focus:outline-none" type="text" placeholder="Cari kandidat" />
      </div>

      <div className='grid grid-cols-4 mt-[75px] mb-[120px] gap-x-[24px] gap-y-[116px]'>
        {candidates.map((candidate) => (
          <div key={candidate.name} className='h-[354px] relative'>
            <div className="w-[263.26px] h-[305.3px] overflow-hidden">
              <Image
                className="object-cover"
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
                <p className='text-[14px] text-center'>{candidate.party}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

