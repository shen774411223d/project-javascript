import React, { useEffect, useState } from 'react'
const Life = (props) => {
  const [state, setState] = useState(0)
  useEffect(() => {
    console.log('load')
  })
  const handleState = () => {
    setState(state + 1)
    setTimeout(() => {
      console.log(state)
    }, 0)
  }
  return (
    <div>
      <p>life state: {state}</p>
      <button onClick = { handleState }>change state</button>
    </div>
  )
}


export default Life