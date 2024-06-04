import PersonalWidget from "@/ui/PersonalWidget";
import { faker } from "@faker-js/faker";
import Image from "next/image";

export default function Page() {
  const questions = Array.from({ length: 2 }, () => (
    {
      title: faker.lorem.sentence(),
      id: faker.string.uuid(),
      content: faker.lorem.paragraph(),
      tags: [faker.lorem.word(), faker.lorem.word()],
      username: faker.person.fullName(),
      avatar: faker.image.avatar(),
      time: faker.date.recent(),
    }))

  return (
    <div className="flex gap-x-[45px] px-[45px] py-[40px]">
      <div className="grow">

        <div className="flex flex-col gap-y-[20px]">
          {questions.map((question) => (
            <div key={question.id} className="bg-white shadow rounded-[5px] px-[30px] py-[25px] flex flex-col gap-y-[15px]">
              <div className="flex gap-x-[15px]">
                <Image className="rounded-full" src={question.avatar} alt={question.title} width={40} height={40}></Image>
                <div className="grow">
                  <div className="text-[13px]">{question.username}</div>
                  <div className="text-[10px] text-gray">{`${question.time}`}</div>
                </div>
              </div>
              <div>
                <div className="font-bold text-[14px]">{question.title}</div>
                <div className="font-normal">{question.content}</div>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-x-[10px]">
                  {question.tags.map((tag) => (
                    <div key={tag} className="bg-whitesmoke px-[10px] py-[5px] font-normal rounded-[5px] self-center">{tag}</div>
                  ))}
                </div>
                <div className="bg-firebrick-0 rounded-[5px] text-white px-[20px] py-[12px] flex gap-x-[12px]">
                  <span>&uarr;</span>
                  <span>Vote</span>
                </div>
              </div>
            </div>
          ))}

          <span className="text-center text-gray text-[18px]">Suggestions</span>

          <form className="bg-white shadow rounded-[5px] px-[40px] py-[30px] flex flex-col gap-y-[10px]">

            <textarea placeholder="Type your question" className="pl-[10px] py-[10px] h-[43px] bg-white rounded-[5px] ring ring-whitesmoke text-gray text-[12px] font-light" />
            <div className="flex justify-end gap-[12px]">

              <div className="bg-whitesmoke rounded-[5px] text-gray px-[20px] py-[12px] flex gap-x-[12px]">
                <span>Cancel</span>
              </div>
              <div className="bg-firebrick-0 rounded-[5px] text-white px-[20px] py-[12px] flex gap-x-[12px]">
                <span>&uarr;</span>
                <span>Vote</span>
              </div>
            </div>

          </form>

        </div>
      </div>
      <PersonalWidget />
    </div>
  );
}

