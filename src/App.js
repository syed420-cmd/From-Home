import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Newsfeed from './components/Newsfeed';
import EventsWidget from './components/EventsWidget';
import TasksWidget from './components/TasksWidget';
import ProgressWidget from './components/ProgressWidget';
import './styles.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Sidebar />
        <Newsfeed />
        <div className="right-column">
          <EventsWidget />
          <ProgressWidget />
          <TasksWidget />
        </div>
      </div>
    </div>
  );
}

export default App;
