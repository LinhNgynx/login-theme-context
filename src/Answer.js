
const Answer = ({value, handleClick, className}) => {
    return <button onClick={handleClick} className={className}>{value}</button>
};

export default Answer;
