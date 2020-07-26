import React, { useEffect, useState } from 'react';
import './App.css';
import { QuizDetails } from './components/services/QuizDetails';
import { QuestionType } from './components/Types/quiz_types';
import QuestionRender from './components/QuestionRender';

function App() {
  const [quiz, setQuiz] = useState<QuestionType[]>([])
  const [currentStep, setCurrentStep] = useState(0);

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();  //if we want to use page without refreshing we use this
    if (currentStep !== quiz.length - 1) {
      setCurrentStep(currentStep + 1);
    }
    else {
      alert("Quiz Compleleted")
      setCurrentStep(0);
    }
  }

  useEffect(() => {
    async function fetchData() {
      const questions: QuestionType[] = await QuizDetails(5, 'easy');
      // console.log(questions);
      setQuiz(questions)
    }
    fetchData();
  }, []);
  if (!quiz.length) {
    return <h3>Loading...</h3>
  }
  return (
    <>
      <QuestionRender
        options={quiz[currentStep].option}
        question={quiz[currentStep].question}
        callback={handleSubmit}
      />
    </>
  );
}

export default App;
