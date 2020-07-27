import React, { useEffect, useState } from 'react';
import { QuizType } from './Types/quiz_types';
import { QuizDetails } from './services/QuizDetails';
import QuestionRender from './QuestionRender';
import './css/QuestionRender.css';
function Main() {
    const [quiz, setQuiz] = useState<QuizType[]>([])
    const [currentStep, setCurrentStep] = useState(0);
    const [currentScore, setCurrentScore] = useState(0);
    useEffect(() => {
        async function fetchData() {
            const questions: QuizType[] = await QuizDetails(5, 'easy');
            // console.log(questions);
            setQuiz(questions)
        }
        fetchData();
    }, []);
    const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
        e.preventDefault();  //if we want to use page without refreshing we use this
        // console.log(userAns);
        const currentQuestion: QuizType = quiz[currentStep];

        // console.log(`Correct Answer is ${currentQuestion.correct_answer} & User Selected Answers ${userAns}`);
        if (userAns === currentQuestion.correct_answer) {
            setCurrentScore(currentScore + 1);
        }

        if (currentStep !== quiz.length - 1) {
            setCurrentStep(currentStep + 1);
        }
        else {
            alert(`Your Final Score is ${currentScore} out of ${quiz.length}`)
            setCurrentStep(0);
            setCurrentScore(0);
        }
    };

    if (!quiz.length) {
        return <h3>Loading...</h3>
    }
    return (
        <div>
            <QuestionRender
                options={quiz[currentStep].option}
                question={quiz[currentStep].question}
                callback={handleSubmit}
            />
        </div>
    )
}

export default Main
