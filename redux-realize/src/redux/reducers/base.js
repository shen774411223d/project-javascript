
export const base = (state = {
  msg: 'store defaultValue!',
  num: 0
}, action) => {
  switch(action.type) {
    case 'SET_BASE_MSG':
      return {...state, msg: action.payload}
    case 'SET_BASE_NUM':
      return {...state, num: action.payload}
    default:
      return state
  }
}
