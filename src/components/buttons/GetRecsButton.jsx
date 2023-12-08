import React from 'react';
import '../../Questions.css';
import { useNavigate } from 'react-router-dom';

const GetRecsButton = ({ onClickRecButton }) => {
  const navigate = useNavigate();

  const navigateToRecommendations = () => {
    // 👇️ navigate to /recommendation page
    navigate('/Recs');
  };
  const handleRecButton = () => {
    navigateToRecommendations();
    {
      onClickRecButton;
    }
  };
  return (
    <div className="recs--button">
      <button className="recs--button" onClick={handleRecButton}>
        Get Recommendations
      </button>
    </div>
  );
};

export default GetRecsButton;
