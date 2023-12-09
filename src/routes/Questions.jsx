import React, { useState } from 'react';
import '../Questions.css';
import QuestionBank from '../components/QuestionBank.jsx';
import GetRecsButton from '../components/buttons/GetRecsButton.jsx';

const Questions = () => {
  const [points, setPoints] = useState(Array(5).fill(0));
  const [unansweredQuestions, setUnansweredQuestions] = useState(Array(5).fill(false));

  const areAllQuestionsAnswered = unansweredQuestions.every((answered) => !answered);
  console.log('areAllQuestionsAnswered:', areAllQuestionsAnswered);
  console.log('unansweredQuestions:', unansweredQuestions);

  const handleAnswer = (questionIndex, pointsValue) => {
    const currentPointsValue = points[questionIndex];
    // Check if the selected value is different from the current value
    if (currentPointsValue !== pointsValue) {
      const newPoints = [...points];
      newPoints[questionIndex] = pointsValue;
      setPoints(newPoints);

      // Check for unanswered questions
      const newUnansweredQuestions = [...unansweredQuestions];
      newUnansweredQuestions[questionIndex] = false;
      setUnansweredQuestions(newUnansweredQuestions);
    }
  };

  // This should move into the Recs component
  const totalPoints = points.reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="questions--container">
      <div className="main--text">
        <h1>Burnout Assessment</h1>
        <h2>
          On a scale of 1 to 5, with 1 being strongly disagree and 5 being strongly agree, please rate the following
          statements:
        </h2>
        <QuestionBank
          index={0}
          question="I often feel exhausted and drained from work or daily responsibilities."
          onAnswer={handleAnswer}
          className={unansweredQuestions[0] ? 'unanswered' : ''}
        />
        <QuestionBank
          index={1}
          question="I have trouble relaxing and disconnecting from work or other stressors."
          onAnswer={handleAnswer}
          className={unansweredQuestions[1] ? 'unanswered' : ''}
        />
        <QuestionBank
          index={2}
          question="I frequently experience feelings of irritability, frustration, or even anger."
          onAnswer={handleAnswer}
          className={unansweredQuestions[2] ? 'unanswered' : ''}
        />
        <QuestionBank
          index={3}
          question="I find it challenging to maintain focus and productivity."
          onAnswer={handleAnswer}
          className={unansweredQuestions[3] ? 'unanswered' : ''}
        />
        <QuestionBank
          index={4}
          question="I often neglect self-care and leisure activities."
          onAnswer={handleAnswer}
          className={unansweredQuestions[4] ? 'unanswered' : ''}
        />
        {!areAllQuestionsAnswered && <p className="error-message">All questions are required!</p>}
        <GetRecsButton disabled={!areAllQuestionsAnswered} />
      </div>
    </div>
  );
};

export default Questions;
