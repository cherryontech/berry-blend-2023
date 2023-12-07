import React, { useState, useRef } from 'react';
import ActivityRec from '../components/ActivityRec';
import '../Recs.css';
import AllResourcesButton from '../components/buttons/AllResourcesButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import recommendations from '../static/recommendationData';

export default function Recommendations({ finalScore, finalSummary }) {
  const [showButton, setShowButton] = useState(false);
  const ref = useRef(null);

  const thumbsDown = () => {
    setShowButton(true);
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };
  const thumbsUp = () => {
    setShowButton(false);
  };

  const suggestedRecs = recommendations.map((recommended) => {
    return;
    <ActivityRec
      image={recommended.photoUrl}
      activity={recommended.activity}
      description={recommended.blurb}
      duration={recommended.durationInMinutes}
      equipment={recommended.needsEquipment}
    />;
  });

  return (
    <div ref={ref}>
      <header className="rec--header">
        <h1>Your Score: {finalScore} </h1>
        <p>Based on your score you may be experiencing {finalSummary} Here are your recommended activities.</p>
      </header>
      <section>{suggestedRecs}</section>
      <section className="feedback--container">
        <h2 className="feedback--header">Let us know what you thought of our recommendations</h2>
        <p className="feedback--blurb">We welcome your feedback, so that we can continually improve this experience.</p>
        <section className="thumbs--container">
          <button className="thumbs--up" onClick={thumbsUp}>
            <FontAwesomeIcon icon={faThumbsUp} size="3x" />
          </button>
          <button className="thumbs--down" onClick={thumbsDown}>
            <FontAwesomeIcon icon={faThumbsDown} size="3x" />
          </button>
        </section>
        {showButton && <AllResourcesButton className="explore--recs--button" />}
      </section>
    </div>
  );
}

/* <ActivityRec
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
        /> */
