import Link from 'next/link';
import Image from 'next/image';

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

  return (
    <div className='grid grid-cols-4 mt-[75px] mb-[120px] gap-x-[24px] gap-y-[116px]'>
      {candidates.map((candidate) => (
        <Link key={candidate.id} className='h-[354px] w-[263px] relative group' href={`/candidates/${candidate.id}`} >
          <div
            className="relative rounded-[10px] overflow-hidden shadow-md"
          >
            <div className="w-[263px] h-[346px] relative">
              <Image
                className="object-cover"
                src={candidate.avatar}
                alt={candidate.name}
                layout='fill'
              />
            </div>

            <div className='transition ease-in-out duration-300 absolute bottom-0 left-0 w-full group-hover:h-full bg-white backdrop-filter backdrop-blur-sm opacity-95 rounded-[10px] flex flex-col justify-center items-center p-4 group-hover:bg-gradient-to-b group-hover:from-floralwhite group-hover:to-[#DBCCC1]'>
              <h2 className='text-[18px] text-center'>{candidate.name}</h2>
              <h3 className='text-[14px] text-center text-slategray'>{candidate.party}</h3>
              <h4 className='hidden group-hover:inline bg-firebrick-0 text-white rounded-[10px] text-center p-2 mt-[10px]'>Read More</h4>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

