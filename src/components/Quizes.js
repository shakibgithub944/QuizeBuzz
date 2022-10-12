import React from 'react';
import { useLoaderData } from 'react-router-dom'
import ExamBoard from './ExamBoard';

const Quizes = () => {
    const quizes = useLoaderData().data.questions;
    console.log(quizes);
    return (
        <div>
            {
                quizes.map(question => <ExamBoard
                key={question.id}
                questions={question}
                ></ExamBoard>)
            }
            
        </div>
    );
};

export default Quizes;