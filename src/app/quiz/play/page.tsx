'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getQuizzes, Question } from "@/lib/quiz";

interface UserAnswer {
  answer: number;
  correct: boolean;
}

export default function Page() {

  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [quizFinished, setQuizFinished] = useState(false);
  const currentQuestion = questions[currentQuestionIndex];
  const length = 5;

  useEffect(() => {
    const fetchQuestions = async () => {
      const formattedQuestions = await getQuizzes(length);
      setQuestions(formattedQuestions);
      if (formattedQuestions.error) {
        console.error('Failed to fetch questions:', formattedQuestions.error);
      }
      setLoading(false);
    };
    fetchQuestions();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleAnswerClick = (index: number) => {
    const isCorrect = index === currentQuestion.answer;
    const newUserAnswers = [
      ...userAnswers.slice(0, currentQuestionIndex),
      { answer: index, correct: isCorrect },
      ...userAnswers.slice(currentQuestionIndex + 1),
    ];

    setUserAnswers(newUserAnswers);

    if (isCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setQuizFinished(true);
      }
    }, 1000);
  };

  const handleBackClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <>
      {
        quizFinished ? (
          <div className='my-[111px]'>
            <h1 className='text-[48px] text-center mb-[55px]'>Quiz Kebangsaan Interaktif</h1>
            <div className='flex justify-center align-middle gap-x-[81px]'>
              <div className="w-[421px] h-[292px] bg-white rounded-[10px] overflow-hidden flex flex-col text-center self-center">
                <div className="bg-[#B30D19] h-[28px] mb-[30px]"></div>
                <div className="text-[41.92px]">Skor</div>
                <div className="text-[100px] font-normal">{Math.round((score * 100) / length)}</div>
              </div>
              <Image src='/images/quiz.svg' width={622} height={379} alt='award image'></Image>
            </div>
          </div>
        ) : (
          <div className="mt-[125px] m-auto pb-[56px] bg-white max-w-[1166px] flex flex-col rounded-[16px] shadow-md" >
            <div className="flex flex-row-reverse p-[16px]">
              <Image src="/icons/x.svg" alt="exit" width={32} height={32}></Image>
            </div >
            <div className="px-[80px] flex flex-col gap-y-[32px]">
              <div className="cursor-pointer" onClick={handleBackClick}>&larr; Back</div>
              <div className="flex gap-x-[34.73px]">
                <div className="text-[23.16px] text-[#99A9A9]">Pertanyaan {currentQuestionIndex + 1}/{length}</div>
                <div className="text-[23.16px] text-[#99A9A9] font-normal">Skor: {score}</div>
              </div>
              <div className="text-[46.31px] font-normal text-[#404040]">{currentQuestion.question}</div>
              <div className="flex flex-col gap-y-[11.58px]">
                {currentQuestion.answers.map((answer, index) => {
                  let bgColor = 'bg-[#F2F4F7]';
                  if (userAnswers[currentQuestionIndex]) {
                    if (userAnswers[currentQuestionIndex].answer === index) {
                      bgColor = userAnswers[currentQuestionIndex].correct ? 'bg-green-500' : 'bg-red-500';
                    } else if (index === currentQuestion.answer) {
                      bgColor = 'bg-green-500';
                    }
                  }

                  return (
                    <div
                      key={index}
                      className={`text-[23.16px] text-[#404040] p-[23px] ${bgColor} rounded-full text-center cursor-pointer`}
                      onClick={() => handleAnswerClick(index)}
                    >
                      {answer}
                    </div>
                  );
                })}
              </div>
            </div>
          </div >
        )
      }
    </>
  );
}

