export function Square({ value, handleClick }) {
    return (
        <button onClick={handleClick} className={`border size-[115px] sm:size-[150px] text-4xl ${!value ? ' hover:cursor-pointer' : 'hover:cursor-not-allowed'}`}>
            {value}
        </button>
    );
}