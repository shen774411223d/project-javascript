import { of } from 'rxjs'
import { filter, map, mapTo, switchMap, catchError } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { setCount } from './actions'


export const countEpic = (action$, state$) => 
  action$.pipe(
    filter(isActionOf(setCount.request)),
    switchMap(action => {
      console.log(state$.value.count, state$)
      if(state$.value.count >= 10) {
        throw 'error!'
      }
      const newCount = state$.value.count + action.payload
      return of(setCount.success(newCount))
    }),
    catchError(message => {
      console.log(message)
      return of(setCount.failure())
    })
  )