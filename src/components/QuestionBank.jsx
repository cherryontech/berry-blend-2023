import { useState } from 'react';

const QuestionBank = ({ index, question, onAnswer }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleButtonClick = (value) => {
    setSelectedValue(value);
    onAnswer(index, value);
  };

  return (
    <div className="questions--container">
      <div className="sub--text">
        <p>{question}</p>
        <div className="radio--button">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              onClick={() => handleButtonClick(value)}
              className={selectedValue === value ? 'selected' : ''}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionBank;
