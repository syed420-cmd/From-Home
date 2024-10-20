import React from 'react';

function EventsWidget() {
  return (
    <div className="events-widget">
      <h3>Upcoming Events</h3>
      <ul>
        <li>
          <span>Youth Zone</span>
          <br />
          <small>15th Oct, 10:00 AM</small>
        </li>
        <li>
          <span>Migrant Inclusion Workshop</span>
          <br />
          <small>20th Oct, 1:00 PM</small>
        </li>
        <li>
          <span>Community Training</span>
          <br />
          <small>22nd Oct, 9:30 AM</small>
        </li>
      </ul>
    </div>
  );
}

export default EventsWidget;
