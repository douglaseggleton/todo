import { Action } from '@ngrx/store';
import { Task } from './task.interface';

export enum ActionTypes {
  AddTask = '[Task] AddTask',
  DeleteTask = '[Task] DeleteTask'
}

export class AddTask implements Action {
  readonly type = ActionTypes.AddTask;
  constructor(public payload: Task) {}
}

export class DeleteTask implements Action {
  readonly type = ActionTypes.DeleteTask;
  constructor(public payload: Task['id']) {}
}

export type Actions =
  | AddTask
  | DeleteTask;
