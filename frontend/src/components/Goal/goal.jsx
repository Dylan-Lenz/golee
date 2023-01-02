const Goal = ({ text, goal, influence }) => {
    return (
    <div>
        <p>
            {goal}: {text}
        </p>
        <p>
            {influence}: {text}
        </p>
    </div>
    );
  };
  
  export default Goal; 