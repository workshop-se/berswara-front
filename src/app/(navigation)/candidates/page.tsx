'use client'

import { faker } from '@faker-js/faker';
import { useState, useEffect } from 'react';
import CandidateCards from '@/ui/CandidateCards';

interface Candidate {
  name: string;
  id: string;
  avatar: string;
  party: string;
}

export default function Page() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const newCandidates: Candidate[] = Array.from({ length: 12 }, () => ({
      name: faker.person.fullName(),
      id: faker.string.uuid(),
      avatar: faker.image.avatar(),
      party: faker.company.name()
    }));
    setCandidates(newCandidates);
  }, []);

  const filteredCandidates = candidates.filter(candidate =>
    candidate.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[48px] text-center mt-[75px]">Kenali Kandidatmu</h1>
      <div className="grow flex bg-white w-[80vw] lg:w-[751px] h-[56px] hover:shadow">
        <div>
          <svg className="h-[24px] w-[24px] fill-black m-[16px]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30"
            height="30" viewBox="0 0 30 30">
            <path
              d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
            </path>
          </svg>
        </div>
        <input className="grow focus:outline-none" type="text" placeholder="Cari kandidat" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      </div>

      <CandidateCards candidates={filteredCandidates} />
    </div>
  );
}

