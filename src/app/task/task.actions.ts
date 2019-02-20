import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Task } from './task.interface';

export enum ActionTypes {
  AddTask = '[Task] AddTask',
  DeleteTask = '[Task] DeleteTask',
  UpdateTask = '[Task] UpdateTask'
}

export class AddTask implements Action {
  readonly type = ActionTypes.AddTask;
  constructor(public payload: Task) {}
}

export class DeleteTask implements Action {
  readonly type = ActionTypes.DeleteTask;
  constructor(public payload: Task['id']) {}
}

export class UpdateTask implements Action {
  readonly type = ActionTypes.UpdateTask;
  constructor(public payload: Update<Task>) {}
}

export type Actions =
  | AddTask
  | DeleteTask
  | UpdateTask;
