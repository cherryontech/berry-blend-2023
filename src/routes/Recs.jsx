import React from 'react';
import ActivityRec from '../components/ActivityRec';
import '../Recs.css';

export default function Recommendations() {
  return (
    <div>
      <header className="rec--header">
        <h1>Your Score </h1>
        <p>Based on your score you may be experiencing... Here are your recommended activities.</p>
      </header>
      <ActivityRec />
      <ActivityRec />
      <ActivityRec />
    </div>
  );
}
