import { createAsyncAction } from 'typesafe-actions'

export const setCount = createAsyncAction(
  'count/SET_COUNT_REQUEST',
  'count/SET_COUNT_SUCCESS',
  'count/SET_COUNT_FAILURE',
  'count/SET_COUNT_CANCEL',
)()