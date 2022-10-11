import React from 'react';
import { useLoaderData } from 'react-router-dom'

const Quizes = () => {
    const quizes = useLoaderData();
    // console.log(quizes.data.questions);
    return (
        <div>
            <h1>this is quiestions </h1>
        </div>
    );
};

export default Quizes;