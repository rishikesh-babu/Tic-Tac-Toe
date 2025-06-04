import { useState } from "react";
import { Board } from "../Board/Board";

export function Game() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    function checkWinner() {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let [a, b, c] of lines) {
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    function handleReset() {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
    }

    function handleClick(i) {
        if (squares[i] || checkWinner()) return;

        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? 'X' : 'O';
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }

    return (
        <div className="min-h-[100dvh] bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center px-4 py-8">
            <h1 className="text-5xl font-bold text-blue-700 mb-6 drop-shadow-lg text-center">
                Tic Tac Toe
            </h1>

            <div
                className="text-2xl font-medium mb-5 text-center">
                {
                    checkWinner() ? (
                        <div className="text-green-400">
                            🎉 Player {checkWinner()} wins!
                        </div>
                    ) : (
                        <div className=" text-gray-700">
                            🔁 Player {xIsNext ? 'X' : 'O'}'s turn
                        </div>
                    )
                }
            </div>

            <div className="mb-6">
                <Board squares={squares} handleClick={handleClick} />
            </div>

            <button
                onClick={handleReset}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg font-semibold shadow-lg transition-all duration-300 focus:outline-none ring-4 sm:ring-0 sm:hover:ring-4 ring-blue-300 ring-offset-2 sm:ring-offset-2 sm:hover:ring-offset-3"
                aria-label="Reset the game"
            >
                🔄 Reset Game
            </button>
        </div>
    );
}
