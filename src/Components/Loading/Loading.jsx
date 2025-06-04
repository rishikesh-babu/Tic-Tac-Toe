import React from 'react';

export default function Loading({ onEnter }) {
    return (
        <div className="bg-violet-400 flex items-center justify-center h-screen flex-col gap-6">
            <h1 className="text-3xl font-bold">Welcome to the Game</h1>
            <p className="">Click the button below to start</p>
            <button
                onClick={onEnter}
                className="px-6 py-3 bg-white font-semibold rounded-lg hover:bg-gray-200 transition duration-200"
            >
                Enter Game
            </button>
        </div>
    );
}
