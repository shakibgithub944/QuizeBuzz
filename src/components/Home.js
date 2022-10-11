import React from 'react';
import Header from './Header';
import { useLoaderData } from 'react-router-dom'
import Topics from './Topics';

const Home = () => {
    const topics = useLoaderData();
    console.log(topics.data)
    return (
        <div>
            <Header></Header>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    {
                        topics.data.map(topic => <Topics
                            key={topic.id}
                            topic={topic}
                        ></Topics>)
                    }

                </div>
            </div>



        </div>
    );
};

export default Home;