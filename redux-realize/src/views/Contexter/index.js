import React, { useState } from 'react'
import './index.css'
const Contexter = (props) => {
  const [num, setNum] = useState(0)
  const handle = () => {
    setNum(num + 1)
    console.log(num)
  }
  return (
    <div className="position-view">
      {props.index}
      <button onClick={handle}>tap--{num}</button>
      <div className="item-view">
        <p className="header">11111</p>
        <p>dakkkkkkkk</p>
        <p>dakkkkkkkk</p>
        <p>dakkkkkkkk</p>
        <p>dakkkkkkkk</p>
        <p>dakkkkkkkk</p>
        <p>dakkkkkkkk</p>
      </div>
      <div className="item-view">
        <p className="header">22222</p>
        <p>dakkkkkkkk</p>
        <p>dakkkkkkkk</p>
        <p>dakkkkkkkk</p>
        <p>dakkkkkkkk</p>
        <p>dakkkkkkkk</p>
        <p>dakkkkkkkk</p>
      </div>
      <div className="item-view">
        <p className="header">33333</p>
        <p>dakkkkkkkk</p>
        <p>dakkkkkkkk</p>
        <p>dakkkkkkkk</p>
        <p>dakkkkkkkk</p>
        <p>dakkkkkkkk</p>
        <p>dakkkkkkkk</p>
      </div>
    </div>
  )
}


export default Contexter