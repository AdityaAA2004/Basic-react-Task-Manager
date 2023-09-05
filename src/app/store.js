import { configureStore } from '@reduxjs/toolkit';
import TaskListReducer from '../features/TaskListSlice';
export const store = configureStore({
  reducer: {
    tasks: TaskListReducer,
  },
});
