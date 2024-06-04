const HOST = process.env.HOST_QUIZ || 'https://wrpl.yazidrizkik.dev/api/content';

const shuffle = (array: string[] | any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

interface Question {
  question: string;
  id: string;
  answers: string[];
  answer: number;
}

const getQuizzes = async (length: number) => {
  try {
    const response = await fetch(`${HOST}/quiz?limit=${length}`);
    if (response.status !== 200) {
      throw new Error("Error fetching questions");
    }
    const data = await response.json();

    const formattedQuestions = data.data.questions.map((question: { options: any[]; id: { toString: () => any; }; question: any; }) => {
      const shuffledOptions = shuffle(question.options.map(option => ({
        text: option.text,
        isCorrect: option.isCorrect
      })));

      return {
        id: question.id.toString(),
        question: question.question,
        answers: shuffledOptions.map(option => option.text),
        answer: shuffledOptions.findIndex(option => option.isCorrect),
      };
    });

    return formattedQuestions;
  } catch (error) {
    return { 
      error: true, 
      message: error,
      questions: [],
    };
  }
}

export { getQuizzes };
export type { Question };
