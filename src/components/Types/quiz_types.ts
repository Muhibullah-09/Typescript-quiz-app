import React from 'react'
export type Quiz = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}

export type QuestionType = {
    question: string
    answer: string
    option: string[]
}

export type questionPropType = {
    question: string
    options: string[]
    callback: (e: React.FormEvent<EventTarget>) => void
    //eventarget for take the event value from form
}