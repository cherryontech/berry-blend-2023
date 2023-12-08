import React from 'react';
import '../Resources.css';
import { recommendationData } from '../static/recommendationData';

const Resources = () => {
  const listedItems = recommendationData.map((item) => (
    <>
      <p>{item.activity}</p>
    </>
  ));
  const listedEnergy = recommendationData.map((item) => (
    <>
      <p>{item.energyRequired}</p>
    </>
  ));

  return (
    <div className="resources--container">
      <div className="res--text">
        <h1> Our Resources </h1>
        <p>To access a list of all activities, look at this page</p>
      </div>

      <div class="row">
        {' '}
        <div class="column">
          <h2 className="sub-head-left">Activity</h2>
          <div> {listedItems}</div>
        </div>
        <div class="column">
          <h2 className="sub-head-right">Energy level</h2>
          <div> {listedEnergy}</div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
