import React, { Component, createContext } from 'react'
import { useParams } from 'react-router-dom'
import './index.css'
const Contexter = (props) => {
  const params = useParams()
  console.log(params, 'params')
  return (
    <div className="position-view">
      {props.index}
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