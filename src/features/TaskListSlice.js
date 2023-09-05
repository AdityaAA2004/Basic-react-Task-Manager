import { createSlice } from '@reduxjs/toolkit';

export const TaskListSlice = createSlice({
  name: 'tasks',
  initialState: {
    TaskList: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.TaskList.push(action.payload.TaskName);
    },

    removeTask: (state, action) => {
      const index = state.TaskList.findIndex((taskName) => taskName === action.payload.TaskName);
      if (index !== -1) {
        state.TaskList.splice(index, 1);
      }
    },

    updateTask: (state, action) => {
      const index = state.TaskList.findIndex((taskName) => taskName === action.payload.OldTaskName);
      if (index !== -1) {
        state.TaskList[index] = action.payload.NewTaskName;
      }
    },
  },
});

export const { addTask, removeTask, updateTask } = TaskListSlice.actions;

export const selectTaskList = (state) => state.tasks.TaskList;

export default TaskListSlice.reducer;
