import React, {useEffect} from 'react'
import { Requeue, Chain } from './utils'

const Data = () => {

  useEffect(() => {
    try {
      const c = new Chain()
      c.insert({name: 'jack'})
      c.insert({name: 'rose'})
      c.insert({name: 'test name'})
      console.log(c)
    }catch(e) {
      console.error(e)
    }
   
  }, [])

  return (
    <div>
      <p>Data</p>
    </div>
  )
}

export default Data
