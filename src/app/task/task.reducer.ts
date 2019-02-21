import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Task } from './task.interface';
import { TaskStatus } from './task-status.enum';
import { Actions, ActionTypes } from './task.actions';
import uuid from 'uuid/v4';

export interface State extends EntityState<Task> {
  order: {
    [Key in TaskStatus]: Array<Task['id']>;
  };
}

export const adapter: EntityAdapter<Task> = createEntityAdapter<Task>({});

export const initialState: State = adapter.getInitialState({
  order: {
    [TaskStatus.TODO]: [],
    [TaskStatus.PENDING]: [],
    [TaskStatus.COMPLETE]: []
  }
});

const filterById = (payloadId) => (id) => id !== payloadId;

export function reducer(
  state = initialState,
  action: Actions
): State {
  switch (action.type) {
    case ActionTypes.AddTask:
      const id = uuid();
      return adapter.addOne({
        ...action.payload,
        id
      }, {
        ...state,
        order: {
          ...state.order,
          // Add to ordering
          [action.payload.status]: [...state.order[action.payload.status], id]
        }
      });
    case ActionTypes.DeleteTask:
      return adapter.removeOne(action.payload.id, {
        ...state,
        order: {
          ...state.order,
          // Cleanup any ordering data
          [action.payload.status]: state.order[action.payload.status].filter(filterById(action.payload.id))
        }
      });
    case ActionTypes.MoveTask:
      // Remove from previous status
      const order = {
        ...state.order,
        [action.payload.previousStatus]: state.order[action.payload.previousStatus].filter(filterById(action.payload.id))
      };

      // Insert the new order
      order[action.payload.currentStatus].splice(action.payload.currentIndex, 0, action.payload.id);

      return adapter.updateOne({
        id: action.payload.id,
        changes: {
          status: action.payload.currentStatus
        }
      }, {
        ...state,
        order
      });
    default: {
      return state;
    }
  }
}
