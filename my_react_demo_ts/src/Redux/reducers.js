import { createReducer } from 'typesafe-actions'
import { setCount } from './actions'

export const count = createReducer(0).handleAction(
  setCount.success,
  (state, action) => {
    return action.payload
  }
).handleAction(
  setCount.failure,
  (state, action) => {
    return 0
  }
)
