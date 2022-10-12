import React from 'react';
import { useLoaderData } from 'react-router-dom'
import ExamBoard from './ExamBoard';

const Quizes = () => {
    const quizes = useLoaderData().data.questions;
    const quize = useLoaderData().data;

    return (
        <div>
            <h1 className=' m-5 text-cyan-600 font-bold text-4xl text-center'> Quize of {quize.name}</h1>
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