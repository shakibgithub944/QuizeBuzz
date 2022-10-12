import React from 'react';

const ExamBoard = ({ questions }) => {
    const { question, options } = questions;
    // console.log(questions.correctAnswer)
    const findRightAns = (option) => {
        if (option === questions.correctAnswer) {
            alert('congratulations')
        }
        else(
            alert('faild')
        )
    }

    return (
        <div className='flex'>
            <div className='w-1/4'></div>
            <div className=' w-3/4 p-5 relative'>
                <div className='absolute top-12 right-0'>Show ans</div>
                <h1 className='font-bold text-2xl'>{question}</h1>
                <div className=''>
                    <div className=''>
                        {
                            options.map((option, idx) => <div
                                key={idx}
                                className='m-5'

                            >
                                <div onClick={() => findRightAns(option)} >
                                <input className="rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" />
                                <label className="form-check-label inline-block text-gray-800" htmlFor="flexRadioDefault1">
                                    {option}
                                </label>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
            <div className='w-1/4'></div>
        </div>
    );
};

export default ExamBoard;