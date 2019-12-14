import { Context, createContext } from 'react'

export interface ConType {
  count: number
  admin: {name: string, sex: string, age: number}
}

interface ActionType {
  type: string
  payload: any
  [key: string]: any
}

export const TestContext: Context<any> = createContext(null)

export const defaultValue: ConType = {
  count: 100,
  admin: {
    name: 'jack',
    sex: 'male',
    age: 20
  }
}

export const reducers = function(state: ConType, action: ActionType) {
  switch(action.type) {
    case 'CHANGE_COUNT':
      return { ...state, count: action.payload }
    default:
      return state
  }
}