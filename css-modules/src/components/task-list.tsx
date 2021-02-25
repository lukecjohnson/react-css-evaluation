import React from 'react';
import styles from './task-list.module.css';
import Task from './task';

interface TaskListProps {
  tasks: { title: string; complete: boolean }[];
  onToggleTaskStatus: (taskIndex: number) => void;
  onRemoveTask: (taskIndex: number) => void;
}

function TaskList({ tasks, onToggleTaskStatus, onRemoveTask }: TaskListProps) {
  return (
    <ul className={ styles.TaskList }>
      {tasks.map((task, index) => {
        return (
          <Task
            key={ index }
            index={ index }
            title={ task.title }
            complete={ task.complete }
            onRemoveTask={ onRemoveTask }
            onToggleTaskStatus={ onToggleTaskStatus }
          />
        );
      })}
    </ul>
  );
}

export default TaskList;
