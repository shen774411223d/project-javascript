export const logger = store => next => action => {
  console.log('logger 1')
  const result = next(action)
  console.log('logger 1 state', store.getState())
  return result
}

export const logger2 = store => next => action => {
  console.log('logger 2')
  const result = next(action)
  console.log('logger 2 state', store.getState())
  return result
}

export const thunk = store => next => action => {
  const {dispatch, getState} = store
  return typeof action === 'function'?
    action(dispatch, getState) : next(action)
}