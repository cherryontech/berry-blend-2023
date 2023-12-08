import React from 'react';
import AddToCalendar from '../components/buttons/AddToCalendar';

export default function ActivityRec(props) {
  return (
    <div className="activity--container">
      <section className="activity-rec-box">
        <div className="image--container">
          <img alt="" src={props.image} className="activity--image" />
        </div>
        <div className="activity-info-container">
          <h3 className="activity--title">{props.activity}</h3>
          <p className="activity--description">{props.description}</p>
          <h5 className="activity--duration">Duration in Minutes: {props.duration}</h5>
          <h5 className="activity--equipment">Equipment Needed: {props.equipment} </h5>
          <AddToCalendar />
        </div>
      </section>
    </div>
  );
}
