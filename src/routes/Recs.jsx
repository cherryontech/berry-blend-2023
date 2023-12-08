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

  //// NOTE sample below
  //// What does the code do? It gets the description based on finalScore, lowercase it, then splits it into arr items by space, and keeps only the first word
  //// How do you use it? console log energyRequiredBasedOnFinalPoints
  //// see how you can then use it to filter on line 54
  const energyRequiredBasedOnFinalPoints = sumOfPoints(finalScore).toLocaleLowerCase().split(' ')[0];

  // TODO lets get rid of comments if you don't need it. You can still access changes via github
  /// TO
  // filter out high/md/low
  // sort/randomize
  // slice to reduce to 3
  // map

  // const array = [1, 2, 3, 4, 5, 6];
  // const filteredData = array.filter((n) => n <= 5);
  // const randomized = filteredData.sort(() => Math.random() - 0.5);
  // const slicedData = randomized.slice(2);
  // const mapped = slicedData.map((n) => n + 1);

  // const crazyArray = [1, 2, 3, 4, 5, 6]
  //   .filter((n) => n <= 5)
  //   .sort(() => Math.random() - 0.5)
  //   .slice(2)
  //   .map((n) => n + 1);

  // console.log(filteredData, randomized, slicedData, mapped, crazyArray);

  const lowEnergyRecs = useMemo(
    () =>
      RecsData
        // .filter((recs) => recs.energyRequired == 'low')
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

  ///// TODO delete me
  // <ActivityRec
  //         image="src/assets/walkingActivity.jpeg"
  //         activity="Walking"
  //         activityDesc="Take a moment to step outside and breathe the fresh air. Walking by yourself is a great opportunity to be mindful of the moment and disconnect from work."
  //         duration="30 minutes"
  //         equipment="none needed"
  //       />
  //       <ActivityRec
  //         image="src/assets/yogaActivity.jpeg"
  //         activity="Yoga Class"
  //         activityDesc="Sign up for a Yoga class in your community. It provides an opportunity to be in community with others and to focus on your health. "
  //         duration="1 hour"
  //         equipment="none needed"
  //       />
  //       <ActivityRec
  //         image="src/assets/journaling.jpeg"
  //         activity="Journaling"
  //         activityDesc="Find a comfortable spot to write and dump all of your thoughts and feelings on a piece of paper."
  //         duration="30 minutes"
  //         equipment="none needed"
  //       />
}
