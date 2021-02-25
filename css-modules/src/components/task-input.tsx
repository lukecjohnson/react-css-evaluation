import React from 'react';
import styles from './task-input.module.css';

interface TaskInputProps {
  onAddTask: (title: string) => void;
}

function TaskInput({ onAddTask }: TaskInputProps) {
  function onInputKeydown(event: React.KeyboardEvent) {
    if (event.key === 'Enter') {
      onAddTask((event.target as HTMLInputElement).value);
      (event.target as HTMLInputElement).value = '';
    }
  }

  return (
    <input
      type="text"
      className={styles.TaskInput}
      placeholder="Hit enter to add a task"
      autoFocus
      onKeyDown={onInputKeydown}
    />
  );
}

export default TaskInput;
