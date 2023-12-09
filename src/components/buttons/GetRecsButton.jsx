import React from 'react';
import '../../Questions.css';

const GetRecsButton = () => (
  <div>
    <button className="recs--button" onClick={(event) => (window.location.href = '/Recs')}>
      Get Recommendations
    </button>
  </div>
);

export default GetRecsButton;
