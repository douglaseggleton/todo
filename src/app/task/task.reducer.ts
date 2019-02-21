import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Task } from './task.interface';
import { Actions, ActionTypes } from './task.actions';
import uuid from 'uuid/v4';

export interface State extends EntityState<Task> {
  order: Array<Task['id']>;
}

export const adapter: EntityAdapter<Task> = createEntityAdapter<Task>({});

export const initialState: State = adapter.getInitialState({
  order: []
});

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
    case ActionTypes.DeleteTask:
      return adapter.removeOne(action.payload, state);
    case ActionTypes.UpdateTask:
      return adapter.updateOne(action.payload, state);
    case ActionTypes.UpdateOrder:
      const currentIndex = state.order.indexOf(action.payload.id);
      const order = state.order.slice(0); // Grab a copy of the array
      if (currentIndex > -1) {
        order.splice(currentIndex, 1);
      }
      order.splice(action.payload.order, 0, action.payload.id);
      return {
        ...state,
        order
      }
    default: {
      return state;
    }
  }
}
