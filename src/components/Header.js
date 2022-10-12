import React from 'react';

const Header = () => {
    return (
        <div className="dark:bg-gray-800 dark:text-gray-500">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-8 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">Quiz yourself on Coding!
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-8">Are you a budding computer programmer? Take our 10-question quiz to see how much you know about the world of coding! 
                        <br className="hidden md:inline lg:hidden" />All the answers can be found on DKfindout! 
                    </p>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src="https://img.quizlet.com/4yqRk-o.jpg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
        </div>
    );
};

export default Header;