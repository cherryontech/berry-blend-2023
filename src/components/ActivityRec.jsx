import React from 'react';
import AddToCalendar from '../components/buttons/AddToCalendar';

export default function ActivityRec() {
  return (
    <div className="activity--container">
      <section className="activity-rec-box">
        <div className="image--container">
          <img alt="" src="#" />
        </div>
        <div className="activity-info-container">
          <h3 className="activity--title">Activity Name</h3>
          <p className="activity--description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem accusantium tempora voluptatum
            pariatur, omnis dignissimos quaerat vero neque culpa deserunt quod cumque mollitia explicabo? Aperiam
            commodi expedita molestiae eveniet architecto.
          </p>
          <h5 className="activity--duration">Duration:</h5>
          <h5 className="activity--equipment">Equipment Needed: </h5>
          <AddToCalendar />
        </div>
      </section>
    </div>
  );
}
