import React, { useState } from 'react'
import { questionPropType } from './Types/quiz_types';

const QuestionRender: React.FC<questionPropType> = ({ question, options, callback }) => {
    // console.log(question);
    // console.log(options);
    let [selectedAns, setSelectedAns] = useState("");
    const handleSelection = (event: any) => {
        setSelectedAns(event.target.value);
    }
    return (
        <>
            <div className='question-contaiiner'>
                <div className='question'>
                    <h4>{question}</h4>
                </div>
            </div>
            <form onSubmit={(e: React.FormEvent<EventTarget>) => callback(e, selectedAns)}>
                {
                    options.map((opt: string, ind: number) => {
                        return (
                            <div key={ind}>
                                <label>
                                    <input
                                        required
                                        type='radio'
                                        name='opt'
                                        value={opt}
                                        onChange={handleSelection}
                                        checked={selectedAns === opt}
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
