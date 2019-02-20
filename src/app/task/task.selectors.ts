import { createSelector, createFeatureSelector } from '@ngrx/store';
import { adapter, State } from './task.reducer';
import { TaskStatus } from './task-status.enum';
import { TaskDueStatus } from './task-due.enum';
import * as moment from 'moment';

export const getTaskState = createFeatureSelector<State>('task');

export const {
  selectIds: getTaskIds,
  selectEntities: getTaskEntities,
  selectAll: getAllTasks
} = adapter.getSelectors(getTaskState);


export const calculateStatus = (date, today) => {
  date = moment(date);
  today = moment(today);
  const diff = date.diff(today, 'days');
  if (diff <= 1) {
    return TaskDueStatus.NOW
  } else if (diff <= 7) {
    return TaskDueStatus.SOON
  } else {
    return TaskDueStatus.LATER
  }
}

export const selectAllTasksWithDueStatus = createSelector(
  getAllTasks,
  (tasks) => tasks.map((task) => ({
    ...task,
    due: calculateStatus(task.date, new Date()) 
  }
)));

export const selectAllTasksByStatus = createSelector(
  selectAllTasksWithDueStatus,
  (tasks) => {
    return [{
      title: 'Todo',
      type: TaskStatus.TODO,
      tasks: tasks.filter((task) => task.status === TaskStatus.TODO)
    }, {
      title: 'In Progress',
      type: TaskStatus.PENDING,
      tasks: tasks.filter((task) => task.status === TaskStatus.PENDING)
    }, {
      title: 'Complete',
      type: TaskStatus.COMPLETE,
      tasks: tasks.filter((task) => task.status === TaskStatus.COMPLETE)
    }]
  }
)