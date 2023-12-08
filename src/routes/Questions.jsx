import React, { useState } from 'react';
import '../Questions.css';
import QuestionBank from '../components/QuestionBank.jsx';
import GetRecsButton from '../components/buttons/GetRecsButton.jsx';

export const sumOfPoints = (totalPoints) => {
  if (totalPoints >= 5 && totalPoints <= 10) {
    console.log('Low Burnout');
  } else if (totalPoints >= 11 && totalPoints <= 20) {
    console.log('Moderate Burnout');
  } else if (totalPoints >= 21 && totalPoints <= 25) {
    console.log('High Burnout');
  }
};
const Questions = ({ onFinalScore, onFinalSummary }) => {
  const [points, setPoints] = useState(Array(5).fill(0));

  const handleAnswer = (questionIndex, pointsValue) => {
    const currentPointsValue = points[questionIndex];

    // Check if the selected value is different from the current value
    if (currentPointsValue !== pointsValue) {
      const newPoints = [...points];
      newPoints[questionIndex] = pointsValue;
      setPoints(newPoints);
    }
  };

  const totalPoints = points.reduce((acc, curr) => acc + curr, 0);
  const handleClickRecButton = () => {
    sumOfPoints(totalPoints);
    onFinalScore(totalPoints);
    // push to new page with RR
  };
  return (
    <div className="questions--container">
      <div className="main--text">
        <h1>Heading (Need Copy)</h1>
        <h2>
          On a scale of 1 to 5, with 1 being strongly disagree and 5 being strongly agree, please rate the following
          statements:
        </h2>
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

        <GetRecsButton onClickRecButton={handleClickRecButton} />
      </div>
    </div>
  );
};

export default Questions;
