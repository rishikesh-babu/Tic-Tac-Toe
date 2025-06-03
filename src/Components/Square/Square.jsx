export function Square({ value, handleClick }) {
    return (
        <button onClick={handleClick} className={`border size-30 text-3xl ${!value ? ' hover:cursor-pointer' : 'hover:cursor-not-allowed'}`}>
            {value}
        </button>
    );
}