import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeSlashIcon } from '@heroicons/react/24/solid'


const ExamBoard = ({ questions }) => {
    const { question, options } = questions;
    // console.log(questions.correctAnswer)
    const findRightAns = (option) => {
        if (option === questions.correctAnswer) {
            toast.success('Congratulations! Right Answer', { autoClose: 500 })
        }
        else (
            toast.warning('Wrong Answer!Please Try Again', { autoClose: 500 })
        )
    }
    const showAns = () => {
        toast(`${questions.correctAnswer}`, { autoClose: 500 })
    }

    return (
        <div className='flex'>
            <div className='w-1/4'></div>
            <div className=' w-3/4 p-5 relative'>
                <div className='absolute top-12 right-0'><EyeSlashIcon onClick={showAns} title='show answer' className='h-4 w-4'></EyeSlashIcon> </div>
                <h1 className='font-bold text-2xl'>{question}</h1>
                <div className=''>
                    <div className=''>
                        {
                            options.map((option, idx) => <div
                                key={idx}
                                className='m-5'

                            >
                                <div onClick={() => findRightAns(option)} >
                                    <ToastContainer position='top-center' />
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