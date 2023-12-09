import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../Questions.css';

const GetRecsButton = ({ disabled }) => {
  const history = useHistory();

  const handleButtonClick = () => {
    if (!disabled) {
      history.push('/Recs');
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
