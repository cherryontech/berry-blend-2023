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
      <ActivityRec
        image="src/assets/walkingActivity.jpeg"
        activity="Walking"
        activityDesc="Take a moment to step outside and breathe the fresh air. Walking by yourself is a great opportunity to be mindful of the moment and disconnect from work."
        duration="30 minutes"
        equipment="none needed"
      />
      <ActivityRec
        image="src/assets/yogaActivity.jpeg"
        activity="Yoga Class"
        activityDesc="Sign up for a Yoga class in your community. It provides an opportunity to be in community with others and to focus on your health. "
        duration="1 hour"
        equipment="none needed"
      />
      <ActivityRec
        image="src/assets/journaling.jpeg"
        activity="Journaling"
        activityDesc="Find a comfortable spot to write and dump all of your thoughts and feelings on a piece of paper."
        duration="30 minutes"
        equipment="none needed"
      />
    </div>
  );
}
