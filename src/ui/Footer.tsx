import Image from "next/image";
import { Jost, Sen } from "next/font/google";
const jost = Jost({weight:"400", subsets: ["latin"] });
const sen = Sen({weight:"400", subsets: ["latin"] });

const medias = [
  { name: "Facebook", src: "/images/facebook.svg" },
  { name: "Twitter", src: "/images/twitter.svg" },
  { name: "Youtube", src: "/images/youtube.svg" },
  { name: "Medium", src: "/images/medium.svg" },
]

export default function Footer() {
  return (
    <footer className="bg-darkslategray text-white px-[150px]">
      <Image className="pt-[59px] " src="/images/logo-white.svg" height={59} width={260} alt="Logo" />
      <p className={`${jost.className} text-[24px] max-w-[600px] pb-[90px]`}>Sentral Senayan II Lantai 28, Jl. Asia Afrika No. 8, Gelora, Tanah Abang, RT.1/RW.3, Gelora, Tanah Abang, Kota Jakarta Pusat, DKI Jakarta</p>
      <div className="flex pb-[28px]">
        <p className={`${sen.className} text-[16px] grow`}>© 2024 Berswara -  All rights reserved</p>
        <div className="flex">
          {medias.map((media) => (
            <Image key={media.name} className="mx-[8px]" src={media.src} height={28} width={28} alt={media.name} />
          ))}
        </div>
      </div>
    </footer>
  );
}
