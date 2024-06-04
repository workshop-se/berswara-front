import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface Candidate {
  name: string;
  id: string;
  avatar: string;
  party: string;
}

interface CandidateCardsProps {
  candidates: Candidate[];
}

export default function CandidateCards({ candidates }: CandidateCardsProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className='grid grid-cols-4 mt-[75px] mb-[120px] gap-x-[24px] gap-y-[116px]'>
      {candidates.map((candidate) => (
        <Link key={candidate.id} className='h-[354px] w-[263px] relative' href={`/candidates/${candidate.id}`} >
          <div
            className="relative rounded-[10px] overflow-hidden shadow-md"
            onMouseEnter={() => setHoveredId(candidate.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="w-[263px] h-[346px] relative">
              <Image
                className="object-cover"
                src={candidate.avatar}
                alt={candidate.name}
                layout='fill'
              />
            </div>

            {hoveredId === candidate.id ? (
              <div className='absolute top-0 left-0 w-full h-full bg-white bg-gradient-to-b from-floralwhite to-[#DBCCC1] flex backdrop-filter backdrop-blur-sm opacity-95 rounded-[10px] transition-all duration-300'>
                <div className='flex flex-col justify-center items-center w-full h-full px-auto'>
                  <h2 className='text-[18px] text-center'>{candidate.name}</h2>
                  <h3 className='text-[14px] text-center text-slategray'>{candidate.party}</h3>
                  <h4 className='bg-firebrick-0 text-white rounded-[10px] text-center p-2 mt-[10px]'>Read More</h4>
                </div>
              </div>
            ) : (
              <div className='absolute bottom-0 left-0 w-full bg-white backdrop-filter backdrop-blur-sm opacity-95 rounded-[10px] transition-all duration-300'>
                <div className='flex flex-col justify-center items-center p-4'>
                  <h2 className='text-[18px] text-center'>{candidate.name}</h2>
                  <h3 className='text-[14px] text-center text-slategray'>{candidate.party}</h3>
                </div>
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}
