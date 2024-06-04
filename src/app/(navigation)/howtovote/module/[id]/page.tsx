'use client'
import { faker } from "@faker-js/faker"
import Image from "next/image"
import { useState, useEffect } from "react"

type Content = {
  h1: string,
  p: string
}

type Mod = {
  title: string,
  id: string,
  img: string,
  content: Content[]
}

export default function Page({ params }: { params: { id: string } }) {
  const [isLoading, setIsLoading] = useState(true);
  const [mod, setMod] = useState<Mod>({
    title: "",
    id: params.id,
    img: "",
    content: []
  });

  useEffect(() => {
    setTimeout(() => {
      setMod({
        title: faker.lorem.words(4),
        id: params.id,
        img: faker.image.url(),
        content: [
          { h1: "1" + faker.lorem.words(2), p: faker.lorem.paragraph(5) },
          { h1: "2" + faker.lorem.words(3), p: faker.lorem.paragraph(5) },
          { h1: "3" + faker.lorem.words(4), p: faker.lorem.paragraph(5) },
          { h1: "4" + faker.lorem.words(4), p: faker.lorem.paragraph(5) },
          { h1: "5" + faker.lorem.words(4), p: faker.lorem.paragraph(5) },
          { h1: "6" + faker.lorem.words(4), p: faker.lorem.paragraph(5) },
          { h1: "7" + faker.lorem.words(4), p: faker.lorem.paragraph(5) },
        ]
      });
      setIsLoading(false);
    }, 500);
  }, [params.id]);

  const nav = {
    next: faker.string.uuid(),
    prev: faker.string.uuid()
  }

  return (
    <div className="flex flex-col items-center">
      <p className='text-24px w-[851px] pt-[75px] text-center text-slategray'>Modul seputar pemilihan umum</p>
      <h1 className="text-[48px] text-center pt-[22px]">
        {isLoading ? <div className="bg-gray-300 h-[56px] w-[300px] rounded animate-pulse"></div> : mod.title}
      </h1>
      <div className="w-full max-w-[1440px] flex flex-col justify-center mt-[22px]">
        <div className="w-full max-h-[717px] overflow-hidden flex justify-center">
          {isLoading ? (
            <div className="bg-gray-300 w-full h-[717px] animate-pulse"></div>
          ) : (
            <Image src={mod.img} alt={mod.title} width={1440} height={717} className="w-full h-auto" />
          )}
        </div>
        <div className="px-[55px] mt-[55px] flex flex-col gap-[55px]">
          {isLoading ? (
            <>
              <div className="bg-gray-300 h-[36px] w-[300px] rounded animate-pulse"></div>
              <div className="bg-gray-300 h-[24px] w-full rounded animate-pulse mt-[22px]"></div>
              <div className="bg-gray-300 h-[24px] w-full rounded animate-pulse mt-[22px]"></div>
              <div className="bg-gray-300 h-[24px] w-full rounded animate-pulse mt-[22px]"></div>
            </>
          ) : (
            mod.content.map((content, index) => (
              <div key={index}>
                {content.h1 && <h2 className="text-[36px]">{content.h1}</h2>}
                {content.p && <p className="mt-[22px] text-slategray">{content.p}</p>}
              </div>
            ))
          )}

          {!isLoading && (
            <div className="flex justify-between mt-[55px] mb-[48px]">
              <a href={`/module/${nav.prev}`} className="text-slategray hover:text-[#000000]">
                &larr; Previous
              </a>
              <a href={`/module/${nav.next}`} className="text-slategray hover:text-[#000000]">
                Next &rarr;
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

