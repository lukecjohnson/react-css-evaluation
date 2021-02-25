import React from 'react';
import styles from './task.module.css';
import IconButton from './icon-button';

interface TaskProps {
  title: string;
  complete: boolean;
  index: number;
  onToggleTaskStatus: (taskIndex: number) => void;
  onRemoveTask: (taskIndex: number) => void;
}

function Task({ title, complete, index, onToggleTaskStatus, onRemoveTask }: TaskProps) {
  return (
    <li className={`${styles.Task} ${complete ? styles.complete : ''}`}>
      <span>{ title }</span>
      <div className={ styles.TaskActions }>
        <IconButton
          icon="trash"
          variant="danger"
          onClick={ () => onRemoveTask(index) }
        />
        <IconButton
          icon={ complete ? 'checkmark-filled' : 'checkmark' }
          variant="success"
          fill={ complete ? '#10B981' : 'currentColor' }
          onClick={ () => onToggleTaskStatus(index) }
        />
      </div>
    </li>
  );
}

export default Task;
