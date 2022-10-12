import React from 'react';
import { Link } from 'react-router-dom'


const Topics = ({ topic }) => {
    return (
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
                src={topic.logo}
                className="w-full h-64"
                alt=""
            />
            <div className="p-5 border border-t-0">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <a
                        href="/"
                        className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                        aria-label="Category"
                        title="Quiz"
                    >
                        Total Quiz {topic.total}
                    </a>
                </p>
                <a
                    href="/"
                    aria-label="Category"
                    title="Visit the East"
                    className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                    {topic.name}
                </a>
                <p className="mb-2 text-gray-700">
                    The test is not official, it's just a nice way to see how much you know, or don't know, about CSS.
                </p>
                <Link to={`/topic/${topic.id}`}>
                    <button type="button" className="px-8 py-3 bg-sky-600 text-white font-semibold border rounded">Start Practice</button>
                </Link>
            </div>
        </div>
    );
};

export default Topics;