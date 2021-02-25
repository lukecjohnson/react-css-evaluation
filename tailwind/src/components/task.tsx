import React from 'react';
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
    <li className={`
      h-14 flex justify-between items-center mb-4 px-4 bg-white rounded-lg
      ${complete ? 'text-gray-400 line-through' : ''}
    `}>
      <span>{ title }</span>
      <div>
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
