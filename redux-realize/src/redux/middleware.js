export const logger = store => next => action => {
  console.log('pre dispatch', action)
  const result = next(action)
  console.log('next dispatch', store.getState())
  return result
}

const createThunkMiddleware = (extraArguments) => {
  return ({ dispatch, getState }) => next => action => {
    if(typeof action !== 'function') {
      return next(action)
    }
    return action(dispatch, getState, extraArguments)
  }
}

export const thunk = createThunkMiddleware()