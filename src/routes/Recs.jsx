import React, { useState, useRef, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import ActivityRec from '../components/ActivityRec';
import AllResourcesButton from '../components/buttons/AllResourcesButton';
import RecsData from '../static/recommendationData';
import { sumOfPoints } from './Questions';
import '../Recs.css';

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
  // console.log(finalSummary);

  //// What does the code do? It gets the description based on finalScore, lowercase it, then splits it into arr items by space, and keeps only the first word

  const energyRequiredBasedOnFinalPoints = sumOfPoints(finalScore).toLocaleLowerCase().split(' ')[0];
  console.log(energyRequiredBasedOnFinalPoints);

  const lowEnergyRecs = useMemo(
    () =>
      RecsData.filter((recs) => recs.energyRequired === energyRequiredBasedOnFinalPoints)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map((recs) => {
          return (
            <ActivityRec
              image={recs.photoUrl}
              activity={recs.activity}
              description={recs.blurb}
              duration={recs.durationInMinutes}
              equipment={recs.needsEquipment}
            />
          );
        }),
    [RecsData],
  );
  // console.log(lowEnergyRecs);

  return (
    <div ref={ref}>
      <header className="rec--header">
        <h1>Your Score: {finalScore} </h1>
        <p> {finalSummary}</p>
      </header>
      <section>{lowEnergyRecs}</section>
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
