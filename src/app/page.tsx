"use client";

import Link from "next/link";
import Image from "next/image";
import CandidateCards from "@/ui/CandidateCards";
import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// // import required modules
// import { Pagination } from 'swiper/modules';

interface Candidate {
  name: string;
  id: string;
  avatar: string;
  party: string;
}

const heroButton = [
  { name: "Get Started", url: "/" },
  { name: "Learn More", url: "/" },
];

export default function Home() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const newCandidates: Candidate[] = Array.from({ length: 12 }, () => ({
      name: faker.person.fullName(),
      id: faker.string.uuid(),
      avatar: faker.image.avatar(),
      party: faker.company.name(),
    }));
    setCandidates(newCandidates);
  }, []);

  return (
    <div className="">
      <div>
        <div>
          {/* Todo: Landing Page */}
          <h1 className="text-[72px] text-center font-bold">
            Selamat datang di Berswara!
          </h1>
          <p className="text-[24px] text-center font-bold">
            Satu suara sangat berarti.
          </p>
        </div>
        <div className="w-[818px] h-[632px] relative mx-auto">
          <Image
            className="mt-6"
            src="/images/hero.svg"
            alt="hero"
            width={0}
            height={0}
            layout="fill"
          />
          <div className="flex justify-center m-[52px] z-10 relative">
            <Link
              href={heroButton[0].url}
              className="mx-[16.5px] text-white bg-[#B30D19] py-[13px] px-[49px] rounded-[27px]"
            >
              {heroButton[0].name}
            </Link>
            <Link
              href={heroButton[1].url}
              className="mx-[16.5px] bg-[#F1ECE8] py-[13px] px-[49px] rounded-[27px]"
            >
              {heroButton[1].name}
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-[155px]">
        <h1 className="text-[72px] text-center font-bold">
          Baca berita terbaru hari ini!
        </h1>
        <p className="text-[24px] text-center font-bold">
          Berita seputar pemilu anti hoaks hoaks gacor.
        </p>
        <div className="text-center">todo : image slide</div>
      </div>
      <div className="bg-[#FFFCF7]">
        <div className="grid grid-col-2">
          <div className="col-span-2 mb-[30px]">
            <h1 className="text-[48px] text-center font-bold">
              Learn How to Vote Today!
            </h1>
            <p className="text-[18px] text-center text-[#5F5F75]">
              Berswara memiliki beberapa fitur untuk membantu kamu menentukan
              suaramu.
            </p>
          </div>
          <div className="flex flex-col ml-[200px]">
            <div className="flex flex-row mb-[50px]">
              <div className="mr-[29px]">
                <Image
                  className="object-cover w-[72px] h-[72px]"
                  src="/images/icon-modul.svg"
                  alt="icon modul"
                  width={0}
                  height={0}
                />
              </div>
              <div className="w-[389px]">
                <h1 className="text-[24px] font-bold text-left">
                  Modul Belajar Pemilu
                </h1>
                <p className="text-[18px] text-[#5F5F75] text-left">
                  Belajar langkah-langkah dan prosedur pemilihan umum.
                </p>
              </div>
            </div>
            <div className="flex flex-row mb-[50px]">
              <div className="mr-[29px]">
                <Image
                  className="object-cover w-[72px] h-[72px]"
                  src="/images/icon-quiz.svg"
                  alt="icon quiz"
                  width={0}
                  height={0}
                />
              </div>
              <div className="w-[389px]">
                <h1 className="text-[24px] font-bold text-left">
                  Quiz Interaktif
                </h1>
                <p className="text-[18px] text-[#5F5F75] text-left">
                  Uji pengetahuan kebangsaan dan pengetahuan politikmu!
                </p>
              </div>
            </div>
            <div className="flex flex-row mb-[50px]">
              <div className="mr-[29px]">
                <Image
                  className="object-cover w-[72px] h-[72px]"
                  src="/images/icon-kandidat.svg"
                  alt="icon kandidat"
                  width={0}
                  height={0}
                />
              </div>
              <div className="w-[389px]">
                <h1 className="text-[24px] font-bold text-left">
                  Kenali Calon Kandidatmu!
                </h1>
                <p className="text-[18px] text-[#5F5F75] text-left">
                  Kenali calon kandidat yang mewakili suaramu!
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/images/hero-2.svg"
              alt="hero-2"
              width={0}
              height={0}
              className="object-scale-down w-[637px]"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#FFFCF7] pt-[150px]">
        <div className="flex flex-col justify-center">
          <h1 className="text-[48px] text-center font-bold">
            Modul Prosedur Proses Pemilihan
          </h1>
          <div className="flex justify-center pb-[53px]">
            <p className="text-[18px] text-[#5F5F75] w-[577px] text-center">
              Berikut adalah langkah-langkah yang harus anda lakukan agar dapat
              mengikuti pemilihan dan menggunakan hak suara anda.
            </p>
          </div>
        </div>
        <div className="flex flex-auto justify-center">
          <div className="flex flex-row gap-6">
            <div className="group bg-[#F5EFE0] w-[359px] h-[448px] rounded-[16px] hover:bg-[#B30D19]">
              <div className="flex flex-col items-center mt-[37px] ">
                <Image
                  className="object-cover w-[96px] h-[96px]"
                  src="/images/card-logo-1.svg"
                  alt="card-logo-1"
                  width={0}
                  height={0}
                />
                <h1 className="text-[36px] text-[2B2B39] text-center font-bold group-hover:text-[#FFFCF7]">
                  Sejarah & Dasar Hukum Pemilu
                </h1>
                <p className="text-[18px] text-[#5F5F75] text-center m-[32px] font-normal group-hover:text-[#FFFCF7]">
                  Modul ini memberikan gambaran lengkap mengenai sejarah dan
                  evolusi pemilihan umum di Indonesia, serta dasar-dasar hukum
                  yang mengatur proses pemilu.
                </p>
              </div>
            </div>
            <div className="group bg-[#F5EFE0] w-[359px] h-[448px] rounded-[16px] hover:bg-[#B30D19]">
              <div className="flex flex-col items-center mt-[37px]">
                <Image
                  className="object-cover w-[96px] h-[96px]"
                  src="/images/card-logo-2.svg"
                  alt="card-logo-2"
                  width={0}
                  height={0}
                />
                <h1 className="text-[36px] text-[2B2B39] text-center font-bold group-hover:text-[#F5EFE0]">
                  Syarat & Prosedur Bagi Calon
                </h1>
                <p className="text-[18px] text-[#5F5F75] text-center m-[32px] font-normal group-hover:text-[#F5EFE0]">
                  Modul ini menguraikan prosedur dan persyaratan bagi individu
                  yang ingin mencalonkan diri dalam pemilu.
                </p>
              </div>
            </div>
            <div className="group bg-[#F5EFE0] w-[359px] h-[448px] rounded-[16px] hover:bg-[#B30D19]">
              <div className="flex flex-col items-center mt-[37px]">
                <Image
                  className="object-cover w-[96px] h-[96px]"
                  src="/images/card-logo-3.svg"
                  alt="card-logo-3"
                  width={0}
                  height={0}
                />
                <h1 className="text-[36px] text-[2B2B39] text-center font-bold group-hover:text-[#F5EFE0]">
                  Verifikasi & Validasi Data Pemilih
                </h1>
                <p className="text-[18px] text-[#5F5F75] text-center m-[32px] font-normal group-hover:text-[#F5EFE0]">
                  Modul ini fokus pada pentingnya verifikasi dan validasi data
                  pemilih untuk memastikan integritas pemilu.
                </p>
              </div>
            </div>
          </div>

          {/* <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>Slide 1</SwiperSlide>
                  <SwiperSlide>Slide 2</SwiperSlide>
                  <SwiperSlide>Slide 3</SwiperSlide>
                  <SwiperSlide>Slide 4</SwiperSlide>
                  <SwiperSlide>Slide 5</SwiperSlide>
                  <SwiperSlide>Slide 6</SwiperSlide>
                  <SwiperSlide>Slide 7</SwiperSlide>
                  <SwiperSlide>Slide 8</SwiperSlide>
                  <SwiperSlide>Slide 9</SwiperSlide>
              </Swiper> */}
        </div>
        <div className="flex flex-row justify-center mt-[53px]">
          <Link className="bg-[#F5EFE0] w-[195px] h-[48px] rounded-[10px] pt-[11px]" href="/howtovote">
            <div className="flex flex-row justify-center items-center">
              <p className="text-[18px] text-[#B30D19] mr-[13px]">
                Modul Lengkap
              </p>
              <Image
                className="object-cover w-[12px] h-[24px] "
                src="/images/angle-right-red.svg"
                alt="angle-right-red"
                width={0}
                height={0}
              />
            </div>
          </Link>
        </div>
      </div>
      <div className="bg-[#FFFCF7] p-[148px]">
        <h1 className="text-[48px] text-center font-bold">
          Quiz Kebangsaan Interaktif
        </h1>
        <div className="flex flex-row justify-center mt-[79px]">
          <div>
            <h2 className="text-[30px] text-wrap w-[439px] mb-[15px]">
              Uji Pengetahuan mu dengan Quiz kami!
            </h2>
            <p className="text-wrap w-[409px]">
              Millions of people come to Campoal to start and sign petitions
              that boldly call for social change. Become a member today and fuel
              our mission to empower everyone to create the kind of change they
              want to see.
            </p>
            <br></br>
            <div className="bg-[#F5EFE0] w-[195px] h-[48px] rounded-[10px] pt-[11px]">
              <Link className="flex flex-row justify-center items-center" href="/quiz">
                <p className="text-[18px] text-[#B30D19] mr-[13px]">
                  Mulai Quiz
                </p>
                <Image
                  className="object-cover w-[12px] h-[24px] "
                  src="/images/angle-right-red.svg"
                  alt="angle-right-red"
                  width={0}
                  height={0}
                />
              </Link>
            </div>
          </div>
          <div>
            <Image
              src="/images/hero-quiz.svg"
              alt="hero-quiz"
              width={0}
              height={0}
              className="object-scale-down w-[637px]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-[48px] text-center pt-[75px]">
          Kenali Kandidatmu!
        </h1>
        <div className="">
          <CandidateCards candidates={candidates} />
        </div>
        <Link className="bg-[#FFFCF7] w-[195px] h-[48px] rounded-[10px] pt-[11px] mb-[64px]" href="/candidates">
          <div className="flex flex-row justify-center items-center">
            <p className="text-[18px] text-[#B30D19] mr-[13px]">
              Cari Kandidat
            </p>
            <Image
              className="object-cover w-[12px] h-[24px] "
              src="/images/angle-right-red.svg"
              alt="angle-right-red"
              width={0}
              height={0}
            />
          </div>
        </Link>
      </div>
      <div className="bg-[#FFFCF7] pb-[146px]">
        <div className="flex flex-col justify-center">
          <h1 className="text-[48px] text-center font-extrabold mt-[100px]">
            Mulai berdiskusi dalam forum!
          </h1>
          <p className="text-[18px] text-[#5F5F75] text-center font-normal">
            {" "}
            Campoal supports a variety of the most popular category.
          </p>
        </div>

        <div className="flex justify-center mt-[200px]">
          <div className="bg-[#F5EFE0] w-[1127px] h-[336px] rounded-[16px] flex relative">
            <div className="pt-[48px] pl-[48px]">
              <h1 className="text-[36px] font-extrabold">
                Mulai berdiskusi dalam forum!
              </h1>
              <p className="text-[18px] font-normal w-[470px]">
                People everywhere are empowered to start campaigns, mobilize
                supporters, and work with Decision Makers to drive solutions.
              </p>
              <Link className="bg-[#B30D19] w-[219px] h-[48px] rounded-[10px] pt-[11px] absolute bottom-10" href="/forum">
                <div className="flex flex-row justify-center items-center">
                  <Image
                    className="object-cover w-[24px] h-[24px] mr-[19px]"
                    src="/images/feather.svg"
                    alt="feather"
                    width={0}
                    height={0}
                  />
                  <p className="text-[18px] text-[#F5EFE0] mr-[13px]">
                    Start a petition
                  </p>
                </div>
              </Link>
            </div>
            <div className="absolute bottom-0 right-8">
              <Image
                src="/images/hero-discuss.svg"
                alt="hero-discuss"
                width={0}
                height={0}
                className="object-scale-down w-[451px]"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
