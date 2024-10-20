import React, { useState } from 'react';

function TasksWidget() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Follow up on email', completed: false },
    { id: 2, text: 'Contact team lead', completed: false },
  ]);

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="tasks-widget">
      <h3>Tasks</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TasksWidget;
