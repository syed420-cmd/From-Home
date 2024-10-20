import React from 'react';

function ProgressWidget() {
  return (
    <div className="progress-widget">
      <h3>Personal Progress</h3>
      <div className="progress-item">
        <p>Event Attendance</p>
        <progress value="70" max="100"></progress>
      </div>
      <div className="progress-item">
        <p>Group Participation</p>
        <progress value="50" max="100"></progress>
      </div>
      <div className="progress-item">
        <p>Task Completion</p>
        <progress value="30" max="100"></progress>
      </div>
    </div>
  );
}

export default ProgressWidget;
