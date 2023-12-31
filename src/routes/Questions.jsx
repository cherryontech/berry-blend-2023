import React, { useState } from 'react';
import QuestionBank from '../components/QuestionBank.jsx';
import GetRecsButton from '../components/buttons/GetRecsButton.jsx';
import '../Questions.css';

// TODO keep old for now, in case there is ever a "moderate" activity
// as of 12/9/23 there are only high/low
export const sumOfPoints_old = (totalPoints) => {
  if (totalPoints <= 10) {
    return 'Low Burnout';
  } else if (totalPoints >= 11 && totalPoints <= 20) {
    return 'Moderate Burnout';
  } else if (totalPoints >= 21 && totalPoints <= 25) {
    return 'High Burnout';
  } else {
    return '';
  }
};

export const sumOfPoints = (totalPoints) => {
  if (totalPoints <= 15) {
    return 'Low Burnout';
  } else if (totalPoints >= 16 && totalPoints <= 25) {
    return 'High Burnout';
  } else {
    return '';
  }
};

export const burnoutLevel = (pointsSummary) => {
  if (pointsSummary === 'Low Burnout') {
    return "You're vibing in the low burnout zone. Life is a chill playlist, and stress is just a background beat. Keep riding those good vibes!";
  } else if (pointsSummary == 'Moderate Burnout') {
    return "You're cruising in the moderate burnout lane. Life's got some bumps, but you're handling it like a pro. Time to sprinkle in some self-love, rest a little bit and recharge.";
  } else if (pointsSummary === 'High Burnout') {
    return "Uh-oh, you're in the high burnout zone! Your chill has gone missing, and stress is throwing a wild party. Time to hit pause, find your zen, and reclaim your cool. Burnout ain't got nothing on you!";
  }
};

const Questions = ({ onFinalScore, onFinalSummary }) => {
  const [points, setPoints] = useState(Array(5).fill(0));
  const [questions, setQuestions] = useState(Array(5).fill(false));

  const areAllQuestionsAnswered = questions.every((answered) => answered);
  console.log('areAllQuestionsAnswered:', areAllQuestionsAnswered);
  console.log('questions:', questions);

  const handleAnswer = (questionIndex, pointsValue) => {
    const currentPointsValue = points[questionIndex];
    // Check if the selected value is different from the current value
    if (currentPointsValue !== pointsValue) {
      const newPoints = [...points];
      newPoints[questionIndex] = pointsValue;
      setPoints(newPoints);

      // Check for unanswered questions
      const newQuestions = [...questions];
      newQuestions[questionIndex] = true;
      setQuestions(newQuestions);
    }
  };

  // This should move into the Recs component
  const totalPoints = points.reduce((acc, curr) => acc + curr, 0);

  const handleClickRecButton = () => {
    sumOfPoints(totalPoints);
    const burnoutText = burnoutLevel(sumOfPoints(totalPoints));
    onFinalScore(totalPoints);
    onFinalSummary(burnoutText);

    // push to new page with RR
  };
  return (
    <div className="questions--content">
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
          className={questions[0] ? '' : 'unanswered'}
        />
        <QuestionBank
          index={1}
          question="I have trouble relaxing and disconnecting from work or other stressors."
          onAnswer={handleAnswer}
          className={questions[1] ? '' : 'unanswered'}
        />
        <QuestionBank
          index={2}
          question="I frequently experience feelings of irritability, frustration, or even anger."
          onAnswer={handleAnswer}
          className={questions[2] ? '' : 'unanswered'}
        />
        <QuestionBank
          index={3}
          question="I find it challenging to maintain focus and productivity."
          onAnswer={handleAnswer}
          className={questions[3] ? '' : 'unanswered'}
        />
        <QuestionBank
          index={4}
          question="I often neglect self-care and leisure activities."
          onAnswer={handleAnswer}
          className={questions[4] ? '' : 'unanswered'}
        />
        <p className="totalPoints--display">Total Score: {totalPoints}</p>
        {!areAllQuestionsAnswered && <p className="error-message">All questions are required!</p>}
        <GetRecsButton disabled={!areAllQuestionsAnswered} onClickRecButton={handleClickRecButton} />
      </div>
    </div>
  );
};

export default Questions;
