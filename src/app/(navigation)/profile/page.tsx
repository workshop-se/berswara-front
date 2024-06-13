'use client'

import FormCard from "@/ui/FormCard";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import { getProfile, updateProfile } from "@/lib/auth";
import { faker } from "@faker-js/faker";

const poppinsMed = Poppins({ weight: "500", subsets: ["latin"] });
const poppinsReg = Poppins({ weight: "300", subsets: ["latin"] });

export default function Page() {
  const [profile, setProfile] = useState({
    fullname: "",
    avatar: faker.image.avatar(),
    email: "",
    username: "",
    password: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await getProfile();
      if (!data.error) {
        data.avatar = faker.image.avatar();
        setProfile(data);
      } else {
        console.error(data.message);
      }
    };
    fetchProfile();
  }, []);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const { fullname, email, username, password } = profile;
    const updatedProfile = { fullname, email, username, password };
    // if (!updatedProfile.password) {
    //   updatedProfile.password = ""
    // }

    try {
      console.log("Updating profile:", updatedProfile)
      const response = await updateProfile(updatedProfile);
      console.log("Profile updated:", response);
    } catch (error) {
      console.error("Failed to update profile", error);
      alert("Failed to update profile");
    }
  };

  return (
    <main className="flex justify-center p-[40px]">
      <FormCard>
        <div className="flex w-[857px]">
          <div className="self-start rounded-full overflow-hidden">
            <Image src={profile.avatar || "/default-avatar.png"} alt="avatar" width={110} height={110} objectFit="cover" />
          </div>
          <form className="pl-[40px] grow" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-[15px]">
              <div className="flex flex-col">
                <label htmlFor="fullname" className={`text-gray ${poppinsReg.className} text-[12px]`}>Nama Lengkap</label>
                <input
                  type="text"
                  id="fullname"
                  value={profile.fullname}
                  onChange={(e) => setProfile({ ...profile, fullname: e.target.value })}
                  className="h-[41px] px-[10px] ring-1 ring-silver rounded-[3.23px]"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="username" className={`text-gray ${poppinsReg.className} text-[12px]`}>Username</label>
                <input
                  type="text"
                  id="username"
                  value={profile.username}
                  onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                  className="h-[41px] px-[10px] ring-1 ring-silver rounded-[3.23px]"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className={`text-gray ${poppinsReg.className} text-[12px]`}>Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  className="h-[41px] ring-1 ring-silver px-[10px] rounded-[3.23px]"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="password" className={`text-gray ${poppinsReg.className} text-[12px]`}>Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="type to change password"
                  value={profile.password}
                  onChange={(e) => setProfile({ ...profile, password: e.target.value })}
                  className="h-[41px] ring-1 ring-silver px-[10px] rounded-[3.23px]"
                />
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

