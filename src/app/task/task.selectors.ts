import { createSelector, createFeatureSelector } from '@ngrx/store';
import { adapter, State } from './task.reducer';
import { TaskStatus } from './task-status.enum';
import { TaskDueStatus } from './task-due.enum';
import { Task } from './task.interface';
import * as moment from 'moment';

export const getTaskState = createFeatureSelector<State>('task');

export const {
  selectIds: getTaskIds,
  selectEntities: getTaskEntities,
  selectAll: getAllTasks
} = adapter.getSelectors(getTaskState);


export const calculateDueStatus = (date, today, isComplete) => {
  date = moment(date);
  today = moment(today);
  const diff = date.diff(today, 'days');
  if (isComplete) {
    return TaskDueStatus.NEVER
  } else if (diff <= 1) {
    return TaskDueStatus.NOW;
  } else if (diff <= 7) {
    return TaskDueStatus.SOON;
  } else {
    return TaskDueStatus.LATER;
  }
};

export const selectOrder = createSelector(
  getTaskState,
  (state) => state.order
)

export const selectAllTasksWithDueStatus = createSelector(
  getAllTasks,
  (tasks) => tasks.map((task) => ({
    ...task,
    due: calculateDueStatus(task.date, new Date(), task.status === TaskStatus.COMPLETE)
  }
)));

const filterByStatus = (status: TaskStatus) => (task: Task) => task.status === status;

const sortByOrder = (order) => (a, b) => order.indexOf(a.id) - order.indexOf(b.id);

export const selectAllTasksByStatus = createSelector(
  selectAllTasksWithDueStatus,
  selectOrder,
  (tasks, order) => {
    return [{
      title: 'Todo',
      type: TaskStatus.TODO,
      tasks: tasks.filter(filterByStatus(TaskStatus.TODO)).sort(sortByOrder(order[TaskStatus.TODO]))
    }, {
      title: 'In Progress',
      type: TaskStatus.PENDING,
      tasks: tasks.filter(filterByStatus(TaskStatus.PENDING)).sort(sortByOrder(order[TaskStatus.PENDING]))
    }, {
      title: 'Complete',
      type: TaskStatus.COMPLETE,
      tasks: tasks.filter(filterByStatus(TaskStatus.COMPLETE)).sort(sortByOrder(order[TaskStatus.COMPLETE]))
    }];
  }
);