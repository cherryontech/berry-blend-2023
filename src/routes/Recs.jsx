import React from 'react';
import ActivityRec from '../components/ActivityRec';
import '../Recs.css';
import AllResources from '../components/buttons/ExploreResources';
import ThumbsUp from '../components/buttons/ThumbsUp';
import ThumbsDown from '../components/buttons/ThumbsDown';

// function App() {
//   const [showButton, setShowButton] = useState(true);

//   const toggleButton = () => {
//     setShowButton(!showButton);
//   };

//   return <div>{showButton && <button onClick={toggleButton}>Hide Button</button>}</div>;
// }

export default function Recommendations() {
  const [showButton, setShowButton] = useState(true);
  const toggleButton = () => {
    setShowButton(!showButton);
  };
  return (
    <div>
      <header className="rec--header">
        <h1>Your Score </h1>
        <p>Based on your score you may be experiencing... Here are your recommended activities.</p>
      </header>
      <section>
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
      </section>
      <section className="feedback--container">
        <h2 className="feedback--header">Let us know what you thought of our recommendations</h2>
        <p className="feedback--blurb">We welcome your feedback, so that we can continually improve this experience.</p>
        <div className="thumbs--container">
          <ThumbsUp />
          <ThumbsDown />
        </div>
        <AllResources className="explore--recs--button" />
      </section>
    </div>
  );
}
