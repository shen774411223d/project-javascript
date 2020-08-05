import React, { useEffect, useState } from 'react'
import mockData from './mockData'
import {curry, compose, map, prop} from 'ramda'

const fetchData = curry((callback, url) => {
  return callback(mockData(url))
})

const url = (u) => (`static/${u}`)

const Curry = () => {
  const [imgList, setImgList] = useState([])

  const recevice = (data) => {
    console.log(data, 'final data')
    setImgList(data)
  }



  useEffect(() => {
    const srcs = compose(prop('img'), prop('details'))
    const maps = compose(map(srcs), prop('result'))
    const renders = compose(recevice, maps)
    const run = compose(fetchData(renders), url)
    run('city/beijing')
  }, [])


  return (
    <div>
      <p>curry</p>
      <h1>{imgList.length}</h1>
      <div>
        {imgList.map(text => <div key={text}>{text}</div>)}
      </div>
    </div>
  )
}

export default Curry