import React, { useEffect, useState } from 'react'
const Life = (props) => {
  const [state, setState] = useState(0)
  useEffect(() => {
    console.log('load')
  })
  const handleState = () => {
    setState(state)
  }
  return (
    <div>
      <p>life state: {state}</p>
      <button onClick = { handleState }>change state</button>
    </div>
  )
}


export default Life