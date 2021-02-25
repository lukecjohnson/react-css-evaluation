import React, { useState } from 'react';
import TaskList from './components/task-list';
import TaskInput from './components/task-input';

function App() {
  const initialTasks = localStorage.hasOwnProperty('tasks')
    ? JSON.parse(localStorage['tasks'])
    : [];

  const [tasks, setTasks] = useState(initialTasks);

  function addTask(title: string): void {
    const updatedTasks = [...tasks, { title, complete: false }];
    localStorage['tasks'] = JSON.stringify(updatedTasks);
    setTasks(updatedTasks);
  }

  function removeTask(taskIndex: number) {
    const updatedTasks = [...tasks];
    updatedTasks.splice(taskIndex, 1);
    localStorage['tasks'] = JSON.stringify(updatedTasks);
    setTasks(updatedTasks);
  }

  function toggleTaskStatus(taskIndex: number): void {
    const updatedTasks = [...tasks];
    updatedTasks[taskIndex].complete = !updatedTasks[taskIndex].complete;
    localStorage['tasks'] = JSON.stringify(updatedTasks);
    setTasks(updatedTasks);
  }

  return (
    <main>
      <h1>Tasks</h1>
      <TaskList
        tasks={tasks}
        onRemoveTask={ removeTask }
        onToggleTaskStatus={ toggleTaskStatus }
      />
      <TaskInput onAddTask={ addTask } />
    </main>
  )
}

export default App
