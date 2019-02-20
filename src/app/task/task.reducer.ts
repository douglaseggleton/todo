import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Task } from './task.interface';
import { Actions, ActionTypes } from './task.actions';
import uuid from 'uuid/v4';

export interface State extends EntityState<Task> {
}

export const adapter: EntityAdapter<Task> = createEntityAdapter<Task>({});

export const initialState: State = adapter.getInitialState({});

export function reducer(
  state = initialState,
  action: Actions
): State {
  switch (action.type) {
    case ActionTypes.AddTask:
      return adapter.addOne({
        ...action.payload,
        id: uuid()
      }, {
        ...state
      });
    default: {
      return state;
    }
  }
}