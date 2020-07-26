import React from 'react'
import { questionPropType } from './Types/quiz_types';

const QuestionRender: React.FC<questionPropType> = ({ question, options, callback }) => {
    // console.log(question);
    // console.log(options);
    return (
        <>
            <div className='question-contaiiner'>
                {question}
            </div>
            <form onSubmit={callback}>
                {
                    options.map((opt: string, ind: number) => {
                        return (
                            <div key={ind}>
                                <label>
                                    <input
                                        type='radio'
                                        name='opt'
                                        value={opt}
                                    />
                                    {opt}
                                </label>
                            </div>
                        )
                    })
                }
                <input type='submit' />
            </form>
        </>
    )
}

export default QuestionRender
