import { Action } from '@ngrx/store';
import { Task } from './task.interface';
import { TaskStatus } from './task-status.enum';

export enum ActionTypes {
  AddTask = '[Task] AddTask',
  DeleteTask = '[Task] DeleteTask',
  MoveTask = '[Task] MoveTask' 
}

export class AddTask implements Action {
  readonly type = ActionTypes.AddTask;
  constructor(public payload: Task) {}
}

export class DeleteTask implements Action {
  readonly type = ActionTypes.DeleteTask;
  constructor(public payload: Task) {}
}

export class MoveTask implements Action {
  readonly type = ActionTypes.MoveTask;
  constructor(public payload: {
    id: string;
    previousIndex: number;
    previousStatus: TaskStatus;
    currentIndex: number;
    currentStatus: TaskStatus
  }) {}
}

export type Actions =
  | AddTask
  | DeleteTask
  | MoveTask;
