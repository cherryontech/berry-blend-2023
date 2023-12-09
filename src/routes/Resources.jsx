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
      <h2 className="sub-head-left">
        Activity &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp; Energy level
      </h2>
      <div className="row">
        <div className="column">{listedItems}</div>
        <div className="column2">{listedEnergy}</div>
      </div>
      <div>
        <FontAwesomeIcon icon={faBatteryFull} size="2x" color="green" />
      </div>
      <div>
        <FontAwesomeIcon icon={faBatteryQuarter} size="2x" color="red" />
      </div>
    </div>
  );
};

export default Resources;
