import React from 'react';
// import '../home.css';
import HomeButton from '../components/buttons/HomeButton';
import Greeting from '../components/Greeting.jsx';

export default function Home() {
  return (
    <div>
      <Greeting className="font-bold" />
      <HomeButton />
    </div>
  );
}
