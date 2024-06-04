'use client'
import { Module, getModules } from '@/lib/module';
import { faker } from '@faker-js/faker';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const modules = Array.from({ length: 9 }, () => ({
  name: faker.lorem.words(1),
  id: faker.string.uuid(),
  icon: "/images/draw-circle 1.svg",
  description: faker.lorem.words(10)
}))

export default function Page() {
  const [modules, setModules] = useState<Module[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchModules = async () => {
      const data = await getModules(1, 9);
      if (data.error) {
        console.error('Failed to fetch modules:', data.error);
      }
      setModules(data);
      setLoading(false);
    }
    fetchModules()
  }, [])
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[48px] text-center pt-[75px]">Module Seputar Pemilihan Umum</h1>
      <p className='text-24px w-[851px] text-[#5F5F75]'>Our brand identity system expresses our spirits and inspires our behaviors. The current system consists of 9 core elements that help unify and communicate Campoal brand with consistency and clarity.</p>
      <div className='grid grid-cols-3 mt-[75px] mb-[120px] gap-x-[27px] gap-y-[47px]'>
        {modules.map((module) => (
          <div key={module.id} className='relative' >
            <Link
              className='hover:cursor-pointer relative z-10 w-[359px] h-full bg-white rounded-[16px] flex flex-col overflow-hidden drop-shadow-md transform transition-transform duration-200 hover:-translate-x-[7px] hover:-translate-y-[6px] hover:bg-gray-300'
              href={module.url}
            >
              <div className='bg-[#F5EFE0] h-[359px] overflow-hidden flex place-items-center'>
                <Image className='object-cover w-[100%] h-[100%] m-auto' src={module.thumbnail} alt={module.title} width={359} height={359} /> 
              </div>
              <div className='p-[24px]'>
                <h2 className='text-center text-[24px]'>{module.title}</h2>
                {/*}<p className='leading-[22px] text-[#5F5F75]'>{module.title}</p>*/}
              </div>
            </Link>
            <div className="absolute top-0 left-0 z-0 w-full h-full bg-[#CCC0B2] rounded-[16px] flex items-center justify-center text-gray-500">
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


