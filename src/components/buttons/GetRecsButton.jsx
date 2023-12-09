import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Questions.css';

const GetRecsButton = ({ disabled, onClickRecButton }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (disabled) {
      alert('You must answer all questions before getting recommendations.');
    } else {
      onClickRecButton();
      navigate('/Recs');
    }
  };

  return (
    <div className="recs--button">
      <button className="recs--button" onClick={handleButtonClick}>
        Get Recommendations
      </button>
    </div>
  );
};

export default GetRecsButton;
