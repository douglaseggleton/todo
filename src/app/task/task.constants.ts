import { TaskStatus } from './task-status.enum';

export const statuses = [
  {
    title: 'Todo',
    type: TaskStatus.TODO
  },
  {
    title: 'In Progress',
    type: TaskStatus.PENDING
  },
  {
    title: 'Complete',
    type: TaskStatus.COMPLETE
  }
];
