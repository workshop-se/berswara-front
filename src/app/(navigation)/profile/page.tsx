'use client'

import FormCard from "@/ui/FormCard";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { faker } from "@faker-js/faker";

const poppinsMed = Poppins({ weight: "500", subsets: ["latin"] });
const poppinsReg = Poppins({ weight: "300", subsets: ["latin"] });

const cities = [
  "Jakarta",
  "Bandung",
  "Surabaya",
  "Semarang",
  "Yogyakarta",
]

const provinces = [
  "Riau",
  "Jawa Barat",
  "Jawa Timur",
  "Jawa Tengah",
]

const placeHolders = {
  fullname: faker.person.fullName(),  
  avatar: faker.image.avatar(),
  email: faker.internet.email(),
  nik: faker.number.bigInt({ min: BigInt(1000000000000000), max: BigInt(9999999999999999) }),
  address: faker.address.streetAddress(),
  telephone: faker.phone.number(),
}

export default function Page() {
  return (
    <main className="flex justify-center p-[40px]">
      <FormCard>
        <div className="flex w-[857px]">
          <div className="self-start rounded-full overflow-hidden">
            <Image src={placeHolders.avatar} alt="hero" width={110} height={110} objectFit="cover" />
          </div>
          <form className="pl-[40px] grow">
            <div className="flex flex-col gap-[15px]">
              <div className="flex flex-col">
                <label htmlFor="firstName" className={`text-gray ${poppinsReg.className} text-[12px]`}>Nama Lengkap</label>
                <input type="text" id="firstName" placeholder={placeHolders.fullname} className="h-[41px] ring-1 ring-silver rounded-[3.23px]" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className={`text-gray ${poppinsReg.className} text-[12px]`}>Email Address</label>
                <input type="email" id="email" placeholder={placeHolders.email} className="h-[41px] ring-1 ring-silver rounded-[3.23px]" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="nik" className={`text-gray ${poppinsReg.className} text-[12px]`}>NIK</label>
                <input type="number" id="nik" placeholder={`${placeHolders.nik}`} className="h-[41px] ring-1 ring-silver rounded-[3.23px]" />
              </div>


              <div className="flex flex-col">
                <label htmlFor="address" className={`text-gray ${poppinsReg.className} text-[12px]`}>Alamat KTP</label>
                <input type="text" id="address" placeholder={placeHolders.address} className="h-[41px] ring-1 ring-silver rounded-[3.23px]" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="telephone" className={`text-gray ${poppinsReg.className} text-[12px]`}>No. Telepon</label>
                <input type="text" id="telephone" placeholder={placeHolders.telephone} className="h-[41px] ring-1 ring-silver rounded-[3.23px]" />
              </div>

              <div className="flex gap-x-[38px]">
                <div className="grow flex flex-col">
                  <label htmlFor="city" className={`text-gray ${poppinsReg.className} text-[12px]`}>Kota/Kabupaten</label>
                  <select id="city" className="h-[41px] ring-1 ring-silver rounded-[3.23px]">
                    {cities.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>

                <div className="grow flex flex-col">
                  <label htmlFor="province" className={`text-gray ${poppinsReg.className} text-[12px]`}>Provinsi</label>
                  <select id="province" className="h-[41px] ring-1 ring-silver rounded-[3.23px]">
                    {provinces.map((province) => (
                      <option key={province} value={province}>{province}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-x-[16px]">
                <button type="submit" className={`w-[116.11px] text-white items-center justify-center h-[41px] bg-crimson ${poppinsMed.className}`}>Save</button>
                <button type="reset" className={`w-[116.11px] text-crimson items-center justify-center h-[41px] ring-1 ring-crimson ${poppinsMed.className}`}>Cancel</button>
              </div>

            </div>
          </form>
        </div>
      </FormCard>
    </main>
  );
}

