import React from 'react';

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
      className="w-full h-14 px-4 rounded-lg placeholder-gray-400 focus:outline-none focus:ring"
      placeholder="Hit enter to add a task"
      autoFocus
      onKeyDown={onInputKeydown}
    />
  );
}

export default TaskInput;
