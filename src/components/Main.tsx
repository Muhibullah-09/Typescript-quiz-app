import React, { useEffect, useState } from 'react';
import { QuizType } from './Types/quiz_types';
import { QuizDetails } from './services/QuizDetails';
import QuestionRender from './QuestionRender';
import './css/QuestionRender.css';
function Main() {
    let [quiz, setQuiz] = useState<QuizType[]>([])
    let [currentStep, setCurrentStep] = useState(0);
    let [currentScore, setCurrentScore] = useState(0);
    let [showResult, setShowResult] = useState(false);
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
            setShowResult(true)
        }
    };

    if (!quiz.length) {
        return <h3 style={{ textAlign: "center" }}>Loading...</h3>
    }
    if (showResult) {
        return (
            <div className='container' style={{ textAlign: "center" }}>
                <h1>Result</h1><br />
                <h3>Your Final Score is {currentScore} out of {quiz.length}</h3>
            </div>
        )
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
