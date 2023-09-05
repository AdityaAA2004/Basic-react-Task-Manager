import React, { useState } from 'react';
import { updateTask } from './features/TaskListSlice';
import { useDispatch } from 'react-redux';
import './UpdateTask.css';

function UpdateTask({ oldTaskName, setShowUpdateTask }) {
  const [newTaskName, setNewTaskName] = useState('');
  const dispatch = useDispatch();

  console.log(oldTaskName);

  const updateTaskInList = () => {
    dispatch(updateTask({ OldTaskName: oldTaskName, NewTaskName: newTaskName }));
    setShowUpdateTask(false); // Hide the UpdateTask component after updating the task
  };

  return (
    <div className='UpdateTask'>
      <div className='UpdateTaskInput'>
        <input
          type='text'
          onChange={(e) => {
            setNewTaskName(e.target.value);
          }}
          placeholder='Update Task'
        />
        <button className='CreateTaskButton' onClick={updateTaskInList}>
          Update Task
        </button>
      </div>
    </div>
  );
}

export default UpdateTask;
