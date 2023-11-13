import React from 'react';
import '../Home.css';
import HomeButton from '../components/buttons/HomeButton';
import Greeting from '../components/Greeting.jsx';

const CirlceStyleLeft = () => {
  return (
    <div className="circles-container-left">
      <div className="circles-group-left">
        <div className="overlap-left">
          <div className="overlap-group-left">
            <div className="ellipse-left" />
            <div className="ellipse-2-left" />
            <div className="ellipse-3-left" />
          </div>
          <div className="ellipse-4-left" />
        </div>
      </div>
    </div>
  );
};

const CircleStyleRight = () => {
  return (
    <div className="circles-container-right">
      <div className="circles-group-right">
        <div className="overlap-right">
          <div className="overlap-group-right">
            <div className="ellipse-right" />
            <div className="ellipse-2-right" />
            <div className="ellipse-3-right" />
          </div>
          <div className="ellipse-4-right" />
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="homepage--container">
      <Greeting />
      <HomeButton />
      <CirlceStyleLeft />
      <CircleStyleRight />
    </div>
  );
}
