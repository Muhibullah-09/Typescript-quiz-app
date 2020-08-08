import React, { useState } from 'react'
import { questionPropType } from './Types/quiz_types';
import './css/QuestionRender.css';
const QuestionRender: React.FC<questionPropType> = ({ question, options, callback }) => {
    // console.log(question);
    // console.log(options);
    let [selectedAns, setSelectedAns] = useState("");
    const handleSelection = (event: any) => {
        setSelectedAns(event.target.value);
    }
    return (
        <div className='container'>
            <div className='question-contaiiner'>
                <div className='question'>
                    <h3>Question:  &nbsp;{question}</h3>
                </div>
            </div><br />
            <form onSubmit={(e: React.FormEvent<EventTarget>) => callback(e, selectedAns)}>
                {
                    options.map((opt: string, ind: number) => {
                        return (

                            <div key={ind} className='list'>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item "><br />
                                        <h4>
                                            <input
                                                required
                                                type='radio'
                                                name='opt'
                                                value={opt}
                                                onChange={handleSelection}
                                                checked={selectedAns === opt}
                                            />&nbsp;&nbsp;{opt}
                                        </h4>
                                    </li>
                                </ul>
                            </div>
                        )
                    })
                }<br />
                <button type="submit" className="btn btn-outline-dark">Submit</button>
            </form>
        </div>
    )
}

export default QuestionRender
