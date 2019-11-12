import { combineReducers } from 'redux'

function msg(state = 'store defaultValue!', action) {
  switch(action.type) {
    case 'SET_BASE_MSG':
      return action.payload
    default:
      return state
  }
}

function num(state = 0, action) {
  switch(action.type) {
    case 'SET_BASE_NUM':
      return action.payload
    default:
      return state
  }
}

export const base = combineReducers({
  msg,
  num
})
