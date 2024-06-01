'use client'

import FormCard from "@/ui/FormCard";
import Image from "next/image";
import { Poppins } from "next/font/google";

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

export default function Page() {
  return (
    <main className="flex justify-center p-[40px]">
      <FormCard>
        <div className="flex w-[857px]">
          <div>
            <Image src="/photos/avatar-example.png" alt="hero" width={110} height={110} />
          </div>
          <form className="pl-[40px] grow">
            <div className="flex flex-col gap-[15px]">
              <div className="flex flex-col">
                <label htmlFor="firstName" className={`text-[#858585] ${poppinsReg.className} text-[12px]`}>Nama Depan</label>
                <input type="text" id="firstName" className="h-[41px] ring-1 ring-[#C9C9C9] rounded-[3.23px]" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className={`text-[#858585] ${poppinsReg.className} text-[12px]`}>Email Address</label>
                <input type="email" id="email" className="h-[41px] ring-1 ring-[#C9C9C9] rounded-[3.23px]" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="nik" className={`text-[#858585] ${poppinsReg.className} text-[12px]`}>NIK</label>
                <input type="number" id="nik" className="h-[41px] ring-1 ring-[#C9C9C9] rounded-[3.23px]" />
              </div>


              <div className="flex flex-col">
                <label htmlFor="address" className={`text-[#858585] ${poppinsReg.className} text-[12px]`}>Alamat KTP</label>
                <input type="text" id="address" className="h-[41px] ring-1 ring-[#C9C9C9] rounded-[3.23px]" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="telephone" className={`text-[#858585] ${poppinsReg.className} text-[12px]`}>No. Telepon</label>
                <input type="text" id="telephone" className="h-[41px] ring-1 ring-[#C9C9C9] rounded-[3.23px]" />
              </div>

              <div className="flex gap-x-[38px]">
                <div className="grow flex flex-col">
                  <label htmlFor="city" className={`text-[#858585] ${poppinsReg.className} text-[12px]`}>Kota/Kabupaten</label>
                  <select id="city" className="h-[41px] ring-1 ring-[#C9C9C9] rounded-[3.23px]">
                    {cities.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>

                <div className="grow flex flex-col">
                  <label htmlFor="province" className={`text-[#858585] ${poppinsReg.className} text-[12px]`}>Provinsi</label>
                  <select id="province" className="h-[41px] ring-1 ring-[#C9C9C9] rounded-[3.23px]">
                    {provinces.map((province) => (
                      <option key={province} value={province}>{province}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-x-[16px]">
                <button type="submit" className={`w-[116.11px] text-white items-center justify-center h-[41px] bg-[#D30D19] ${poppinsMed.className}`}>Save</button>
                <button type="reset" className={`w-[116.11px] text-[#D30D19] items-center justify-center h-[41px] ring-1 ring-[#D30d19] ${poppinsMed.className}`}>Cancel</button>
              </div>

            </div>
          </form>
        </div>
      </FormCard>
    </main>
  );
}

