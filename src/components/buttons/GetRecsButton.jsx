import React from 'react';
import '../../Questions.css';
import { useNavigate } from 'react-router-dom';

const GetRecsButton = ({ onClickRecButton }) => {
  const handleRecButton = () => {
    onClickRecButton();
    navigate('/Recs');
  };
  const navigate = useNavigate();

  return (
    <div className="recs--button">
      <button className="recs--button" onClick={handleRecButton}>
        Get Recommendations
      </button>
    </div>
  );
};


export default GetRecsButton;
