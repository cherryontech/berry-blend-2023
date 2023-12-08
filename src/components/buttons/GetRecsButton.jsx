import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Questions.css';

const GetRecsButton = ({ onClickRecButton }) => {
  const navigate = useNavigate();

  const navigateToRecommendations = () => {
    // 👇️ navigate to /recommendation page
    navigate('/Recs');
  };

  const handleClick = () => {
    // navigateToRecommendations();
  };
  return (
    <div className="recs--button">
      <button className="recs--button" onClick={onClickRecButton}>
        Get Recommendations
      </button>
    </div>
  );
};
// onClick={(event) => (window.location.href = '/Recs')
export default GetRecsButton;
