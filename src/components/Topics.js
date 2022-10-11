import React from 'react';
import { useLoaderData } from 'react-router-dom'

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
                    Sed ut perspiciatis unde omnis iste natus error sit sed quia
                    consequuntur magni voluptatem doloremque.
                </p>
                <button type="button" className="px-8 py-3 bg-sky-600 text-white font-semibold border rounded">Start Practice</button>
            </div>
        </div>
    );
};

export default Topics;