import React, { useState } from 'react';
import '../Questions.css';
import QuestionBank from '../components/QuestionBank.jsx';
import GetRecsButton from '../components/buttons/GetRecsButton.jsx';

const Questions = () => {
  const [points, setPoints] = useState(Array(5).fill(0));

  const handleAnswer = (questionIndex, pointsValue) => {
    const newPoints = [...points];
    newPoints[questionIndex] = pointsValue;
    setPoints(newPoints);
  };

  const totalPoints = points.reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="questions--container">
      <div className="main--text">
        <h1>Burnout Questions</h1>
        <QuestionBank
          index={0}
          question="I often feel exhausted and drained from work or daily responsibilities."
          onAnswer={handleAnswer}
        />
        <QuestionBank
          index={1}
          question="I have trouble relaxing and disconnecting from work or other stressors."
          onAnswer={handleAnswer}
        />
        <QuestionBank
          index={2}
          question="I frequently experience feelings of irritability, frustration, or even anger."
          onAnswer={handleAnswer}
        />
        <QuestionBank
          index={3}
          question="I find it challenging to maintain focus and productivity."
          onAnswer={handleAnswer}
        />
        <QuestionBank index={4} question="I often neglect self-care and leisure activities." onAnswer={handleAnswer} />
        <p>Total Score: {totalPoints}</p>

        <GetRecsButton />
      </div>
    </div>
  );
};

export default Questions;
