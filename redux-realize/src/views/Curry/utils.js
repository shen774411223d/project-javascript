import mockData from './mockData'
import {curry} from 'ramda'

export const fetchData = curry((callback, url) => {
  return callback(mockData(url))
})

export const url = (u) => (`static/${u}`)