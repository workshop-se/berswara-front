import { faker } from '@faker-js/faker';
import Image from 'next/image';

const modules = Array.from({ length: 9 }, () => ({
  name: faker.lorem.words(1),
  icon: "/images/draw-circle 1.svg",
  description: faker.lorem.words(10)

}))

export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[48px] text-center pt-[75px]">Kenali Kandidatmu</h1>
      <p className='text-24px w-[851px]'>Our brand identity system expresses our spirits and inspires our behaviors. The current system consists of 9 core elements that help unify and communicate Campoal brand with consistency and clarity.</p>
      <div className='grid grid-cols-3 mt-[75px] mb-[120px] gap-x-[27px] gap-y-[47px]'>
        {modules.map((module) => (
          <div key={module.name} className='w-[359px] bg-white rounded-[16px] flex flex-col overflow-hidden drop-shadow-md'>
            <div className='bg-[#F5EFE0] h-[359px] overflow-hidden flex place-items-center'>
              <Image className='object-cover w-[128px] h-[128px] m-auto' src={module.icon} alt={module.name} width={0} height={0}/>
            </div>
            <div className='p-[24px]'>
              <h2 className='text-center text-[24px]'>{module.name}</h2>
              <p className='text-center text-[18px]'>{module.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


