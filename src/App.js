import { useState } from 'react';
import './App.css';
import { useDispatch} from 'react-redux';
import { addTask } from './features/TaskListSlice'; // Import the correct action
import TaskDetails from './TaskDetails';

function App() {
  const [TaskName, setTaskName] = useState("");
  const dispatch = useDispatch();
  const addTaskToList = () => {
    // Dispatch the action with the correct type and payload
    dispatch(addTask({ TaskName: TaskName }));
    console.log(TaskName);
  };

  return (
    <div className="App">
      <div className='CreateTaskInput'>
        <input type='text' onChange={e => { setTaskName(e.target.value) }} placeholder='Add Task'></input>
        <button className='CreateTaskButton' onClick={addTaskToList}>Create Task</button>
      </div>
      <TaskDetails />
      
    </div>
  );
}

export default App;
