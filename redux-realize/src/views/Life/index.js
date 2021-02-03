import React, { useEffect, useState, useCallback } from 'react'
import './index.css'
import toast from '../../plugins'

const Life = (props) => {
  const t = toast.getInitance()
  console.log(t.getName())
  const [state, setState] = useState(0)
  const [show, setShow] = useState(false)
  const clientRef = useCallback(node => {
    if(node != null) {
      console.log(node.getBoundingClientRect())
      setState(node.getBoundingClientRect().top)
    }
  })
  const handleScroll = () => {
    console.log(state)
  }
  useEffect(() => {
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('resize', handleScroll)
    }
  }, [handleScroll])
  return (
    <div>
      <button onClick={() => setShow(true)}>show</button>
      {show && <div className="life-view"></div>}
      <div ref={clientRef}>test:{state}</div>
    </div>
  )
}


export default Life