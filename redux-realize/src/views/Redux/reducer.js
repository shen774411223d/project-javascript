const initState = {
  count: 0
}

export const reducer = (state = initState, action) => {
  switch(action.type) {
    case 'ADD_COUNT':
      return {
        ...state,
        count: action.payload
      }
    case 'SET_MSG':
      return {
        ...state,
        msg: action.payload
      }
    default:
      return state
  }
}