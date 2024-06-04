import { faker } from "@faker-js/faker";
import Link from "next/link";
import Image from "next/image";

export default function PersonalWidget() {
  const profile = {
    username: faker.person.firstName().toLowerCase(),
    avatar: faker.image.avatar(),
    rank: faker.number.int(100),
    github: faker.internet.url(),
    instagram: faker.internet.url(),
    facebook: faker.internet.url(),
  }
  return (
    <div className="w-[270px] py-[30px] px-[20px] bg-white shadow rounded-[5px] flex flex-col gap-y-[20px] text-center self-start">
      <div>
        <Image src={profile.avatar} alt="avatar" width={100} height={100} className="rounded-full w-full"></Image>
      </div>
      <div>@{profile.username}</div>
      <div className="h-[1px] bg-gray-200 w-full"></div>
      <div className="flex justify-center gap-x-[5px]">
        <Image src="/icons/award-red.svg" alt="ranking" width={24} height={24}></Image>
        <span className="font-normal text-[22px] text-firebrick-0">{profile.rank}</span>
      </div>
      <div className="h-[1px] bg-gray-200 w-full"></div>
      <div className="flex justify-center gap-x-[10px]">
        <Link href={profile.github}>
          <Image src="/icons/github.svg" alt="github" width={24} height={24}></Image>
        </Link>

        <Link href={profile.instagram}>
          <Image src="/icons/instagram.svg" alt="github" width={24} height={24}></Image>
        </Link>

        <Link href={profile.facebook}>
          <Image src="/icons/facebook.svg" alt="github" width={24} height={24}></Image>
        </Link>
      </div>
    </div>
  );
}
