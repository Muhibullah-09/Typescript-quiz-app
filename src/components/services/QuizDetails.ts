//we import types here
import { QuizType, QuestionType } from "../Types/quiz_types";


//here we need to shuffle the options
const shuffleArray = (array: any[]) => [...array].sort(() => Math.random() - 0.5)

//Here we fetch data from server
export async function QuizDetails(totalQuestions: number, level: string): Promise<QuizType[]> {
    const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`)
    let { results } = await res.json();//its some work in pending

    const quiz: QuizType[] = results.map((questionObj: QuestionType) => {
        return {
            question: questionObj.question,
            answer: questionObj.correct_answer,
            correct_answer: questionObj.correct_answer,
            option: shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer))
        }
    })
    return quiz;
}