import React from 'react';
import '../Home.css';
import HomeButton from '../components/buttons/HomeButton';
import Greeting from '../components/Greeting.jsx';

const BoxOne = () => {
  return (
    <div className="box">
      <div className="group">
        <div className="overlap">
          <div className="overlap-group">
            <div className="ellipse" />
            <div className="div" />
            <div className="ellipse-2" />
          </div>
          <div className="ellipse-3" />
        </div>
      </div>
    </div>
  );
};

const BoxTwo = () => {
  return (
    <div className="box--two">
      <div className="group--two">
        <div className="overlap--two">
          <div className="overlap-group--two">
            <div className="ellipse--two" />
            <div className="div--two" />
            <div className="ellipse-2--two" />
          </div>
          <div className="ellipse-3--two" />
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
      <BoxOne />
      <BoxTwo />
    </div>
  );
}
