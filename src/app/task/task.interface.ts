import { TaskStatus } from './task-status.enum'

export interface Task {
  id: number;
  title: string;
  description: string;
  date: Date;
  status: TaskStatus
}