import { useState } from 'react';

const QuestionBank = ({ index, question, onAnswer }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleButtonClick = (value) => {
    const pointsValue = value;
    setSelectedValue(value);
    onAnswer(index, pointsValue);
  };

  return (
    <div className="question--container">
      <div className="sub--text">
        <p>{question}</p>
        <div className="answer--buttons">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              onClick={() => handleButtonClick(value)}
              className={`answer-button ${selectedValue === value ? 'selected' : ''}`}
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