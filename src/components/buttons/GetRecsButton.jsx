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
    onClickRecButton(); //// NOTE this should go before navigate so that it passes the data first before navigating
    /// NOTE since this fn just does the one thing, why not just call it in the handler rather than abstracting it into another function?
    // navigateToRecommendations();
    navigate('/Recs');

    // NOTE idk what was the intention of the below is, looks like a mistake? This was what broke it
    // {
    //   onClickRecButton;
    // }
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
