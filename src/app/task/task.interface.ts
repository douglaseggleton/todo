import { TaskStatus } from './task-status.enum';

export interface Task {
  id: string;
  title: string;
  description: string;
  date: Date;
  status: TaskStatus;
}
