import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../routes/Home';
import ErrorPage from '../routes/ErrorPage';
import Resources from '../routes/Resources';
import Questions from '../routes/Questions';
import Recs from '../routes/Recs';

import { useState } from 'react';

const RoutePaths = () => {
  const [finalScore, setFinalScore] = useState(0);
  const [finalSummary, setFinalSummary] = useState('');

  const handleScore = (newScore) => {
    setFinalScore(newScore);
  };
  const handleSummary = (newSummary) => {
    setFinalSummary(newSummary);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/Questions" element={<Questions onFinalScore={handleScore} onFinalSummary={handleSummary} />} />
        <Route path="/Recs" element={<Recs finalScore={finalScore} finalSummary={finalSummary} />} />

        {/* Error paths, keep last */}
        <Route path="/404" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </>
  );
};

export default RoutePaths;
