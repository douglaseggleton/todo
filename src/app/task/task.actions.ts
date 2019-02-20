import { Action } from '@ngrx/store';
import { Task } from './task.interface';

export enum ActionTypes {
  AddTask = '[Task] AddTask'
}

export class AddTask implements Action {
  readonly type = ActionTypes.AddTask;
  constructor(public payload: Task) {}
}

export type Actions =
  | AddTask