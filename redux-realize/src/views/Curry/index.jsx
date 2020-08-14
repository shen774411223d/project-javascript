import React, { useEffect, useState } from 'react'
import { fetchData, url } from './utils'
import {curry, compose, map, prop} from 'ramda'

const Curry = () => {
  const [imgList, setImgList] = useState([])

  const recevice = (data) => {
    console.log(data, 'final data')
    setImgList(data)
  }

  useEffect(() => {
    const fs = new Io(function() {return window})
    const app = compose(fs.receviceData, fs.getValue.bind(fs))
    app()
  }, [])

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