class MyPromise {
  static PENDING = 'PENDING'
  static FULFILLED = 'FULFILLED'
  static REJECTED = 'REJECTED'

  constructor(handler) {
    if(typeof handler !== 'function') {
      throw Error('not a function!')
    }
    this.resolveEventList = []
    this.rejectEventLIst = []
    this.status = MyPromise.PENDING

    handler(this._resolve.bind(this), this._reject.bind(this))
  }

  _resolve(successVal) {
    setTimeout(() => {
      if(this.status !== MyPromise.PENDING) return
      this.status = MyPromise.FULFILLED
      let handler
      while (handler = this.resolveEventList.shift()) {
        handler(successVal)
      }
    })
  }

  _reject(errorVal) {
    window.addEventListener('message', () => {
      if(this.status !== MyPromise.PENDING) return
      this.status = MyPromise.REJECTED
      let handler
      while (handler = this.rejectEventLIst.shift()) {
        handler(errorVal)
      }
    })
    window.postMessage('')
  }

  then(resolveFn, rejectFn) {
    return new MyPromise((resolve, reject) => {
      function _resolve(data) {
        const result = resolveFn(data)
        resolve(result)
      }
      function _reject(error) {
        const e = rejectFn(error)
        reject(e)
      }
      if(typeof resolveFn === 'function') {
        this.resolveEventList.push(_resolve)
      }
      if(typeof rejectFn === 'function') {
        this.rejectEventLIst.push(_reject)
      }
    })
  }
}


export default MyPromise