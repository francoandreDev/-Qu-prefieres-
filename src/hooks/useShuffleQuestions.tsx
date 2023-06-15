import { useEffect, useState } from 'react';
import { shuffle } from 'lodash';

interface Question {
  id: number;
  text: string;
  options: {
    id: number;
    text: string;
    image: string;
  }[];
}

const useShuffleQuestions = (initialQuestions: Question[]) => {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const shuffledQuestions = shuffle(initialQuestions);
    setQuestions(shuffledQuestions);
  }, [initialQuestions]);

  return questions.length > 0 ? questions : initialQuestions;
};

export default useShuffleQuestions;
