import { Square } from "../Square/Square";

export function Board({squares, handleClick}) {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex">
                <Square value={squares[0]} handleClick={() => handleClick(0)} />
                <Square value={squares[1]} handleClick={() => handleClick(1)} />
                <Square value={squares[2]} handleClick={() => handleClick(2)} />
            </div>
            <div className="flex">
                <Square value={squares[3]} handleClick={() => handleClick(3)} />
                <Square value={squares[4]} handleClick={() => handleClick(4)} />
                <Square value={squares[5]} handleClick={() => handleClick(5)} />
            </div>
            <div className="flex">
                <Square value={squares[6]} handleClick={() => handleClick(6)} />
                <Square value={squares[7]} handleClick={() => handleClick(7)} />
                <Square value={squares[8]} handleClick={() => handleClick(8)} />
            </div>
        </div>
    );
}