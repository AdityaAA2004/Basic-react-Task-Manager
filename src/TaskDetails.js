import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTask, selectTaskList } from './features/TaskListSlice';
import './TaskDetails.css';
import UpdateTask from './UpdateTask';

function TaskDetails() {
  const taskList = useSelector(selectTaskList);
  const dispatch = useDispatch();
  const [showUpdateTask, setShowUpdateTask] = useState(false);
  const [oldTaskName, setOldTaskName] = useState(""); // State to store the old task name

  const deleteTaskFromList = (taskName) => {
    dispatch(removeTask({TaskName:taskName}));
  };

  const handleUpdateClick = (taskName) => {
    setShowUpdateTask(true);
    setOldTaskName(taskName); // Update the state with the current taskName
  };

  return (
    <div className='TaskDetail'>
      {taskList.map((taskName, ind) => {
        return (
          <div className='IndividualTask' key={ind}>
            <h4>{taskName}</h4>
            <button className='Update' onClick={() => handleUpdateClick(taskName)}>
              Update
            </button>
            <button className='Delete' onClick={() => deleteTaskFromList(taskName)}>
              Delete
            </button>
          </div>
        );
      })}
      {showUpdateTask && <UpdateTask oldTaskName={oldTaskName} setShowUpdateTask={setShowUpdateTask} />}
    </div>
  );
}

export default TaskDetails;
