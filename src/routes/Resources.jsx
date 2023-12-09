import React from 'react';
import '../Resources.css';
import RecsData from '../static/recommendationData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBatteryFull } from '@fortawesome/free-solid-svg-icons';
import { faBatteryQuarter } from '@fortawesome/free-solid-svg-icons';

const Resources = () => {
  const listedItems = RecsData.map((item) => (
    <>
      <p>
        <a href={item.photoUrl}>{item.activity}</a>
      </p>
    </>
  ));

  const listedEnergy = RecsData.map((item) => {
    console.log(item.energyRequired);

    let icon;
    if (item.energyRequired === 'high') {
      icon = faBatteryFull;
    } else {
      icon = faBatteryQuarter;
    }
    return (
      <>
        <p>{item.energyRequired}</p>
      </>
    );
  });

  return (
    <div className="resources--container">
      <div className="res--text">
        <h1> Our Resources </h1>
        <p>To access a list of all activities, look at this page</p>
      </div>

      <div class="row">
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
